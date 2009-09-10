<?php

	/**
	 * Arquivo de inclusão de libs. Adeque-o às suas necessidades
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Includes
	 */

	/**
	 * Carrega a JsWebGets, limpando os arquivos
	 * @param string $filename Nome do arquivo a ser carregado
	 * @return void
	 */
	function loadJsFile($filename)
	{
		$file = file_get_contents('libs/JsWebGets/'.$filename);
		//fix elses!
		$file = str_replace("else\r","else ",str_replace("else\n","else ",$file));
		//remove comments
		while (strstr($file,"//"))
		{
			$begin_pos = strpos($file,"//");
			$end_pos = strpos($file,"\n",$begin_pos);
			$size = $end_pos - $begin_pos;
			$file = substr_replace($file, "", $begin_pos, $size);
		}
		while (strstr($file,'/*'))
		{
			$begin_pos = strpos($file,'/*');
			$end_pos = strpos($file,'*'.'/',$begin_pos);
			$size = $end_pos - $begin_pos;
			$file = substr_replace($file, "", $begin_pos, $size + 2);
		}
		echo "/*".$filename.'*'.'/';
		echo str_replace("\r","",str_replace("\n","",str_replace("\t","",$file)))."\n";
	}

	//file with all warnings and messages used
	loadJsFile("JsTranslation.js");
	//file with all support functions
	loadJsFile("JsGeneral.js");
	//base class for all JsObjects
	loadJsFile("JsObject.js");
	//application - base for all JsObjects Applications
	loadJsFile("JsApplication.js");
	//Data transfer objetcs
	//parser for XML
	loadJsFile("Data/JsXML.js");
	//implements XMLHttpRequest for multibrowser, used for AJAX
	loadJsFile("Data/JsHTTPRequest.js");
	//Connects to a WebService and make calls for Javascript
	loadJsFile("Data/JsWebServiceConnector.js");
	//hidden form method. MUST use if upload file will be used
	loadJsFile("Data/JsDataConnector.js");

	//base class for all Widgets
	loadJsFile("Widget/JsWidget.js");

	//form input classes
	loadJsFile("Widget/Form/JsInput.js");
	//buttons
	loadJsFile("Widget/Form/Button/JsCheckBox.js");
	loadJsFile("Widget/Form/Button/JsImageButton.js");
	loadJsFile("Widget/Form/Button/JsPushButton.js");
	loadJsFile("Widget/Form/Button/JsRadioButton.js");
	loadJsFile("Widget/Form/Button/JsRadioButtonItem.js");
	loadJsFile("Widget/Form/Button/JsToolBarButton.js");
	loadJsFile("Widget/Form/Button/JsMiniToolBarButton.js");
	loadJsFile("Widget/Form/Button/JsBoxButton.js");
	loadJsFile("Widget/Form/Button/JsIcon.js");
	//fields
	loadJsFile("Widget/Form/Field/JsComboBox.js");
	loadJsFile("Widget/Form/Field/JsListBox.js");
	//text inputs
	loadJsFile("Widget/Form/Field/JsLineEdit.js");
	loadJsFile("Widget/Form/Field/JsLineEditAdv.js");
	loadJsFile("Widget/Form/Field/JsDateEdit.js");
	loadJsFile("Widget/Form/Field/JsTimeEdit.js");
	loadJsFile("Widget/Form/Field/JsMoneyEdit.js");
	loadJsFile("Widget/Form/Field/JsCPFEdit.js");
	loadJsFile("Widget/Form/Field/JsCNPJEdit.js");
	loadJsFile("Widget/Form/Field/JsIPEdit.js");
	loadJsFile("Widget/Form/Field/JsUpLoad.js");
	loadJsFile("Widget/Form/Field/JsTextEdit.js");
	loadJsFile("Widget/Form/Field/JsColorPicker.js");
	loadJsFile("Widget/Form/Field/JsTableBuilder.js");
	loadJsFile("Widget/Form/Field/JsURLBuilder.js");
	loadJsFile("Widget/Form/Field/JsRichTextField.js");
	loadJsFile("Widget/Form/Field/JsCodeEdit.js");
	loadJsFile("Widget/Form/Field/JsRichTextEdit.js");
	loadJsFile("Widget/Form/Field/JsSpinBox.js");

	//visual widgets
	//Containers
	loadJsFile("Widget/Visual/Container/JsBox.js");
	loadJsFile("Widget/Visual/Container/JsDialog.js");
	loadJsFile("Widget/Visual/Container/JsDock.js");
	loadJsFile("Widget/Visual/Container/JsFieldSet.js");
	loadJsFile("Widget/Visual/Container/JsTab.js");
	loadJsFile("Widget/Visual/Container/JsToolBox.js");
	loadJsFile("Widget/Visual/Container/JsWebWrapper.js");
	loadJsFile("Widget/Visual/Container/JsWidgetGrid.js");
	loadJsFile("Widget/Visual/Container/JsWidgetStack.js");
	loadJsFile("Widget/Visual/Container/JsWindow.js");
	//Display
	loadJsFile("Widget/Visual/Display/JsCalendar.js");
	loadJsFile("Widget/Visual/Display/JsImage.js");
	loadJsFile("Widget/Visual/Display/JsLabel.js");
	loadJsFile("Widget/Visual/Display/JsLine.js");
	loadJsFile("Widget/Visual/Display/JsMenu.js");
	loadJsFile("Widget/Visual/Display/JsMenuBar.js");
	loadJsFile("Widget/Visual/Display/JsMenuItem.js");
	loadJsFile("Widget/Visual/Display/JsToolBar.js");
	loadJsFile("Widget/Visual/Display/JsMiniToolBar.js");
	loadJsFile("Widget/Visual/Display/JsToolTip.js");
	//View
	loadJsFile("Widget/Visual/View/JsListView.js");
	loadJsFile("Widget/Visual/View/JsListViewItem.js");
	loadJsFile("Widget/Visual/View/JsDataView.js");

?>

document.write("<script language='JavaScript' src='includes/js/syslistviewEditFunctions.js'></script>");
document.write("<script language='JavaScript' src='includes/js/sysgeneralfunctions.js'></script>");
document.write("<script language='JavaScript' src='includes/js/libs/JsMainWindow/JsMainWindow.js'></script>");
document.write("<script language='JavaScript' src='includes/js/libs/JsInterface/JsInterface.js'></script>");