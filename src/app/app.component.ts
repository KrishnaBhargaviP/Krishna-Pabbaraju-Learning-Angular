import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Krishna-Pabbaraju-Learning-Angular';

  // Two new variables with types
  userName: string = 'Krishna Pabbaraju';
  userMarks: number = 100;
}
