<?php

	/**
	 * Arquivo de inclusão de libs. Adeque-o às suas necessidades
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Includes
	 */

	//POP - lib para ORM
	require('libs/POP/POP.php');
	
	//COSA - lib para WebServices
	require('libs/COSA/cosa.php');
	
	//RePHPort - lib para geração de relatórios
	require('libs/RePHPort/RePHPort.php');
	
	//FirePHP - lib para depuração com Ajax/WebServices
	require('libs/FirePHP/fb.php');
	
	//Configurações do Sistema
	require('sysconf.php');
	
	//Funções gerais utilizadas pelo framework
	require('sysgeneralfunctions.php');
	
	//Implementação da COSA
	require('syscosa.php');
	
	//Conexão de Banco de Dados para a POP
	require('sysdb.php');
	
	//Conexão LDAP/AD
	require('sysldap.php');

?>