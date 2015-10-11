# Meteor NES

A Nintendo Entertainment System Emulator on Brower. Any smartphone can join as a Joystick!

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/oBXW0tK7U_s/0.jpg)](http://www.youtube.com/watch?v=oBXW0tK7U_s)

### DEMO

<http://meteor-nes.meteor.com>

Note that sometimes it's very lag due to the latency.


### Play in your Desktop

    git clone https://github.com/waitingkuo/meteor-nes
    cd meteor-nes
    ROOT_URL=http://YOUR_IP_ADDRESS:3000 meteor

To use smartphone to connect the server, you have to use the ip that the smartphone can connect. (i.e., dont use localhost as `YOUR_IP_ADDRESS`)


### Things behind

    1. jsnes - NES emulator in js
    2. hammer.js - more smooth press events on the smartphone
    3. NEC controller html/css from http://codepen.io/fullkornslimpa/pen/jxiHd/
    4. flowrouter/blazelayout - Meteor Router & Layout from Kadira
    5. jquery-qrcode - to generate QR-CODE
    6. streamy - Meteor package that enable browser to browser communication in Meteor-NES
    7. ecmascript - ES2015, though I didn't use too much new features in this project.

