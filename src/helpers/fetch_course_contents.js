const makeAuthenticatedRequest = require("./authenticated_request");
const CourseContentSection = require("./classes/CourseContentSection");
const CourseContentModule = require("./classes/CourseContentModule");
const CourseContentModuleContentItem = require("./classes/CourseContentModuleContentItem");

/**
 * Fetch the contents of the specified course
 *
 * @typedef {import("./classes/CourseContentSection")} CourseContentSection
 * 
 * @param {string} baseURL - The base URL of the moodle instance
 * @param {string} token - A valid authentication token of a user
 * @param {string} courseId - The id of the course for which the contents should be fetched
 * @return {CourseContentSection[]} The sections that make up the content of the specified course
 *
 * @example fetchCourseContents("https://example.org/moodle", "3a41...8hd", 876)
*/
const fetchCourseContents = async (baseURL, token, courseId) => {
    const json = await makeAuthenticatedRequest(baseURL, token, "core_course_get_contents", {
        "courseid": courseId,
        "options[0][name]" : "excludemodules",
        "options[0][value]": "0",
        "options[1][name]" : "excludecontents",
        "options[1][value]": "0"
    });

    return json.map(sectionData => {
        const section = new CourseContentSection();

        section.hidden = sectionData["visible"] === 0;
        section.id = sectionData["id"];
        section.name = sectionData["name"];
        section.summary = sectionData["summary"];

        section.modules = sectionData["modules"].map(moduleData => {
            const module = new CourseContentModule();

            module.hidden = moduleData["visible"] === 0;
            module.id = moduleData["id"];
            module.modName = moduleData["modname"];
            module.modNamePlural = moduleData["modplural"];
            module.name = moduleData["name"];
            module.onClick = moduleData["onclick"];
            module.url = moduleData["url"];

            module.contents = (moduleData["contents"] || []).map(contentItemData => {
                const contentItem = new CourseContentModuleContentItem();

                contentItem.author.name = contentItemData["author"];
                contentItem.author.userId = contentItemData["userid"];
                contentItem.file.isExternal = contentItemData["isexternalfile"];
                contentItem.file.mimeType = contentItemData["mimetype"];
                contentItem.file.name = contentItemData["filename"];
                contentItem.file.size = contentItemData["filesize"];
                contentItem.file.url = contentItemData["fileurl"];
                contentItem.license = contentItemData["license"];
                contentItem.timeCreated = contentItemData["timecreated"];
                contentItem.timeModified = contentItemData["timemodified"];
                contentItem.type = contentItemData["type"];

                return contentItem;
            })

            return module;
        });

        return section;
    });
}

module.exports = fetchCourseContents;