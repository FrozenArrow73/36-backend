const {User} = require("./models")

const baseUsers = [
    {
        username: "user1",
        password: "user1"
    },
    {
        username: "user2",
        password: "user2"
    },
    {
        username: "user3",
        password: "user3"
    },
    {
        username: "user4",
        password: "user4"
    },
    {
        username: "user5",
        password: "user5"
    }
]

const seed = async () => {
    try {
        await User.bulkCreate(baseUsers)

    } catch (err) {
        console.log(err)
    }
}

module.export = seed