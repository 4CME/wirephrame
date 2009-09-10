<?php

	class Sistema extends Persist
	{
		protected $nome;
		protected $id_statussistema;

		protected $perfis;
		protected $permissoes;
		protected $relatorios;

		public function __construct()
		{
			$this->nome				= new PVarchar("",32);
			$this->id_statussistema	= new PInteger();

			$this->perfis			= new PArrayOf("SistemaPerfil");
			$this->permissoes		= new PArrayOf("SistemaPermissao");
			$this->relatorios		= new PArrayOf("SistemaRelatorio");

			parent::__construct();
		}
	}

?>