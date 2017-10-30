/**
 * Import the polyfills and vendor files
 */
import angular from 'angular';
import UiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';
import Components from './components';
import './polyfills';
import './vendor';


/**
 * Import the global styles
 */
import '../static/style/includes.scss';

const app = angular
    .module('app', [
        UiRouter,
        Components,
    ])
    .component('app', AppComponent)
    .config(($locationProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });
        $urlRouterProvider.otherwise('/hello-world');
    })
    .name;

export default app;

