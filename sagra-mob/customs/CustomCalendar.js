import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import styles from '../styles/CalendarStyle';

dayjs.extend(isoWeek); 

export default function CustomCalendar({
  selectedDate = null,
  onDateSelect = () => {},
  minDate = null,
  maxDate = null,
  markedDates = [],
  showNavigation = true,
  initialDate = dayjs(),
}) {
  const validInitialDate = dayjs(initialDate).isValid() ? dayjs(initialDate) : dayjs();
  const [currentMonth, setCurrentMonth] = useState(validInitialDate);

  const monthStart = dayjs(currentMonth).startOf('month');
  const monthEnd = dayjs(currentMonth).endOf('month');
  const startDate = monthStart.startOf('isoWeek'); // Monday = first column
  const endDate = monthEnd.endOf('isoWeek');

  const daysInMonth = [];
  let day = startDate;
  while (day.isBefore(endDate) || day.isSame(endDate, 'day')) {
    daysInMonth.push(day);
    day = day.add(1, 'day');
  }

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const goToPreviousMonth = () => setCurrentMonth(dayjs(currentMonth).subtract(1, 'month'));
  const goToNextMonth = () => setCurrentMonth(dayjs(currentMonth).add(1, 'month'));
  const goToToday = () => setCurrentMonth(dayjs());

  const isDateDisabled = (date) => {
    if (minDate && day.isBefore(dayjs(minDate), 'day')) return true;
    if (maxDate && day.isAfter(dayjs(maxDate), 'day')) return true;
    return false;
  };

  const eventsForDate = (date) => markedDates.filter((event) => dayjs(event.date).isSame(date, 'day'));
  const isDateSelected = (date) => selectedDate && dayjs(selectedDate).isSame(date, 'day');
  const isCurrentMonth = (date) => dayjs(date).isSame(currentMonth, 'month');
  const isToday = (date) => dayjs(date).isSame(dayjs(), 'day');

  const handleDatePress = (date) => {
    if (!isDateDisabled(date)) {
      onDateSelect(date.toDate());
    }
  };

  const renderDay = (date, index) => {
    const disabled = isDateDisabled(date);
    const selected = isDateSelected(date);
    const currentMonthDay = isCurrentMonth(date);
    const today = isToday(date);
    const dayEvents = eventsForDate(date);

    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.dayContainer,
          !currentMonthDay && styles.otherMonthDay,
          selected && styles.selectedDay,
          today && !selected && styles.todayDay,
          disabled && styles.disabledDay,
        ]}
        onPress={() => handleDatePress(date)}
        disabled={disabled}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.dayText,
            !currentMonthDay && styles.otherMonthText,
            selected && styles.selectedDayText,
            today && !selected && styles.todayText,
            disabled && styles.disabledText,
          ]}
        >
          {date.format('D')}
        </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 2 }}>
          {dayEvents.map((event, idx) => {
            let backgroundColor;

            if ((event.status || '').toLowerCase() === 'confirmed') {
              backgroundColor = '#52c41a';

            } else {
              switch (event.type) {
                case 'Wedding': backgroundColor = '#52c41a'; break;
                case 'Baptism': backgroundColor = '#1890ff'; break;
                case 'Burial': backgroundColor = '#f5222d'; break;
                case 'Communion': backgroundColor = '#faad14'; break;
                case 'Confirmation': backgroundColor = '#1890ff'; break;
                default: backgroundColor = '#d9d9d9'; break;
              }
            }

            return (
              <TouchableOpacity
                key={idx}
                style={[styles.eventBadge, { backgroundColor }]}
                onPress={() => onDateSelect(event)}
                activeOpacity={0.7}
              >
                <Text style={styles.eventBadgeText} numberOfLines={1}>
                  {event.type}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.calendarContainer}>
      {showNavigation && (
        <View style={styles.header}>
          <TouchableOpacity onPress={goToPreviousMonth} style={styles.navButton} activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={24} color="#a8862fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={goToToday} style={styles.monthYearContainer} activeOpacity={0.7}>
            <Text style={styles.monthYearText}>{currentMonth.format('MMMM YYYY')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToNextMonth} style={styles.navButton} activeOpacity={0.7}>
            <Ionicons name="chevron-forward" size={24} color="#a8862fff" />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.weekDaysContainer}>
        {weekDays.map((day, index) => (
          <View key={index} style={styles.weekDay}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.daysContainer}>
        {daysInMonth.map((date, index) => renderDay(date, index))}
      </View>
    </View>
  );
}
