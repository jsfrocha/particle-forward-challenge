const health = (req, res) => {
    res.status(200).send('API is online!');
};

module.exports = {
    health
};
