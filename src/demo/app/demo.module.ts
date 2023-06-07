import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BidiModule } from '@angular/cdk/bidi';

import { DemoComponent } from './demo.component';
import { PositioningDemo } from './positioning/positioning.component';
import { ActionAPIDemo } from './action-api/action-api.component';
import { ScrollStrategiesDemo } from './scroll-strategies/scroll-strategies.component';
import { SelectTriggerDemo } from './select-trigger/select-trigger.component';
import { FocusDemo } from './focus/focus.component';
import { TransitionsDemo } from './transitions/transitions.component';
import { TooltipDemo } from './tooltip/tooltip.component';
import { SpeedDialDemo } from './speed-dial/speed-dial.component';
import { InteractiveCloseDemo } from './interactive-close/interactive-close.component';
import { AnchorReuseComponent } from './anchor-reuse/anchor-reuse.component';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSlideToggleModule,
    BidiModule
  ]
})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    DemoComponent,
    PositioningDemo,
    ActionAPIDemo,
    ScrollStrategiesDemo,
    SelectTriggerDemo,
    FocusDemo,
    TransitionsDemo,
    TooltipDemo,
    SpeedDialDemo,
    InteractiveCloseDemo,
    AnchorReuseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    SatPopoverModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
