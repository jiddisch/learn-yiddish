import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MenuComponent],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        IonicModule,
        TranslateModule,
        MenuComponent
    ]
})
export class SharedModule {}
