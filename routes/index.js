const express = require("express");
const router = express.Router();

const { home, generate_report_1, generate_report_2 } = require("../controllers/index");

router.get("/", home);
router.get("/invoice", generate_report_1);
router.get("/voucher", generate_report_2);

module.exports = router;
