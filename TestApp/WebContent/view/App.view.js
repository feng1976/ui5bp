sap.ui.jsview("TestApp.view.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.App
	*/ 
	getControllerName : function() {
		return "TestApp.view.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.App
	*/ 
	createContent : function(oController) {
		
		this.setDisplayBlock(true);
		this.app = new sap.m.SplitApp();
		var master = new sap.ui.xmlview("Master","TestApp.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		var empty = sap.ui.xmlview("Empty", "TestApp.view.Empty");
		this.app.addPage(empty, false);
		
		return new sap.m.Shell("Shell", {
			title : "{i18n>ShellTitle}",
			showLogout : true,
			app : this.app
		});
	}

});