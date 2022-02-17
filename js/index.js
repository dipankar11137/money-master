// replaceing value to number 
function getValue(amount) {
    costText = document.getElementById(amount).value;
    cost = parseFloat(costText);
    return cost;
}
// claculate amount 
function calculateTaka(value1, value2, value3) {
    const totalExpenses = getValue(value1) + getValue(value2) + getValue(value3);
    return totalExpenses;
}
// value set 
function setAmount(oldAmount, updateAmount) {
    document.getElementById(oldAmount).innerText = updateAmount;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const totalIncome = getValue('total-income');

    const totalExpenses = calculateTaka('food', 'rent', 'clothes');
    const balacne = totalIncome - totalExpenses;

    setAmount('total-expenses', totalExpenses);
    setAmount('balance', balacne);







    // calculateTaka();
    /* foodCost = getValue('food');
    rentCost = getValue('rent');
    clothesCost = getValue('clothes');
    console.log(foodCost);
    console.log(rentCost);
    console.log(clothesCost); */
});