import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {id: 1, name: "S21", price: 20000},
        {id: 2, name: "S26", price: 60000},
        {id: 3, name: "S22", price: 40000}
    ];
    getAllProducts(){
        return this.products;
    }
    getProductById(id: number){
        return this.products.find((product)=> product.id === id);
    }
}
