import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ExampleSelectors} from "../store/example.selectors";

@Component({
  selector: 'app-example-two-component',
  templateUrl: './example-two-component.component.html',
  styleUrls: ['./example-two-component.component.scss']
})
export class ExampleTwoComponentComponent implements OnInit {
  count: number | any;
  count$: Observable<number>;
  message$: Observable<string | any>;
  allStateData$: any;

  constructor(private store$: Store) {
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message);
    this.allStateData$ = this.store$.select(ExampleSelectors.allStateData);
  }

  ngOnInit(): void {
  }

}
