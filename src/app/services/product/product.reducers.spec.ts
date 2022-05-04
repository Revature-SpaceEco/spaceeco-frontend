import { EntityState } from '@ngrx/entity';
import { Product } from 'src/app/models/Product';
import { loadProductsSuccess } from './state/product.actions';
import * as fromReducer from './state/product.reducers';
import { initialState } from './state/product.state';


describe('ProductReducer', () =>{
    describe('initial state', () => {
        it('should return the initial state', () => {
            
            const action = {
                type: 'Unknown'
            };

            const state = fromReducer.productReducer(initialState, action)

            expect(state).toBe(initialState);
        })
    });

    describe('loadProductsSuccess action', () =>{
        it('should retrieve all products', () => {
            const product = {
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
            const newState: EntityState<Product> = {
                ids: [1],
                entities: {
                [1]: product,
                }
            }
            
            const action = loadProductsSuccess({catalogue: [product]});
            const state = fromReducer.productReducer(initialState, action);

            expect(state).toEqual(newState);
            expect(state).not.toBe(newState);
        })
    })
});

