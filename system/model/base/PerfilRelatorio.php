<?php

	class PerfilRelatorio extends Persist
	{
		protected $id_perfil;
		protected $id_relatorio;

		public function __construct()
		{
			$this->id_perfil		= new PInteger();
			$this->id_relatorio	= new PInteger();

			$this->parent_classes	= array("Perfil","Relatorio");

			parent::__construct();
		}
	}

?>