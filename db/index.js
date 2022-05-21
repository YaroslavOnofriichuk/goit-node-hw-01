const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

async function readFile() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Cannot read file ${contactsPath}`);
    return null;
  }
}

async function writeFile(data) {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(data));
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  readFile,
  writeFile,
};
