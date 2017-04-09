module app.directives {

    export interface IStarController {
        getData(): void;
        updateStars(): void;
    }

    export interface IStarScope extends ng.IScope {
        toggle(index: number): void;
        readonly: string;
        ratingValue: number;
        onRatingChanged(input: Object): void;
        stars: any[];
        max: number;
        starSize: number;
    }

    class StarController implements IStarController {

        static $inject = ['$scope'];

        constructor(private $scope: IStarScope) {
                   
        }

        public getData() {
            console.log('scope'); 
            console.log(this.$scope);
        }

        updateStars = (): void => {
            this.$scope.stars = [];
            for (var i = 0; i < this.$scope.max; i++) {
                this.$scope.stars.push({ filled: i < this.$scope.ratingValue });
            }
        }


    }

    class StarDirective implements ng.IDirective {

        constructor(private logfactory: app.logfactory.ILOGFactory) {

        }

        public controller:any= StarController;
        public restrict: string = 'EA';
        public template: string = '<ul class="rating">' +
                                    '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
                                          '\u2605' +
                                    '</li>' +
                                  '</ul>';
        public scope: any = {
            ratingValue: '=',
            max: '=',
            readonly: '@',
            starSize: '=',
            onRatingChanged: '&'
        }
        public link: ng.IDirectiveLinkFn = (scope: app.directives.IStarScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: app.directives.IStarController) => {


            let logging = this.logfactory;

            elem.css('font-size', scope.starSize+'px');

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
            })           

        }

        public static factory(): ng.IDirectiveFactory {
            let directive: ng.IDirectiveFactory = (logfactory: app.logfactory.ILOGFactory) => new StarDirective(logfactory);
            directive.$inject = ['logfactory'];
            return directive;
        }

    }

    angular.module('myapp').directive('starRating', StarDirective.factory());
}