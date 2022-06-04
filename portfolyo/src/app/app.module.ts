import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HakkimdaComponent } from './hakkimda/hakkimda.component';
import { ProjelerComponent } from './projeler/projeler.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestore} from '@angular/fire/compat/firestore';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { RouteReuseStrategy } from '@angular/router';
import { PpComponent } from './pp/pp.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnasayfaComponent,
    SocialMediaComponent,
    HakkimdaComponent,
    ProjelerComponent,
    IletisimComponent,
    PpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
