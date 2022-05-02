import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { SnackbarService } from "../../snackbar/snackbar.service";
import { ProductService } from "../product.service";

import * as fromActions from './product.actions';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private snackbarService: SnackbarService,
    )
    {}

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.loadProducts),
            mergeMap(() =>
                this.productService.getAllProducts().pipe(
                    map(data => fromActions.loadProductsSuccess({ catalogue: data })),
                    catchError(() => of(fromActions.loadProductsFail({ message: "Failed to load products from API" })))
                )
            )
        )
    );

    loadProductsFail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.loadProductsFail),
            tap(error =>
                this.snackbarService.error(error.message)
            )
        ),
        {dispatch: false }
    );
}
