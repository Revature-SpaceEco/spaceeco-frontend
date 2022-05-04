import { initialState } from "./state/cart-checkout.state";
import * as fromReducer from './state/cart-checkout.reducers';
import { Product } from "src/app/models/Product";
import { EntityState } from "@ngrx/entity";
import { addItemToCart, clearCart, removeFromCart } from "./state/cart-checkout.actions";

describe('CartReducer', () => {
    let product: Product;
    let product2: Product;

    beforeEach(() => {
        product = {
            id: 1,
            name: "name",
            description: "string",
            cost: 1.50,
            categories: {
                id: 2,
                name: "category name"
            },
            image: "www.image.com",
            seller: {
                id: 1,
                username: "username",
                email: "email",
                firstName: "first Name",
                active: true,
            },
        };
        product2 = {
            id: 2,
            name: "name",
            description: "string",
            cost: 1.50,
            categories: {
                id: 2,
                name: "category name"
            },
            image: "www.image.com",
            seller: {
                id: 1,
                username: "username",
                email: "email",
                firstName: "first Name",
                active: true,
            },
        };
    });

    describe('initial state', () => {
        it('should return the initial state', () => {

            const action = {
                type: 'Unknown'
            };

            const state = fromReducer.cartReducer(initialState, action)

            expect(state).toBe(initialState);
        })
    });

    describe('clearCart action', () => {
        it('should clear all products from cart', () => {

            const currentState: EntityState<Product> = {
                ids: [1],
                entities: {
                    [1]: product,
                }
            }

            const action = clearCart();
            const state = fromReducer.cartReducer(currentState, action);

            expect(state).toEqual(initialState);
            expect(state).not.toBe(currentState);
        })
    });

    describe('addItemToCart action', () => {
        it('should add the product to cart', () => {
            const expectedState: EntityState<Product> = {
                ids: [1],
                entities: {
                    [1]: product,
                }
            }

            const action = addItemToCart({ item: product });
            const state = fromReducer.cartReducer(initialState, action);

            expect(state).toEqual(expectedState);
            expect(state).not.toBe(initialState);
        })
    });

    describe('removeFromCart action', () => {
        it('should remove the selected product from the cart', () => {
            const currentState: EntityState<Product> = {
                ids: [1, 2],
                entities: {
                    [1]: product,
                    [2]: product2,
                }
            }

            const expectedState: EntityState<Product> = {
                ids: [2],
                entities: {
                    [2]: product2,
                }
            }

            const action = removeFromCart({ item: product });
            const state = fromReducer.cartReducer(currentState, action);

            expect(state).toEqual(expectedState);
            expect(state).not.toBe(initialState);

        })
    })
})