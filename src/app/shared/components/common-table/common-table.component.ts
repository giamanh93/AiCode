import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ColumnConfig } from './common-table.interface';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    TagModule,
    ButtonModule,
    InputTextModule
  ]
})
export class CommonTableComponent {
  @Input() data: any[] = [];
  @Input() columns: ColumnConfig[] = [];
  @Input() selection: any[] = [];
  @Input() dataKey: string = 'id';
  @Input() selectionMode: 'single' | 'multiple' = 'multiple';
  @Input() metaKeySelection: boolean = false;
  @Input() showGridlines: boolean = false;
  @Input() stripedRows: boolean = false;
  @Input() size: 'small' | 'large' = 'small';
  @Input() paginator: boolean = true;
  @Input() rows: number = 10;
  @Input() rowsPerPageOptions: number[] = [10, 25, 50];
  @Input() showCurrentPageReport: boolean = true;
  @Input() currentPageReportTemplate: string = 'Hiển thị {first} đến {last} của {totalRecords} bản ghi';
  
  @Output() selectionChange = new EventEmitter<any[]>();
  @Output() action = new EventEmitter<{ action: string, row: any }>();
  @Output() onRowSelect = new EventEmitter<any>();
  @Output() onRowUnselect = new EventEmitter<any>();

  handleAction(action: string, row: any) {
    this.action.emit({ action, row });
  }

  onSelectionChange(value: any[]) {
    this.selection = value;
    this.selectionChange.emit(this.selection);
  }

  handleRowSelect(event: any) {
    this.onRowSelect.emit(event);
  }

  handleRowUnselect(event: any) {
    this.onRowUnselect.emit(event);
  }
} 