const MoodlyClient = require("./src/MoodlyClient");

module.exports = class MoodlyLib {
    static client(baseURL) {
        return new MoodlyClient(baseURL);
    }
}