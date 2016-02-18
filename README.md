![](https://s3.amazonaws.com/uploads.hipchat.com/28219/1858130/GXjP1amIn52JTEg/logo.png)
## Cadmus

> Cadmus is a user testing tool built for Unmonitored Remote Usability Testing (URIT).

### Demo

See the latest version at https://ewegithub.sb.karmalab.net/pages/EWE/Cadmus/

### Database

Tasks and screenshots come from a Google Spreadsheet - https://docs.google.com/spreadsheets/d/1l0lTM6bBNNTrTlRWWppG55vum5IfdQ5fZ-oU-j1wzhc/edit#gid=0

Screenshots URL's should be added without the protocol. I recommend dumping screenshots in a HipChat message for free S3 upload.

### Getting started

To start developing, you need to:

1. Clone the repository
2. Checkout `gh-pages` branch (if not already on it)
3. Start the server `python -m SimpleHTTPServer`
4. Open `localhost:8000/dev.html` to load local assets

### Deployment

Any code pushed to the `gh-pages` branch will be deployed and visible at the demo URL above. Sometimes it takes a few minutes for the page to show pushed changes.
