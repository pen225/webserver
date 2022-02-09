const express = require('express');
const app = express();
const PORT = 8080;

app.get('/pen/:id', (req, res) =>{
  const id = req.params.id;
  res.send(`Film numero ${id}`)
})

app.get('/pen', (req, res) =>{
  res.send("Ma nouvelle page")
})



app.get('/', (req, res) =>{
  res.send("Bonjour <b>le monde !</b>");
});

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})