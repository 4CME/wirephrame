<?php

	/**
	 * Arquivo de definição do ambiente do framework
	 *
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Ambiente
	 */

	switch ($GLOBALS['W_AMBIENT'])
	{
		case 'D':
			ob_start();
			POPEnvironment::$debug = true;
			POPEnvironment::$firephp = true;			
			break;
		case 'H':
			break;
		case 'P':
			break;
	}

?>