import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

  constructor(private dbFirestore: AngularFirestore) { }

  /*
 Verifica que el usuario exista
 */
  verificarUsuario(correo: string, clave: String) {
    return new Promise((resolve, rejected) => {

      this.dbFirestore.collection('usuarios').doc(correo).valueChanges().subscribe((user: any) => {
        console.log(user);

        if (user) {

          if (user.clave == clave) {
            resolve(user);
          } else {
            rejected("Error: La contraseña es incorrecta");
          }
        } else {
          rejected("Error: El usuario no existe");
        }

      });

    })
  }

  verificarSiNoExiste(correo: string, clave: String) {
    return new Promise((resolve, rejected) => {

      this.dbFirestore.collection('usuarios').doc(correo).valueChanges().subscribe((user: any) => {
        console.log(user);

        if (user) {

          if (user.clave == clave) {
            rejected(user);
          }

        } else {
          resolve("No existe");
        }

      });

    })
  }



  /*carga un dueño o supervisor a la bd, su id será el dni->(también lo tienen los clientes y empleados)*/
  cargarUsuario(usuarioNuevo: any) {

    return new Promise((resolve, rejected) => {

      this.dbFirestore.collection("usuarios").doc(usuarioNuevo.correo).set({

        correo: usuarioNuevo.correo,
        clave: usuarioNuevo.clave,
        tipo: usuarioNuevo.tipo,


      }).then(() => {
        resolve(usuarioNuevo);
      }).catch((error) => {
        rejected(error);
      });
    })
  }

  //Cargar cliente a la bd
  traerUsuariosPorTipo(tipo: string) {
    let usuarios = new Array();
    return new Promise((resolve, rejected) => {
      this.dbFirestore.collection('usuarios').get().subscribe((user) => {
        user.docs.map(user => {
          if (user.data().tipo == tipo) {
            usuarios.push(user.data());
          }

        });
      })
      resolve(usuarios);
    })

  }

  //Cargar materias
  traerMaterias() {
    let arrayMaterias = new Array();
    return new Promise((resolve, rejected) => {
      this.dbFirestore.collection('materias').get().subscribe((materias) => {
        materias.docs.map(materia => {

          arrayMaterias.push(materia.data());


        });
      })
      resolve(arrayMaterias);
    })

  }





  //Cargar cliente anonimo a la bd
  cargarClienteAnonimo(usuarioNuevo: any) {
    return new Promise((resolve, rejected) => {

      this.dbFirestore.collection("usuarios").doc(usuarioNuevo.dni.toString()).set({

        nombre: usuarioNuevo.nombre,
        dni: usuarioNuevo.dni,
        foto: usuarioNuevo.foto,
        clave: usuarioNuevo.clave,
        perfil: "clienteAnonimo",

      }).then(() => {
        resolve(usuarioNuevo);
      }).catch((error) => {
        rejected(error);
      });
    })
  }

  traerIdMateria() {
    let arrayMaterias = new Array();
    let length = 0;
    return new Promise((resolve, rejected) => {
      this.dbFirestore.collection('materias').get().subscribe((materias) => {

        resolve(materias.docs.length);


      });
    })



  }



  //Carga un producto a la Base de Datos
  cargarMateria(materia: any) {
    let arrayMaterias = new Array();
    return new Promise((resolve, rejected) => {
      this.traerIdMateria().then((id) => {
        console.log(id);

        this.dbFirestore.collection("materias").doc(id.toString()).set({

          id: id.toString(),
          nombre: materia.nombre,
          cupos: materia.cupos,
          cuatrimestre: materia.cuatrimestre,
          profesor: materia.profesor


        }).then(() => {
          resolve(materia);
        }).catch((error) => {
          rejected(error);
        });
      })
    })
  }

  traerIdInscripcion() {

    return new Promise((resolve, rejected) => {
      this.dbFirestore.collection('alumnos-materias').get().subscribe((insc) => {

        resolve(insc.docs.length);


      });
    })



  }

  //Carga un producto a la Base de Datos
  inscribirseAMateria(materia:any, alumno) {


    return new Promise((resolve, rejected) => {
      this.traerIdInscripcion().then((id) => {
console.log(id);
        this.dbFirestore.collection("alumnos-materias").doc(id.toString()).set({

          numero: id.toString(),
          materiaId: materia.id,
          materiaNombre: materia.nombre,
          alumno: alumno.correo,


        }).then(() => {
          resolve(alumno);
        }).catch((error) => {
          rejected(error);
        });
      })
    })
    /*return new Promise((resolve, rejected) => {

      */
  }

  traerMisInscripciones(correo) {
    let array = new Array();
    return new Promise((resolve, rejected) => {
      this.dbFirestore.collection('alumnos-materias').get().subscribe((inscripciones) => {
        inscripciones.docs.map(insc => {
          
          if (insc.data().alumno == correo) {
            console.log(insc.data());
            array.push(insc.data());
          }



        });
      })
      resolve(array);
    })
  }

}


