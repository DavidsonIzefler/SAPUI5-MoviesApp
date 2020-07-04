sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("openSAP.movies.controller.NotFound", {

		onNavBack : function () {
			UIComponent.getRouterFor(this).navTo("Home");
		}

	});

});