var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Todo = require('./Todo');

router.get('/', (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      return res.status(400).send("Could not find todos");
    }
    return  res.status(200).send(todos);
  });
});

router.get('/:id', (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (err) {
      return res.status(500).send("Problem searching for todos");
    }
    if (!todo) {
      return res.status(404).send("Could not find that todo");
    }
    return res.status(200).send(todo);

  });
});

router.post('/', (req, res) => {
  Todo.create({
      text: req.body.text,
      completed: req.body.completed
    }, (err, todo) => {
      if (err) {
        return res.status(500).send("Could not add todo");
      }
      return res.status(200).send(todo);
    });
});

router.delete('/:id', (req, res) => {
  Todo.findOneAndDelete(req.params.id, (err, todo) => {
    if (err) {
      return res.status(500).send("Problem deleting todo");
    }
    return res.status(200).send("Todo id: " + req.params.id + " was deleted");
  });
});

router.put('/:id', (req, res) => {
  var options = {
    upsert: true,
    new: true,
    setDefaultsOnInsert: true
  };

  Todo.findOneAndUpdate(req.params.id, req.body, options, (err, todo) => {
    if (err) {
      return res.status(500).send("Problem updating todo");
    }
    return res.status(200).send("Updated todo: " + todo);
  });

});

module.exports = router;
