const makeAuthenticatedRequest = require("./authenticated_request");

/**
 * Fetch the id of the user the specified token belongs to
 * 
 * @param {string} baseURL - The base URL of the moodle instance
 * @param {string} token - A valid authentication token of a user
 * @return {string} The id of the user the specified token belongs to
 *
 * @example fetchUserId("https://example.org/moodle", "3a41...8hd")
*/
const fetchUserId = async (baseURL, token) => {
    const json = await makeAuthenticatedRequest(baseURL, token, "core_webservice_get_site_info");
    
    return json["userid"];
}

module.exports = fetchUserId;