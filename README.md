![](https://s3.amazonaws.com/uploads.hipchat.com/28219/1858130/GXjP1amIn52JTEg/logo.png)
## Cadmus

> Cadmus is a user testing tool built for Unmoderated Remote Usability Testing (URUT).

### Overview
Recently I (Jason) was asked to look into some user testing tools available which could aid us in running some [Unmoderated User Testing](http://uxmastery.com/how-to-run-an-unmoderated-remote-usability-test-urut/) sessions. None of the tools I looked into really provided the perfect solution. Some offer great recording solutions but only opened their app up to using testers they sourced themselves, or some tools would allow for internal testing but only allowed the user of publicly accessible URLs.

So I thought why not try whip something up, order a computer that we can stick in a room and start building our own lab! I have created a SUPER simple application that takes a bunch of tasks and screenshots from a Google Spreadsheet and displays them to the user. The functionality is very limited at the moment but it’s a good start. Ben Doyle has begun setting up a computer (with a webcam) in the office next to Danny’s, which will be available at anytime running Cadmus.

Understandably every team has their own priorities, but if you have some time between builds and want to play with some fun technologies then feel free to jump in. The documentation explains how to get started and deploy any changes, if you any issues please let me know. Even if you don’t want to write any code but have some ideas, I would love to see them posted on the [Issues page](/EWE/Cadmus/issues).

### Demo

See the latest version at https://ewegithub.sb.karmalab.net/pages/EWE/Cadmus/

### Database

Tasks and screenshots come from a Google Spreadsheet - https://docs.google.com/spreadsheets/d/1l0lTM6bBNNTrTlRWWppG55vum5IfdQ5fZ-oU-j1wzhc/edit#gid=0

Screenshots URL's should be added without the protocol. I recommend dumping screenshots in a HipChat message for free S3 upload.

### Getting started

To start developing, you need to:

```
git clone git@ewegithub.sb.karmalab.net:EWE/Cadmus.git
cd cadmus
npm install
cd src
python -m SimpleHTTPServer
```

All development work is done in the `src` directory.

### Deployment

Run `gulp deploy` when you are ready to push your changes live.
