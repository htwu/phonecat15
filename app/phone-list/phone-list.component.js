// angular.module('phoneList')
  // .component('phoneList', {
  //   templateUrl: 'phone-list/phone-list.template.html',
  //   controller: function PhoneListController($http) {
  //     PhoneListController.$inject = ['$http'];
  //     var self = this;
  //     this.orderProp = 'age';

  //     $http.get('phones/phones.json').then(function(response) {
  //       self.phones = response.data;//.slice(0, 5);
  //     });
  //   }
  // });
angular.module('phoneList')
  .component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController(Phone) {
      PhoneListController.$inject = ['Phone'];
      this.phones = Phone.query();
      this.orderProp = 'age';
    }
  });