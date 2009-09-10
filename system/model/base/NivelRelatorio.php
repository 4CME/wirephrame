<?php

	class NivelRelatorio extends Persist
	{
		protected $id_nivelacesso;
		protected $id_relatorio;

		public function __construct()
		{
			$this->id_nivelacesso	= new PInteger();
			$this->id_relatorio		= new PInteger();

			$this->parent_classes	= array("NivelAcesso", "Relatorio");

			parent::__construct();
		}
	}

?>