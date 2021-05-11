let currentPhoto = 0;
let imagesData = [
    {
        photo: './images/porsche.jpg',
        title: 'PORSCHE',
        description: 'This is the favorite car for me. It\'s beautiful and fast.'
    },
    {
        photo: 'images/police.jpg',
        title: 'POLICE CAR',
        description: 'This is very fast police car from USA.'
    },
    {
        photo: 'images/oldtimer.jpg',
        title: 'OLDTIMER',
        description: 'This is my an oldtimer in very good condition.'
    },
    {
        photo: 'images/race.jpg',
        title: 'FERRARI',
        description: 'This race car is in Silverstone.'
    },
    {
        photo: 'images/bmw.jpg',
        title: 'BMW',
        description: 'The german car.'
    },
    {
        photo: 'images/vw.jpg',
        title: 'VOLKSWAGEN',
        description: 'An old car, with a beautiful girl.'
    },
    {
        photo: 'images/audi.jpg',
        title: 'AUDI',
        description: 'Four circles. This is Audi.'
    },
    {
        photo: 'images/fiat.jpg',
        title: 'FIAT',
        description: 'This is the italian style, the Fiat 500.'
    }
];

let loadPhoto = (photoNumber, photoNumberOld) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);

    setThumbnailActive(photoNumber, photoNumberOld);
}

function setThumbnailActive(photoNumber, oldPhoto) {
    console.log(photoNumber + ", " + oldPhoto);
    let targetElement = $(`.galery-thumbnail-container .outer div[data-index="${photoNumber}"]`);
    let targetElementOld = $(`.galery-thumbnail-container .outer div[data-index="${oldPhoto}"]`);
    
    targetElementOld.parent().removeClass("active");
    targetElement.parent().addClass("active");
}

loadPhoto(currentPhoto, currentPhoto);

$('#arrow-right').click(() => {
    /*if (currentPhoto+1 < imagesData.length) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    }*/

    let oldPhoto = currentPhoto;
    currentPhoto++;
    if (currentPhoto+1 > imagesData.length) { // currentPhoto === imagesData.length
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto, oldPhoto);
    //setThumbnailActive(currentPhoto, oldPhoto);
})

$('#arrow-left').click(() => {
    let oldPhoto = currentPhoto;
    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = imagesData.length-1;
    }
    loadPhoto(currentPhoto, oldPhoto);
    //setThumbnailActive(currentPhoto, oldPhoto);
})

function loadThumbnail(element, index) {
    $('.galery-thumbnail-container').append(`<div class="outer"><div class="thumb" data-index="${index}" style="background-image: url('${element.photo}');"><div class="thumbtitle">${element.title}</div></div></div>`);
}

imagesData.forEach((element, index) => {
    loadThumbnail(element, index);
});
//imagesData.forEach(loadThumbnail); // Ez is működik

setThumbnailActive(currentPhoto, currentPhoto);

$('.thumb').click((event) => {
    let targetElement = $(event.target);

    let indexClicked = targetElement.attr('data-index');
    let numberIndex = parseInt(indexClicked);
    console.log("thumbnail clicked: " + indexClicked + ", " + numberIndex);

    let oldIndex = currentPhoto;

    currentPhoto = numberIndex;
    loadPhoto(currentPhoto, oldIndex);
});