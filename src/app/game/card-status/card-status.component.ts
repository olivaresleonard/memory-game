import {Component, effect} from '@angular/core';
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss']
})
export class CardStatusComponent {

  errors = 0;
  success = 0;

  constructor(private readonly storageService: StorageService) {
    effect(()=> {
      this.errors = this.storageService.errors();
      this.success = this.storageService.success();
    });
  }

}
