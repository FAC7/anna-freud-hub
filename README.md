# anna-freud-hub

[![Join the chat at https://gitter.im/FAC7/anna-freud-hub](https://badges.gitter.im/FAC7/anna-freud-hub.svg)](https://gitter.im/FAC7/anna-freud-hub?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[App can be viewed here](https://annafreudhub.herokuapp.com/)

## What, Why, How
Hub is an application that former and current NHS patients can view events created by the NHS.  An NHS worker can post events using the web view.  

NHS events can easily go unnoticed by former and current patients.

Service users can install an iPhone app, built in *React Native*.  NHS workers can post events using a web view built using *handlebars.js*.
*Node, Hapi and Redis* were used on the back-end.

## Getting Started

## User Stories
#### User Stories (Young Person)

* Select my interests.
* Browse events near me.
* See more details on interesting events.
* Change my attending status.
* Push notification if new interesting event.
* Push notifications for updates on an event only if it is already my event.
* Be able to contact event organiser.

#### User Stories (Event Organiser)

* I want to post an event.
* I want to add location, time and categories.
* I want to edit the details of an event.
* I want to see the number of attendees.
* I want to be able to send push notification to users when I update the event.
* I want a simple interface.
* I want to see a list of all my events.

#### Possible UI details

* Grid system for interest view.
* Single column lists for events.
* Splash screen.
* Bottom aligned navigation bar (preferably with icons).

#### Stretchy Stretch

* Link to google maps.
* Intro sequence after splash screen.

## iOS Mockups (Young Person)

![hub-wireframes](https://cloud.githubusercontent.com/assets/12462448/15356921/9af50126-1cf3-11e6-8756-b061a9cedec0.png)

## Webview Mockups (Event Organiser)

The clinician will first see the login screen and can either login or register for a new account

![hub-login](https://cloud.githubusercontent.com/assets/14013616/15893799/f647329c-2d79-11e6-8e53-b305dac5a9ac.jpg)

The clinician and register their details here

![hub-register](https://cloud.githubusercontent.com/assets/14013616/15893800/f6495ce8-2d79-11e6-8157-cac57bc8d658.jpg)

After logging in the clinician will be able to review their created events (see how many people are attending), edit them, delete them or add a new event

![hub-dashboard](https://cloud.githubusercontent.com/assets/14013616/15893798/f6419b70-2d79-11e6-9125-5e2a3582209e.jpg)

Adding or editing an event will bring up this screen

![hub-add-event](https://cloud.githubusercontent.com/assets/14013616/15893797/f62fb7ac-2d79-11e6-94d1-9abf0c9e4c7a.jpg)
