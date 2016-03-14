/**
 * Created by youser on 2/4/16.
 */
window.onload = function () {
    $(document).ready(function () {
        var id = 'ID_' + getRandomInt(1, 9) * new Date().getTime();
        console.log(id);
        $('#payment-id').val(id);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    });
}

function pay() {
    var id = 'ID_' + getRandomInt(1, 9) * new Date().getTime();
    var mail = $("input[name=ik_cli]").val();
    var clientname = $("input[name=ik_x_clientname]").val();
    var clientphone = $("input[name=ik_x_clientphone]").val();
    //var date = new Date().toISOString();
    var date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log(id);
    $('#payment-id').val(id);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(id + '\n' + mail + '\n' + date);
    //document.body.innerHTML += '<form id="dynForm" action="http://cheprasova.com/interaction.php" method="post"><input type="hidden" name="ik_pm_no" value="' + id + '" name="ik_x_clientmail" value="' + mail + '" name="ik_inv_prc" value="' + date + '"></form>';
    //document.getElementById("dynForm").submit();
    $.post("http://cheprasova.com/interaction2.php", 'ik_pm_no=' + id + '&ik_cli=' + mail + '&ik_inv_prc=' + date + '&ik_x_clientname=' + clientname + '&ik_x_clientphone=' + clientphone + '&ik_inv_st=send_to_ik', function () {
        alert("success");
    })
        .done(function () {
            alert("second success");
        })
        .fail(function () {
            //alert("error");
            //$('#payment').submit();
        })
        .always(function () {
            //alert("finished");
        });

    //$.post( "http://cheprasova.com/interaction.php", "ik_pm_no=" + id);

    //var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    //xmlhttp.open('POST', 'http://cheprasova.com/interaction.php', true); // Открываем асинхронное соединение
    //xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    //xmlhttp.setRequestHeader('Access-Control-Allow-Origin', 'http://cheprasova.com/interaction.php');
    ////xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    //xmlhttp.send("ik_pm_no=" + id + "&ik_x_clientmail=" + mail + "&ik_inv_prc=" + date); // Отправляем POST-запрос
    //xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
    //    if (xmlhttp.readyState == 4) { // Ответ пришёл
    //        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
    //
    //        }
    //    }
    //};


};

function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("MSXML2.XMLHTTP.3.0");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}
