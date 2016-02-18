![](https://s3.amazonaws.com/uploads.hipchat.com/28219/1858130/GXjP1amIn52JTEg/logo.png)
## Cadmus

> Cadmus is a user testing tool built for Unmonitored Remote Usability Testing (URUT).

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
