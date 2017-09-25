import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TacoService } from '../taco.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _tacoService: TacoService) {
    this._tacoService.loadScript();
  }

  ngOnInit() {
  }

}
