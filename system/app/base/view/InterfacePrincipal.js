InterfacePrincipal = function()
{
	var self = new JsWidget("InterfacePrincipal");
	self.realType = "JsInterface";
	self.setWidth("100%");
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

		self.UIcomponents.bemvindolb = new JsLabel("bemvindolb");
		self.UIcomponents.bemvindolb.setWidth(700);
		self.UIcomponents.bemvindolb.setHeight(20);
		self.UIcomponents.bemvindolb.setXPos(10);
		self.UIcomponents.bemvindolb.setYPos(10);
		self.UIcomponents.bemvindolb.setFontSize(16);
		self.UIcomponents.bemvindolb.setFontWeight("Bold");
		self.UIcomponents.bemvindolb.setValue("Bem Vindo ao Sistema de Administração Central de Usuários");

		self.addItem(self.UIcomponents.bemvindolb);

		self.UIcomponents.usuariosimg = new JsImage("usuariosimg");
		self.UIcomponents.usuariosimg.setWidth(128);
		self.UIcomponents.usuariosimg.setHeight(128);
		self.UIcomponents.usuariosimg.setXPos(290);
		self.UIcomponents.usuariosimg.setYPos(170);
		self.UIcomponents.usuariosimg.setSource("visual/images/usuarios.png");

		self.addItem(self.UIcomponents.usuariosimg);

		self.UIcomponents.usuarioslb = new JsLabel("usuarioslb");
		self.UIcomponents.usuarioslb.setWidth(265);
		self.UIcomponents.usuarioslb.setHeight(20);
		self.UIcomponents.usuarioslb.setXPos(460);
		self.UIcomponents.usuarioslb.setYPos(180);
		self.UIcomponents.usuarioslb.setIcon("visual/images/fileopen_small.png");
		self.UIcomponents.usuarioslb.setCursor("pointer");
		self.UIcomponents.usuarioslb.setValue("Acessar Cadastros de Usuários");

		self.addItem(self.UIcomponents.usuarioslb);

		self.UIcomponents.sistemasperfispermissoeslb = new JsLabel("sistemasperfispermissoeslb");
		self.UIcomponents.sistemasperfispermissoeslb.setWidth(355);
		self.UIcomponents.sistemasperfispermissoeslb.setHeight(20);
		self.UIcomponents.sistemasperfispermissoeslb.setXPos(460);
		self.UIcomponents.sistemasperfispermissoeslb.setYPos(210);
		self.UIcomponents.sistemasperfispermissoeslb.setIcon("visual/images/tools.gif");
		self.UIcomponents.sistemasperfispermissoeslb.setCursor("pointer");
		self.UIcomponents.sistemasperfispermissoeslb.setValue("Manter Sistemas, Perfis, Permissões e Relatórios");

		self.addItem(self.UIcomponents.sistemasperfispermissoeslb);

		self.UIcomponents.sistemaslb = new JsLabel("sistemaslb");
		self.UIcomponents.sistemaslb.setWidth(265);
		self.UIcomponents.sistemaslb.setHeight(20);
		self.UIcomponents.sistemaslb.setXPos(460);
		self.UIcomponents.sistemaslb.setYPos(240);
		self.UIcomponents.sistemaslb.setIcon("visual/images/sistema_small.png");
		self.UIcomponents.sistemaslb.setCursor("pointer");
		self.UIcomponents.sistemaslb.setValue("Manter Sistemas");

		self.addItem(self.UIcomponents.sistemaslb);

		self.UIcomponents.perfislb = new JsLabel("perfislb");
		self.UIcomponents.perfislb.setWidth(265);
		self.UIcomponents.perfislb.setHeight(20);
		self.UIcomponents.perfislb.setXPos(460);
		self.UIcomponents.perfislb.setYPos(270);
		self.UIcomponents.perfislb.setIcon("visual/images/perfil_small.png");
		self.UIcomponents.perfislb.setCursor("pointer");
		self.UIcomponents.perfislb.setValue("Manter Perfis");

		self.addItem(self.UIcomponents.perfislb);

		self.UIcomponents.permissoeslb = new JsLabel("permissoeslb");
		self.UIcomponents.permissoeslb.setWidth(265);
		self.UIcomponents.permissoeslb.setHeight(20);
		self.UIcomponents.permissoeslb.setXPos(460);
		self.UIcomponents.permissoeslb.setYPos(300);
		self.UIcomponents.permissoeslb.setIcon("visual/images/permissao_small.png");
		self.UIcomponents.permissoeslb.setCursor("pointer");
		self.UIcomponents.permissoeslb.setValue("Manter Permissões");

		self.addItem(self.UIcomponents.permissoeslb);

		self.UIcomponents.relatorioslb = new JsLabel("relatorioslb");
		self.UIcomponents.relatorioslb.setWidth(265);
		self.UIcomponents.relatorioslb.setHeight(20);
		self.UIcomponents.relatorioslb.setXPos(460);
		self.UIcomponents.relatorioslb.setYPos(330);
		self.UIcomponents.relatorioslb.setIcon("visual/images/relatorios.png");
		self.UIcomponents.relatorioslb.setCursor("pointer");
		self.UIcomponents.relatorioslb.setValue("Manter Relatórios");

		self.addItem(self.UIcomponents.relatorioslb);

		self.UIcomponents.grelatorioslb = new JsLabel("grelatorioslb");
		self.UIcomponents.grelatorioslb.setWidth(265);
		self.UIcomponents.grelatorioslb.setHeight(20);
		self.UIcomponents.grelatorioslb.setXPos(460);
		self.UIcomponents.grelatorioslb.setYPos(360);
		self.UIcomponents.grelatorioslb.setIcon("visual/images/relatorio_small.png");
		self.UIcomponents.grelatorioslb.setCursor("pointer");
		self.UIcomponents.grelatorioslb.setValue("Gerar Relatórios");

		self.addItem(self.UIcomponents.grelatorioslb);


		/*******************************************************
		                     Definição do Menu
		*******************************************************/

		self.UIcomponents.menuopcoes = new JsMenu("menuopcoes");
		self.UIcomponents.menuopcoes.setValue("Funcionalidades");

		self.UIcomponents.principalmenu = new JsMenuItem("principalmenu");
		self.UIcomponents.principalmenu.setValue("Tela Principal");
		self.UIcomponents.principalmenu.setIcon("visual/images/tela_principal.png");

		self.UIcomponents.menuopcoes.addItem(self.UIcomponents.principalmenu);

		self.UIcomponents.usuariosmenu = new JsMenuItem("usuariosmenu");
		self.UIcomponents.usuariosmenu.setValue("Acessar Cadastro de usuarios");
		self.UIcomponents.usuariosmenu.setIcon("visual/images/fileopen_small.png");

		self.UIcomponents.menuopcoes.addItem(self.UIcomponents.usuariosmenu);

		self.UIcomponents.sistemasperfispermissoesmenu = new JsMenuItem("sistemasperfispermissoesmenu");
		self.UIcomponents.sistemasperfispermissoesmenu.setValue("Manter Sistemas, Perfis, Permissões e Relatórios");
		self.UIcomponents.sistemasperfispermissoesmenu.setIcon("visual/images/tools.gif");

		self.UIcomponents.menuopcoes.addItem(self.UIcomponents.sistemasperfispermissoesmenu);

		self.UIcomponents.sistemasmenu = new JsMenuItem("sistemasmenu");
		self.UIcomponents.sistemasmenu.setValue("Manter Sistemas");
		self.UIcomponents.sistemasmenu.setIcon("visual/images/sistema_small.png");

		self.UIcomponents.menuopcoes.addItem(self.UIcomponents.sistemasmenu);

		self.UIcomponents.perfismenu = new JsMenuItem("perfismenu");
		self.UIcomponents.perfismenu.setValue("Manter Perfis");
		self.UIcomponents.perfismenu.setIcon("visual/images/perfil_small.png");

		self.UIcomponents.menuopcoes.addItem(self.UIcomponents.perfismenu);

		self.UIcomponents.permissoesmenu = new JsMenuItem("permissoesmenu");
		self.UIcomponents.permissoesmenu.setValue("Manter Permissões");
		self.UIcomponents.permissoesmenu.setIcon("visual/images/permissao_small.png");

		self.UIcomponents.menuopcoes.addItem(self.UIcomponents.permissoesmenu);

		self.UIcomponents.relatoriosmenu = new JsMenuItem("relatoriosmenu");
		self.UIcomponents.relatoriosmenu.setValue("Manter Relatórios");
		self.UIcomponents.relatoriosmenu.setIcon("visual/images/relatorios.png");

		self.UIcomponents.menuopcoes.addItem(self.UIcomponents.relatoriosmenu);

		self.UIcomponents.grelatoriosmenu = new JsMenuItem("grelatoriosmenu");
		self.UIcomponents.grelatoriosmenu.setValue("Gerar Relatórios");
		self.UIcomponents.grelatoriosmenu.setIcon("visual/images/relatorio_small.png");

		self.UIcomponents.menuopcoes.addItem(self.UIcomponents.grelatoriosmenu);

		self.UIcomponents.sysmenu = new JsMenu("sysmenu");
		self.UIcomponents.sysmenu.setValue("Sistema");

		self.UIcomponents.syshelp = new JsMenuItem("syshelp");
		self.UIcomponents.syshelp.setValue("Ajuda do Sistema");
		self.UIcomponents.syshelp.setIcon("visual/images/info_small.png");

		self.UIcomponents.sysmenu.addItem(self.UIcomponents.syshelp);

		self.UIcomponents.syslogout = new JsMenuItem("syslogout");
		self.UIcomponents.syslogout.setValue("Logout");
		self.UIcomponents.syslogout.setIcon("visual/images/logout_small.png");

		self.UIcomponents.sysmenu.addItem(self.UIcomponents.syslogout);

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
			if (!app.UIcomponents.menubar.childNodes[0])
			{
				app.UIcomponents.menubar.addItem(self.UIcomponents.menuopcoes);
				app.UIcomponents.menubar.addItem(self.UIcomponents.sysmenu);
			}
		};

		self.UIcallbacks.acessarCadastro = function()
		{
			app.loadInterface("InterfaceAbrirCriarUsuario");
		};

		self.UIcallbacks.manterSistemasPerfisPermissoes = function()
		{
			app.loadInterface("InterfaceSistemasPerfisPermissoes");
		};

		self.UIcallbacks.manterSistemas = function()
		{
			app.loadInterface("InterfaceSistema");
		};

		self.UIcallbacks.manterPerfis = function()
		{
			app.loadInterface("InterfacePerfil");
		};

		self.UIcallbacks.manterPermissoes = function()
		{
			app.loadInterface("InterfacePermissao");
		};

		self.UIcallbacks.manterRelatorios = function()
		{
			app.loadInterface("InterfaceRelatorios");
		};

		self.UIcallbacks.gerarRelatorios = function()
		{
			app.loadInterface("InterfaceRelatorio");
		};

		self.UIcallbacks.telaprincipal = function()
		{
			app.loadInterface("InterfacePrincipal");
		};

		self.UIcallbacks.doLogout = function()
		{
			if (confirm("Tem certeza que deseja efetuar o logout?"))
				app.ws.doLogout(null, app.getResponseJSON);
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
		self.UIcallbacksHandlers[0][1] = self.UIcomponents.usuarioslb; //handler
		self.UIcallbacksHandlers[0][2] = self.UIcallbacks.acessarCadastro; //callback

		self.UIcallbacksHandlers[1] = new Array();
		self.UIcallbacksHandlers[1][0] = "click";	//event
		self.UIcallbacksHandlers[1][1] = self.UIcomponents.usuariosmenu; //handler
		self.UIcallbacksHandlers[1][2] = self.UIcallbacks.acessarCadastro; //callback

		self.UIcallbacksHandlers[2] = new Array();
		self.UIcallbacksHandlers[2][0] = "click";	//event
		self.UIcallbacksHandlers[2][1] = self.UIcomponents.principalmenu; //handler
		self.UIcallbacksHandlers[2][2] = self.UIcallbacks.telaprincipal; //callback

		self.UIcallbacksHandlers[3] = new Array();
		self.UIcallbacksHandlers[3][0] = "click";	//event
		self.UIcallbacksHandlers[3][1] = self.UIcomponents.sistemasperfispermissoesmenu; //handler
		self.UIcallbacksHandlers[3][2] = self.UIcallbacks.manterSistemasPerfisPermissoes; //callback

		self.UIcallbacksHandlers[4] = new Array();
		self.UIcallbacksHandlers[4][0] = "click";	//event
		self.UIcallbacksHandlers[4][1] = self.UIcomponents.sistemasperfispermissoeslb; //handler
		self.UIcallbacksHandlers[4][2] = self.UIcallbacks.manterSistemasPerfisPermissoes; //callback

		self.UIcallbacksHandlers[5] = new Array();
		self.UIcallbacksHandlers[5][0] = "click";	//event
		self.UIcallbacksHandlers[5][1] = self.UIcomponents.syslogout; //handler
		self.UIcallbacksHandlers[5][2] = self.UIcallbacks.doLogout; //callback

		self.UIcallbacksHandlers[6] = new Array();
		self.UIcallbacksHandlers[6][0] = "click";	//event
		self.UIcallbacksHandlers[6][1] = self.UIcomponents.sistemaslb; //handler
		self.UIcallbacksHandlers[6][2] = self.UIcallbacks.manterSistemas; //callback

		self.UIcallbacksHandlers[7] = new Array();
		self.UIcallbacksHandlers[7][0] = "click";	//event
		self.UIcallbacksHandlers[7][1] = self.UIcomponents.sistemasmenu; //handler
		self.UIcallbacksHandlers[7][2] = self.UIcallbacks.manterSistemas; //callback

		self.UIcallbacksHandlers[8] = new Array();
		self.UIcallbacksHandlers[8][0] = "click";	//event
		self.UIcallbacksHandlers[8][1] = self.UIcomponents.perfislb; //handler
		self.UIcallbacksHandlers[8][2] = self.UIcallbacks.manterPerfis; //callback

		self.UIcallbacksHandlers[9] = new Array();
		self.UIcallbacksHandlers[9][0] = "click";	//event
		self.UIcallbacksHandlers[9][1] = self.UIcomponents.perfismenu; //handler
		self.UIcallbacksHandlers[9][2] = self.UIcallbacks.manterPerfis; //callback

		self.UIcallbacksHandlers[10] = new Array();
		self.UIcallbacksHandlers[10][0] = "click";	//event
		self.UIcallbacksHandlers[10][1] = self.UIcomponents.permissoeslb; //handler
		self.UIcallbacksHandlers[10][2] = self.UIcallbacks.manterPermissoes; //callback

		self.UIcallbacksHandlers[11] = new Array();
		self.UIcallbacksHandlers[11][0] = "click";	//event
		self.UIcallbacksHandlers[11][1] = self.UIcomponents.permissoesmenu; //handler
		self.UIcallbacksHandlers[11][2] = self.UIcallbacks.manterPermissoes; //callback

		self.UIcallbacksHandlers[12] = new Array();
		self.UIcallbacksHandlers[12][0] = "click";	//event
		self.UIcallbacksHandlers[12][1] = self.UIcomponents.relatorioslb; //handler
		self.UIcallbacksHandlers[12][2] = self.UIcallbacks.manterRelatorios; //callback

		self.UIcallbacksHandlers[13] = new Array();
		self.UIcallbacksHandlers[13][0] = "click";	//event
		self.UIcallbacksHandlers[13][1] = self.UIcomponents.relatoriosmenu; //handler
		self.UIcallbacksHandlers[13][2] = self.UIcallbacks.manterRelatorios; //callback

		self.UIcallbacksHandlers[14] = new Array();
		self.UIcallbacksHandlers[14][0] = "click";	//event
		self.UIcallbacksHandlers[14][1] = self.UIcomponents.grelatorioslb; //handler
		self.UIcallbacksHandlers[14][2] = self.UIcallbacks.gerarRelatorios; //callback

		self.UIcallbacksHandlers[15] = new Array();
		self.UIcallbacksHandlers[15][0] = "click";	//event
		self.UIcallbacksHandlers[15][1] = self.UIcomponents.grelatoriosmenu; //handler
		self.UIcallbacksHandlers[15][2] = self.UIcallbacks.gerarRelatorios; //callback

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
