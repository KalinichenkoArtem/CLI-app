const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  return contactsPath;
}

function getContactById(contactId) {
  const foundContact = contactsPath.find((contact) => contact.id === contactId);
  return foundContact || null;
}

function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта.
}

const functions = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};

module.exports = functions;

listContacts();
// getContactById("AeHIrLTr6JkxGE6SN-0Rw");
// removeContact();
// addContact();
