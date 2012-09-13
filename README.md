This repository referes to a Chrome extension developed to assist connecting a user to [tamponapp.com](http://tamponapp.com).

Tampon is built as a Backbone.js application that communicates with a MongoDB datastore through a REST API written in PHP.

The server part is intended to be the dumbest possible, i.e. we tried to put most "intelligence" in the Backbone app, not in the API. (For example, the API only takes UNIX timestamps and posts' content, while the Backbone app computes the scheduled timestamps).

A daemon based on PHP-Daemon then runs in the background and is responsible for sending your posts to Twitter when they're due.

You can find the original application at [tamponapp.com](http://tamponapp.com) or [github.com/julien-c/Tampon](https://github.com/julien-c/Tampon/)