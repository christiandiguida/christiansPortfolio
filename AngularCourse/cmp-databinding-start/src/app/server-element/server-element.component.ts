import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { element } from "protractor";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input("srvElement") element: { type: string; name: string; content: string };
  constructor() {
    console.log("constructor called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
}
