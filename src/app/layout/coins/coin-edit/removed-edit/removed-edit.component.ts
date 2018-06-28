import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Removed, Coin, CoinService } from '../../../../shared/index';
import { ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-removed-edit',
  templateUrl: './removed-edit.component.html',
  styleUrls: ['./removed-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemovedEditComponent implements OnInit {
  @Input() removed: Removed;
  @Input() id: string;
  coinChange: Coin;
  msgs: Message[];

  constructor(
    private coinService: CoinService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.coinChange = new Coin();
  }

  ngOnInit() { }

  open(content) {
    this.modalService
      .open(content)
      .result.then((result) => { }, (reason) => { this.save(reason); });
  }

  onChange(event, type: string) {
    this.coinChange.removed = this.removed;
  }

  save(reason: string) {
    if (reason === 'Salvo') {
      this.coinChange._id = this.id;
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
        if (!(propName === 'removed') && (propName !== '_id')) {
          delete obj[propName];
        }
      }
      return obj;
    }
    return;
  }

}
