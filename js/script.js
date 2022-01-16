"use strict";

const button = document.querySelector(".button"),
      image = document.querySelector(".img"),
      url = 'http:\/\/aws.random.cat\/meow';

async function getData() {
   try {
      const response = await fetch(url);
      const data = await response.json();

      image.src = data.file;
   }
   catch (error) {
      console.error(error);
   }
}

button.addEventListener('click', () => {
   const isLoaded = image.complete; //Проверяет, полностью ли загрузилось изображение
   if (isLoaded) {
      getData();
   }
});