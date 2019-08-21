const {Schema, model} = require('mongoose');

const schema = new Schema({
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sum:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    typeCosts: {
        type: String,
        required: false
    }
});

module.exports = model("Costs", schema);