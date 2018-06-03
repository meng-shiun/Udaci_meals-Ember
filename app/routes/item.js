import $ from 'jquery';
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    // console.log(params);
    return $.get('/menu/' + params.item_name + '.json');
  }
});
