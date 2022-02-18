function calculator(amountValue, interestValue, yearsValue) {
    const monthly = document.querySelector('#monthly-paymentIN');
    const total = document.querySelector('#totalIN');
    const totalInterest = document.querySelector('#total-interestIN');
    const totalInterestValue = ((amountValue * interestValue / 100) * yearsValue).toFixed(2);
    const totalValue = Number(totalInterestValue) + Number(amountValue);
    const monthlyValue = (totalValue / (yearsValue * 12)).toFixed(2);
    monthly.value = monthlyValue;
    total.value = totalValue;
    totalInterest.value = totalInterestValue;

}

const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');

    const loader = document.querySelector('#loader');
    const output = document.querySelector('#output');
    const error = document.querySelector('#error');
    const amountValue = amount.value;
    const interestValue = interest.value;
    const yearsValue = years.value;
    if (amountValue && interestValue && yearsValue) {
        loader.classList.toggle('loaderBlock');
        setTimeout( function() {
            error.classList.add('loaderNonBlock');
            loader.classList.toggle('loaderBlock');
            output.classList.remove('loaderNonBlock');
            calculator(amountValue, interestValue, yearsValue)
        }, 800);
    } else {
        loader.classList.toggle('loaderBlock');
        setTimeout( function() {
            loader.classList.toggle('loaderBlock');
            error.classList.remove('loaderNonBlock');
        }, 800);
    }
})