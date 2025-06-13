const registerUser = (req,res) => {
    res.status(400).json({
        message : "You are a User"
    })
}

module.exports = {
    registerUser,
}