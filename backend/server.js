const express = require('express');
   const mongoose = require('mongoose');

   const app = express();
   const PORT = process.env.PORT || 5000;

   mongoose.connect('mongodb://mongo:27017/mernapp', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB Connected'))
     .catch(err => console.log(err));

   app.get('/', (req, res) => {
     res.send('Hello from MERN Backend!');
   });

   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));