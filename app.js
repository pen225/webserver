const express = require('express');
const app = express();
const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/public',express.static('public'));

// app.get('/pen/:id', (req, res) =>{
//   const id = req.params.id;
//   res.send(`Film numero ${id}`)
// })

// app.get('/movies-detail', (req, res) =>{
//   res.send("movies")
// })

// app.get('/movies', (req, res) =>{
//   res.render("movies")
// })

app.get('/', (req, res) =>{
  // res.send("Bonjour <b>le monde !</b>");
  res.render("page1")
});

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
})