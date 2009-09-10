<?php

	class PerfilPermissao extends Persist
	{
		protected $id_permissao;
		protected $id_perfil;

		public function __construct()
		{
			$this->id_permissao		= new PInteger();
			$this->id_perfil		= new PInteger();

			$this->parent_classes	= array("Permissao", "Perfil");

			parent::__construct();
		}
	}

?>