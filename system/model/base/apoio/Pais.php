<?php

	class Pais extends Persist
	{
		protected $nome;

		public function __construct()
		{
			$this->nome		= new PVarchar("",28);

			parent::__construct();
		}
	}

?>