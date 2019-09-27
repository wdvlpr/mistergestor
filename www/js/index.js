var app = {
    initialize: function() {
        $(".wrapper").hide();
        document.getElementById("btnEntrar").addEventListener("click", this.entrar, false);
        document.getElementById("btnSair").addEventListener("click", this.sair, false);
    },
    entrar: function() {
      var username = $("#username").val();
      var password = $("#password").val();
      $.ajax
      ({
        type: "GET",
        url: "https://app.netseven.com.br/mistergestor/WebService/Operacional.php",
        dataType: 'json',
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        },
        data: '{ "comment" }',
        success: function (rows){
          if(rows.situacao == 'A'){
            $(".login-box").hide();
            $(".wrapper").show();
            $("#usuario-nome").html('').html(rows.nome);
          }
        }
      });
    },
    sair: function() {
      $("#username").val('');
      $("#password").val('');
      $(".wrapper").hide();
      $(".login-box").show();
    },
};
app.initialize();