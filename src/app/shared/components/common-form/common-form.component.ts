import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormField, FormConfig, FormData } from './common-form.interface';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    RadioButtonModule,
    CalendarModule,
    InputNumberModule,
    PasswordModule,
    FileUploadModule,
    ButtonModule,
    CardModule,
    MessageModule
  ]
})
export class CommonFormComponent implements OnInit, OnDestroy {
  @Input() config!: FormConfig;
  @Input() data: FormData = {};
  @Input() loading: boolean = false;
  
  @Output() onSubmit = new EventEmitter<FormData>();
  @Output() onCancel = new EventEmitter<void>();
  @Output() onFormChange = new EventEmitter<FormData>();

  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.patchFormData();
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  createForm(): void {
    const group: any = {};
    
    this.config.fields.forEach(field => {
      const validators = this.buildValidators(field);
      const defaultValue = field.defaultValue !== undefined ? field.defaultValue : '';
      
      group[field.key] = [defaultValue, validators];
    });

    this.form = this.fb.group(group);
    
    // Listen to form changes
    this.form.valueChanges.subscribe(value => {
      this.onFormChange.emit(value);
    });
  }

  buildValidators(field: FormField): any[] {
    const validators = [];
    
    if (field.required) {
      validators.push(Validators.required);
    }
    
    if (field.validators) {
      if (field.validators.minLength) {
        validators.push(Validators.minLength(field.validators.minLength));
      }
      if (field.validators.maxLength) {
        validators.push(Validators.maxLength(field.validators.maxLength));
      }
      if (field.validators.pattern) {
        validators.push(Validators.pattern(field.validators.pattern));
      }
      if (field.validators.email) {
        validators.push(Validators.email);
      }
      if (field.validators.min !== undefined) {
        validators.push(Validators.min(field.validators.min));
      }
      if (field.validators.max !== undefined) {
        validators.push(Validators.max(field.validators.max));
      }
    }
    
    return validators;
  }

  patchFormData(): void {
    if (this.data && Object.keys(this.data).length > 0) {
      this.form.patchValue(this.data);
    }
  }

  getFieldError(fieldKey: string): string {
    const field = this.form.get(fieldKey);
    if (field && field.errors && this.submitted) {
      if (field.errors['required']) {
        return 'Trường này là bắt buộc';
      }
      if (field.errors['minlength']) {
        return `Tối thiểu ${field.errors['minlength'].requiredLength} ký tự`;
      }
      if (field.errors['maxlength']) {
        return `Tối đa ${field.errors['maxlength'].requiredLength} ký tự`;
      }
      if (field.errors['pattern']) {
        return 'Định dạng không hợp lệ';
      }
      if (field.errors['email']) {
        return 'Email không hợp lệ';
      }
      if (field.errors['min']) {
        return `Giá trị tối thiểu là ${field.errors['min'].min}`;
      }
      if (field.errors['max']) {
        return `Giá trị tối đa là ${field.errors['max'].max}`;
      }
    }
    return '';
  }

  isFieldInvalid(fieldKey: string): boolean {
    const field = this.form.get(fieldKey);
    return !!(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  handleSubmit(): void {
    this.submitted = true;
    
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);
    }
  }

  handleCancel(): void {
    this.onCancel.emit();
  }

  getFieldClass(field: FormField): string {
    return field.columns || 'col-12';
  }

  isFieldVisible(field: FormField): boolean {
    return !field.hidden;
  }
} 