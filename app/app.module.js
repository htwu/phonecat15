angular.module('phonecatApp', [
  'ngRoute',
  'core',
  'phoneList',
  'phoneDetail'
]);

// var phonecatApp = angular.module('phonecatApp', []);

// phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
//   $scope.name = 'world';
//   $scope.phones = [
//     {
//       name: 'Nexus S',
//       snippet: 'Fast just got faster with Nexus S.'
//     }, {
//       name: 'Motorola XOOM™ with Wi-Fi',
//       snippet: 'The Next, Next Generation tablet.'
//     }, {
//       name: 'MOTOROLA XOOM™',
//       snippet: 'The Next, Next Generation tablet.'
//     }
//   ];
// });