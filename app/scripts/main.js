/***/
window.ghostViews = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');
    var appView = new ghostViews.Views.AppView();
  }
};

$(document).ready(function(){
  ghostViews.init();
});
