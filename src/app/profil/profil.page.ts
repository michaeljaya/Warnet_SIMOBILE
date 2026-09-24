import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: false,
})
export class ProfilPage implements OnInit {

  public logoutButtons = [
    {
      text: 'Batal',
      role: 'cancel',
    },
    {
      text: 'Ya, Keluar',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/dashboard']);
      },
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
