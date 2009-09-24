<?php

	class ControlePessoa
	{
		protected $pessoa;

		public function __construct()
		{
			$this->pessoa = new Pessoa();
		}

		public function carregarPessoa($params)
		{
			if (isset($params->id))
			{
				$index = "id";
				$value = $params->id;
			}

			try
			{
				$this->pessoa = new Pessoa();

				$this->pessoa->loadAll(array($index => $value));

				return $this->pessoa->toXML();
			}
			catch(Exception $e)
			{
				WPDebug::exception("Não foi possível localizar cadastro com os dados informados:\n$index: $value");
			}
		}
		
		public function validarPessoa($params)
		{
			if (!trim($params->Pessoa->nome))
				WPDebug::exception("É obrigatório informar o nome.");
			if (strlen(trim($params->Pessoa->nome)) < 3)
				WPDebug::exception("Nome da pessoa deve ter no mínimo 3 caracteres.");
				
			//valida enderecos
			if (!isset($params->Pessoa->enderecos->Endereco))
				WPDebug::exception("É obrigatório informar um endereço de contato.");
				
			if ($params->Pessoa->enderecos->Endereco instanceof stdClass)
			{
				$values = $params->Pessoa->enderecos->Endereco;
				$this->validarEnderecos($values);
			}
			else
				foreach ($params->Pessoa->enderecos->Endereco as $values)
					$this->validarEnderecos($values);
				
			//valida telefones
			if (!isset($params->Pessoa->telefones->Telefone))
				WPDebug::exception("É obrigatório informar um telefone de contato.");
				
			if ($params->Pessoa->telefones->Telefone instanceof stdClass)
			{
				$values = $params->Pessoa->telefones->Telefone;
				$this->validarTelefones($values);
			}
			else
				foreach ($params->Pessoa->telefones->Telefone as $values)
					$this->validarTelefones($values);
				
			//valida emails
			if (!isset($params->Pessoa->emails->Email))
				WPDebug::exception("É obrigatório informar um e-mail de contato.");
				
			if ($params->Pessoa->emails->Email instanceof stdClass)
			{
				$values = $params->Pessoa->emails->Email;
				$this->validarEmails($values);
			}
			else
				foreach ($params->Pessoa->emails->Email as $values)
					$this->validarEmails($values);
		}

		public function salvarPessoa($params)
		{
			$this->validarPessoa($params);
			
			/***************************filtra dados pessoa**************************/
			$this->pessoa->nome 			= trim($params->Pessoa->nome);
			$this->pessoa->data_cadastro 	= date("Y-m-d h:i:s");
			/***************************filtra dados pessoa**************************/

			/*******************************enderecos*******************************/
			//salva enderecos
			if ($params->Pessoa->enderecos->Endereco instanceof stdClass)
			{
				$values = $params->Pessoa->enderecos->Endereco;
				$this->salvarEnderecos($values);
			}
			else
				foreach ($params->Pessoa->enderecos->Endereco as $values)
					$this->salvarEnderecos($values);

			//remove endereços apagados
			if (is_array($params->Pessoa->enderecos->removed->item))
			{
				foreach ($params->Pessoa->enderecos->removed->item as $value)
					$this->removerEnderecos($value);
			}
			else if (isset($params->Pessoa->enderecos->removed))
			{
				$value = $params->Pessoa->enderecos->removed->item;
				$this->removerEnderecos($value);
			}
			/*******************************enderecos*******************************/

			/*******************************telefones*******************************/
			//salva telefones
			if ($params->Pessoa->telefones->Telefone instanceof stdClass)
			{
				$values = $params->Pessoa->telefones->Telefone;
				$this->salvarTelefones($values);
			}
			else
				foreach ($params->Pessoa->telefones->Telefone as $values)
					$this->salvarTelefones($values);

			//remove telefones apagados
			if (is_array($params->Pessoa->telefones->removed->item))
			{
				foreach ($params->Pessoa->telefones->removed->item as $value)
					$this->removerTelefones($value);
			}
			else if (isset($params->Pessoa->telefones->removed))
			{
				$value = $params->Pessoa->telefones->removed->item;
				$this->removerTelefones($value);
			}
			/*******************************telefones*******************************/

			/*******************************emails*******************************/
			//salva emails
			if ($params->Pessoa->emails->Email instanceof stdClass)
			{
				$values = $params->Pessoa->emails->Email;
				$this->salvarEmails($values);
			}
			else
				foreach ($params->Pessoa->emails->Email as $values)
					$this->salvarEmails($values);

			//remove emails apagados
			if (is_array($params->Pessoa->emails->removed->item))
			{
				foreach ($params->Pessoa->emails->removed->item as $value)
					$this->removerEmails($value);
			}
			else if (isset($params->Pessoa->emails->removed))
			{
				$value = $params->Pessoa->emails->removed->item;
				$this->removerEmails($value);
			}
			/*******************************emails*******************************/

			/***************************salva dados pessoa**************************/
			$this->pessoa->saveAll();

			$this->pessoa->loadAll($this->pessoa->id);
			/***************************salva dados pessoa**************************/

			return $this->pessoa->toXML();
		}
		
		public function validarEnderecos($values)
		{
			if (!trim($values->endereco))
				WPDebug::exception("É obrigatório informar o endereço.");
			if (strlen(trim($values->endereco)) < 10)
				WPDebug::exception("Endereço deve ter no mínimo 10 caracteres.");
			if (!trim($values->id_tipoendereco))
				WPDebug::exception("É obrigatório informar o tipo do endereço.");
			if (!trim($values->bairro))
				WPDebug::exception("É obrigatório informar o bairro.");
			if (strlen(trim($values->bairro)) < 3)
				WPDebug::exception("Bairro deve ter no mínimo 3 caracteres.");
			if (!trim($values->cidade))
				WPDebug::exception("É obrigatório informar a cidade do endereço.");
			if (strlen(trim($values->cidade)) < 3)
				WPDebug::exception("Cidade do endereço deve ter no mínimo 3 caracteres.");
			if (!trim($values->id_uf))
				WPDebug::exception("É obrigatório informar a uf do endereço.");
			if (!trim($values->id_pais))
				WPDebug::exception("É obrigatório informar o país do endereço.");
			if (!trim($values->cep))
				WPDebug::exception("É obrigatório informar o CEP.");
			if (strlen(trim($values->cep)) < 8)
				WPDebug::exception("CEP deve ter no mínimo 8 caracteres.");
		}

		public function salvarEnderecos($values)
		{
			if ($values->id)
				$obj = $this->pessoa->getAssociated("enderecos","id",$values->id);
			else
				$obj = new Endereco();			

			$obj->id_tipoendereco	= trim($values->id_tipoendereco);
			$obj->endereco			= trim($values->endereco);
			$obj->bairro			= trim($values->bairro);
			$obj->cidade			= trim($values->cidade);
			$obj->id_uf				= trim($values->id_uf);
			$obj->id_pais			= trim($values->id_pais);
			$obj->cep				= trim($values->cep);

			if (!$values->id)
				$this->pessoa->addAssociated("enderecos",$obj);
		}

		public function removerEnderecos($value)
		{
			try
			{
				$obj = $this->pessoa->getAssociated("enderecos","id",$value);
				$obj->delete();
			}
			catch (Exception $e) {}
		}
		
		public function validarTelefones($values)
		{
			if (!trim($values->id_tipotelefone))
				WPDebug::exception("É obrigatório informar o tipo do telefone.");
			if (!trim($values->ddi))
				WPDebug::exception("É obrigatório informar o DDI.");
			if (strlen(trim($values->ddi)) < 2)
				WPDebug::exception("DDI deve ter no mínimo 2 caracteres.");
			if (!trim($values->ddd))
				WPDebug::exception("É obrigatório informar o DDD.");
			if (strlen(trim($values->ddd)) < 2)
				WPDebug::exception("DDD deve ter no mínimo 2 caracteres.");
			if (!trim($values->numero))
				WPDebug::exception("É obrigatório informar o número do telefone.");
			if (strlen(trim($values->numero)) < 7)
				WPDebug::exception("Número do telefone deve ter no mínimo 7 caracteres.");
		}

		public function salvarTelefones($values)
		{
			if ($values->id)
				$obj = $this->pessoa->getAssociated("telefones","id",$values->id);
			else
				$obj = new Telefone();

			$obj->id_tipotelefone	= trim($values->id_tipotelefone);
			$obj->ddi				= trim($values->ddi);
			$obj->ddd				= trim($values->ddd);
			$obj->numero			= trim($values->numero);

			if (!$values->id)
				$this->pessoa->addAssociated("telefones",$obj);
		}

		public function removerTelefones($value)
		{
			try
			{
				$obj = $this->pessoa->getAssociated("telefones","id",$value);
				$obj->delete();
			}
			catch (Exception $e) {}
		}
		
		public function validarEmails($values)
		{
			if (!trim($values->id_tipoemail))
				WPDebug::exception("É obrigatório informar o tipo do e-mail.");
			if (!trim($values->email))
				WPDebug::exception("É obrigatório informar o e-mail.");
			/*colocar validação de e-mail aqui
			if (!validaEmail(trim($values->email)))
				WPDebug::exception("E-mail inválido.");
			*/
		}

		public function salvarEmails($values)
		{
			if ($values->id)
				$obj = $this->pessoa->getAssociated("emails","id",$values->id);
			else
				$obj = new Email();

			$obj->id_tipoemail	= trim($values->id_tipoemail);
			$obj->email			= trim($values->email);

			if (!$values->id)
				$this->pessoa->addAssociated("emails",$obj);
		}

		public function removerEmails($value)
		{
			try
			{
				$obj = $this->pessoa->getAssociated("emails","id",$value);
				$obj->delete();
			}
			catch (Exception $e) {}
		}
	}
?>