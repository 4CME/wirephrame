<script language='JavaScript' src='includes/js/sysincludes.js.php'></script>
<script>

	/**
	 * Variáveis de ambiente necessárias
	 *
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 */
	
	var lang = 'pt';
	var jsmainwindow_images = 'visual/images/'
	
	/**
	 * Variáveis para ativar o ambiente de desenvolvimento
	 *
	 */
	<?php
	if ($GLOBALS['W_AMBIENT'] != 'P')
	{?>
	var jsAmbient = 'devel';
	var jsDebug = true;
	<?php
	}
	?>

	/**
	 * Variável que contém a interface que deve ser carregada após efetuar login
	 */
	var interface_principal_sistema = 'InterfacePrincipal';

	/**
	 * Construção do ambiente da JsWebGets
	 */
	 
	app = new JsMainWindow();
	app.setTheme('visual/css/JsThemes/default_black');
	app.setTitle('<?php echo $GLOBALS['SYSTEMFULLNAME'].' '.$GLOBALS['SYSTEMVERSION'] ?>');
	app.setAppLabel('<?php echo $GLOBALS['SYSTEM'].' '.$GLOBALS['SYSTEMVERSION'] ?>');
	
	/**
	 * Definição da Logo da aplicação (apresentada no topo direito da tela
	 *
	 * app.setLogo(jsmainwindow_images + 'topo.png');	//App logo
	 * app.setLogoWidth(120);							//App logo width
	 * app.setLogoHeight(50);							//App logo height
	 */

	/**
	 * Comunicação da Interface com o WebService da Aplicação
	 */
	app.ws.bind('webservice.php',initInterface);

</script>