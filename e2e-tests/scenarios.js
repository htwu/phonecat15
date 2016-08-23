'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function () {


  describe('phoneList', function () {

    beforeEach(function () {
      browser.get('index.html');
    });

    it('should redirect `index.html` to `index.html#/phones`', function () {
      browser.get('index.html#/phones');
      expect(browser.getLocationAbsUrl()).toBe('/phones');
    });

    it('should filter the phone list as a user types into the search box', function () {
      var phoneList = element.all(by.repeater('phone in $ctrl.phone'));
      var query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(20);

      query.sendKeys('nexus');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(phoneList.count()).toBe(8);
    });


    it('should be possible to control phone order via the drop-down menu', function () {
      var queryField = element(by.model('$ctrl.query'));
      var orderSelect = element(by.model('$ctrl.orderProp'));
      var nameOption = orderSelect.element(by.css('option[value="name"]'));
      var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phone').column('phone.name'));

      function getNames() {
        return phoneNameColumn.map(function (elem) {
          return elem.getText();
        });
      }

      queryField.sendKeys('tablet');

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122'
      ]);

      nameOption.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi'
      ]);
    });

    it('shuold render phone specific links', function () {
      var query = element(by.model('$ctrl.query'));
      query.sendKeys('nexus');
      element.all(by.css('.phones li a')).first().click();

      expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
    });
  });


  describe('View: Phone list', function () {

    beforeEach(function () {
      browser.get('iindex.html#/phones');
    });

  });


  describe('View: Phone details', function () {

    beforeEach(function () {
      browser.get('index.html#/phones/nexus-s');
    });


    it('should display the `nexus-s` page', function () {
      expect(element(by.binding('$ctrl.phone.name')).getText()).toBe('Nexus S');
    });

    it('should display 4 thumbnails images on the `nexus-s` detail page', function () {
      expect(element.all(by.repeater('img in $ctrl.phone.images')).count()).toBe(4);

    });

    
    it('should display the first phone images as the main phone image', function() {
      var mainImage = element(by.css('img.phone'));
      expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
    });
      
      
      it('should swap the main image when cliking on a thumbnail image', function() {
        var mainImage = element(by.css('img.phone'));
        var thumbnails = element.all(by.css('.phone-thumbs img'));

        thumbnails.get(2).click();
        expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);
          
        thumbnails.get(0).click();
        expect(mainImage.getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
          
      });
        

  });

});
