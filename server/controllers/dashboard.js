const getDashboard = async (req, res) => {
    const user = req.session.user;
    console.log(user);
    return res.status(201).json(user);
}

module.exports = { getDashboard };
