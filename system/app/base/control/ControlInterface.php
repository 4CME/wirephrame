<?php

	class ControlInterface
	{
		public function loadInterface($interface)
		{
			$interface = str_replace("..","",$interface);
			
			$code = file_recursive_get_contents($GLOBALS['INCLUDE_PATH']['view'],$interface);
			
			if ($code)
				return $code;
			
			throw new Exception("Interface not found: ".$interface."");
		}
	}

?>