import {Component, EventEmitter, Input, isDevMode, OnInit, Output, ViewChild} from '@angular/core';
import {CreateOrUpdateMiembroCommand} from "../../../modulos/form/models/create-or-update-miembro-command";
import {MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-miembros-form',
  templateUrl: './miembros-form.component.html',
  styleUrls: ['./miembros-form.component.scss', './form-shared.scss']
})
export class MiembrosFormComponent implements OnInit {
  @Input() public miembroCommand = new CreateOrUpdateMiembroCommand();
  @Input() public isReadOnly = false;
  @Output() public miembroCommandChange = new EventEmitter<CreateOrUpdateMiembroCommand>();
  @Output() public formFinishedEvent = new EventEmitter();
  public currentTabIndex = 0;

  public get isPersonalInfoGood() {
    return this.arePersonalInfoRequiredFieldsFilled();
  }
  public get isMiembroInfoGood() {
    return this.areMiembroInfoRequiredFieldsFilled();
  }
  public get isContactoInfoGood() {
    return this.areContactInfoRequiredFieldsFilled();
  }

  @ViewChild('#matgroup') tabs: MatTabGroup;
  // GeneroSelected: any;

  constructor() { }

  ngOnInit(): void {
  }

  public navigateToPrevious(){
    this.tabs.selectedIndex = this.currentTabIndex--;
  }

  public navigateToNext(){
    this.tabs.selectedIndex = this.currentTabIndex++;
  }

  public submitForm() {
    this.formFinishedEvent.emit();
  }

  public arePersonalInfoRequiredFieldsFilled(){
    if(isDevMode()){ //only make Name Required
      const nombreFilled = this.miembroCommand.Nombre != null && this.miembroCommand.Nombre != '';
      return nombreFilled;
    }
    return false;
  }

  public areMiembroInfoRequiredFieldsFilled(){
    if(isDevMode()){ //only make Name Required
      return true;
    }
    return false;
  }

  public areContactInfoRequiredFieldsFilled(){
    if(isDevMode()){ //only make Name Required
      return true;
    }
    return false;
  }
}
