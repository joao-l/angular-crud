import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { User } from '../../../shared/index';
import { UserService } from '../../../shared/services/user.service';
import { Message } from 'primeng/components/common/message';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  msgs: Message[];
  userChange: User = new User();

  constructor(private userService: UserService, private confirmationService: ConfirmationService) { }

  ngOnInit() { }

  onChange(event, type) {
    if (type) {
      this.userChange[type] = event;
    }
  }

  save() {
    this.userChange._id = this.user._id;

    this.confirmationService.confirm({
      message: 'Deseja salvar as alterações ?',
      header: 'Alteração de Usuario',
      accept: () => {
        this.userService.updateUser(this.userChange).subscribe(res => console.log(res));
        this.msgs = [{ severity: 'info', summary: 'Salvo', detail: 'Usuario alterado com sucesso!' }];
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Cancelado', detail: 'Alteração cancelada!' }];
      }
    });
  }
}
