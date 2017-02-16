jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("TestApp.view.Detail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Detail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Detail
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Detail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Detail
* 		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(
			bundle.getText("ApproveDialogMsg"),
			function (oAction) {
				if (sap.m.MessageBox.Action.OK === oAction) {
					// notify user
					var successMsg = bundle.getText("ApproveDialogSuccessMsg");
					sap.m.MessageToast.show(successMsg);
					// TODO call proper service method and update model (not part of this session)
				}
			},
			
			bundle.getText("ApproveDialogTitle")
		);
*/
//	onExit: function() {
//
//	}
	handleNavButtonPress: function(evt){
		this.nav.back("Master");
	},
	handleLineItemPress: function(evt){
		var context =evt.getSource().getBindingContext();
		this.nav1.to("LineItems",context);
	},
   handleApprove: function(evt){
	   var bundle = this.getView().getModel("i18n").getResourceBundle();
	   sap.m.MessageBox.confirm(
			   bundle.getText("ApproveDialogMsg"),
			   function (oAction) {
				   if (sap.m.MessageBox.Action.OK==oAction) {
					   var successMsg = bundle.getText("ApproveDialogSuccess");
					   sap.m.MessageToast.show(successMsg);
				   }
			   },
			   bundle.getText("ApproveDialogTitle")
	   );
   }

});