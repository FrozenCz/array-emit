import {Component, Optional, Pipe, signal} from '@angular/core';
import {ArrayEmitButton, ArrayEmitModelDataProvider} from './array-emit.model';
import {firstValueFrom, Observable} from 'rxjs';
import {AsyncPipe, NgClass, NgFor, NgIf} from '@angular/common';

@Pipe({standalone: true, name: 'IsInArray'})
export class IsInArrayPipe {
  transform(value: string, array: string[]): boolean {
    return array.includes(value);
  }
}

@Component({
  selector: 'app-array-emit',
  imports: [
    NgIf,
    AsyncPipe,
    IsInArrayPipe,
    NgClass
  ],
  standalone: true,
  templateUrl: './array-emit.component.html',
  styleUrl: './array-emit.component.scss',
})
export class ArrayEmitComponent {
  public buttons$: Observable<ArrayEmitButton[]>;
  public array$: Observable<string[]>;
  public actionPerformed = signal<string[]>([]);
  public isLoading = false;

  constructor(@Optional() private dataProvider: ArrayEmitModelDataProvider) {
    this.buttons$ = dataProvider?.getButtons$();
    this.array$ = dataProvider?.getArray$();
  }

  onButtonClicked(buttonId: string, arrayItem: string): void {
    this.isLoading = true;
    this.actionPerformed.set([...this.actionPerformed(), buttonId + arrayItem]);
    firstValueFrom(this.dataProvider.onButtonClicked({buttonId, arrayItem})).then(() => {
    }).finally(() => {
      setTimeout(()=> {
        this.actionPerformed.set([...this.actionPerformed().filter(item => item !== buttonId + arrayItem)]);
        this.isLoading = false;
      }, 3000)

    })
  }

}



