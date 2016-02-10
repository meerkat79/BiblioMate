var app;
(function (app) {
    'use strict';
    var CustomersController = (function () {
        function CustomersController(dataService) {
            var _this = this;
            this.customers = null;
            dataService.getCustomers()
                .then(function (custs) {
                _this.customers = custs;
            });
        }
        CustomersController.$inject = ['app.dataService'];
        return CustomersController;
    })();
    angular.module('app')
        .controller('app.CustomersController', CustomersController);
})(app || (app = {}));

//# sourceMappingURL=customers.controller.js.map
