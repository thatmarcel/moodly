const fetch = require("node-fetch");

/**
 * Authenticate a user with a username and password
 * 
 * @param {string} baseURL - The base URL of the moodle instance
 * @param {string} username - A valid username on the moodle instance
 * @param {string} password - The password belonging to the username
 * @return {string} An authentication token for the user
 *
 * @example authenticateClient("https://example.org/moodle", "satoshi_nakamoto", "password")
*/
const authenticateClient = async (baseURL, username, password) => {
    const response = await fetch(`${baseURL}/login/token.php`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            "service": "moodle_mobile_app",
            "username": username,
            "password": password
        })
    });

    const json = await response.json();
    
    const token = json["token"];

    if (!token) {
        throw "Authentication failed";
    }

    return token;
}

module.exports = authenticateClient;