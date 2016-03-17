'use strict';

const triggerOn = document.querySelector(`#open-popup`);
const bodyElement = document.querySelector(`body`);

triggerOn.addEventListener(`click`, () => {
  const popup = document.createElement(`div`);
  const card = document.createElement(`div`);
  const popupContent = document.createElement(`p`);
  const closeButton = document.createElement(`button`);

  popup.appendChild(card);
  card.appendChild(popupContent);
  card.appendChild(closeButton);
  bodyElement.appendChild(popup);

  closeButton.addEventListener(`click`, () => {
    popup.remove();
  });

  popupContent.innerText = `I see you like to click things...`;
  closeButton.innerText = `X`;
});
