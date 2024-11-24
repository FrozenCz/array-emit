import {Injectable} from '@angular/core';
import {ArrayEmitButton, ArrayEmitModelDataProvider} from './array-emit/array-emit.model';
import {Observable, of} from 'rxjs';


@Injectable({providedIn: 'root'})
export class ArrayEmitImplService implements ArrayEmitModelDataProvider {

    public getButtons$(): Observable<ArrayEmitButton[]> {
       return of([{id: '1', label: 'Button 1'}, {id: '2', label: 'Button 2'}]);
    }
    public getArray$(): Observable<string[]> {
        return of(['Item 1', 'Item 2', 'Item 3']);
    }
    public onButtonClicked(param: { buttonId: string; arrayItem: string; }): Observable<void> {
        console.log('Button clicked', param);
        return of(undefined);
    }

}
