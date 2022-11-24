import { Component, OnInit } from '@angular/core';
import { ReleaseService } from './../release.service';

@Component({
  selector: 'app-research-releases',
  templateUrl: './research-releases.component.html',
  styleUrls: ['./research-releases.component.css'],
})
export class ResearchReleasesComponent implements OnInit {
  releases: any[] = [];

  constructor(private releaseService: ReleaseService) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.releaseService
      .pesquisar()
      .then(releases => {
        console.log(releases);
        this.releases = releases
      });
  }
}
