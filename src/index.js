import express from 'express';
// import mysql from 'mysql2';
import  userRoute  from './route/user.route.js'
import indexRoute from './route/index.route.js'


const app = express();

app.use( express.json() )
app.use( indexRoute )
app.use( '/api',userRoute )

const port = process.env.PORT || 3000;
app.listen ( port , () => console.log(`server ready on port ${ port }`) );
