export interface ColumnConfig {
  field: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'boolean' | 'image' | 'button' | 'custom';
  sortable?: boolean;
  filterable?: boolean;
  editable?: boolean;
  required?: boolean;
  visible?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  format?: string; // e.g., 'dd/MM/yyyy' for date, or a currency format
  options?: any[]; // For select/lookup
  customRender?: any; // For custom components/functions
  action?: (row: any) => void; // For button clicks
} 