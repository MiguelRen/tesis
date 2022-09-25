import { pool } from '../db.js'

export const getUser = async (req,res) => {
    const [rows] = await pool.query(
        'SELECT * FROM tabUsuario'
    )
    console.table(rows);
    res.send( rows )
}

export const createUser = async (req,res) => {
  
    const { usuUsuarioId , usuUsuarioNom , usuUsuarioContra , usuUsuarioRol  } = req.body; 
   
    let [rows] = await pool.query(
    `INSERT INTO tabUsuario 
    VALUES (?,?,?,?) `,
    [usuUsuarioId,usuUsuarioNom,usuUsuarioContra,usuUsuarioRol]);
    res.send( rows );
    console.log('done')
} 
export const getUserById = async (req,res) => {
  
   const [rows] = await pool.query(`SELECT * FROM tabUsuario WHERE usuUsuarioNom = '${req.params.id}'`)
   console.log('done  ' + req.params.id);
   res.send(rows[0])
} 



export const updateUser = async (req,res) => {
   const { id } = req.params;
   const { usuUsuarioId , usuUsuarioNom , usuUsuarioContra , usuUsuarioRol } = req.body
    await pool.query (`UPDATE tabUsuario SET  
    usuUsuarioContra  = ? WHERE usuUsuarioNom = ? ` , [usuUsuarioContra, id])
   console.table( [id , usuUsuarioId , usuUsuarioNom , usuUsuarioContra , usuUsuarioRol ]);
    res.send ('done');
}

export const deleteUser = async (req,res) => {
  const [rows] = await pool.query (`DELETE  FROM tabUsuario WHERE usuUsuarioNom = '${req.params.id}' `) 
  res.send( rows )
  console.table(rows)
} 