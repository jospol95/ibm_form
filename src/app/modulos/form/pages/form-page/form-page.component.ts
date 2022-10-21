import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateOrUpdateMiembroCommand} from "../../models/create-or-update-miembro-command";
import {MiembrosService} from "../../../../shared/services/miembros-service";
import {MessageBoxService} from "../../../../shared/services/message-box.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public Model = new CreateOrUpdateMiembroCommand();
  public IsSubmitted = false;

  @ViewChild('confirmModal')
  public readonly confirmModal!: SwalComponent;

  constructor(private readonly _miembroService: MiembrosService,
              private readonly _messageBoxService: MessageBoxService,
              private readonly _snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  public resetMiembro() {
    this.Model = new CreateOrUpdateMiembroCommand();
  }

  public checkMissingInfo() {
    if (this.isMissingInfo()) {
      this._messageBoxService.showMissingInfo();
      return;
    }
    this.confirmModal.fire();
  }

  public addMiembroConfirmed(){
    this.Model.DepartamentoId = 1;
    this.Model.MinisterioMiembroId = 1;
    this.Model.MinisterioSirveId = 1;

    this._messageBoxService.showLoading();
    this.Model.FechaConversion = this.Model.FechaNacimiento;
    this.Model.FechaPrimeraVezCongregado = this.Model.FechaNacimiento;

    this._miembroService.CreateOrUpdateMiembro(this.Model).subscribe((r) => {
      this._messageBoxService.showSuccessfulAlert('Tus datos fueron guardados')
      this.IsSubmitted = true;
    }, () => {
      this._messageBoxService.ShowErrorApi();
    });
  }


  private isMissingInfo(): boolean {
    return this.Model.Nombre == null;

  }

}
