import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveFeedback() {
      var params = {
        message: this.get('message'),
        name: this.get('name'),
        product: this.get('product')
      };
      this.sendAction('saveFeedback', params)
      console.log(params);
    }
  }
});
