import {Component, OnInit} from '@angular/core';
import {ExampleActions} from "../store/example.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-example-one-component',
  templateUrl: './example-one-component.component.html',
  styleUrls: ['./example-one-component.component.scss']
})
export class ExampleOneComponentComponent implements OnInit {
  message: string | any;
  count: number | any
  allStateData: any

  constructor(private store$: Store) {
  }

  ngOnInit(): void {
  }

  increaseCount(): void {
    this.store$.dispatch(ExampleActions.increaseCount());
  }

  sendMessage(): void {
    this.store$.dispatch(ExampleActions.sendMessage({message: this.message}));
    this.message = '';
  }

  // showStateData(): void {
  //   this.store$.dispatch(ExampleActions.showStateData({message: this.message}));
  // }

}
