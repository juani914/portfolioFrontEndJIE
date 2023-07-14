import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Habilidad } from "src/app/model/habilidad";
import { HabilidadService } from "src/app/servicios/habilidad.service";

@Component({
  selector: 'app-edithabilidad',
  templateUrl: './edithabilidad.component.html',
  styleUrls: ['./edithabilidad.component.css']
})
export class EdithabilidadComponent implements OnInit {
  habilidad: Habilidad = new Habilidad('', 0);
    
  constructor(
    private habilidadS: HabilidadService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }
    
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadS.detail(id).subscribe(
      data => {
        this.habilidad = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
    
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadS.update(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
