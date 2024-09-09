const app = require("./app")
const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT || 3333

//inicializa servidor na minha porta ou na padrao 3333
app.listen(PORT, () => {console.log(`server runing ${PORT}`);})
