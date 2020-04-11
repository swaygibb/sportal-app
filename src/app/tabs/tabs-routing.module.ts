import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'spotify-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../spotify-profile/spotify-profile.module').then(m => m.SpotifyProfilePageModule)
          }
        ]
      },
      {
        path: 'albums',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../albums/albums.module').then(m => m.AlbumsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/spotify-profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/spotify-profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
