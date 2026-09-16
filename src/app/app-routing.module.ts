import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'produk',
    loadChildren: () => import('./produk/produk.module').then(m => m.ProdukPageModule)
  },
  {
    path: 'produkdetail',
    loadChildren: () => import('./produkdetail/produkdetail.module').then(m => m.ProdukdetailPageModule)
  },
  {
    path: 'produkform',
    loadChildren: () => import('./produkform/produkform.module').then(m => m.ProdukformPageModule)
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./transaksi/transaksi.module').then(m => m.TransaksiPageModule)
  },
  {
    path: 'riwayattransaksi',
    loadChildren: () => import('./riwayattransaksi/riwayattransaksi.module').then(m => m.RiwayattransaksiPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then(m => m.PengaturanPageModule)
  },
  {
    path: 'tentang',
    loadChildren: () => import('./tentang/tentang.module').then(m => m.TentangPageModule)
  },
  {
    path: 'tabs',
    children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule) },
      { path: 'produk', loadChildren: () => import('./produk/produk.module').then(m => m.ProdukPageModule) },
      { path: 'transaksi', loadChildren: () => import('./transaksi/transaksi.module').then(m => m.TransaksiPageModule) },
      { path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule) },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


