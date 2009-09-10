<?php

	/**
	 * Arquivo de entrada do sistema. Adeque-o às suas necessidades
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 */

	//Inclui tudo necessário para funcionamento do sistema.
 	require('includes/php/sysincludes.php');

	//Início da sessão
	session_start();

	//Cabeçalhos HTTP para evitar cache
	header('Last-Modified: '.gmdate("D, d M Y H:i:s").' GMT');
	header('Cache-Control: no-cache, must-revalidate');		//HTTP/1.1
	header('Pragma: no-cache');								//HTTP/1.0
	header('Content-type: text/html; charset=UTF-8');
	
	//Verifica se existe script de instalação. Se existir, redireciona para ele
	//if (file_exists('install.php') && $GLOBALS['W_AMBIENT'] == 'P')
	//	header('Location: install.php');

	//Carregamento da base da interface.
	require_recursive($GLOBALS['INCLUDE_PATH']['view'],'InterfaceBase');

?>