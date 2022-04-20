const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://amit-DB:amit3112@cluster0.eztoe.mongodb.net/amit-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use((req, res, next) => {
    let dateTime = new Date();
    console.log('Time :',dateTime +'   '+'Request Type:', req.method+'   '+'Request Url :', req.originalUrl+'   '+'IP :', req.socket.remoteAddress)
    next()
  })


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
