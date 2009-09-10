<?php

	class SistemaRelatorio extends Persist
	{
		protected $id_sistema;
		protected $id_relatorio;

		public function __construct()
		{
			$this->id_sistema		= new PInteger();
			$this->id_relatorio	= new PInteger();

			$this->parent_classes	= array("Sistema", "Relatorio");

			parent::__construct();
		}
	}

?>