import {Person} from './Person.js';

const list = document.querySelector('.list');
const add = document.querySelector('.add');
import {personList} from './data.js';


class AddPhoto {
  constructor({submitForm}) {
    this._submitForm = submitForm;
  }

  _getInputValues() {
    const inputValues = {};
    const inputList = Array.from(add.querySelectorAll('.add-input'));
    inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    add.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues())
      add.reset();
    })
  }
}

const photo = new AddPhoto({
  formSelector: '.template',
  submitForm: (data) => {
    personList.push(data);
    const person = new Person(data);
    const personElement = person.generatePerson();
    list.append(personElement);
  }
});

export {photo};



