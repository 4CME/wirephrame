<?php

	class SistemaPermissao extends Persist
	{
		protected $id_sistema;
		protected $id_permissao;

		public function __construct()
		{
			$this->id_sistema		= new PInteger();
			$this->id_permissao	= new PInteger();

			$this->parent_classes	= array("Sistema", "Permissao");

			parent::__construct();
		}
	}

?>