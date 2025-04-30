let counterValue = 0;

const counter = document.getElementById('counter');

const incrementBtn = document.getElementById('incrementBtn');


incrementBtn.addEventListener('click',function() {
    alert(counterValue);
    counterValue++;
    counter.textContent = counterValue;
})