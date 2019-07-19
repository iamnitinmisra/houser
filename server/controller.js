module.exports = {
    getAllHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_all_houses().then(houses => {
            res.status(200).send(houses)
        })
    },
    postHouse: (req, res) => {
        const { name, address, city, state, zip } = req.body;
        const db = req.app.get('db')
        db.post_house([name, address, city, state, zip]).then(house => {
            res.status(200).send(house)
        })
    }
}