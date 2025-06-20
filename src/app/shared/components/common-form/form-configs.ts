import { FormConfig } from './common-form.interface';

export const SUPPLIER_FORM_CONFIG: FormConfig = {
  formGroupTitle: "Thông tin nhà cung cấp",
  fields: [
    {
      key: "supplier_code",
      type: "input",
      label: "Mã nhà cung cấp",
      required: true,
      readonly: true,
      placeholder: "Tự động sinh",
      columns: "col-6"
    },
    {
      key: "supplier_name",
      type: "input",
      label: "Tên nhà cung cấp",
      required: true,
      placeholder: "Nhập tên",
      columns: "col-6"
    },
    {
      key: "phone",
      type: "input",
      label: "Số điện thoại",
      placeholder: "VD: 0901234567",
      validators: {
        pattern: "^[0-9]{10,11}$"
      },
      columns: "col-6"
    },
    {
      key: "email",
      type: "email",
      label: "Email",
      placeholder: "example@email.com",
      validators: {
        email: true
      },
      columns: "col-6"
    },
    {
      key: "active",
      type: "checkbox",
      label: "Đang hoạt động",
      defaultValue: true,
      columns: "col-6"
    },
    {
      key: "supplier_type",
      type: "select",
      label: "Loại nhà cung cấp",
      options: [
        { label: "Cá nhân", value: "personal" },
        { label: "Doanh nghiệp", value: "business" }
      ],
      required: true,
      columns: "col-6"
    },
    {
      key: "address",
      type: "textarea",
      label: "Địa chỉ",
      placeholder: "Nhập địa chỉ đầy đủ",
      columns: "col-12"
    },
    {
      key: "tax_code",
      type: "input",
      label: "Mã số thuế",
      placeholder: "Nhập mã số thuế",
      columns: "col-6"
    },
    {
      key: "establishment_date",
      type: "date",
      label: "Ngày thành lập",
      columns: "col-6"
    },
    {
      key: "capital",
      type: "number",
      label: "Vốn điều lệ (VNĐ)",
      placeholder: "0",
      validators: {
        min: 0
      },
      columns: "col-6"
    },
    {
      key: "website",
      type: "input",
      label: "Website",
      placeholder: "https://example.com",
      columns: "col-6"
    }
  ],
  submitButtonText: "Lưu nhà cung cấp",
  cancelButtonText: "Hủy",
  showCancelButton: true
};

export const CUSTOMER_FORM_CONFIG: FormConfig = {
  formGroupTitle: "Thông tin khách hàng",
  fields: [
    {
      key: "customer_code",
      type: "input",
      label: "Mã khách hàng",
      required: true,
      readonly: true,
      placeholder: "Tự động sinh",
      columns: "col-6"
    },
    {
      key: "customer_name",
      type: "input",
      label: "Tên khách hàng",
      required: true,
      placeholder: "Nhập tên khách hàng",
      columns: "col-6"
    },
    {
      key: "phone",
      type: "input",
      label: "Số điện thoại",
      required: true,
      placeholder: "VD: 0901234567",
      validators: {
        pattern: "^[0-9]{10,11}$"
      },
      columns: "col-6"
    },
    {
      key: "email",
      type: "email",
      label: "Email",
      placeholder: "example@email.com",
      validators: {
        email: true
      },
      columns: "col-6"
    },
    {
      key: "customer_type",
      type: "select",
      label: "Loại khách hàng",
      options: [
        { label: "Cá nhân", value: "personal" },
        { label: "Doanh nghiệp", value: "business" },
        { label: "VIP", value: "vip" }
      ],
      required: true,
      columns: "col-6"
    },
    {
      key: "status",
      type: "select",
      label: "Trạng thái",
      options: [
        { label: "Hoạt động", value: "active" },
        { label: "Không hoạt động", value: "inactive" },
        { label: "Tạm khóa", value: "suspended" }
      ],
      defaultValue: "active",
      columns: "col-6"
    },
    {
      key: "address",
      type: "textarea",
      label: "Địa chỉ",
      placeholder: "Nhập địa chỉ đầy đủ",
      columns: "col-12"
    },
    {
      key: "birth_date",
      type: "date",
      label: "Ngày sinh",
      columns: "col-6"
    },
    {
      key: "gender",
      type: "radio",
      label: "Giới tính",
      options: [
        { label: "Nam", value: "male" },
        { label: "Nữ", value: "female" },
        { label: "Khác", value: "other" }
      ],
      columns: "col-6"
    }
  ],
  submitButtonText: "Lưu khách hàng",
  cancelButtonText: "Hủy",
  showCancelButton: true
};

export const USER_FORM_CONFIG: FormConfig = {
  formGroupTitle: "Thông tin người dùng",
  fields: [
    {
      key: "username",
      type: "input",
      label: "Tên đăng nhập",
      required: true,
      placeholder: "Nhập tên đăng nhập",
      validators: {
        minLength: 3,
        maxLength: 20
      },
      columns: "col-6"
    },
    {
      key: "email",
      type: "email",
      label: "Email",
      required: true,
      placeholder: "example@email.com",
      validators: {
        email: true
      },
      columns: "col-6"
    },
    {
      key: "password",
      type: "password",
      label: "Mật khẩu",
      required: true,
      placeholder: "Nhập mật khẩu",
      validators: {
        minLength: 6
      },
      columns: "col-6"
    },
    {
      key: "confirm_password",
      type: "password",
      label: "Xác nhận mật khẩu",
      required: true,
      placeholder: "Nhập lại mật khẩu",
      columns: "col-6"
    },
    {
      key: "full_name",
      type: "input",
      label: "Họ và tên",
      required: true,
      placeholder: "Nhập họ và tên đầy đủ",
      columns: "col-12"
    },
    {
      key: "phone",
      type: "input",
      label: "Số điện thoại",
      placeholder: "VD: 0901234567",
      validators: {
        pattern: "^[0-9]{10,11}$"
      },
      columns: "col-6"
    },
    {
      key: "role",
      type: "select",
      label: "Vai trò",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Manager", value: "manager" },
        { label: "User", value: "user" }
      ],
      required: true,
      columns: "col-6"
    },
    {
      key: "is_active",
      type: "checkbox",
      label: "Tài khoản hoạt động",
      defaultValue: true,
      columns: "col-6"
    },
    {
      key: "avatar",
      type: "file",
      label: "Ảnh đại diện",
      columns: "col-6"
    }
  ],
  submitButtonText: "Tạo người dùng",
  cancelButtonText: "Hủy",
  showCancelButton: true
}; 