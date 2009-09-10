<?php

	class Endereco extends Persist
	{		
		protected $endereco;
		protected $bairro;
		protected $cidade;		
		protected $cep;

		protected $id_pessoa;
		protected $id_tipoendereco;
		protected $id_uf;
		protected $id_pais;
		
		public function __construct()
		{
			$this->endereco			= new PVarchar("",255);
			$this->bairro			= new PVarchar("",50);
			$this->cidade			= new PVarchar("",255);
			$this->cep				= new PInteger();
			
			$this->id_pessoa		= new PInteger();
			$this->id_tipoendereco	= new PInteger();
			$this->id_uf			= new PInteger();
			$this->id_pais			= new PInteger();

			$this->parent_classes	= array("Pessoa", "TipoEndereco", "UF", "Pais");

			parent::__construct();
		}
	}

?>