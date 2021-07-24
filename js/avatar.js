const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileUserChooser = document.querySelector('.ad-form__field input[type=file]');
const previewUser = document.querySelector('.ad-form-header__preview img');
const fileHousingChooser = document.querySelector('.ad-form__upload input[type=file]');
const photoHousingContainer = document.querySelector('.ad-form__photo');
const photoHousing = document.createElement('img');
photoHousing.classList.add('ad-form-header__preview');

fileUserChooser.addEventListener('change', () => {
  const file = fileUserChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) =>
    fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewUser.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

fileHousingChooser.addEventListener('change', () => {
  photoHousingContainer.appendChild(photoHousing);
  const file = fileHousingChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) =>
    fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      photoHousing.setAttribute('src', reader.result);
    });

    reader.readAsDataURL(file);
  }
});
