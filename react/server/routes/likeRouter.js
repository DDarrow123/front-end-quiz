const express = require("express");
// const cachedItems = require("../data/items.json");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

//setting up the correct path to parse
const path = require("path");
const adapter = new FileSync(path.resolve(__dirname, "../data/items.json"));
const db = low(adapter);

const likeRouter = express.Router();

// const getItem = function (itemId) {
//     return cachedItems.find(function (item) {
//         return item.id === itemId || item.integerId === itemId;
//     }) || {};
// };

const likeItem = function(itemId, like) {
  return db
    .find({ id: itemId })
    .assign({ like: like })
    .write();
};

likeRouter.post("/:id", (req, res) => {
  const id = req.params.id;
  const like = req.body.like;
  const item = likeItem(id, like);
  res.status(200).json(item);
});

module.exports = likeRouter;
