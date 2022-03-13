import { Shirt } from "../interfaces/interfaces";
export const shirtsURL = "http://localhost:3000/shirts";
export const emptyCart = {
    cart: [] as Shirt[],
    quantity: 0,
    price: 0
};
export const emptyShirt = {
    '_id': "",
    'id': 0,
    'colour': "",
    'picture': "",
    'price': 0,
    'size': "",
    'name': "",
    'quantity': 0
}
