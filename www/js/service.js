angular.module('starter.services', [])
    // .constant("host", "http://52.74.176.169/")
    .constant("host", "")

.factory("Courier", function($http, $ionicLoading, host) {
    var getDeliveryListURL = host + "/application/tadhack/api/deliverylist.php";
    var getPickupListURL = host + "/application/tadhack/api/deliverylist.php";
    var updateLocationURL = host + "/application/tadhack/api/location.php";
    var addDeliveryURL = host + "/application/tadhack/api/serviceupdate.php";

    return {
        geolocation: function(data) {
            var updateLocationRequest = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data,
                url: updateLocationURL
            };

            return $http(updateLocationRequest).then(function(response) {
                return response.data;
            }).catch(function(response) {
                console.log(response);
            });
        },
        addNewDelivery: function(data) {
            var addNewDeliveryRequest = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data,
                url: addDeliveryURL
            };
            return $http(addNewDeliveryRequest).then(function(response) {
                return response.data;
            }).catch(function(err) {
                console.error(err);
            });
        },
        getDeliveryList: function() {
            var getDeliveryListRequest = {
                method: 'GET',
                headers: {},
                url: getDeliveryListURL
            };
            return $http(getDeliveryListRequest).then(function(response) {
                return response.data;
            }).catch(function(err) {
                console.error(err);
            });
        },
        getPickupList: function() {
            var getPickupListRequest = {
                method: 'GET',
                headers: {},
                url: getPickupListURL
            };
            return $http(getPickupListRequest).then(function(response) {
                return response.data;
            }).catch(function(err) {
                console.error(err);
            });
        }
    }
});
