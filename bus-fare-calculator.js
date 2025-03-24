/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age =65;
const students = false;
const price = 800;

if( age < 10){
    // 100% discount
    const discount = price *100/100;
    const payment = price - discount;
    console.log('payment', payment, 'taka');
}

else if (students == true){
    // 50% discount
    const discount = price *50/100;
    const payment = price - discount;
    console.log('payment', payment, 'taka');
}
else if (age >= 60){
    // 15% discount
    const discount = price *15/100;
    const payment = price - discount;
    console.log('payment', payment, 'taka');
}

else{
    console.log('payment', price);
}