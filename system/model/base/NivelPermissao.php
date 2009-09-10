<?php

	class NivelPermissao extends Persist
	{
		protected $id_nivelacesso;
		protected $id_permissao;

		public function __construct()
		{
			$this->id_nivelacesso	= new PInteger();
			$this->id_permissao	= new PInteger();

			$this->parent_classes	= array("NivelAcesso", "Permissao");

			parent::__construct();
		}
	}

?>