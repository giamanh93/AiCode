# Hướng dẫn cài đặt và tích hợp PrimeNG với Tailwind CSS

## 1. Tạo dự án Angular mới

```bash
# Cài đặt Angular CLI nếu chưa có
npm install -g @angular/cli

# Tạo dự án mới
ng new angular-prime-tailwind
cd angular-prime-tailwind
```

## 2. Cài đặt PrimeNG

```bash
# Cài đặt PrimeNG và các dependencies
npm install primeng@latest
npm install primeicons
```

## 3. Cài đặt Tailwind CSS

```bash
# Cài đặt Tailwind CSS và các dependencies
npm install -D tailwindcss postcss autoprefixer
npm install -D tailwindcss-primeui

# Khởi tạo Tailwind CSS
npx tailwindcss init
```

## 4. Cấu hình Tailwind CSS

Cập nhật file `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: ['selector', '[class~="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI]
};
```

## 5. Cấu hình Angular

Cập nhật file `src/app/app.config.ts`:

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities'
          }
        }
      },
      ripple: true,
      inputVariant: 'outlined'
    })
  ]
};
```

## 6. Cấu hình Styles

Cập nhật file `src/styles.scss`:

```scss
@layer tailwind-base, primeng, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
```

## 7. Sử dụng trong Components

Ví dụ sử dụng trong component:

```html
<!-- home.component.html -->
<div class="min-h-screen bg-surface-0 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 bg-surface-50 shadow-lg sm:rounded-3xl sm:p-20">
      <p-card [style]="{'width': '360px'}" styleClass="shadow-2">
        <ng-template pTemplate="header">
          <div class="text-center p-4">
            <h1 class="text-2xl font-bold text-primary-900">{{ title }}</h1>
          </div>
        </ng-template>
        <div class="text-center">
          <p class="text-muted-color mb-4">This is a sample component</p>
          <p-button 
            label="Click Me" 
            icon="pi pi-check" 
            styleClass="p-button-success" 
            pRipple
            class="hover:bg-primary-600 transition-colors duration-200">
          </p-button>
        </div>
      </p-card>
    </div>
  </div>
</div>
```

## 8. Các tính năng đã tích hợp

1. **PrimeNG Components**:
   - Sử dụng tất cả components của PrimeNG
   - Tích hợp với theme Aura
   - Hỗ trợ dark mode

2. **Tailwind CSS**:
   - Utility classes của Tailwind
   - Tích hợp với PrimeNG theme colors
   - Responsive design

3. **Dark Mode**:
   - Tự động chuyển đổi theme
   - Sử dụng class `.dark` để kích hoạt

## 9. Lưu ý quan trọng

1. **CSS Layers**:
   - Thứ tự layer rất quan trọng
   - `tailwind-base` -> `primeng` -> `tailwind-utilities`

2. **Theme Colors**:
   - Sử dụng các biến màu của PrimeNG
   - Ví dụ: `bg-surface-0`, `text-primary-900`

3. **Responsive Design**:
   - Sử dụng các breakpoints của Tailwind
   - Ví dụ: `sm:`, `md:`, `lg:`

## 10. Troubleshooting

1. **Styles không được áp dụng**:
   - Kiểm tra thứ tự CSS layers
   - Đảm bảo đã import đúng các styles

2. **Dark mode không hoạt động**:
   - Kiểm tra class `.dark` trên element cha
   - Kiểm tra cấu hình `darkModeSelector`

3. **PrimeNG components không hiển thị đúng**:
   - Kiểm tra cấu hình `providePrimeNG`
   - Đảm bảo đã import đúng module 