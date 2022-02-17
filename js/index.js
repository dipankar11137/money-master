// replaceing value to number 
function getValue(inputValue) {
    // if (amount >= 0) {
    const costField = document.getElementById(inputValue)
    const costText = costField.value;
    const cost = parseFloat(costText);
    costField.value = '';
    return cost;
    // }
    // else {
    //     return 'enter positive number';
    // }

}
// claculate amount 
/* function calculateTaka(value1, value2, value3) {
    const totalExpenses = getValue(value1) + getValue(value2) + getValue(value3);
    return totalExpenses;
} */
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

    const totalIncome = parseFloat(document.getElementById('total-income').value);
    // input value
    const food = getValue('food');
    const clothes = getValue('clothes');
    const rent = getValue('rent');

    if (totalIncome >= 0 && food >= 0 && clothes >= 0 && rent >= 0) {
        // const totalExpenses = calculateTaka('food', 'rent', 'clothes');
        const totalExpenses = food + clothes + rent;

        setAmount('total-expenses', totalExpenses);
        setAmount('balance', remainningCalculation(totalIncome, totalExpenses));
        console.log('mama paice');
    }
    else {
        const message = ' Less Money';

        document.getElementById('error').innerText = message;
    }

});

// save button 
document.getElementById('save-button').addEventListener('click', function () {


    const totalIncome2 = getValue('total-income');
    const parsentes = getValue('save-amount');
    const balance = parseFloat(document.getElementById('balance').innerText);
    const calculateParsent = (totalIncome2 * parsentes) / 100;

    if (balance >= calculateParsent) {
        setAmount('saiving-amount', calculateParsent);

        // remaning Balance       
        const remainingBalance = balance - calculateParsent;
        setAmount('remaining-balance', remainingBalance);

    } else {
        const message = ' Less Money';

        document.getElementById('error').innerText = message;

    }
});

/* const ki = 7;
const ho = 'er';
if (isNaN(ki) || isNaN(ho)) {
    console.log('mama paice tomay');
}
else {
    console.log(' tomay');
} */