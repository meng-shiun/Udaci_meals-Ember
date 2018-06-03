import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

  orderManager: service('order-manager'),
  classNames: ['menu-item'],
  tagName: 'li',
  mealCategory: 'breakfast',
  actions: {
    changeCategory(val) {
      this.set('mealCategory', val);
      console.log('Change category to: ' + val);
    },
    chooseItem(menuItemName) {
      console.log('Select meal: ' + menuItemName);
      this.get('orderManager').chooseMenuOption(this.get('mealCategory'), menuItemName);
    }
  }
});
