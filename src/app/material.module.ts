import {NgModule} from '@angular/core';

import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule
  ]
})
export class MaterialModule {
}
