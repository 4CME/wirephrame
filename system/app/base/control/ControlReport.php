<?php

	class ControlReport
	{
		public $report;

		public function __construct()
		{
			$this->report = new Relatorio();
		}

		public function loadReport($params)
		{
			try
			{
				$this->report->load($params->id_relatorio);

				$controle = $this->report->controle;
				$metodo = $this->report->metodo;
				$template = $this->report->template;
				$formato = $params->formato;

				$service = new $controle();
				$dados = $service->$metodo($params);

				$rePHPort = EngineRePHPort::buildAndSave($formato, $_SERVER['DOCUMENT_ROOT'].$GLOBALS['SYSTEM'].$GLOBALS['INCLUDE_PATH']['reportoutput'], $template, $dados);

				return 'window.open("http://'.$_SERVER['SERVER_NAME'].'/'.$GLOBALS['SYSTEM'].$GLOBALS['INCLUDE_PATH']['reportoutput'].$rePHPort->getFileName().'", "_blank")';
			}
			catch (Exception $e)
			{
				WPDebug::exception($e->getMessage());
				return false;
			}
		}

		public function listReports()
		{
			//primeiro, verificamos quais os relatórios disponíveis para este sistema

			$controllogin = unserialize($_SESSION[$GLOBALS['SYSTEM']]['ControlLogin']);			
			$sistemarelatorio = new SistemaRelatorio();
			$criterios = array(
								'id_sistema' => ' = '.$controllogin->nivelacesso->id_sistema
								);
			$result_sistemarelatorio = $sistemarelatorio->search(null, $criterios);

			//agora, verificamos quais estão liberados para este perfil
			$perfilrelatorio = new PerfilRelatorio();
			$atributos = array('id_relatorio');
			$criterios = array('id_perfil' => '='.$controllogin->nivelacesso->id_perfil);
			$result_perfilrelatorio = $perfilrelatorio->search($atributos, $criterios);

			$virgula = '';
			$ids = '';

			//checa primeiro o perfil, se for admin, pode tudo
			$perfil = new Perfil();
			$perfil->load($controllogin->nivelacesso->id_perfil);
			if ($perfil->nome != 'Administrador')
			{
				foreach ($result_sistemarelatorio as $sp)
					foreach ($result_perfilrelatorio as $pp)
						if ($sp['id_relatorio'] == $pp['id_relatorio'])
						{
							$ids .= $virgula.$sp['id_relatorio'];
							$virgula = ',';
						}

				//e agora os que estão liberados para o usuãrio
				foreach ($controllogin->nivelacesso->relatorios as $relatorio)
					foreach ($result_sistemarelatorio as $sp)
						if ($sp['id_relatorio'] == $relatorio->id_relatorio)
						{
							$ids .= $virgula.$sp['id_relatorio'];
							$virgula = ',';
						}
			}
			else
			{
				foreach ($result_sistemarelatorio as $sp)
				{
					$ids .= $virgula.$sp['id_relatorio'];
					$virgula = ',';
				}
			}

			if ($ids)
			{
				//agora pegamos a lista somente daqueles que estão liberados
				$criterios = array('id' => ' in ('.$ids.')');
				$result = $this->report->search(null,$criterios,'XML');
				return $result;
			}
			else
				WPDebug::exception('Não foi possível encontrar relatórios aos quais você tenha permissão de acesso.');
		}
	}

?>