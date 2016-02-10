var app;
(function (app) {
    var DataService = (function () {
        function DataService($http) {
            this.$http = $http;
        }
        DataService.prototype.getCustomers = function () {
            return this.$http.get('data/customers.json').then(function (response) {
                return response.data;
            });
        };
        DataService.prototype.getBooks = function () {
            return this.$http.get('data/books.json').then(function (response) {
                return response.data;
            });
        };
        DataService.prototype.getOrder = function (id) {
            return this.$http.get('data/orders.json', { data: { id: id } }).then(function (response) {
                return response.data;
            });
        };
        DataService.$inject = ['$http'];
        return DataService;
    })();
    app.DataService = DataService;
    angular.module('app')
        .service('app.dataService', DataService);
})(app || (app = {}));

//# sourceMappingURL=data.service.js.map
