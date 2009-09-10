<?php

	class Usuario extends PessoaFisica
	{
		protected $login;
		protected $password;
		protected $niveisacesso;

		public function __construct()
		{
			$this->login		= new PVarchar();
			$this->password		= new PVarchar();
			$this->niveisacesso	= new PArrayOf("NivelAcesso");

			parent::__construct();
		}
	}

?>