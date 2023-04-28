const currencyEl_one = document.querySelector("#currency-one");
const amountEl_one = document.querySelector("#amount-one");
const currencyEl_two = document.querySelector("#currency-two");
const amountEl_two = document.querySelector("#amount-two");
//console.log(amountEl_two);
const rateEl = document.querySelector("#rate");
const swap = document.querySelector("#swap");

async function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    try {
     const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`);
     const data = await response.json();
     const rate = data.rates[currency_two];
     //append select option
    //  const select = document.getElementById('currency-one');
    //  const selectedValue = 'USD';
    //    Object.keys(data.rates).forEach(key => {
    //    const option = document.createElement('option');
    //    option.value = key;
    //    option.text = key;
    //    if (key === 'USD') {
    //     option.selected = true; // set the selected property to true if the key matches the desired value
    //    }
      
    //    select.appendChild(option);
    //  });
     //
     rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
     amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

    } catch (error) {
        console.log(error);
    }

}
currencyEl_one.addEventListener("change",calculate);
currencyEl_two.addEventListener("change",calculate);
amountEl_one.addEventListener("input",calculate);

swap.addEventListener("click",()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})
calculate()

