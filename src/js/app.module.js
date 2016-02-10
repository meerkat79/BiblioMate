(function () {
    var app = angular.module('app', ['ngRoute', 'ngAnimate']);
    app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                templateUrl: 'app/modules/specific/routes/home/templates/main.html',
            })
                .when('/harvard', {
                controller: '',
                templateUrl: 'app/modules/specific/routes/harvard/templates/harvard.html',
                controllerAs: 'vm'
            })
                .when('/mla', {
                controller: '',
                templateUrl: 'app/modules/specific/routes/mla/templates/mla.html',
                controllerAs: 'vm'
            })
                .when('/apa', {
                controller: '',
                templateUrl: 'app/modules/specific/routes/apa/templates/apa.html',
                controllerAs: 'vm'
            })
                .when('/vancouver', {
                controller: '',
                templateUrl: 'app/modules/specific/routes/vancouver/templates/vancouver.html',
                controllerAs: 'vm'
            })
                .when('/turabian', {
                controller: '',
                templateUrl: 'app/modules/specific/routes/turabian/templates/turabian.html',
                controllerAs: 'vm'
            })
                .when('/customers', {
                controller: 'app.CustomersController',
                templateUrl: 'app/modules/specific/routes/customers/templates/customers.html',
                controllerAs: 'vm'
            })
                .when('/orders/:customerId', {
                controller: 'app.OrdersController',
                templateUrl: 'app/modules/specific/routes/orders/templates/orders.html',
                controllerAs: 'vm'
            })
                .otherwise({
                template: '<div>Oops this page does not exist, please check your entry again.</div>'
            });
        }]);
})();

//# sourceMappingURL=app.module.js.map
