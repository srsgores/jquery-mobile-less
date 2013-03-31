/**
 * Module dependencies.
 */

var express = require("express")
	, routes = require("./routes")
	, user = require("./routes/user")
	, http = require("http")
	, path = require("path");

var app = express();

app.configure(function ()
{
	app.set("port", process.env.PORT || 3000);
	app.set("views", __dirname + "/views");
	app.set("view engine", "jade");
	app.use(express.favicon());
	app.use(express.logger("dev"));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser("your secret here"));
	app.use(express.session());
	app.use(app.router);
	app.use(require("less-middleware")(
		{ src: __dirname + "/public/less",
			compress: true,
			optimization: 1,
			prefix: "/css",
			dest: __dirname + "/public/css"}));
	app.use(express.static(path.join(__dirname, "public")));
});

app.configure("development", function ()
{
	app.use(express.errorHandler());
});

app.get("/", routes.index);
//app.get("/widgets", routes.widgets.render);
app.get("/widgets", function(req, res) {
	res.render("widgets", {
		title: "Widgets", description: "Description"
	});
});

app.get("/widgets/buttons", function(req, res) {
	res.render("buttons", {
		title: "Buttons", description: "Description"
	});
});
app.get("/widgets/dialog", function(req, res) {
	res.render("dialog", {
		title: "dialog", description: "Description"
	});
});

app.get("/widgets/accordion", function(req, res) {
	res.render("accordion", {
		title: "accordion", description: "Description"
	});
});

app.get("/widgets/autocomplete", function(req, res) {
	res.render("autocomplete", {
		title: "autocomplete", description: "Description"
	});
});

app.get("/widgets/checkbox", function(req, res) {
	res.render("checkbox", {
		title: "checkbox", description: "Description"
	});
});

app.get("/widgets/collapsible", function(req, res) {
	res.render("collapsible", {
		title: "collapsible", description: "Description"
	});
});

app.get("/widgets/control-group", function(req, res) {
	res.render("control-group", {
		title: "control-group", description: "Description"
	});
});

app.get("/widgets/listviews", function(req, res) {
	res.render("listviews", {
		title: "List Views", description: "Description"
	});
});

app.get("/widgets/transitions", function(req, res) {
	res.render("transitions", {
		title: "transitions", description: "Description"
	});
});

app.get("/widgets/page-transitions-dialog", function(req, res) {
	res.render("page-transitions-dialog", {
		title: "List Views", description: "Description"
	});
});

app.get("/widgets/page-transitions-page", function(req, res) {
	res.render("page-transitions-page", {
		title: "List Views", description: "Description"
	});
});

http.createServer(app).listen(app.get("port"), function ()
{
	console.log("Express server listening on port " + app.get("port"));
});
