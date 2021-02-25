# moodly
**moodle.org client for Node.js**

This library lets you interact with and fetch content from moodle instances you are registered at.

## Installation
`npm install moodly`

## Usage
### Example
```javascript
const moodly = require("moodly");

const client = moodly.client("https://example.com/moodle");

await client.authenticate("username", "password");

const courses = await client.fetchCourses();

const contents = await client.fetchCourseContents(courses[0].id);

console.log(contents);
```

## Dependencies
This library uses [node-fetch](https://github.com/node-fetch/node-fetch)

## License
This library is licensed under the MIT license.
See LICENSE for more details.