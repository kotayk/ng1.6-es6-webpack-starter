export class HelloWorldController {
    constructor(HelloWorldService) {
        this.HelloWorldService = HelloWorldService;
    }

    $onInit() {
        this.hello = this.HelloWorldService.getHello();
    }
}

HelloWorldController.$inject = ['HelloWorldService'];

