import $ from 'jquery';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return fetch('/menu/menu.json').then(response => response.json());
    return $.get('/menu/menu.json');
  }
});
