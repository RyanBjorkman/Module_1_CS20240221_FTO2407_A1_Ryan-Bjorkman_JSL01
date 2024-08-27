function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let regex = /^pet_\w+$/;

    // TODO: Write your validation logic here

    if (regex.test(input)) {
        result = "Valid input!";
    } else {
        result = "Invalid input. It should start with 'pet_' and be followed by aplphanumeric characters.";
    }
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


