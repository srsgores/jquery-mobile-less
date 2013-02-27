/*
 * GET home page.
 */

exports.index = function (req, res)
{
	res.render("index", { title: "LESS Boilerplate", description: "Put your description here" });
};