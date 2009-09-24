<?php

	/**
	 * Máquina de depuração da WirePhrame
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Depuração
	 */
	
	/**
	 * Esta classe implementa uma máquina para utilização da FirePHP
	 * dentro da estrutura da WirePhrame
	 * @package WirePhrame
	 * @subpackage Depuração
	 */
	abstract class WPDebug
	{
		/**
		 * Method used to send log messages
		 * @param $msg
		 * @return void
		 */
		public static function log($msg)
		{
			if (function_exists('fb') && $GLOBALS['W_AMBIENT'] == 'D')
				FB::log('WirePhrame message: '.$msg);
		}
		
		/**
		 * Method used to send info messages
		 * @param $msg
		 * @return void
		 */
		public static function info($msg)
		{
			if (function_exists('fb') && $GLOBALS['W_AMBIENT'] == 'D')
				FB::info('WirePhrame message: '.$msg);
		}
		
		/**
		 * Method used to send warnings messages
		 * @param $msg
		 * @return void
		 */
		public static function warn($msg)
		{
			if (function_exists('fb') && $GLOBALS['W_AMBIENT'] == 'D')
				FB::warn('WirePhrame message: '.$msg);
		}
		
		/**
		 * Method used to send error messages
		 * @param $msg
		 * @return void
		 */
		public static function error($msg)
		{
			if (function_exists('fb') && $GLOBALS['W_AMBIENT'] == 'D')
				FB::error('WirePhrame message: '.$msg);
		}
		
		/**
		 * Method used to throw exceptions
		 * @param $msg
		 * @return void
		 */
		public static function exception($msg)
		{
			if (function_exists('fb') && $GLOBALS['W_AMBIENT'] == 'D')
				FB::error($msg);
			throw new Exception($msg);			
		}
	}
?>