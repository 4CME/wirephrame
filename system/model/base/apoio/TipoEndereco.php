<?php

	class TipoEndereco extends Persist
	{
		protected $nome;

		public function __construct()
		{
			$this->nome		= new PVarchar();

			parent::__construct();
		}
	}

?>