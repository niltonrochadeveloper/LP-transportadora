

const indexController = {
    index: async (req, res) => {

        const faqs = [           {         
                id: 1
            },
            {
                id: 2
            },
            {         
                id: 3
            },
            {
                id: 4
            },
            {         
                id: 5
            },
            {
                id: 6
            },
            {         
                id: 7
            },
            {
                id: 9
            }
        ]

        

        res.render('index', {
            title: "A transportadora do futuro",
            faqs
        })
    }
}

module.exports = indexController