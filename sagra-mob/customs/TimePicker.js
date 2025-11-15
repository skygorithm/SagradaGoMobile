import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/users/TimePickerStyle';

export default function TimePicker({ value, onValueChange, disabled = false }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedHour, setSelectedHour] = useState(value ? new Date(value).getHours() : 9);
  const [selectedMinute, setSelectedMinute] = useState(value ? new Date(value).getMinutes() : 0);
  const [selectedPeriod, setSelectedPeriod] = useState(value ? (new Date(value).getHours() >= 12 ? 'PM' : 'AM') : 'AM');

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const formatTime = (hour, minute, period) => {
    const hourStr = hour.toString().padStart(2, '0');
    const minuteStr = minute.toString().padStart(2, '0');
    return `${hourStr}:${minuteStr} ${period}`;
  };

  const handleConfirm = () => {
    let hour24 = selectedHour;
    if (selectedPeriod === 'PM' && selectedHour !== 12) {
      hour24 = selectedHour + 12;
      
    } else if (selectedPeriod === 'AM' && selectedHour === 12) {
      hour24 = 0;
    }

    const date = new Date();
    date.setHours(hour24);
    date.setMinutes(selectedMinute);
    date.setSeconds(0);

    onValueChange(date);
    setShowModal(false);
  };

  const displayValue = value 
    ? formatTime(
        value.getHours() > 12 ? value.getHours() - 12 : (value.getHours() === 0 ? 12 : value.getHours()),
        value.getMinutes(),
        value.getHours() >= 12 ? 'PM' : 'AM'
      )
    : 'Select Time';

  return (
    <View>
      <TouchableOpacity
        style={[styles.inputContainer, disabled && { opacity: 0.6 }]}
        onPress={() => !disabled && setShowModal(true)}
        disabled={disabled}
      >
        <Ionicons name="time-outline" size={20} color="#999" style={{ marginRight: 10 }} />
        <Text style={[styles.inputText, !value && styles.placeholderText]}>
          {displayValue}
        </Text>
        <Ionicons name="chevron-down-outline" size={20} color="#999" />
      </TouchableOpacity>

      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.timePickerModalOverlay}>
          <View style={styles.timePickerModalContent}>
            <View style={styles.timePickerHeader}>
              <Text style={styles.timePickerTitle}>Select Time</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>

            <View style={styles.timePickerBody}>
              <ScrollView style={styles.timePickerScroll}>
                <View style={styles.timePickerRow}>
                  <View style={styles.timePickerColumn}>
                    <Text style={styles.timePickerLabel}>Hour</Text>
                    <ScrollView style={styles.timePickerList}>
                      {hours.map((hour) => (
                        <TouchableOpacity
                          key={hour}
                          style={[
                            styles.timePickerItem,
                            selectedHour === hour && styles.timePickerItemSelected
                          ]}
                          onPress={() => setSelectedHour(hour)}
                        >
                          <Text style={[
                            styles.timePickerItemText,
                            selectedHour === hour && styles.timePickerItemTextSelected
                          ]}>
                            {hour.toString().padStart(2, '0')}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>

                  <View style={styles.timePickerColumn}>
                    <Text style={styles.timePickerLabel}>Minute</Text>
                    <ScrollView style={styles.timePickerList}>
                      {minutes.filter((_, i) => i % 5 === 0).map((minute) => (
                        <TouchableOpacity
                          key={minute}
                          style={[
                            styles.timePickerItem,
                            selectedMinute === minute && styles.timePickerItemSelected
                          ]}
                          onPress={() => setSelectedMinute(minute)}
                        >
                          <Text style={[
                            styles.timePickerItemText,
                            selectedMinute === minute && styles.timePickerItemTextSelected
                          ]}>
                            {minute.toString().padStart(2, '0')}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>

                  <View style={styles.timePickerColumn}>
                    <Text style={styles.timePickerLabel}>Period</Text>
                    <ScrollView style={styles.timePickerList}>
                      {['AM', 'PM'].map((period) => (
                        <TouchableOpacity
                          key={period}
                          style={[
                            styles.timePickerItem,
                            selectedPeriod === period && styles.timePickerItemSelected
                          ]}
                          onPress={() => setSelectedPeriod(period)}
                        >
                          <Text style={[
                            styles.timePickerItemText,
                            selectedPeriod === period && styles.timePickerItemTextSelected
                          ]}>
                            {period}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                </View>
              </ScrollView>
            </View>

            <View style={styles.timePickerFooter}>
              <TouchableOpacity
                style={styles.timePickerCancelButton}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.timePickerCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.timePickerConfirmButton}
                onPress={handleConfirm}
              >
                <Text style={styles.timePickerConfirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

