import { createFotos } from './data.js';

// const userDialog = document.querySelector('.big-picture');
// userDialog.classList.remove('hidden');

const similarListFoto = document.querySelector('.pictures');
const similarCreateFotos = document.querySelector('#picture').content.querySelector('.picture');

const similarFotos = createFotos(25);

const similarListFragment = document.createDocumentFragment();


const renderFotos = function () {
  similarFotos.forEach(({likes, comments, url }) => {
    const profileFoto = similarCreateFotos.cloneNode(true);

    profileFoto.querySelector('.picture__likes').textContent = likes;
    profileFoto.querySelector('.picture__comments').textContent = comments.length;
    profileFoto.querySelector('.picture__img').src = url;
    similarListFoto.appendChild(profileFoto);
  });

  similarListFoto.appendChild(similarListFragment);
  return similarListFoto;
};

export {renderFotos};
