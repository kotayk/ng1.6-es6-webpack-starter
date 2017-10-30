import angular from 'angular';

import HelloWorldComponent from './hello-world.component';
import { HelloWorldService } from './hello-world.service';

import './hello-world.scss';

const helloWorld = angular
    .module('helloWorld', [])
    .service('HelloWorldService', HelloWorldService)
    .component('helloWorld', HelloWorldComponent)
    .config(($stateProvider) => {
        $stateProvider.state('hello-world', {
            url: '/hello-world',
            component: 'helloWorld',
        });
    })
    .name;

export default helloWorld;
