import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArrayEmitComponent} from './array-emit/array-emit.component';
import {ArrayEmitModelDataProvider} from './array-emit/array-emit.model';
import {ArrayEmitImplService} from './array-emit.impl.service';

@Component({
  selector: 'app-root',
  imports: [ArrayEmitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide: ArrayEmitModelDataProvider, useExisting: ArrayEmitImplService}]
})
export class AppComponent {
  title = 'array-emit';
}
