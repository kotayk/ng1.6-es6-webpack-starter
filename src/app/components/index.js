import angular from 'angular';
import HelloWorld from './hello-world';

const components = angular
    .module('app.components', [
        HelloWorld,
    ])
    .name;

export default components;

