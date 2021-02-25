/**
 * @typedef {{ short: string, long: string }} CourseNames
*/

module.exports = class Course {
    /**
     * @type {number}
    */
    id;

    /**
     * @type {CourseNames}
    */
    names = {
        short: "",
        long: ""
    };

    /**
     * @type {string}
    */
   summary;

    /**
     * @type {number}
    */
    enrolledUserCount;

    /**
     * @type {boolean}
    */
    hidden;

    /**
     * @type {string}
    */
    lang;

    /**
     * @type {string}
    */
    format;

    /**
     * @type {number}
    */
   category;

    /**
     * @type {boolean}
    */
    showGrades;

    /**
     * @type {boolean}
    */
    enableCompletion;

    /**
     * @type {boolean}
    */
    completionHasCriteria;

    /**
     * @type {boolean}
    */
    completionUserTracked;

    /**
     * @type {number=}
    */
   progress;

   /**
     * @type {boolean=}
    */
   completed;

   /**
     * @type {number}
    */
   startDate;

   /**
     * @type {number}
    */
   endDate;

   /**
     * @type {number=}
    */
   lastAccess;

   /**
     * @type {boolean}
    */
   isFavourite;
}