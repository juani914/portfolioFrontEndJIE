import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-acerca-mi',
  templateUrl: './edit-acerca-mi.component.html',
  styleUrls: ['./edit-acerca-mi.component.css']
})
export class EditAcercaMiComponent implements OnInit {
  persona: persona = new persona('', '', '', '');

  constructor(
    public personaService: PersonaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.personaService.getPersona(id).subscribe(
        (data) => {
          this.persona = data;
        },
        (error) => {
          console.log('Error al obtener el perfil de la persona', error);
        }
      );
    });
  }

  onUpdate(): void {
    this.personaService.actualizarPersona(this.persona).subscribe(
      (data) => {
        console.log('Persona actualizada');
        this.router.navigate(['/']); // Redirige al componente principal
      },
      (error) => {
        console.log('Error al actualizar la persona', error);
        // Puedes mostrar un mensaje de error o realizar otra acción
      }
    );
  }
}