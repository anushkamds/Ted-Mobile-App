angular.module('starter.services', [])
    .constant("host", "http://192.168.123.111/")
    // .constant("host", "")

.factory("Courier", function($http, $ionicLoading, host) {
    var addDeliveryURL = host + "tadhack/api/index.php";
    return {
        linktest: function() {
            return $http(addDeliveryURL).then(function(response) {
                alert(response);
            }).catch(function(response) {
                alert("error" + response);
            });
        }
    }
});
