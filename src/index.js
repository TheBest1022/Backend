import app from "./app.js"
import database from "./config/database.js"


app.listen(app.get("PORT"), () => {
    console.log(`Servidor en puerto ${app.get("PORT")}`)
})