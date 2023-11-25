# Lucid
A JavaScript "Framework" for easily turning HTML, CSS, and JavaScript web applications into single-page apps.

## Table Of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Features](#features)
- [Planned](#planned)
- [Wiki](#wiki)
- [Disclaimer](#disclaimer)
- [FAQ](#faq)

## Requirements
- Xampp
- Git 

## Installation
- Install Xampp
- Create a new Directory in your Xampp htdocs folder
- Clone this git repository in to that folder
- Start Coding!

## Features
- Simplicity: Lucid is very easy to use since it's just coding HTML as usual.
- Single-page App Routing

## Planned
My initial plan was to create a small code snippet that turns your web app into a single-page application without having to learn a whole framework but it's going pretty well so I might make more out of it while keeping this version as it is. Here are the planned functions for a maybe far future version of Lucid (which probably won't be named "Lucid" anymore at that point):
- Automatic CSS and JavaScript file includes (by having the in the same folder and given them a specific name)
- Server-sided functionality, such as database usage
- Simpler API-Calls
- *More suggestions are appreciated*

- Might switch from plain JavaScript to NodeJS

## Usage
Coding with Lucid is just like coding with HTML, CSS and JavaScript as usual with the only difference that it automatically prevents the page from reloading and replacing the page's content with the requested page content and partially compresses it.

### Routing
Place an index.html file in the desired /route directory. That file will be loaded when the /route is called.
For example: going to "/hi" will "/hi/index.html".

### Styles and Scripts
CSS and JavaScript can be added by putting <style> and <script> tags in your index.html file. It should be possible to include them via <link> and <script src> as well but I am not sure since it's work in progress. If you encounter any issues, please let me know.

## FAQ
### What are the benefits?
Keeping it simple and creating a better user experience. You don't have to learn anything new related to HTML, CSS or JavaScript but the user experience will automatically be better because the page loads smoother and therefore looks better.

## Disclaimer
This project is far from finished and possibly contains some bugs.
You should especially be careful with the links you put in your <a> tags since it might not lead to where you want it to. So play a round with it by using "../", "./", ... and tell me if something doesn't work the way it should.
I am also not sure if Xampp is really needed since html can be run in the browser directly but I don't know if the .htaccess is going to work fine that way.
