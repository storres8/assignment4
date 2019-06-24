import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "assignment4";

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
  }
}
