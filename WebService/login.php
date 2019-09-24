<?php
if(!(isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW']))){
   header('WWW-Authenticate: Basic realm="Restricted Area');
   header('HTTP/1.0 401 Unauthorized');
   die('Acesso Não Autorizado!');
} else {

	$validPasswords = ["neto" => "1234"];//consulta ao banco para login e guardar em array ['login' = > 'Senha'];
	$validUser = array_keys($validPasswords);

	$user = $_SERVER['PHP_AUTH_USER'];
	$pass = $_SERVER['PHP_AUTH_PW'];
	
	$validate = (in_array($user, $validUser) && $pass = $validPasswords[$user]);

	if (!$validate){
	   header('WWW-Authenticate: Basic realm="Restricted Area');
	   header('HTTP/1.0 401 Unauthorized');
	   die('Acesso Não Autorizado!');
	}

	echo "ENTROU";

}
?>