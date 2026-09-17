import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private router: Router) { }

  logoutButtons = [
    {
      text: 'Batal',    // Tombol batal: tidak melakukan apa-apa
      role: 'cancel'
    },
    {
      text: 'Ya, Keluar',
      handler: () => {
        // Redirect ke dashboard (simulasi logout, belum ada auth)
        this.router.navigate(['/dashboard']);
      }
    }
  ];
}
