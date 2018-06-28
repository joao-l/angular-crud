import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Coin, CoinService } from '../../../../shared/index';
import { ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-general-edit',
  templateUrl: './general-edit.component.html',
  styleUrls: ['./general-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralEditComponent implements OnInit {
  @Input() coin: Coin;
  private coinChange: Coin;
  msgs: Message[];

  constructor(
    private coinService: CoinService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.coinChange = new Coin();
  }

  onChange(event, type: string) {
    this.coinChange[type] = event;
  }

  open(content) {
    this.modalService
      .open(content)
      .result.then((result) => { }, (reason) => { this.save(reason); });
  }

  save(reason: string) {
    if (reason === 'Salvo') {
      this.coinChange._id = this.coin._id;
      this.coinService.updateCoin(this.cleanCoinForUpdate(this.coinChange)).subscribe(res => console.log(res));
      this.msgs = [{ severity: 'info', summary: 'Salvo', detail: 'Alteração realizada com sucesso!' }];

      setTimeout(() => this.router.navigate(['/coins']), 2000);
    } else {
      this.msgs = [{ severity: 'info', summary: 'Cancelado', detail: 'Operação cancelada!' }];
    }
  }

  cancel() {
    this.router.navigate(['/coins']);
  }

  private cleanCoinForUpdate(coin: Coin): Coin {
    let obj: Coin = coin;

    if (obj) {
      for (let propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
          delete obj[propName];
        }
      }

      if (obj.emissionInfo) {
        delete obj['emissionInfo'];
      }

      if (obj.features) {
        delete obj['features'];
      }

      if (obj.issuer) {
        delete obj['issuer'];
      }

      if (obj.publication) {
        delete obj['publication'];
      }

      if (obj.relatedItems) {
        delete obj['relatedItems'];
      }

      if (obj.removed) {
        delete obj['removed'];
      }

      if (obj.servicesProfile) {
        delete obj['servicesProfile'];
      }

      if (obj.side) {
        delete obj['side'];
      }

      return obj;
    }
    return;
  }
}
