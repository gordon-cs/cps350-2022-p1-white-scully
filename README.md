# Gordon Events Weather

cps350-2022-p1-white-scully

<b>A quick note about Luxon implementation</b>
  For Luxon, a DatePicker package, in order to work on Android framework needs the "Intl" package which determines what date format is to be used.
  This needs to be added to the "build.gradle" file which is not available in expo. After much research, I have determined that 
  it would not be productive to search for another DateTime library, and have a temporary fix on how to allow Luxon to work on Android detailed below.
  
- Clone project
- Run `npm install` command in project directory
- Navigate in the project directory to "node_modules/luxon/build/cjs-browser"
- Select the "luxon.js" file
- Below `'use strict';`, paste the following lines
```
import 'intl';
import 'intl/locale-data/jsonp/en';
```
- Build project and you should be all set to use Luxon!
