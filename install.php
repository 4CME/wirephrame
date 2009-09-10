<?php

	/**
	 * Script de Instalação
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 */

	//Inclui tudo necessário para funcionamento do sistema.
 	require('includes/php/base/sysincludes.php');

	//Início da sessão
	session_start();

	//Cabeçalhos HTTP para evitar cache
	header('Last-Modified: '.gmdate("D, d M Y H:i:s").' GMT');
	header('Cache-Control: no-cache, must-revalidate');		//HTTP/1.1
	header('Pragma: no-cache');								//HTTP/1.0
	header('Content-type: text/html; charset=UTF-8');

?>
<pre>
Script de Instalação...

Primeiro, solicitar as seguintes informações:

	Autenticação LDAP
	$AUTH_LDAP,
	$AUTH_LDAP_CONN,
	$AUTH_LDAP_DOMAIN,
	
	Configuração de banco de dados
	$DB_TYPE,
	$DB_SERVER,
	$DB_NAME,
	$DB_USER,
	$DB_PASSWD;
	
Depois salvar no seguinte arquivo:

	file('includes/php/base/sysconf.php')
	
E por último, executar o script de criação das tabelas e população do banco

	require('create_db.php');
	
Finalizar removendo o script de criação do banco e o script de instalação

	unlink('create_db.php');
	unlink('install.php');
</pre>