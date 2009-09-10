<?php

	class NivelAcesso extends Persist
	{
		protected $id_usuario;
		protected $id_sistema;
		protected $id_perfil;
		protected $permissoes;
		protected $relatorios;

		public function __construct()
		{
			$this->id_usuario		= new PInteger();
			$this->id_sistema		= new PInteger();
			$this->id_perfil		= new PInteger();
			$this->permissoes		= new PArrayOf("NivelPermissao");
			$this->relatorios		= new PArrayOf("NivelRelatorio");

			$this->parent_classes 	= array("Usuario","Sistema","Perfil");

			parent::__construct();
		}
	}

?>