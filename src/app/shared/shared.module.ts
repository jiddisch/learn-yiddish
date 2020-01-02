import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [MenuComponent],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        IonicModule,
        MenuComponent,
        TranslateModule
    ]
})
export class SharedModule {}
