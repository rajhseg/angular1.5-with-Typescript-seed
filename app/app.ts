/// <reference path="../node_modules/@types/angular/index.d.ts" />


module mymod{
    class MyController{

        private name: string;
        private sample: string;
        private title: string;
        private rating2: number;

        static $inject = ['$log']

        constructor(private $log: angular.ILogService){
            this.title = "Star Control Directive";
            this.name = 'rajesh1';
            this.sample = 'raise';
            this.rating2 = 4;
        }

        save = (rating: any): void => {
            console.log('rating changed');
            console.log(rating);
        };


        dosomething = (): void => {
            window.setTimeout(3, () => { this.$log.warn('do something'); });
            
        }

    }
    var myApp= angular.module('myapp',[]);
    myApp.controller('mycontroller',MyController);
}