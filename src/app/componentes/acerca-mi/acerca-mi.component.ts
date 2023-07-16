import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-mi',
  templateUrl: './acerca-mi.component.html',
  styleUrls: ['./acerca-mi.component.css']
})
export class AcercaMiComponent implements OnInit {
  persona: persona = new persona('', '', '', '');
  isLogged = false;

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    const id = 1;
    this.personaService.getPersona(id).subscribe(data => {
      this.persona = data;
    }, error => {
      console.log('Error al obtener el perfil de la persona', error);
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
