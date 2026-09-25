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
    this.modeTerang = !this.modeGelap; 
    if (this.modeGelap) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }

  // Toggle untuk mengaktifkan mode terang dan menonaktifkan mode gelap
  toggleTerang() {
    this.modeTerang = !this.modeTerang;
    this.modeGelap = !this.modeTerang; 
    if (this.modeTerang) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }
}
