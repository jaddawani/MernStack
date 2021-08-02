const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	product: {
		type :String,
		required: [true],
		minlenght: [2, "Name must be at least 2 characters."]
	},
	price : {
		type :Number,
		required : [true],
		min : [5]
	},
	
	description : {
		type : String,
		required: [true],
		minlenght: [2, "description must be at least 2 characters."]

	
	}

});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;