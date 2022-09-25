import mysql from 'mysql2/promise'
 export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
   password: '12345678',
//    port: ' 3308',
    database: 'softwareDB'
});


// console.log(conection.connection);


// conection.connection( (err) =>  {
//     if(err) throw err.message;      
 
//        console.log( 'MySql data Base conected'); 
   
// });

