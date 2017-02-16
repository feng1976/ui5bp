
jQuery.sap.require("TestApp.util.Formatter");
jQuery.sap.require("TestApp.util.Grouper");

sap.ui.controller("TestApp.view.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Master
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Master
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Master
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Master
*/
     onExit: function() {
    	 if (this._lineItemViewDialog) {
 			this._lineItemViewDialog.destroy();
 			this._lineItemViewDialog = null;
 		}
	},
	
	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	},
	
	handleListSelect : function (evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("Detail", context);
	},
	
	handleViewSettings : function (evt) {

		// create dialog
		var that = this;
		if (!this._lineItemViewDialog) {
			this._lineItemViewDialog = new sap.m.ViewSettingsDialog({
				groupItems : [
					new sap.m.ViewSettingsItem({
						text : "Price",
						key : "GrossAmount"
					}),
					new sap.m.ViewSettingsItem({
						text : "Status",
						key : "BillingStatus"
					})
				],
				confirm : function (evt) {
					var aSorters = [];
					var mParams = evt.getParameters();
					if (mParams.groupItem) {
						var sPath = mParams.groupItem.getKey();
						var bDescending = mParams.groupDescending;
						var vGroup = TestApp.util.Grouper[sPath];
						aSorters.push(new sap.ui.model.Sorter(sPath, bDescending, vGroup));
					}
					var oBinding = that.getView().byId("list").getBinding("items");
					oBinding.sort(aSorters);
				}
			});
		}
		
		// open dialog
		this._lineItemViewDialog.open();
	}
});