import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Features } from '../../../../shared/index';

@Component({
  selector: 'app-features-detail',
  templateUrl: './features-detail.component.html',
  styleUrls: ['./features-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturesDetailComponent implements OnInit {
  @Input() features: Features;

  constructor() { }

  ngOnInit() {
  }

}
