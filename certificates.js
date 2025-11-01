var app = angular.module("certificateApp", []);

app.controller("CertController", function ($scope) {
  $scope.certificates = [
    { title: "Web Development Certificate", image: "cert1.jpeg" },
    { title: "AngularJS Advanced Certificate", image: "cert2.jpeg" }
  ];

  $scope.showModal = false;
  $scope.selectedCert = "";

  $scope.openCertificate = function (image) {
    $scope.selectedCert = image;
    $scope.showModal = true;
  };

  $scope.closeModal = function () {
    $scope.showModal = false;
  };
});
