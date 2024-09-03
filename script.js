function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    let regex = /^pet_\w+$/;

    // TODO: Write your validation logic here

    if (regex.test(input)) {
        result = "Valid Syntax!";
    } else {
        result = "Invalid Syntax.";
    }
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}

/*

function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Check if input starts with 'pet_'
    if (input.startsWith('pet_')) {
        // Extract the part after 'pet_'
        let remainingPart = input.slice(4); 

        // Check if the remaining part is not empty and contains only alphanumeric characters
        if (remainingPart && /^[A-Za-z0-9_]+$/.test(remainingPart)) {
            result = "Valid input!";
        } else {
            result = "Invalid input. It must have alphanumeric characters after 'pet_'.";
        }
    } else {
        result = "Invalid input. It should start with 'pet_'.";
    }

    // Display the result
    document.getElementById('result').innerText = result;
}
    */