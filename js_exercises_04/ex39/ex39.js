const inputs = document.querySelectorAll('.verificationInput');
const comment= document.querySelector('.commentToUser');

// Function to focus on the next input field
const focusNextInput = (currentInput) => {
  const currentIndex = Array.from(inputs).indexOf(currentInput);
  if (currentIndex < inputs.length - 1) {
    inputs[currentIndex + 1].focus();
  }
};  

// Function to handle paste event
const handlePaste = (event) => {
    event.preventDefault();
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('text');
    if (pastedData.length <= inputs.length) {
      for (let i = 0; i < pastedData.length; i++) {
        inputs[i].value = pastedData[i];
        focusNextInput(inputs[i]);
        comment.textContent='Pasted data is shorter than available inputs!';
      }
      if (pastedData.length === inputs.length) {
        document.getElementById('verificationForm').submit();
        console.log("submit");
      }
    } else {
      // Handle case where pasted data is longer than available inputs
      comment.textContent='Pasted data is longer than available inputs!';
    }
  };
  
  // Add event listeners
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      focusNextInput(input);
    });
    input.addEventListener('paste', handlePaste);
  });