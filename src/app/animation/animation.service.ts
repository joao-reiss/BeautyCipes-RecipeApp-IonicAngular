import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private animationCtrl: AnimationController) { 

  }

  private AnimationCenter = (baseEl: any) => {

    const backdropAnimation = this.animationCtrl.create()
      .addElement(baseEl.querySelector('ion-backdrop'))
      .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
      .beforeStyles({
        'pointer-events': 'none'
      })
      .afterClearStyles(['pointer-events']);

    const transformAnimation = this.animationCtrl.create()
      .addElement(baseEl.querySelector('.popover-content'))
      .afterStyles( {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      });

    const wrapperAnimation = this.animationCtrl.create()
    .addElement(baseEl.querySelector('.popover-wrapper'))
    .addElement(baseEl.querySelector('.popover-viewport'))
    .fromTo('opacity', 0.01, 1);

    return this.animationCtrl.create()
      .addElement(baseEl)
      .easing('cubic-bezier(0.36,0.66,0.04,1)')
      .duration(300)
      .addAnimation([backdropAnimation, wrapperAnimation, transformAnimation]);
  }
}
