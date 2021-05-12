import { Component } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  template: `<p>This is a warning message</p>`,
  styles: [
    `
      p {
        padding: 20px;
        background-color: yellow;
        border: 5px solid red;
      }
    `,
  ],
})
export class WarningAlert {}
