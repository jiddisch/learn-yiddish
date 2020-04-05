import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [ToolbarComponent],
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
        ToolbarComponent
    ]
})
export class SharedModule {}
