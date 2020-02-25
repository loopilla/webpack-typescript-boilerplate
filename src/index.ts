import './styles';

export class App {
    title = 'Hello world';

    constructor() {
        this.print();
    }

    print = (msg?: string) => {
        console.log(msg ? msg : this.title);
    }
}

export default new App();
