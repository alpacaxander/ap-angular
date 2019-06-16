import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  testData$: {"title":string, "sections": []};
  show = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTest("DocumentTitle").subscribe(
      data => this.testData$ = data
    );
  }

}
