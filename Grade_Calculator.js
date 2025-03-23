/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let result = 80;

if (result >= 90 && result <= 100 ){
    console.log('your grade A');
}

else if (result >= 80 && result <= 89) {
    console.log('your grade B');
}
else if (result >= 70 && result <= 79) {
    console.log('your grade C');
}
else if (result >= 60 && result <= 69) {
    console.log('your grade D');
}
else if (result = 0 && result <= 59) {
    console.log('your grade F');
}

else{
    console.log('tomer result er golmal ase');
}