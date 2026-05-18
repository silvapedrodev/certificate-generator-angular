import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { BaseUi } from "./components/base-ui/base-ui";
import { Certificates } from "./pages/certificates/certificates";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi, Certificates],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate-generator');
}
