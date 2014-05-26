Ext.define('WS.view.Cmp', {
	extend : 'Ext.Component',
	alias : 'widget.customcmp',
	reactCached : null,
	initComponent : function() {
		if (Ext.isObject(this.react)) {
			this.reactCached = React.createClass(this.react);
			this.mon(this, 'render', this.renderReact, this);
			this.mon(this, 'beforedestroy', this.destroyReact, this);
		}
		this.callParent(arguments);
	},
	renderReact : function() {
		var target = this.getEl(), props = this.props;
		React.renderComponent(this.reactCached(props), target.dom);
	},
	destroyReact : function() {
		React.unmountComponentAtNode(this.getEl());
	}
});