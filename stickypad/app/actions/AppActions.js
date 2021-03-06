import AppDispatcher from '../dispatchers/AppDispatcher';
import AppConstants from '../constants/AppConstants';

class AppActions {
  static addNote(note) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_NOTE,
      note: note
    });
  }
  static removeNote(noteId) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.REMOVE_NOTE,
      noteId: noteId
    });
  }
  static receiveNotes(notes) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.RECEIVE_NOTES,
      notes: notes
    });
  }
}

export default AppActions;
