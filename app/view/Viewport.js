Ext.define('WS.view.Viewport', {
	extend : 'Ext.container.Viewport',
	initComponent : function() {
		this.items = [ {
			xtype : 'customcmp',
			width : 300,
			height : 200,
			padding : 20,
			props : {
				message : 'Keep it Simple'
			},
			react : {
				getInitialState : function() {
					return {
						count : 0
					};
				},

				handleMouseDown : function() {
					alert('I was told: ' + this.props.message);
					this.setState({
						count : this.state.count + 1
					});
				},

				render : function() {

					return React.DOM.div(null, React.DOM.div({ class : "clicker", onMouseDown : this.handleMouseDown }, "Give me the message!"), 
						React.DOM.div({ class : "message" }, "Message conveyed", 
						React.DOM.span({ class : "count" }, this.state.count), " time(s)"));
				}
			},
			style : {
				color : '#FFFFFF',
				backgroundColor : '#FF0000'
			}
		} ];
		this.callParent(arguments);
	}
});