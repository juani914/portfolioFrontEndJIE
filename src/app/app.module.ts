import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaMiComponent } from './componentes/acerca-mi/acerca-mi.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { Error404Component } from './componentes/error404/error404.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { interceptorProvider } from './servicios/interceptor-service';
import { EditAcercaMiComponent } from './componentes/acerca-mi/edit-acerca-mi.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EdithabilidadComponent } from './componentes/habilidad/edithabilidad.component';
import { NewhabilidadComponent } from './componentes/habilidad/newhabilidad.component';
import { EditproyectoComponent } from './componentes/proyecto/editproyecto.component';
import { NewproyectoComponent } from './componentes/proyecto/newproyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercaMiComponent,
    HabilidadComponent,
    FooterComponent,
    IndexComponent,
    Error404Component,
    LoginComponent,
    NavbarComponent,
    BannerComponent,
    ExperienciaComponent,
    ProyectoComponent,
    EducacionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    NewhabilidadComponent,
    EdithabilidadComponent,
    EditAcercaMiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
