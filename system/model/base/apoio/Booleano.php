<?php

	class Booleano
	{
		public function search($param1 = null, $param2 = null, $param3 = null)
		{
			$return  = "<result>\n";
			$return .= "<item><id>0</id><nome>Não</nome></item>\n";
			$return .= "<item><id>1</id><nome>Sim</nome></item>\n";
			$return .= "</result>\n";

			return $return;
		}
	}

?>