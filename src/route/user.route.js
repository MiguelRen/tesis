import { Router } from "express";
import { pool } from '../db.js'
const router = Router();
// MySql  Data Base Creation


import { getUser , createUser , updateUser , deleteUser, getUserById } from '../controller/user.controller.js'

    
    router.get( '/user' ,  getUser ) ;
    router.get( '/user/:id' ,  getUserById ) ;
    
    router.post( '/user' ,  createUser ) ;
    
    router.put( '/user/:id' , updateUser ) ;
    
    router.delete( '/user/:id' , deleteUser ) ;
    

export default router;