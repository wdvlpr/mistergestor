var app = {
    initialize: function() {
        document.getElementById("btnEntrar").addEventListener("click", this.entrar, false);
    },
    entrar: function() {
      var username = $("#username").val();
      var password = $("#password").val();
      $.ajax
      ({
        type: "GET",
        url: "http://192.168.0.202:8030/WsPhp/login.php",
        dataType: 'html',
        headers: {
          "Authorization": "Basic " + btoa(username + ":" + password)
        },
        data: '{ "comment" }',
        success: function (rows){
          if(rows == 'ENTROU'){
            $(".login-box").hide();
            $(".painel-box").show();
          }
        }
      });
    },
};
app.initialize();