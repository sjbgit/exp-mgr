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
