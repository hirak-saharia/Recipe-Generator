- Loading a Recipe from API -------
- Folder and files setup
  - index.html out of the src
  - all of the rest four assests for this project are here in src
  - In src folder > we have images > JavaScript > Saas
  - For JS > WE HAVE controller.js
  - Saas folder > basically a better way of writting CSS whcih have some nice additional features for large scale application. Now browser dont understand Saas and it has to be converted to CSS.
  - Parcel will be going to that for us.
  - And we have some images

Step1: - Open a new terminal >

- Initialize a new project > npm init - create package.json file
- in package.json > write this code :
  "main": "index.html", // Note: remove main entire or delete this whole for parcel v2
  "scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
  },
- To run parcel > install: npm i parcel@2
- Run the script > npm start
- Now app running on localhost:1234
- Now we have node_module and dist folder which contains tons of modules
- In dist folder > we have everything like index.html then the controller script
- For Parcel v2 > replace defer with type='module' in here :<script defer src="src/js/controller.js"></script>
- Now we no longer need html file from outside
- ALL we need to think about is controler file from js folder
- First making API call in controller.js
-
