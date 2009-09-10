<?php

	class Permissao extends Persist
	{
		protected $nome;
		protected $interface;
		protected $controle;
		protected $metodo;
	
		public function __construct()
		{
			$this->nome = new PVarchar();
			$this->interface = new PVarchar();
			$this->controle = new PVarchar();
			$this->metodo = new PVarchar();
	
			parent::__construct();
		}
	}

?>