import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  // need the Output decorator to give access to parent component.
  // need the new EventEmitter to create a new event.
  // both of which must be imported from @angular/core.
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 1;

  constructor() {}

  ngOnInit() {}

  handleStart() {
    this.interval = setInterval(() => {
      // what is inside the emit() function is what is being passed and can be accessed with $event.
      this.intervalFired.emit(this.lastNumber);
      this.lastNumber++;
    }, 1000);
  }

  handlePause() {
    clearInterval(this.interval);
  }
}
