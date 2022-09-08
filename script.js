const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

//prendo gli elementi necessari
const boxMainImg = document.getElementById("mainimgbox");
const sideImgBox = document.getElementById("sideimgbox");
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const inverseButton = document.getElementById("inversebtn")
let startIndex = 0;
let sideimgclass = "sideimg"
let index = false
let control = true

//creo il carousel principale e le thumb img
imgassignment(images)

//intervallo
let interval
verse()

//eventi
previousButton.addEventListener("click", moveCarouselPrevious);
nextButton.addEventListener("click", moveCarouselForward);
inverseButton.addEventListener("click", verse);


//funzioni
function imgassignment(images) {
    sideImgBox.innerHTML = ""
    boxMainImg.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const imageClass = i === startIndex ? 'd-block ' : 'd-none '
        boxMainImg.innerHTML += `<h3 class="${imageClass} titleimg">${image.title}</h3><img class="${imageClass} mainimg" src="${image.url}" alt="${image.description}" />`
        if (i === startIndex) {
            sideimgclass = "sideimg sideonfocus"
        } else {
            sideimgclass = "sideimg"
        }; sideImgBox.innerHTML += `<img src="${image.url}" alt"${image.description}" class="${sideimgclass}">`
    };
}

function moveCarouselForward() {
    //clearInterval(interval)
    // se l'indice si trova in fondo allora lo riposizione all'inizio dell'array
    startIndex = startIndex < images.length - 1 ? startIndex + 1 : 0;
    imgassignment(images)
    //verse()
}

function moveCarouselPrevious() {
    //clearInterval(interval)
    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    startIndex = startIndex > 0 ? startIndex - 1 : images.length - 1;
    imgassignment(images)
    //verse()
}

function verse() {
    index = index === true ? false : true
    clearInterval(interval)
    if (index === false) {
        interval = setInterval(moveCarouselPrevious, 3000)
    } else {
        interval = setInterval(moveCarouselForward, 3000)
    }
}

