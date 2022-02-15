// phone Plus button
function updateBtn(catagori,price,addMinus){
    const inputField = document.getElementById(catagori+'-field');
    let inputValue = inputField.value;
    if(addMinus == true){
        inputValue = parseInt(inputValue) + 1;
    }else if(inputValue > 0){
        inputValue = parseInt(inputValue) - 1;
    }
    inputField.value = inputValue;
    const priceTag = document.getElementById(catagori + '-tag');
    priceTag.innerText = inputValue * price;
    calculate()
}
function getTotal(catagori){
    const inputField = document.getElementById(catagori + '-field');
    const inputValue = inputField.value;
    return inputValue;
}
// total clculation
function calculate(){
    const phoneTotal = getTotal('phone') * 1219;
    const coverTotal = getTotal('cover') * 59;
    const subTotal = phoneTotal + coverTotal;
    const tax = subTotal / 10;
    const TotalAmount = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = TotalAmount;
}
// phone er jonno
document.getElementById('btn-plus').addEventListener('click', function(){
    updateBtn('phone', 1219 ,true)
})
document.getElementById('btn-minus').addEventListener('click', function(){
    updateBtn('phone', 1219 ,false)
})
// cover er jonno
document.getElementById('cover-plus').addEventListener('click', function(){
    updateBtn('cover', 59 , true)
})
document.getElementById('cover-minus').addEventListener('click', function(){
    updateBtn('cover', 59, false)
})
