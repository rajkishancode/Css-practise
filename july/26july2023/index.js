


const filterBtn = document.querySelector('.filters');
const inputsDays = document.querySelectorAll('.card:nth-child(1) input');
const allTypesSvg = document.querySelector('.all-types-show svg');
const allTypesHiddenMenu = document.querySelector('.all-types-hidden-menu');


filterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    removeFilters();
});

allTypesSvg.addEventListener('click', () => {

    if (allTypesSvg.classList.contains('rotate')) {
        allTypesSvg.classList.remove('rotate');
        allTypesHiddenMenu.classList.add('hidden');

    } else {
        allTypesSvg.classList.add('rotate');
        allTypesHiddenMenu.classList.remove('hidden');
    };
});

const removeFilters = () => {
    inputsDays.forEach((item) => {
        item.checked = false;
    });
};