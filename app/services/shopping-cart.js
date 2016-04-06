import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  }
  // , totalCost() {
  //   for(var i = 0; i>this.get('items').length;i++){
  //     total = total + this.get('items')[i].cost
  //   }
  // })
});
