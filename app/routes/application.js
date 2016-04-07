import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  CartCost: Ember.computed('shoppingCart.items.length',function () {
    console.log("application navbar ");
    var total = 0;
    var shoppingCart = this.get('shoppingCart');
    for(var i = 0; i<this.get('shoppingCart').items.length;i++){
        total = total + this.get('shoppingCart').items[i]._internalModel._data.cost;
    }
    return total;

  })

});
