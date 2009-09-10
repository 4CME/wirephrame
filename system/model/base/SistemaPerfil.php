<?php

	class SistemaPerfil extends Persist
	{
		protected $id_sistema;
		protected $id_perfil;

		public function __construct()
		{
			$this->id_sistema		= new PInteger();
			$this->id_perfil		= new PInteger();

			$this->parent_classes	= array("Sistema", "Perfil");

			parent::__construct();
		}
	}

?>