<?php

	class PessoaFisica extends Pessoa
	{
		protected $nascimento;
		protected $cpf;
		protected $rg_orgao;
		protected $cidade_origem;
		protected $nacionalidade;
		protected $pai;
		protected $mae;
		
		protected $id_uf;
		protected $id_pais;
		protected $id_estadocivil;
		protected $id_sexo;

		public function __construct()
		{
			$this->nascimento				= new PDate('null');
			$this->cpf						= new PVarchar("",15);
			$this->rg_orgao					= new PVarchar("",30);
			$this->cidade_origem			= new PVarchar("",50);
			$this->nacionalidade			= new PVarchar("Brasileira",50);
			$this->pai						= new PVarchar("",250);
			$this->mae						= new PVarchar("",250);		
			
			$this->id_uf					= new PInteger(7);
			$this->id_pais					= new PInteger(1);
			$this->id_estadocivil			= new PInteger(null);
			$this->id_sexo					= new PInteger(null);
			
			$this->parent_classes	= array("UF", "Pais", "EstadoCivil", "Sexo");

			parent::__construct();
		}
	}

?>