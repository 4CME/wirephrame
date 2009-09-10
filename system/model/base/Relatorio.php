<?php

	class Relatorio extends Persist
	{
		protected $nome;
		protected $interface;
		protected $controle;
		protected $metodo;
		protected $template;

		public function __construct()
		{
			$this->nome				= new PVarchar();
			$this->interface		= new PVarchar();
			$this->controle			= new PVarchar();
			$this->metodo			= new PVarchar();
			$this->template			= new PVarchar();

			parent::__construct();
		}
	}

?>