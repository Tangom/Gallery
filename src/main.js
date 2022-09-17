import {allData} from '../components/data.js';
import {photo} from '../components/AddPhoto.js';
import {createPersons} from '../components/Person.js';
import '../styles/index.css';

photo.setEventListeners();

 function create(item) {
  item.forEach((item) => {
    createPersons(item.personList, item.list)
  });
}

create(allData);



