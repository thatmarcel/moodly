/**
 * @typedef {{ name: string, size: number, url: string, isExternal: boolean, mimeType: string }} CourseContentModuleContentItemFile
 * @typedef {{ name: string, userId: number }} CourseContentModuleContentItemAuthor
*/

module.exports = class CourseContentModuleContentItem {
    /**
     * @type {string}
    */
    type;

    /**
     * @type {CourseContentModuleContentItemFile}
    */
    file = {
        name: "",
        size: -1,
        url: "",
        isExternal: false,
        mimeType: ""
    };

    /**
     * @type {number}
    */
    timeCreated;

    /**
     * @type {number}
    */
    timeModified;

    /**
     * @type {CourseContentModuleContentItemAuthor}
    */
    author = {
        name: "",
        userId: -1
    };

    /**
     * @type {string}
    */
    license;
}