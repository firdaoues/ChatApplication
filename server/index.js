const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5001;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded);

app.get('/', (req, res) => {
    res.send('Welcome' );
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

