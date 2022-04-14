

const indexController = {
    index: async (req, res) => {
        res.render('index', {
            title: "A transportadora do futuro"
        })
    }
}

module.exports = indexController