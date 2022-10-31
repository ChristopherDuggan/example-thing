import express from 'express'
const app = express();
import parser from 'body-parser'
import List from './models/List.js'
import connection from './connection.js' 

const port = process.env.PORT || 3000

app.use(parser.json());

app.listen(port, () =>
  console.log(`app listening on port ${port}`)
);

app.get("/list", function(req, res) {
  List.find({}).then(lists => {
    res.json(lists);
  });
});

app.get("/list/:id", function(req, res) {
  List.findOne({ _id: req.params.id }).then(list => {
    res.json(list);
  });
});

// app.get("/list/:id", function(req, res) {
//   List.findById(req.params.id).then(list => {
//     res.json(list);
//   });
// });

app.post("/list", function(req, res) {
  List.create(req.body).then(list => {
    res.json(list);
  });
});

app.post("/list/:id/item", function(req, res) {
  List.findByIdAndUpdate(
    req.params.id,
    { $push: { items: req.body } },
    { new: true }
  ).then(list => {
    res.json(list);
  });
});

