import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  habilidades: Habilidad[] = [];

  constructor(private habilidadS: HabilidadService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.habilidadS.lista().subscribe(
      data => {
        this.habilidades = data; 
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.habilidadS.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
