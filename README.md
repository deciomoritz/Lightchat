# Lightchat
A small chat application using meteor, angular and ionic for mobile app development learning.

For running, install meteor:

$ curl https://install.meteor.com/ | sh

In case you don't have curl installed:

$ sudo apt-get install curl

Clone the project:

$ git clone https://github.com/deciomoritz/Lightchat.git

To run, just type in the /Lightchat folder:

$ sh start.sh


optional, for everything to work: 

For google oauth login to work, you must create a new credential in 
https://console.cloud.google.com/apis/credentials

Update the file server/accounts.js with your client id and secret key.

If you'd like to use a address instead of localhost to test in local network, you may 
also need to redirect your machine's address using noip or similar service.

### Ideas:

*Invited user, who can't creat chats nor send messages
*user registration in the app
*private area
