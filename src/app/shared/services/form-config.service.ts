import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { FormConfig } from '../components/common-form/common-form.interface';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {
  private baseUrl = 'http://localhost:3000'; // json-server URL

  constructor(private http: HttpClient) {}

  /**
   * Lấy form config cho một bảng cụ thể
   * @param tableName Tên bảng (ví dụ: 'suppliers', 'customers')
   * @returns Observable<FormConfig>
   */
  getFormConfig(tableName: string): Observable<FormConfig> {
    const formFieldsKey = `${tableName}_form_fields`;
    return this.http.get<any>(`${this.baseUrl}/${formFieldsKey}`).pipe(
      map(response => {
        if (response && response[formFieldsKey]) {
          return response[formFieldsKey];
        }
        throw new Error(`Form config not found for table: ${tableName}`);
      })
    );
  }

  /**
   * Lấy tất cả form configs
   * @returns Observable<{[key: string]: FormConfig}>
   */
  getAllFormConfigs(): Observable<{[key: string]: FormConfig}> {
    return this.http.get<any>(`${this.baseUrl}/mock_data_with_forms`).pipe(
      map(data => {
        const formConfigs: {[key: string]: FormConfig} = {};
        
        // Tìm tất cả các key có tiền tố _form_fields
        Object.keys(data).forEach(key => {
          if (key.endsWith('_form_fields')) {
            const tableName = key.replace('_form_fields', '');
            formConfigs[tableName] = data[key];
          }
        });
        
        return formConfigs;
      })
    );
  }

  /**
   * Lấy danh sách tên bảng có form config
   * @returns Observable<string[]>
   */
  getAvailableTables(): Observable<string[]> {
    return this.getAllFormConfigs().pipe(
      map(configs => Object.keys(configs))
    );
  }

  /**
   * Lấy form config với options được populate từ data
   * @param tableName Tên bảng
   * @param optionsTable Tên bảng chứa options (ví dụ: 'categories' cho materials)
   * @param optionsField Field để map (ví dụ: 'categoryId')
   * @returns Observable<FormConfig>
   */
  getFormConfigWithOptions(
    tableName: string, 
    optionsTable: string, 
    optionsField: string
  ): Observable<FormConfig> {
    return this.http.get<any>(`${this.baseUrl}/${tableName}_form_fields`).pipe(
      switchMap(formConfig => {
        // Lấy data từ options table để populate options
        return this.http.get<any[]>(`${this.baseUrl}/${optionsTable}`).pipe(
          map(optionsData => {
            // Tìm field cần populate options
            const fieldToUpdate = formConfig.fields.find(
              (field: any) => field.key === optionsField
            );
            
            if (fieldToUpdate) {
              // Tạo options từ data
              fieldToUpdate.options = optionsData.map(item => ({
                label: item.name || item[`${optionsTable.slice(0, -1)}Name`] || item.id,
                value: item.id
              }));
            }
            
            return formConfig;
          })
        );
      })
    );
  }

  /**
   * Lấy form config cho suppliers với categories và units
   */
  getMaterialsFormConfig(): Observable<FormConfig> {
    return this.http.get<any>(`${this.baseUrl}/materials_form_fields`).pipe(
      map(formConfig => {
        // Clone form config để không ảnh hưởng đến original
        const config = JSON.parse(JSON.stringify(formConfig));
        
        // Populate categories options
        const categoryField = config.fields.find((f: any) => f.key === 'categoryId');
        if (categoryField) {
          categoryField.options = [
            { label: "Gạch xây dựng", value: 1 },
            { label: "Xi măng", value: 2 },
            { label: "Sắt thép", value: 3 },
            { label: "Cát đá", value: 4 },
            { label: "Sơn", value: 5 }
          ];
        }
        
        // Populate units options
        const unitField = config.fields.find((f: any) => f.key === 'unitId');
        if (unitField) {
          unitField.options = [
            { label: "Viên", value: 1 },
            { label: "Bao", value: 2 },
            { label: "Kg", value: 3 },
            { label: "m3", value: 4 },
            { label: "Thùng", value: 5 }
          ];
        }
        
        return config;
      })
    );
  }

  /**
   * Lấy form config cho categories với parent categories
   */
  getCategoriesFormConfig(): Observable<FormConfig> {
    return this.http.get<any>(`${this.baseUrl}/categories_form_fields`).pipe(
      map(formConfig => {
        const config = JSON.parse(JSON.stringify(formConfig));
        
        // Populate parent categories options
        const parentField = config.fields.find((f: any) => f.key === 'parentId');
        if (parentField) {
          parentField.options = [
            { label: "Không có", value: null },
            { label: "Gạch xây dựng", value: 1 },
            { label: "Xi măng", value: 2 },
            { label: "Sắt thép", value: 3 },
            { label: "Cát đá", value: 4 },
            { label: "Sơn", value: 5 }
          ];
        }
        
        return config;
      })
    );
  }
} 