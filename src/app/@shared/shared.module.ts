import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [ToolbarComponent],
    imports: [
        CommonModule,
        IonicModule,
        TranslateModule,
        RouterModule,
        FontAwesomeModule
    ],
    exports: [
        CommonModule,
        IonicModule,
        TranslateModule,
        ToolbarComponent,
        FontAwesomeModule
    ]
})
export class SharedModule {}
