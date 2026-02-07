import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Image,
  Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import dayjs from 'dayjs';
import styles from '../../styles/users/BookingStyle';
import CustomNavbar from '../../customs/CustomNavbar';
import CustomPicker from '../../customs/CustomPicker';
import { Ionicons } from "@expo/vector-icons";
import CustomBookingForm from '../../customs/CustomBookingForm';
import { useAuth } from '../../contexts/AuthContext';
import { sacramentRequirements } from '../../utils/sacramentRequirements';

const getMinimumBookingDateDisplay = (sacrament) => {
  const today = dayjs();
  let minDate;
  
  switch (sacrament) {
    case 'Baptism':
    case 'Wedding':
      minDate = today.add(2, 'months');
      break;
    case 'Burial':
      minDate = today.add(1, 'week');
      break;
    case 'First Communion':
    case 'Confession':
    case 'Anointing of the Sick':
    case 'Confirmation':
      minDate = today.add(1, 'day');
      break;
    default:
      minDate = today;
  }
  
  return minDate.format('MMMM D, YYYY');
};

const sacraments = [
  { name: 'Wedding', minDate: getMinimumBookingDateDisplay('Wedding') },
  { name: 'Baptism', minDate: getMinimumBookingDateDisplay('Baptism') },
  { name: 'Confession', minDate: getMinimumBookingDateDisplay('Confession') },
  { name: 'Anointing of the Sick', minDate: getMinimumBookingDateDisplay('Anointing of the Sick') },
  { name: 'First Communion', minDate: getMinimumBookingDateDisplay('First Communion') },
  { name: 'Burial', minDate: getMinimumBookingDateDisplay('Burial') },
  { name: 'Confirmation', minDate: getMinimumBookingDateDisplay('Confirmation') },
];

export default function BookingScreen({ user: userProp, onNavigate }) {
  const { user: authUser } = useAuth();
  const user = authUser || userProp;
  const [selectedSacrament, setSelectedSacrament] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false);
  const [bookingSacrament, setBookingSacrament] = useState(null);

  const handleRequirements = (sacramentName) => {
    setSelectedSacrament(sacramentName);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedSacrament(null);
  };

  const [isMiddleNameModalVisible, setIsMiddleNameModalVisible] = useState(false);

  const handleBookNow = (sacramentName) => {
    if (sacramentName === 'Baptism') {
      if (!user) {
        Alert.alert(
          'Error',
          'User information not available. Please try again.',
          [{ text: 'OK' }]
        );
        return;
      }

      const middleName = user.middle_name;
      if (!middleName || middleName.trim() === '') {
        // Alert.alert(
        //   'Middle Name Required',
        //   'A middle name is required to book a Baptism. Please update your profile with your middle name before proceeding.',
        //   [
        //     {
        //       text: 'Go to Profile',
        //       onPress: () => {
        //         if (onNavigate) {
        //           onNavigate('ProfileScreen');
        //         }
        //       },
        //       style: 'default'
        //     },
        //     {
        //       text: 'Cancel',
        //       style: 'cancel'
        //     }
        //   ]
        // );
        // return;
        setIsMiddleNameModalVisible(true);
        return;
      }
    }

    setBookingSacrament(sacramentName);
    setIsBookingModalVisible(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalVisible(false);
    setBookingSacrament(null);
  };

  const filteredSacraments = useMemo(() => {
    return sacraments.sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/sagrada.png')}
            style={{ width: 100, height: 100, marginBottom: 10, alignSelf: 'center' }}
            resizeMode="contain"
          />
          <Text style={styles.title}>Select a Sacrament</Text>
          <Text style={styles.subtitle}>Click a card to view its requirements.</Text>
        </View>

        <View style={styles.content}>
          {filteredSacraments.length > 0 ? (
            filteredSacraments.map((sacrament, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={styles.sacramentCard}
                  onPress={() => handleRequirements(sacrament.name)}
                  activeOpacity={0.8}
                >
                  <View style={styles.sacramentInfo}>
                    <Text style={styles.sacramentName}>{sacrament.name}</Text>

                    <View style={styles.minBookingRow}>
                      <Ionicons name="calendar-outline" size={18} color="#e0a40dff" />
                      <Text style={styles.minBookingText}>{sacrament.minDate}</Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.bookIconButton}
                    onPress={() => handleBookNow(sacrament.name)}
                  >
                    <Ionicons name="arrow-forward-circle-outline" size={32} color="#424242" />
                  </TouchableOpacity>
                </TouchableOpacity>

                {index < filteredSacraments.length - 1 && <View style={styles.spacer} />}
              </View>
            ))
          ) : (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>
                No sacraments found.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <CustomNavbar
        currentScreen="BookingScreen"
        onNavigate={onNavigate}
      />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={closeModal}
        >
          <View
            style={styles.modalContent}
            onStartShouldSetResponder={() => true}
          >
            <Text style={styles.modalTitle}>
              {selectedSacrament} Requirements
            </Text>
            <Text style={[styles.subtitle, { fontSize: 13, textAlign: 'center' }]}>Please complete the following requirements:</Text>

            <ScrollView style={styles.requirementsList}>
              {selectedSacrament &&
                sacramentRequirements[selectedSacrament]?.map((req) => (
                  <View key={req.id} style={styles.requirementCard}>
                    <Ionicons name="checkmark-circle-outline" size={22} color="#e0a40dff" />
                    <Text style={styles.requirementCardText}>{req.label}</Text>
                  </View>
                ))}
            </ScrollView>


            <TouchableOpacity
              style={styles.closeButton}
              onPress={closeModal}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <CustomBookingForm
        visible={isBookingModalVisible}
        onClose={handleCloseBookingModal}
        selectedSacrament={bookingSacrament}
      />

      <Modal
        visible={isMiddleNameModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsMiddleNameModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsMiddleNameModalVisible(false)}
        >
          <View
            style={styles.modalContent}
            onStartShouldSetResponder={() => true}
          >
            <Text style={styles.modalTitle}>Middle Name Required</Text>

            <Text style={[styles.subtitle, { fontSize: 15, textAlign: 'center', marginBottom: 10 }]}>
              A middle name is required to book a Baptism.
              Please update your profile with your middle name before proceeding.
            </Text>

            <View style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
              <TouchableOpacity
                style={[
                  styles.closeButton,
                  {
                    flex: 1,
                    width: 'auto',
                    marginRight: 8,
                  }
                ]}
                onPress={() => {
                  setIsMiddleNameModalVisible(false);
                  if (onNavigate) {
                    onNavigate('ProfileScreen');
                  }
                }}
              >
                <Text style={styles.closeButtonText}>Go to Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.closeButton,
                  {
                    flex: 1,
                    width: 'auto',
                    marginLeft: 8,
                    backgroundColor: '#ccc',
                  }
                ]}
                onPress={() => setIsMiddleNameModalVisible(false)}
              >
                <Text style={[styles.closeButtonText, { color: '#333' }]}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

    </View>
  );
}

