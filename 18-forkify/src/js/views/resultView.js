import View from "./View.js";
import previewView from "./previewView.js";

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again 😣';
  _message = '';

  _generateMarkUp() {
    console.log(this._data);
    // setting render method to false triggers the markup guard clause in View.js
    return this._data.map(result => previewView.render(result, false)).join(''); // returns a string
  }
  // _generateMarkUp() {
  //   return this._data.map(this._generateMarkUpPreview).join('');
  // }

  // _generateMarkUpPreview(result) {
  //   const id = window.location.hash.slice(1);

  //   return `
  //     <li class="preview">
  //       <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
  //         <figure class="preview__fig">
  //           <img src="${result.img}" alt="${result.title}" />
  //         </figure>
  //         <div class="preview__data">
  //           <h4 class="preview__title">${result.title}</h4>
  //           <p class="preview__publisher">${result.publisher}</p>
  //         </div>
  //       </a>
  //     </li>
  //   `;
  // }
}

export default new ResultView();
