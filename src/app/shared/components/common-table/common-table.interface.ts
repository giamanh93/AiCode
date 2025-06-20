export interface ColumnConfig {
    field: string;
    label: string;
    type: 'text' | 'date' | 'boolean' | 'image' | 'custom' | 'number';
    visible: boolean;
    sortable?: boolean;
    width?: string;
    format?: string;
    align?: 'left' | 'center' | 'right';
} 