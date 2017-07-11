#urgenC

##Premise
urgenC is an application that will make it possible for users to contact emergency services if they are in a situation where they cannot use their voices. Although some states have a 'text' object to reach 911, this application seeks to service people from around the US. A user will use the emergency prompt system to document the emergency that is occurring, and the information will be concatted into a long string. Google Maps API will find the location of the user, and that location will be turned into a string and concatted to the original string. The Watson API will turn that string into an audio file, and then Twilio will be used to call emergency services and play the audio file on a loop so 911 dispatch is able to gather information and send out services.

##Technologies
+ Angular, MongoDB, Bootstrap, HTML, CSS, JS
+ IBM Watson API
+ Google Maps API
+ Twilio API

##Assumptions
1. User already has app downloaded before the emergency occurs

###Stretch goals
+ Create a register/login feature that will allow users to preprogram medical emergencies and give users the ability to edit their profile information for more clarity with 911 calls
+ Translate the prompts for non-English speaking users


App colors:

Gray: 8A9399
Blue: 4dd7fa


###API Keys

+ Google Maps Geocoding and Reverse Geocoding
key:

AIzaSyBuw0vQhDNOuKn02d4Z0LZ1KyM1gm1gMnk
URL:
https://maps.googleapis.com/maps/api/geocode/json?latlng=(lat and longitude here)&key=
AIzaSyBuw0vQhDNOuKn02d4Z0LZ1KyM1gm1gMnk

Twilio
test key
authToken: ACe2174850132f262cd41010d72b00d102
key: d0b02e9c3c3d60058364e5a66da532ba
