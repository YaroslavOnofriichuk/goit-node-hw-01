const { readFile, writeFile } = require("./db/index");
const { v4: uuidv4 } = require("uuid");

async function listContacts() {
  const data = await readFile();
  console.table(data);
}

async function getContactById(contactId) {
  const data = await readFile();
  const contact = data.find((contact) => contact.id === contactId.toString());
  if (contact) {
    console.table(contact);
  } else {
    console.log(`Not found contact with id ${contactId}`);
  }
}

async function removeContact(contactId) {
  const data = await readFile();
  const index = data.findIndex(
    (contact) => contact.id === contactId.toString()
  );
  if (index === -1) {
    console.log(`Not found contact with id ${contactId}`);
  } else {
    const contact = data.splice(index, 1);
    writeFile(data);
    console.table(contact);
  }
}

async function addContact(name, email, phone) {
  const data = await readFile();
  const id = uuidv4();
  const newContact = { id, name, email, phone };
  data.push(newContact);
  writeFile(data);
  console.table(newContact);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
