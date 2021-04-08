# _Tech Course Calendar_

#### _A web-based application for a user to select their course schedule and export it to a calendar app._

#### _By **Juan Hasbun, Shannon Lee, Theron Packus and Jessica R. Williams**_

#### _Table of Contents_

1. [Preview](#preview)
2. [Technologies Used](#technologies)
3. [Description](#description)
4. [Setup/Installation Requirements](#setup)
5. [Additional Setup/Installation Note for Windows Users](#windows)
6. [Specifications](#specs)
7. [Known Bugs](#bugs)
8. [License](#license)
9. [Contact Information](#contact)

## Preview <a id="preview"></a>

* _Direct your browser to a [live version](jessicarubinwilliams.github.io/tech-course-calendar/index.html) on GitHub Pages._

## Technologies Used <a id="technologies"></a>

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _datebook 4.5.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Description <a id="description"></a>

_In this application, a user can select courses from a catalog for a hypothetical coding school, and add them to their schedule. From the schedule of selected courses, the user may add the the courses as events to their calendars by clicking buttons for Google Calendar, Outlook, and iCalendar respectively. For Google or Outlook accounts, a link is generated, and for iCalendar accounts a .ics file is downloaded. It also has the functionality to save the user's name and course selections in local storage._

## Setup/Installation Requirements <a id="setup"></a>

* _Open the terminal on your local machine_
* _If [Node.js](https://nodejs.org/en/) and [Nope Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/tech-course-calendar>`_
* _Navigate to the top level of the repository with the command `$ cd tech-course-calendar`_
* _Recreate project environment and install required dependencies with terminal command `$ npm install`_
* _Create production environment with terminal command `$ npm run build`_
* _Open project in a development server in the browser of your choice with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_

## Additional Setup/Installation Note for Windows Users <a id="windows"></a>

_This environment was created on a Mac. For it to work properly in your local environment make the following change:_
* _Update package.json, line 8 to: `"start": "npm run build & webpack-dev-server --open --mode development",`_

## Known Bugs <a id="bugs"></a>
* _No known bugs_

## License <a id="license"></a>
*[MIT](https://choosealicense.com/licenses/mit/)*

Copyright (c) **_2021 Juan Hasbun, Shannon Lee, Theron Packus and Jessica R. Williams_**

## Contact Information <a id="contact"></a>
**_Juan Hasbun [mailto](mailto:zemenarwow@gmail.com), Shannon Lee [mailto](mailto:shannonleehj@gmail.com), Theron Packus [mailto](mailto:tlpackus@gmail.com) and Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**