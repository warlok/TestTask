(function(){
    var app = angular.module('app-directives', []);

    app.directive("companyLogo", function() {
     return {
         restrict: 'E',
         templateUrl: "company-logo.html"
       };
    });

    app.directive("companyBenefits", function() {
        return {
            restrict: 'E',
            templateUrl: "company-benefits.html"
        };
    });

    app.directive("companyRating", function() {
        return {
            restrict: 'E',
            templateUrl: "company-rating.html"
        };
    });

    app.directive("companyDescription", function() {
        return {
            restrict: 'E',
            templateUrl: "company-description.html"
        };
    });

})();
