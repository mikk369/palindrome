"use strict";
var input = document.querySelector('.palindrome-text-input');
var submit = document.querySelector('.submit-button');
var sequenceNumber = document.querySelector('.number');
var inputWord = document.querySelector('.input-word');
var expectedResult = document.querySelector('.expected-result');
var tableBody = document.querySelector('tbody');
// first row number
var rowNumber = 1;
function palindrome(myString) {
    if (input.value === '') {
        window.alert('Please enter a word');
        return;
    }
    /* remove special characters, spaces and make lowercase*/
    var removeChar = myString.replace(/[^A-Z0-9]/gi, '').toLowerCase();
    /* reverse removeChar for comparison*/
    var checkPalindrome = removeChar.split('').reverse().join('');
    /* create new table row and cells */
    var newRow = tableBody.insertRow();
    var newNumberCell = newRow.insertCell();
    var newInputWordCell = newRow.insertCell();
    var newExpectedResultCell = newRow.insertCell();
    /* set cell values */
    newNumberCell.textContent = rowNumber.toString();
    newInputWordCell.textContent = myString;
    if (removeChar === checkPalindrome) {
        newExpectedResultCell.textContent = myString + ' === true';
        newExpectedResultCell.style.backgroundColor = '#008000';
    }
    else {
        newExpectedResultCell.textContent = myString + ' === false';
        newExpectedResultCell.style.backgroundColor = '#FF0000';
    }
    /* increment sequenceNumber for the next row */
    rowNumber++;
}
submit.addEventListener('click', function () {
    palindrome(input.value);
    //   clear input
    input.value = '';
});
//add search by ENTER key
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        submit.click();
    }
});
//# sourceMappingURL=index.js.map