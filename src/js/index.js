import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

const add = document.querySelector('.plus_button--js');
const remove = document.querySelector('.minus_button--js');
const counter = document.querySelector('.glass_counter--js')
let countResult = 0;
const key = new Date().toISOString().slice(0,10);

const localStorageValue = localStorage.getItem(key);

    if (localStorageValue){
        countResult = localStorageValue;
}
    else{
        localStorage.setItem(key, 0);
    
}
counter.innerHTML = countResult;



add.addEventListener('click', ()=> {
        countResult++;
        counter.innerHTML= countResult;
        localStorage.setItem(key, countResult);
    });


remove.addEventListener('click',()=>{
        if (countResult > 0){
            countResult--;
    
        }
        counter.innerHTML=countResult;
        localStorage.setItem(key, countResult);
});

   

  