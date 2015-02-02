'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope', function ($scope) {

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {

    }])

    .controller('HomeCtrl', ['$scope', function ($scope) {
        $scope.info = 'test';
    }])

    .controller('NavigationCtrl',['$scope' ,'$location',function($scope,$location){
        var navigator = function(incrementer) {
            var pages = ['/', '/add-expense', '/view-summary'];
            $scope.slidingDirection = (incrementer === 1) ? 'slide-right' : 'slide-left';
            var nextUrl = "";
            var currentPage = $location.path();
            var lastPageIndex = pages.length - 1;
            var pageIndex = pages.indexOf(currentPage);
            var direction = pageIndex + incrementer;
            if (direction === -1) direction = lastPageIndex;
            if (direction > lastPageIndex) direction = 0;
            nextUrl = pages[direction];
            $location.url(nextUrl);
        };

        $scope.goLeft = function() {
            navigator(-1);
        };
        $scope.goRight = function() {
            navigator(1);
        };

    }])

    .controller('AddExpenseCtrl', ['$scope', 'categoryList', 'expService', function ($scope, categoryList, expService) {
        $scope.info = 'ex';
        $scope.categories = categoryList;

        $scope.submit = function () {
            expService.saveExpense($scope.expense);
        };
    }])

    .controller('ViewSummaryCtrl', ['$scope', 'categoryList', 'expService', function ($scope, categoryList, expService) {
        $scope.info = 'test';

        $scope.summaryData = [];

        var categories = categoryList;

        //console.table(categories);

        var categories = categoryList
        categories
            .forEach(function (item) {
                var catTotal = expService.getCategoryTotal(item);

                $scope.summaryData.push({
                    category: item,
                    amount: catTotal
                });

            });

        /*
         categories
         .forEach(function (item) {
         var catTotal = expService.getCategoryTotal(item);

         $scope.summaryData.push({
         category: item,
         amount: catTotal
         });

         });

         */

        $scope.expenses = expService.getExpense();

    }])

;
