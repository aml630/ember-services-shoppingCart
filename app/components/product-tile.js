import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  totalCost: Ember.computed(function () {
    console.log(this.get('shoppingCart').items.length);
    var total = 5;

    for(var i = 0; i>this.get('shoppingCart').items.length;i++){
        total = total + this.get('items')[i].cost;
    }
    return total;

  }),

  actions: {
    addToCart(item) {
      // var total = 0;
      // console.log("something");
      // console.log(item);
      // for (var i = 0; i>5; i++) {
      //   console.log("before total");
      //     // total = total + this.get('items')[i].cost;
      // }
      this.get('shoppingCart').add(item);
      // this.get('shoppingCart').totalCost();
    },

    delete(item) {
      this.sendAction('delete', item);
    }
  }
});
