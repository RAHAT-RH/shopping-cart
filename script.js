function mainBtn(catagories,price,addMinus){
    const inputField = document.getElementById(catagories + '-field');
    let inputValue = inputField.value;
    if(addMinus == true){
        inputValue = parseInt(inputValue) + 1;
    }else if(inputValue > 0){
        inputValue = parseInt(inputValue) - 1;
    }
    inputField.value = inputValue;
    const priceTag = document.getElementById(catagories + '-tag');
    priceTag.innerText = inputValue * price;
    calculate();
}
function getInputValue(catagories){
    const inputValue = document.getElementById(catagories + '-field');
    const valueInput = inputValue.value;
    return valueInput;
}
function calculate(){
    const phoneTotal = getInputValue('phone') * 1219;
    const coverTotal = getInputValue('cover') * 59;
    const subTotal = phoneTotal + coverTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total; 
}

// for phones
document.getElementById('btn-plus').addEventListener('click', function(){
    mainBtn('phone', 1219, true);
 })
document.getElementById('btn-minus').addEventListener('click', function(){
    mainBtn('phone',1219, false);
 })
 // for cover
 document.getElementById('cover-plus').addEventListener('click', function(){
    mainBtn('cover', 59, true);
 })
document.getElementById('cover-minus').addEventListener('click', function(){
    mainBtn('cover', 59, false);
 })