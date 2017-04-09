module app.logfactory {

    export interface ILOGFactory {
        writeWarn(value: string): void;
        writeError(value: string): void;
    }


    class LogFactory implements ILOGFactory {

        constructor(private $log: ng.ILogService) {

        }

        writeWarn = (value: string): void => {
            this.$log.warn(value);
        }

        writeError = (value: string): void => {
            this.$log.error(value);
        }

    }


    function Factory($log: ng.ILogService) {
        return new LogFactory($log);
    }

    Factory.$inject = ['$log'];

    angular.module('myapp').factory('logfactory', Factory);

}