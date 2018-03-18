import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { DogService } from '@app/services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  dogs: string[];
  name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('id');
      this.dogService.getSubBreed(this.name)
        .then((res) => {
          this.dogs = res.message;

          this.title.setTitle(`Yudisthira | ${this.name}`);

          this.meta.addTags([
            { name: 'author', content: 'mafindo-team' },
            { name: 'keywords', content: 'hoax, fake news, fight, turn back hoax'},
            { name: 'description', content: `Detail page of master breed ${this.name}`}
          ])
        });
    });
  }

}