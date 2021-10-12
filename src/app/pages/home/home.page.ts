import { RegisterComponent } from './../register/register.component';
import { LoginComponent } from './../login/login.component';
import { AnimationService } from './../../animation/animation.service';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( 
    private animation: AnimationService,
    private popoverController: PopoverController,
    public loginComponent: LoginComponent,
    public registerComponent: RegisterComponent 
    ) {}

    async Login(any)
    {
      const popover = await this.popoverController.create({
        component: LoginComponent,
        cssClass: 'myCode',
        event: any,
        translucent: true,
        enterAnimation: this.animation.AnimationCenter
      });
      await popover.present();
    }

    async Register(any)
    {
      const popover = await this.popoverController.create({
        component: RegisterComponent,
        cssClass: 'myCode',
        event: any,
        translucent: true,
        enterAnimation: this.animation.AnimationCenter
      });
      await popover.present();
    }
  

}
