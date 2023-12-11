// routes/cityRoutes.js
const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
const { City } = require('../models/city');

router.get('/', cityController.getAllCities);
router.get('/:id', cityController.getCityById);
router.post('/', cityController.createCity);
router.put('/:id', cityController.updateCity);
router.delete('/:id', cityController.deleteCity);

module.exports = router;
