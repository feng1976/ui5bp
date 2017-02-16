//sap.ui.define([
//   "sap/ui/core/UIComponent",
//   "sap/ui/model/json/JSONModel",
//   "sap/ui/model/resource/ResourceModel"
//], function (UIComponent, JSONModel, ResourceModel) {
//   "use strict";
//   return UIComponent.extend("TestApp.Component", {
//            metadata : {
//		rootView: "TestApp.resources.view.App"
//	},
//      init : function () {
//         // call the init function of the parent
//         UIComponent.prototype.init.apply(this, arguments);
//         // set data model
////         var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
//         var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
//         var oModel = new JSONModel(oData);
////         this.setModel(oModel);
//
//         // set i18n model
////         var i18nModel = new ResourceModel({
////            bundleName : "sap.ui.demo.wt.i18n.i18n"
////         });
////        this.setModel(i18nModel, "i18n");
//      }
//   });
//});
jQuery.sap.declare("TestApp.Component");
sap.ui.core.UIComponent.extend("TestApp.Component", {
	
	createContent : function(){
		
		var oview = new sap.ui.view({
			id : "app",
			viewName : "TestApp.view.App",
			type : "JS",
			viewData : { component : this }
		});
		
		var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		oview.setModel(oModel);
		
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oview.setModel(i18nModel, "i18n");
		
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oview.setModel(deviceModel, "device");

		// done
		return oview;
		
	}
	
})