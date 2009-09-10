<?php

	class Telefone extends Persist
	{	
		protected $ddi;
		protected $ddd;
		protected $numero;
		
		protected $id_pessoa;
		protected $id_tipotelefone;

		public function __construct()
		{
			$this->ddi				= new PInteger();
			$this->ddd				= new PInteger();
			$this->numero			= new PVarchar("",50);
			
			$this->id_pessoa		= new PInteger();
			$this->id_tipotelefone	= new PInteger();

			$this->parent_classes	= array("Pessoa", "TipoTelefone");

			parent::__construct();
		}
	}

?>