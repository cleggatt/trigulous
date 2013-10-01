'use strict';

angular.module('trigulous.controllers', []).
controller('CalcCtrl', ['$scope', function ($scope) {

    var extractNumber = function(field, value, errors) {
        if (value) {
            var parsed = parseFloat(value);
            if (isNaN(parsed)) {
                errors[field] = true;
            }
            return parsed;
        } else {
            return undefined;
        }
    }

    var formatFloat = function(value) {
        return value.toFixed(6);
    }

    $scope.inputChanged = function() {

        $scope.errors = {};
        $scope.decimal = "";
        $scope.sine = "";
        $scope.cosine = "";
        $scope.secant = "";

        var degrees = extractNumber('degrees', $scope.degrees, $scope.errors);
        var minutes = extractNumber('minutes', $scope.minutes, $scope.errors);
        var seconds = extractNumber('seconds', $scope.seconds, $scope.errors);
        var distance = extractNumber('distance', $scope.distance, $scope.errors);

        var enteredValues = [degrees, minutes, seconds, distance];
        if (!_.every(enteredValues, _.isFinite)) {
            return;
        }

        var decimal = degrees + (minutes / 60) + (seconds / 3600);

        $scope.decimal = formatFloat(decimal);

        $scope.sine = formatFloat(Math.sin(decimal * Math.PI / 180) * distance);
        $scope.cosine = formatFloat(Math.cos(decimal * Math.PI /180)* distance);
        $scope.secant = formatFloat((1 / Math.cos(decimal * Math.PI /180 )) * distance);
    }
}]);