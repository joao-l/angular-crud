import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { EmissionInfo } from '../../../../shared/index';

@Component({
  selector: 'app-emission-detail',
  templateUrl: './emission-detail.component.html',
  styleUrls: ['./emission-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmissionDetailComponent implements OnInit {
  @Input() emissions: EmissionInfo;

  constructor() { }

  ngOnInit() {
  }

}
