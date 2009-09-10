<?php

	/**
	 * Arquivo do webservice do sistema. Adeque-o às suas necessidades
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 */

	//Inclui tudo necessário para funcionamento do sistema.
 	require('includes/php/sysincludes.php');

	//Início da sessão
	session_start();

	//Criação do WebService COSA
	ini_set('soap.wsdl_cache_enabled','0');
	$server = new SoapServer('includes/php/libs/COSA/cosa.wsdl');
	$server->setClass('SYSCOSA');
	$server->setPersistence(SOAP_PERSISTENCE_SESSION);
	$server->handle();
	
?>