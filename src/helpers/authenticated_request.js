const fetch = require("node-fetch");

/**
 * Make an authenticated request to the specified moodle instance
 * 
 * @param {string} baseURL - The base URL of the moodle instance
 * @param {string} token - A valid authentication token of a user
 * @param {string} method - The requested wsfunction
 * @param {Object=} params - Additional parameters for the request
 * @return {any} The received response
 *
 * @example makeAuthenticatedRequest("https://example.org/moodle", "3a41...8hd", "core_webservice_get_site_info")
*/
const makeAuthenticatedRequest = async (baseURL, token, method, params) => {
    const response = await fetch(`${baseURL}/webservice/rest/server.php?moodlewsrestformat=json&wsfunction=${method}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(Object.assign({}, {
            "moodlewssettingfilter": "true",
            "moodlewssettingfileurl": "true",
            "wsfunction": method,
            "wstoken": token
        }, params || {}))
    });

    const json = await response.json();

    if (json["exception"]) {
        throw json["exception"];
    }

    return json;
}

module.exports = makeAuthenticatedRequest;