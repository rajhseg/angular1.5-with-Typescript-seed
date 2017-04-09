var app;
(function (app) {
    var directives;
    (function (directives) {
        var buttonController = (function () {
            function buttonController() {
                this.getname = function () {
                    return "Rajesh";
                };
                this.count = 10;
            }
            return buttonController;
        }());
        var SimpleDirective = (function () {
            function SimpleDirective($log, logfactory) {
                var _this = this;
                this.$log = $log;
                this.logfactory = logfactory;
                this.controller = buttonController;
                this.controllerAs = 'ctrl';
                this.template = '<button>{{name}}</button>';
                this.restrict = 'E';
                this.scope = {
                    name: '='
                };
                this.link = function (scope, elem, attr, ctrl) {
                    _this.logfactory.writeWarn(ctrl.getname());
                    _this.logfactory.writeWarn(scope.name);
                    _this.logfactory.writeError(ctrl.count.toString());
                    scope.count = ctrl.count;
                };
            }
            SimpleDirective.factory = function () {
                var directive = function ($log, logfactory) { return new SimpleDirective($log, logfactory); };
                directive.$inject = ['$log', 'logfactory'];
                return directive;
            };
            return SimpleDirective;
        }());
        angular.module('myapp').directive('simpleButton', SimpleDirective.factory());
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
//# sourceMappingURL=app.directives.js.map