// Write your JavaScript here

// function to calculate the change 
function changeCalculation() {
    var amountDue = document.getElementById('amount-due').value;
    var amountReceived = document.getElementById('amount-received').value;
    var totalChange = amountReceived - amountDue;
    // function to get number of each "dollar"
    getDollars();
    function getDollars() {
        var dollarChange = Math.floor(totalChange)
        if(dollarChange > 19) {
            var twenties = Math.floor(dollarChange / 20);
            document.getElementById('twenties-output').innerHTML = twenties;
            dollarChange -= (twenties * 20);
        } else {
            twenties = 0;
            document.getElementById('twenties-output').innerHTML = twenties;
        };
        if( (dollarChange % 10) >= 0) {
            var tens = Math.floor(dollarChange / 10);
            document.getElementById('tens-output').innerHTML = (tens);
            dollarChange -= (tens * 10);
        } else {
            tens = 0;
            document.getElementById('tens-output').innerHTML = (tens);
        };
        if( (dollarChange % 5) >= 0) {
            var fives = Math.floor(dollarChange / 5);
            document.getElementById('fives-output').innerHTML = (fives);
            dollarChange -= (fives * 5);
        } else {
            fives = 0;
            document.getElementById('fives-output').innerHTML = (fives);
        };
        if( (dollarChange % 2) >= 0) {
            var twos = Math.floor(dollarChange / 2);
            document.getElementById('twos-output').innerHTML = (twos);
            dollarChange -= (twos * 2);
        } else {
            twos = 0;
            document.getElementById('twos-output').innerHTML = (twos);
        };
        if(dollarChange > 0) {
            var ones = Math.floor(dollarChange / 1);
            document.getElementById('ones-output').innerHTML = (ones);
        } else {
            ones = 0;
            document.getElementById('ones-output').innerHTML = (ones);
        };
    }
    // function to get the cents value
    var decimalValue = totalChange % 1 ;
    function getDecimalValue() { 
        var splitDecimal = decimalValue.toString().split('');
        if(splitDecimal.length >= 4 || (splitDecimal.length > 1 && splitDecimal.length < 4)) {
            decimalValue = decimalValue.toFixed(2);
            decimalValue = decimalValue * 100;
        };
    };
    getDecimalValue();
    // function to get number of each "coin"
    getCoins();
    function getCoins() {
        if( decimalValue > 24) {
            var quarters = Math.floor(decimalValue / 25);
            document.getElementById('quarters-output').innerHTML = (quarters);
            decimalValue -= (quarters * 25);
        } else {
            quarters = 0;
            document.getElementById('quarters-output').innerHTML = (quarters)
        }; 
        if( (decimalValue % 10) >= 0) {
            var dimes = Math.floor(decimalValue / 10) ;
            document.getElementById('dimes-output').innerHTML = (dimes);
            decimalValue -= (dimes * 10);
        } else {
            dimes = 0;
            document.getElementById('dimes-output').innerHTML = (dimes);
        }; 
        if( (decimalValue % 5) >= 0) {
            var nickels = Math.floor(decimalValue / 5);
            document.getElementById('nickels-output').innerHTML = (nickels);
            decimalValue -= (nickels * 5);
        } else {
            nickels = 0;
            document.getElementById('nickels-output').innerHTML = (nickels);
        };
        if( (decimalValue % 5 ) >= 0) {
            var pennies = Math.ceil(decimalValue / 1);
            document.getElementById('pennies-output').innerHTML = (pennies);
        } else {
            pennies = 0;
            document.getElementById('pennies-output').innerHTML = (pennies);
        };
    };
};

// click event to initiate the functions
document.getElementById('calculate-change').addEventListener('click', changeCalculation);


        

        
        

