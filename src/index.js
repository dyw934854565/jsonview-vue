import jsonView from './jsonview.vue';

jsonView.install = function(Vue) {
  Vue.component(jsonView.name, jsonView);
};
const install = function (Vue) {
  Vue.use(jsonView);
}
module.exports = {
  install,
  jsonView
};
