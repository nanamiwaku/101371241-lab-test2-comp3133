import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../space-x.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  launches: any[] = [];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe(data => {
      this.launches = data;
    });
  }
}
