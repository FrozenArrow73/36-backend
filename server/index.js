//! BOILERPLATE
//* Import statements at the top, Global Variables
const express = require ('express')
const cors = require('cors')
require('dotenv').config
const PORT = process.env.PORT || 8080
const app = express()
//
const db = require("./util/database")
const {User} = require('./util/models')
const {Hobby} = require("./util/models")
const seed = require("./util/seed")
//

//* Middleware (Defines HOW the server runs)
app.use(express.json())
app.use(cors())
//
User.hasMany(Hobby)
Hobby.belongsTo(User)
//

//* Endpoints
//
app.post("/api/register", async (req, res) => {
    try {
        let newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        })
        res.status(200).send(newUser)
    }
    catch(err) {
        res.status(400).send(err)
    }
})
app.post("/api/addHobby/:userId", async (req, res) => {
    const {hobby} = req.body
    const {userId} = req.params

})
app.get('/api/hobbies/userId', async (req, res) => {
    let {userId} = req.params
    let data = await Hobby.findAll(
        {
            where: {userId: userId},
            attributes: ["name"],
            include: [
                {
                    model: User,
                    attribues: ["username"]
                }
            ]
        }
    )
    res.status(200).send(data)
})
//

//
db
    .sync()
    // .sync({force:true})
    // .then(seed)
//

//* Listen
app.listen(PORT, () => {
    console.log(`_____Up on port number ${PORT}______`)
})