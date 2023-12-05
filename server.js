const express = require('express');
const app = express();
const port = 3000;

const cityRoutes = require('./routes/cityRoutes');
const paketRoutes = require('./routes/paketRoutes');
const lsroomRoutes = require('./routes/lsroomRoutes'); // Tambahkan ini

const testingRoutes = require('./routes/testingRoutes'); // Sesuaikan dengan path yang benar
const testingejsRoutes = require('./routes/testingejsRoutes');

const indexRoutes = require('./routes/indexRoutes');




app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));



const db = require('./dbConfig');


app.use('/city', cityRoutes);
app.use('/paket', paketRoutes);
app.use('/lsroom', lsroomRoutes); // Tambahkan ini
app.use('/testing', testingRoutes);
app.use('/ejs', testingejsRoutes);


app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});


app.get('/', (req, res) => {
  res.render('index'); // Menampilkan halaman index.ejs
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


app.get('/', (req, res) => {
  res.render('index'); // Merender file 'index.ejs'
});