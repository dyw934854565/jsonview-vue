import jsonView from './jsonview.vue';

const install = function (Vue) {
  Vue.component(jsonView.name, jsonView);
}
module.exports = {
  install,
  jsonView
};
