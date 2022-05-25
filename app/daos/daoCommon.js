const con = require('../config/dbconfig')

const fetchAllProducts = (req, res) => {
    con.query(`SELECT * FROM noble_sports_and_goods`,
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('DAO ERROR', error)
            }
        })
}

//find by id
const fetchSingleProduct = (req, res) => {
    const id = req.params.id
    con.query(
        `SELECT * FROM noble_sports_and_goods WHERE id = ${id}`,
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('DAO ERROR', error)
            }
        })
}

module.exports = {
    fetchSingleProduct,
    fetchAllProducts
}