// replaceing value to number 
function getValue(inputValue) {
    // if (amount >= 0) {
    const costField = document.getElementById(inputValue)
    const costText = costField.value;
    const cost = parseFloat(costText);
    costField.value = '';
    return cost;
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

    const totalIncome = parseFloat(document.getElementById('total-income').value);
    // input value
    const food = getValue('food');
    const clothes = getValue('clothes');
    const rent = getValue('rent');

    if (isNaN(totalIncome) || isNaN(food) || isNaN(clothes) || isNaN(rent)) {

        const message = "Can't input string value";

        document.getElementById('error1').innerText = message;

    }

    else {
        document.getElementById('error1').innerText = '';

        if (totalIncome > 0) {
            document.getElementById('error1').innerText = '';
            if (food >= 0 && clothes >= 0 && rent >= 0) {
                const totalExpenses = food + clothes + rent;

                setAmount('total-expenses', totalExpenses);
                const balance = remainningCalculation(totalIncome, totalExpenses);

                if (totalExpenses < totalIncome) {
                    setAmount('balance', balance);
                }
                else {
                    const message = 'You are more expenses ';

                    document.getElementById('error1').innerText = message;
                }


            }
            else {
                const message = "Can't input Negative value";
                document.getElementById('error1').innerText = message;
            }
        }
        else {
            const message = "Income isn't 0 or Less";
            document.getElementById('error1').innerText = message;
        }


    }

});

// save button 
document.getElementById('save-button').addEventListener('click', function () {


    const totalIncome2 = getValue('total-income');
    const parsentes = getValue('save-amount');
    const balance = parseFloat(document.getElementById('balance').innerText);
    const calculateParsent = (totalIncome2 * parsentes) / 100;

    if (isNaN(parsentes)) {
        const message = "Can't input String";

        document.getElementById('error2').innerText = message;
    }
    else {
        if (balance >= calculateParsent) {
            document.getElementById('error2').innerText = '';

            setAmount('saiving-amount', calculateParsent);
            // remaning Balance       
            const remainingBalance = balance - calculateParsent;
            setAmount('remaining-balance', remainingBalance);

        } else {
            const message = ' Less Money';

            document.getElementById('error2').innerText = message;

        }
    }

});

