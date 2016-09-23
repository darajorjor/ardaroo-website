ARD.controller("IntlController", function ($scope, $http) {

    var lang = $("html").attr("lang");

    $http.get('lang/'+lang+'.json')
        .then(function(res){
            $scope.intl = res.data;
        })
});