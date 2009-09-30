<?php

	/**
	 * Arquivo de conexão com o banco de dados. Adeque-o às suas necessidades
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Banco de Dados
	 */
		
	/**
	 * Conexão PDO com o Banco de Dados utilizada pela POP
	 */
	
	try
	{
		POPDB::addConnection("pop_db", $GLOBALS['DB_DRIVER'], $GLOBALS['DB_SERVER'], $GLOBALS['DB_NAME'], $GLOBALS['DB_USER'], $GLOBALS['DB_PASSWD']);
	}
	catch (Exception $e)
	{
		echo $e->getMessage();
		die('<center><h3>Por quest&atilde;o de manuten&ccedil;&atilde;o o banco de dados n&atilde;o se encontra dispon&iacute;vel.</h3></center>');
	}
?>