angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.aPictures = [{ url: "image1.jpg", author: "Ângela Antunes" },
                        { url: "image2.jpg", author: "Jelene Morris"}];
    $scope.nextPicture = function () {
        $scope.n = $scope.n + 1;
        if ($scope.n >= $scope.aPictures.length) $scope.n = 0;
        $scope.currentPicture = $scope.aPictures[$scope.n].url;
        
    };
    $scope.n = -1;
    $scope.nextPicture();
});