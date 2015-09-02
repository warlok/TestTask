(function() {
    var app = angular.module('powerComparator', []);

    app.controller('ComparatorController', [ '$http', function($http){
        var comparator = this;
        comparator.companies=[];
        $http.get('data.json').success(function(data) {
            comparator.companies=data.companies;
        });
    }]);

    //app.controller('ReviewController', function() {
    //    this.review = {};
    //
    //    this.addReview = function(product) {
    //        product.reviews.push(this.review);
    //
    //        this.review = {};
    //    };
    //});
})();