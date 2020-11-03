Created a Multiplayer Game Tic-Tac-Toe using React js and Node js, CSS.

Follow this link for working multiplayer game: https://tic-tac-toe-190e9.web.app/

Steps to run commands before deploying project on firebase:

    - brew install yarn
    - rm -rf node_modules
    - rm -rf build 
    - yarn build

Steps to deploy the project on Firebase:

    - npm install -g firebase-tools
    - firebase login
    - firebase init
        - Select : the option: Configure and deploy Firebase Hosting sites 
        - Select : Use an existing project
        ? What do you want to use as your public directory? build
        ? Configure as a single-page app (rewrite all urls to /index.html)? No
        ? Set up automatic builds and deploys with GitHub? No
        ? File build/404.html already exists. Overwrite? No
        i  Skipping write of build/404.html
        ? File build/index.html already exists. Overwrite? No
    - ls -al
    - rm -rf .firebase
    - -rf .firebaserc
    - rm firebase.json
    - firebase deploy
    
   Hosting URL: https://tic-tac-toe-190e9.web.app

