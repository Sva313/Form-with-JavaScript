function validateInput() {
    const inputField = document.getElementById('numberInput');
    const value = inputField.value;

    if (value !== '' && Number(value) <= 10) {
        alert('Please enter a number greater than 10');
        inputField.value = '';
    }
}

function submit() {
    const inputField = document.getElementById('numberInput');
    const value = inputField.value;

    if (value !== '' && Number(value) > 10) {
        alert('Form submitted successfully with number: ' + value);
    } else {
        alert('Please enter a valid number greater than 10 before submitting');
    }
}