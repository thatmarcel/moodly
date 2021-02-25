module.exports = class CourseContentSection {
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
    summary;

    /**
     * @type {boolean}
    */
    hidden;

    /**
     * @typedef {import("./CourseContentModule")} CourseContentModule
     * @type {CourseContentModule[]}
    */
    modules;
}