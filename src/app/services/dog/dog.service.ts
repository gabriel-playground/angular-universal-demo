import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import 'rxjs/add/operator/toPromise'

const MASTER_BREED_KEY = makeStateKey('master_breeds');
const SUB_BREED_KEY = makeStateKey('sub_breeds');

@Injectable()
export class DogService {

  private baseUrl: string = 'https://dog.ceo/api';
  private activeSubBreedParent: string;

  constructor(
    private http: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  getMasterBreed() {
    let masterBreeds = this.transferState.get(MASTER_BREED_KEY, null as any);

    if (masterBreeds) {
      return Promise.resolve(masterBreeds);
    }

    return this.http.get(`${this.baseUrl}/breeds/list`)
      .toPromise()
      .then((res: any) => {
        this.transferState.set(MASTER_BREED_KEY, res as any);
        return res;
      });
  }

  getSubBreed(name: string) {

    let subBreeds = this.transferState.get(SUB_BREED_KEY, null as any);

    if (subBreeds && this.activeSubBreedParent === name) {
      return Promise.resolve(subBreeds);
    }
  
    return this.http.get(`${this.baseUrl}/breed/${name}/list`)
      .toPromise()
      .then((res: any) => {
        this.activeSubBreedParent = name;
        this.transferState.set(SUB_BREED_KEY, res as any);
        return res;
      });

  }
  
}
