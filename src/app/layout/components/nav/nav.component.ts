import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavComponent {
  @Input() isCollapsed = false;

  menuItems = [
    { icon: 'pi pi-home', label: 'Dashboard', route: '/dashboard' },
    { icon: 'pi pi-users', label: 'Khách hàng', route: '/customers' },
    { icon: 'pi pi-box', label: 'Sản phẩm', route: '/products' },
    { icon: 'pi pi-file', label: 'Đơn hàng', route: '/orders' },
    { icon: 'pi pi-chart-bar', label: 'Báo cáo', route: '/reports' },
    { icon: 'pi pi-cog', label: 'Cài đặt', route: '/settings' },
    { icon: 'pi pi-pencil', label: 'Form Demo', route: '/form-demo' }
  ];
} 