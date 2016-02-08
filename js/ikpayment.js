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