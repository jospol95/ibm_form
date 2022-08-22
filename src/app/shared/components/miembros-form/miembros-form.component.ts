import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreateOrUpdateMiembroCommand} from "../../../modulos/form/models/create-or-update-miembro-command";

@Component({
  selector: 'app-miembros-form',
  templateUrl: './miembros-form.component.html',
  styleUrls: ['./miembros-form.component.scss']
})
export class MiembrosFormComponent implements OnInit {
  @Input() public Miembro = new CreateOrUpdateMiembroCommand();
  @Input() public isReadOnly = false;
  @Output() public MiembroChange = new EventEmitter<CreateOrUpdateMiembroCommand>();
  // GeneroSelected: any;

  constructor() { }

  ngOnInit(): void {
  }


}
