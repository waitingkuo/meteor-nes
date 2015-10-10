FlowRouter.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('index')
  },
});
FlowRouter.route('/player/:playerId/:connId', {
  action: function(params, queryParams) {
    BlazeLayout.render('player')
  },
});
