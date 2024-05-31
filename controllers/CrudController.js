const UserModel = require('../models/UserModel')

const viewUser = async (req, res) => {
    try {
        let users = await UserModel.find({});
        return res.render('view',{
            all : users
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addUser = (req, res) => {
    return res.render('add')
}
const createUser = async (req, res) => {
    try {
        const { name, phone } = req.body

        if (!name || !phone) {
            console.log("All fileld is required");
            return res.redirect('/crud/adduser')
        }

        const user = await UserModel.create({
            name: name,
            phone: phone
        });
        console.log("user create");
        return res.redirect('/crud')
    } catch (err) {
        console.log(err);
        return false;
    }
}


module.exports = {
    viewUser, addUser, createUser
}