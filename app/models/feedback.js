import DS from 'ember-data';

export default DS.Model.extend({
  message: DS.attr(),
  name: DS.attr(),
  product: DS.belongsTo('product', { async: true}),
});
