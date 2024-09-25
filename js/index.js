let imgList = document.querySelectorAll('.imgGallery img');
let layers = document.querySelectorAll('.imgGallery .layer');
let bg = document.querySelector('.bg');
let item = document.querySelector('.item');
let close = document.getElementById('close');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let currentImageIndex =0;


function showImage(imageIndex) {
  if (imageIndex >= 0 && imageIndex < imgList.length) {
    const src = imgList[imageIndex].getAttribute('src');
    item.style.backgroundImage = `url(${src})`;
    bg.classList.replace('d-none','d-flex'); 
  } else {
    console.error("Invalid image index!");
  }
}

layers.forEach((layer, index) => {
  layer.addEventListener('click', () => showImage(index));
});

close.addEventListener('click', () => bg.classList.replace('d-flex','d-none'))


next.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= imgList.length) {
      currentImageIndex = 0; 
    }
    showImage(currentImageIndex);
  });
  
  prev.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = imgList.length - 1; 
    }
    showImage(currentImageIndex);
  });

document.addEventListener('keydown', (event) => {
    if (bg.classList.contains('d-flex')) { 
      switch (event.key) {
        case 'ArrowRight':
          currentImageIndex++;
          if (currentImageIndex >= imgList.length) {
            currentImageIndex = 0;
          }
          showImage(currentImageIndex);
          break;
        case 'ArrowLeft':
          currentImageIndex--;
          if (currentImageIndex < 0) {
            currentImageIndex = imgList.length - 1;
          }
          showImage(currentImageIndex);
          break;
        case 'Escape':
          bg.classList.toggle('d-none'); 
      }
    }
  });

  