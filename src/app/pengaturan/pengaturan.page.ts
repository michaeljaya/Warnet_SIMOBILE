import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage implements OnInit {

  darkMode = false;

  constructor() { }

  ngOnInit() {
    const prefersDark = localStorage.getItem('darkMode');
    if (prefersDark !== null) {
      this.darkMode = prefersDark === 'true';
    } else {
      this.darkMode = false;
    }
    this.applyDarkMode();
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', String(this.darkMode));
    this.applyDarkMode();
  }
  applyDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
    document.documentElement.classList.toggle('ion-palette-dark', this.darkMode);
  }
}
