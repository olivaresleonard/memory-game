import {Component, effect} from '@angular/core';
import {StorageService} from "../../services/storage/storage.service";
import {MemoryDataInterface} from "../interface/memory-data.interface";

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent {
  memoryData: MemoryDataInterface[] = [];
  errors: number[] = [];
  success: number[] = [];
  parTemporal: number[] = [];
  parSuccess: number[] = [];

  constructor(private readonly storageService: StorageService) {
    effect(() => {
      this.memoryData = this.storageService.memoryData();
    });
  }

  /**
   *  Select a memory data
   * @param index
   */
  select(index: number) {
    if(this.parTemporal.length === 2) {
      return;
    }

    const repeat = this.parTemporal.find((p) => p === index);

    if(repeat) {
      return;
    }

    const success = this.parSuccess.find((p) => p === index);

    if(success) {
      return;
    }

    if (this.parTemporal.length < 2) {
      this.parTemporal.push(index);
      if (this.parTemporal.length === 2) {
        if (this.memoryData[this.parTemporal[0]].id === this.memoryData[this.parTemporal[1]].id) {
          this.success.push(this.parTemporal[0]);
          this.parSuccess.push(this.parTemporal[0]);
          this.parSuccess.push(this.parTemporal[1]);
          if (this.parSuccess.length === this.memoryData.length) {
            alert('You win!');
          }
          this.resetCard();
        } else {
          this.errors.push(this.parTemporal[0]);
          this.resetCard();
        }
      }
    }

    this.storageService.setSuccess(this.success.length);
    this.storageService.setErrors(this.errors.length);
  }

  /**
   * Reset the temporal card
   */
  resetCard() {
    setTimeout(()=> {
      this.parTemporal = [];
    }, 1000);
  }

  /**
   * Show the temporal card
   * @param i
   */
  showTemporal(i: number) {
    const success = this.parSuccess.find((p) => p === i);

    if(success) {
      return true;
    }

    return i === this.parTemporal[0] || i === this.parTemporal[1];
  }
}
