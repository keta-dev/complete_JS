import View from "./View.js";
import previewView from "./previewView.js";

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again 😣';
  _message = '';

  _generateMarkUp() {
    // setting render method to false triggers the markup guard clause in View.js
    return this._data.map(result => previewView.render(result, false)).join(''); // returns a string
  }
}

export default new ResultView();
