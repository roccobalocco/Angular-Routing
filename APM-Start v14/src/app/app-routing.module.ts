import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth.guard';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        {
          path: 'products',
          canLoad /*canActivate*/: [AuthGuard],
          data: { preload: true }, // fa si che la nostra strategia di precaricamento venga applicata per questo modulino :))
          loadChildren: () =>
            import('./products/product.module').then((m) => m.ProductModule),
        },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent },
      ],
      {
        enableTracing: true, // Permette di vedere ogni evento di routing nella console e non solo!
        preloadingStrategy: SelectiveStrategy // Permetti il caricamento di moduli scelti da noi e nelle condizioni in cui vogliamo noi (eg: connessioni lente)
        //PreloadAllModules // Permetti il caricamento dei moduli in background
      }
    ),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
