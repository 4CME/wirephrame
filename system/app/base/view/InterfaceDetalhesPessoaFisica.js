InterfaceDetalhesPessoaFisica = function()
{
	var self = new JsWidget("InterfaceDetalhesPessoaFisica");
	self.realType = "JsInterface";
	self.setWidth("100%");
	self.setHeight(508);
	self.setYPos("20");

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

		self.UIcomponents.titulo = new JsLabel("titulo");
		self.UIcomponents.titulo.setWidth(200);
		self.UIcomponents.titulo.setHeight(20);
		self.UIcomponents.titulo.setXPos(20);
		self.UIcomponents.titulo.setYPos(10);
		self.UIcomponents.titulo.setValue("Detalhes de Pessoa Física");
		self.UIcomponents.titulo.setFontWeight("Bold");

		self.addItem(self.UIcomponents.titulo);

		self.UIcomponents.nomelb = new JsLabel("nomelb");
		self.UIcomponents.nomelb.setWidth(60);
		self.UIcomponents.nomelb.setHeight(20);
		self.UIcomponents.nomelb.setXPos(20);
		self.UIcomponents.nomelb.setYPos(40);
		self.UIcomponents.nomelb.setValue("Nome *:");

		self.addItem(self.UIcomponents.nomelb);

		self.UIcomponents.nome = new JsLineEdit("nome");
		self.UIcomponents.nome.setWidth(350);
		self.UIcomponents.nome.setXPos(120);
		self.UIcomponents.nome.setYPos(40);
		self.UIcomponents.nome.setMaxLength(100);

		self.addItem(self.UIcomponents.nome);

		self.UIcomponents.cpflb = new JsLabel("cpflb");
		self.UIcomponents.cpflb.setWidth(60);
		self.UIcomponents.cpflb.setHeight(20);
		self.UIcomponents.cpflb.setXPos(480);
		self.UIcomponents.cpflb.setYPos(40);
		self.UIcomponents.cpflb.setValue("CPF *:");

		self.addItem(self.UIcomponents.cpflb);

		self.UIcomponents.cpf = new JsCPFEdit("cpf");
		self.UIcomponents.cpf.setWidth(110);
		self.UIcomponents.cpf.setXPos(557);
		self.UIcomponents.cpf.setYPos(40);
		self.UIcomponents.cpf.disable(true);

		self.addItem(self.UIcomponents.cpf);

		self.UIcomponents.cidade_origemlb = new JsLabel("cidade_origemlb");
		self.UIcomponents.cidade_origemlb.setWidth(115);
		self.UIcomponents.cidade_origemlb.setHeight(20);
		self.UIcomponents.cidade_origemlb.setXPos(683);
		self.UIcomponents.cidade_origemlb.setYPos(40);
		self.UIcomponents.cidade_origemlb.setValue("Cidade de Origem *:");

		self.addItem(self.UIcomponents.cidade_origemlb);

		self.UIcomponents.cidade_origem = new JsLineEdit("cidade_origem");
		self.UIcomponents.cidade_origem.setWidth(180);
		self.UIcomponents.cidade_origem.setXPos(800);
		self.UIcomponents.cidade_origem.setYPos(40);
		self.UIcomponents.cidade_origem.setMaxLength(50);

		self.addItem(self.UIcomponents.cidade_origem);

		self.UIcomponents.id_estadocivillb = new JsLabel("id_estadocivillb");
		self.UIcomponents.id_estadocivillb.setWidth(100);
		self.UIcomponents.id_estadocivillb.setHeight(20);
		self.UIcomponents.id_estadocivillb.setXPos(20);
		self.UIcomponents.id_estadocivillb.setYPos(70);
		self.UIcomponents.id_estadocivillb.setValue("Est. Civil *:");

		self.addItem(self.UIcomponents.id_estadocivillb);

		self.UIcomponents.id_estadocivil = new JsComboBox("id_estadocivil");
		self.UIcomponents.id_estadocivil.setWidth(150);
		self.UIcomponents.id_estadocivil.setXPos(120);
		self.UIcomponents.id_estadocivil.setYPos(70);

		self.addItem(self.UIcomponents.id_estadocivil);

		self.UIcomponents.nascimentolb = new JsLabel("nascimentolb");
		self.UIcomponents.nascimentolb.setWidth(60);
		self.UIcomponents.nascimentolb.setHeight(20);
		self.UIcomponents.nascimentolb.setXPos(290);
		self.UIcomponents.nascimentolb.setYPos(70);
		self.UIcomponents.nascimentolb.setValue("Nasc. *:");

		self.addItem(self.UIcomponents.nascimentolb);

		self.UIcomponents.nascimento = new JsDateEdit("nascimento");
		self.UIcomponents.nascimento.setWidth(100);
		self.UIcomponents.nascimento.setXPos(350);
		self.UIcomponents.nascimento.setYPos(70);

		self.addItem(self.UIcomponents.nascimento);

		self.UIcomponents.rg_orgaolb = new JsLabel("rg_orgaolb");
		self.UIcomponents.rg_orgaolb.setWidth(60);
		self.UIcomponents.rg_orgaolb.setHeight(20);
		self.UIcomponents.rg_orgaolb.setXPos(480);
		self.UIcomponents.rg_orgaolb.setYPos(70);
		self.UIcomponents.rg_orgaolb.setValue("RG/Org *:");

		self.addItem(self.UIcomponents.rg_orgaolb);

		self.UIcomponents.rg_orgao = new JsLineEdit("rg_orgao");
		self.UIcomponents.rg_orgao.setWidth(110);
		self.UIcomponents.rg_orgao.setXPos(557);
		self.UIcomponents.rg_orgao.setYPos(70);
		self.UIcomponents.rg_orgao.setMaxLength(30);

		self.addItem(self.UIcomponents.rg_orgao);

		self.UIcomponents.id_uflb = new JsLabel("id_uflb");
		self.UIcomponents.id_uflb.setWidth(115);
		self.UIcomponents.id_uflb.setHeight(20);
		self.UIcomponents.id_uflb.setXPos(683);
		self.UIcomponents.id_uflb.setYPos(70);
		self.UIcomponents.id_uflb.setValue("UF de origem *:");

		self.addItem(self.UIcomponents.id_uflb);

		self.UIcomponents.id_uf = new JsComboBox("id_uf");
		self.UIcomponents.id_uf.setWidth(180);
		self.UIcomponents.id_uf.setXPos(800);
		self.UIcomponents.id_uf.setYPos(70);

		self.addItem(self.UIcomponents.id_uf);

		self.UIcomponents.nacionalidadelb = new JsLabel("nacionalidadelb");
		self.UIcomponents.nacionalidadelb.setWidth(120);
		self.UIcomponents.nacionalidadelb.setHeight(20);
		self.UIcomponents.nacionalidadelb.setXPos(20);
		self.UIcomponents.nacionalidadelb.setYPos(100);
		self.UIcomponents.nacionalidadelb.setValue("Nacionalidade *:");

		self.addItem(self.UIcomponents.nacionalidadelb);

		self.UIcomponents.nacionalidade = new JsLineEdit("nacionalidade");
		self.UIcomponents.nacionalidade.setWidth(150);
		self.UIcomponents.nacionalidade.setXPos(120);
		self.UIcomponents.nacionalidade.setYPos(100);
		self.UIcomponents.nacionalidade.setMaxLength(50);

		self.addItem(self.UIcomponents.nacionalidade);

		self.UIcomponents.id_sexolb = new JsLabel("id_sexolb");
		self.UIcomponents.id_sexolb.setWidth(60);
		self.UIcomponents.id_sexolb.setHeight(20);
		self.UIcomponents.id_sexolb.setXPos(290);
		self.UIcomponents.id_sexolb.setYPos(100);
		self.UIcomponents.id_sexolb.setValue("Sexo *:");

		self.addItem(self.UIcomponents.id_sexolb);

		self.UIcomponents.id_sexo = new JsComboBox("id_sexo");
		self.UIcomponents.id_sexo.setWidth(100);
		self.UIcomponents.id_sexo.setXPos(350);
		self.UIcomponents.id_sexo.setYPos(100);

		self.addItem(self.UIcomponents.id_sexo);

		self.UIcomponents.id_paislb = new JsLabel("id_paislb");
		self.UIcomponents.id_paislb.setWidth(120);
		self.UIcomponents.id_paislb.setHeight(20);
		self.UIcomponents.id_paislb.setXPos(683);
		self.UIcomponents.id_paislb.setYPos(100);
		self.UIcomponents.id_paislb.setValue("País de origem *:");

		self.addItem(self.UIcomponents.id_paislb);

		self.UIcomponents.id_pais = new JsComboBox("id_pais");
		self.UIcomponents.id_pais.setWidth(180);
		self.UIcomponents.id_pais.setXPos(800);
		self.UIcomponents.id_pais.setYPos(100);

		self.addItem(self.UIcomponents.id_pais);

		self.UIcomponents.maelb = new JsLabel("maelb");
		self.UIcomponents.maelb.setWidth(120);
		self.UIcomponents.maelb.setHeight(20);
		self.UIcomponents.maelb.setXPos(20);
		self.UIcomponents.maelb.setYPos(130);
		self.UIcomponents.maelb.setValue("Nome da Mãe:");

		self.addItem(self.UIcomponents.maelb);

		self.UIcomponents.mae = new JsLineEdit("mae");
		self.UIcomponents.mae.setWidth(547);
		self.UIcomponents.mae.setXPos(120);
		self.UIcomponents.mae.setYPos(130);
		self.UIcomponents.mae.setMaxLength(250);

		self.addItem(self.UIcomponents.mae);

		self.UIcomponents.pailb = new JsLabel("pailb");
		self.UIcomponents.pailb.setWidth(120);
		self.UIcomponents.pailb.setHeight(20);
		self.UIcomponents.pailb.setXPos(20);
		self.UIcomponents.pailb.setYPos(160);
		self.UIcomponents.pailb.setValue("Nome do Pai:");

		self.addItem(self.UIcomponents.pailb);

		self.UIcomponents.pai = new JsLineEdit("pai");
		self.UIcomponents.pai.setWidth(547);
		self.UIcomponents.pai.setXPos(120);
		self.UIcomponents.pai.setYPos(160);
		self.UIcomponents.pai.setMaxLength(250);

		self.addItem(self.UIcomponents.pai);

		self.UIcomponents.data_cadastro = new JsLabel("data_cadastro");
		self.UIcomponents.data_cadastro.setWidth(250);
		self.UIcomponents.data_cadastro.setHeight(20);
		self.UIcomponents.data_cadastro.setXPos(20);
		self.UIcomponents.data_cadastro.setYPos(190);
		self.UIcomponents.data_cadastro.setValue("Atualizado em: ");

		self.addItem(self.UIcomponents.data_cadastro);

		self.UIcomponents.tab_dados = new JsTab("tab_dados");
		self.UIcomponents.tab_dados.setWidth(967);
		self.UIcomponents.tab_dados.setHeight(270);
		self.UIcomponents.tab_dados.setXPos(20);
		self.UIcomponents.tab_dados.setYPos(220);
		self.UIcomponents.tab_dados.addTab("Endereços");
		self.UIcomponents.tab_dados.addTab("Telefones");
		self.UIcomponents.tab_dados.addTab("E-mails");

		self.addItem(self.UIcomponents.tab_dados);

		self.UIcomponents.endereco_enderecolb = new JsLabel("endereco_enderecolb");
		self.UIcomponents.endereco_enderecolb.setWidth(75);
		self.UIcomponents.endereco_enderecolb.setHeight(20);
		self.UIcomponents.endereco_enderecolb.setXPos(10);
		self.UIcomponents.endereco_enderecolb.setYPos(10);
		self.UIcomponents.endereco_enderecolb.setValue("Endereço *:");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_enderecolb,0);

		self.UIcomponents.endereco_tipolb = new JsLabel("endereco_tipolb");
		self.UIcomponents.endereco_tipolb.setWidth(49);
		self.UIcomponents.endereco_tipolb.setHeight(20);
		self.UIcomponents.endereco_tipolb.setXPos(536);
		self.UIcomponents.endereco_tipolb.setYPos(10);
		self.UIcomponents.endereco_tipolb.setValue("Tipo *:");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_tipolb,0);

		self.UIcomponents.endereco_bairrolb = new JsLabel("endereco_bairrolb");
		self.UIcomponents.endereco_bairrolb.setWidth(50);
		self.UIcomponents.endereco_bairrolb.setHeight(20);
		self.UIcomponents.endereco_bairrolb.setXPos(705);
		self.UIcomponents.endereco_bairrolb.setYPos(10);
		self.UIcomponents.endereco_bairrolb.setValue("Bairro *:");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_bairrolb,0);

		self.UIcomponents.endereco_cidadelb = new JsLabel("endereco_cidadelb");
		self.UIcomponents.endereco_cidadelb.setWidth(70);
		self.UIcomponents.endereco_cidadelb.setHeight(20);
		self.UIcomponents.endereco_cidadelb.setXPos(10);
		self.UIcomponents.endereco_cidadelb.setYPos(40);
		self.UIcomponents.endereco_cidadelb.setValue("Cidade *:");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_cidadelb,0);

		self.UIcomponents.endereco_uflb = new JsLabel("endereco_uflb");
		self.UIcomponents.endereco_uflb.setWidth(40);
		self.UIcomponents.endereco_uflb.setHeight(20);
		self.UIcomponents.endereco_uflb.setXPos(337);
		self.UIcomponents.endereco_uflb.setYPos(44);
		self.UIcomponents.endereco_uflb.setValue("UF *:");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_uflb,0);

		self.UIcomponents.endereco_paislb = new JsLabel("endereco_paislb");
		self.UIcomponents.endereco_paislb.setWidth(60);
		self.UIcomponents.endereco_paislb.setHeight(20);
		self.UIcomponents.endereco_paislb.setXPos(536);
		self.UIcomponents.endereco_paislb.setYPos(40);
		self.UIcomponents.endereco_paislb.setValue("Pais *:");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_paislb,0);

		self.UIcomponents.endereco_ceplb = new JsLabel("endereco_ceplb");
		self.UIcomponents.endereco_ceplb.setWidth(60);
		self.UIcomponents.endereco_ceplb.setHeight(20);
		self.UIcomponents.endereco_ceplb.setXPos(767);
		self.UIcomponents.endereco_ceplb.setYPos(40);
		self.UIcomponents.endereco_ceplb.setValue("CEP *:");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_ceplb,0);

		self.UIcomponents.endereco_endereco = new JsLineEdit("endereco_endereco");
		self.UIcomponents.endereco_endereco.setWidth(432);
		self.UIcomponents.endereco_endereco.setXPos(90);
		self.UIcomponents.endereco_endereco.setYPos(10);
		self.UIcomponents.endereco_endereco.setMaxLength(255);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_endereco,0);

		self.UIcomponents.endereco_tipo = new JsComboBox("endereco_tipo");
		self.UIcomponents.endereco_tipo.setWidth(115);
		self.UIcomponents.endereco_tipo.setXPos(580);
		self.UIcomponents.endereco_tipo.setYPos(10);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_tipo,0);

		self.UIcomponents.endereco_bairro = new JsLineEdit("endereco_bairro");
		self.UIcomponents.endereco_bairro.setWidth(182);
		self.UIcomponents.endereco_bairro.setXPos(760);
		self.UIcomponents.endereco_bairro.setYPos(10);
		self.UIcomponents.endereco_bairro.setMaxLength(50);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_bairro,0);

		self.UIcomponents.endereco_cidade = new JsLineEdit("endereco_cidade");
		self.UIcomponents.endereco_cidade.setWidth(225);
		self.UIcomponents.endereco_cidade.setXPos(90);
		self.UIcomponents.endereco_cidade.setYPos(40);
		self.UIcomponents.endereco_cidade.setMaxLength(255);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_cidade,0);

		self.UIcomponents.endereco_uf = new JsComboBox("endereco_uf");
		self.UIcomponents.endereco_uf.setWidth(151);
		self.UIcomponents.endereco_uf.setXPos(370);
		self.UIcomponents.endereco_uf.setYPos(40);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_uf,0);

		self.UIcomponents.endereco_pais = new JsComboBox("endereco_pais");
		self.UIcomponents.endereco_pais.setWidth(138);
		self.UIcomponents.endereco_pais.setXPos(580);
		self.UIcomponents.endereco_pais.setYPos(40);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_pais,0);

		self.UIcomponents.endereco_cep = new JsLineEdit("endereco_cep");
		self.UIcomponents.endereco_cep.setWidth(128);
		self.UIcomponents.endereco_cep.setXPos(813);
		self.UIcomponents.endereco_cep.setYPos(40);
		self.UIcomponents.endereco_cep.setNumeric();
		self.UIcomponents.endereco_cep.setMaxLength(8);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_cep,0);

		self.UIcomponents.endereco_savebt = new JsPushButton("endereco_savebt");
		self.UIcomponents.endereco_savebt.setWidth(150);
		self.UIcomponents.endereco_savebt.setHeight(24);
		self.UIcomponents.endereco_savebt.setXPos(10);
		self.UIcomponents.endereco_savebt.setYPos(70);
		self.UIcomponents.endereco_savebt.setLabel("Adicionar Endereço");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_savebt,0);

		self.UIcomponents.endereco_delbt = new JsPushButton("endereco_delbt");
		self.UIcomponents.endereco_delbt.setWidth(150);
		self.UIcomponents.endereco_delbt.setHeight(24);
		self.UIcomponents.endereco_delbt.setXPos(170);
		self.UIcomponents.endereco_delbt.setYPos(70);
		self.UIcomponents.endereco_delbt.setLabel("Remover Endereço");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.endereco_delbt,0);

		self.UIcomponents.enderecos = new JsListView("enderecos");
		self.UIcomponents.enderecos.setWidth(941);
		self.UIcomponents.enderecos.setHeight(130);
		self.UIcomponents.enderecos.setXPos(10);
		self.UIcomponents.enderecos.setYPos(100);
		self.UIcomponents.enderecos.addColumn("Tipo",100);
		self.UIcomponents.enderecos.addColumn("Endereco",300);
		self.UIcomponents.enderecos.addColumn("Bairro",150);
		self.UIcomponents.enderecos.addColumn("Cidade",150);
		self.UIcomponents.enderecos.addColumn("UF",150);
		self.UIcomponents.enderecos.addColumn("Pais",150);
		self.UIcomponents.enderecos.addColumn("CEP",100);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.enderecos,0);

		self.UIcomponents.telefone_tipolb = new JsLabel("telefone_tipolb");
		self.UIcomponents.telefone_tipolb.setWidth(60);
		self.UIcomponents.telefone_tipolb.setHeight(20);
		self.UIcomponents.telefone_tipolb.setXPos(10);
		self.UIcomponents.telefone_tipolb.setYPos(10);
		self.UIcomponents.telefone_tipolb.setValue("Tipo *");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_tipolb,1);

		self.UIcomponents.telefone_ddilb = new JsLabel("telefone_ddilb");
		self.UIcomponents.telefone_ddilb.setWidth(38);
		self.UIcomponents.telefone_ddilb.setHeight(20);
		self.UIcomponents.telefone_ddilb.setXPos(180);
		self.UIcomponents.telefone_ddilb.setYPos(10);
		self.UIcomponents.telefone_ddilb.setValue("DDI *");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_ddilb,1);

		self.UIcomponents.telefone_dddlb = new JsLabel("telefone_dddlb");
		self.UIcomponents.telefone_dddlb.setWidth(60);
		self.UIcomponents.telefone_dddlb.setHeight(20);
		self.UIcomponents.telefone_dddlb.setXPos(278);
		self.UIcomponents.telefone_dddlb.setYPos(10);
		self.UIcomponents.telefone_dddlb.setValue("DDD *");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_dddlb,1);

		self.UIcomponents.telefone_numerolb = new JsLabel("telefone_numerolb");
		self.UIcomponents.telefone_numerolb.setWidth(60);
		self.UIcomponents.telefone_numerolb.setHeight(20);
		self.UIcomponents.telefone_numerolb.setXPos(380);
		self.UIcomponents.telefone_numerolb.setYPos(10);
		self.UIcomponents.telefone_numerolb.setValue("Numero *");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_numerolb,1);

		self.UIcomponents.telefone_tipo = new JsComboBox("telefone_tipo");
		self.UIcomponents.telefone_tipo.setWidth(110);
		self.UIcomponents.telefone_tipo.setXPos(55);
		self.UIcomponents.telefone_tipo.setYPos(10);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_tipo,1);

		self.UIcomponents.telefone_ddi = new JsLineEdit("telefone_ddi");
		self.UIcomponents.telefone_ddi.setWidth(50);
		self.UIcomponents.telefone_ddi.setXPos(220);
		self.UIcomponents.telefone_ddi.setYPos(10);
		self.UIcomponents.telefone_ddi.setNumeric();
		self.UIcomponents.telefone_ddi.setMaxLength(2);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_ddi,1);

		self.UIcomponents.telefone_ddd = new JsLineEdit("telefone_ddd");
		self.UIcomponents.telefone_ddd.setWidth(50);
		self.UIcomponents.telefone_ddd.setXPos(320);
		self.UIcomponents.telefone_ddd.setYPos(10);
		self.UIcomponents.telefone_ddd.setNumeric();
		self.UIcomponents.telefone_ddd.setMaxLength(2);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_ddd,1);

		self.UIcomponents.telefone_numero = new JsLineEdit("telefone_numero");
		self.UIcomponents.telefone_numero.setWidth(200);
		self.UIcomponents.telefone_numero.setXPos(440);
		self.UIcomponents.telefone_numero.setYPos(10);
		self.UIcomponents.telefone_numero.setMaxLength(50);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_numero,1);

		self.UIcomponents.telefone_savebt = new JsPushButton("telefone_savebt");
		self.UIcomponents.telefone_savebt.setWidth(150);
		self.UIcomponents.telefone_savebt.setHeight(24);
		self.UIcomponents.telefone_savebt.setXPos(10);
		self.UIcomponents.telefone_savebt.setYPos(40);
		self.UIcomponents.telefone_savebt.setLabel("Adicionar Telefone");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_savebt,1);

		self.UIcomponents.telefone_delbt = new JsPushButton("telefone_delbt");
		self.UIcomponents.telefone_delbt.setWidth(150);
		self.UIcomponents.telefone_delbt.setHeight(24);
		self.UIcomponents.telefone_delbt.setXPos(170);
		self.UIcomponents.telefone_delbt.setYPos(40);
		self.UIcomponents.telefone_delbt.setLabel("Remover Telefone");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefone_delbt,1);

		self.UIcomponents.telefones = new JsListView("telefones");
		self.UIcomponents.telefones.setWidth(930);
		self.UIcomponents.telefones.setHeight(160);
		self.UIcomponents.telefones.setXPos(10);
		self.UIcomponents.telefones.setYPos(70);
		self.UIcomponents.telefones.addColumn("Tipo",100);
		self.UIcomponents.telefones.addColumn("DDI",50);
		self.UIcomponents.telefones.addColumn("DDD",50);
		self.UIcomponents.telefones.addColumn("Numero",200);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.telefones,1);

		self.UIcomponents.email_tipolb = new JsLabel("email_tipolb");
		self.UIcomponents.email_tipolb.setWidth(60);
		self.UIcomponents.email_tipolb.setHeight(20);
		self.UIcomponents.email_tipolb.setXPos(10);
		self.UIcomponents.email_tipolb.setYPos(10);
		self.UIcomponents.email_tipolb.setValue("Tipo *");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.email_tipolb,2);

		self.UIcomponents.email_emaillb = new JsLabel("email_emaillb");
		self.UIcomponents.email_emaillb.setWidth(60);
		self.UIcomponents.email_emaillb.setHeight(20);
		self.UIcomponents.email_emaillb.setXPos(185);
		self.UIcomponents.email_emaillb.setYPos(10);
		self.UIcomponents.email_emaillb.setValue("E-mail *");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.email_emaillb,2);

		self.UIcomponents.email_tipo = new JsComboBox("email_tipo");
		self.UIcomponents.email_tipo.setWidth(110);
		self.UIcomponents.email_tipo.setXPos(55);
		self.UIcomponents.email_tipo.setYPos(10);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.email_tipo,2);

		self.UIcomponents.email_email = new JsLineEdit("email_email");
		self.UIcomponents.email_email.setWidth(400);
		self.UIcomponents.email_email.setXPos(240);
		self.UIcomponents.email_email.setYPos(10);
		self.UIcomponents.email_email.setMaxLength(50);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.email_email,2);

		self.UIcomponents.email_savebt = new JsPushButton("email_savebt");
		self.UIcomponents.email_savebt.setWidth(150);
		self.UIcomponents.email_savebt.setHeight(24);
		self.UIcomponents.email_savebt.setXPos(10);
		self.UIcomponents.email_savebt.setYPos(40);
		self.UIcomponents.email_savebt.setLabel("Adicionar E-mail");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.email_savebt,2);

		self.UIcomponents.email_delbt = new JsPushButton("email_delbt");
		self.UIcomponents.email_delbt.setWidth(150);
		self.UIcomponents.email_delbt.setHeight(24);
		self.UIcomponents.email_delbt.setXPos(170);
		self.UIcomponents.email_delbt.setYPos(40);
		self.UIcomponents.email_delbt.setLabel("Remover E-mail");

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.email_delbt,2);

		self.UIcomponents.emails = new JsListView("emails");
		self.UIcomponents.emails.setWidth(930);
		self.UIcomponents.emails.setHeight(160);
		self.UIcomponents.emails.setXPos(10);
		self.UIcomponents.emails.setYPos(70);
		self.UIcomponents.emails.addColumn("Tipo",100);
		self.UIcomponents.emails.addColumn("E-mail",400);

		self.UIcomponents.tab_dados.addItemToTab(self.UIcomponents.emails,2);

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
			self.UIcallbacks.resetInterface();

			self.UIcomponents.enderecos.validacao = self.UIcallbacks.validaEndereco;
			self.UIcomponents.enderecos.onEdit = listviewLoadData;
			self.UIcomponents.enderecos.xmlNodeName = "Endereco";
			self.UIcomponents.endereco_savebt.setEvent("click",listviewSaveData);
			self.UIcomponents.endereco_savebt.listview = self.UIcomponents.enderecos;
			self.UIcomponents.endereco_delbt.setEvent("click",listviewDelData);
			self.UIcomponents.endereco_delbt.listview = self.UIcomponents.enderecos;

			self.UIcomponents.enderecos.relations = new Array();
			self.UIcomponents.enderecos.relations[0] = new Array();
			self.UIcomponents.enderecos.relations[0][0] = self.UIcomponents.endereco_tipo;
			self.UIcomponents.enderecos.relations[0][1] = true;
			self.UIcomponents.enderecos.relations[0][2] = "id_tipoendereco";
			self.UIcomponents.enderecos.relations[1] = new Array();
			self.UIcomponents.enderecos.relations[1][0] = self.UIcomponents.endereco_endereco;
			self.UIcomponents.enderecos.relations[1][1] = true;
			self.UIcomponents.enderecos.relations[1][2] = "endereco";
			self.UIcomponents.enderecos.relations[2] = new Array();
			self.UIcomponents.enderecos.relations[2][0] = self.UIcomponents.endereco_bairro;
			self.UIcomponents.enderecos.relations[2][1] = true;
			self.UIcomponents.enderecos.relations[2][2] = "bairro";
			self.UIcomponents.enderecos.relations[3] = new Array();
			self.UIcomponents.enderecos.relations[3][0] = self.UIcomponents.endereco_cidade;
			self.UIcomponents.enderecos.relations[3][1] = true;
			self.UIcomponents.enderecos.relations[3][2] = "cidade";
			self.UIcomponents.enderecos.relations[4] = new Array();
			self.UIcomponents.enderecos.relations[4][0] = self.UIcomponents.endereco_uf;
			self.UIcomponents.enderecos.relations[4][1] = true;
			self.UIcomponents.enderecos.relations[4][2] = "id_uf";
			self.UIcomponents.enderecos.relations[5] = new Array();
			self.UIcomponents.enderecos.relations[5][0] = self.UIcomponents.endereco_pais;
			self.UIcomponents.enderecos.relations[5][1] = true;
			self.UIcomponents.enderecos.relations[5][2] = "id_pais";
			self.UIcomponents.enderecos.relations[6] = new Array();
			self.UIcomponents.enderecos.relations[6][0] = self.UIcomponents.endereco_cep;
			self.UIcomponents.enderecos.relations[6][1] = true;
			self.UIcomponents.enderecos.relations[6][2] = "cep";

			self.UIcomponents.telefones.validacao = self.UIcallbacks.validaTelefone;
			self.UIcomponents.telefones.onEdit = listviewLoadData;
			self.UIcomponents.telefones.xmlNodeName = "Telefone";
			self.UIcomponents.telefone_savebt.setEvent("click",listviewSaveData);
			self.UIcomponents.telefone_savebt.listview = self.UIcomponents.telefones;
			self.UIcomponents.telefone_delbt.setEvent("click",listviewDelData);
			self.UIcomponents.telefone_delbt.listview = self.UIcomponents.telefones;

			self.UIcomponents.telefones.relations = new Array();
			self.UIcomponents.telefones.relations[0] = new Array();
			self.UIcomponents.telefones.relations[0][0] = self.UIcomponents.telefone_tipo;
			self.UIcomponents.telefones.relations[0][1] = true;
			self.UIcomponents.telefones.relations[0][2] = "id_tipotelefone";
			self.UIcomponents.telefones.relations[1] = new Array();
			self.UIcomponents.telefones.relations[1][0] = self.UIcomponents.telefone_ddi;
			self.UIcomponents.telefones.relations[1][1] = true;
			self.UIcomponents.telefones.relations[1][2] = "ddi";
			self.UIcomponents.telefones.relations[2] = new Array();
			self.UIcomponents.telefones.relations[2][0] = self.UIcomponents.telefone_ddd;
			self.UIcomponents.telefones.relations[2][1] = true;
			self.UIcomponents.telefones.relations[2][2] = "ddd";
			self.UIcomponents.telefones.relations[3] = new Array();
			self.UIcomponents.telefones.relations[3][0] = self.UIcomponents.telefone_numero;
			self.UIcomponents.telefones.relations[3][1] = true;
			self.UIcomponents.telefones.relations[3][2] = "numero";

			self.UIcomponents.emails.validacao = self.UIcallbacks.validaEmail;
			self.UIcomponents.emails.onEdit = listviewLoadData;
			self.UIcomponents.emails.xmlNodeName = "Email";
			self.UIcomponents.email_savebt.setEvent("click",listviewSaveData);
			self.UIcomponents.email_savebt.listview = self.UIcomponents.emails;
			self.UIcomponents.email_delbt.setEvent("click",listviewDelData);
			self.UIcomponents.email_delbt.listview = self.UIcomponents.emails;

			self.UIcomponents.emails.relations = new Array();
			self.UIcomponents.emails.relations[0] = new Array();
			self.UIcomponents.emails.relations[0][0] = self.UIcomponents.email_tipo;
			self.UIcomponents.emails.relations[0][1] = true;
			self.UIcomponents.emails.relations[0][2] = "id_tipoemail";
			self.UIcomponents.emails.relations[1] = new Array();
			self.UIcomponents.emails.relations[1][0] = self.UIcomponents.email_email;
			self.UIcomponents.emails.relations[1][1] = true;
			self.UIcomponents.emails.relations[1][2] = "email";

			var dados = "<parametros>";
			dados += "<item>TipoEndereco</item>";
			dados += "<item>TipoTelefone</item>";
			dados += "<item>TipoEmail</item>";
			dados += "<item>Pais</item>";
			dados += "<item>UF</item>";
			dados += "<item>EstadoCivil</item>";
			dados += "<item>Sexo</item>";
			dados += "</parametros>";

			app.ws.getData("ControleApoio", "carregarApoio", dados, self.UIcallbacks.carregarDadosApoio);

			self.xml_data = app.xml_data;
		};

		self.UIcallbacks.carregarDadosApoio = function (jsEvent)
		{
			if (!self.xml_support)
			{
				self.xml_support = app.getResponseXML();

				//carrega lista estadocicivil
				self.UIcomponents.id_estadocivil.clearData();
				self.UIcomponents.id_estadocivil.addItem('', '[--Selecione abaixo--]');

				var estciv = self.xml_support.getElementsByTagName("EstadoCivil");
				estciv = estciv[0].getElementsByTagName("item");

				for (i=0; i< estciv.length; i++)
				{
					var id = estciv[i].getElementsByTagName("id")[0].text;
					var nome = estciv[i].getElementsByTagName("nome")[0].text;

					self.UIcomponents.id_estadocivil.addItem(id, nome);
				}

				//carrega lista id_sexo
				self.UIcomponents.id_sexo.clearData();
				self.UIcomponents.id_sexo.addItem('', '[--Selecione abaixo--]');

				var id_sexo = self.xml_support.getElementsByTagName("Sexo");
				id_sexo = id_sexo[0].getElementsByTagName("item");

				for (i=0; i< id_sexo.length; i++)
				{
					var id = id_sexo[i].getElementsByTagName("id")[0].text;
					var nome = id_sexo[i].getElementsByTagName("nome")[0].text;

					self.UIcomponents.id_sexo.addItem(id, nome);
				}

				//carrega lista ufs
				self.UIcomponents.id_uf.clearData();
				self.UIcomponents.endereco_uf.clearData();

				self.UIcomponents.id_uf.addItem('', '[--Selecione abaixo--]');
				self.UIcomponents.endereco_uf.addItem('', '[--Selecione abaixo--]');

				var ufs = self.xml_support.getElementsByTagName("UF");
				ufs = ufs[0].getElementsByTagName("item");

				//será utilizado para edição dos itens do listview
				self.UIcomponents.enderecos.lvheaderdiv.childNodes[4].xml_data = ufs;

				for (i=0; i< ufs.length; i++)
				{
					var id = ufs[i].getElementsByTagName("id")[0].text;
					var nome = ufs[i].getElementsByTagName("nome")[0].text;

					self.UIcomponents.id_uf.addItem(id, nome);
					self.UIcomponents.endereco_uf.addItem(id, nome);
				}

				//carrega lista países
				self.UIcomponents.id_pais.clearData();
				self.UIcomponents.endereco_pais.clearData();

				self.UIcomponents.id_pais.addItem('', '[--Selecione abaixo--]');
				self.UIcomponents.endereco_pais.addItem('', '[--Selecione abaixo--]');

				var pais = self.xml_support.getElementsByTagName("Pais");
				pais = pais[0].getElementsByTagName("item");

				//será utilizado para edição dos itens do listview
				self.UIcomponents.enderecos.lvheaderdiv.childNodes[5].xml_data = pais;

				for (i=0; i< pais.length; i++)
				{
					var id = pais[i].getElementsByTagName("id")[0].text;
					var nome = pais[i].getElementsByTagName("nome")[0].text;

					self.UIcomponents.id_pais.addItem(id, nome);
					self.UIcomponents.endereco_pais.addItem(id, nome);
				}

				//carrega lista tipo
				self.UIcomponents.endereco_tipo.clearData();
				self.UIcomponents.telefone_tipo.clearData();
				self.UIcomponents.email_tipo.clearData();

				self.UIcomponents.endereco_tipo.addItem('', '[--Selecione abaixo--]');
				self.UIcomponents.telefone_tipo.addItem('', '[--Selecione abaixo--]');
				self.UIcomponents.email_tipo.addItem('', '[--Selecione abaixo--]');

				var tipo = self.xml_support.getElementsByTagName("TipoEndereco");
				tipo = tipo[0].getElementsByTagName("item");

				//será utilizado para edição dos itens do listview
				self.UIcomponents.enderecos.lvheaderdiv.childNodes[0].xml_data = tipo;
				
				for (i=0; i< tipo.length; i++)
				{
					var id = tipo[i].getElementsByTagName("id")[0].text;
					var nome = tipo[i].getElementsByTagName("nome")[0].text;

					self.UIcomponents.endereco_tipo.addItem(id, nome);
				}
				
				var tipo = self.xml_support.getElementsByTagName("TipoTelefone");
				tipo = tipo[0].getElementsByTagName("item");

				//será utilizado para edição dos itens do listview
				self.UIcomponents.telefones.lvheaderdiv.childNodes[0].xml_data = tipo;

				for (i=0; i< tipo.length; i++)
				{
					var id = tipo[i].getElementsByTagName("id")[0].text;
					var nome = tipo[i].getElementsByTagName("nome")[0].text;
					
					self.UIcomponents.telefone_tipo.addItem(id, nome);
				}
				
				var tipo = self.xml_support.getElementsByTagName("TipoEmail");
				tipo = tipo[0].getElementsByTagName("item");

				//será utilizado para edição dos itens do listview
				self.UIcomponents.emails.lvheaderdiv.childNodes[0].xml_data = tipo;

				for (i=0; i< tipo.length; i++)
				{
					var id = tipo[i].getElementsByTagName("id")[0].text;
					var nome = tipo[i].getElementsByTagName("nome")[0].text;

					self.UIcomponents.email_tipo.addItem(id, nome);
				}
			}

			self.UIcallbacks.loadXMLData();
		};

		self.UIcallbacks.defineComboUfPaisOrigem = function()
		{
			var uf = self.UIcomponents.id_uf.getValue();
			var pais = self.UIcomponents.id_pais.getValue();
			if (uf && uf != 28 && pais != 10)
			{
				self.UIcomponents.id_pais.setValue(1);
				alert("Para esta UF a única opção é \"Brasil\".");
			}
			else if (pais == 10 && uf == 28)
			{
				self.UIcomponents.id_pais.setValue("");
				alert("Para esta UF você não pode escolher \"Brasil\".");
			}
		};

		self.UIcallbacks.defineComboUfPaisEndereco = function()
		{
			var uf = self.UIcomponents.endereco_uf.getValue();
			var pais = self.UIcomponents.endereco_pais.getValue();
			if (uf && uf != 28 && pais != 10)
			{
				self.UIcomponents.endereco_pais.setValue(1);
				alert("Para esta UF a única opção é \"Brasil\".");
			}
			else if (pais == 10 && uf == 28)
			{
				self.UIcomponents.endereco_pais.setValue("");
				alert("Para esta UF você não pode escolher \"Brasil\".");
			}
		};

		self.UIcallbacks.validaEndereco = function (jsEvent)
		{
			var value = self.UIcomponents.endereco_endereco.getValue();

			if (!value)
			{
				self.UIcomponents.endereco_endereco.focus();
				alert("É obrigatório informar o endereço.");
				return false;
			}
			if (value.length < 10) 
			{
				self.UIcomponents.endereco_endereco.focus();
				alert("Endereço deve ter no mínimo 10 caracteres.");
				return false;
			}

			var value = self.UIcomponents.endereco_tipo.getValue();

			if (!value)
			{
				self.UIcomponents.endereco_tipo.focus();
				alert("É obrigatório informar o tipo do endereço.");
				return false;
			}

			var value = self.UIcomponents.endereco_bairro.getValue();

			if (!value)
			{
				self.UIcomponents.endereco_bairro.focus();
				alert("É obrigatório informar o bairro.");
				return false;
			}
			if (value.length < 3) 
			{
				self.UIcomponents.endereco_bairro.focus();
				alert("Bairro deve ter no mínimo 3 caracteres.");
				return false;
			}

			var value = self.UIcomponents.endereco_cidade.getValue();

			if (!value)
			{
				self.UIcomponents.endereco_cidade.focus();
				alert("É obrigatório informar o nome.");
				return false;
			}
			if (value.length < 3) 
			{
				self.UIcomponents.endereco_cidade.focus();
				alert("Cidade do endereço deve ter no mínimo 3 caracteres.");
				return false;
			}

			var value = self.UIcomponents.endereco_uf.getValue();

			if (!value)
			{
				self.UIcomponents.endereco_uf.focus();
				alert("É obrigatório informar a uf do endereço.");
				return false;
			}

			var value = self.UIcomponents.endereco_pais.getValue();

			if (!value)
			{
				self.UIcomponents.endereco_pais.focus();
				alert("É obrigatório informar o país do endereço.");
				return false;
			}

			var value = self.UIcomponents.endereco_cep.getValue();

			if (!value)
			{
				self.UIcomponents.endereco_cep.focus();
				alert("É obrigatório informar o CEP.");
				return false;
			}
			if (value.length < 8) 
			{
				self.UIcomponents.endereco_cep.focus();
				alert("Nome da pessoa deve ter no mínimo 8 caracteres.");
				return false;
			}

			return true;
		};

		self.UIcallbacks.validaTelefone = function (jsEvent)
		{
			var value = self.UIcomponents.telefone_tipo.getValue();

			if (!value)
			{
				self.UIcomponents.telefone_tipo.focus();
				alert("É obrigatório informar o tipo do telefone.");
				return false;
			}

			var value = self.UIcomponents.telefone_ddi.getValue();

			if (!value)
			{
				self.UIcomponents.telefone_ddi.focus();
				alert("É obrigatório informar o DDI.");
				return false;
			}
			if (value.length < 2) 
			{
				self.UIcomponents.telefone_ddi.focus();
				alert("DDI deve ter no mínimo 2 caracteres.");
				return false;
			}

			var value = self.UIcomponents.telefone_ddd.getValue();

			if (!value)
			{
				self.UIcomponents.telefone_ddd.focus();
				alert("É obrigatório informar o DDD.");
				return false;
			}
			if (value.length < 2) 
			{
				self.UIcomponents.telefone_ddd.focus();
				alert("DDD deve ter no mínimo 2 caracteres.");
				return false;
			}

			var value = self.UIcomponents.telefone_numero.getValue();

			if (!value)
			{
				self.UIcomponents.telefone_numero.focus();
				alert("É obrigatório informar o número do telefone.");
				return false;
			}
			if (value.length < 7) 
			{
				self.UIcomponents.telefone_numero.focus();
				alert("Número do telefone deve ter no mínimo 7 caracteres.");
				return false;
			}

			return true;
		};

		self.UIcallbacks.validaEmail = function (jsEvent)
		{
			var value = self.UIcomponents.email_tipo.getValue();

			if (!value)
			{
				self.UIcomponents.email_tipo.focus();
				alert("É obrigatório informar o tipo do e-mail.");
				return false;
			}

			var value = self.UIcomponents.email_email.getValue();

			if (!value)
			{
				self.UIcomponents.email_email.focus();
				alert("É obrigatório informar o e-mail.");
				return false;
			}
			if (!validaEmail(value)) 
			{
				self.UIcomponents.email_email.focus();
				alert("E-mail válido.");
				return false;
			}
			return true;
		};

		self.UIcallbacks.resetInterface = function ()
		{
			for (var i in self.UIcomponents)
			{
				if (self.UIcomponents[i].input)
				{
					if (
						self.UIcomponents[i].type != "JsBoxButton" &&
						self.UIcomponents[i].type != "JsPushButton" &&
						self.UIcomponents[i].type != "JsIcon" &&
						self.UIcomponents[i].type != "JsImageButton" &&
						self.UIcomponents[i].type != "JsMiniToolBarButton" &&
						self.UIcomponents[i].type != "JsToolBarButton" &&
						self.UIcomponents[i].type != "JsColoPicker" &&
						self.UIcomponents[i].type != "JsTableBuilder" &&
						self.UIcomponents[i].type != "JsURLBuilder"
					)
						self.UIcomponents[i].setValue('');
				}
				else
				{
					if (self.UIcomponents[i].type == "JsListView" || self.UIcomponents[i].type == "JsDataView")
					{
						self.UIcomponents[i].clearData();
						if (self.UIcomponents[i].type == "JsListView")
							self.UIcomponents[i].removedItens = new Array();
					}
				}
			}
		};

		self.UIcallbacks.loadXMLData = function ()
		{
			self.UIcomponents.data_cadastro.setValue("Atualizado em: " + formataDataHora(app.xml_data.getElementsByTagName("data_cadastro")[0].text));

			for (var i in self.UIcomponents)
			{
				var contents = app.xml_data.getElementsByTagName(i);

				if (self.UIcomponents[i].input)
				{
					if (contents.length)
						self.UIcomponents[i].setValue(app.xml_data.getElementsByTagName(i)[0].text);
					else if (
						self.UIcomponents[i].type != "JsBoxButton" &&
						self.UIcomponents[i].type != "JsPushButton" &&
						self.UIcomponents[i].type != "JsIcon" &&
						self.UIcomponents[i].type != "JsImageButton" &&
						self.UIcomponents[i].type != "JsMiniToolBarButton" &&
						self.UIcomponents[i].type != "JsToolBarButton" &&
						self.UIcomponents[i].type != "JsColoPicker" &&
						self.UIcomponents[i].type != "JsTableBuilder" &&
						self.UIcomponents[i].type != "JsURLBuilder"
						)
						self.UIcomponents[i].setValue('');
				}
				else
				{
					if (self.UIcomponents[i].type == "JsListView")
					{
						self.UIcomponents[i].clearData();

						if (contents.length)
						{
							for (var j=0; j < contents.length; j++) 
							{
								for (var k=0; k < contents[j].childNodes.length; k++) 
								{
									if (contents[j].childNodes[k].nodeName == self.UIcomponents[i].xmlNodeName)
									{
										var lstitem = new JsListViewItem();
										self.UIcomponents[i].addItem(lstitem);

										if (self.UIcomponents[i].onEdit)
											lstitem.setEvent("click",self.UIcomponents[i].onEdit);

										lstitem.pid = contents[j].childNodes[k].getAttribute("id");
										
										if (self.UIcomponents[i].relations)
										{
											for (var x=0; x < self.UIcomponents[i].relations.length; x++)
											{
												if(self.UIcomponents[i].lvheaderdiv.childNodes[x].xml_data)
												{
													var support_xml = self.UIcomponents[i].lvheaderdiv.childNodes[x].xml_data;
													var rid = contents[j].childNodes[k].getElementsByTagName(self.UIcomponents[i].relations[x][2])[0].text;
													var nome = "";
													for (var y=0; y< support_xml.length; y++)
													{
														var id = support_xml[y].getElementsByTagName("id")[0].text;
														if (rid == id)
														{
															nome = support_xml[y].getElementsByTagName("nome")[0].text;
															break;
														}
													}
													lstitem.addItem(nome);
													lstitem.cells[x].js_realvalue = rid;
												}
												else
													lstitem.addItem(contents[j].childNodes[k].getElementsByTagName(self.UIcomponents[i].relations[x][2])[0].text);
											}
										}
										else
										{
											for (var x=0; x < contents[j].childNodes[k].childNodes.length; x++)
											{
												if (x < self.UIcomponents[i].lvheaderdiv.childNodes.length)
												{
													if(self.UIcomponents[i].lvheaderdiv.childNodes[x].xml_data)
													{
														var support_xml = self.UIcomponents[i].lvheaderdiv.childNodes[x].xml_data;
														var rid = contents[j].childNodes[k].childNodes[x].text;
														var nome = "";
														for (var y=0; y< support_xml.length; y++)
														{
															var id = support_xml[y].getElementsByTagName("id")[0].text;
															if (rid == id)
															{
																nome = support_xml[y].getElementsByTagName("nome")[0].text;
																break;
															}
														}
														lstitem.addItem(nome);
														lstitem.cells[x].js_realvalue = rid;
													}
													else
														lstitem.addItem(contents[j].childNodes[k].childNodes[x].text);
												}
											}
										}
									}
								}
							}
						}
					}
					else if (self.UIcomponents[i].type == "JsDataView")
					{
						self.UIcomponents[i].clearData();
						if (contents.length)
						{
							var newData = new Array();
							for (var j=0; j < contents.length; j++) 
							{
								for (var k=0; k < contents[j].childNodes.length; k++) 
								{
									newData[k] = new Array();
									
									if (self.UIcomponents[i].relations)
									{
										for (var x=0; x < self.UIcomponents[i].relations.length; x++)
										{
											if(self.UIcomponents[i].dtheaderdiv.childNodes[x].xml_data)
											{
												var support_xml = self.UIcomponents[i].dtheaderdiv.childNodes[x].xml_data;
												var rid = contents[j].childNodes[k].getElementsByTagName(self.UIcomponents[i].relations[x][2])[0].text;
												var nome = "";
												for (var y=0; y< support_xml.length; y++)
												{
													var id = support_xml[y].getElementsByTagName("id")[0].text;
													if (rid == id)
													{
														nome = support_xml[y].getElementsByTagName("nome")[0].text;
														break;
													}
												}
												lstitem.addItem(nome);
												lstitem.cells[x].js_realvalue = rid;
											}
											else
												lstitem.addItem(contents[j].childNodes[k].getElementsByTagName(self.UIcomponents[i].relations[x][2])[0].text);
										}
									}
									else
									{
										for (var x=0; x < contents[j].childNodes[k].childNodes.length; x++)
										{
											if (x < self.UIcomponents[i].dtheaderdiv.childNodes.length)
											{
												if(self.UIcomponents[i].dtheaderdiv.childNodes[x].xml_data)
												{
													var support_xml = self.UIcomponents[i].dtheaderdiv.childNodes[x].xml_data;
													var rid = contents[j].childNodes[k].childNodes[x].text;
													var nome = "";
													for (var y=0; y< support_xml.length; y++)
													{
														var id = support_xml[y].getElementsByTagName("id")[0].text;
														if (rid == id)
														{
															nome = support_xml[y].getElementsByTagName("nome")[0].text;
															break;
														}
													}
													newData[k][x] = nome;
												}
												else
													newData[k][x] = contents[j].childNodes[k].childNodes[x].text;
											}
										}
									}
								}
							}
							self.UIcomponents[i].loadData(newData);
						}
					}
				}
			}
		};

		self.UIcallbacks.validaDados = function(jsEvent)
		{
			var value = self.UIcomponents.nome.getValue();

			if (!value)
			{
				self.UIcomponents.nome.focus();
				alert("É obrigatório informar o nome.");
				return false;
			}
			if (value.length < 3) 
			{
				self.UIcomponents.nome.focus();
				alert("Nome da pessoa deve ter no mínimo 3 caracteres.");
				return false;
			}

			var value = self.UIcomponents.nascimento.getValue();

			if (!value)
			{
				self.UIcomponents.nascimento.focus();
				alert("É obrigatório informar a data de nascimento da pessoa.");
				return false;
			}

			var value = self.UIcomponents.rg_orgao.getValue();

			if (!value)
			{
				self.UIcomponents.rg_orgao.focus();
				alert("É obrigatório informar o rg/órgão expedidor da pessoa.");
				return false;
			}

			var value = self.UIcomponents.id_estadocivil.getValue();

			if (!value)
			{
				self.UIcomponents.id_estadocivil.focus();
				alert("É obrigatório informar o estado civil da pessoa.");
				return false;
			}

			var value = self.UIcomponents.id_sexo.getValue();

			if (!value)
			{
				self.UIcomponents.id_sexo.focus();
				alert("É obrigatório informar o id_sexo da pessoa.");
				return false;
			}

			var value = self.UIcomponents.cidade_origem.getValue();

			if (!value)
			{
				self.UIcomponents.cidade_origem.focus();
				alert("É obrigatório informar a cidade de origem da pessoa.");
				return false;
			}
			if (value.length < 3) 
			{
				self.UIcomponents.cidade_origem.focus();
				alert("Cidade de origem  da pessoa deve ter no mínimo 3 caracteres.");
				return false;
			}

			var value = self.UIcomponents.id_uf.getValue();

			if (!value)
			{
				self.UIcomponents.id_uf.focus();
				alert("É obrigatório informar a uf de origem da pessoa.");
				return false;
			}

			var value = self.UIcomponents.id_pais.getValue();

			if (!value)
			{
				self.UIcomponents.id_pais.focus();
				alert("É obrigatório informar o país de origem da pessoa.");
				return false;
			}

			var value = self.UIcomponents.nacionalidade.getValue();

			if (!value)
			{
				self.UIcomponents.nacionalidade.focus();
				alert("É obrigatório informar a nacionalidade da pessoa.");
				return false;
			}

			if (self.UIcomponents.enderecos.childList.length == 0)
			{
				alert("É obrigatório informar um endereço de contato.");
				return false;
			}

			if (self.UIcomponents.telefones.childList.length == 0)
			{
				alert("É obrigatório informar um telefone de contato.");
				return false;
			}

			if (self.UIcomponents.emails.childList.length == 0)
			{
				alert("É obrigatório informar um e-mail de contato.");
				return false;
			}

			return true;
		};

		self.UIcallbacks.bkpXMLData = function ()
		{
			//verifica se deve usar o XML da subinterface ou da interface
			//quando um objeto é carregado pela interface pai, é colocado no app_xml
			//neste caso, usamos o CPF como chave para verificar se deve ou não
			//usar o da aplicação.
			if (self.xml_data)
			{
				var selfcpf = self.xml_data.getElementsByTagName("cpf")[0].text;
				var appcpf = app.xml_data.getElementsByTagName("cpf")[0].text;

				if(selfcpf != appcpf)
					return;
			}

			for (var i in self.UIcomponents)
			{
				if (self.UIcomponents[i].input)
				{
					if (
						self.UIcomponents[i].type != "JsBoxButton" &&
						self.UIcomponents[i].type != "JsPushButton" &&
						self.UIcomponents[i].type != "JsIcon" &&
						self.UIcomponents[i].type != "JsImageButton" &&
						self.UIcomponents[i].type != "JsMiniToolBarButton" &&
						self.UIcomponents[i].type != "JsToolBarButton" &&
						self.UIcomponents[i].type != "JsColoPicker" &&
						self.UIcomponents[i].type != "JsTableBuilder" &&
						self.UIcomponents[i].type != "JsURLBuilder"
						)
					{
						var xml = app.xml_data.getElementsByTagName(i);
						if (xml[0])
							xml[0].text = self.UIcomponents[i].getValue();
					}
				}
				else
				{
					if (self.UIcomponents[i].type == "JsListView")
					{
						var values = self.UIcomponents[i].childList;

						var newTreeNode = app.xml_data.getElementsByTagName(i)[0];

						var temp_removed = null;
						var counter = newTreeNode.childNodes.length;
						for (var j=0; j < counter; j++) 
						{
							var node = newTreeNode.removeChild(newTreeNode.childNodes[0]);
							if (node.nodeName == "removed")
								temp_removed = node;
						}

						for (var j=0; j<values.length;j++) 
						{
							var newNode = app.xml_data.createElement(self.UIcomponents[i].xmlNodeName);

							for (var x=0; x<values[j].cells.length;x++) 
							{
								var newSubNode = app.xml_data.createElement(self.UIcomponents[i].relations[x][2]);

								if (values[j].cells[x].js_realvalue)
									newSubNode.text = values[j].cells[x].js_realvalue;
								else
									newSubNode.text = values[j].cells[x].getValue();

								newNode.appendChild(newSubNode);
							}

							if (values[j].pid)
							{
								newNode.setAttribute("id", values[j].pid);
								var newSubNode = app.xml_data.createElement("id");
								newSubNode.text = values[j].pid;
								newNode.appendChild(newSubNode);
							}

							newTreeNode.appendChild(newNode);
						}

						//itens removidos do listview
						if ((self.UIcomponents[i].removedItens && self.UIcomponents[i].removedItens.length) || temp_removed)
						{
							var newNode = app.xml_data.createElement("removed");

							for (var j=0; j<self.UIcomponents[i].removedItens.length;j++) 
							{
								var newSubNode = app.xml_data.createElement("item");
								newSubNode.text = self.UIcomponents[i].removedItens[j];
								newNode.appendChild(newSubNode);
							}

							self.UIcomponents[i].removedItens = new Array();

							if(temp_removed)
							{
								counter = temp_removed.childNodes.length;
								for (var j=0; j< counter;j++) 
								{
									newNode.appendChild(temp_removed.childNodes[0]);
								}
							}

							newTreeNode.appendChild(newNode);
						}
					}
				}
			}
		};

		self.UIcallbacks.getXMLData = function ()
		{
			self.UIcallbacks.bkpXMLData();
			return app.xml_data;
		};

		self.UIcallbacks.save = function ()
		{
			jsDebugDisplay.setValue(self.UIcallbacks.getXMLData());
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
		self.UIcallbacksHandlers[0][0] = "change";	//event
		self.UIcallbacksHandlers[0][1] = self.UIcomponents.id_uf; //handler
		self.UIcallbacksHandlers[0][2] = self.UIcallbacks.defineComboUfPaisOrigem; //callback

		self.UIcallbacksHandlers[1] = new Array();
		self.UIcallbacksHandlers[1][0] = "change";	//event
		self.UIcallbacksHandlers[1][1] = self.UIcomponents.id_pais; //handler
		self.UIcallbacksHandlers[1][2] = self.UIcallbacks.defineComboUfPaisOrigem; //callback

		self.UIcallbacksHandlers[2] = new Array();
		self.UIcallbacksHandlers[2][0] = "change";	//event
		self.UIcallbacksHandlers[2][1] = self.UIcomponents.endereco_uf; //handler
		self.UIcallbacksHandlers[2][2] = self.UIcallbacks.defineComboUfPaisEndereco; //callback

		self.UIcallbacksHandlers[3] = new Array();
		self.UIcallbacksHandlers[3][0] = "change";	//event
		self.UIcallbacksHandlers[3][1] = self.UIcomponents.endereco_pais; //handler
		self.UIcallbacksHandlers[3][2] = self.UIcallbacks.defineComboUfPaisEndereco; //callback

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

};
