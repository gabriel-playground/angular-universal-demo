import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DogService } from '@app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dogList: any[]

  constructor(
    private meta: Meta,
    private title: Title,
    private dogService: DogService
  ) { 
    this.setSEO();
  }

  setSEO() {
    this.title.setTitle('Yudisthira | Home');

    this.meta.addTags([
      { name: 'author', content: 'mafindo-team' },
      { name: 'keywords', content: 'hoax, fake news, fight, turn back hoax'},
      { name: 'description', content: 'Claimed Reviewed Library'}
    ]);
  }

  ngOnInit() {
    this.dogService.getMasterBreed().then(x => {
      this.dogList = x.message;
    });
  }

}


