const input: HTMLInputElement = document.querySelector('.palindrome-text-input')!;
const submit: HTMLButtonElement = document.querySelector('.submit-button')!;
const sequenceNumber: HTMLTableCellElement = document.querySelector('.number')!;
const inputWord: HTMLTableCellElement = document.querySelector('.input-word')!;
const expectedResult: HTMLTableCellElement = document.querySelector('.expected-result')!;
const tableBody: HTMLTableSectionElement = document.querySelector('tbody')!;

// first row number
let rowNumber: number = 1;
function palindrome(myString: string): void {
  if (input.value === '') {
    window.alert('Please enter a word');
    return;
  }
  /* remove special characters, spaces and make lowercase*/
  const removeChar: string = myString.replace(/[^A-Z0-9]/gi, '').toLowerCase();
  /* reverse removeChar for comparison*/
  const checkPalindrome: string = removeChar.split('').reverse().join('');

  /* create new table row and cells */
  const newRow = tableBody.insertRow();
  const newNumberCell = newRow.insertCell();
  const newInputWordCell = newRow.insertCell();
  const newExpectedResultCell = newRow.insertCell();

  /* set cell values */
  newNumberCell.textContent = rowNumber.toString();
  newInputWordCell.textContent = myString;
  if (removeChar === checkPalindrome) {
    newExpectedResultCell.textContent = myString + ' === true';
    newExpectedResultCell.style.backgroundColor = '#008000';
  } else {
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
