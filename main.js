function allfunction(catagories,price,addMinus){
    const inputField = document.getElementById(catagories + '-field');
    const inputValue = inputField.value;
    if(addMinus == true){
        inputField.value = parseInt(inputValue) + 1;
    }else if(inputValue > 0){
        inputField.value = parseInt(inputValue) - 1;
    }
    const productPrice = inputField.value * price;
    document.getElementById(catagories + '-tag').innerText = productPrice;
    calculate()
}

function getInputValue(catagories){
    const inputField = document.getElementById(catagories + '-field');
    const inputValue = inputField.value;
    return inputValue;
}
function calculate() {
    const phonePrice = getInputValue('phone') * 1219;
    const coverPrice = getInputValue('cover') * 59;
    const subTotal = phonePrice + coverPrice;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

document.getElementById('btn-plus').addEventListener('click', function(){
    allfunction('phone', 1219, true);
})
document.getElementById('btn-minus').addEventListener('click', function(){
    allfunction('phone', 1219, false);
})

document.getElementById('cover-plus').addEventListener('click', function(){
    allfunction('cover', 59, true)
})

document.getElementById('cover-minus').addEventListener('click', function(){
    allfunction('cover', 59, false);
})