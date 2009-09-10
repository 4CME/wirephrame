InterfaceLogin = function()
{
	var self = new JsDialog("InterfaceLogin");
	self.realType = self.type;
	self.setWidth(340);
	self.setHeight(130);


	/***********************************/
	/*************BASE64IMG*************/
	/***********************************/

	self.images = new Array();

	/***********************************/
	/*************initInterface***********/
	/***********************************/

	self.initInterface = false;

	/***********************************/
	/*************INTERFACE*************/
	/***********************************/

	//this is the function used to build the interface
	//it contains references to all the widgets

	self.buildInterface = function()
	{
		//used by JsDesigner, to load and save the interface

		self.UIcomponents = new Array();

		self.UIcomponents.loginlab = new JsLabel("loginlab");
		self.UIcomponents.loginlab.setWidth(70);
		self.UIcomponents.loginlab.setXPos(20);
		self.UIcomponents.loginlab.setYPos(50);
		self.UIcomponents.loginlab.setValue("Login:");
		self.UIcomponents.loginlab.setIcon("visual/images/user_small.png");

		self.addItem(self.UIcomponents.loginlab);

		self.UIcomponents.loginfld = new JsLineEdit("loginfld");
		self.UIcomponents.loginfld.setWidth(240);
		self.UIcomponents.loginfld.setXPos(90);
		self.UIcomponents.loginfld.setYPos(45);

		self.addItem(self.UIcomponents.loginfld);

		self.UIcomponents.senhalab = new JsLabel("senhalab");
		self.UIcomponents.senhalab.setWidth(70);
		self.UIcomponents.senhalab.setXPos(20);
		self.UIcomponents.senhalab.setYPos(80);
		self.UIcomponents.senhalab.setValue("Senha:");
		self.UIcomponents.senhalab.setIcon("visual/images/password.png");

		self.addItem(self.UIcomponents.senhalab);

		self.UIcomponents.senhafld = new JsLineEdit("senhafld");
		self.UIcomponents.senhafld.setWidth(240);
		self.UIcomponents.senhafld.setXPos(90);
		self.UIcomponents.senhafld.setYPos(75);
		self.UIcomponents.senhafld.setPassword();

		self.addItem(self.UIcomponents.senhafld);

		self.UIcomponents.submitbtn = new JsPushButton("submitbtn");
		self.UIcomponents.submitbtn.setWidth(110);
		self.UIcomponents.submitbtn.setHeight(24);
		self.UIcomponents.submitbtn.setXPos(220);
		self.UIcomponents.submitbtn.setYPos(105);
		self.UIcomponents.submitbtn.setLabel("OK");

		self.addItem(self.UIcomponents.submitbtn);

		//this will put the widgets accessible on a more OO way
		for (i in self.UIcomponents)
			self[i] = self.UIcomponents[i];
	};

	/***********************************/
	/***************EVENTS**************/
	/***********************************/

	self.createEvents = function()
	{
		//we place the events on an array so we can easily recover
		//them when loading the interface on JsDesigner

		self.UIcallbacks = new Array();

		/***************User defined**************/

		self.UIcallbacks.initInterface = function (jsEvent)
		{
		    self.loginfld.setValue("");
		    self.senhafld.setValue("");
		};

		self.UIcallbacks.doEnterLogin = function (jsEvent)
		{
		    if (jsEvent.keyCode == 13)
		        self.doLogin(jsEvent);
		};

		self.UIcallbacks.doLogin = function (jsEvent)
		{
			if (self.loginfld.getValue() == "")
			{
				alert("Por favor, informe o login");
				self.loginfld.focus();
				return;
			}

			if (self.senhafld.getValue() == "")
			{
				alert("Por favor, informe a senha");
				self.senhafld.focus();
				return;
			}

			app.ws.doLogin(self.loginfld.getValue(), self.senhafld.getValue(), app.getResponseJSON, self.falhaLogin);
		};

		self.UIcallbacks.falhaLogin = function (jsEvent)
		{
			alert("Não foi possível autenticar o usuário.\n\nVerifique se o login e senha informados estão corretos\n ou se o usuário possui permissão de acesso ao sistema.");
		};

		/************End of User defined**********/

		//this will put the methods accessible on a more OO way
		for (i in self.UIcallbacks)
			self[i] = self.UIcallbacks[i];
	};

	/***********************************/
	/**EVENTS AND HANDLERS ATTACHMENTS**/
	/***********************************/

	self.attachEvents = function()
	{
		//Widgets events
		self.UIcallbacksHandlers = new Array();

		/*
		Array Structure
		self.UIcallbacksHandlers[0] = new Array();
		self.UIcallbacksHandlers[0][0] = "click"	//event
		self.UIcallbacksHandlers[0][1] = object //handler
		self.UIcallbacksHandlers[0][2] = callback //callback
		*/

		self.UIcallbacksHandlers[0] = new Array();
		self.UIcallbacksHandlers[0][0] = "click";	//event
		self.UIcallbacksHandlers[0][1] = self.UIcomponents.submitbtn; //handler
		self.UIcallbacksHandlers[0][2] = self.UIcallbacks.doLogin; //callback

		self.UIcallbacksHandlers[1] = new Array();
		self.UIcallbacksHandlers[1][0] = "keypress";	//event
		self.UIcallbacksHandlers[1][1] = self.UIcomponents.loginfld; //handler
		self.UIcallbacksHandlers[1][2] = self.UIcallbacks.doEnterLogin; //callback

		self.UIcallbacksHandlers[2] = new Array();
		self.UIcallbacksHandlers[2][0] = "keypress";	//event
		self.UIcallbacksHandlers[2][1] = self.UIcomponents.senhafld; //handler
		self.UIcallbacksHandlers[2][2] = self.UIcallbacks.doEnterLogin; //callback

		for (var js_i in self.UIcallbacksHandlers)
		{
			if (self.UIcallbacksHandlers[js_i][0] == "callback")
				self.UIcallbacksHandlers[js_i][1].setCallback(self.UIcallbacksHandlers[js_i][2]);
			else
				self.UIcallbacksHandlers[js_i][1].setEvent(self.UIcallbacksHandlers[js_i][0],self.UIcallbacksHandlers[js_i][2]);
		}
	};

	//now, we build the interface
	self.buildInterface();
	//we create all the events it will have
	self.createEvents();
	//we attach the events to it's handler
	self.attachEvents();

	//wnow, we init the interface
	if (self.initInterface)
		self.initInterface();

	return self;

};
