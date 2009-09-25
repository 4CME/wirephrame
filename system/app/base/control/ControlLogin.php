<?php

	class ControlLogin
	{
		public $usuario;
		public $nivelacesso;
		public $counter = 0;

		public function __construct()
		{
			$this->usuario = new Usuario();
			$this->nivelacesso = new NivelAcesso();
		}

		public function doLogin($cosa_user, $cosa_pass)
		{
			try
			{
				WPDebug::log('Iniciando processo de login.');
				//1 - Verifica se usuario tem acesso ao sistema em questao
				$this->usuario->load(array('login' => $cosa_user));

				//2 - Verifica se senha esta correta de acordo com o que está definido no sysconf.php
				//... no AD
				if ($GLOBALS['AUTH_LDAP'])
				{
					WPDebug::log('Autenticando via LDAP.');
					// Conectando ao servidor
					if (!ldap_bind($GLOBALS['AUTH_LDAP_CONN'], $GLOBALS['AUTH_LDAP_DOMAIN'].'\\'.$cosa_user, $cosa_pass))
						WPDebug::exception('Não foi possível autenticar no LDAP/AD.');
				}
				//... ou no banco de dados
				else
				{
					WPDebug::log('Autenticando em banco de dados.');
					$this->usuario->load(array('login' => $cosa_user, 'password' => md5($cosa_pass)));
				}

				WPDebug::log('Verificando perfil de acesso ao sistema.');
				//3 - Verifica se tem algum perfil de acesso ao sistema
				//primeiro, pegamos o id do sistema atual
				$sistema = new Sistema();
				$sistema->load(array('nome' => $GLOBALS['SYSTEM']));

				WPDebug::log('Verificando nivel de acesso ao sistema.');
				//agora verificamos se existe algum perfil de acesso para este sistema para este usuario
				//o load lancara uma exceccao se nao existir perfil
				$this->nivelacesso->loadAll(array(
					'id_usuario' => $this->usuario->id,
					'id_sistema' => $sistema->id
					));

				//4 - Se chegou ate aqui, esta ok, retorna mensagem
				$this->counter = 0;
				
				WPDebug::log('Acesso ok, prosseguindo.');
				return $cosa_message = 'app.loadInterface(interface_principal_sistema);';
			}
			catch(Exception $e)
			{
				$this->counter++;

				if ($e->getMessage() == 'Não foi possível autenticar no AD.' && $this->counter)
				{
					if ($this->counter < 3)
					{
						$cosa_message = 'alert("ATENÇÃO!!!\n\nVocê já efetuou '.$this->counter.' tentativas de login inválidas.\nA conta será bloqueada automaticamente após \n3 tentativas erradas consecutivas.")';
						return $cosa_message;
					}

					if ($this->counter >= 3)
					{
						$cosa_message = 'alert("'.$e->getMessage().'\n\nVocê efetuou '.$this->counter.' tentativas de login inválidas\ne sua conta foi bloqueada. Entre em contato \ncom a CGTI para solicitar o desbloqueio.");';
						return $cosa_message;
					}
				}
				else
				{
					WPDebug::error('Login inválido.');
					WPDebug::exception($this->counter.' >> '.$e->getMessage());
				}
			}

		}

		public function doLogout()
		{
			WPDebug::log('Limpando sessão.');
			$_SESSION[$GLOBALS['SYSTEM']] = array();
			return $cosa_message = 'if (app.UIcomponents.menubar.childNodes[0]){while (app.UIcomponents.menubar.childNodes[0])app.UIcomponents.menubar.removeChild(app.UIcomponents.menubar.childNodes[0]);}; app.loadInterface(\'InterfaceLogin\');';
		}

		public function checkPermission($system = null, $interface = null, $control = null, $method = null, $report = null)
		{
			WPDebug::log('Checando perfil.');
			//checa primeiro o perfil, se for admin, pode tudo
			$perfil = new Perfil();
			$perfil->load($this->nivelacesso->id_perfil);
			WPDebug::log('Se perfil for de Administrador, não há mais checagens.');
			if ($perfil->nome != 'Administrador')
			{
				WPDebug::log('Verificando se tem acesso à Interface.');
				if ($interface)
				{
					//pega o nivel de acesso do usuario
					$this->nivelacesso;
					//pega as permissoes do nivel de acesso
					$this->nivelacesso->permissoes;

					//busca se há controle de permissões para este sistema com esta interface
					WPDebug::log('Verificando se interface requer controle de acesso.');
					$permissao = new Permissao();

					$atributos = array('id');
					$criterios = array('interface' => ' = \''.$interface.'\'');
					$result_permissao = $permissao->search($atributos, $criterios);

					//se houver, verifica se é aplicado a este sistema
					if ($result_permissao)
					{
						$virgula = '';
						$ids = '';
						foreach ($result_permissao as $row)
						{
							$ids .= $virgula.$row['id'];
							$virgula = ',';
						}
						$sistemapermissao = new SistemaPermissao();

						$atributos = array('id_permissao');
						$criterios = array(
											'id_sistema' => ' = '.$this->nivelacesso->id_sistema.' and ',
											'id_permissao' => ' in ('.$ids.')'
											);
						$result_sistemapermissao = $sistemapermissao->search($atributos, $criterios);
						
						WPDebug::log('Se houver, verifica se usuário tem permissão.');
						//se houver, verifica se o usuario tem essa permissao
						if ($result_sistemapermissao)
						{
							//partimos do princípio de que não tem
							$tem = false;

							//verificamos se a permissão existe para o perfil dele
							$perfilpermissao = new PerfilPermissao();
							$atributos = array('id_permissao');
							$criterios = array('id_perfil' => '='.$this->nivelacesso->id_perfil);
							$result_perfilpermissao = $perfilpermissao->search($atributos, $criterios);

							foreach ($result_sistemapermissao as $sp)
								foreach ($result_perfilpermissao as $pp)
									if ($sp['id_permissao'] == $pp['id_permissao'])
										$tem = true;

							//agora, verificamos se a permissão existe exclusiva para ele
							foreach ($this->nivelacesso->permissoes as $permissao)
								foreach ($result_sistemapermissao as $sp)
									if ($sp['id_permissao'] == $permissao->id_permissao)
										$tem = true;

							//se não tiver permissão...
							if(!$tem)
							{
								WPDebug::log('Usuário não tem permissão');
								return false;
							}
						}
					}
					WPDebug::log('Permissão de acesso à interface concedida.');
				}

				if ($control && $method)
				{
					//pega o nivel acesso do usuario
					$this->nivelacesso;
					//pega as permissoes do nivelacesso
					$this->nivelacesso->permissoes;

					//busca se há controle de permissões para este controle e método
					$permissao = new Permissao();

					$atributos = array('id');
					$criterios = array(
										'controle' => ' = \''.$control.'\' and ',
										'metodo' => ' = \''.$method.'\''
								);
					$result_permissao = $permissao->search($atributos, $criterios);

					//se houver, verifica se é aplicado a este sistema
					if ($result_permissao)
					{
						$virgula = '';
						$ids = '';
						foreach ($result_permissao as $row)
						{
							$ids .= $virgula.$row['id'];
							$virgula = ',';
						}
						$sistemapermissao = new SistemaPermissao();

						$atributos = array('id_permissao');
						$criterios = array(
											'id_sistema' => ' = '.$this->nivelacesso->id_sistema.' and ',
											'id_permissao' => ' in ('.$ids.')'
											);
						$result_sistemapermissao = $sistemapermissao->search($atributos, $criterios);

						//se houver, verifica se o usuario tem essa permissao
						if ($result_sistemapermissao)
						{
							//partimos do princípio de que não tem
							$tem = false;

							//verificamos se a permissão existe para o perfil dele
							$perfilpermissao = new PerfilPermissao();
							$atributos = array('id_permissao');
							$criterios = array('id_perfil' => '='.$this->nivelacesso->id_perfil);
							$result_perfilpermissao = $perfilpermissao->search($atributos, $criterios);

							foreach ($result_sistemapermissao as $sp)
								foreach ($result_perfilpermissao as $pp)
									if ($sp['id_permissao'] == $pp['id_permissao'])
										$tem = true;

							//agora, verificamos se a permissão existe exclusiva para ele
							foreach ($this->nivelacesso->permissoes as $permissao)
								foreach ($result_sistemapermissao as $sp)
									if ($sp['id_permissao'] == $permissao->id_permissao)
										$tem = true;

							//se não tiver permissão...
							if(!$tem)
								return false;
						}
					}
				}

				if ($report)
				{
					//pega o nivel acesso do usuario
					$this->nivelacesso;
					//pega os relatorios do nivelacesso
					$this->nivelacesso->relatorios;

					$sistemarelatorio = new SistemaRelatorio();

					$atributos = array('id_relatorio');
					$criterios = array(
										'id_sistema' => ' = '.$this->nivelacesso->id_sistema.' and ',
										'id_relatorio' => ' = '.$report
										);
					$result_sistemarelatorio = $sistemarelatorio->search($atributos, $criterios);

					//se houver, verifica se o usuario tem essa relatorio
					if ($result_sistemarelatorio)
					{
						//partimos do princípio de que não tem
						$tem = false;

						//verificamos se a permissão existe para o perfil dele
						$perfilrelatorio = new PerfilRelatorio();
						$atributos = array('id_relatorio');
						$criterios = array('id_perfil' => '='.$this->nivelacesso->id_perfil);
						$result_perfilrelatorio = $perfilrelatorio->search($atributos, $criterios);

						foreach ($result_sistemarelatorio as $sp)
							foreach ($result_perfilrelatorio as $pp)
								if ($sp['id_relatorio'] == $pp['id_relatorio'])
									$tem = true;

						//agora, verificamos se a permissão existe exclusiva para ele
						foreach ($this->nivelacesso->relatorios as $relatorio)
							foreach ($result_sistemarelatorio as $sp)
								if ($sp['id_relatorio'] == $relatorio->id_relatorio)
									$tem = true;

						//se não tiver permissão...
						if(!$tem)
							return false;
					}
				}
			}

			return true;
		}
	}

?>