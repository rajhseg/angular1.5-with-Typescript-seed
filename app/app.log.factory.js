var app;
(function (app) {
    var logfactory;
    (function (logfactory) {
        var LogFactory = (function () {
            function LogFactory($log) {
                var _this = this;
                this.$log = $log;
                this.writeWarn = function (value) {
                    _this.$log.warn(value);
                };
                this.writeError = function (value) {
                    _this.$log.error(value);
                };
            }
            return LogFactory;
        }());
        function Factory($log) {
            return new LogFactory($log);
        }
        Factory.$inject = ['$log'];
        angular.module('myapp').factory('logfactory', Factory);
    })(logfactory = app.logfactory || (app.logfactory = {}));
})(app || (app = {}));
//# sourceMappingURL=app.log.factory.js.map