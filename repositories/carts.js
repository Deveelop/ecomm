const Respository = require ('./repository');

class CartsRepository extends Respository {};

module.exports = new CartsRepository ('carts.json');