import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  PanResponder,
  Dimensions,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  Modal,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/users/VirtualTourStyle';
import CustomNavbar from '../../customs/CustomNavbar';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const IMAGE_WIDTH = SCREEN_WIDTH * 3;

export default function VirtualTourScreen({ user, onNavigate }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [panProgress, setPanProgress] = useState(50); // 0-100% progress indicator
  const initialOffset = -SCREEN_WIDTH;
  const translateX = useRef(new Animated.Value(initialOffset)).current;
  const currentPosition = useRef(initialOffset);
  const panStartPosition = useRef(initialOffset);
  const panResponderRef = useRef(null);
  const progressAnimation = useRef(new Animated.Value(50)).current;

  const tourImages = [
    {
      id: 'facade',
      name: 'Facade',
      image: require('../../assets/360facade.jpg'),
      description: 'The magnificent facade of the Sagrada Familia Parish showcases stunning architectural details and intricate designs. This grand entrance welcomes visitors with its beautiful stonework and traditional church architecture.',
    },
    {
      id: 'altar',
      name: 'Altar',
      image: require('../../assets/360altar.jpg'),
      description: 'The sacred altar is the heart of our parish, where the Holy Eucharist is celebrated. This sacred space is beautifully adorned and serves as the focal point for worship and prayer, creating a reverent atmosphere for all who visit.',
    },
    {
      id: 'pews',
      name: 'Pews',
      image: require('../../assets/360pews.jpg'),
      description: 'The pews area provides a peaceful space for congregation members to gather for Mass and prayer. The carefully arranged seating creates a sense of community and togetherness during worship services.',
    },
  ];

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      translateX.stopAnimation((value) => {
        panStartPosition.current = value;
        currentPosition.current = value;

        translateX.setOffset(value);
        translateX.setValue(0);
      });
    },

    onPanResponderMove: (evt, gestureState) => {
      const maxTranslate = 0;
      const minTranslate = -SCREEN_WIDTH * 2;

      const newPosition = panStartPosition.current - gestureState.dx;
      const clampedPosition = Math.max(minTranslate, Math.min(maxTranslate, newPosition));

      translateX.setValue(clampedPosition - panStartPosition.current);

      const progress = ((clampedPosition - minTranslate) / (maxTranslate - minTranslate)) * 100;
      setPanProgress(progress);
      progressAnimation.setValue(progress);
    },

    onPanResponderRelease: (evt, gestureState) => {
      const maxTranslate = 0;
      const minTranslate = -SCREEN_WIDTH * 2;

      const finalPosition = panStartPosition.current - gestureState.dx;
      const clampedFinal = Math.max(minTranslate, Math.min(maxTranslate, finalPosition));

      translateX.flattenOffset();
      currentPosition.current = clampedFinal;
      translateX.setValue(clampedFinal);

      const progress = ((clampedFinal - minTranslate) / (maxTranslate - minTranslate)) * 100;
      setPanProgress(progress);
      Animated.timing(progressAnimation, {
        toValue: progress,
        duration: 100,
        useNativeDriver: false,
      }).start();
    },
  });

  if (!panResponderRef.current) {
    panResponderRef.current = panResponder;
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => {
      const nextIndex = (prev + 1) % tourImages.length;
      setIsLoading(true);
      setImageLoaded(false);
      currentPosition.current = initialOffset;
      setPanProgress(50);
      progressAnimation.setValue(50);

      Animated.timing(translateX, {
        toValue: initialOffset,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setImageError(false);
      return nextIndex;
    });
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => {
      const prevIndex = (prev - 1 + tourImages.length) % tourImages.length;
      setIsLoading(true);
      setImageLoaded(false);
      currentPosition.current = initialOffset;
      setPanProgress(50);
      progressAnimation.setValue(50);

      Animated.timing(translateX, {
        toValue: initialOffset,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setImageError(false);
      return prevIndex;
    });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const currentImage = tourImages[currentImageIndex];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/sagrada.png')}
            style={{ width: 60, height: 60, alignSelf: 'center' }}
            resizeMode="contain"
          />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.title}>Virtual Tour</Text>
            <Text style={styles.subtitle}>Explore our 360° experience</Text>
          </View>
        </View>

        <View style={styles.tourContainer}>
          <View style={styles.locationHeader}>
            <Text style={styles.locationName}>{currentImage.name}</Text>
            <TouchableOpacity
              style={styles.fullscreenButton}
              onPress={toggleFullscreen}
            >
              <Ionicons name="expand" size={24} color="#424242" />
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer} {...panResponderRef.current.panHandlers}>
            {isLoading && !imageError && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={styles.loadingText}>Loading...</Text>
              </View>
            )}

            {imageError ? (
              <View style={styles.errorContainer}>
                <Ionicons name="alert-circle" size={48} color="#fff" />
                <Text style={styles.errorText}>Failed to load image</Text>
              </View>
            ) : (
              <Animated.View
                style={[
                  styles.panoramaWrapper,
                  {
                    transform: [{ translateX }],
                  },
                ]}
              >
                <Image
                  source={currentImage.image}
                  style={styles.panoramaImage}
                  resizeMode="stretch"
                  onError={() => {
                    console.error('Image load error:', currentImage.name);
                    setImageError(true);
                    setIsLoading(false);
                  }}
                  onLoad={(event) => {
                    console.log('Image loaded:', currentImage.name);
                    const { width, height } = event.nativeEvent.source;
                    console.log('Image dimensions:', width, 'x', height);
                    setImageError(false);
                    setImageLoaded(true);
                    setIsLoading(false);
                  }}
                />
              </Animated.View>
            )}
          </View>

          <View style={styles.instructionContainer}>
            <Ionicons name="hand-left-outline" size={20} color="#666" />
            <Text style={styles.instructionText}>
              Drag left or right to explore the 360° view.
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{currentImage.description}</Text>
          </View>

          <View style={styles.controlsContainer}>
            <TouchableOpacity
              style={styles.navButton}
              onPress={handlePrevImage}
              disabled={isLoading}
            >
              <Ionicons name="chevron-back" size={20} color="#424242" />
              <Text style={styles.navButtonText}>Previous</Text>
            </TouchableOpacity>

            <View style={styles.dotsContainer}>
              {tourImages.map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    if (index !== currentImageIndex) {
                      setCurrentImageIndex(index);
                      setIsLoading(true);
                      setImageLoaded(false);
                      currentPosition.current = initialOffset;
                      setPanProgress(50);
                      progressAnimation.setValue(50);
                      Animated.timing(translateX, {
                        toValue: initialOffset,
                        duration: 300,
                        useNativeDriver: true,
                      }).start();
                    }
                  }}
                >
                  <View
                    style={[
                      styles.dot,
                      index === currentImageIndex && styles.dotActive,
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.navButton}
              onPress={handleNextImage}
              disabled={isLoading}
            >
              <Text style={styles.navButtonText}>Next</Text>
              <Ionicons name="chevron-forward" size={20} color="#424242" />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      <CustomNavbar
        currentScreen="VirtualTourScreen"
        onNavigate={onNavigate}
      />

      <Modal
        visible={isFullscreen}
        animationType="fade"
        transparent={false}
        onRequestClose={toggleFullscreen}
      >
        <StatusBar hidden={isFullscreen} />
        <View style={styles.fullscreenContainer}>
          <TouchableOpacity
            style={styles.closeFullscreenButton}
            onPress={toggleFullscreen}
          >
            <Ionicons name="close" size={32} color="#fff" />
          </TouchableOpacity>
          <View style={styles.fullscreenImageContainer} {...panResponderRef.current.panHandlers}>
            {imageError ? (
              <View style={styles.fullscreenErrorContainer}>
                <Ionicons name="alert-circle" size={64} color="#fff" />
                <Text style={styles.fullscreenErrorText}>Failed to load image</Text>
              </View>
            ) : (
              <Animated.View
                style={[
                  styles.fullscreenPanoramaWrapper,
                  {
                    transform: [{ translateX }],
                  },
                ]}
              >
                <Image
                  source={currentImage.image}
                  style={styles.fullscreenPanoramaImage}
                  resizeMode="stretch"
                />
              </Animated.View>
            )}
          </View>
          <View style={styles.fullscreenControls}>
            <Text style={styles.fullscreenLocationName}>{currentImage.name}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
