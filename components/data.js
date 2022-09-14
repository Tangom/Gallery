import vinograd from '../images/Екатерина Виноградова.jpg';
import shevche from '../images/Наташа Шевченко.jpg';
import bazenova from '../images/Елена Баженова.jpg' ;
import nekto from '../images/Некто.jpg';


const personList = [{
  name: 'Екатерина Виноградова',
  link: vinograd,
  town: 'Москва'
},
  {
    name: 'Наталья Шевченко',
    link: shevche,
  },
  {
    name: 'Елена Баженова',
    link: bazenova,
  },
  {
    name: 'Марина Матросова',
    link: nekto,
  }
]


const allData =
  [{
    personList: personList,
    list: '.list_dj',
  }]


export {allData, personList};