module.exports = class CourseContentModule {
    /**
     * @type {number}
    */
    id;

    /**
     * @type {string}
    */
    name;

    /**
     * @type {string}
    */
    url;

    /**
     * @type {boolean}
    */
    hidden;

    /**
     * @type {string=}
    */
    modName;

    /**
     * @type {string=}
    */
    modNamePlural;

    /**
     * @type {string}
    */
    onClick;

    /**
     * @typedef {import("./CourseContentModuleContentItem")} CourseContentModuleContentItem
     * @type {CourseContentModuleContentItem[]}
    */
    contents;
}