import {Observable} from 'rxjs';

export abstract class ArrayEmitModelDataProvider {

  public abstract getButtons$(): Observable<ArrayEmitButton[]>

  public abstract getArray$(): Observable<string[]>

  public abstract onButtonClicked(param: {buttonId: string, arrayItem: string}): Observable<void>


}


export interface ArrayEmitButton {
  id: string;
  label: string;
}
