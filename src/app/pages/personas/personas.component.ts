import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/domain/persona';
import { PersonasService } from 'src/app/service/personas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit{
  personas: any
  person: Persona = new Persona()
  dniABuscar: string = '';

  constructor(private personasService: PersonasService){
  }
  
  ngOnInit(): void {
      this.personas = this.personasService.getPersonas()
  }
  obtenerPersonas(): void {
    this.personasService.getPersonas().subscribe(personas => {
      this.personas = personas;
    });
  }

  limpiar(){
    
  }

  guardar(){
    this.personasService.savePersona(this.person).subscribe(data => {
      console.log(data)
        this.ngOnInit()
    })
  }
  actualizar(){
    this.personasService.updatePersona(this.person).subscribe(data => {
      console.log(data)
        this.ngOnInit()
    })
  }
  buscar(){
    this.personasService.updatePersona(this.person).subscribe(data => {
      console.log(data)
        this.ngOnInit()
    })
  }
  eliminarPersona(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta persona?')) {
      this.personasService.dropPersona(id).subscribe(data => {
        console.log(data)
          this.ngOnInit()
          
      })
    }
  }
  buscarPorDNI(dni: string): void {
    this.personasService.searchPersonByDNI(dni).subscribe(personas => {
      this.personas = personas;
    });
  }
  

}

