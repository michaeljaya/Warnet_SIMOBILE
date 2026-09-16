import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private router: Router) {
    this.initializeApp(); // Panggil fungsi tema saat aplikasi pertama kali dilaunching
  }

  initializeApp() {
    //Untuk sebelumnya pengguna pernah menyimpan setelan gelap
    const prefersDark = localStorage.getItem('darkMode');

    if (prefersDark === 'true') {
      document.body.classList.add('dark');
      document.documentElement.classList.add('ion-palette-dark'); // Jika iya, jadikan gelap
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('ion-palette-dark');
      localStorage.setItem('darkMode', 'false');
    }
  }

  logout() {
    this.router.navigate(['/dashboard']);
  }
}
