import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreateOrUpdateMiembroCommand} from "../../../../modulos/form/models/create-or-update-miembro-command";

@Component({
  selector: 'app-miembro-info-tab',
  templateUrl: './miembro-info-tab.component.html',
  styleUrls: ['./miembro-info-tab.component.scss', '../form-shared.scss']
})
export class MiembroInfoTabComponent implements OnInit {
  @Input() public miembro = new CreateOrUpdateMiembroCommand();
  @Output() public miembroChange = new EventEmitter<CreateOrUpdateMiembroCommand>();

  @Input() public isReadOnly = false;
  constructor() { }

  ngOnInit(): void {
  }

}
