import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Side, Coin, CoinService } from '../../../../shared/index';
import { ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/components/common/message';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-side-edit',
  templateUrl: './side-edit.component.html',
  styleUrls: ['./side-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideEditComponent implements OnInit {
  @Input() sides: Side[];
  @Input() id: string;
  imageAction: string;
  imageIndexAction: number;
  coinChange: Coin;
  msgs: Message[];
  items: MenuItem[];

  constructor(
    private coinService: CoinService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.coinChange = new Coin();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Atualizar', icon: 'fa-refresh', command: () => {
          this.updateImage();
        }
      },
      {
        label: 'Remover', icon: 'fa-close', command: () => {
          this.deleteImage();
        }
      }
    ];
  }

  saveImgOptions(action: string, index: number) {
    this.imageAction = '';
    this.imageAction = action;
    this.imageIndexAction = undefined;
    this.imageIndexAction = index;
  }

  updateImage() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: '', detail: 'Imagem Atualizada!' });
  }

  deleteImage() {
    this.coinChange.side = this.sides;
    switch (this.imageAction) {
      case 'small': {
        this.sides[this.imageIndexAction].officialImage.smallSize = '';
        this.coinChange.side[this.imageIndexAction].officialImage.smallSize = '';
        break;
      }
      case 'medium': {
        this.sides[this.imageIndexAction].officialImage.mediumSize = '';
        this.coinChange.side[this.imageIndexAction].officialImage.mediumSize = '';
        break;
      }
      case 'large': {
        this.sides[this.imageIndexAction].officialImage.largeSize = '';
        this.coinChange.side[this.imageIndexAction].officialImage.largeSize = '';
        break;
      }
      case 'full': {
        this.sides[this.imageIndexAction].officialImage.fullSize = '';
        this.coinChange.side[this.imageIndexAction].officialImage.fullSize = '';
        break;
      }
      default: {
        break;
      }
    }

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: '', detail: 'Imagem Removida' });
  }

  open(content) {
    this.modalService
      .open(content)
      .result.then((result) => { }, (reason) => { this.save(reason); });
  }

  onChange(event, type: string) {
    if (!this.coinChange._id) {
      this.coinChange._id = this.id;
    }

    this.coinChange.side = this.sides;
  }

  save(reason: string) {
    if (reason === 'Salvo') {
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
        if (!(propName === 'side') && (propName !== '_id')) {
          delete obj[propName];
        }
      }
      return obj;
    }
    return;
  }
}
