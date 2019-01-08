# Dokumentation miniProject fullstack JavaScript

This is an Express backend with REST API for 4. semester fullstack Javascript course at CPH Business.  

You can find the frontend for mobile apps here https://github.com/BoMarconiHenriksen/js_native_to_mini_project.  

Link to deployed backend https://miniprojectfsjsbebop.herokuapp.com/  

Link to Expo app (deployed on Epo) https://expo.io/@benedikteeva/FriendFinderBB  

## How to run the project
1. Clone the project.
2. Cd into the folder.
3. npm install.
4. Start the project writing: nodemon mini
5. Cd into test folder.
6. Test 1 file: mocha <file name>
7. Test all file: 

##### Use Ngrok for a fast server to the native app.
1. cd into root folder.
2. Start the project writing: nodemon mini
3. Start Ngrok: ngrok http 3000
4. In the Ngrok window copy the url from forwarding.
5. Paste the url into the browser and add the API you want to access.
6. Exampel http://a84fc1e4.ngrok.io/api/allusers
7. Above can be used in Native insted of Heroku.
