import {Injectable, signal} from '@angular/core';
import {MemoryDataInterface} from "../../game/interface/memory-data.interface";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  memoryData = signal<MemoryDataInterface[]>([]);
  success = signal<number>(0);
  errors = signal<number>(0);

  constructor() {
  }

  /**
   * @description get value memory
   * @param data
   */
  setMemoryData(data: MemoryDataInterface[]) {
    this.memoryData.set(data);
  }

  /**
   * @description get value errors
   * @param value
   */
  setErrors(value: number) {
    this.errors.set(value);
  }

  /**
   * @description get value success
   * @param value
   */
  setSuccess(value: number) {
    this.success.set(value);
  }


  /**
   * @description get value storage
   * @param key
   */
  getStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * @description set value storage
   * @param key
   * @param value
   */
  setStorage(key: string, value: any): void {
    localStorage.setItem(key, value);
  }
}
