module app {

    class OrdersController {

        customerId: number;
        orders: IOrder[];

        static $inject = ['$routeParams', 'app.dataService'];        
        constructor($routeParams, dataService: DataService) {
            this.customerId = $routeParams.customerId;

            dataService.getOrder(this.customerId)
              .then((orders: IOrder[]) => {
                 this.orders = orders;
              });
        }
    }

    angular.module('app')
        .controller('app.OrdersController', OrdersController);

}
