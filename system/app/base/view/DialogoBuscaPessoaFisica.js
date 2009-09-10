DialogoBuscaPessoaFisica = function()
{
	var self = new JsDialog("DialogoBuscaPessoaFisica");
	self.realType = self.type;
	self.setWidth(600);
	self.setHeight(425);

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

		self.UIcomponents.buscapflb	= new JsLabel("buscapflb");
		self.UIcomponents.buscapflb.setWidth(250);
		self.UIcomponents.buscapflb.setHeight(20);
		self.UIcomponents.buscapflb.setXPos(10);
		self.UIcomponents.buscapflb.setYPos(10);
		self.UIcomponents.buscapflb.setValue("Buscar Pessoa Física");
		self.UIcomponents.buscapflb.setFontWeight("Bold");

		self.addItem(self.UIcomponents.buscapflb);

		self.UIcomponents.buscapfnomelb	= new JsLabel("buscapfnomelb");
		self.UIcomponents.buscapfnomelb.setWidth(100);
		self.UIcomponents.buscapfnomelb.setHeight(20);
		self.UIcomponents.buscapfnomelb.setXPos(10);
		self.UIcomponents.buscapfnomelb.setYPos(40);
		self.UIcomponents.buscapfnomelb.setValue("Nome:");

		self.addItem(self.UIcomponents.buscapfnomelb);

		self.UIcomponents.buscapfnomele	= new JsLineEdit("buscapfnomelb");
		self.UIcomponents.buscapfnomele.setWidth(500);
		self.UIcomponents.buscapfnomele.setXPos(100);
		self.UIcomponents.buscapfnomele.setYPos(40);

		self.addItem(self.UIcomponents.buscapfnomele);

		self.UIcomponents.buscapfcpflb	= new JsLabel("buscapfcpflb");
		self.UIcomponents.buscapfcpflb.setWidth(100);
		self.UIcomponents.buscapfcpflb.setHeight(20);
		self.UIcomponents.buscapfcpflb.setXPos(10);
		self.UIcomponents.buscapfcpflb.setYPos(70);
		self.UIcomponents.buscapfcpflb.setValue("CPF: ");

		self.addItem(self.UIcomponents.buscapfcpflb);

		self.UIcomponents.buscapfcpfle	= new JsCPFEdit("buscapfcpfle");
		self.UIcomponents.buscapfcpfle.setWidth(200);
		self.UIcomponents.buscapfcpfle.setXPos(100);
		self.UIcomponents.buscapfcpfle.setYPos(70);

		self.addItem(self.UIcomponents.buscapfcpfle);

		self.UIcomponents.buscapflv	= new JsListView("buscapflv");
		self.UIcomponents.buscapflv.setWidth(590);
		self.UIcomponents.buscapflv.setHeight(290);
		self.UIcomponents.buscapflv.setXPos(10);
		self.UIcomponents.buscapflv.setYPos(100);
		self.UIcomponents.buscapflv.addColumn("Nome",475);
		self.UIcomponents.buscapflv.addColumn("CPF",100);

		self.addItem(self.UIcomponents.buscapflv);

		self.UIcomponents.buscapfbt = new JsPushButton("buscapfbt");
		self.UIcomponents.buscapfbt.setWidth(150);
		self.UIcomponents.buscapfbt.setHeight(24);
		self.UIcomponents.buscapfbt.setXPos(450);
		self.UIcomponents.buscapfbt.setYPos(70);
		self.UIcomponents.buscapfbt.setValue("Buscar");

		self.addItem(self.UIcomponents.buscapfbt);

		self.UIcomponents.buscapfok	= new JsPushButton("buscapfok");
		self.UIcomponents.buscapfok.setWidth(150);
		self.UIcomponents.buscapfok.setHeight(24);
		self.UIcomponents.buscapfok.setXPos(290);
		self.UIcomponents.buscapfok.setYPos(400);
		self.UIcomponents.buscapfok.setValue("Selecionar");

		self.addItem(self.UIcomponents.buscapfok);

		self.UIcomponents.buscapfcancel = new JsPushButton();
		self.UIcomponents.buscapfcancel.setWidth(150);
		self.UIcomponents.buscapfcancel.setHeight(24);
		self.UIcomponents.buscapfcancel.setXPos(450);
		self.UIcomponents.buscapfcancel.setYPos(400);
		self.UIcomponents.buscapfcancel.setValue("Cancelar");

		self.addItem(self.UIcomponents.buscapfcancel);

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
		self.UIcallbacks.initInterface = function()
		{
			self.UIcomponents.buscapfnomele.setValue("");
			self.UIcomponents.buscapfcpfle.setValue("");
			self.UIcomponents.buscapflv.clearData();
		};

		self.UIcallbacks.checaEnter = function (jsEvent)
		{
		    if (jsEvent.keyCode == 13)
		        self.UIcallbacks.buscarPF(jsEvent);
		};

		self.UIcallbacks.buscarPF = function()
		{
			if (self.UIcomponents.buscapfnomele.getValue() || self.UIcomponents.buscapfcpfle.getValue())
			{
				if (self.UIcomponents.buscapfnomele.getValue() && self.UIcomponents.buscapfnomele.getValue().length < 10)
				{
					alert("Especifique o nome com pelo menos 10 caracteres.");
					return;
				}
				if (self.UIcomponents.buscapfcpfle.getValue() && self.UIcomponents.buscapfcpfle.getValue().length < 11)
				{
					alert("Especifique o CPF completo.");
					return;
				}

				 var dados = "<nome>" + self.UIcomponents.buscapfnomele.getValue() + "</nome>";
				dados += "<cpf>" + self.UIcomponents.buscapfcpfle.getValue() + "</cpf>";

				app.ws.getData("ControlePessoaFisica", "pesquisarPessoaFisica", dados, self.UIcallbacks.listarPFs, self.UIcallbacks.naoEncontrado);
			}
			else
				alert("Especifique um critério de busca antes.");
		};

		self.UIcallbacks.naoEncontrado = function()
		{
			alert("Não foi possível encontrar nenhum registro com estas informações.");
		};

		self.UIcallbacks.listarPFs = function()
		{
			var xml = app.getResponseXML();

			var pfs = xml.getElementsByTagName("item");

			self.UIcomponents.buscapflv.clearData();

			if (pfs.length ==0)
			{
				alert("Nenhum resultado encontrado");
				return;
			}

			for (i=0; i< pfs.length; i++) //>
			{
				var lvitem = new JsListViewItem();
				self.UIcomponents.buscapflv.addItem(lvitem);

				var id = pfs[i].getElementsByTagName("id")[0].text;
				var nome = pfs[i].getElementsByTagName("nome")[0].text;
				var cpf = pfs[i].getElementsByTagName("cpf")[0].text;

				lvitem.js_realvalue = id;
				lvitem.addItem(nome);
				lvitem.addItem(cpf);

				lvitem.setEvent("dblclick", self.UIcallbacks.selecionarPF);
			}
		};

		self.UIcallbacks.selecionarPF = function()
		{
			if (!self.UIcomponents.buscapflv.selectedItem)
			{
				alert("É preciso selecionar uma Pessoa Física da lista.");
				return;
			}
			else
			{
				top.executaMetodo();
				top.executaMetodo = null;
				self.UIcallbacks.fecharDialogo();
			}
		};

		self.UIcallbacks.fecharDialogo = function()
		{
			self.parentNode.removeChild(self.modalFrame);
			self.parentNode.removeChild(self);
			self.hideDialog();
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
		self.UIcallbacksHandlers[0][0] = "keypress";	//event
		self.UIcallbacksHandlers[0][1] = self.UIcomponents.buscapfnomele; //handler
		self.UIcallbacksHandlers[0][2] = self.UIcallbacks.checaEnter; //callback

		self.UIcallbacksHandlers[1] = new Array();
		self.UIcallbacksHandlers[1][0] = "keypress";	//event
		self.UIcallbacksHandlers[1][1] = self.UIcomponents.buscapfcpfle; //handler
		self.UIcallbacksHandlers[1][2] = self.UIcallbacks.checaEnter; //callback

		self.UIcallbacksHandlers[2] = new Array();
		self.UIcallbacksHandlers[2][0] = "click";	//event
		self.UIcallbacksHandlers[2][1] = self.UIcomponents.buscapfbt; //handler
		self.UIcallbacksHandlers[2][2] = self.UIcallbacks.buscarPF; //callback

		self.UIcallbacksHandlers[3] = new Array();
		self.UIcallbacksHandlers[3][0] = "click";	//event
		self.UIcallbacksHandlers[3][1] = self.UIcomponents.buscapfok; //handler
		self.UIcallbacksHandlers[3][2] = self.UIcallbacks.selecionarPF; //callback

		self.UIcallbacksHandlers[4] = new Array();
		self.UIcallbacksHandlers[4][0] = "click";	//event
		self.UIcallbacksHandlers[4][1] = self.UIcomponents.buscapfcancel; //handler
		self.UIcallbacksHandlers[4][2] = self.UIcallbacks.fecharDialogo; //callback

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

	//now, we init the interface
	if (self.initInterface)
		self.initInterface();

	return self;

};
