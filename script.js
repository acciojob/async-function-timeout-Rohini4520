//your JS code here. If required.
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');

// Function that returns a Promise which resolves after given milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Async function to handle button click
async function handleSubmit() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  // Optional: Basic validation
  if (!text || isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter valid text and a non-negative delay.";
    return;
  }

  outputDiv.textContent = ""; // Clear previous message

  await wait(delay);
  
  outputDiv.textContent = text;
}

// Attach event listener to button
btn.addEventListener('click', handleSubmit);