
                    const progress = setInterval(animateProgress, 13);
const total = setInterval(displayTotal);
let progressValue = 100;
let totalDisplay = 0;

function animateProgress() {
    const indicator = document.querySelector(".indicator-animate");

    setTimeout(() => {
        if (progressValue === 0) {
            clearInterval(progress);
        } else {
            progressValue--;
            indicator.style.backgroundImage = `conic-gradient(var(--projectsBackgroungColor) ${progressValue}%, transparent 0)`;
        }
    }, 500);
}

function displayTotal() {
    const progressTotal = document.querySelector(".progress");

    setTimeout(() => {
        if (totalDisplay >= 314) {
            clearInterval(total);
        } else {
            totalDisplay++;
            progressTotal.textContent = totalDisplay;
        }
    }, 500);
}

                