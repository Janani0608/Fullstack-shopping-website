import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';



export interface Shirt{
    '_id': String,
    'id': number,
    'colour': String,
    'picture': String,
    'price': number,
    'size': String,
    'name': String,
    'quantity': number
}

@Injectable()
export class ShirtsService {
    
    private cart = new BehaviorSubject<Shirt[]>([]);
    readonly cartObservable = this.cart.asObservable();

    private currentCart: Shirt[] = [];
    
    private totalQuantity = new BehaviorSubject<number>(0);
    readonly total = this.totalQuantity.asObservable();

    private currentQuantity: number = 0;

    private showModal = new BehaviorSubject<number>(0);
    readonly show = this.showModal.asObservable();

    private display: number = 0;

    private priceObservable = new BehaviorSubject<number>(0);
    readonly totalPrice = this.priceObservable.asObservable();

    private currentPrice: number = 0;

    private shirtsUrl:string = "http://localhost:3000/shirts"

    constructor(private http: HttpClient) { }

    showCart() {
        this.display = 1;
        this.showModal.next(this.display)
    }

    hideCart() {
        this.display = 0;
        this.showModal.next(this.display);
    }

    getTotal() {
        return this.currentQuantity;
    }

    addToCart(item: Shirt) {
        let add = 1;
        if (this.currentCart.length === 0){
            add = 1
        }
        else{
            this.currentCart.forEach((shirt) => {
                if (item.id === shirt.id) {
                    let index = this.currentCart.indexOf(item);
                    this.currentCart[index].quantity += 1;
                    add = 0;
                }
            });
        }
        if (add === 1) {
            this.currentCart.push(item);
        }
        this.cart.next(Object.assign([], this.currentCart));
        this.currentQuantity +=  1;
        this.totalQuantity.next(this.currentQuantity)
        this.currentPrice += item.price;
        this.priceObservable.next(this.currentPrice);
    }

    removeFromCart(item: Shirt) {
        this.currentCart.forEach((s, i) => {
            if (s.id === item.id) {
                if (item.quantity === 1) {
                    this.currentCart.splice(i, 1);
                }
                else {
                    let index = this.currentCart.indexOf(item);
                    this.currentCart[index].quantity -= 1;
                }
              
            }
            this.cart.next(Object.assign([], this.currentCart));
          });
        this.currentQuantity -=  1;
        this.totalQuantity.next(this.currentQuantity)
        this.currentPrice -= item.price;
        this.priceObservable.next(this.currentPrice);
    }


    getShirts():Observable<Shirt[]> {
       return (this.http.get<Shirt[]>(this.shirtsUrl))
       /*return [{"_id":"6221ff2fb36779c79af2f2b3","id":0,"price":88,"picture":"./assets/shirt1.jpeg","colour":"brown","size":"m","name":"Southview Clarke","quantity":1},{"_id":"62220c19b36779c79af2f2b4","id":14,"price":30,"picture":"./assets/shirt15.jpeg","colour":"purple","size":"m","name":"Hayes Hanson","quantity":1},{"_id":"62220c27b36779c79af2f2b5","id":13,"price":60,"picture":"./assets/shirt14.jpeg","colour":"purple","size":"s","name":"Indian Terrain","quantity":1},{"_id":"62220c2fb36779c79af2f2b6","id":12,"price":95,"picture":"./assets/shirt13.jpeg","colour":"orange","size":"XL","name":"US Polo","quantity":1},{"_id":"62220c37b36779c79af2f2b7","id":11,"price":30,"picture":"./assets/shirt12.jpeg","colour":"white","size":"m","name":"Indian Terrain","quantity":1},{"_id":"62220c40b36779c79af2f2b8","id":10,"price":55,"picture":"./assets/shirt11.jpeg","colour":"black","size":"s","name":"Southview Clarke","quantity":1},{"_id":"62220c48b36779c79af2f2b9","id":9,"price":35,"picture":"./assets/shirt10.jpeg","colour":"blue","size":"l","name":"Peter England","quantity":1},{"_id":"62220c50b36779c79af2f2ba","id":8,"price":20,"picture":"./assets/shirt9.jpeg","colour":"green","size":"s","name":"H and M","quantity":1},{"_id":"62220c58b36779c79af2f2bb","id":7,"price":50,"picture":"./assets/shirt8.jpeg","colour":"yellow","size":"m","name":"New Yorker","quantity":1},{"_id":"62220c63b36779c79af2f2bc","id":6,"price":60,"picture":"./assets/shirt7.jpeg","colour":"pink","size":"s","name":"Baker Powell","quantity":1},{"_id":"62220c73b36779c79af2f2bd","id":5,"price":65,"picture":"./assets/shirt6.jpeg","colour":"red","size":"l","name":"US Polo","quantity":1},{"_id":"62220c7eb36779c79af2f2be","id":4,"price":30,"picture":"./assets/shirt5.jpeg","colour":"red","size":"l","name":"Peter England","quantity":1},{"_id":"62220c98b36779c79af2f2bf","id":3,"price":75,"picture":"./assets/shirt4.jpeg","colour":"green","size":"XL","name":"Indian Terrain","quantity":1},{"_id":"62220cbfb36779c79af2f2c0","id":2,"price":40,"picture":"./assets/shirt3.jpeg","colour":"blue","size":"s","name":"Barronett Higgins","quantity":1},{"_id":"62220cccb36779c79af2f2c1","id":1,"price":88,"picture":"./assets/shirt2.jpeg","colour":"brown","size":"m","name":"Barronett Higgins","quantity":1}];*/
        
    }
}
