import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Habilidad } from "src/app/model/habilidad";
import { HabilidadService } from "src/app/servicios/habilidad.service";

@Component({
  selector: 'app-newhabilidad',
  templateUrl: './newhabilidad.component.html',
  styleUrls: ['./newhabilidad.component.css']
})
export class NewhabilidadComponent implements OnInit {
  nombre: string = '';
  porcentaje: number = 0;
    
  constructor(private habilidadS: HabilidadService, private router: Router) { }
    
  ngOnInit(): void {
  }
    
  onCreate(): void {
    const habilidad = new Habilidad(this.nombre, this.porcentaje);
    this.habilidadS.save(habilidad).subscribe(
      data => {
        alert("Habilidad añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }   
}
