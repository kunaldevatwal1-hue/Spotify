// require('dotenv').config();
// const app=require('./src/app')

// const connectDB=require('./src/db/db')



//  connectDB();

//  console.log(
//     "ImageKit key loaded:",
//     Boolean(process.env.IMAGEKIT_PRIVATE_KEY)
// );

// console.log({
//     keyLoaded: Boolean(process.env.IMAGEKIT_PRIVATE_KEY),
//     keyPrefix: process.env.IMAGEKIT_PRIVATE_KEY?.slice(0, 8)
// });

// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })


require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');


connectDB();



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})