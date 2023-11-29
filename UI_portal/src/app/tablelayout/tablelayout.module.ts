import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TablelayoutComponent } from './tablelayout.component';

// bootstrap modules
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';



const route = [
  { path: '', component: TablelayoutComponent, pathmatch: 'full' }
]

@NgModule({
  declarations: [
    TablelayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    TableModule,
    HttpClientModule,
    MultiSelectModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    TagModule
  ]
})
export class TablelayoutModule { }
