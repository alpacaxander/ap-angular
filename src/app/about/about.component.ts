import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  testData$;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTest().subscribe(
      data => console.log(data)
    );
  }

}
