// importing the express library
const express = require('express');

/* This app object is used to set up configuration that will listen for incoming requests
   that are being routed to the express side of the app from the node side 
   and then route those requests on to different route handlers.  */ 
const app = express();


// below is a route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// localhost:5000