
function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    


    let result = ''; // Placeholder for validation result
    
// this regular expression defines a pattern for validating input strings that are intended to represent pet names in a specific format,
// ensuring they start with "pet_" followed by one or more alphanumeric characters.
    let  validInput = /^pet_[a-zA-Z0-9]+$/;

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    
 // This code checks whether the value entered into the input field meets a specific syntax pattern defined by the regular expression stored
//in the validInput variable.
 // If the input matches the pattern, it sets the result variable to 'Valid Syntax', otherwise, it sets result to 'Invalid Syntax'.
// Finally, it updates the content of an HTML element with the ID "result" to display the outcome of the syntax.    
     if (validInput.test(input)) { 
            result = 'Valid Syntax'
        } else {
            result = 'Invalid Syntax'
        }
     
        
     document.getElementById('result').innerText = result;
}


