<?php

	class TipoTelefone extends Persist
	{
		protected $nome;

		public function __construct()
		{
			$this->nome		= new PVarchar();

			parent::__construct();
		}
	}

?>