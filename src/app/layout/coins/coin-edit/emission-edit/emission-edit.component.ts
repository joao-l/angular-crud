import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmissionInfo, Coin } from '../../../../shared/index';
import { CoinService } from '../../../../shared/index';
import { ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-emission-edit',
  templateUrl: './emission-edit.component.html',
  styleUrls: ['./emission-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmissionEditComponent implements OnInit {
  @Input() emissions: EmissionInfo[];
  @Input() id: string;
  coinChange: Coin;
  msgs: Message[];
  items: MenuItem[];
  newEmissionInfo: EmissionInfo;
  isChangeCall: boolean = false;
  display: boolean = false;
  emissionIndexAction: number;

  constructor(
    private coinService: CoinService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.coinChange = new Coin();
    this.newEmissionInfo = new EmissionInfo();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Remover Emissão', icon: 'fa-close', command: () => {
          this.deleteEmission();
        }
      }
    ];
  }

  deleteEmission() {
    this.coinChange.emissionInfo = this.emissions;
    this.coinChange.emissionInfo.splice(this.emissionIndexAction, 1);
    this.emissions.splice(this.emissionIndexAction, 1);
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: '', detail: 'Emissão Removida!' });
  }

  onEmissionAction(action: string, index: number) {
    this.emissionIndexAction = undefined;
    this.emissionIndexAction = index;
  }

  showDialog() {
    this.display = true;
    this.newEmissionInfo = new EmissionInfo();
  }

  open(content) {
    this.modalService
      .open(content)
      .result.then((result) => { }, (reason) => { this.save(reason); });
  }

  onChange(event, type: string) {
    this.isChangeCall = true;

    if (!this.coinChange._id) {
      this.coinChange._id = this.id;
    }

    this.coinChange.emissionInfo = this.emissions;
  }

  saveNewEmission() {
    this.display = false;
    this.emissions.push(this.newEmissionInfo);

    this.onChange('', '');
  }

  save(reason: string) {
    if (this.isChangeCall) {
      if (reason === 'Salvo') {
        this.coinService.updateCoin(this.cleanCoinForUpdate(this.coinChange)).subscribe(res => console.log(res));
        this.msgs = [{ severity: 'info', summary: 'Salvo', detail: 'Alteração realizada com sucesso!' }];

        setTimeout(() => this.router.navigate(['/coins']), 2000);
      } else {
        this.msgs = [{ severity: 'info', summary: 'Cancelado', detail: 'Operação cancelada!' }];
      }
    } else {
      this.msgs = [{ severity: 'info', summary: 'Cancelado', detail: 'Operação cancelada, pois não houve alteração!' }];
      setTimeout(() => this.router.navigate(['/coins']), 2000);
    }
  }

  cancel() {
    this.router.navigate(['/coins']);
  }

  private cleanCoinForUpdate(coin: Coin): Coin {
    let obj: Coin = coin;

    if (obj) {
      for (let propName in obj) {
        if (!(propName === 'emissionInfo') && (propName !== '_id')) {
          delete obj[propName];
        }
      }
      return obj;
    }
    return;
  }
}
