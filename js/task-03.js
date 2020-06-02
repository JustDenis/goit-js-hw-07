const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

function createGalleryItem(numberImg) {
  const galleryList = document.createElement('li');
  const galleryImg = document.createElement('img');
  galleryImg.setAttribute('src', images[numberImg].url);
  galleryImg.setAttribute('alt', images[numberImg].alt);
  galleryList.append(galleryImg);
  return galleryList;
}

galleryRef.append(
  createGalleryItem(0),
  createGalleryItem(1),
  createGalleryItem(2),
);
