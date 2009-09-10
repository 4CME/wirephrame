<?php

	/**
	 * Script para criação do banco de dados
	 *  
	 * @author     Pablo Santiago Sánchez <phackwer@corephp.com.br>
	 * @version    1.0
	 * @package    WirePhrame
	 */

	//Inclui tudo necessário para funcionamento do sistema.
 	require('includes/php/sysincludes.php');

	//Início da sessão
	session_start();

	//Cabeçalhos HTTP para evitar cache
	header('Last-Modified: '.gmdate("D, d M Y H:i:s").' GMT');
	header('Cache-Control: no-cache, must-revalidate');		//HTTP/1.1
	header('Pragma: no-cache');								//HTTP/1.0
	header('Content-type: text/html; charset=UTF-8');

	//Faz saída dos SQLs para a tela
	POPEnvironment::$debug = true;

	try
	{
		//Objetos de apoio
		$pais 						= new Pais();
		$uf 						= new UF();
		$status						= new StatusSistema();
		$estadocivil 				= new EstadoCivil();
		$sexo 						= new Sexo();
		$tipoemail 					= new TipoEmail();
		$tipoendereco 				= new TipoEndereco();
		$tipotelefone 				= new TipoTelefone();
		
		//Objetos de negócio
		$pessoa						= new Pessoa();
		$pessoafisica				= new PessoaFisica();
		$endereco					= new Endereco();
		$telefone					= new Telefone();
		$email						= new Email();
		$usuario					= new Usuario();
		$sistema					= new Sistema();
		$perfil						= new Perfil();
		$permissao					= new Permissao();
		$sistemaperfil				= new SistemaPerfil();
		$sistemapermissao			= new SistemaPermissao();
		$perfilpermissao			= new PerfilPermissao();
		$nivelacesso				= new NivelAcesso();
		$nivelpermissao				= new NivelPermissao();
		$relatorio					= new Relatorio();
		$sistemarelatorio			= new SistemaRelatorio();
		$perfilrelatorio			= new PerfilRelatorio();
		$nivelrelatorio				= new NivelRelatorio();
		
		//limpeza do banco
		$nivelrelatorio->dropTable();
		$perfilrelatorio->dropTable();
		$sistemarelatorio->dropTable();
		$relatorio->dropTable();
		$nivelpermissao->dropTable();
		$nivelacesso->dropTable();
		$perfilpermissao->dropTable();
		$sistemapermissao->dropTable();
		$sistemaperfil->dropTable();
		$permissao->dropTable();
		$perfil->dropTable();
		$sistema->dropTable();
		$usuario->dropTable();
		$email->dropTable();
		$telefone->dropTable();
		$endereco->dropTable();
		$pessoafisica->dropTable();
		$pessoa->dropTable();
		
		$tipotelefone->dropTable();
		$tipoendereco->dropTable();
		$tipoemail->dropTable();
		$sexo->dropTable();
		$estadocivil->dropTable();
		$status->dropTable();
		$uf->dropTable();
		$pais->dropTable();
		
		//criacao das tabelas
		$pais->createTable();
		$uf->createTable();
		$status->createTable();		
		$estadocivil->createTable();
		$sexo->createTable();
		$tipoemail->createTable();
		$tipoendereco->createTable();
		$tipotelefone->createTable();
		
		$pessoa->createTable();
		$pessoafisica->createTable();
		$endereco->createTable();
		$telefone->createTable();
		$email->createTable();
		$usuario->createTable();
		$sistema->createTable();
		$perfil->createTable();
		$permissao->createTable();
		$sistemaperfil->createTable();
		$sistemapermissao->createTable();
		$perfilpermissao->createTable();
		$nivelacesso->createTable();
		$nivelpermissao->createTable();
		$relatorio->createTable();
		$sistemarelatorio->createTable();
		$perfilrelatorio->createTable();
		$nivelrelatorio->createTable();
	}
	catch(Exception $e)
	{
		echo $e->getMessage();
		return false;
	}
	
	/**
	 *
	 */
	
	$pais 				= array(
								array("nome" => "Brasil")
								);
								
	fillSupportData($pais, "Pais");
	
	$uf 				= array(
								array("sigla" => "AC", "nome" => "Acre", "id_pais" => 1),
								array("sigla" => "AL", "nome" => "Alagoas", "id_pais" => 1),
								array("sigla" => "AP", "nome" => "Amapá", "id_pais" => 1),
								array("sigla" => "AM", "nome" => "Amazonas", "id_pais" => 1),
								array("sigla" => "BA", "nome" => "Bahia", "id_pais" => 1),
								array("sigla" => "CE", "nome" => "Ceará", "id_pais" => 1),
								array("sigla" => "DF", "nome" => "Distrito Federal", "id_pais" => 1),
								array("sigla" => "ES", "nome" => "Espírito Santo", "id_pais" => 1),
								array("sigla" => "GO", "nome" => "Goiás", "id_pais" => 1),
								array("sigla" => "MA", "nome" => "Maranhão", "id_pais" => 1),
								array("sigla" => "MT", "nome" => "Mato Grosso", "id_pais" => 1),
								array("sigla" => "MS", "nome" => "Mato Grosso do Sul", "id_pais" => 1),
								array("sigla" => "MG", "nome" => "Minas Gerais", "id_pais" => 1),
								array("sigla" => "PA", "nome" => "Pará", "id_pais" => 1),
								array("sigla" => "PB", "nome" => "Paraíba", "id_pais" => 1),
								array("sigla" => "PE", "nome" => "Pernambuco", "id_pais" => 1),
								array("sigla" => "PI", "nome" => "Piauí", "id_pais" => 1),
								array("sigla" => "RJ", "nome" => "Rio de Janeiro", "id_pais" => 1),
								array("sigla" => "RN", "nome" => "Rio Grande do Norte", "id_pais" => 1),
								array("sigla" => "RS", "nome" => "Rio Grande do Sul", "id_pais" => 1),
								array("sigla" => "RO", "nome" => "Rondônia", "id_pais" => 1),
								array("sigla" => "RR", "nome" => "Roraima", "id_pais" => 1),
								array("sigla" => "SC", "nome" => "Santa Catarina", "id_pais" => 1),
								array("sigla" => "SP", "nome" => "São Paulo", "id_pais" => 1),
								array("sigla" => "SE", "nome" => "Sergipe", "id_pais" => 1),
								array("sigla" => "TO", "nome" => "Tocantins", "id_pais" => 1)
								);
								
	fillSupportData($uf, "UF");
	
	$estadocivil 		= array(
								array("nome"=>"Solteiro(a)"),
								array("nome"=>"Casado(a)"),
								array("nome"=>"Divorciado(a)"),
								array("nome"=>"Separado(a)"),
								array("nome"=>"Viuvo(a)"),
								array("nome"=>"Separado Judicialmente"),
								array("nome"=>"Uniao Estavel")
							);
	
	fillSupportData($estadocivil, "EstadoCivil");
	
	$sexo 				= array(
								array("nome"=>"Masculino"),
								array("nome"=>"Feminino")
							);
	
	fillSupportData($sexo, "Sexo");
	
	$tipoemail 			= array(
								array("nome"=>"Particular"),
								array("nome"=>"Comercial")
							);
	
	fillSupportData($tipoemail, "TipoEmail");
	
	$tipoendereco 		= array(
								array("nome"=>"Residencial"),
								array("nome"=>"Comercial")
							);
	
	fillSupportData($tipoendereco, "TipoEndereco");
	
	$tipotelefone 		= array(
								array("nome"=>"Residencial"),
								array("nome"=>"Comercial"),
								array("nome"=>"Celular"),
								array("nome"=>"FAX")
							);
	
	fillSupportData($tipotelefone, "TipoTelefone");
	
	
	$status 				= array(
								array("nome"=>"Planejamento"),
								array("nome"=>"Desenvolvimento"),
								array("nome"=>"Homologação"),
								array("nome"=>"Produção"),
								array("nome"=>"Desativado")
							);
							
	fillSupportData($status, "StatusSistema");	
	
	$sistema 				= array(
								array("nome"=>$GLOBALS['SYSTEM'])
							);
							
	fillSupportData($sistema, "Sistema");
							
	$perfil 				= array(
								array("nome"=>"Administrador")
							);
	
	fillSupportData($perfil, "Perfil");
	
	$sistemaperfil			= array(
								array("id_sistema"=>"1", "id_perfil" => "1")
							);
	
	fillSupportData($sistemaperfil, "SistemaPerfil");
	

	$relatorio				= array(
								array("nome" => "Perfis,  permissões e relatórios por Sistema", "interface" => "InterfaceRelatorioSelecionaSistema", "controle" => "ControleSistema", "metodo" => "gerarListagemSistemaPerfilPermissaoRelatorio", "template" => "sistemaperfilpermissaorelatorio.php"),
								array("nome" => "Usuários por Sistema", "interface" => "InterfaceRelatorioSelecionaSistema", "controle" => "ControleSistema", "metodo" => "gerarListagemSistemaUsuarios", "template" => "sistemausuario.php")
							);
	
	fillSupportData($relatorio, "Relatorio");	
	
	$sistemarelatorio			= array(
								array("id_relatorio" => 1, "id_sistema" => 1),
								array("id_relatorio" => 2, "id_sistema" => 1)
							);
	
	fillSupportData($sistemarelatorio, "SistemaRelatorio");
	
	//usuario admin
	$user = new Usuario();
	$user->nome 			= "Administrador";
	$user->cpf 				= "69339430115";
	$user->nascimento		= "1978-08-18";
	$user->id_uf			= 7;
	$user->id_pais			= 1;
	$user->id_estadocivil	= 2;
	$user->id_sexo			= 1;
	$user->login 			= "admin";
	$user->password 		= md5("123456");
	$user->save();
	
	$nivelacesso			= array(
								array("id_usuario" => 1, "id_sistema" => 1, "id_perfil" => 1)
							);
	
	fillSupportData($nivelacesso, "NivelAcesso");
	
	$user->loadAll(1);

?>