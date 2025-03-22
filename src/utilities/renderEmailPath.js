const ejs = require("ejs");
const path = require("path");

const renderEmailPath = async (templatePath, data) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, data, (err, html) => {
      if (err) reject(err);
      else resolve(html);
    });
  });
};

exports.contactEmailTemplate = async (data) => {
  const templatePath = path.join(__dirname, "..", "./templates/contact.ejs");
  return await renderEmailPath(templatePath, data);
};
