import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  seguros: any[] = [];

  constructor() { 
    this.getSeguros();
  }

  getSeguros() {
    this.seguros = [
      {
        id: 1,
        nombre: "Hogar",
        imgAlt: "seguros hogar merex pas",
        imgUrl: "",
        modal: {
          title: "¿Es necesario contratar un Seguro de Hogar? ¿Por qué?",
          imgUrl: "",
          description: "El Seguro de Hogar es un contrato que cubre los daños causados a tu vivienda, es decir, la parte edilicia, (en caso de incendio, derrumbe e inundación) y también tus bienes, en otras palabras el contenido de ella (electrodomésticos, tv, joyas, etc), incluyendo desperfectos que se puedan ocasionar en tu hogar como también daños que se puedan causar a linderos, como fugas de agua que puedan afectar a nuestros vecinos, entre otras. Vos podés ampliar la cobertura para resguardar tus bienes según tus necesidades!"
        }
      },
      {
        id: 2,
        nombre: "Accidentes Personales",
        imgAlt: "seguros accidentes personales merex pas",
        imgUrl: "",
        modal: {
          title: "¿Para qué sirve un Seguro de Accidentes Personales?",
          imgUrl: "",
          description: "En primer lugar se trata de un Seguro para las Personas y lo que hace es brindar cobertura en caso de que se produzca un accidente, o una muerte causada por un accidente y que dicho riesgo esté contemplado en la póliza que se haya contratado. Algunos riesgos adicionales que puede cubrir son por ejemplo: asistencia médica, inválidez por accidente o cobertura de sepelio. El Seguro de Accidentes Personales también contempla diferentes profesiones y actividades cómo por ejemplo deportistas, trabajadores en relación de dependencia, monotributistas y autónomos, cada una con sus riesgos propios y una póliza ajustada a sus necesidades."
        }
      },
      {
        id: 3,
        nombre: "Automotor",
        imgAlt: "seguros automotor merex pas",
        imgUrl: "",
        modal: {
          title: "¿Por qué debo contratar un seguro para mí vehículo?",
          imgUrl: "",
          description: "En Argentina contratar un seguro de vehículo es de carácter obligatorio, el mismo tiene por objeto indemnizar los daños accidentales producidos a terceros, a vehículos y a sus bienes. A este se lo conoce como Responsabilidad Civil. Dentro de la misma póliza, con cobertura de Responsabilidad Civil podés ampliarla con coberturas complementarias como robo, incendio y destrucción, rotura de luneta y parabrisas, también podés asegurar a ocupantes transportados, entre otros."
        }
      },
      {
        id: 4,
        nombre: "Motos",
        imgAlt: "seguros motos merex pas",
        imgUrl: "",
        modal: {
          title: "",
          imgUrl: "",
          description: ""
        }
      },
      {
        id: 5,
        nombre: "Bici",
        imgAlt: "seguros bici merex pas",
        imgUrl: "",
        modal: {
          title: "",
          imgUrl: "",
          description: ""
        }
      },
      {
        id: 6,
        nombre: "Caución",
        imgAlt: "seguros caucion merex pas",
        imgUrl: "",
        modal: {
          title: "",
          imgUrl: "",
          description: ""
        }
      },
      {
        id: 7,
        nombre: "Vida",
        imgAlt: "seguros vida merex pas",
        imgUrl: "",
        modal: {
          title: "¿Qué es un Seguro de Vida?",
          imgUrl: "",
          description: "Un Seguro de Vida es una póliza que protege a quienes más queremos ante un siniestro, ya sea, la muerte del asegurado o una situación de incapacidad que impide continuar con su actividad laboral. Tener la tranquilidad de contar con un capital asegurado al contratar un seguro de vida sea como garantía ante el riesgo de fallecimiento o como producto de ahorro nos da la pauta de sentirnos más relajados ante cualquier eventualidad, ya que nos aporta estabilidad. Es una decisión sensata e inteligente y por supuesto pensada a futuro, resguardando de esta manera a la familia. Claros ejemplos pueden ser hipotecas, deudas, educación de los hijos en crecimiento, alimentos, gastos de sucesión, entre otras cosas. En nuestro país los seguros de vida no tiene la importancia que deberían y aunque no es obligatorio contratar uno si es bueno informarse y pensar en lo que quiero dejar a mis seres queridos cuando me toque partir."
        }
      },
      {
        id: 8,
        nombre: "Mascotas",
        imgAlt: "seguros mascotas merex pas",
        imgUrl: "assets/img/insurances/pet-01.jpeg",
        modal: {
          title: "",
          imgUrl: "",
          description: ""
        }
      },
      {
        id: 9,
        nombre: "También Existen",
        imgAlt: "seguros varios merex pas",
        imgUrl: "",
        modal: {
          title: "",
          imgUrl: "",
          description: ""
        }
      },
    ];
  }

  getInfoSeguro(id: number){
    return this.seguros[id - 1];
  }
}
