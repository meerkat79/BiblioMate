module app {

    export interface ICustomer {
        id: number;
        name: string;
        total: number;
    }

    export interface IBook{
        book: string;
        author: string;
    }

    export interface IOrder {
        product: string;
        total: number;
    }

    export class DataService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        getCustomers(): ng.IPromise<ICustomer[]> {
            return this.$http.get('data/customers.json').then(response => {
                return response.data;
            });
        }
        getBooks(): ng.IPromise<IBook[]> {
            return this.$http.get('data/books.json').then(response => {
                return response.data;
            });
        }
        getOrder(id: number): ng.IPromise<IOrder[]> {
            return this.$http.get('data/orders.json', {data: { id: id }}).then(response => {
               return response.data;
            });
        }

    }

    angular.module('app')
        .service('app.dataService', DataService);

}
