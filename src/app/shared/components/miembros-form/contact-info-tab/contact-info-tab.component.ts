import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CreateOrUpdateMiembroCommand} from "../../../../modulos/form/models/create-or-update-miembro-command";

@Component({
  selector: 'app-contact-info-tab',
  templateUrl: './contact-info-tab.component.html',
  styleUrls: ['./contact-info-tab.component.scss', '../form-shared.scss']
})
export class ContactInfoTabComponent implements OnInit {
  @Input() public miembro = new CreateOrUpdateMiembroCommand();
  @Input() public isReadOnly = false;
  @Output() public miembroChange = new EventEmitter<CreateOrUpdateMiembroCommand>();

  constructor() { }

  ngOnInit(): void {
  }

}
