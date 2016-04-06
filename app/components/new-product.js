import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addProduct() {
      var params= {
        title: this.get('title'),
        image: this.get('image'),
        description: this.get('description'),
        cost: parseInt(this.get('cost')),
        // feedbacks: this.get('feedback'),
      };
      this.sendAction('addProduct', params);
    }
  }
});
