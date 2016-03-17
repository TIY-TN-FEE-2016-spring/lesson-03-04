'use strict';

const triggerOn = document.querySelector(`#open-popup`);
const alerts = document.querySelector(`#alerts`);

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 0)) + 0;
}

triggerOn.addEventListener(`click`, () => {
  const alert = document.createElement(`div`);
  const popupContent = document.createElement(`p`);
  const closeButton = document.createElement(`button`);

  alert.classList.add(`alert`);
  popupContent.classList.add(`alert__content`);
  closeButton.classList.add(`alert__close`);

  alert.appendChild(popupContent);
  alert.appendChild(closeButton);
  alerts.appendChild(alert);

  alert.style.backgroundColor =
    `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)}, 0.5)`;

  closeButton.addEventListener(`click`, () => {
    alert.remove();
  });

  popupContent.innerText = `I see you like to click things...`;
  closeButton.innerText = `X`;
});
