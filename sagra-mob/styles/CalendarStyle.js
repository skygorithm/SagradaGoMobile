import { StyleSheet, Dimensions } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CALENDAR_WIDTH = SCREEN_WIDTH - 40;
const DAY_WIDTH = CALENDAR_WIDTH / 7;

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  navButton: {
    padding: 6,
    borderRadius: 8,
  },
  monthYearContainer: { flex: 1, alignItems: 'center' },
  monthYearText: { fontSize: 18, fontWeight: '600', color: '#333', fontFamily: 'Poppins_600SemiBold' },
  weekDaysContainer: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingHorizontal: 0,
    width: '100%',
  },
  weekDay: {
    width: DAY_WIDTH,
    alignItems: 'center',
    paddingVertical: 4,
  },
  weekDayText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    fontFamily: 'Poppins_600SemiBold',
    textTransform: 'uppercase'
  },
  daysContainer: { flexDirection: 'row', flexWrap: 'wrap' },

  dayContainer: {
    width: DAY_WIDTH,
    height: DAY_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    borderRadius: 8,
    position: 'relative',
  },

  dayText: { fontSize: 16, color: '#333', fontFamily: 'Poppins_400Regular' },
  otherMonthDay: { opacity: 0.3 },
  otherMonthText: { color: '#999' },
  selectedDay: { backgroundColor: '#a8862fff', borderRadius: 8 },
  selectedDayText: { color: '#ffffff', fontWeight: '600', fontFamily: 'Poppins_600SemiBold' },
  todayDay: { backgroundColor: '#f5f5f5', borderWidth: 2, borderColor: '#a8862fff' },
  todayText: { color: '#a8862fff', fontWeight: '600', fontFamily: 'Poppins_600SemiBold' },
  disabledDay: { opacity: 0.3 },
  disabledText: { color: '#ccc' },
  markedDot: { position: 'absolute', bottom: 4, width: 6, height: 6, borderRadius: 3, backgroundColor: '#a8862fff' },

  eventBadge: {
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 1,
    marginVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
  },
  eventBadgeText: {
    fontSize: 10,
    color: '#424242',
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: 'red',
    marginVertical: -10,
  },

});

export default styles;
