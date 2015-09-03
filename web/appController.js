(function() {
    var app = angular.module('powerComparator', ['app-directives']);

    app.controller('ComparatorController', [ '$http', function($http){
        var comparator = this;
        comparator.companies=[];
        this.redirect = function() {
            $window.open('https://www.google.com','_blank');
        };
        $http.get('data.json').success(function(data) {
            comparator.companies=data.companies;
        });
    }]);

    app.controller('redirectController', ['$scope','$window', function($scope,$window) {
        $scope.redirect = function(URL) {
            $window.open(URL,'_self');
        };
    }]);
    //app.controller('redirectController', function(){
    //    this.go = function(URL) {
    //        $document.
    //    }
    //
    //
    //});

})();