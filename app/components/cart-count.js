import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  CartCount: Ember.computed('shoppingCart.items.length',function () {
    // var total = 0;
    // var shoppingCart = this.get('shoppingCart');
    // for(var i = 0; i<this.get('shoppingCart').items.length;i++){
    //     total = total + this.get('shoppingCart').items[i]._internalModel._data.cost;
    // }
    // // console.log(total);
    return this.get('shoppingCart').items.length;

  })
});
