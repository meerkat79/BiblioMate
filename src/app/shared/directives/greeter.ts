import app = require('app');


app.directive('TimeGreeter', function($timeout){
    console.log('time directive has fired');
    // return{
    //     restrict:   'A',
    //     link:       function(scope, element){
    //         class Greeter {
    //             element: HTMLElement;
    //             span: HTMLElement;
    //             timerToken: number;

    //             constructor(element: HTMLElement) {
    //                 this.element = element;
    //                 this.element.innerHTML += "The date is: ";
    //                 this.span = document.createElement('span');
    //                 this.element.appendChild(this.span);
    //                 this.span.innerText = new Date().toUTCString();
    //             }

    //             start() {
    //                 this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    //             }

    //             stop() {
    //                 clearTimeout(this.timerToken);
    //             }

    //         }

    //         window.onload = () => {
    //             var el = document.getElementById('timestamp');
    //             var greeter = new Greeter(el);
    //             greeter.start();
    //         };
    //     }
    // }
});
