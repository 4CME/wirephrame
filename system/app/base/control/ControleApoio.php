<?php

	class ControleApoio
	{
		public function carregarApoio($params)
		{
			$return = "";

			if (is_array($params->parametros->item))
			{
				foreach ($params->parametros->item as $value)
				{
					$obj = new $value();
					$return .= "<".$value.">".$obj->search(null, null, "XML")."</".$value.">";
				}
			}
			else
			{
				$value = $params->parametros->item;
				$obj = new $value();
				$return .= "<".$value.">".$obj->search(null, null, "XML")."</".$value.">";
			}

			return $return;
		}

		public function identificarItens($params)
		{
			$return = "";

			if (is_array($params->parametros->item))
			{
				foreach ($params->parametros->item as $value)
				{
					$obj = new $value();
					if (is_array($params->parametros->item->valor))
					{
						$valores = array();

						foreach ($params->parametros->item->valor as $pvalue)
						{
							$valores[] = " = ".$pvalue;
						}
					}
					else
						$valores = " = ".$params->parametros->item->valor;

					$pesquisa = array("id" => $valores);

					$return .= "<".$value.">".$obj->search(null, $pesquisa, "XML")."</".$value.">";
				}
			}
			else
			{
				$value = $params->parametros->item->tipo;
				$obj = new $value();
				if (is_array($params->parametros->item->valor))
				{
					$valores = array();

					foreach ($params->parametros->item->valor as $pvalue)
					{
						$valores[] = " = ".$pvalue;
					}
				}
				else
					$valores = " = ".$params->parametros->item->valor;

				$pesquisa = array("id" => $valores);

				$return .= "<".$value.">".$obj->search(null, $pesquisa, "XML")."</".$value.">";
			}

			return $return;
		}
	}

?>