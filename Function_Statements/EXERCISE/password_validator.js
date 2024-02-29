function passwordValidator(password) {
    let valid = true;

    if (!(6 <= password.length && password.length <= 10)) {
        console.log("Password must be between 6 and 10 characters");
        valid = false;
    }

    const regex = RegExp('[^A-Za-z0-9]');
    if (regex.test(password)) {
        console.log("Password must consist only of letters and digits");
        valid = false;
    }

    const searchDigitsResult = password.match(/[0-9]/g);
    if (!searchDigitsResult || searchDigitsResult.length < 2) {
        console.log("Password must have at least 2 digits");
        valid = false;
    }

    if (valid) {
        console.log("Password is valid")
    }
}

passwordValidator('Pa$s$s')


function passwordValidator(password) {
    const alphanumericValidation = /^[a-z0-9]+$/i;
    const extractDigitsFromString = /\D/g;

    let output = "";

    if (password.length < 6 || password.length > 10) {
        output += "Password must be between 6 and 10 characters\n";
    }

    if (!alphanumericValidation.test(password)) { // test връща boolean
        output += "Password must consist only of letters and digits\n";
    }

    if (password.replace(extractDigitsFromString, "").length < 2) {
        output += "Password must have at least 2 digits\n";
    }

    if (output) console.log(output.trim());
    else console.log("Password is valid");
}