import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-releases-grid',
  templateUrl: './releases-grid.component.html',
  styleUrls: ['./releases-grid.component.css']
})
export class ReleasesGridComponent implements OnInit {

  @Input() lancamentos:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
