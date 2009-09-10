<?php

	class Email extends Persist
	{	
		protected $email;
		
		protected $id_pessoa;
		protected $id_tipoemail;

		public function __construct()
		{
			$this->email			= new PVarchar("",50);
			
			$this->id_pessoa		= new PInteger();
			$this->id_tipoemail		= new PInteger();

			$this->parent_classes	= array("Pessoa", "TipoEmail");

			parent::__construct();
		}
	}

?>