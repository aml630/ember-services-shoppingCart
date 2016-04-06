import Ember from 'ember';

export function totalCost(params/*, hash*/) {
  shoppingCart: Ember.inject.service(),
  //
    console.log("shoppingCart");
  //   var total = this.get('shoppingCart').items.length;
  //
  //   for(var i = 0; i>this.get('shoppingCart').items.length;i++){
  //       total = total + this.get('items')[i].cost;
  //   }
  //   return total;
}

export default Ember.Helper.helper(totalCost);
