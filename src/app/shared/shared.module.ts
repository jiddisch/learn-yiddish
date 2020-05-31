import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoRootModule } from '../transloco-root.module';
import { IncreaseByOnePipe } from './increase-by-one/increase-by-one.pipe';

@NgModule({
    declarations: [ToolbarComponent, IncreaseByOnePipe],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        FontAwesomeModule,
        TranslocoRootModule
    ],
    exports: [
        CommonModule,
        IonicModule,
        ToolbarComponent,
        FontAwesomeModule,
        TranslocoRootModule
    ]
})
export class SharedModule {}
