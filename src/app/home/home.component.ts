import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Validators} from '@angular/forms';
import {StorageService} from "../services/storage/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nameForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private readonly storageService: StorageService,
              private readonly router: Router) {
  }


  /**
   *  @description start game and form validation
   */
  onStartGame() {
    if (this.nameForm.invalid) {
      return;
    }

    const formData = Object.assign({}, this.nameForm.value);
    this.storageService.setStorage('name', formData.name);

    this.router.navigate(['memory-game']).then();
  }
}
