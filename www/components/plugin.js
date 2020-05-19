// AÇÃO DE CADA BOTÃO
$(document).on("click","Alerta",function(){
  navigator.notification.alert("Testando!",retorno,"Alerta","Ok");
});

$(document).on("click","confirm",function(){
  function confirma (buttonIndex){
    if (buttonIndex == 1) {
       navigator.notification.confirm("Escolheu o 1");
    } else {
       navigator.notification.confirm("Escolheu o 2");
    }
  }
  navigator.notification.confirm("Escolha 1 ou 2",confirma,"Escolha",['1','2']);
});

$(document).on("click","beep",function(){
  navigator.notification.beep(2);
});

$(document).on("click","vibrar",function(){
  navigator.vibrate(3000);
});

// AÇÃO DO CLICK
$(document).on("click","local",function(){
  var onSuccess = function(position) {
    MostraMapa(position.coords.latitude, position.coords.longitude);
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
});

// FUNÇÃO QUE MOSTRA O MAPA

function MostraMapa(lat, long){
  L.mapquest.key = 'yo5RN1smDTenjLlNo8r56GVajTjFdZZW';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
}