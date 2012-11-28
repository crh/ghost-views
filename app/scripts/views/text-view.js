/***/
ghostViews.Views.TextView = Backbone.View.extend({

  tagName: 'li',

  className: 'zombie',

  template: _.template('<%= text %>'),

  /* el points to <li class="zombie"> {{ text }} </li> */

  initialize: function() {
    this.model.on('change', this.render, this);

    // when the parent fires `close:all` event, then...
    this.options.parent.on('close:all', this.close, this);
  },

  events: {
    'click' : 'close'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  close: function() {
    console.log('kill: ', this);

    // unbind all local event bindings, i.e. 'click: 'close'
    this.unbind();

    // remove event listener from the model.
    this.model.unbind('close:all', this.close, this);

    // remove event listener from the parent view.
    this.options.parent.unbind('close:all', this.close, this);

    // remove view from the DOM
    this.remove();

    // delete the jQuery wrapped object variable
    delete this.$el;

    // delete the variable reference to this node
    delete this.el;
  }
});
