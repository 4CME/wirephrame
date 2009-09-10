
	/**
	 * Arquivo de funções de uso geral da framework. Adeque-o às suas necessidades
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Funções de uso geral
	 */

	/**
	 * Evita que a janela seja fechada por acidente
	 * @param event e Evento disparado pelo usuário
	 * @return void
	 */
	window.onbeforeunload = function(e)
	{
		if (!e)
			e = window.event;
		if (document.all)
			e.returnValue = '';
		else
			e.preventDefault();
		
		return;
	};
	
	changeAmbient = function()
	{
		if (jsAmbient == "devel")
		{
			jsAmbient = "production";
			jsDebug = false;
			if (jsDebugWindow)
				jsDebugWindow.hideWindow();
		}
		else
		{
			jsAmbient = "devel";
			jsDebug = true;
			if (jsDebugWindow)
				jsDebugWindow.showWindow();
		}

		alert("jsAmbient is set to " + jsAmbient + "\njsDebug is set to " + jsDebug);
	};

	keyeffects = function(jsEvent)
	{
		if (browserType=="ie")
			jsEvent = window.event;
		
		if (jsEvent.ctrlKey && jsEvent.altKey && jsEvent.keyCode == 68)
			changeAmbient();
	};
	
	document.onkeydown = keyeffects;

	/**
	 * Carrega a primeira interface do sistema (Login)
	 * @return void
	 */
	function initInterface()
	{
		app.loadInterface("InterfaceLogin");
	}

	/**
	 * Bloqueia o uso da tecla enter para evitar submit acidental
	 * @param event e Evento disparado pelo usuário
	 * @return void
	 */
	function bloquearEnter(e)
	{
		if (!e) e = window.event;

		if (e.keyCode==13)
		{
			if (document.all)
				e.returnValue = false;
			else
				e.preventDefault();
		}
	}

	/**
	 * Validação de e-mail
	 * @param string pStr Evento disparado pelo usuário
	 * @return bool
	 */
	function validaEmail(pStr)
	{
		var reEmail1 = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
		var reEmail2 = /^[\w-]+(\.[\w-]+)*@(([\w-]{2,63}\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
		var reEmail3 = /^[\w-]+(\.[\w-]+)*@(([A-Za-z\d][A-Za-z\d-]{0,61}[A-Za-z\d]\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
		var reEmail = reEmail3;

		eval("reEmail = reEmail");
		if (reEmail.test(pStr)) {
			return true;
		} else if (pStr != null && pStr != "") {
			return false;
		}
	}

	/**
	 * Remove espaços em branco antes e depois de uma string
	 * @param string str
	 * @return string
	 */
	function trim(str)
	{
		str = str.replace(/^(\s)*/, '');
		str = str.replace(/(\s)*$/, '');
		return str;
	}
	
	/**
	 * Formata datas YYYY-MM-DD para DD/MM/YYYY
	 * @param date value
	 * @return string
	 */
	function formataDataHora(value)
	{
		js_dia = value.substr(8,2);
		js_mes = value.substr(5,2);
		js_ano = value.substr(0,4);

		js_hor = value.substr(11,8);
		return js_dia + "/" + js_mes + "/" + js_ano + " " + js_hor;
	}
