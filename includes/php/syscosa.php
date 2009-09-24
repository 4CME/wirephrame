<?php

	/**
	 * Implementação da COSA para o WirePhrame
	 * Responsável por lidar com todas as requisições do WebService
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage WebService
	 */
	
	/**
	 * Esta classe implementa a interface da COSA para utilização
	 * de WebServices dentro da estrutura do WirePhrame
	 * @package WirePhrame
	 * @subpackage WebService
	 */
	class SYSCOSA implements COSA
	{
		/**
		 * Construtor, define em Session a área para o sistema como um array,
		 * assim, no logout, ele apenas zera o array, sem destruir a session
		 * o que poderia causar a remoção de valores que não são deste sistema.
		 */
		public function __construct()
		{
			if (!isset($_SESSION[$GLOBALS['SYSTEM']]))
				$_SESSION[$GLOBALS['SYSTEM']] = array();
		}

		/**
		 * Método para carregamento de interfaces.
		 * @param string $cosa_interface Nome da Interface a ser carregada
		 * @return string Código da Interface carregada
		 */
		public function loadInterface($cosa_interface)
		{
			try
			{
				if (!isset($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]))
					$service = new ControlLogin();
				else
					$service = unserialize($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]);
					
				WPDebug::info('Carregado ControlLogin.');

				if ($service->checkPermission($GLOBALS['SYSTEM'], $cosa_interface))
				{
					WPDebug::info('Credenciais de acesso a '.$cosa_interface.' ok.');
					
					if (!isset($_SESSION["ControlInterface"]))
						$service = new ControlInterface();
					else
						$service = unserialize($_SESSION["ControlInterface"]);

					$return = $service->loadInterface($cosa_interface);

					$_SESSION["ControlInterface"] = serialize($service);

					return $return;
				}
				else
					WPDebug::exception("ERRO DE PERMISSÃO: Você não pode acessar o recurso solicitado.");
			}
			catch (Exception $e)
			{
				throw new SoapFault("ControlInterface Error",$e->getMessage());
			}
		}

		/**
		 * Efetua o login do usuário do sistema
		 * @param string $cosa_user Login do usuário
		 * @param string $cosa_pass Senha do usuário
		 * @return string XML de resposta
		 */
		public function doLogin($cosa_user, $cosa_pass)
		{
			try
			{
				if (!isset($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]))
					$service = new ControlLogin();
				else
					$service = unserialize($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]);
					
				WPDebug::info('Carregado ControlLogin.');

				$return = $service->doLogin($cosa_user, $cosa_pass);
				
				WPDebug::info('Login efetuado com sucesso.');

				$_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"] = serialize($service);

				return $return;
			}
			catch (Exception $e)
			{
				throw new SoapFault("ControlLogin Error",$e->getMessage());
			}
		}

		/**
		 * Efetua o logout sem a destruição da session
		 * @param object $cosa_params Objeto stdClass com todos os itens enviados ao método
		 * @return string XML de resposta
		 */
		public function doLogout($cosa_params = null)
		{
			try
			{
				if (!isset($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]))
					$service = new ControlLogin();
				else
					$service = unserialize($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]);
					
				WPDebug::info('Carregado ControlLogin.');

				$return = $service->doLogout();
				
				WPDebug::info('Logout efetuado com sucesso.');

				$_SESSION[$GLOBALS['SYSTEM']] = array();

				return $return;
			}
			catch (Exception $e)
			{
				throw new SoapFault("ControlLogin Error",$e->getMessage());
			}
		}

		/**
		 * Método para obter dados do sistema para a interface.
		 * @param string $cosa_service Nome do Controle que deve lidar com a requisição
		 * @param object $cosa_params Objeto stdClass com todos os itens enviados ao método
		 * @return string XML de resposta do método solicitado
		 */
		public function getData($cosa_service, $cosa_method, $cosa_params)
		{
			try
			{
				if (!isset($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]))
					$service = new ControlLogin();
				else
					$service = unserialize($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]);
					
				WPDebug::info('Carregado ControlLogin.');

				if ($service->checkPermission($GLOBALS['SYSTEM'], null, $cosa_service, $cosa_params->metodo))
				{
					WPDebug::info('Credenciais de acesso a '.$cosa_service.'->'.$cosa_method.' ok.');
					
					if (!isset($_SESSION[$GLOBALS['SYSTEM']][$cosa_service]))
						$service = new $cosa_service();
					else
						$service = unserialize($_SESSION[$GLOBALS['SYSTEM']][$cosa_service]);
						
					WPDebug::info('Carregado '.$cosa_service);

					$return = $service->$cosa_method($cosa_params);
					
					WPDebug::info('Executado método '.$cosa_service.'->'.$cosa_method);

					$_SESSION[$GLOBALS['SYSTEM']][$cosa_service] = serialize($service);

					return "<response>\n".$return."\n</response>\n";
				}
				else
					WPDebug::exception("ERRO DE PERMISSÃO: Você não pode acessar o recurso solicitado.");
			}
			catch (Exception $e)
			{
				throw new SoapFault($cosa_service." Error in method ".$cosa_method, $e->getMessage(), $e->getFile(), "On line ".$e->getLine());
			}
		}

		/**
		 * Método para submeter dados da a interface para o sistema.
		 * @param string $cosa_service Nome do Controle que deve lidar com a requisição
		 * @param object $cosa_params Objeto stdClass com todos os itens enviados ao método
		 * @return string XML de resposta do método solicitado
		 */
		public function postData($cosa_service, $cosa_method, $cosa_params)
		{
			try
			{
				if (!isset($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]))
					$service = new ControlLogin();
				else
					$service = unserialize($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]);
					
				WPDebug::info('Carregado ControlLogin.');

				if ($service->checkPermission($GLOBALS['SYSTEM'], null, $cosa_service, $cosa_params->metodo))
				{
					WPDebug::info('Credenciais de acesso a '.$cosa_service.'->'.$cosa_method.' ok.');
					
					if (!isset($_SESSION[$GLOBALS['SYSTEM']][$cosa_service]))
						$service = new $cosa_service();
					else
						$service = unserialize($_SESSION[$GLOBALS['SYSTEM']][$cosa_service]);
						
					WPDebug::info('Carregado '.$cosa_service);

					$return = $service->$cosa_method($cosa_params);
					
					WPDebug::info('Executado método '.$cosa_service.'->'.$cosa_method);

					$_SESSION[$GLOBALS['SYSTEM']][$cosa_service] = serialize($service);

					return "<response>\n".$return."\n</response>\n";
				}
				else
					WPDebug::exception("ERRO DE PERMISSÃO: Você não pode acessar o recurso solicitado.");
			}
			catch (Exception $e)
			{
				throw new SoapFault($cosa_service." Error in method ".$cosa_method, $e->getMessage(), $e->getFile(), "On line ".$e->getLine());
			}
		}

		/**
		 * Método para geração de relatórios
		 * @param object $cosa_params Objeto stdClass com todos os itens enviados ao método
		 * @return string XML de resposta do método solicitado
		 */
		public function loadReport($cosa_params)
		{
			try
			{
				if (!isset($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]))
					$service = new ControlLogin();
				else
					$service = unserialize($_SESSION[$GLOBALS['SYSTEM']]["ControlLogin"]);
					
				WPDebug::info('Carregado ControlLogin.');

				if ($service->checkPermission($GLOBALS['SYSTEM'], null, null, null, $cosa_params->id_prelatorio))
				{
					WPDebug::info('Credenciais de acesso ao relatório ok.');
					
					if (!isset($_SESSION[$GLOBALS['SYSTEM']]["ControlReport"]))
						$service = new ControlReport();
					else
						$service = unserialize($_SESSION[$GLOBALS['SYSTEM']]["ControlReport"]);

					$return = $service->loadReport($cosa_params);

					$_SESSION[$GLOBALS['SYSTEM']]["ControlReport"] = serialize($service);

					return $return;
				}
				else
					WPDebug::exception("ERRO DE PERMISSÃO: Você não pode acessar o recurso solicitado.");
			}
			catch (Exception $e)
			{
				throw new SoapFault("ControlReport Error in method loadReport", $e->getMessage(), $e->getFile(), " on line ".$e->getLine());
			}
		}
	}
?>