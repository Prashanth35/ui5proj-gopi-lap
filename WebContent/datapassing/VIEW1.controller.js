sap.ui.controller("datapassing.VIEW1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf datapassing.VIEW1
*/
	onInit: function() {
      var model=new sap.ui.model.json.JSONModel();
        sap.ui.getCore().setModel(model)
	},
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf datapassing.VIEW1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf datapassing.VIEW1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf datapassing.VIEW1
*/
//	onExit: function() {
//
//	}
	onPress : function ()
	{
		debugger;
		var obj = {};
		obj.f1=this.getView().byId("View1").getValue();
		 obj.f2=this.getView().byId("View2").getValue();
		 
		 sap.ui.getCore().getModel().setData(obj)
		 
	var app=this.getView().getParent();
		 
		 app.to("idVIEW21")
		
		
	}

});