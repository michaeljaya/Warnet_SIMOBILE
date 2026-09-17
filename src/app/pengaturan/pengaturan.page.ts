import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage implements OnInit {

  modeGelap = false;
  modeTerang = true;

  constructor() { }

  ngOnInit() { }

  // Toggle untuk mengaktifkan dark mode dan menonaktifkan mode terang
  toggleGelap() {
    this.modeGelap = !this.modeGelap;
    if (this.modeGelap) {
      this.modeTerang = false;
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  // Toggle untuk mengaktifkan mode terang dan menonaktifkan mode gelap
  toggleTerang() {
    this.modeTerang = !this.modeTerang;
    if (this.modeTerang) {
      this.modeGelap = false;
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }
}
