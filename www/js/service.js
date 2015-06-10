angular.module('starter.services', [])
    // .constant("host", "http://192.168.123.168/")
    .constant("host", "")

.factory("Courier", function($http, $ionicLoading, host) {
    var addDeliveryURL = host + "/application/tadhack/api/index.php";
    var candidateUpdateRequest = {
        method: 'GET',
        url: addDeliveryURL,
        headers: {}
    };
    return {
        linktest: function() {
            return $http(candidateUpdateRequest).then(function(response) {
                console.log(response);
            }).catch(function(response) {
                console.log(response);
            });
        }
    }
});
