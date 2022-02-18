import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../reducer';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, tap} from 'rxjs/operators';
import {loadAllCoffees} from './coffee.action';
import {areCoffeesLoaded} from './coffee.selector';


@Injectable({providedIn: 'root'})
export class CoffeesResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any> {

        return this.store
            .pipe(
                select(areCoffeesLoaded),
                tap(coffeesLoaded => {
                    if (!this.loading && !coffeesLoaded) {
                        this.loading = true;
                        this.store.dispatch(loadAllCoffees());
                    }
                }),
                filter(coffeesLoaded => coffeesLoaded),
                first(),
                finalize(() => this.loading = false)
            );

    }

}
