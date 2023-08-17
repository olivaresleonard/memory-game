import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http/http.service";
import {AnimalsInterface, EntryAnimals} from "./interface/animals.interface";
import {MemoryDataInterface} from "./interface/memory-data.interface";
import {StorageService} from "../services/storage/storage.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  data: EntryAnimals[] = [];

  constructor(private readonly httpService: HttpService,
              private readonly storageService: StorageService) {
  }

  /**
   * @description init component
   */
  ngOnInit() {
    this.httpService.getData().subscribe((data: Partial<AnimalsInterface>) => {
      this.data = [...data?.entries ? data.entries : []];
      this.loadDate();
    });
  }

  /**
   * @description load data
   */
  loadDate() {
    let memoryData: MemoryDataInterface[] = [];

    this.data.forEach((item: EntryAnimals) => {
       const img = {
         index: Math.random(),
         id: item.fields.image.uuid,
         image: item.fields.image.url,
         name: item.meta.name,
       }

      memoryData.push({...img});
      memoryData.push({...img, index: Math.random()});
    });

    memoryData = [...memoryData.sort((a, b) => a.index - b.index)];

    this.storageService.setMemoryData(memoryData);
  }
}
