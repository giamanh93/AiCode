export interface FormField {
  key: string;
  type: 'input' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'date' | 'number' | 'email' | 'password' | 'file' | 'custom';
  label: string;
  required?: boolean;
  readonly?: boolean;
  placeholder?: string;
  defaultValue?: any;
  columns?: string; // col-6, col-12, etc.
  options?: Array<{ label: string; value: any }>;
  validators?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    email?: boolean;
    min?: number;
    max?: number;
  };
  disabled?: boolean;
  hidden?: boolean;
  helpText?: string;
  customRender?: string; // Component name for custom rendering
}

export interface FormConfig {
  formGroupTitle?: string;
  fields: FormField[];
  submitButtonText?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  layout?: 'horizontal' | 'vertical';
  size?: 'small' | 'normal' | 'large';
}

export interface FormData {
  [key: string]: any;
} 