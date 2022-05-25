
const app = require("./config/server")
require('./app/rutas/comics')(app)

app.listen(4000, ()=>console.log("Server now running"))