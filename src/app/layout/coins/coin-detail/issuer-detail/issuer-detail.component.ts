import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Issuer } from '../../../../shared/index';

@Component({
  selector: 'app-issuer-detail',
  templateUrl: './issuer-detail.component.html',
  styleUrls: ['./issuer-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IssuerDetailComponent implements OnInit {
  @Input() issuer: Issuer;

  constructor() { }

  ngOnInit() {
  }

}
