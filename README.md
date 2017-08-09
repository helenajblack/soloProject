# urgenC

## Premise
urgenC is an application that will make it possible for users to contact emergency services if they are in a situation where they cannot use their voices. Although some states have a 'text' object to reach 911, this application seeks to service people from around the US. A user will use the emergency prompt system to document the emergency that is occurring, and the information will be combined into a long string. Google Maps API will find the location of the user, and that location will be turned into a string and added to the original string. The Watson API will turn that string into an audio file, and then Twilio will be used to call emergency services and play the audio file on a loop so 911 dispatch is able to gather information and send out services.

## Components

### False Calendar
![alt text](https://github.com/helenajblack/soloProject/blob/master/public/images/Calendar.png?raw=true "False Calendar")

The application immediately opens to a false calendar, and upon clicking the date _911_ the application opens. In the case that a user needs to hide the application at any point, the ![alt text](https://github.com/helenajblack/soloProject/blob/master/public/images/hidegray.png?raw=true "Hide Button") will allow them to enter the false calendar view to disguise their usage.

### Tutorial
![alt text](https://github.com/helenajblack/soloProject/blob/master/public/images/Tutorial1.png?raw=true "Tutorial 1")
![alt text](https://github.com/helenajblack/soloProject/blob/master/public/images/Tutorial2.png?raw=true "Tutorial 2")

The tutorial guides users in how to most effectively utilize the application.

### Prompt System

![alt text](https://github.com/helenajblack/soloProject/blob/master/public/images/Prompt1.png?raw=true "Prompt System 1")
![alt text](https://github.com/helenajblack/soloProject/blob/master/public/images/Prompt2.png?raw=true "Prompt System 2")

The prompt system is an interactive feature in which the user can submit their emergency by answering simple questions designed to get the most important information out of them. These questions were designed after consultation with emergency dispatch and were created to be appropriate (asked at the right time, in the correct situation) and simple to understand for non-native English speakers.

The colors were chosen to not give users emotional feedback - instead of green or red buttons that may make users think that there are right or wrong answers, colors are different shades of blue so that they are easy to see. 

### Call Page

![alt text](https://github.com/helenajblack/soloProject/blob/master/public/images/Ending.png?raw=true "Call")

This page appears after the user has submitted all of their information with the prompt system.

## Technologies
### Frameworks
+ Angular, MongoDB, Bootstrap, HTML, CSS, JS, NodeJS
### APIS
+ IBM Watson
+ Google Maps
+ Twilio

## Assumptions
+ User already has app downloaded before the emergency occurs

## Stretch goals
1. Create a register/login feature that will allow users to preprogram medical emergencies and give users the ability to edit their profile information for more clarity with 911 calls
2. Translate the prompts for non-English speaking users
3. Full functionality in all prompts
