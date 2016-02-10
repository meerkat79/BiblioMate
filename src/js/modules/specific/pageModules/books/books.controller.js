var app;
(function (app) {
    'use strict';
    var BookController = (function () {
        function BookController($routeParams, dataService) {
            var _this = this;
            this.books = null;
            this.books = $routeParams.books;
            dataService.getBooks()
                .then(function (books) {
                _this.books = books;
            });
        }
        BookController.$inject = ['$routeParams', 'app.dataService'];
        return BookController;
    })();
    angular.module('app')
        .controller('app.BookController', BookController);
})(app || (app = {}));

//# sourceMappingURL=books.controller.js.map
