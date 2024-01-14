const express = require('express')
const cors = require('cors')
const { OAuth2Client } = require('google-auth-library');
const app = express()
const port = 5000

// MIDDLEWARE 
app.use(cors());

const CLIENT_ID = '791721392559-dtf0co99dnipffpbt7oq514f0q8ppj4r.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:5000/oauth2callback';

// The file path where the credentials will be stored
const TOKEN_PATH = 'token.json';

// Create OAuth2 client
const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);




app.get('/', (req, res) => {
  res.send('Hello World!')
})


// REDIRECT URI
app.get('/oauth2callback', (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send('Authorization code not provided.');
  }

  oAuth2Client.getToken(code, (err, token) => {
    if (err) {
      console.error('Error getting access token:', err.message);
      return res.status(500).send('Error getting access token.');
    }

    oAuth2Client.setCredentials(token);

    // Save the token to a file or database
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
      if (err) {
        console.error('Error saving token:', err.message);
        return res.status(500).send('Error saving token.');
      }

      console.log('Token saved to', TOKEN_PATH);
      res.send('Authorization successful! You can now close this window.');
    });
  });
});


function refreshAccessToken() {
  oAuth2Client.refreshAccessToken()
    .then(res => {
      // Save the new credentials to the token file
      fs.writeFile(TOKEN_PATH, JSON.stringify(res.credentials), (err) => {
        if (err) return console.error(err);
        console.log('Token refreshed and saved to', TOKEN_PATH);
      });
    })
    .catch(err => {
      console.error('Error refreshing access token:', err.message);
    });
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})