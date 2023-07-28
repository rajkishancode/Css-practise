const allLinks = document.querySelectorAll('a');
const displayButtons = document.querySelectorAll('.display_btns button');

const filtersInput = document.querySelector('.filter_btn');
const filtersListItems = document.querySelectorAll('input[type="checkbox"]');
const selectedFiltersCountEl = document.querySelector('.selected_filters_count');

const saveButtons = document.querySelectorAll('.save_btn');

const SELECTED_FILTERS = [];

openHideFiltersList = () => {
    const filtersListElement = document.querySelector('.filters_list');
    filtersListElement.classList.toggle('hidden');
}

const changeResultsDisplay = displayBtn => {
    const resultsContainer = document.querySelector('.results');
    resultsContainer.classList.remove('display_rect');
    resultsContainer.classList.remove('display_sqr');

    if (displayBtn.classList.contains('display_rect')) {
        displayButtons[1].classList.remove('selected');
        displayBtn.classList.add('selected');
        resultsContainer.classList.add('display_rect');
    }

    if (displayBtn.classList.contains('display_sqr')) {
        displayButtons[0].classList.remove('selected');
        displayBtn.classList.add('selected');
        resultsContainer.classList.add('display_sqr');
    }
}

const removeSelectedFilter = filter => {
    const filterName = filter.parentElement.querySelector('span').textContent;
    filter.parentElement.remove();
    document.querySelector(`input[value="${filterName}"]`).checked = false;
    SELECTED_FILTERS.splice(SELECTED_FILTERS.indexOf(filterName), 1);
    selectedFiltersCountEl.textContent = SELECTED_FILTERS.length;
}

const renderSelectedFilters = items => {
    const selectedFiltersElement = document.querySelector('.selected_filters');
    selectedFiltersElement.innerHTML = '';

    items.forEach(item => {
        let selectedFilterHTML = `
            <div class="selected_filter">
                <span>${item}</span>
                <button class="remove_filter_btn">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#fff"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#fff"></path>
                    </svg>
                </button>
            </div>
        `;

        selectedFiltersElement.insertAdjacentHTML('beforeend', selectedFilterHTML);
    });

    const removeSelectedFilterBtns = document.querySelectorAll('.remove_filter_btn');
    removeSelectedFilterBtns.forEach(filter => {
        filter.addEventListener('click', () => {
            removeSelectedFilter(filter);
        })
    })
}

const handleSelectedFilters = listItem => {
    if (listItem.checked) {
        SELECTED_FILTERS.push(listItem.value);
    } else {
        SELECTED_FILTERS.splice(SELECTED_FILTERS.indexOf(listItem.value), 1);
    }
    renderSelectedFilters(SELECTED_FILTERS);
    selectedFiltersCountEl.textContent = SELECTED_FILTERS.length;
}

const toggleSaveIcon = btn => {
    if (btn.getAttribute('data-saved') === 'no') {
        btn.innerHTML = `
            <svg viewBox="-4 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000">
                <g transform="translate(-419.000000, -153.000000)" fill="#000000">
                    <path d="M437,153 L423,153 C420.791,153 419,154.791 419,157 L419,179 C419,181.209 420.791,183 423,183 L430,176 L437,183 C439.209,183 441,181.209 441,179 L441,157 C441,154.791 439.209,153 437,153" id="bookmark" sketch:type="MSShapeGroup"> </path>
                </g>
            </svg>
        `;
        btn.setAttribute('data-saved', 'yes');
    } else if (btn.getAttribute('data-saved') === 'yes') {
        btn.innerHTML = `
            <svg viewBox="-4 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
                <g transform="translate(-417.000000, -151.000000)" fill="#000000">
                    <path d="M437,177 C437,178.104 436.104,179 435,179 L428,172 L421,179 C419.896,179 419,178.104 419,177 L419,155 C419,153.896 419.896,153 421,153 L435,153 C436.104,153 437,153.896 437,155 L437,177 L437,177 Z M435,151 L421,151 C418.791,151 417,152.791 417,155 L417,177 C417,179.209 418.791,181 421,181 L428,174 L435,181 C437.209,181 439,179.209 439,177 L439,155 C439,152.791 437.209,151 435,151 L435,151 Z"></path>
                </g>
            </svg>
        `;
        btn.setAttribute('data-saved', 'no');
    }
}

filtersInput.addEventListener('click', openHideFiltersList);

displayButtons.forEach(displayBtn => {
    displayBtn.addEventListener('click', () => {
        changeResultsDisplay(displayBtn);
    });
});

filtersListItems.forEach(filtersLi => {
    filtersLi.addEventListener('change', () => {
        handleSelectedFilters(filtersLi);
    })
});

saveButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleSaveIcon(btn);
    })
})

allLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
    })
});