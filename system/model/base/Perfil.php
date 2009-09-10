<?php

	class Perfil extends Persist
	{
		protected $nome;
		protected $descricao;

		public function __construct()
		{
			$this->nome			= new PVarchar();
			$this->descricao	= new PVarchar();

			parent::__construct();
		}
	}

?>