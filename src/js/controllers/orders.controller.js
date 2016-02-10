var app;
(function (app) {
    var OrdersController = (function () {
        function OrdersController($routeParams, dataService) {
            var _this = this;
            this.customerId = $routeParams.customerId;
            dataService.getOrder(this.customerId)
                .then(function (orders) {
                _this.orders = orders;
            });
        }
        OrdersController.$inject = ['$routeParams', 'app.dataService'];
        return OrdersController;
    })();
    angular.module('app')
        .controller('app.OrdersController', OrdersController);
})(app || (app = {}));

//# sourceMappingURL=orders.controller.js.map
