const authenticateClient = require("./helpers/authenticate");
const fetchUserId = require("./helpers/fetch_user_id");
const fetchUserCourses = require("./helpers/fetch_user_courses");
const fetchCourseContents = require("./helpers/fetch_course_contents");

module.exports = class MoodlyClient {
    /**
     * The base URL of the moodle instance
     * @type {string}
    */
    baseURL;

    /**
     * A valid authentication token for the authenticated user, if existent
     * @type {string=}
    */
    authenticationToken;

    /**
     * The id of the authenticated user, if existent
     * @type {number=}
    */
    userId;

    /**
     * The username of the authenticated user, if existent
     * @type {string=}
     * @private
    */
    #username;

    /**
     * The password of the authenticated user, if existent
     * @type {string=}
     * @private
    */
    #password;

    /**
     * Create a client for the Moodle APIs
     * @param {number} baseURL - The base URL of the moodle instance
    */
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    /**
     * Authenticate a user with a username and password
     * 
     * @param {string} username - A valid username on the moodle instance
     * @param {string} password - The password belonging to the username
     *
     * @example client.authenticate("satoshi_nakamoto", "password")
    */
    async authenticate(username, password) {
        this.username = username;
        this.password = password;
        this.authenticationToken = await authenticateClient(this.baseURL, username, password);
        this.userId = await fetchUserId(this.baseURL, this.authenticationToken);
    }

    /**
     * Fetch all courses the specified user is enrolled in
     *
     * @typedef {import("./helpers/classes/Course")} Course
     * @return {Course[]} All courses the specified user is enrolled in
     * @example client.fetchCourses()
    */
    async fetchCourses() {
        return fetchUserCourses(this.baseURL, this.authenticationToken, this.userId);
    }

    /**
     * Fetch the contents of the specified course
     *
     * @typedef {import("./helpers/classes/CourseContentSection")} CourseContentSection
     * 
     * @param {string} courseId - The id of the course for which the contents should be fetched
     * @return {CourseContentSection[]} The sections that make up the content of the specified course
     *
     * @example client.fetchCourseContents(876)
    */
    async fetchCourseContents(courseId) {
        return fetchCourseContents(this.baseURL, this.authenticationToken, courseId);
    }
}