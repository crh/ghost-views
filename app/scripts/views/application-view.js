/***/
ghostViews.Views.AppView = Backbone.View.extend({

  el: '#app',

  events: {
    'click #add': 'addView',
    'click #remove-all': 'closeAll'
  },

  addView: function() {
    var text = new ghostViews.Models.Text();
    var view = new ghostViews.Views.TextView({
      model: text,
      parent: this
    });

    $('#bin').append(view.render().el);
  },

  closeAll: function() {
    this.trigger('close:all');
  }

});
