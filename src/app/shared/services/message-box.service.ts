import {Injectable} from "@angular/core";
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})


export class MessageBoxService{

  public showLoading(){
    Swal.fire({
      didOpen: () => {
        Swal.showLoading()
      },
    })
  }

  public showSuccessfulAlert(title: string){
    Swal.fire({
      icon: 'success',
      title: title,
      showConfirmButton: true,
      timer: 5000
    })
  }

  public showMissingInfo(){
    Swal.fire({
      icon: 'warning',
      html: '<b>Por favor complete los campos requeridos</b>',
      showConfirmButton: true,
    })
  }

  public ShowErrorApi(){
    Swal.fire({
      icon: 'error',
      html: '<b>Ocurrio un error al tratar de comunicarse con el servidor, ' +
        'por favor intenta de nuevo.</b>',
      showConfirmButton: true,
    })
  }


}
