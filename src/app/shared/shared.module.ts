import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {StorageService} from "../services/storage/storage.service";
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "../services/http/http.service";


const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
];

const providers = [
  StorageService,
  HttpService
];

@NgModule({
  imports: modules,
  providers: providers,
  exports: modules
})
export class SharedModule { }
