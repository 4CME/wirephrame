<?php

	/**
	 * Arquivo de funções de uso geral da framework. Adeque-o às suas necessidades
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 * @subpackage Funções de uso geral
	 */

	/**
	 * Função mágica do PHP utilizado para carregamento automático de Classes
	 * sem a necessidade de vários includes.
	 * @param string $class Nome da Classe a ser carregada
	 */
	function __autoload($class)
	{
		foreach ($GLOBALS['INCLUDE_PATH'] as $path)
		{
			require_recursive($path, $class);
		}
	}
	
	/**
	 * Função de apoio ao __autoload utilizado para carregamento automático de Classes
	 * sem a necessidade de vários includes.
	 * @param string $path	Caminho a ser pesquisado para carregamento da classe
	 * @param string $class	Nome da Classe a ser carregada
	 */
	function require_recursive($path, $class)
	{
		if ($path[strlen($path) - 1] != '/')
			$path .= '/';

		$contents = scandir($path);

		foreach ($contents as $content)
		{
			if ($content != '.' && $content != '..')
				if (is_dir($path.$content))
					require_recursive($path.$content, $class);
				else if ($content == $class.'.php')
					require_once($path.$content);
		}
	}
	
	/**
	 * Função de apoio ao __autoload utilizado para carregamento automático de Classes
	 * sem a necessidade de vários includes.
	 * @param string $path	Caminho a ser pesquisado para carregamento da classe
	 * @param string $class	Nome da Classe a ser carregada
	 */
	function file_recursive_get_contents($path, $file)
	{
		if ($path[strlen($path) - 1] != '/')
			$path .= '/';

		$contents = scandir($path);

		foreach ($contents as $content)
		{
			if ($content != '.' && $content != '..')
			{
				if (is_dir($path.$content))
				{
					if ($return = file_recursive_get_contents($path.$content, $file))
						return $return;
				}
				else if (
					$content == $file.'.htm'  || 
					$content == $file.'.html' || 
					$content == $file.'.js'   || 
					$content == $file.'.php'  || 
					$content == $file)
					return file_get_contents($path.$content);
			}
		}
	}
	
	/**
	 * Função de apoio ao create_db, utilizada para preencher o banco com dados básicos
	 * @param array $array	Array identificado
	 * @param string $objtype	Nome da Classe a ser carregada
	 */
	function fillSupportData($array, $objtype)
	{
		foreach ($array as $row)
		{
			$obj = new $objtype();
			foreach ($row as $key=>$value)
				$obj->$key = $value;
			$obj->save();
		}
	}

?>