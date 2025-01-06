<?php
// Check if username:password combination is in users.txt
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["loginUsername"];
    $password = $_POST["loginPassword"];

    // Reads the content of users.txt
    $usersFile = "users.txt";
    $fileContent = file_get_contents($usersFile);

    // Splits the content into lines
    $lines = explode(PHP_EOL, $fileContent);

    // Loops through each line
    foreach ($lines as $line) {
        // Splits each line into username and plain text password
        list($storedUsername, $storedPlainTextPassword) = explode(":", $line);

        // Checks if the entered username matches the stored username and the password is correct
        if ($username == $storedUsername && $password == $storedPlainTextPassword) {
            // Redirects to home.html once log in
            header("Location: home.html");
            exit(); // Ensure no further code is executed after the redirect
        }
    }

    // If no matching username:password combination is found
    echo "Invalid username or password";
}
?>