<?php

	class UF extends Persist
	{
		protected $sigla;
		protected $nome;
		
		protected $id_pais;

		public function __construct()
		{
			$this->sigla	= new PVarchar("",2);
			$this->nome		= new PVarchar();
			
			$this->id_pais	= new PInteger();
			
			$this->parent_classes	= array("Pais");

			parent::__construct();
		}
	}

?>