const User = require('../../app_api/model/user');

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);

    } catch (err) {
        res.status(404).json({message : err.message});
    }
};

module.exports = {getUser};