const downloadsButton = document.querySelector('.downloads_btn');
const downloadsSection = document.querySelector('.downloads_section');
const downloadItemProgress = document.querySelectorAll('.download_item_progress');
const downloadCircleProgress = document.querySelectorAll('[data-progress]');
const downloadProgressText = document.querySelectorAll('.download_item_info span');
const downloadOptionsElement = document.querySelectorAll('.download_item_options');
const updatedInfoElement = document.querySelector('.updated_info');

let initialProgress = 0;
let index = 1;
let intervalId = undefined;

let strokeCurrent = 0;
let strokePart = undefined;
const STROKE_MAX = 90;

const showHideDownloadsSection = () => {
    if (downloadsSection.classList.contains('hidden')) {
        downloadsSection.classList.remove('hidden');
    } else {
        downloadsSection.classList.add('onhidden');
        setTimeout(() => {
            downloadsSection.classList.remove('onhidden');
            downloadsSection.classList.add('hidden');
        }, 450)
    }
}

const runDownload = () => {
    downloadProgressText[index].textContent = `${initialProgress}%`;
    strokeCurrent += STROKE_MAX / 100;
    downloadCircleProgress[index - 1].style.strokeDashoffset = strokeCurrent;
    initialProgress++;
    if (initialProgress === 101) {
        clearInterval(intervalId);
        downloadItemProgress[index].innerHTML = `
            <svg class="up_to_date" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z" fill="#6aaa19"></path>
            </svg>
        `;
        downloadProgressText[index].textContent = `Up to date`;
        downloadOptionsElement[index].classList.remove('hidden');
        index++;
        initialProgress = 0;
        strokeCurrent = 0;

        intervalId = setInterval(runDownload, 90);
    }
    if (index > 2) {
        clearInterval(intervalId);
        updatedInfoElement.classList.remove('hidden');
        setTimeout(() => {
            updatedInfoElement.classList.add('onhidden');
        }, 2800);
        setTimeout(() => {
            updatedInfoElement.classList.remove('onhidden');
            updatedInfoElement.classList.add('hidden');
        }, 3000)
    }
}

intervalId = setInterval(runDownload, 80);

downloadsButton.addEventListener('click', showHideDownloadsSection);