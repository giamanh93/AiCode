import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Observable, catchError, of, switchMap, tap, map } from 'rxjs';
import { ColumnConfig } from '../../shared/components/common-table/common-table.interface';
import { CommonTableComponent } from '../../shared/components/common-table/common-table.component';

// PrimeNG Modules
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PopoverModule } from 'primeng/popover';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CommonTableComponent,
    BreadcrumbModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    PopoverModule
  ],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  customers$!: Observable<any[]>;
  filteredCustomers$!: Observable<any[]>;
  columns$!: Observable<ColumnConfig[]>;
  selectedCustomers: any[] = [];

  // Filter properties
  taxCodeFilter: string = '';
  phoneFilter: string = '';
  statusFilter: any = null;
  
  // Status options for dropdown
  statusOptions = [
    { label: 'Tất cả', value: null },
    { label: 'Hoạt động', value: true },
    { label: 'Không hoạt động', value: false }
  ];

  // Filter count for badge
  get filterCount(): number {
    let count = 0;
    if (this.taxCodeFilter) count++;
    if (this.phoneFilter) count++;
    if (this.statusFilter !== null) count++;
    return count;
  }

  constructor(
    private apiService: ApiService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.items = [{ label: 'Customers' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.loadData();
  }

  loadData() {
    this.columns$ = this.apiService.getCustomerFields().pipe(catchError(() => of([])));
    this.customers$ = this.apiService.getCustomers().pipe(catchError(() => of([])));
    
    // Apply filters
    this.applyFilters();
  }

  applyFilters() {
    this.filteredCustomers$ = this.customers$.pipe(
      map(customers => {
        if (!customers) return [];
        
        return customers.filter(customer => {
          // Filter by tax code
          if (this.taxCodeFilter && customer.taxCode) {
            if (!customer.taxCode.toLowerCase().includes(this.taxCodeFilter.toLowerCase())) {
              return false;
            }
          }
          
          // Filter by phone
          if (this.phoneFilter && customer.phone) {
            if (!customer.phone.includes(this.phoneFilter)) {
              return false;
            }
          }
          
          // Filter by status
          if (this.statusFilter !== null && customer.isActive !== this.statusFilter) {
            return false;
          }
          
          return true;
        });
      })
    );
  }

  onTaxCodeFilterChange() {
    this.applyFilters();
  }

  onPhoneFilterChange() {
    this.applyFilters();
  }

  onStatusFilterChange() {
    this.applyFilters();
  }

  clearFilters() {
    this.taxCodeFilter = '';
    this.phoneFilter = '';
    this.statusFilter = null;
    this.applyFilters();
  }

  handleAction(event: { action: string, row: any }) {
    if (event.action === 'delete') {
      this.deleteCustomer(event.row);
    }
  }

  deleteCustomer(customer: any) {
    this.confirmationService.confirm({
      message: `Bạn có chắc chắn muốn xóa khách hàng "${customer.customerName}"?`,
      header: 'Xác nhận xóa',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiService.deleteCustomer(customer.id).pipe(
          tap(() => {
            this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Đã xóa khách hàng' });
            this.loadData(); // Tải lại dữ liệu
            this.selectedCustomers = [];
          }),
          catchError(err => {
            this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Không thể xóa khách hàng' });
            return of(null);
          })
        ).subscribe();
      }
    });
  }

  deleteSelectedCustomers() {
    // Logic sẽ được thêm vào sau
    console.log('Deleting selected customers:', this.selectedCustomers);
  }

  onRowSelect(event: any) {
    console.log('Row selected:', event.data);
  }

  onRowUnselect(event: any) {
    console.log('Row unselected:', event.data);
  }
} 