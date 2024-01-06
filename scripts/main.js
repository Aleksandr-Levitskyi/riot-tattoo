import { CONFIG, INITIAL_DATA, SLIDES } from "./constants.js";

const template = document.querySelector(`#${CONFIG.template}`).content;

const slideTitle = document.querySelector('.slider__title');
const sliderReview = document.querySelector('.slider__review');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

INITIAL_DATA.forEach((item) => {
    createCard(item);
})

prevBtn.addEventListener('click', showPrevSlide)
nextBtn.addEventListener('click', showNextSlide)

updateSlider();

function updateSlider() {
    slideTitle.textContent = SLIDES[currentSlide].name;
    sliderReview.textContent = SLIDES[currentSlide].review;
}

function showNextSlide() {
    if (currentSlide === 0) {
        currentSlide = SLIDES.length - 1;
    } else {
        currentSlide--;
    }

    updateSlider()
}

function showPrevSlide() {
    if (currentSlide === SLIDES.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    updateSlider()
}

function createListItem(arr, template) {
    arr.forEach((item) => {
        const listItem = document.createElement('li');
        const listContainer = template.querySelector(`#${CONFIG.listContainer}`);

        listItem.setAttribute('id', `${CONFIG.listItem}`);
        listItem.textContent = item;

        renderElement(listItem, listContainer);
    });
}

function createCard(obj) {
    const container = document.querySelector('.list');

    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);

    const dayNumb = cardElement.querySelector('.card__day');
    const lessonTitle = cardElement.querySelector('.lesson-title');
    const speakers = cardElement.querySelector('.card__spaekers');

    dayNumb.textContent = obj.day;
    lessonTitle.textContent = obj.lessonTitle;
    speakers.textContent = obj.speakers;

    createListItem(obj.listThemes, cardElement);
    renderElement(cardElement, container);
}

function renderElement(element, wrapper) {
    wrapper.append(element);
}

