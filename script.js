
function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    
    // Input field for users to fill in.The input must be filled in a certain way and order
    let inputField = /^pet_[a-zA-Z0-9]+$/; 

       if (inputField.test(input)) {
            result = 'Valid Syntax';  //Input field will result as Valid if users have filled it in the correct way
        } else {
            result = 'Invalid Syntax'; //Input field will result as Invalid if users have filled it in the incorrect way
        }
              // Displays input results on the web page
            document.getElementById('result').innerText = result;
}


