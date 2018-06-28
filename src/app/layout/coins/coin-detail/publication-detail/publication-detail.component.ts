import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Publication } from '../../../../shared/index';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationDetailComponent implements OnInit {
  @Input() publication: Publication;

  constructor() { }

  ngOnInit() {
  }

}
