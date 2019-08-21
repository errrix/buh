const {Router} = require("express");
const router = Router();
const Costs = require("./../models/costs");

router.get('/', async (req, res) => {
    const currentCosts = await Costs.find({

    });
    res.send(currentCosts);
});

router.post('/addcosts', async (req, res) => {
    const currentCosts = new Costs({
        date: req.body.date,
        description: req.body.description,
        sum: req.body.sum,
        category: req.body.category,
        typeCosts: req.body.typeCosts
    });

    await currentCosts.save();
    res.json({"status": 200});
});


module.exports = router;