import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
    padding: 20,
  },

  header: {
    marginTop: 40,
    marginBottom: 20,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    marginBottom: 8,
  },

  subtitle: {
    marginBottom: 20,
  },

  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  filterButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  bookingsContainer: {
    marginBottom: 20,
  },

  bookingCard: {
    padding: 16,
    marginBottom: 12,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  cardHeaderLeft: {
    flex: 1,
  },

  sacramentName: {
    marginBottom: 4,
  },

  cardDivider: {
    height: 1,
    marginVertical: 12,
  },

  cardDetails: {
    marginTop: 4,
  },

  detailRow: {
    marginBottom: 8,
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },

  emptyText: {
    marginTop: 16,
    textAlign: 'center',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalOverlayTouchable: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  modalContent: {
    width: '90%',
    maxWidth: 400,
    maxHeight: '80%',
    padding: 20,
    backgroundColor: '#e8e8e8',
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  modalTitle: {
    flex: 1,
    marginRight: 16,
  },

  modalCloseButton: {
    padding: 4,
    minWidth: 32,
    minHeight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalDivider: {
    height: 1,
    marginVertical: 12,
  },

  modalScrollView: {
    maxHeight: 400,
  },

  modalDetails: {
    paddingVertical: 4,
  },

  modalDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },

  modalLabel: {
    flex: 1,
  },

  modalValue: {
    flex: 1,
    textAlign: 'right',
  },

  modalNotesContainer: {
    paddingVertical: 8,
  },

  modalNotes: {
    marginTop: 8,
  },
});

export default styles;

