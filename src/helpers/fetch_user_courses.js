const makeAuthenticatedRequest = require("./authenticated_request");
const Course = require("./classes/Course");

/**
 * Fetch all courses the specified user is enrolled in
 *
 * @typedef {import("./classes/Course")} Course
 * 
 * @param {string} baseURL - The base URL of the moodle instance
 * @param {string} token - A valid authentication token of a user
 * @param {string} userId - The id of the user for whom the courses should be fetched
 * @return {Course[]} All courses the specified user is enrolled in
 *
 * @example fetchUserCourses("https://example.org/moodle", "3a41...8hd", 173)
*/
const fetchUserCourses = async (baseURL, token, userId) => {
    const json = await makeAuthenticatedRequest(baseURL, token, "core_enrol_get_users_courses", {
        "userid": userId
    });

    return json.map(item => {
        const course = new Course();

        course.category = item["category"];
        course.completed = item["completed"];
        course.completionHasCriteria = item["completionhascriteria"];
        course.completionUserTracked = item["completionusertracked"];
        course.enableCompletion = item["enablecompletion"];
        course.endDate = item["enddate"];
        course.enrolledUserCount = item["enrolledusercount"];
        course.format = item["format"];
        course.hidden = item["hidden"];
        course.id = item["id"];
        course.isFavourite = item["isfavourite"];
        course.lang = item["lang"];
        course.lastAccess = item["lastaccess"];
        course.names.long = item["fullname"];
        course.names.short = item["shortname"];
        course.progress = item["progress"];
        course.showGrades = item["showgrades"];
        course.startDate = item["startdate"];
        course.summary = item["summary"];

        return course;
    });
}

module.exports = fetchUserCourses;