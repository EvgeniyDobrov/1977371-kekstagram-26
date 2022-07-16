import './main.js';
import {isEscapeKey} from './util.js';
import {isEnterKey} from './util.js';

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('.big-picture');
const userModalCloseElement = userModalElement.querySelector('.big-picture__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userModalElement.classList.add('hidden');
    }
  });
}

function closeUserModal () {
  userModalElement.classList.remove('hidden');

  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      userModalElement.classList.add('hidden');
    }
  });
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    userModalElement.classList.remove('hidden');
  }
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});

