module app {
    'use strict';

    class CustomersController {
        customers: ICustomer[] = null;

        static $inject = ['app.dataService'];
        constructor(dataService: DataService) {
            dataService.getCustomers()
              .then((custs: ICustomer[]) => {
                 this.customers = custs;
              });
        }
    }

    angular.module('app')
           .controller('app.CustomersController', CustomersController);

}
