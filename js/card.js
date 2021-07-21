const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createCustomPopup = (point) => {
  const popupElement = cardTemplate.cloneNode(true);

  const popupAvatar = popupElement.querySelector('.popup__avatar');
  const popupTitle = popupElement.querySelector('.popup__title');
  const popupAddress = popupElement.querySelector('.popup__text--address');
  const popupPrice = popupElement.querySelector('.popup__text--price');
  const popupType = popupElement.querySelector('.popup__type');
  const popupCapacity = popupElement.querySelector('.popup__text--capacity');
  const popupTime = popupElement.querySelector('.popup__text--time');
  const popupFeatureList = popupElement.querySelector('.popup__features');
  const popupDescription = popupElement.querySelector('.popup__description');
  const photoContainer = popupElement.querySelector('.popup__photos');
  const popupPhoto = popupElement.querySelector('.popup__photo');

  if (point.author.avatar) {
    popupAvatar.src = point.author.avatar;
  } else {
    popupAvatar.remove();
  }

  if (point.offer.title) {
    popupTitle.textContent = point.offer.title;
  } else {
    popupTitle.remove();
  }

  if (point.offer.address) {
    popupAddress.textContent = `Координаты: ${point.offer.address}`;
  } else {
    popupAddress.remove();
  }

  if (point.offer.price) {
    popupPrice.textContent = `Стоимость: ${point.offer.price} ₽/ночь`;
  } else {
    popupPrice.remove();
  }

  if (point.offer.type) {
    popupType.textContent = point.offer.type;
  } else {
    popupType.remove();
  }

  if (point.offer.rooms && point.offer.guests) {
    popupCapacity.textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  } else {
    popupCapacity.remove();
  }

  if (point.offer.checkin && point.offer.checkout) {
    popupTime.textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  } else {
    popupTime.remove();
  }

  if (point.offer.features) {
    if (point.offer.features.length === 0) {
      popupFeatureList.remove();
    } else {
      popupFeatureList.innerHTML = '';
      const features = point.offer.features;
      features.forEach((feature) => {
        const createElementItem = document.createElement('li');
        createElementItem.classList.add('popup__feature');
        createElementItem.classList.add(`popup__feature--${feature}`);
        popupFeatureList.appendChild(createElementItem);
      });
    }
  } else {
    popupFeatureList.remove();
  }

  if (point.offer.description) {
    popupDescription.textContent = point.offer.description;
  }

  if (point.offer.photos) {
    if (point.offer.photos.length === 0) {
      photoContainer.remove();
    } else {
      photoContainer.innerHTML = '';
      const photosLinks = point.offer.photos;
      photosLinks.forEach((photoLink) => {
        const clonePhoto = popupPhoto.cloneNode(false);
        photoContainer.appendChild(clonePhoto);
        clonePhoto.src = photoLink;
      });
    }
  } else {
    photoContainer.remove();
  }

  return popupElement;
};

export {
  createCustomPopup
};
