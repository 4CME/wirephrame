
	/**
	 * Arquivo de funções para trabalho com listviews
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Funções de edição de listviews
	 */

	/**
	 * Lê os dados do listview item selecionado e carrega nos campos correspondentes
	 * @param event e Evento disparado pelo usuário
	 * @return void
	 */
	function listviewLoadData(jsEvent)
	{
		var js_lstitem = jsTarget;
		var js_lsitvalues = js_lstitem.getValue();
		var listview = js_lstitem.listview;

		for (js_i in listview.relations)
		{
			if (listview.relations[js_i][0].type != "JsComboBox" && listview.relations[js_i][0].type != "JsDateEdit" && listview.relations[js_i][0].type != "JsLineEditAdv" && listview.relations[js_i][0].type != "JsCheckBox" && listview.relations[js_i][0].type != "JsRadioButton")
			{
				if (listview.relations[js_i][0][0])
				{
					for (js_j in listview.relations[js_i][0])
						if (listview.relations[js_i][0][js_j].parentNode)
							break;
					if (listview.relations[js_i][0][js_j].type != "JsComboBox" && listview.relations[js_i][0][js_j].type != "JsDateEdit" && listview.relations[js_i][0][js_j].type != "JsLineEditAdv" && listview.relations[js_i][0][js_j].type != "JsCheckBox" && listview.relations[js_i][0][js_j].type != "JsRadioButton")
						listview.relations[js_i][0][js_j].setValue(js_lsitvalues[js_i]);
					else if (listview.relations[js_i][0][js_j].type == "JsLineEditAdv")
						listview.relations[js_i][0][js_j].setValue(js_lstitem.cells[js_i].js_realvalue,js_lsitvalues[js_i]);
					else if (listview.relations[js_i][0][js_j].type == "JsRadioButton")
						listview.relations[js_i][0][js_j].setValue(js_lstitem.cells[js_i].js_realvalue);
					else if (listview.relations[js_i][0][js_j].type == "JsCheckBox")
						if (js_lsitvalues[js_i]!="" && js_lsitvalues[js_i]!="Não" && js_lsitvalues[js_i]!=0)
							listview.relations[js_i][0][js_j].setChecked(true);
						else
							listview.relations[js_i][0][js_j].setChecked(false);
					else
						listview.relations[js_i][0][js_j].setValue(js_lstitem.cells[js_i].js_realvalue);
				}
				else
					listview.relations[js_i][0].setValue(js_lsitvalues[js_i]);
			}
			else if (listview.relations[js_i][0].type == "JsLineEditAdv")
				listview.relations[js_i][0].setValue(js_lstitem.cells[js_i].js_realvalue,js_lsitvalues[js_i]);
			else if (listview.relations[js_i][0].type == "JsRadioButton")
				listview.relations[js_i][0].setValue(js_lstitem.cells[js_i].js_realvalue);
			else if (listview.relations[js_i][0].type == "JsCheckBox")
				if (js_lsitvalues[js_i]!="" && js_lsitvalues[js_i]!="Não" && js_lsitvalues[js_i]!=0)
					listview.relations[js_i][0].setChecked(true);
				else
					listview.relations[js_i][0].setChecked(false);
			else
				listview.relations[js_i][0].setValue(js_lstitem.cells[js_i].js_realvalue);
		}
	}

	/**
	 * Remove os listviewitem selecionados
	 * @param event e Evento disparado pelo usuário
	 * @return void
	 */
	function listviewDelData(jsEvent)
	{
		var listview = jsTarget.listview;

		if (listview.selectedItem && confirm("Tem certeza que deseja remover este item?"))
		{
			if (!listview.removedItens)
				listview.removedItens = new Array();

			if (listview.selectedItem.pid)
				listview.removedItens[listview.removedItens.length] = listview.selectedItem.pid;

			listview.delItem(listview.selectedItem);

			listview.selectedItem = null;

			for (js_x in listview.relations)
			{
				if (listview.relations[js_x][0])
				{
					if (listview.relations[js_x][0][0])
					{
						for (js_j in listview.relations[js_x][0])
							if (listview.relations[js_x][0][js_j].parentNode)
								break;
						if (listview.relations[js_x][0][js_j].type == "JsCheckBox")
							listview.relations[js_x][0][js_j].setChecked(false);
						else if (listview.relations[js_x][0][js_j].type != "JsLineEditAdv")
							listview.relations[js_x][0][js_j].setValue("");
						else if (listview.relations[js_x][0][js_j].type == "JsLineEditAdv")
							listview.relations[js_x][0][js_j].setValue("","");
					}
					else
					{
						if (listview.relations[js_x][0].type == "JsCheckBox")
							listview.relations[js_x][0].setChecked(false);
						else if (listview.relations[js_x][0].type != "JsLineEditAdv")
							listview.relations[js_x][0].setValue("");
						else if (listview.relations[js_x][0].type == "JsLineEditAdv")
							listview.relations[js_x][0].setValue("","");
					}
				}
			}
			temMudanca = true;
			return true;
		}
		else if (!listview.selectedItem)
		{
			alert("Selecione um item para remoção antes.");
			return false;
		}
	}

	/**
	 * Lê os dados dos campos  e carrega no listview
	 * @param event e Evento disparado pelo usuário
	 * @return void
	 */
	function listviewSaveData(jsEvent)
	{
		var listview = jsTarget.listview;
		var validado = true;

		if (listview.validacao)
			validado = listview.validacao();

		if (validado)
		{
			if (listview.selectedItem)
			{
				js_lvit = listview.selectedItem;
				listview.lastInsertedItem = listview.selectedItem;

				for (js_x in listview.relations)
				{
					if (listview.relations[js_x][0][0])
					{
						for (js_j in listview.relations[js_x][0])
							if (listview.relations[js_x][0][js_j].parentNode)
								break;
						if (listview.relations[js_x][1] && listview.relations[js_x][0][js_j].getValue() == "")
						{
							alert("Favor informar o valor do campo " + listview.relations[js_x][0][js_j].id + ".");
							listview.relations[js_x][0][js_j].focus();
							return false;
						}
						if (listview.relations[js_x][0][js_j].type != "JsComboBox" && listview.relations[js_x][0][js_j].type != "JsDateEdit" && listview.relations[js_x][0][js_j].type != "JsLineEditAdv" && listview.relations[js_x][0][js_j].type != "JsCheckBox" && listview.relations[js_x][0][js_j].type != "JsRadioButton")
							js_lvit.cells[js_x].setValue(listview.relations[js_x][0][js_j].getValue());
						else if (listview.relations[js_x][0][js_j].type == "JsComboBox")
						{
							if (listview.relations[js_x][0][js_j].getValue())
								js_lvit.cells[js_x].setValue(listview.relations[js_x][0][js_j].getLabel());
							else
								js_lvit.cells[js_x].setValue("");
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue();
						}
						else if (listview.relations[js_x][0][js_j].type == "JsRadioButton")
						{
							js_lvit.cells[js_x].setValue(listview.relations[js_x][0][js_j].getLabel());
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue();
						}
						else if (listview.relations[js_x][0][js_j].type == "JsDateEdit")
						{
							if (listview.relations[js_x][0][js_j].getValue() == '')
							{
								js_lvit.cells[js_x].setValue('');
								js_lvit.cells[js_x].js_realvalue = "";
							}
							else
							{
								js_lvit.cells[js_x].setValue(formataData(listview.relations[js_x][0][js_j].getValue()));
								js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue();
							}
						}
						else if (listview.relations[js_x][0][js_j].type == "JsLineEditAdv")
						{
							js_lvit.cells[js_x].setValue(listview.relations[js_x][0][js_j].getValue()[1]);
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue()[0];
						}
						else if (listview.relations[js_x][0][js_j].type == "JsCheckBox")
						{
							if (listview.relations[js_x][0][js_j].getValue())
							{
								js_lvit.cells[js_x].setValue("Sim");
								js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue();
							}
							else
							{
								js_lvit.cells[js_x].setValue("Não");
								js_lvit.cells[js_x].js_realvalue = 0;
							}
						}
					}
					else
					{
						if (listview.relations[js_x][1] && listview.relations[js_x][0].getValue() == "")
						{
							alert("Favor informar o valor do campo " + listview.relations[js_x][0].id + ".");
							listview.relations[js_x][0].focus();
							return false;
						}
						if (listview.relations[js_x][0].type != "JsComboBox" && listview.relations[js_x][0].type != "JsDateEdit" && listview.relations[js_x][0].type != "JsLineEditAdv" && listview.relations[js_x][0].type != "JsCheckBox" && listview.relations[js_x][0].type != "JsRadioButton")
							js_lvit.cells[js_x].setValue(listview.relations[js_x][0].getValue());
						else if (listview.relations[js_x][0].type == "JsComboBox")
						{
							if (listview.relations[js_x][0].getValue())
								js_lvit.cells[js_x].setValue(listview.relations[js_x][0].getLabel());
							else
								js_lvit.cells[js_x].setValue("");
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue();
						}
						else if (listview.relations[js_x][0].type == "JsRadioButton")
						{
							js_lvit.cells[js_x].setValue(listview.relations[js_x][0].getLabel());
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue();
						}
						else if (listview.relations[js_x][0].type == "JsDateEdit")
						{
							if (listview.relations[js_x][0].getValue() == '')
							{
								js_lvit.cells[js_x].setValue('');
								js_lvit.cells[js_x].js_realvalue = "";
							}
							else
							{
								js_lvit.cells[js_x].setValue(formataData(listview.relations[js_x][0].getValue()));
								js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue();
							}
						}
						else if (listview.relations[js_x][0].type == "JsLineEditAdv")
						{
							js_lvit.cells[js_x].setValue(listview.relations[js_x][0].getValue()[1]);
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue()[0];
						}
						else if (listview.relations[js_x][0].type == "JsCheckBox")
						{
							if (listview.relations[js_x][0].getValue())
							{
								js_lvit.cells[js_x].setValue("Sim");
								js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue();
							}
							else
							{
								js_lvit.cells[js_x].setValue("Não");
								js_lvit.cells[js_x].js_realvalue = 0;
							}
						}
					}
				}

				for (var i in listview.selectedItem.lvitensdiv.childNodes)
					listview.selectedItem.lvitensdiv.childNodes[i].className = "jslvitemcelldiv";

				listview.selectedItem = null;
			}
			else
			{
				var name = randomizer();
				js_lvit = eval(name + " = new JsListViewItem('" + name + "');");

				listview.addItem(js_lvit);

				for (js_x in listview.relations)
				{
					if (listview.relations[js_x][0][0])
					{
						for (js_j in listview.relations[js_x][0])
							if (listview.relations[js_x][0][js_j].parentNode)
								break;

						if (listview.relations[js_x][1] && listview.relations[js_x][0][js_j].getValue() == "")
						{
							alert("Favor informar o valor do campo "+listview.relations[js_x][0][js_j].id+".");
							listview.relations[js_x][0][js_j].focus();
							listview.delItem(js_lvit);
							return false;
						}
						if (listview.relations[js_x][0][js_j].type != "JsComboBox" && listview.relations[js_x][0][js_j].type != "JsDateEdit" && listview.relations[js_x][0][js_j].type != "JsLineEditAdv" && listview.relations[js_x][0][js_j].type != "JsCheckBox" && listview.relations[js_x][0][js_j].type != "JsRadioButton")
							js_lvit.addItem(listview.relations[js_x][0][js_j].getValue());
						else if (listview.relations[js_x][0][js_j].type == "JsComboBox")
						{
							if (listview.relations[js_x][0][js_j].getValue())
								js_lvit.addItem(listview.relations[js_x][0][js_j].getLabel());
							else
								js_lvit.addItem("");
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue();
						}
						else if (listview.relations[js_x][0][js_j].type == "JsRadioButton")
						{
							js_lvit.addItem(listview.relations[js_x][0][js_j].getLabel());
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue();
						}
						else if (listview.relations[js_x][0][js_j].type == "JsDateEdit")
						{
							if (listview.relations[js_x][0][js_j].getValue() == '')
							{
								js_lvit.addItem('');
								js_lvit.cells[js_x].js_realvalue = '';
							}
							else
							{
								js_lvit.addItem(formataData(listview.relations[js_x][0][js_j].getValue()));
								js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue();
							}
						}
						else if (listview.relations[js_x][0][js_j].type == "JsLineEditAdv")
						{
							js_lvit.addItem(listview.relations[js_x][0][js_j].getValue()[1]);
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue()[0];

							if (!listview.relations[js_x][0][js_j].getValue()[0] && listview.relations[js_x][1])
							{
								alert("Valor inválido para o campo "+listview.relations[js_x][0][js_j].sco_nome+".\nFavor usar itens listados na busca automática.");
								listview.delItem(js_lvit);
								return false;
							}
						}
						else if (listview.relations[js_x][0][js_j].type == "JsCheckBox")
						{
							if (listview.relations[js_x][0][js_j].getValue())
							{
								js_lvit.addItem("Sim");
								js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0][js_j].getValue();
							}
							else
							{
								js_lvit.addItem("Não");
								js_lvit.cells[js_x].js_realvalue = 0;
							}
						}
					}
					else
					{
						if (listview.relations[js_x][1] && listview.relations[js_x][0].getValue() == "")
						{
							alert("Favor informar o valor do campo "+listview.relations[js_x][0].id+".");
							listview.relations[js_x][0].focus();
							listview.delItem(js_lvit);
							return false;
						}
						if (listview.relations[js_x][0].type != "JsComboBox" && listview.relations[js_x][0].type != "JsDateEdit" && listview.relations[js_x][0].type != "JsLineEditAdv" && listview.relations[js_x][0].type != "JsCheckBox" && listview.relations[js_x][0].type != "JsRadioButton")
							js_lvit.addItem(listview.relations[js_x][0].getValue());
						else if (listview.relations[js_x][0].type == "JsComboBox")
						{
							if (listview.relations[js_x][0].getValue())
								js_lvit.addItem(listview.relations[js_x][0].getLabel());
							else
								js_lvit.addItem("");
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue();
						}
						else if (listview.relations[js_x][0].type == "JsRadioButton")
						{
							js_lvit.addItem(listview.relations[js_x][0].getLabel());
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue();
						}
						else if (listview.relations[js_x][0].type == "JsDateEdit")
						{
							if (listview.relations[js_x][0].getValue() == '')
							{
								js_lvit.addItem('');
								js_lvit.cells[js_x].js_realvalue = '';
							}
							else
							{
								js_lvit.addItem(formataData(listview.relations[js_x][0].getValue()));
								js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue();
							}
						}
						else if (listview.relations[js_x][0].type == "JsLineEditAdv")
						{
							js_lvit.addItem(listview.relations[js_x][0].getValue()[1]);
							js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue()[0];

							if (!listview.relations[js_x][0].getValue()[0] && listview.relations[js_x][1])
							{
								alert("Valor inválido para o campo "+listview.relations[js_x][0].sco_nome+".\nFavor usar itens listados na busca automática.");
								listview.delItem(js_lvit);
								return false;
							}
						}
						else if (listview.relations[js_x][0].type == "JsCheckBox")
						{
							if (listview.relations[js_x][0].getValue())
							{
								js_lvit.addItem("Sim");
								js_lvit.cells[js_x].js_realvalue = listview.relations[js_x][0].getValue();
							}
							else
							{
								js_lvit.addItem("Não");
								js_lvit.cells[js_x].js_realvalue = 0;
							}
						}
					}
				}

				js_lvit.setEvent("click",listview.onEdit);
			}

			for (js_x in listview.relations)
			{
				if (listview.relations[js_x][0][0])
				{
					for (js_j in listview.relations[js_x][0])
					{
						if (listview.relations[js_x][0][js_j].type != "JsLineEditAdv" && listview.relations[js_x][0][js_j].type != "JsCheckBox")
							listview.relations[js_x][0][js_j].setValue("");
						else if (listview.relations[js_x][0][js_j].type == "JsLineEditAdv")
							listview.relations[js_x][0][js_j].setValue("","");
						else if (listview.relations[js_x][0][js_j].type == "JsCheckBox")
							listview.relations[js_x][0][js_j].setChecked(false);
					}
				}
				else
				{
					if (listview.relations[js_x][0].type != "JsLineEditAdv" && listview.relations[js_x][0].type != "JsCheckBox")
						listview.relations[js_x][0].setValue("");
					else if (listview.relations[js_x][0].type == "JsLineEditAdv")
						listview.relations[js_x][0].setValue("","");
					else if (listview.relations[js_x][0].type == "JsCheckBox")
						listview.relations[js_x][0].setChecked(false);
				}
			}

			temMudanca = true;
		}
	}