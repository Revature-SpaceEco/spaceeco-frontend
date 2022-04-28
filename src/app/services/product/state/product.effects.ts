import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { ProductServiceService } from "../product-service.service";
import * as fromActions from './product.actions';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductServiceService,
        private snackbar: MatSnackBar
    )
    {}

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.loadProducts),
            mergeMap(() =>
                this.productService.getAllProducts().pipe(
                    map(data => fromActions.loadProductsSuccess({ catalogue: data })),
                    catchError(error => of(fromActions.loadProductsFail({ message: error.error })))
                )
            )
        )
    );

    loadProductsFail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.loadProductsFail),
            tap(error =>
                this.snackbar.open(error.message, 'Error', { duration: 2500 })
            )
        ),
        {dispatch: false }
    );
}
