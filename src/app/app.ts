import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { PrimaryButton } from "./components/primary-button/primary-button";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PrimaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate-generator');
}
