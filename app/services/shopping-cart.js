import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  totalCost() {
    // console.log(this.get('items')[0]._internalModel._data.cost);
    var total = 0;
    for(var i = 0; i <this.get('items').length;i++){
      // console.log("hey");
      total = total + this.get('items')[i]._internalModel._data.cost
    }
    // console.log(this.get('items')[i].cost);
    // console.log(total);
    return total;
  }
});
