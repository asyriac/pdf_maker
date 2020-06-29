let pdf = require("html-pdf");
const path = require("path");
const db = require("../utils/db.json");
const db1 = require("../utils/db1.json");
const pdfTemplate = require("../utils/invoice");
const vocherTemplate = require("../utils/voucher");

module.exports.home = (req, res) => {
  return res.render("index");
};

module.exports.generate_report_1 = (req, res) => {
  pdf
    .create(pdfTemplate(db), {
      border: {
        top: "1in",
      },
    })
    .toFile(`invoice.pdf`, (err) => {
      if (err) {
        return Promise.reject();
      }
      return res.download(`${__dirname}/../invoice.pdf`);
    });
};

module.exports.generate_report_2 = (req, res) => {
  pdf.create(vocherTemplate(db1), {}).toFile(`voucher.pdf`, (err) => {
    if (err) {
      return Promise.reject();
    }
    return res.download(`${__dirname}/../voucher.pdf`);
  });
};
