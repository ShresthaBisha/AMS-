const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const { User } = require('./models/user')

const data = [
    {
        username: 'tea_001',
        password: 'password',
        fullName: 'John Wick',
        status: 'ACTIVE',
        groups: ['TEACHER']
    },
    {
        username: 'tea_002',
        password: 'password',
        fullName: 'Jane Doe',
        status: 'ACTIVE',
        groups: ['TEACHER']
    }
]

async function seed () {
    await mongoose.connect('mongodb://localhost/ams')

    await User.deleteMany({})

    for (user of data) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password, salt)

        await new User({ ...user, password: hashedPassword }).save()
    }

    mongoose.disconnect()

    console.info('Done!')
}

seed()
