import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { ProductEffects } from "./state";

TestBed.configureCompiler({
    providers: [
        ProductEffects,
        provideMockStore
    ]
})