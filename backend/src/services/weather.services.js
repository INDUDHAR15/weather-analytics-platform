const repository = require('../repositories/weather.repository');
exports.getAll = () => {
 return repository.findAll();
};