import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "assignment4";
  odd: number[] = [];
  even: number[] = [];

  onIntervalFired(firedNumber: number) {
    return firedNumber % 2 === 0
      ? this.even.push(firedNumber)
      : this.odd.push(firedNumber);
  }
}
