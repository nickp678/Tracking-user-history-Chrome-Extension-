# User History Tracker (Chrome Extension)

## Introduction

This Chrome extension will allow an attacker to listen to a user's browser's history and receive the URL through a Nodejs listener. The Nodejs listener will also then automatically output the browser history into a csv file.

## Prerequistes

* You will need Nodejs as a requirement. Installation guide can be found here: https://nodejs.org/en/download/


## List of Steps to run Extension

1. Run Nodejs server by executing "node app.js" inside Q3.1 folder. If the server is running correctly you should see "ILUVU3000" in the terminal window.

2. Unload "thextension" folder in Chrome.

3. Run the extension and start browsing.

4. From the server you should see the URLs you have browsed. In the background they are being appended to the csv file.

5. To check csv file, stop the server and execute "cat data.csv" and contents of csv should show.
