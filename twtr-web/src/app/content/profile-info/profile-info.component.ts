import { Component, OnInit } from '@angular/core';
import { TRENDS, FOOTER_DATA } from '../../mock-data';
@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  trends = TRENDS;
  footData = FOOTER_DATA;
  constructor() {}

  ngOnInit() {}
}
