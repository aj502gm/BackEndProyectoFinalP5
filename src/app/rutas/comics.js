const e = require("express")
const conn = require("../../config/dabatase")

module.exports = (app) =>{
    app.get("/comics", (req,res) =>{
        const useQuery = "USE proyectocomics";
        let query = "SELECT id, nombre, descripcion, editorial, fecha FROM comics"
        conn.query(useQuery, (err, rows, col)=>{
            if(err){
                res.json({status: 0, mensaje: err, data:[]})
            }else{
                conn.query(query, (err, rows2, col)=>{
                    if(err){
                        res.json({status: 0, mensaje: err, data:[]})
                    }else{
                        res.json({status: 1, mensaje: 'Exito', data:rows2})
                    }
                })
            }
        })
        
    })

    app.post("/comics", (req,res) =>{
        const useQuery = "USE proyectocomics";
        console.log("cuerpo solicitud: ")
        console.log(req.body)
        let query = `INSERT INTO comics(nombre, editorial,fecha,descripcion) VALUES ("${req.body.nombre}","${req.body.editorial}","${req.body.fecha}","${req.body.descripcion}")`
        conn.query(useQuery, (err, rows, col)=>{
            if(err){
                res.json({status: 0, mensaje: 'Sucedio un error'})
            }else{
                conn.query(query, (err, rows2, col)=>{
                    if(err){
                        res.json({status: 0, mensaje: err})
                    }else{
                        res.json({status: 1, mensaje: 'Exito insertando'})
                    }
                })
            }
        })
    })

    app.delete("/comics", (req,res) =>{
             const useQuery = "USE proyectocomics";
             let query = `DELETE FROM comics WHERE "${req.body.nombre}" = nombre`;
             console.log(req.body.nombre)
             conn.query(useQuery, (err, rows, col)=>{
                 if(err){
                     res.json({status: 0, mensaje: 'Sucedio un error'})
                 }else{
                     conn.query(query, (err, rows2, col)=>{
                         if(err){
                             res.json({status: 0, mensaje: err})
                         }else{
                             res.json({status: 1, mensaje: 'Exito Borrando los datos'})
                         }
                     })
                 }
             })
        })
}

