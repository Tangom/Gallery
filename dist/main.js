(()=>{"use strict";var e="",t=[{name:"Екатерина Виноградова",link:e+"2a2c279baa634414f6e4.jpg"},{name:"Наталья Шевченко",link:e+"687fe93f9dd163f4913b.jpg"},{name:"Елена Баженова",link:e+"55398bb6b9321930020e.jpg"},{name:"Марина Матросова",link:e+"cddb7e32bc6630fc4aef.jpg"}],n=[{personList:t,list:".list"}],r=document.querySelector(".popup_photo"),o=r.querySelector(".popup__close_image"),a=r.querySelector(".popup__text"),i=r.querySelector(".popup__image");function u(e){e.classList.remove("popup_opened"),function(e){e.removeEventListener("click",s),document.removeEventListener("keydown",c)}(e)}function c(e){"Escape"===e.key&&u(document.querySelector(".popup_opened"))}function s(e){e.target.classList.contains("popup")&&u(document.querySelector(".popup_opened"))}function l(e){var t;(t=r).classList.add("popup_opened"),function(e){e.addEventListener("click",s),document.addEventListener("keydown",c)}(t),i.src=e.target.src,i.alt=e.target.alt,a.textContent=e.target.alt}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}o.addEventListener("click",(function(){return u(r)}));var m=document.querySelector(".main-image"),f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(".template").content.cloneNode(!0)}},{key:"generatePerson",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".person__image");return e.src=this._link,e.alt=this._name,this._element.querySelector(".person__name").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){this._element.querySelector(".person__image").addEventListener("click",l),this._element.querySelector(".person__image").addEventListener("mouseover",d)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){m.src=e.target.src,m.alt=e.target.alt,m.textContent=e.target.alt,setTimeout(d,3e3)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=document.querySelector(".list"),y=document.querySelector(".add");new(function(){function e(t){var n=t.submitForm;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._submitForm=n}var t,n;return t=e,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(y.querySelectorAll(".add-input")).forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;y.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),y.reset()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({formSelector:".template",submitForm:function(e){t.push(e);var n=new f(e).generatePerson();_.append(n)}}).setEventListeners(),n.forEach((function(e){!function(e,t){e.forEach((function(e){var n=new f(e).generatePerson();document.querySelector(t).append(n)}))}(e.personList,e.list)}))})();