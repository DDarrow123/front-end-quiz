const express = require("express");
// const cachedItems = require("../data/items.json");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const path = require("path");
const adapter = new FileSync(path.resolve(__dirname, "../data/items.json"));
// console.log(adapter);
const db = low(adapter);

const likeRouter = express.Router();

// const getItem = function (itemId) {
//     return cachedItems.find(function (item) {
//         return item.id === itemId || item.integerId === itemId;
//     }) || {};
// };

const likeItem = function(itemId) {
  const item = db
    .find({ id: itemId })
    .assign({ like: true })
    .write();
  return item;
};

likeRouter.post("/:id", (req, res) => {
  const id = req.params.id;
  const item = likeItem(id);
  res.status(200).json(item);
});

module.exports = likeRouter;
