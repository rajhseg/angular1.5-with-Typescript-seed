module app.directives {

    export interface IButtonController {
        getname(): string;
        count: number;
    }

    export interface IButtonScope extends ng.IScope {
        name: string;
        count: number;
    }

    class buttonController implements IButtonController {
        getname = (): string => {
            return "Rajesh";
        }
        public count: number;

        constructor() {
            this.count = 10;
        }
    }

    class SimpleDirective implements ng.IDirective {

        constructor(private $log: ng.ILogService, private logfactory: app.logfactory.ILOGFactory) {

        }

        public controller: any = buttonController;
        public controllerAs: string = 'ctrl';
        public template: string = '<button>{{name}}</button>';
        public restrict: string = 'E';
        public scope: any = {
            name: '='
        }
        public link: ng.IDirectiveLinkFn = (scope: app.directives.IButtonScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: IButtonController) => {
            this.logfactory.writeWarn(ctrl.getname());
            this.logfactory.writeWarn(scope.name);
            this.logfactory.writeError(ctrl.count.toString());
            scope.count = ctrl.count;
        }
    
        public static factory(): ng.IDirectiveFactory {

            let directive: ng.IDirectiveFactory = ($log: ng.ILogService, logfactory: app.logfactory.ILOGFactory) => new SimpleDirective($log,logfactory);
            directive.$inject = ['$log','logfactory'];
            return directive;
        }        
    }



    angular.module('myapp').directive('simpleButton', SimpleDirective.factory());

}