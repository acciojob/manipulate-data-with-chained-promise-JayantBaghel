//your JS code here. If required.
// Function to simulate a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to return a promise that resolves with an array after 3 seconds
function getNumbers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to update the output div
function updateOutput(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = message;
}

// Main function to perform the chained promises
function manipulateData() {
    getNumbers()
        .then(numbers => {
            return delay(1000).then(() => {
                const evenNumbers = numbers.filter(num => num % 2 === 0);
                updateOutput(`Filtered even numbers: ${evenNumbers}`);
                return evenNumbers;
            });
        })
        .then(evenNumbers => {
            return delay(2000).then(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                updateOutput(`Multiplied even numbers: ${multipliedNumbers}`);
                return multipliedNumbers;
            });
        })
        .catch(error => {
            updateOutput(`Error: ${error}`);
        });
}

// Start the process
manipulateData();
