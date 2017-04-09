/// <reference path="../node_modules/@types/angular/index.d.ts" />
var mymod;
/// <reference path="../node_modules/@types/angular/index.d.ts" />
(function (mymod) {
    var MyController = (function () {
        function MyController($log) {
            var _this = this;
            this.$log = $log;
            this.save = function (rating) {
                console.log('rating changed');
                console.log(rating);
            };
            this.dosomething = function () {
                window.setTimeout(3, function () { _this.$log.warn('do something'); });
            };
            this.title = "Star Control Directive";
            this.name = 'rajesh1';
            this.sample = 'raise';
            this.rating2 = 4;
        }
        return MyController;
    }());
    MyController.$inject = ['$log'];
    var myApp = angular.module('myapp', []);
    myApp.controller('mycontroller', MyController);
})(mymod || (mymod = {}));
//# sourceMappingURL=app.js.map