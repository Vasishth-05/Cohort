const getGoals = async(req,res) => {
    res.status(200).json({
        message: 'Get goals'
    })
}

const setGoals = async(req,res) => {

    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field ')
    }

    res.status(200).json({
        message: 'Set goals'
    })
}

const putGoals = async(req,res) => {
    res.status(200).json({
        message: `Update goals ${req.params.id}`
    })
}

const deleteGoals = async(req,res) => {
    res.status(200).json({
        message: `Delete goals ${req.params.id}`
    })
}

module.exports = {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}