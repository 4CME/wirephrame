<?php

	/**
	 * Arquivo de configurações do sistema. Adeque-o às suas necessidades
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Configuracao
	 */

	global
		$W_AMBIENT,
		$SYSTEM,
		$SYSTEMFULLNAME,
		$SYSTEMVERSION,
		$INCLUDE_PATH,
		$AUTH_LDAP,
		$AUTH_LDAP_CONN,
		$AUTH_LDAP_DOMAIN,
		$DB_TYPE,
		$DB_SERVER,
		$DB_NAME,
		$DB_USER,
		$DB_PASSWD;
		
	/**
	 * Ambiente de Execução
	 * D = Desenvolvimento
	 * H = Homologação
	 * P = Produção
	 * @global string $GLOBALS['W_AMBIENT']
	 */
	$GLOBALS['W_AMBIENT'] = 'D';
		
	/**
	 * Nome do sistema (sigla)
	 * Utilizado para manter a sessão (não repita a sigla
	 * para sistemas diferentes no mesmo servidor)
	 * @global string $GLOBALS['SYSTEM']
	 */
	$GLOBALS['SYSTEM'] = 'WirePhrame';
	
	/**
	 * Nome do completo do sistema
	 * @global string $GLOBALS['SYSTEMFULLNAME']
	 */
	$GLOBALS['SYSTEMFULLNAME'] = 'WirePhrame';
	
	/**
	 * Versão do sistema
	 * @global string $GLOBALS['SYSTEMVERSION']
	 */
	$GLOBALS['SYSTEMVERSION'] = '1.0';
	
	/**
	 * Caminho dos Includes utilizados pelo Framework
	 * @global string $GLOBALS['INCLUDE_PATH']
	 */
	$GLOBALS['INCLUDE_PATH'] = array();
	
	/**
	 * Caminho dos Includes de Modelo utilizados pelo Framework
	 * @global string $GLOBALS['INCLUDE_PATH']['model']
	 */
	$GLOBALS['INCLUDE_PATH']['model'] = 'system/model/';
	
	/**
	 * Caminho dos Includes de Visualização utilizados pelo Framework
	 * @global string $GLOBALS['INCLUDE_PATH']['view']
	 */
	$GLOBALS['INCLUDE_PATH']['view'] = 'system/app/';
	
	/**
	 * Caminho dos Includes de Controle utilizados pelo Framework
	 * @global string $GLOBALS['INCLUDE_PATH']['control']
	 */
	$GLOBALS['INCLUDE_PATH']['control'] = 'system/app/';
	
	/**
	 * Caminho dos Includes de Relatórios utilizados pelo Framework
	 * @global string $GLOBALS['INCLUDE_PATH']['report']
	 */
	$GLOBALS['INCLUDE_PATH']['report'] = 'system/report/';
	
	/**
	 * Caminho de saída dos Relatórios gerados pelo Framework
	 * Deve ter permissão de escrita
	 * @global string $GLOBALS['INCLUDE_PATH']['reportoutput']
	 */
	$GLOBALS['INCLUDE_PATH']['reportoutput'] = 'system/report/output/';
	
	/**
	 * Autenticação LDAP (desabilitada por padrão)
	 * @global string $GLOBALS['AUTH_LDAP']
	 */
	$GLOBALS['AUTH_LDAP'] = false;
	
	/**
	 * Configuração do Banco de Dados: Driver
	 * @global string $GLOBALS['DB_DRIVER']
	 */
	$GLOBALS['DB_DRIVER'] = 'pgsql';
	
	/**
	 * Configuração do Banco de Dados: Servidor
	 * @global string $GLOBALS['DB_SERVER']
	 */
	$GLOBALS['DB_SERVER']      = '127.0.0.1';
	
	/**
	 * Configuração do Banco de Dados: Nome do Banco
	 * @global string $GLOBALS['DB_NAME']
	 */
	$GLOBALS['DB_NAME']        = 'wirephrame';
	
	/**
	 * Configuração do Banco de Dados: Usuário para conexão
	 * @global string $GLOBALS['DB_USER']
	 */
	$GLOBALS['DB_USER']		= 'postgres';
	
	/**
	 * Configuração do Banco de Dados: Senha de Conexão
	 * @global string $GLOBALS['DB_PASSWD']
	 */
	$GLOBALS['DB_PASSWD']      = 'postgres';

?>