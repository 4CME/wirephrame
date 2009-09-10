	/***********************************/
	/**************GLOBALS**************/
	/***********************************/
	//global variables for use on the interface control
	//DO NOT USE THEM IN YOUR CODE!

	/***********************************/
	/***********CONFIGURATION***********/
	/***********************************/
	//Set these according to your application
	//JsMainWindow variables
	var lang = "pt";

	//global vars used to control interface loading
	var currInterface 		= null;
	var newInterface 		= null;
	var newInterfaceName 	= null;
	var newSubInterfaceName = null;
	var newDialogName		= null;
	
	var oldInterface 		= null;
	
	var Interfaces = new Array();
	
	var jsAmbient = "production";

	/***********************************/
	/**************UI CLASS*************/
	/***********************************/

	//JsMainWindow.js User Interface Class
	JsMainWindow = function()
	{
		//this is the referer to the object itself.
		//using self as a local var allow us to create
		//inheritance on Javascript.
		//in the end of the object, thou, it must return
		//the self reference, otherwise it won't work
		var self = new JsApplication();

		/***********************************/
		/*************INTERFACE*************/
		/***********************************/

		//this is the function used to build the interface
		//it contains references to all the widgets
		self.buildInterface = function()
		{
			//used by JsDesigner, to load and save the interface
			self.UIcomponents = new Array();

				/***************User defined**************/				
				//Data Handlers
				//JsHTTPrequest - client-server communication layer
				self.request = new JsHTTPRequest();

				//JsDataConnector - another client-server communication layer
				//that can upload images
				self.dc = new JsDataConnector();

				//JsWebServiceConnector - client-server communication layer
				self.ws = new JsWebServiceConnector();

				//Top of the Application Window
				//topgrid
				self.UIcomponents.topgrid = new JsWidgetGrid();
				self.UIcomponents.topgrid.setHeight(50);
				self.UIcomponents.topgrid.setHeight(50);

				//App Label
				self.UIcomponents.label = new JsLabel();
				self.UIcomponents.label.setHeight(50);
				self.UIcomponents.label.setFontSize(30);
				self.UIcomponents.label.setFontWeight("bold");
				self.UIcomponents.label.setFontColor("#FFFFFF");
				self.UIcomponents.label.style.position = "relative";
				self.UIcomponents.label.style.top = -15;
				self.UIcomponents.label.style.left = 0;

				//logo
				self.UIcomponents.logo = new JsImage();

				self.UIcomponents.topgrid.addRow();
				self.UIcomponents.topgrid.addCell('','','left','middle','','','',jsmainwindow_images + 'bg.png');
				self.UIcomponents.topgrid.addItem(self.UIcomponents.label);
				self.UIcomponents.topgrid.addCell('','','right','middle','','','',jsmainwindow_images + 'bg.png');

				//Main Area
				self.UIcomponents.mainarea = new JsWidget();
				self.UIcomponents.mainarea.style.position = "relative";
				windowHeight = document.body.clientHeight;
				self.UIcomponents.mainarea.setHeight(parseInt(windowHeight) - 75);

				self.appendChild(self.UIcomponents.topgrid);

				self.UIcomponents.menubar = new JsMenuBar();

				self.appendChild(self.UIcomponents.menubar);

				self.appendChild(self.UIcomponents.mainarea);
				
				//debug button
				self.debugbt = new JsPushButton();
				self.debugbt.setWidth(100);
				//self.debugbt.setHeight(20);
				self.debugbt.setValue("Comm Debug");
				self.debugbt.style.right = 0;
				self.debugbt.setYPos(0);
				
				if (jsAmbient == "devel")
					self.appendChild(self.debugbt);
				/************End of User defined**********/

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
				self.UIcallbacks.setAppLabel = function(value)
				{
					self.UIcomponents.label.setValue(value);
				};

				self.UIcallbacks.setLogo = function(value)
				{
					self.UIcomponents.logo.setSource(value);
					self.UIcomponents.topgrid.addItem(self.UIcomponents.logo);
				};

				self.UIcallbacks.setLogoWidth = function(value)
				{
					self.UIcomponents.logo.setWidth(value);
				};

				self.UIcallbacks.setLogoHeight = function(value)
				{
					self.UIcomponents.logo.setHeight(value);
				};

				self.UIcallbacks.addMenu = function(menu)
				{
					self.UIcomponents.menubar.addItem(menu);
				};

				//functions used as base for interface loading
				self.UIcallbacks.loadInterface = function(name, callback)
				{
					if (!callback)
						callback = self.renderInterface;
					
					if (newInterfaceName)
						oldInterface = Interfaces[newInterfaceName];

					newInterfaceName = name;

					if (!Interfaces[name] || jsAmbient == "devel")
						self.ws.loadInterface(name,callback);
					else
					{
						newInterface = Interfaces[name];

						callback();

						if(newInterface.initInterface)
							newInterface.initInterface();
					}
				};

				self.UIcallbacks.loadSubInterface = function(name, callback)
				{					
					newSubInterfaceName = name;

					if (!Interfaces[name] || jsAmbient == "devel")
						self.ws.loadInterface(name,callback);
					else
					{
						newInterface = Interfaces[name];

						callback();

						if(newInterface.initInterface)
							newInterface.initInterface();
					}
				};

				self.UIcallbacks.loadDialog = function(name, callback)
				{
					if (!callback)
						callback = self.renderDialog;

					newDialogName = name;

					if (!Interfaces[name] || jsAmbient == "devel")
						self.ws.loadInterface(name,callback);
					else
					{
						newDialog = Interfaces[name];

						callback();

						if(newDialog.initInterface)
							newDialog.initInterface();
					}
				};

				//render the interface that has been loaded
				self.UIcallbacks.renderInterface = function()
				{
					if (!Interfaces[newInterfaceName] || jsAmbient == "devel")
					{
						code_str = self.getResponse();
						eval("newInterface = " + code_str);
						Interfaces[newInterfaceName] = new newInterface;
					}

					if(oldInterface)
					{
						self.delItem(oldInterface);
					}

					self.addItem(Interfaces[newInterfaceName]);

					if (Interfaces[newInterfaceName].type == "JsWindow")
						Interfaces[newInterfaceName].showWindow();
					if (Interfaces[newInterfaceName].type == "JsDialog")
						Interfaces[newInterfaceName].showDialog();
				};

				//render the dialog that has been loaded
				self.UIcallbacks.renderDialog = function()
				{
					if (!Interfaces[newDialogName] || jsAmbient == "devel")
					{
						code_str = self.getResponse();
						eval("newDialog = " + code_str);
						Interfaces[newDialogName] = new newDialog;
					}

					self.addItem(Interfaces[newDialogName]);

					Interfaces[newDialogName].setModal(true);

					Interfaces[newDialogName].showDialog();
				};


				self.UIcallbacks.getResponse = function()
				{
					xml = JsXML(self.ws.httprequest.responseText);
					var code = xml.getElementsByTagName("cosa_message");
					var code_str = "";

					for (var sys_i=0;sys_i < code[0].childNodes.length;sys_i++)
						code_str += code[0].childNodes[sys_i].nodeValue;

					return code_str;
				};

				self.UIcallbacks.getResponseXML = function()
				{
					var xml_str = self.getResponse();
					if (xml_str.indexOf("&") != -1)
						xml_str = xml_str.replace(/\&/g, "&amp;");
					xml = JsXML(xml_str);
					return xml;
				};

				self.UIcallbacks.getResponseJSON = function()
				{
					code_str = self.getResponse();
					eval(code_str);
				};

				self.UIcallbacks.getResponseError = function()
				{
					xml = JsXML(self.ws.httprequest.responseText);
					var code = xml.getElementsByTagName("faultstring")[0].text;

					return code;
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
			
			self.UIcallbacksHandlers[0] = new Array();
			self.UIcallbacksHandlers[0][0] = "click";	//event
			self.UIcallbacksHandlers[0][1] = self.debugbt; //handler
			self.UIcallbacksHandlers[0][2] = activateDebug; //callback

			for (var js_i = 0; js_i < self.UIcallbacksHandlers.length; js_i++)
			{
				if (self.UIcallbacksHandlers[js_i][0] == "callback")
					self.UIcallbacksHandlers[js_i][1].setCallback(self.UIcallbacksHandlers[js_i][2]);
				else
					self.UIcallbacksHandlers[js_i][1].setEvent(self.UIcallbacksHandlers[js_i][0],self.UIcallbacksHandlers[js_i][2]);
			}
		};

		/***********************************/
		/**  REWROTE METHODS FROM JSAPP   **/
		/***********************************/

		self.addItem = function(obj)
		{
			if (obj.type == "JsDialog")
				self.appendChild(obj);
			else
				self.UIcomponents.mainarea.addItem(obj);
		};

		self.delItem = function(obj)
		{
			if (obj.type == "JsDialog")
				self.removeChild(obj);
			else
				self.UIcomponents.mainarea.delItem(obj);
		};

		self.resizeMe = function()
		{
			windowHeight = document.body.clientHeight;
			self.UIcomponents.mainarea.setHeight(parseInt(windowHeight) - 75);
		};

		window.onresize = self.resizeMe;

		//now, we build the interface
		self.buildInterface();
		//we create all the events it will have
		self.createEvents();
		//we attach the events to it's handler
		self.attachEvents();

		return self;

	};