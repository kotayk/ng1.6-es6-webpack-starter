import { HelloWorldController as controller } from './hello-world.controller';

const helloWorldComponent = {
    controller,
    template: `
        greeting from Typescript component: <div class="greeting"> {{$ctrl.hello}}</div>
      `,
};

export default helloWorldComponent;
