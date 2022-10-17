import View from "./View.js";
import previewView from "./previewView.js";

class BookMarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it 🤪';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkUp() {
    // setting render method to false triggers the markup guard clause in View.js
    return this._data.map(bookmark => previewView.render(bookmark, false)).join(''); // returns a string
  }
}

export default new BookMarkView();
