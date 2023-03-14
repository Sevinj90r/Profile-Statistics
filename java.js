const counters = document.querySelectorAll(".counter");

counters.forEach ((counterEl) => {
    counterEl.innerText = "0";

    incrementCounter();

    function incrementCounter(){
        let currentNum = +counterEl.innerText;
        const dataCeil = counterEl.getAttribute("data-ceil"); 
        const increment = dataCeil / 15;
        currentNum =Math.ceil(currentNum + increment);
     

        if (currentNum < dataCeil){
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter, 20);
        } else{
            counterEl.innerHTML = dataCeil;
        }
}

});