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
// 
function remainningCalculation(input1, input2) {
    return input1 - input2;
}
// calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    const totalIncome = getValue('total-income');

    const totalExpenses = calculateTaka('food', 'rent', 'clothes');

    setAmount('total-expenses', totalExpenses);
    setAmount('balance', remainningCalculation(totalIncome, totalExpenses));

});

// save button 
document.getElementById('save-button').addEventListener('click', function () {

    const save = getValue('save-amount');

    balacne = parseFloat(document.getElementById('balance').innerText);

    savingAmount = balacne / save;
    setAmount('saiving-amount', savingAmount);

    setAmount('remaining-balance', remainningCalculation(balacne, savingAmount));
});