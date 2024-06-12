import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {

  constructor(private router: Router) {}

  startNewCalculation() {
    localStorage.clear();  // Clear the localStorage
    console.log('startNewCalculation: localStorage cleared');
    this.router.navigate(['/berechnen']);
  }
}
