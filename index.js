const expess = require('express')
const app = expess();
const bodyParser = require('body-parser');
const route = require('./Routes/routes')
const cors = require('cors')
const db = require('./Config/config')

app.use(bodyParser.json());
app.use(cors())

app.use("/", route)


app.listen( 8080, ()=>{
    console.log("server runnig on port:", 8080)
})
