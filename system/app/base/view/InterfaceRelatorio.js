InterfaceRelatorio = function()
{
	var self = new JsWidget("InterfaceRelatorio");
	self.realType = "JsInterface";
	self.setWidth(1014);
	self.setHeight(508);


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

		self.UIcomponents.selecionar_relatorio_label = new JsLabel("selecionar_relatorio_label");
		self.UIcomponents.selecionar_relatorio_label.setWidth(139);
		self.UIcomponents.selecionar_relatorio_label.setHeight(40);
		self.UIcomponents.selecionar_relatorio_label.setXPos(10);
		self.UIcomponents.selecionar_relatorio_label.setYPos(10);
		self.UIcomponents.selecionar_relatorio_label.setValue("Selecione o Relatório:");

		self.addItem(self.UIcomponents.selecionar_relatorio_label);

		self.UIcomponents.selecionar_relatorio_combo = new JsComboBox("selecionar_relatorio_combo");
		self.UIcomponents.selecionar_relatorio_combo.setWidth(990);
		self.UIcomponents.selecionar_relatorio_combo.setXPos(10);
		self.UIcomponents.selecionar_relatorio_combo.setYPos(40);

		self.addItem(self.UIcomponents.selecionar_relatorio_combo);

		self.UIcomponents.formato_label = new JsLabel("formato_label");
		self.UIcomponents.formato_label.setWidth(60);
		self.UIcomponents.formato_label.setHeight(20);
		self.UIcomponents.formato_label.setXPos(10);
		self.UIcomponents.formato_label.setYPos(70);
		self.UIcomponents.formato_label.setValue("Formato:");

		self.addItem(self.UIcomponents.formato_label);

		self.UIcomponents.formato = new JsComboBox("formato");
		self.UIcomponents.formato.setWidth(200);
		self.UIcomponents.formato.setXPos(70);
		self.UIcomponents.formato.setYPos(70);
		self.UIcomponents.formato.addItem("","[--Selecione Formato--]");
		self.UIcomponents.formato.addItem("html","HTML");
		self.UIcomponents.formato.addItem("pdf","PDF");
		self.UIcomponents.formato.addItem("excel","Excel");

		self.addItem(self.UIcomponents.formato);

		self.UIcomponents.interfacecontainer = new JsWidget("");
		self.UIcomponents.interfacecontainer.setWidth("100%");
		self.UIcomponents.interfacecontainer.setXPos(0);
		self.UIcomponents.interfacecontainer.setYPos(90);

		self.addItem(self.UIcomponents.interfacecontainer);

		self.UIcomponents.loadReport = new JsPushButton("loadReport");
		self.UIcomponents.loadReport.setWidth(130);
		self.UIcomponents.loadReport.setHeight(24);
		self.UIcomponents.loadReport.setLabel("Gerar Relatório");



		//this will put the widgets accessible on a more OO way
		for (i in self.UIcomponents)
			self[i] = self.UIcomponents[i];
	}

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
			if (!app.report_data)
			{
				var dados = "";
				app.ws.getData("ControlReport", "listReports", dados, self.UIcallbacks.carregarListaRelatorios);
			}
			else
				self.UIcallbacks.carregarListaRelatorios();

		}

		self.UIcallbacks.carregarListaRelatorios = function (jsEvent)
		{
			if (!app.report_data)
				app.report_data = app.getResponseXML();

			var result = app.report_data.getElementsByTagName("result");

			self.UIcomponents.selecionar_relatorio_combo.clearData();

			self.UIcomponents.selecionar_relatorio_combo.addItem("0","[-- Selecione --]");

			for(var i = 0; i < result[0].childNodes.length; i++)
			{
				var id   = result[0].childNodes[i].getAttribute("id");
				var nome = result[0].childNodes[i].getElementsByTagName("nome")[0].text;

				self.UIcomponents.selecionar_relatorio_combo.addItem(id, nome);
			}

		}

		self.UIcallbacks.selecionaRelatorio = function (jsEvent)
		{

			self.UIcomponents.formato.setValue("");
			if(self.UIcomponents.selecionar_relatorio_combo.getValue() != 0)
			{
				var result = app.report_data.getElementsByTagName("result");

				for(var i = 0; i < result[0].childNodes.length; i++)
				{
					if(result[0].childNodes[i].getAttribute("id") == self.UIcomponents.selecionar_relatorio_combo.getValue())
					{
						var interface = result[0].childNodes[i].getElementsByTagName("interface")[0].text;
			    		app.loadSubInterface(interface, self.addInterface);
			    		break;
					}
				}
			}
		}

		self.UIcallbacks.gerarRelatorio = function ()
		{
			if(self.UIcomponents.selecionar_relatorio_combo.getValue() != 0)
			{
				var result = app.report_data.getElementsByTagName("result");

				for(var i = 0; i < result[0].childNodes.length; i++)
				{
					if(result[0].childNodes[i].getAttribute("id") == self.UIcomponents.selecionar_relatorio_combo.getValue())
					{
						var interface = result[0].childNodes[i].getElementsByTagName("interface")[0].text;
						var controle  = result[0].childNodes[i].getElementsByTagName("controle")[0].text;
						var metodo    = result[0].childNodes[i].getElementsByTagName("metodo")[0].text;
			    		break;
					}
				}
			}

			var dados  = "<id_prelatorio>" + self.UIcomponents.selecionar_relatorio_combo.getValue() + "</id_prelatorio>";
				dados += "<formato>" + self.UIcomponents.formato.getValue() + "</formato>";

			for (var i in Interfaces[interface].UIcomponents)
			{
				if (Interfaces[interface].UIcomponents[i].input)
				{
					if (
						Interfaces[interface].UIcomponents[i].type != "JsBoxButton" &&
						Interfaces[interface].UIcomponents[i].type != "JsPushButton" &&
						Interfaces[interface].UIcomponents[i].type != "JsIcon" &&
						Interfaces[interface].UIcomponents[i].type != "JsImageButton" &&
						Interfaces[interface].UIcomponents[i].type != "JsMiniToolBarButton" &&
						Interfaces[interface].UIcomponents[i].type != "JsToolBarButton" &&
						Interfaces[interface].UIcomponents[i].type != "JsColoPicker" &&
						Interfaces[interface].UIcomponents[i].type != "JsTableBuilder" &&
						Interfaces[interface].UIcomponents[i].type != "JsURLBuilder"
						)
					{
						var field_name = Interfaces[interface].UIcomponents[i].name;

						if(Interfaces[interface].UIcomponents[i].js_realvalue)
							dados += "<" + field_name + ">" + Interfaces[interface].UIcomponents[i].js_realvalue + "</" + field_name + ">";
						else
						{
							if(Interfaces[interface].UIcomponents[i].type == "JsDateEdit")
							{
							    if (!Interfaces[interface].UIcomponents[i].validateDate() || Interfaces[interface].UIcomponents[i].getValue().length != 10)
							    {
							        alert("Data Inválida!");
							        return false;
							    }

							    var year  = Interfaces[interface].UIcomponents[i].getValue().substring(0, 4);
							    var month = Interfaces[interface].UIcomponents[i].getValue().substring(5, 7);
							    var day   = Interfaces[interface].UIcomponents[i].getValue().substring(8, 10);

							    if (year < 1970)
							    {
							        alert("Data não pode ser anterior a 1970!");
							        return false;
							    }
							}

							dados += "<" + field_name + ">" + Interfaces[interface].UIcomponents[i].getValue() + "</" + field_name + ">";
						}
					}
				}
			}

			app.ws.loadReport(dados, app.getResponseJSON, self.UIcallbacks.falhaGeracao);
		}

		self.UIcallbacks.falhaGeracao = function ()
		{
			var dados = app.getResponseError();
			alert(dados);
		}

		self.UIcallbacks.addInterface = function (jsEvent)
		{
			if(self.UIcomponents.loadReport.parentNode)
				self.UIcomponents.loadReport.parentNode.removeChild(self.UIcomponents.loadReport);

		    if (!Interfaces[newSubInterfaceName] || jsAmbient == "devel")
		    {
		        code_str = app.getResponse();
		        eval("newInterface = " + code_str);
		        Interfaces[newSubInterfaceName] = new newInterface;
		    }

	        if (self.UIcomponents.interfacecontainer.childNodes.length)
	        	self.UIcomponents.interfacecontainer.removeChild(self.UIcomponents.interfacecontainer.childNodes[0]);

		    self.UIcomponents.interfacecontainer.addItem(Interfaces[newSubInterfaceName]);
		    self.UIcomponents.interfacecontainer.setWidth(Interfaces[newSubInterfaceName].style.width);
		    self.UIcomponents.interfacecontainer.setHeight(Interfaces[newSubInterfaceName].style.height);

		    if (Interfaces[newSubInterfaceName].type == "JsWindow")
		    {
		        Interfaces[newSubInterfaceName].showWindow();
		    }

		    if (Interfaces[newSubInterfaceName].type == "JsDialog")
		    {
		        Interfaces[newSubInterfaceName].showDialog();
		    }

			var width_btn = parseInt(Interfaces[newSubInterfaceName].style.width);
			var height_btn = parseInt(Interfaces[newSubInterfaceName].style.height);

			self.UIcomponents.loadReport.setXPos(10);
			self.UIcomponents.loadReport.setYPos((height_btn + 70));

			self.addItem(self.UIcomponents.loadReport);
		}
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
		self.UIcallbacksHandlers[0][0] = "change"	//event
		self.UIcallbacksHandlers[0][1] = self.UIcomponents.selecionar_relatorio_combo //handler
		self.UIcallbacksHandlers[0][2] = self.UIcallbacks.selecionaRelatorio //callback

		self.UIcallbacksHandlers[1] = new Array();
		self.UIcallbacksHandlers[1][0] = "click"	//event
		self.UIcallbacksHandlers[1][1] = self.UIcomponents.loadReport //handler
		self.UIcallbacksHandlers[1][2] = self.UIcallbacks.gerarRelatorio //callback

		for (var js_i in self.UIcallbacksHandlers)
		{
			if (self.UIcallbacksHandlers[js_i][0] == "callback")
				self.UIcallbacksHandlers[js_i][1].setCallback(self.UIcallbacksHandlers[js_i][2])
			else
				self.UIcallbacksHandlers[js_i][1].setEvent(self.UIcallbacksHandlers[js_i][0],self.UIcallbacksHandlers[js_i][2])
		}
	};

	//now, we build the interface
	self.buildInterface();
	//we create all the events it will have
	self.createEvents();
	//we attach the events to it's handler
	self.attachEvents();

	//now, we init the interface
	if (self.initInterface)
		self.initInterface();

	return self;

}
