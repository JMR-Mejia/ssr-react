
const express = require("express");
const router = express.Router();


router.get("/", function (req, res) {
	res.status(401).json({
		message: "pidiendo a la api 2.0",
		title: "Recurso no encontrado",
		error: 401
	});
});
module.exports = router;