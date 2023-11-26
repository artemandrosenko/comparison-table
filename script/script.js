let toggle = document.querySelector('#toggle');
let monthlyPrice = document.querySelectorAll('.card__price_montly');
let yearlyPrice = document.querySelectorAll('.card__price_yearly');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        monthlyPrice.forEach(price => price.style.display = 'none');
        yearlyPrice.forEach(price => price.style.display = 'flex');
    } else {
        yearlyPrice.forEach(price => price.style.display = 'none');
        monthlyPrice.forEach(price => price.style.display = 'flex');
    }

});