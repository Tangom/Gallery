import {openPopupImage} from './PopupPhoto.js';

const photo = document.querySelector('.main-image');

class Person {
  constructor(data) { // конструктор получает объект
    this._name = data.name;
    this._link = data.link;
  }

  _getTemplate() {
    return document.querySelector('.template').content.cloneNode(true);
  }

  generatePerson() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const image = this._element.querySelector('.person__image');
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector('.person__name').textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.person__image').addEventListener('click', openPopupImage);
    this._element.querySelector('.person__image').addEventListener('mouseover', lookPhoto);
  }
}


function lookPhoto(evt) {
    photo.src = evt.target.src;
    photo.alt = evt.target.alt;
    photo.textContent = evt.target.alt;
  return setTimeout(lookPhoto, 6000)
}

function createPersons(personList, list) {
  personList.forEach((item) => {
// Создадим экземпляр
    const person = new Person(item);
    // Создаём личность и возвращаем наружу
    const personElement = person.generatePerson();
    const selectorList = document.querySelector(list);
    // Добавляем в DOM
    selectorList.append(personElement);

  });
}

export {createPersons, Person};