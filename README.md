React Native Crud with Authentication Project
If you have not yet installed React Native, you can use this link https://reactnative.dev/.
Check react-native-navigation's documentation for usage details -https://reactnavigation.org/.

preparing your project

Download npm dependencies:

npm i -g react-native-cli, '\n'
npm install, 
then inside CRUD_EXPRESS folder run npm run dev
then inside root folder CRUD run ngrok http 3000.If you have not yet installed you can use this link -ngrok https://ngrok.com/
Inside CRUD folder our all source code you can find inside app folder.
copy http link from ngrok and past inside aap/api/tracker.js baseURL.

Running your project

From project dir, run:
iOS

    Build and run (this will start a simulator if not already started)

    react-native run-ios

    This would also start a packager if not already started

    Set your Simulator to live reload changes ⌘+d (cmd+d) => Enable Live Reload

Android

    Start an emulator

    Build and run
    npx react-native run-android
