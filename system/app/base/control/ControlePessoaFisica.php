<?php

	class ControlePessoaFisica extends ControlePessoa
	{
		protected $pessoa;

		public function __construct()
		{
			$this->pessoa = new PessoaFisica();
		}

		public function carregarPessoaFisica($params)
		{
			if (isset($params->id))
			{
				$index = "id";
				$value = $params->id;
			}
			else if (isset($params->cpf))
			{
				$index = "cpf";
				$value = $params->cpf;
			}
			else if (isset($params->passaporte))
			{
				$index = "passaporte";
				$value = $params->passaporte;
			}

			try
			{
				$this->pessoa = new PessoaFisica();

				$this->pessoa->loadAll(array($index => $value));

				return $this->pessoa->toXML();
			}
			catch(Exception $e)
			{
				if (strstr($e->getMessage(), "More than one result returned."))
				{
					WPDebug::exception("Foram encontrados dois cadastros para a mesma informação! Corrija o erro antes:\n$index: $value");
					return false;
				}

				if ($index == "cpf" || $index == "passaporte")
				{
					$this->pessoa = new PessoaFisica();

					if ($index == "cpf")
						$this->pessoa->cpf = $value;
					else if ($index == "passaporte")
						$this->pessoa->passaporte = $value;

					$this->pessoa->save();
					return $this->pessoa->toXML();
				}

				WPDebug::exception("Não foi possível localizar cadastro com os dados informados:\n$index: $value");
			}
		}
		
		public function validarPessoaFisica($params)
		{
			$params->Pessoa = $params->PessoaFisica;
			
			$this->validarPessoa($params);
			
			if (!trim($params->PessoaFisica->cpf) && !trim($params->PessoaFisica->passaporte))
				WPDebug::exception("É obrigatório informar o cpf ou passaporte da pessoa");

			if (!trim($params->PessoaFisica->rg_orgao))
				WPDebug::exception("É obrigatório informar o rg/órgão expedidor da pessoa.");

			if (!trim($params->PessoaFisica->id_estadocivil))
				WPDebug::exception("É obrigatório informar o estado civil da pessoa.");

			if (!trim($params->PessoaFisica->id_sexo))
				WPDebug::exception("É obrigatório informar o sexo da pessoa.");

			if (!trim($params->PessoaFisica->cidade_origem))
				WPDebug::exception("É obrigatório informar a cidade de origem da pessoa.");
			if (strlen(trim($params->PessoaFisica->cidade_origem)) < 3)
				WPDebug::exception("Cidade de origem da pessoa deve ter no mínimo 3 caracteres.");

			if (!trim($params->PessoaFisica->id_uf))
				WPDebug::exception("É obrigatório informar a uf de origem da pessoa.");

			if (!trim($params->PessoaFisica->id_pais))
				WPDebug::exception("É obrigatório informar o país de origem da pessoa.");

			if (!trim($params->PessoaFisica->nacionalidade))
				WPDebug::exception("É obrigatório informar a nacionalidade da pessoa.");

			if (!trim($params->PessoaFisica->nascimento))
				WPDebug::exception("É obrigatório informar a data de nascimento da pessoa.");
		}

		public function salvarPessoaFisica($params)
		{
			//compatibilização de dados entre as heranças
			$params->Pessoa = $params->PessoaFisica;
			
			//primeiro validamos
			$this->validarPessoaFisica($params);
			
			//agora, salvamos dados de Pessoa no banco
			$this->salvarPessoa($params);

			/***************************filtra dados pessoa fisica**************************/
			
			$this->pessoa->nascimento		= trim($params->PessoaFisica->nascimento);
			$this->pessoa->cpf				= trim($params->PessoaFisica->cpf);
			$this->pessoa->rg_orgao			= trim($params->PessoaFisica->rg_orgao);
			$this->pessoa->id_estadocivil	= trim($params->PessoaFisica->id_estadocivil);
			$this->pessoa->id_sexo			= trim($params->PessoaFisica->id_sexo);
			$this->pessoa->cidade_origem	= trim($params->PessoaFisica->cidade_origem);
			$this->pessoa->id_uf			= trim($params->PessoaFisica->id_uf);
			$this->pessoa->id_pais			= trim($params->PessoaFisica->id_pais);
			$this->pessoa->nacionalidade	= trim($params->PessoaFisica->nacionalidade);
			$this->pessoa->pai				= trim($params->PessoaFisica->pai);
			$this->pessoa->mae				= trim($params->PessoaFisica->mae);
			
			/***************************filtra dados pessoa**************************/

			$this->pessoa->saveAll();

			$this->pessoa->loadAll($this->pessoa->id);

			return $this->pessoa->toXML();
		}
	}
?>