/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        /*
        document.addEventListener('deviceready', function () {
            //cordova.plugins.notification.badge.hasPermission(function (granted) {
            //    alert('oi1');
            //});
            //cordova.plugins.notification.badge.set(10);
            //cordova.plugins.notification.badge.increase(1, function (badge) {
            //    alert('oi2');
            //});
            //cordova.plugins.notification.badge.configure({ indicator: 'circular' });
            // cordova.plugins.notification.badge is now available
        }, false);
        */
        document.getElementById("btnEntrar").addEventListener("click", this.entrar, false);
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    entrar: function() {
        alert('Entrou!');
        var username = $("#username").val();
        var password = $("#password").val();
        
        $.ajax
        ({
          type: "GET",
          url: "http://192.168.0.202:8030/WsPhp/login.php",
          dataType: 'json',
          headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
          },
          data: '{ "comment" }',
          success: function (data){
            alert('RESULT:'+data); 
          }
        });

        //this.receivedEvent('deviceready');
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        cordova.plugins.notification.badge.set(10);
        //alert('oi');
        //this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
/*
function auth(){
    var username = $("#username").val();
    var password = $("#password").val();

    $.ajax
    ({
      type: "GET",
      url: "http://192.168.0.202:8030/WsPhp/login.php",
      dataType: 'json',
      headers: {
        "Authorization": "Basic " + btoa(username + ":" + password)
      },
      data: '{ "comment" }',
      success: function (data){
        alert('RESULT: ' + data); 
      }
    });
}
*/