<?php

	class Pessoa extends Persist
	{
		protected $nome;
		protected $data_cadastro;
		
		protected $telefones;
		protected $emails;
		protected $enderecos;

		public function __construct()
		{
			$this->nome					= new PVarchar("",100);
			$this->data_cadastro		= new PDateTime();

			$this->telefones			= new PArrayOf("Telefone");
			$this->emails				= new PArrayOf("Email");
			$this->enderecos			= new PArrayOf("Endereco");

			parent::__construct();
		}
	}

?>