var app;
(function (app) {
    var directives;
    (function (directives) {
        var StarController = (function () {
            function StarController($scope) {
                var _this = this;
                this.$scope = $scope;
                this.updateStars = function () {
                    _this.$scope.stars = [];
                    for (var i = 0; i < _this.$scope.max; i++) {
                        _this.$scope.stars.push({ filled: i < _this.$scope.ratingValue });
                    }
                };
            }
            StarController.prototype.getData = function () {
                console.log('scope');
                console.log(this.$scope);
            };
            return StarController;
        }());
        StarController.$inject = ['$scope'];
        var StarDirective = (function () {
            function StarDirective(logfactory) {
                var _this = this;
                this.logfactory = logfactory;
                this.controller = StarController;
                this.restrict = 'EA';
                this.template = '<ul class="rating">' +
                    '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                    '\u2605' +
                    '</li>' +
                    '</ul>';
                this.scope = {
                    ratingValue: '=',
                    max: '=',
                    readonly: '@',
                    starSize: '=',
                    onRatingChanged: '&'
                };
                this.link = function (scope, elem, attr, ctrl) {
                    var logging = _this.logfactory;
                    elem.css('font-size', scope.starSize + 'px');
                    scope.toggle = function (index) {
                        if (scope.readonly && scope.readonly === 'true') {
                            return;
                        }
                        scope.ratingValue = index + 1;
                        scope.onRatingChanged({ rating: index + 1 });
                        logging.writeWarn({ rating: index + 1 }.rating.toString());
                    };
                    scope.$watch('ratingValue', function (oldval, newval) {
                        if (newval) {
                            ctrl.updateStars();
                        }
                    });
                };
            }
            StarDirective.factory = function () {
                var directive = function (logfactory) { return new StarDirective(logfactory); };
                directive.$inject = ['logfactory'];
                return directive;
            };
            return StarDirective;
        }());
        angular.module('myapp').directive('starRating', StarDirective.factory());
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
//# sourceMappingURL=star.directive.js.map