<?php
// Checks if the username:password combination already exists in users.txt
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["registerUsername"];
    $password = $_POST["registerPassword"];

    // Reads the content of users.txt
    $usersFile = "users.txt";
    $fileContent = file_get_contents($usersFile);

    // Splits the content into lines
    $lines = explode(PHP_EOL, $fileContent);

    // Checks if the username already exists
    $usernameExists = false;
    foreach ($lines as $line) {
        $userData = explode(":", $line);
        if (count($userData) == 2) {
            list($storedUsername, $storedPlainTextPassword) = $userData;
            if ($username == $storedUsername) {
                $usernameExists = true;
                break;
            }
        }
    }

    // If the username doesn't exist, add the new user:password combination to users.txt
    if (!$usernameExists) {
        $newLine = "$username:$password" . PHP_EOL;
        file_put_contents($usersFile, $newLine, FILE_APPEND | LOCK_EX);
        header("Location: home.html");
        exit(); // Exit after sending the header
    } else {
        echo "<script>alert('Username already exists');</script>";    //Message in case it already exists    
       
    }
}
?>