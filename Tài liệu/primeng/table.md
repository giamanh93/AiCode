Table
Table displays data in tabular format.

Import

import { TableModule } from 'primeng/table';

Basic
DataTable requires a collection to display along with column components for the representation of the data.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

Dynamic Columns
Columns can be defined dynamically using the *ngFor directive.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [columns]="cols" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowData let-columns="columns">
        <tr>
            <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>

Template
Custom content at header, body and footer sections are supported via templating.

Products
Name	Image	Price	Category	Reviews	Status
Bamboo Watch	Bamboo Watch	$65.00	Accessories	





INSTOCK
Black Watch	Black Watch	$72.00	Accessories	





INSTOCK
Blue Band	Blue Band	$79.00	Fitness	





LOWSTOCK
Blue T-Shirt	Blue T-Shirt	$29.00	Clothing	





INSTOCK
Bracelet	Bracelet	$15.00	Accessories	





INSTOCK
In total there are 5 products.

<p-table [value]="products" [tableStyle]="{ 'min-width': '60rem' }">
    <ng-template #caption>
        <div class="flex items-center justify-between">
            <span class="text-xl font-bold">Products</span>
            <p-button icon="pi pi-refresh" rounded raised />
        </div>
    </ng-template>
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Reviews</th>
            <th>Status</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.name }}</td>
            <td>
                <img
                    [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                    [alt]="product.name"
                    class="w-24 rounded"
                />
            </td>
            <td>{{ product.price | currency: 'USD' }}</td>
            <td>{{ product.category }}</td>
            <td><p-rating [(ngModel)]="product.rating" [readonly]="true" [cancel]="false" /></td>
            <td>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
            </td>
        </tr>
    </ng-template>
    <ng-template #footer> In total there are {{ products ? products.length : 0 }} products. </ng-template>
</p-table>

Size
In addition to a regular table, alternatives with alternative sizes are available.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<div class="flex justify-center mb-4">
    <p-selectbutton [options]="sizes" [(ngModel)]="selectedSize" [multiple]="false" optionLabel="name" optionValue="value" />
</div>
<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }" [size]="selectedSize">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

Grid Lines
Enabling showGridlines displays borders between cells.


<p-table
    [value]="products"
    showGridlines
    [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template #body let-product>
            <tr>
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </ng-template>
</p-table>

Striped Rows
Alternating rows are displayed when stripedRows property is present.


<p-table [value]="products" stripedRows [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>

Conditional Style
Certain rows or cells can easily be styled based on conditions.


<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr [ngClass]="rowClass(product)" [ngStyle]="rowStyle(product)">
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>
                <p-badge [value]="product.quantity" [severity]="stockSeverity(product)" />
            </td>
        </tr>
    </ng-template>
</p-table>

Pagination
Basic
Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page.


<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [tableStyle]="{ 'min-width': '50rem' }"
    [rowsPerPageOptions]="[5, 10, 20]"
>
    <ng-template #header>
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
</p-table>

Programmatic
Paginator can also be controlled via model using a binding to the first property where changes trigger a pagination.


<div class="mb-4">
    <p-button type="button" icon="pi pi-chevron-left" (click)="prev()" [disabled]="isFirstPage()" text />
    <p-button type="button" icon="pi pi-refresh" (click)="reset()" text />
    <p-button type="button" icon="pi pi-chevron-right" (click)="next()" [disabled]="isLastPage()" text />
</div>
<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [first]="first"
    [showCurrentPageReport]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    (onPage)="pageChange($event)"
    [rowsPerPageOptions]="[10, 25, 50]"
>
    <ng-template #header>
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
    <ng-template #paginatorleft>
        <p-button type="button" icon="pi pi-plus" text />
    </ng-template>
    <ng-template #paginatorright>
        <p-button type="button" icon="pi pi-cloud" text />
    </ng-template>
</p-table>

Sort
Single Column
A column can be made sortable by adding the pSortableColumn directive whose value is the field to sort against and a sort indicator via p-sortIcon component. For dynamic columns, setting pSortableColumnDisabled property as true disables sorting for that particular column.

Default sorting is executed on a single column, in order to enable multiple field sorting, set sortMode property to "multiple" and use metakey when clicking on another column.

f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
    <ng-template #header>
        <tr>
            <th pSortableColumn="code" style="width:20%">
                Code <p-sortIcon field="code" />
            </th>
            <th pSortableColumn="name" style="width:20%">
                Name <p-sortIcon field="name" />
            </th>
            <th pSortableColumn="category" style="width:20%">
                Category <p-sortIcon field="category" />
            </th>
            <th pSortableColumn="quantity" style="width:20%">
                Quantity <p-sortIcon field="quantity" />
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

Multiple Columns
Multiple columns can be sorted by defining sortMode as multiple. This mode requires metaKey (e.g. ⌘) to be pressed when clicking a header.

f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [value]="products1" [tableStyle]="{'min-width': '60rem'}">
    <ng-template #header>
        <tr>
            <th pSortableColumn="code" style="width:20%">
                Code <p-sortIcon field="code" />
            </th>
            <th pSortableColumn="name" style="width:20%">
                Name <p-sortIcon field="name" />
            </th>
            <th pSortableColumn="category" style="width:20%">
                Category <p-sortIcon field="category" />
            </th>
            <th pSortableColumn="quantity" style="width:20%">
                Quantity <p-sortIcon field="quantity" />
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

Presort
Defining a default sortField and sortOrder displays data as sorted initially in single column sorting. In multiple sort mode, multiSortMeta should be used instead by providing an array of DataTableSortMeta objects.

zz21cz3c1	Blue Band	$79.00	Fitness	2
nvklal433	Black Watch	$72.00	Accessories	61
f230fh0g3	Bamboo Watch	$65.00	Accessories	24
244wgerg2	Blue T-Shirt	$29.00	Clothing	25
h456wer53	Bracelet	$15.00	Accessories	73

<p-table [value]="products" sortField="price" [sortOrder]="-1" [tableStyle]="{ 'min-width': '60rem' }">
    <ng-template #header>
        <tr>
            <th pSortableColumn="code" style="width:20%">
                Code <p-sortIcon field="code" />
            </th>
            <th pSortableColumn="name" style="width:20%">
                Name <p-sortIcon field="name" />
            </th>
            <th pSortableColumn="price" style="width:20%">
                Price <p-sortIcon field="price" />
            </th>
            <th pSortableColumn="category" style="width:20%">
                Category <p-sortIcon field="category" />
            </th>
            <th pSortableColumn="quantity" style="width:20%">
                Quantity <p-sortIcon field="quantity" />
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price | currency : 'USD' }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

Removable
The removable sort can be implemented using the customSort property.

f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table #dt [value]="products" (sortFunction)="customSort($event)" [customSort]="true">
    <ng-template #header>
        <tr>
            <th pSortableColumn="code">
                Code <p-sortIcon field="code" />
            </th>
            <th pSortableColumn="name">
                Name <p-sortIcon field="name" />
            </th>
            <th pSortableColumn="category">
                Category <p-sortIcon field="category" />
            </th>
            <th pSortableColumn="quantity">
                Quantity <p-sortIcon field="quantity" />
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

Filter
Basic
Data filtering is enabled by defining the filters property referring to a DataTableFilterMeta instance. Each column to filter also requires filter to be enabled. Built-in filter element is a input field and using filterElement, it is possible to customize the filtering with your own UI.

The optional global filtering searches the data against a single value that is bound to the global key of the filters object. The fields to search against is defined with the globalFilterFields.

Search keyword
Name	Country	Agent	Status	Verified
Search by name
Search by country
Any
James Butt	

Algeria
Ioni Bowcher
Ioni Bowcher
unqualified
Josephine Darakjy	

Egypt
Amy Elsner
Amy Elsner
negotiation
Art Venere	

Panama
Asiya Javayant
Asiya Javayant
qualified
Lenna Paprocki	

Slovenia
Xuxue Feng
Xuxue Feng
new
Donette Foller	

South Africa
Asiya Javayant
Asiya Javayant
negotiation
Simona Morasca	

Egypt
Ivan Magalhaes
Ivan Magalhaes
qualified
Mitsue Tollner	

Paraguay
Ivan Magalhaes
Ivan Magalhaes
renewal
Leota Dilliard	

Serbia
Onyama Limba
Onyama Limba
renewal
Sage Wieser	

Egypt
Ivan Magalhaes
Ivan Magalhaes
unqualified
Kris Marrier	

Mexico
Onyama Limba
Onyama Limba
negotiation

<p-table
    #dt2
    [value]="customers"
    dataKey="id"
    [rows]="10"
    [rowsPerPageOptions]="[10, 25, 50]"
    [loading]="loading"
    [paginator]="true"
    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
    [tableStyle]="{ 'min-width': '75rem' }"
>
    <ng-template #caption>
        <div class="flex">
            <p-iconfield iconPosition="left" class="ml-auto">
                <p-inputicon>
                    <i class="pi pi-search"></i>
                </p-inputicon>
                <input pInputText type="text" (input)="dt2.filterGlobal($event.target.value, 'contains')" placeholder="Search keyword" />
            </p-iconfield>
        </div>
    </ng-template>
    <ng-template #header>
        <tr>
            <th style="width:22%">Name</th>
            <th style="width:22%">Country</th>
            <th style="width:22%">Agent</th>
            <th style="width:22%">Status</th>
            <th style="width:12%">Verified</th>
        </tr>
        <tr>
            <th>
                <p-columnFilter type="text" field="name" placeholder="Search by name" ariaLabel="Filter Name"></p-columnFilter>
            </th>
            <th>
                <p-columnFilter type="text" field="country.name" placeholder="Search by country" ariaLabel="Filter Country"></p-columnFilter>
            </th>
            <th>
                <p-columnFilter field="representative" matchMode="in" [showMenu]="false">
                    <ng-template #filter let-value let-filter="filterCallback">
                        <p-multiselect [(ngModel)]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" style="min-width: 14rem" [panelStyle]="{ minWidth: '16rem' }">
                            <ng-template let-option #item>
                                <div class="flex items-center gap-2">
                                    <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" style="width: 32px" />
                                    <span>{{ option.name }}</span>
                                </div>
                            </ng-template>
                        </p-multiselect>
                    </ng-template>
                </p-columnFilter>
            </th>
            <th>
                <p-columnFilter field="status" matchMode="equals" [showMenu]="false">
                    <ng-template #filter let-value let-filter="filterCallback">
                        <p-select [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Select One" [showClear]="true" style="min-width: 12rem">
                            <ng-template let-option #item>
                                <p-tag [value]="option.value" [severity]="getSeverity(option.value)" />
                            </ng-template>
                        </p-select>
                    </ng-template>
                </p-columnFilter>
            </th>
            <th>
                <p-columnFilter type="boolean" field="verified"></p-columnFilter>
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>
                {{ customer.name }}
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span>{{ customer.country.name }}</span>
                </div>
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                    <span>{{ customer.representative.name }}</span>
                </div>
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
            </td>
            <td>
                <i
                    class="pi"
                    [ngClass]="{
                        'text-green-500 pi-check-circle': customer.verified,
                        'text-red-500 pi-times-circle': !customer.verified
                    }"
                ></i>
            </td>
        </tr>
    </ng-template>
    <ng-template #emptymessage>
        <tr>
            <td colspan="5">No customers found.</td>
        </tr>
    </ng-template>
</p-table>

Advanced
Filters are displayed in an overlay.

Search keyword
Name
Country
Agent
Date
Balance
Status
Activity
Verified
James Butt	

Algeria
Ioni Bowcher
Ioni Bowcher
09/13/2015	$70,663.00	
unqualified
Josephine Darakjy	

Egypt
Amy Elsner
Amy Elsner
02/09/2019	$82,429.00	
negotiation
Art Venere	

Panama
Asiya Javayant
Asiya Javayant
05/13/2017	$28,334.00	
qualified
Lenna Paprocki	

Slovenia
Xuxue Feng
Xuxue Feng
09/15/2020	$88,521.00	
new
Donette Foller	

South Africa
Asiya Javayant
Asiya Javayant
05/20/2016	$93,905.00	
negotiation
Simona Morasca	

Egypt
Ivan Magalhaes
Ivan Magalhaes
02/16/2018	$50,041.00	
qualified
Mitsue Tollner	

Paraguay
Ivan Magalhaes
Ivan Magalhaes
02/19/2018	$58,706.00	
renewal
Leota Dilliard	

Serbia
Onyama Limba
Onyama Limba
08/13/2019	$26,640.00	
renewal
Sage Wieser	

Egypt
Ivan Magalhaes
Ivan Magalhaes
11/21/2018	$65,369.00	
unqualified
Kris Marrier	

Mexico
Onyama Limba
Onyama Limba
07/07/2015	$63,451.00	
negotiation

<p-table #dt1 [value]="customers" dataKey="id" [rows]="10" [rowsPerPageOptions]="[10, 25, 50]" [loading]="loading" [paginator]="true" [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']">
    <ng-template #caption>
        <div class="flex">
            <p-button label="Clear" [outlined]="true" icon="pi pi-filter-slash" (click)="clear(dt1)" />
            <p-iconfield iconPosition="left" class="ml-auto">
                <p-inputicon>
                    <i class="pi pi-search"></i>
                </p-inputicon>
                <input pInputText type="text" (input)="dt1.filterGlobal($event.target.value, 'contains')" placeholder="Search keyword" />
            </p-iconfield>
        </div>
    </ng-template>
    <ng-template #header>
        <tr>
            <th style="min-width:15rem">
                <div class="flex items-center">
                    Name
                    <p-columnFilter type="text" field="name" display="menu" />
                </div>
            </th>
            <th style="min-width:15rem">
                <div class="flex items-center">
                    Country
                    <p-columnFilter type="text" field="country.name" display="menu" />
                </div>
            </th>
            <th style="min-width:15rem">
                <div class="flex items-center">
                    Agent
                    <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                        <ng-template #filter let-value let-filter="filterCallback">
                            <p-multiselect [(ngModel)]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" style="min-width: 14rem" [panelStyle]="{ minWidth: '16rem' }">
                                <ng-template let-option #item>
                                    <div class="flex items-center gap-2">
                                        <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" style="width: 32px" />
                                        <span>{{ option.name }}</span>
                                    </div>
                                </ng-template>
                            </p-multiselect>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th style="min-width:10rem">
                <div class="flex items-center">
                    Date
                    <p-columnFilter type="date" field="date" display="menu"></p-columnFilter>
                </div>
            </th>
            <th style="min-width:10rem">
                <div class="flex items-center">
                    Balance
                    <p-columnFilter type="numeric" field="balance" display="menu" currency="USD" />
                </div>
            </th>
            <th style="min-width:10rem">
                <div class="flex items-center">
                    Status
                    <p-columnFilter field="status" matchMode="equals" display="menu">
                        <ng-template #filter let-value let-filter="filterCallback">
                            <p-select [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Select One" styleClass="w-full">
                                <ng-template let-option #item>
                                    <p-tag [value]="option.value" [severity]="getSeverity(option.value)"></p-tag>
                                </ng-template>
                            </p-select>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th style="min-width:10rem">
                <div class="flex items-center">
                    Activity
                    <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                        <ng-template #filter let-value let-filter="filterCallback">
                            <p-slider [(ngModel)]="value" [range]="true" styleClass="m-4" (onSlideEnd)="filter($event.values)" />
                            <div class="flex items-center px-2">
                                <span *ngIf="!value">0</span>
                                <span *ngIf="value">{{ value[0] }} - {{ value[1] }}</span>
                            </div>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th style="width: 3rem">
                <div class="flex items-center">
                    Verified
                    <p-columnFilter type="boolean" field="verified" display="menu" />
                </div>
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>
                {{ customer.name }}
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span>{{ customer.country.name }}</span>
                </div>
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" />
                    <span>{{ customer.representative.name }}</span>
                </div>
            </td>
            <td>
                {{ customer.date | date: 'MM/dd/yyyy' }}
            </td>
            <td>
                {{ customer.balance | currency: 'USD' : 'symbol' }}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
            </td>
            <td>
                <p-progressbar [value]="customer.activity" [showValue]="false" />
            </td>
            <td class="text-center">
                <i
                    class="pi"
                    [ngClass]="{
                        'text-green-500 pi-check-circle': customer.verified,
                        'text-red-500 pi-times-circle': !customer.verified
                    }"
                ></i>
            </td>
        </tr>
    </ng-template>
    <ng-template #emptymessage>
        <tr>
            <td colspan="7">No customers found.</td>
        </tr>
    </ng-template>
</p-table>

Row Selection
Single
Single row selection is enabled by defining selectionMode as single along with a value binding using selection property. When available, it is suggested to provide a unique identifier of a row with dataKey to optimize performance.

By default, metaKey press (e.g. ⌘) is necessary to unselect a row however this can be configured with disabling the metaKeySelection property. In touch enabled devices this option has no effect and behavior is same as setting it to false.


MetaKey
Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-toggleswitch [(ngModel)]="metaKey" inputId="input-metakey" />
<p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" [metaKeySelection]="metaKey" dataKey="id" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr [pSelectableRow]="product">
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

Multiple
More than one row is selectable by setting selectionMode to multiple. By default in multiple selection mode, metaKey press (e.g. ⌘) is not necessary to add to existing selections. When the optional metaKeySelection is present, behavior is changed in a way that selecting a new row requires meta key to be present. Note that in touch enabled devices, DataTable always ignores metaKey.


MetaKey
Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<div class="flex justify-center items-center mb-6 gap-2">
    <p-toggleswitch [(ngModel)]="metaKey" inputId="input-metakey" />
    <label for="input-metakey">MetaKey</label>
</div>
<p-table [value]="products" selectionMode="multiple" [(selection)]="selectedProducts" [metaKeySelection]="metaKey" dataKey="code" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product let-rowIndex="rowIndex">
        <tr [pSelectableRow]="product" [pSelectableRowIndex]="rowIndex">
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>

RadioButton
Single selection can also be handled using radio buttons.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [value]="products" [(selection)]="selectedProduct" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th style="width: 4rem"></th>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>
                <p-tableRadioButton [value]="product" />
            </td>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>

Checkbox
Multiple selection can also be handled using checkboxes by enabling the selectionMode property of column as multiple.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th style="width: 4rem"><p-tableHeaderCheckbox /></th>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>
                <p-tableCheckbox [value]="product" />
            </td>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>

Column
Row selection with an element inside a column is implemented with templating.

Code	Name	Category	Quantity	
f230fh0g3	Bamboo Watch	Accessories	24	
nvklal433	Black Watch	Accessories	61	
zz21cz3c1	Blue Band	Fitness	2	
244wgerg2	Blue T-Shirt	Clothing	25	
h456wer53	Bracelet	Accessories	73	

<p-toast />
<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th style="width: 5rem"></th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
            <td>
                <p-button icon="pi pi-search" (click)="selectProduct(product)" severity="secondary" rounded />
            </td>
        </tr>
    </ng-template>
</p-table>

Events
Table provides onRowSelect and onRowUnselect events to listen selection events.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-toast />
<p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="code" (onRowSelect)="onRowSelect($event)" (onRowUnselect)="onRowUnselect($event)" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr [pSelectableRow]="product">
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>

Row Expansion
Row expansion allows displaying detailed content for a particular row. To use this feature, define a dataKey, add a template named expandedrow and use the pRowToggler directive on an element as the target to toggle an expansion. This enables providing your custom UI such as buttons, links and so on. Example below uses an anchor with an icon as a toggler. Setting pRowTogglerDisabled as true disables the toggle event for the element.

Image
Bamboo Watch	Bamboo Watch	$65.00	Accessories	





INSTOCK
Black Watch	Black Watch	$72.00	Accessories	





INSTOCK
Blue Band	Blue Band	$79.00	Fitness	





LOWSTOCK
Blue T-Shirt	Blue T-Shirt	$29.00	Clothing	





INSTOCK
Bracelet	Bracelet	$15.00	Accessories	





INSTOCK
Brown Purse	Brown Purse	$120.00	Accessories	





OUTOFSTOCK
Chakra Bracelet	Chakra Bracelet	$32.00	Accessories	





LOWSTOCK
Galaxy Earrings	Galaxy Earrings	$34.00	Accessories	





INSTOCK
Game Controller	Game Controller	$99.00	Electronics	





LOWSTOCK
Gaming Set	Gaming Set	$299.00	Electronics	





INSTOCK

<p-toast />
<p-table [value]="products" dataKey="id" [tableStyle]="{ 'min-width': '60rem' }" [expandedRowKeys]="expandedRows" (onRowExpand)="onRowExpand($event)" (onRowCollapse)="onRowCollapse($event)">
    <ng-template #caption>
        <div class="flex flex-wrap justify-end gap-2">
            <p-button label="Expand All" icon="pi pi-plus" text (onClick)="expandAll()" />
            <p-button label="Collapse All" icon="pi pi-minus" text (onClick)="collapseAll()" />
        </div>
    </ng-template>
    <ng-template #header>
        <tr>
            <th style="width: 5rem"></th>
            <th pSortableColumn="name">Name <p-sortIcon field="name" /></th>
            <th>Image</th>
            <th pSortableColumn="price">Price <p-sortIcon field="price" /></th>
            <th pSortableColumn="category">Category <p-sortIcon field="category" /></th>
            <th pSortableColumn="rating">Reviews <p-sortIcon field="rating" /></th>
            <th pSortableColumn="inventoryStatus">Status <p-sortIcon field="inventoryStatus" /></th>
        </tr>
    </ng-template>
    <ng-template #body let-product let-expanded="expanded">
        <tr>
            <td>
                <p-button type="button" pRipple [pRowToggler]="product" [text]="true" [rounded]="true" [plain]="true" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'" />
            </td>
            <td>{{ product.name }}</td>
            <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="50" class="shadow-lg" /></td>
            <td>{{ product.price | currency : 'USD' }}</td>
            <td>{{ product.category }}</td>
            <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false" /></td>
            <td>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
            </td>
        </tr>
    </ng-template>
    <ng-template #expandedrow let-product>
        <tr>
            <td colspan="7">
                <div class="p-4">
                    <h5>Orders for {{ product.name }}</h5>
                    <p-table [value]="product.orders" dataKey="id">
                        <ng-template #header>
                            <tr>
                                <th pSortableColumn="id">Id <p-sortIcon field="price" /></th>
                                <th pSortableColumn="customer">Customer <p-sortIcon field="customer" /></th>
                                <th pSortableColumn="date">Date <p-sortIcon field="date" /></th>
                                <th pSortableColumn="amount">Amount <p-sortIcon field="amount" /></th>
                                <th pSortableColumn="status">Status <p-sortIcon field="status" /></th>
                                <th style="width: 4rem"></th>
                            </tr>
                        </ng-template>
                        <ng-template #body let-order>
                            <tr>
                                <td>{{ order.id }}</td>
                                <td>{{ order.customer }}</td>
                                <td>{{ order.date }}</td>
                                <td>{{ order.amount | currency : 'USD' }}</td>
                                <td>
                                    <p-tag [value]="order.status" [severity]="getStatusSeverity(order.status)" />
                                </td>
                                <td><p-button type="button" icon="pi pi-search" /></td>
                            </tr>
                        </ng-template>
                        <ng-template #emptymessage>
                            <tr>
                                <td colspan="6">There are no order for this product yet.</td>
                            </tr>
                        </ng-template>
                    </p-table>
                </div>
            </td>
        </tr>
    </ng-template>
</p-table>

Edit
Cell
In-cell editing is enabled by adding pEditableColumn directive to an editable cell that has a p-cellEditor helper component to define the input-output templates for the edit and view modes respectively.

Code	Name	Inventory Status	Price
f230fh0g3	Bamboo Watch	INSTOCK	$65.00
nvklal433	Black Watch	INSTOCK	$72.00
zz21cz3c1	Blue Band	LOWSTOCK	$79.00
244wgerg2	Blue T-Shirt	INSTOCK	$29.00
h456wer53	Bracelet	INSTOCK	$15.00

<p-table [value]="products" dataKey="id" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #header>
        <tr>
            <th style="width:25%">
                Code
            </th>
            <th style="width:25%">
                Name
            </th>
            <th style="width:25%">
                Inventory Status
            </th>
            <th style="width:25%">
                Price
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-product let-editing="editing">
        <tr>
            <td [pEditableColumn]="product.code" pEditableColumnField="code">
                <p-cellEditor>
                    <ng-template #input>
                        <input
                            pInputText
                            type="text"
                            [(ngModel)]="product.code" />
                    </ng-template>
                    <ng-template #output>
                        {{ product.code }}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td [pEditableColumn]="product.name" pEditableColumnField="name">
                <p-cellEditor>
                    <ng-template #input>
                        <input
                            pInputText
                            type="text"
                            [(ngModel)]="product.name"
                            required />
                    </ng-template>
                    <ng-template #output>
                        {{ product.name }}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td [pEditableColumn]="product.inventoryStatus" pEditableColumnField="inventoryStatus">
                <p-cellEditor>
                    <ng-template #input>
                        <input
                            pInputText
                            [(ngModel)]="product.inventoryStatus" />
                    </ng-template>
                    <ng-template #output>
                        {{ product.inventoryStatus }}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td [pEditableColumn]="product.price" pEditableColumnField="price">
                <p-cellEditor>
                    <ng-template #input>
                        <input
                            pInputText type="text"
                            [(ngModel)]="product.price" />
                    </ng-template>
                    <ng-template #output>
                        {{ product.price | currency: 'USD' }}
                    </ng-template>
                </p-cellEditor>
            </td>
        </tr>
    </ng-template>
</p-table>

Row
Row editing toggles the visibility of all the editors in the row at once and provides additional options to save and cancel editing. Row editing functionality is enabled by setting the editMode to "row" on table, defining a dataKey to uniquely identify a row, adding pEditableRow directive to the editable rows and defining the UI Controls with pInitEditableRow, pSaveEditableRow and pCancelEditableRow directives respectively.

Save and Cancel functionality implementation is left to the page author to provide more control over the editing business logic. Example below utilizes a simple implementation where a row is cloned when editing is initialized and is saved or restored depending on the result of the editing. An implicit variable called "editing" is passed to the body template so you may come up with your own UI controls that implement editing based on your own requirements such as adding validations and styling. Note that pSaveEditableRow only switches the row to back view mode when there are no validation errors.

Moreover, you may use setting pEditableRowDisabled property as true to disable editing for that particular row and in case you need to display rows in edit mode by default, use the editingRowKeys property which is a map whose key is the dataKey of the record where the value is any arbitrary number greater than zero.

Code	Name	Inventory Status	Price	
f230fh0g3	Bamboo Watch	
INSTOCK
$65.00	
nvklal433	Black Watch	
INSTOCK
$72.00	
zz21cz3c1	Blue Band	
LOWSTOCK
$79.00	
244wgerg2	Blue T-Shirt	
INSTOCK
$29.00	
h456wer53	Bracelet	
INSTOCK
$15.00	

<p-table [value]="products" dataKey="id" editMode="row" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th style="width:20%">Code</th>
            <th style="width:20%">Name</th>
            <th style="width:20%">Inventory Status</th>
            <th style="width:20%">Price</th>
            <th style="width:20%"></th>
        </tr>
    </ng-template>
    <ng-template #body let-product let-editing="editing" let-ri="rowIndex">
        <tr [pEditableRow]="product">
            <td>
                <p-cellEditor>
                    <ng-template #input>
                        <input
                            pInputText
                            type="text"
                            [(ngModel)]="product.code" />
                    </ng-template>
                    <ng-template #output>
                        {{product.code}}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td>
                <p-cellEditor>
                    <ng-template #input>
                        <input
                            pInputText type="text"
                            [(ngModel)]="product.name"
                            required />
                    </ng-template>
                    <ng-template #output>
                        {{product.name}}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td>
                <p-cellEditor>
                    <ng-template #input>
                        <p-select
                            [options]="statuses"
                            appendTo="body"
                            [(ngModel)]="product.inventoryStatus"
                            [style]="{'width':'100%'}" />
                    </ng-template>
                    <ng-template #output>
                        <p-tag
                            [value]="product.inventoryStatus"
                            [severity]="getSeverity(product.inventoryStatus)" />
                    </ng-template>
                </p-cellEditor>
            </td>
            <td>
                <p-cellEditor>
                    <ng-template #input>
                        <input
                            pInputText
                            type="text"
                            [(ngModel)]="product.price" />
                    </ng-template>
                    <ng-template #output>
                        {{product.price | currency: 'USD'}}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td>
                <div class="flex items-center justify-center gap-2">
                    <button
                        *ngIf="!editing"
                        pButton
                        pRipple
                        type="button"
                        pInitEditableRow
                        icon="pi pi-pencil"
                        (click)="onRowEditInit(product)"
                        text
                        rounded
                        severity="secondary"
                    ></button>
                    <button
                        *ngIf="editing"
                        pButton
                        pRipple
                        type="button"
                        pSaveEditableRow
                        icon="pi pi-check"
                        (click)="onRowEditSave(product)"
                        text
                        rounded
                        severity="secondary"
                    ></button>
                    <button
                        *ngIf="editing"
                        pButton
                        pRipple
                        type="button"
                        pCancelEditableRow
                        icon="pi pi-times"
                        (click)="onRowEditCancel(product, ri)"
                        text
                        rounded
                        severity="secondary"
                    ></button>
                </div>
            </td>
        </tr>
    </ng-template>
</p-table>

Scroll
Vertical
Adding scrollable property along with a scrollHeight for the data viewport enables vertical scrolling with fixed headers.

Name	Country	Company	Representative
James Butt	Algeria	Benton, John B Jr	Ioni Bowcher
Josephine Darakjy	Egypt	Chanay, Jeffrey A Esq	Amy Elsner
Art Venere	Panama	Chemel, James L Cpa	Asiya Javayant
Lenna Paprocki	Slovenia	Feltz Printing Service	Xuxue Feng
Donette Foller	South Africa	Printing Dimensions	Asiya Javayant
Simona Morasca	Egypt	Chapman, Ross E Esq	Ivan Magalhaes
Mitsue Tollner	Paraguay	Morlong Associates	Ivan Magalhaes
Leota Dilliard	Serbia	Commercial Press	Onyama Limba
Sage Wieser	Egypt	Truhlar And Truhlar Attys	Ivan Magalhaes
Kris Marrier	Mexico	King, Christopher A Esq	Onyama Limba
Minna Amigon	Romania	Dorl, James J Esq	Anna Fali
Abel Maclead	Singapore	Rangoni Of Florence	Bernardo Dominic
Kiley Caldarera	Serbia	Feiner Bros	Onyama Limba
Graciela Ruta	Chile	Buckley Miller & Wright	Amy Elsner
Cammy Albares	Philippines	Rousseaux, Michael Esq	Asiya Javayant
Mattie Poquette	Venezuela	Century Communications	Anna Fali
Meaghan Garufi	Malaysia	Bolton, Wilbur Esq	Ivan Magalhaes
Gladys Rim	Netherlands	T M Byxbee Company Pc	Stephen Shaw
Yuki Whobrey	Israel	Farmers Insurance Group	Bernardo Dominic
Fletcher Flosi	Argentina	Post Box Services Plus	Xuxue Feng
Bette Nicka	Paraguay	Sport En Art	Onyama Limba
Veronika Inouye	Ecuador	C 4 Network Inc	Ioni Bowcher
Willard Kolmetz	Tunisia	Ingalls, Donald R Esq	Asiya Javayant
Maryann Royster	Belarus	Franklin, Peter L Esq	Elwin Sharvill
Alisha Slusarski	Iceland	Wtlz Power 107 Fm	Stephen Shaw
Allene Iturbide	Italy	Ledecky, David Esq	Ivan Magalhaes
Chanel Caudy	Argentina	Professional Image Inc	Ioni Bowcher
Ezekiel Chui	Ireland	Sider, Donald C Esq	Amy Elsner
Willow Kusko	Romania	U Pull It	Onyama Limba
Bernardo Figeroa	Israel	Clark, Richard Cpa	Ioni Bowcher
Ammie Corrio	Hungary	Moskowitz, Barry S	Asiya Javayant
Francine Vocelka	Honduras	Cascade Realty Advisors Inc	Ioni Bowcher
Ernie Stenseth	Australia	Knwz Newsradio	Xuxue Feng
Albina Glick	Ukraine	Giampetro, Anthony D	Bernardo Dominic
Alishia Sergi	Qatar	Milford Enterprises Inc	Ivan Magalhaes
Solange Shinko	Cameroon	Mosocco, Ronald A	Onyama Limba
Jose Stockham	Italy	Tri State Refueler Co	Amy Elsner
Rozella Ostrosky	Venezuela	Parkway Company	Amy Elsner
Valentine Gillian	Paraguay	Fbs Business Finance	Bernardo Dominic
Kati Rulapaugh	Puerto Rico	Eder Assocs Consltng Engrs Pc	Ioni Bowcher
Youlanda Schemmer	Bolivia	Tri M Tool Inc	Xuxue Feng
Dyan Oldroyd	Argentina	International Eyelets Inc	Amy Elsner
Roxane Campain	France	Rapid Trading Intl	Anna Fali
Lavera Perin	Vietnam	Abc Enterprises Inc	Stephen Shaw
Erick Ferencz	Belgium	Cindy Turner Associates	Amy Elsner
Fatima Saylors	Canada	Stanton, James D Esq	Onyama Limba
Jina Briddick	Mexico	Grace Pastries Inc	Xuxue Feng
Kanisha Waycott	Ecuador	Schroer, Gene E Esq	Xuxue Feng
Emerson Bowley	Finland	Knights Inn	Stephen Shaw
Blair Malet	Finland	Bollinger Mach Shp & Shipyard	Asiya Javayant

<p-table [value]="customers" [scrollable]="true" scrollHeight="400px" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Representative</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.representative.name}}</td>
        </tr>
    </ng-template>
</p-table>

Flexible
Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes.


<div class="flex justify-center">
    <button type="button" (click)="showDialog()" pButton icon="pi pi-external-link" label="Show"></button>
</div>
<p-dialog
    header="Header"
    [resizable]="false"
    [modal]="true"
    [maximizable]="true"
    appendTo="body"
    [(visible)]="dialogVisible"
    [style]="{ width: '75vw' }"
    [contentStyle]="{ height: '300px' }"
>
    <p-table [value]="customers" [scrollable]="true" scrollHeight="flex" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Company</th>
                <th>Representative</th>
            </tr>
        </ng-template>
        <ng-template #body let-customer>
            <tr>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
            </tr>
        </ng-template>
    </p-table>
    <ng-template #footer>
        <p-button label="Ok" icon="pi pi-check" (onClick)="dialogVisible = false" />
    </ng-template>
</p-dialog>

Horizontal
Horizontal scrollbar is displayed when table width exceeds the parent width.

Id	Name	Country	Date	Balance	Company	Status	Activity	Representative
1000	James Butt	Algeria	2015-09-13	$70,663.00	Benton, John B Jr	unqualified	17	Ioni Bowcher
1001	Josephine Darakjy	Egypt	2019-02-09	$82,429.00	Chanay, Jeffrey A Esq	negotiation	0	Amy Elsner
1002	Art Venere	Panama	2017-05-13	$28,334.00	Chemel, James L Cpa	qualified	63	Asiya Javayant
1003	Lenna Paprocki	Slovenia	2020-09-15	$88,521.00	Feltz Printing Service	new	37	Xuxue Feng
1004	Donette Foller	South Africa	2016-05-20	$93,905.00	Printing Dimensions	negotiation	33	Asiya Javayant
1005	Simona Morasca	Egypt	2018-02-16	$50,041.00	Chapman, Ross E Esq	qualified	68	Ivan Magalhaes
1006	Mitsue Tollner	Paraguay	2018-02-19	$58,706.00	Morlong Associates	renewal	54	Ivan Magalhaes
1007	Leota Dilliard	Serbia	2019-08-13	$26,640.00	Commercial Press	renewal	69	Onyama Limba
1008	Sage Wieser	Egypt	2018-11-21	$65,369.00	Truhlar And Truhlar Attys	unqualified	76	Ivan Magalhaes
1009	Kris Marrier	Mexico	2015-07-07	$63,451.00	King, Christopher A Esq	negotiation	3	Onyama Limba
1010	Minna Amigon	Romania	2018-11-07	$71,169.00	Dorl, James J Esq	qualified	38	Anna Fali
1011	Abel Maclead	Singapore	2017-03-11	$96,842.00	Rangoni Of Florence	qualified	87	Bernardo Dominic
1012	Kiley Caldarera	Serbia	2015-10-20	$92,734.00	Feiner Bros	unqualified	80	Onyama Limba
1013	Graciela Ruta	Chile	2016-07-25	$45,250.00	Buckley Miller & Wright	negotiation	59	Amy Elsner
1014	Cammy Albares	Philippines	2019-06-25	$30,236.00	Rousseaux, Michael Esq	new	90	Asiya Javayant
1015	Mattie Poquette	Venezuela	2017-12-12	$64,533.00	Century Communications	negotiation	52	Anna Fali
1016	Meaghan Garufi	Malaysia	2018-07-04	$37,279.00	Bolton, Wilbur Esq	unqualified	31	Ivan Magalhaes
1017	Gladys Rim	Netherlands	2020-02-27	$27,381.00	T M Byxbee Company Pc	renewal	48	Stephen Shaw
1018	Yuki Whobrey	Israel	2017-12-21	$9,257.00	Farmers Insurance Group	negotiation	16	Bernardo Dominic
1019	Fletcher Flosi	Argentina	2016-01-04	$67,783.00	Post Box Services Plus	renewal	19	Xuxue Feng
1020	Bette Nicka	Paraguay	2016-10-21	$4,609.00	Sport En Art	renewal	100	Onyama Limba
1021	Veronika Inouye	Ecuador	2017-03-24	$26,565.00	C 4 Network Inc	renewal	72	Ioni Bowcher
1022	Willard Kolmetz	Tunisia	2017-04-15	$75,876.00	Ingalls, Donald R Esq	renewal	94	Asiya Javayant
1023	Maryann Royster	Belarus	2017-03-11	$41,121.00	Franklin, Peter L Esq	qualified	56	Elwin Sharvill
1024	Alisha Slusarski	Iceland	2018-03-27	$91,691.00	Wtlz Power 107 Fm	qualified	7	Stephen Shaw
1025	Allene Iturbide	Italy	2016-02-20	$40,137.00	Ledecky, David Esq	qualified	1	Ivan Magalhaes
1026	Chanel Caudy	Argentina	2018-06-24	$21,304.00	Professional Image Inc	new	26	Ioni Bowcher
1027	Ezekiel Chui	Ireland	2016-09-24	$60,454.00	Sider, Donald C Esq	new	76	Amy Elsner
1028	Willow Kusko	Romania	2020-04-11	$17,565.00	U Pull It	qualified	7	Onyama Limba
1029	Bernardo Figeroa	Israel	2018-04-11	$17,774.00	Clark, Richard Cpa	renewal	81	Ioni Bowcher
1030	Ammie Corrio	Hungary	2016-06-11	$49,201.00	Moskowitz, Barry S	negotiation	56	Asiya Javayant
1031	Francine Vocelka	Honduras	2017-08-02	$67,126.00	Cascade Realty Advisors Inc	qualified	94	Ioni Bowcher
1032	Ernie Stenseth	Australia	2018-06-06	$76,017.00	Knwz Newsradio	renewal	68	Xuxue Feng
1033	Albina Glick	Ukraine	2019-08-08	$91,201.00	Giampetro, Anthony D	negotiation	85	Bernardo Dominic
1034	Alishia Sergi	Qatar	2018-05-19	$12,237.00	Milford Enterprises Inc	negotiation	46	Ivan Magalhaes
1035	Solange Shinko	Cameroon	2015-02-12	$34,072.00	Mosocco, Ronald A	qualified	32	Onyama Limba
1036	Jose Stockham	Italy	2018-04-25	$94,909.00	Tri State Refueler Co	qualified	77	Amy Elsner
1037	Rozella Ostrosky	Venezuela	2016-02-27	$57,245.00	Parkway Company	unqualified	66	Amy Elsner
1038	Valentine Gillian	Paraguay	2019-09-17	$75,502.00	Fbs Business Finance	qualified	25	Bernardo Dominic
1039	Kati Rulapaugh	Puerto Rico	2016-12-03	$82,075.00	Eder Assocs Consltng Engrs Pc	renewal	51	Ioni Bowcher
1040	Youlanda Schemmer	Bolivia	2017-12-15	$19,208.00	Tri M Tool Inc	negotiation	49	Xuxue Feng
1041	Dyan Oldroyd	Argentina	2017-02-02	$50,194.00	International Eyelets Inc	qualified	5	Amy Elsner
1042	Roxane Campain	France	2018-12-25	$77,714.00	Rapid Trading Intl	unqualified	100	Anna Fali
1043	Lavera Perin	Vietnam	2018-04-10	$35,740.00	Abc Enterprises Inc	qualified	71	Stephen Shaw
1044	Erick Ferencz	Belgium	2018-05-06	$30,790.00	Cindy Turner Associates	unqualified	54	Amy Elsner
1045	Fatima Saylors	Canada	2019-07-10	$52,343.00	Stanton, James D Esq	renewal	93	Onyama Limba
1046	Jina Briddick	Mexico	2018-02-19	$53,966.00	Grace Pastries Inc	unqualified	97	Xuxue Feng
1047	Kanisha Waycott	Ecuador	2019-11-27	$9,920.00	Schroer, Gene E Esq	new	80	Xuxue Feng
1048	Emerson Bowley	Finland	2018-11-24	$78,069.00	Knights Inn	new	63	Stephen Shaw
1049	Blair Malet	Finland	2018-04-19	$65,005.00	Bollinger Mach Shp & Shipyard	new	92	Asiya Javayant
Id	Name	Country	Date	Balance	Company	Status	Activity	Representative

<p-table [value]="customers" [scrollable]="true" scrollHeight="400px">
    <ng-template #header>
        <tr>
            <th style="min-width:100px">Id</th>
            <th style="min-width:200px">Name</th>
            <th style="min-width:200px">Country</th>
            <th style="min-width:200px">Date</th>
            <th style="min-width:200px">Balance</th>
            <th style="min-width:200px">Company</th>
            <th style="min-width:200px">Status</th>
            <th style="min-width:200px">Activity</th>
            <th style="min-width:200px">Representative</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>{{customer.id}}</td>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.date}}</td>
            <td>{{formatCurrency(customer.balance)}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.status}}</td>
            <td>{{customer.activity}}</td>
            <td>{{customer.representative.name}}</td>
        </tr>
    </ng-template>
    <ng-template #footer>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Country</td>
            <td>Date</td>
            <td>Balance</td>
            <td>Company</td>
            <td>Status</td>
            <td>Activity</td>
            <td>Representative</td>
        </tr>
    </ng-template>
</p-table>

Frozen Rows
Frozen rows are used to fix certain rows while scrolling, this data is defined with the frozenValue property.

Name	Country	Company	Representative	
Geraldine Bisset	France	Bisset Group	Amy Elsner	
James Butt	Algeria	Benton, John B Jr	Ioni Bowcher	
Josephine Darakjy	Egypt	Chanay, Jeffrey A Esq	Amy Elsner	
Art Venere	Panama	Chemel, James L Cpa	Asiya Javayant	
Lenna Paprocki	Slovenia	Feltz Printing Service	Xuxue Feng	
Donette Foller	South Africa	Printing Dimensions	Asiya Javayant	
Simona Morasca	Egypt	Chapman, Ross E Esq	Ivan Magalhaes	
Mitsue Tollner	Paraguay	Morlong Associates	Ivan Magalhaes	
Leota Dilliard	Serbia	Commercial Press	Onyama Limba	
Sage Wieser	Egypt	Truhlar And Truhlar Attys	Ivan Magalhaes	
Kris Marrier	Mexico	King, Christopher A Esq	Onyama Limba	
Minna Amigon	Romania	Dorl, James J Esq	Anna Fali	
Abel Maclead	Singapore	Rangoni Of Florence	Bernardo Dominic	
Kiley Caldarera	Serbia	Feiner Bros	Onyama Limba	
Graciela Ruta	Chile	Buckley Miller & Wright	Amy Elsner	
Cammy Albares	Philippines	Rousseaux, Michael Esq	Asiya Javayant	
Mattie Poquette	Venezuela	Century Communications	Anna Fali	
Meaghan Garufi	Malaysia	Bolton, Wilbur Esq	Ivan Magalhaes	
Gladys Rim	Netherlands	T M Byxbee Company Pc	Stephen Shaw	
Yuki Whobrey	Israel	Farmers Insurance Group	Bernardo Dominic	
Fletcher Flosi	Argentina	Post Box Services Plus	Xuxue Feng	
Bette Nicka	Paraguay	Sport En Art	Onyama Limba	
Veronika Inouye	Ecuador	C 4 Network Inc	Ioni Bowcher	
Willard Kolmetz	Tunisia	Ingalls, Donald R Esq	Asiya Javayant	
Maryann Royster	Belarus	Franklin, Peter L Esq	Elwin Sharvill	
Alisha Slusarski	Iceland	Wtlz Power 107 Fm	Stephen Shaw	
Allene Iturbide	Italy	Ledecky, David Esq	Ivan Magalhaes	
Chanel Caudy	Argentina	Professional Image Inc	Ioni Bowcher	
Ezekiel Chui	Ireland	Sider, Donald C Esq	Amy Elsner	
Willow Kusko	Romania	U Pull It	Onyama Limba	
Bernardo Figeroa	Israel	Clark, Richard Cpa	Ioni Bowcher	
Ammie Corrio	Hungary	Moskowitz, Barry S	Asiya Javayant	
Francine Vocelka	Honduras	Cascade Realty Advisors Inc	Ioni Bowcher	
Ernie Stenseth	Australia	Knwz Newsradio	Xuxue Feng	
Albina Glick	Ukraine	Giampetro, Anthony D	Bernardo Dominic	
Alishia Sergi	Qatar	Milford Enterprises Inc	Ivan Magalhaes	
Solange Shinko	Cameroon	Mosocco, Ronald A	Onyama Limba	
Jose Stockham	Italy	Tri State Refueler Co	Amy Elsner	
Rozella Ostrosky	Venezuela	Parkway Company	Amy Elsner	
Valentine Gillian	Paraguay	Fbs Business Finance	Bernardo Dominic	
Kati Rulapaugh	Puerto Rico	Eder Assocs Consltng Engrs Pc	Ioni Bowcher	
Youlanda Schemmer	Bolivia	Tri M Tool Inc	Xuxue Feng	
Dyan Oldroyd	Argentina	International Eyelets Inc	Amy Elsner	
Roxane Campain	France	Rapid Trading Intl	Anna Fali	
Lavera Perin	Vietnam	Abc Enterprises Inc	Stephen Shaw	
Erick Ferencz	Belgium	Cindy Turner Associates	Amy Elsner	
Fatima Saylors	Canada	Stanton, James D Esq	Onyama Limba	
Jina Briddick	Mexico	Grace Pastries Inc	Xuxue Feng	
Kanisha Waycott	Ecuador	Schroer, Gene E Esq	Xuxue Feng	
Emerson Bowley	Finland	Knights Inn	Stephen Shaw	
Blair Malet	Finland	Bollinger Mach Shp & Shipyard	Asiya Javayant	

<p-table [value]="unlockedCustomers" [frozenValue]="lockedCustomers" [scrollable]="true" scrollHeight="400px" [tableStyle]="{ 'min-width': '60rem' }">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Representative</th>
            <th style="width:5rem"></th>
        </tr>
    </ng-template>
    <ng-template #frozenbody let-customer let-index="rowIndex">
        <tr class="font-bold">
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
            <td>
                <button pButton pRipple type="button" [icon]="'pi pi-lock-open'" (click)="toggleLock(customer, true, index)" size="small" text></button>
            </td>
        </tr>
    </ng-template>
    <ng-template #body let-customer let-index="rowIndex">
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
            <td>
                <button pButton pRipple type="button" [icon]="'pi pi-lock'" [disabled]="lockedCustomers.length >= 2" (click)="toggleLock(customer, false, index)" size="small" text></button>
            </td>
        </tr>
    </ng-template>
</p-table>

Frozen Columns
Certain columns can be frozen by using the pFrozenColumn directive of the table component. In addition, alignFrozen is available to define whether the column should be fixed on the left or right.

Name	Id	Country	Date	Company	Status	Activity	Representative	Balance
James Butt	1000	Algeria	2015-09-13	Benton, John B Jr	unqualified	17	Ioni Bowcher	$70,663.00
Josephine Darakjy	1001	Egypt	2019-02-09	Chanay, Jeffrey A Esq	negotiation	0	Amy Elsner	$82,429.00
Art Venere	1002	Panama	2017-05-13	Chemel, James L Cpa	qualified	63	Asiya Javayant	$28,334.00
Lenna Paprocki	1003	Slovenia	2020-09-15	Feltz Printing Service	new	37	Xuxue Feng	$88,521.00
Donette Foller	1004	South Africa	2016-05-20	Printing Dimensions	negotiation	33	Asiya Javayant	$93,905.00
Simona Morasca	1005	Egypt	2018-02-16	Chapman, Ross E Esq	qualified	68	Ivan Magalhaes	$50,041.00
Mitsue Tollner	1006	Paraguay	2018-02-19	Morlong Associates	renewal	54	Ivan Magalhaes	$58,706.00
Leota Dilliard	1007	Serbia	2019-08-13	Commercial Press	renewal	69	Onyama Limba	$26,640.00
Sage Wieser	1008	Egypt	2018-11-21	Truhlar And Truhlar Attys	unqualified	76	Ivan Magalhaes	$65,369.00
Kris Marrier	1009	Mexico	2015-07-07	King, Christopher A Esq	negotiation	3	Onyama Limba	$63,451.00
Minna Amigon	1010	Romania	2018-11-07	Dorl, James J Esq	qualified	38	Anna Fali	$71,169.00
Abel Maclead	1011	Singapore	2017-03-11	Rangoni Of Florence	qualified	87	Bernardo Dominic	$96,842.00
Kiley Caldarera	1012	Serbia	2015-10-20	Feiner Bros	unqualified	80	Onyama Limba	$92,734.00
Graciela Ruta	1013	Chile	2016-07-25	Buckley Miller & Wright	negotiation	59	Amy Elsner	$45,250.00
Cammy Albares	1014	Philippines	2019-06-25	Rousseaux, Michael Esq	new	90	Asiya Javayant	$30,236.00
Mattie Poquette	1015	Venezuela	2017-12-12	Century Communications	negotiation	52	Anna Fali	$64,533.00
Meaghan Garufi	1016	Malaysia	2018-07-04	Bolton, Wilbur Esq	unqualified	31	Ivan Magalhaes	$37,279.00
Gladys Rim	1017	Netherlands	2020-02-27	T M Byxbee Company Pc	renewal	48	Stephen Shaw	$27,381.00
Yuki Whobrey	1018	Israel	2017-12-21	Farmers Insurance Group	negotiation	16	Bernardo Dominic	$9,257.00
Fletcher Flosi	1019	Argentina	2016-01-04	Post Box Services Plus	renewal	19	Xuxue Feng	$67,783.00
Bette Nicka	1020	Paraguay	2016-10-21	Sport En Art	renewal	100	Onyama Limba	$4,609.00
Veronika Inouye	1021	Ecuador	2017-03-24	C 4 Network Inc	renewal	72	Ioni Bowcher	$26,565.00
Willard Kolmetz	1022	Tunisia	2017-04-15	Ingalls, Donald R Esq	renewal	94	Asiya Javayant	$75,876.00
Maryann Royster	1023	Belarus	2017-03-11	Franklin, Peter L Esq	qualified	56	Elwin Sharvill	$41,121.00
Alisha Slusarski	1024	Iceland	2018-03-27	Wtlz Power 107 Fm	qualified	7	Stephen Shaw	$91,691.00
Allene Iturbide	1025	Italy	2016-02-20	Ledecky, David Esq	qualified	1	Ivan Magalhaes	$40,137.00
Chanel Caudy	1026	Argentina	2018-06-24	Professional Image Inc	new	26	Ioni Bowcher	$21,304.00
Ezekiel Chui	1027	Ireland	2016-09-24	Sider, Donald C Esq	new	76	Amy Elsner	$60,454.00
Willow Kusko	1028	Romania	2020-04-11	U Pull It	qualified	7	Onyama Limba	$17,565.00
Bernardo Figeroa	1029	Israel	2018-04-11	Clark, Richard Cpa	renewal	81	Ioni Bowcher	$17,774.00
Ammie Corrio	1030	Hungary	2016-06-11	Moskowitz, Barry S	negotiation	56	Asiya Javayant	$49,201.00
Francine Vocelka	1031	Honduras	2017-08-02	Cascade Realty Advisors Inc	qualified	94	Ioni Bowcher	$67,126.00
Ernie Stenseth	1032	Australia	2018-06-06	Knwz Newsradio	renewal	68	Xuxue Feng	$76,017.00
Albina Glick	1033	Ukraine	2019-08-08	Giampetro, Anthony D	negotiation	85	Bernardo Dominic	$91,201.00
Alishia Sergi	1034	Qatar	2018-05-19	Milford Enterprises Inc	negotiation	46	Ivan Magalhaes	$12,237.00
Solange Shinko	1035	Cameroon	2015-02-12	Mosocco, Ronald A	qualified	32	Onyama Limba	$34,072.00
Jose Stockham	1036	Italy	2018-04-25	Tri State Refueler Co	qualified	77	Amy Elsner	$94,909.00
Rozella Ostrosky	1037	Venezuela	2016-02-27	Parkway Company	unqualified	66	Amy Elsner	$57,245.00
Valentine Gillian	1038	Paraguay	2019-09-17	Fbs Business Finance	qualified	25	Bernardo Dominic	$75,502.00
Kati Rulapaugh	1039	Puerto Rico	2016-12-03	Eder Assocs Consltng Engrs Pc	renewal	51	Ioni Bowcher	$82,075.00
Youlanda Schemmer	1040	Bolivia	2017-12-15	Tri M Tool Inc	negotiation	49	Xuxue Feng	$19,208.00
Dyan Oldroyd	1041	Argentina	2017-02-02	International Eyelets Inc	qualified	5	Amy Elsner	$50,194.00
Roxane Campain	1042	France	2018-12-25	Rapid Trading Intl	unqualified	100	Anna Fali	$77,714.00
Lavera Perin	1043	Vietnam	2018-04-10	Abc Enterprises Inc	qualified	71	Stephen Shaw	$35,740.00
Erick Ferencz	1044	Belgium	2018-05-06	Cindy Turner Associates	unqualified	54	Amy Elsner	$30,790.00
Fatima Saylors	1045	Canada	2019-07-10	Stanton, James D Esq	renewal	93	Onyama Limba	$52,343.00
Jina Briddick	1046	Mexico	2018-02-19	Grace Pastries Inc	unqualified	97	Xuxue Feng	$53,966.00
Kanisha Waycott	1047	Ecuador	2019-11-27	Schroer, Gene E Esq	new	80	Xuxue Feng	$9,920.00
Emerson Bowley	1048	Finland	2018-11-24	Knights Inn	new	63	Stephen Shaw	$78,069.00
Blair Malet	1049	Finland	2018-04-19	Bollinger Mach Shp & Shipyard	new	92	Asiya Javayant	$65,005.00

<p-togglebutton [(ngModel)]="balanceFrozen" [onIcon]="'pi pi-lock'" offIcon="pi pi-lock-open" [onLabel]="'Balance'" offLabel="Balance" />
<p-table [value]="customers" [scrollable]="true" scrollHeight="400px" styleClass="mt-4">
    <ng-template #header>
        <tr>
            <th style="min-width:200px" pFrozenColumn>Name</th>
            <th style="min-width:100px">Id</th>
            <th style="min-width:200px">Country</th>
            <th style="min-width:200px">Date</th>
            <th style="min-width:200px">Company</th>
            <th style="min-width:200px">Status</th>
            <th style="min-width:200px">Activity</th>
            <th style="min-width:200px">Representative</th>
            <th style="min-width:200px" alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen">Balance</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td pFrozenColumn>{{customer.name}}</td>
            <td style="min-width:100px">{{customer.id}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.date}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.status}}</td>
            <td>{{customer.activity}}</td>
            <td >{{customer.representative.name}}</td>
            <td alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen">{{formatCurrency(customer.balance)}}</td>
        </tr>
    </ng-template>
</p-table>

Virtual Scroll
Preload
Virtual Scrolling is an efficient way to render large amount data. Usage is similar to regular scrolling with the addition of virtualScrollerOptions property to define a fixed itemSize. Internally, VirtualScroller component is utilized so refer to the API of VirtualScroller for more information about the available options.

In this example, 100000 preloaded records are rendered by the Table.

Id	Vin	Year	Brand	Color
1	B4nPH	2005	Kitano	Black
2	nZIhO	2006	Vapid	Black
3	wC1eL	2003	Kitano	Green
4	AI6EH	2012	Titan	Silver
5	hvcr8	2007	Titan	Silver
6	dHkeg	2011	Norma	Green
7	YcbGN	2003	Akira	Blue
8	6dgGO	2008	Vapid	White
9	iPEee	2004	Akira	Black
10	EUAW1	2006	Titan	Blue
11	YdtAV	2015	Akira	Black
12	RJwj8	2012	Carson	Red
13	ROI7H	2012	Kitano	Silver
14	ZAO8j	2005	Titan	Yellow
15	w470Z	2002	Carson	Red
16	ahC39	2006	Dabver	Green
17	K8Cjn	2003	Dabver	Red
18	X6oZ5	2015	Titan	Yellow
19	mofHc	2017	Dover	Yellow

<p-table [columns]="cols" [value]="cars" [scrollable]="true" scrollHeight="400px" [virtualScroll]="true" [virtualScrollItemSize]="46">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" style="width: 20%;">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowData let-rowIndex="rowIndex" let-columns="columns">
        <tr style="height:46px">
            <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>

Lazy
VirtualScroller is a performance-approach to handle huge data efficiently. Setting virtualScroll property as true and providing a virtualScrollItemSize in pixels would be enough to enable this functionality. It is also suggested to use the same virtualScrollItemSize value on the tr element inside the body template.

Id	Vin	Year	Brand	Color
1	vNHwo	2009	Dover	White
2	oxWzN	2009	Vapid	Black
3	Yk8qw	2007	Carson	Black
4	6m722	2017	Dabver	Yellow
5	VU0wn	2006	Carson	White
6	Fzfkl	2010	Norma	Red
7	VPU9S	2007	Akira	Black
8	tUPZi	2003	Titan	Blue
9	AVT2T	2015	Kitano	Red
10	YiSKR	2004	Kitano	Red
11	3EktM	2014	Titan	Yellow
12	O0NZr	2013	Dabver	Blue
13	kvLjh	2015	Akira	Black
14	lp4Gy	2012	Vapid	Green
15	KpdTk	2012	Carson	Black
16	IhIim	2004	Kitano	Blue
17	YUfmk	2010	Carson	Blue
18	63GTu	2008	Morello	Yellow
19	07BSF	2007	Akira	Black

<p-table [columns]="cols" [value]="virtualCars" [scrollable]="true" scrollHeight="400px" [rows]="100" [virtualScroll]="true" [virtualScrollItemSize]="46" [lazy]="true" (onLazyLoad)="loadCarsLazy($event)">
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns" style="width: 20%;">
                {{col.header}}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowData let-columns="columns">
        <tr style="height:46px">
            <td *ngFor="let col of columns">
                {{rowData[col.field]}}
            </td>
        </tr>
    </ng-template>
    <ng-template #loadingbody let-columns="columns">
        <tr style="height:46px">
            <td *ngFor="let col of columns; let even = even">
                <p-skeleton [ngStyle]="{'width': even ? (col.field === 'year' ? '30%' : '40%') : '60%'}" />
            </td>
        </tr>
    </ng-template>
</p-table>

Column Group
Columns can be grouped using rowspan and colspan properties.

Product	Sale Rate
Sales	Profits
Last Year	This Year	Last Year	This Year
Bamboo Watch	51%	40%	$54,406.00	$43,342.00
Black Watch	83%	9%	$423,132.00	$312,122.00
Blue Band	38%	5%	$12,321.00	$8,500.00
Blue T-Shirt	49%	22%	$745,232.00	$65,323.00
Brown Purse	17%	79%	$643,242.00	$500,332.00
Chakra Bracelet	52%	65%	$421,132.00	$150,005.00
Galaxy Earrings	82%	12%	$131,211.00	$100,214.00
Game Controller	44%	45%	$66,442.00	$53,322.00
Gaming Set	90%	56%	$765,442.00	$296,232.00
Gold Phone Case	75%	54%	$21,212.00	$12,533.00
Totals	$3,283,772.00	$1,541,925.00

<p-table [value]="sales" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th rowspan="3">Product</th>
            <th colspan="4">Sale Rate</th>
        </tr>
        <tr>
            <th colspan="2">Sales</th>
            <th colspan="2">Profits</th>
        </tr>
        <tr>
            <th>Last Year</th>
            <th>This Year</th>
            <th>Last Year</th>
            <th>This Year</th>
        </tr>
    </ng-template>
    <ng-template #body let-sale>
        <tr>
            <td>{{sale.product}}</td>
            <td>{{sale.lastYearSale}}%</td>
            <td>{{sale.thisYearSale}}%</td>
            <td>{{sale.lastYearProfit | currency: 'USD'}}</td>
            <td>{{sale.thisYearProfit | currency: 'USD'}}</td>
        </tr>
    </ng-template>
    <ng-template #footer>
        <tr>
            <td colspan="3" class="text-right font-bold p-3 pb-0">Totals</td>
            <td class="font-bold p-3 pb-0">{{ lastYearTotal | currency: 'USD' }}</td>
            <td class="font-bold p-3 pb-0">{{ thisYearTotal | currency: 'USD' }}</td>
        </tr>
    </ng-template>
</p-table>

Row Group
Subheader
Rows are grouped with the groupRowsBy property. When rowGroupMode is set as subheader, a header and footer can be displayed for each group. The content of a group header is provided with groupheader and footer with groupfooter templates.

Name	Country	Company	Status	Date
Amy Elsner
Amy Elsner
Josephine Darakjy	

Egypt
Chanay, Jeffrey A Esq	
negotiation
2019-02-09
Graciela Ruta	

Chile
Buckley Miller & Wright	
negotiation
2016-07-25
Ezekiel Chui	

Ireland
Sider, Donald C Esq	
new
2016-09-24
Jose Stockham	

Italy
Tri State Refueler Co	
qualified
2018-04-25
Rozella Ostrosky	

Venezuela
Parkway Company	
unqualified
2016-02-27
Dyan Oldroyd	

Argentina
International Eyelets Inc	
qualified
2017-02-02
Erick Ferencz	

Belgium
Cindy Turner Associates	
unqualified
2018-05-06
Total Customers: 7
Anna Fali
Anna Fali
Minna Amigon	

Romania
Dorl, James J Esq	
qualified
2018-11-07
Mattie Poquette	

Venezuela
Century Communications	
negotiation
2017-12-12
Roxane Campain	

France
Rapid Trading Intl	
unqualified
2018-12-25
Total Customers: 3
Asiya Javayant
Asiya Javayant
Art Venere	

Panama
Chemel, James L Cpa	
qualified
2017-05-13
Donette Foller	

South Africa
Printing Dimensions	
negotiation
2016-05-20
Cammy Albares	

Philippines
Rousseaux, Michael Esq	
new
2019-06-25
Willard Kolmetz	

Tunisia
Ingalls, Donald R Esq	
renewal
2017-04-15
Ammie Corrio	

Hungary
Moskowitz, Barry S	
negotiation
2016-06-11
Blair Malet	

Finland
Bollinger Mach Shp & Shipyard	
new
2018-04-19
Total Customers: 6
Bernardo Dominic
Bernardo Dominic
Abel Maclead	

Singapore
Rangoni Of Florence	
qualified
2017-03-11
Yuki Whobrey	

Israel
Farmers Insurance Group	
negotiation
2017-12-21
Albina Glick	

Ukraine
Giampetro, Anthony D	
negotiation
2019-08-08
Valentine Gillian	

Paraguay
Fbs Business Finance	
qualified
2019-09-17
Total Customers: 4
Elwin Sharvill
Elwin Sharvill
Maryann Royster	

Belarus
Franklin, Peter L Esq	
qualified
2017-03-11
Total Customers: 1
Ioni Bowcher
Ioni Bowcher
James Butt	

Algeria
Benton, John B Jr	
unqualified
2015-09-13
Veronika Inouye	

Ecuador
C 4 Network Inc	
renewal
2017-03-24
Chanel Caudy	

Argentina
Professional Image Inc	
new
2018-06-24
Bernardo Figeroa	

Israel
Clark, Richard Cpa	
renewal
2018-04-11
Francine Vocelka	

Honduras
Cascade Realty Advisors Inc	
qualified
2017-08-02
Kati Rulapaugh	

Puerto Rico
Eder Assocs Consltng Engrs Pc	
renewal
2016-12-03
Total Customers: 6
Ivan Magalhaes
Ivan Magalhaes
Simona Morasca	

Egypt
Chapman, Ross E Esq	
qualified
2018-02-16
Mitsue Tollner	

Paraguay
Morlong Associates	
renewal
2018-02-19
Sage Wieser	

Egypt
Truhlar And Truhlar Attys	
unqualified
2018-11-21
Meaghan Garufi	

Malaysia
Bolton, Wilbur Esq	
unqualified
2018-07-04
Allene Iturbide	

Italy
Ledecky, David Esq	
qualified
2016-02-20
Alishia Sergi	

Qatar
Milford Enterprises Inc	
negotiation
2018-05-19
Total Customers: 6
Onyama Limba
Onyama Limba
Leota Dilliard	

Serbia
Commercial Press	
renewal
2019-08-13
Kris Marrier	

Mexico
King, Christopher A Esq	
negotiation
2015-07-07
Kiley Caldarera	

Serbia
Feiner Bros	
unqualified
2015-10-20
Bette Nicka	

Paraguay
Sport En Art	
renewal
2016-10-21
Willow Kusko	

Romania
U Pull It	
qualified
2020-04-11
Solange Shinko	

Cameroon
Mosocco, Ronald A	
qualified
2015-02-12
Fatima Saylors	

Canada
Stanton, James D Esq	
renewal
2019-07-10
Total Customers: 7
Stephen Shaw
Stephen Shaw
Gladys Rim	

Netherlands
T M Byxbee Company Pc	
renewal
2020-02-27
Alisha Slusarski	

Iceland
Wtlz Power 107 Fm	
qualified
2018-03-27
Lavera Perin	

Vietnam
Abc Enterprises Inc	
qualified
2018-04-10
Emerson Bowley	

Finland
Knights Inn	
new
2018-11-24
Total Customers: 4
Xuxue Feng
Xuxue Feng
Lenna Paprocki	

Slovenia
Feltz Printing Service	
new
2020-09-15
Fletcher Flosi	

Argentina
Post Box Services Plus	
renewal
2016-01-04
Ernie Stenseth	

Australia
Knwz Newsradio	
renewal
2018-06-06
Youlanda Schemmer	

Bolivia
Tri M Tool Inc	
negotiation
2017-12-15
Jina Briddick	

Mexico
Grace Pastries Inc	
unqualified
2018-02-19
Kanisha Waycott	

Ecuador
Schroer, Gene E Esq	
new
2019-11-27
Total Customers: 6

<p-table [value]="customers" sortField="representative.name" sortMode="single" [scrollable]="true" scrollHeight="400px" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '60rem'}">
    <ng-template #header>
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date</th>
        </tr>
    </ng-template>
    <ng-template #groupheader let-customer>
        <tr pRowGroupHeader>
            <td colspan="5">
                <div class="flex items-center gap-2">
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                    <span class="font-bold">{{ customer.representative.name }}</span>
                </div>
            </td>
        </tr>
    </ng-template>
    <ng-template #groupfooter let-customer>
        <tr>
            <td colspan="5" class="text-right font-bold pr-12">
                Total Customers: {{calculateCustomerTotal(customer.representative.name)}}
            </td>
        </tr>
    </ng-template>
    <ng-template #body let-customer let-rowIndex="rowIndex">
        <tr>
            <td>
                {{customer.name}}
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span>{{ customer.country.name }}</span>
                </div>
            </td>
            <td>
                {{customer.company}}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
            </td>
            <td>
                {{customer.date}}
            </td>
        </tr>
    </ng-template>
</p-table>

Expandable
When expandableRowGroups is present in subheader based row grouping, groups can be expanded and collapsed. State of the expansions are controlled using the expandedRows and onRowToggle properties.

Name	Country	Company	Status	Date
Amy ElsnerAmy Elsner
Anna FaliAnna Fali
Asiya JavayantAsiya Javayant
Bernardo DominicBernardo Dominic
Elwin SharvillElwin Sharvill
Ioni BowcherIoni Bowcher
Ivan MagalhaesIvan Magalhaes
Onyama LimbaOnyama Limba
Stephen ShawStephen Shaw
Xuxue FengXuxue Feng

<p-table [value]="customers" sortField="representative.name" sortMode="single" dataKey="representative.name" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '70rem'}">
    <ng-template #header>
        <tr>
            <th style="width:20%">Name</th>
            <th style="width:20%">Country</th>
            <th style="width:20%">Company</th>
            <th style="width:20%">Status</th>
            <th style="width:20%">Date</th>
        </tr>
    </ng-template>
    <ng-template #groupheader let-customer let-rowIndex="rowIndex" let-expanded="expanded">
        <tr>
            <td colspan="5">
                <button
                    type="button"
                    pButton
                    pRipple
                    [pRowToggler]="customer"
                    text
                    rounded
                    plain
                    class="mr-2"
                    [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'">
                </button>
                <img
                    [alt]="customer.representative.name"
                    src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}"
                    width="32"
                    style="vertical-align: middle; display: inline-block" />
                <span class="font-bold ml-2">{{customer.representative.name}}</span>
            </td>
        </tr>
    </ng-template>
    <ng-template #groupfooter let-customer>
        <tr class="p-rowgroup-footer">
            <td colspan="4" style="text-align: right">Total Customers</td>
            <td>{{calculateCustomerTotal(customer.representative.name)}}</td>
        </tr>
    </ng-template>
    <ng-template #expandedrow let-customer>
        <tr>
            <td>
                {{customer.name}}
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span>{{ customer.country.name }}</span>
                </div>
            </td>
            <td>
                {{customer.company}}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
            </td>
            <td>
                {{customer.date}}
            </td>
        </tr>
    </ng-template>
</p-table>

RowSpan
When rowGroupMode is configured to be rowspan, the grouping column spans multiple rows.

#	Representative	Name	Country	Company	Status	Date
0	
Amy Elsner
Amy Elsner
Josephine Darakjy	

Egypt
Chanay, Jeffrey A Esq	
negotiation
1	Graciela Ruta	

Chile
Buckley Miller & Wright	
negotiation
2	Ezekiel Chui	

Ireland
Sider, Donald C Esq	
new
3	Jose Stockham	

Italy
Tri State Refueler Co	
qualified
4	Rozella Ostrosky	

Venezuela
Parkway Company	
unqualified
5	Dyan Oldroyd	

Argentina
International Eyelets Inc	
qualified
6	Erick Ferencz	

Belgium
Cindy Turner Associates	
unqualified
7	
Anna Fali
Anna Fali
Minna Amigon	

Romania
Dorl, James J Esq	
qualified
8	Mattie Poquette	

Venezuela
Century Communications	
negotiation
9	Roxane Campain	

France
Rapid Trading Intl	
unqualified
10	
Asiya Javayant
Asiya Javayant
Art Venere	

Panama
Chemel, James L Cpa	
qualified
11	Donette Foller	

South Africa
Printing Dimensions	
negotiation
12	Cammy Albares	

Philippines
Rousseaux, Michael Esq	
new
13	Willard Kolmetz	

Tunisia
Ingalls, Donald R Esq	
renewal
14	Ammie Corrio	

Hungary
Moskowitz, Barry S	
negotiation
15	Blair Malet	

Finland
Bollinger Mach Shp & Shipyard	
new
16	
Bernardo Dominic
Bernardo Dominic
Abel Maclead	

Singapore
Rangoni Of Florence	
qualified
17	Yuki Whobrey	

Israel
Farmers Insurance Group	
negotiation
18	Albina Glick	

Ukraine
Giampetro, Anthony D	
negotiation
19	Valentine Gillian	

Paraguay
Fbs Business Finance	
qualified
20	
Elwin Sharvill
Elwin Sharvill
Maryann Royster	

Belarus
Franklin, Peter L Esq	
qualified
21	
Ioni Bowcher
Ioni Bowcher
James Butt	

Algeria
Benton, John B Jr	
unqualified
22	Veronika Inouye	

Ecuador
C 4 Network Inc	
renewal
23	Chanel Caudy	

Argentina
Professional Image Inc	
new
24	Bernardo Figeroa	

Israel
Clark, Richard Cpa	
renewal
25	Francine Vocelka	

Honduras
Cascade Realty Advisors Inc	
qualified
26	Kati Rulapaugh	

Puerto Rico
Eder Assocs Consltng Engrs Pc	
renewal
27	
Ivan Magalhaes
Ivan Magalhaes
Simona Morasca	

Egypt
Chapman, Ross E Esq	
qualified
28	Mitsue Tollner	

Paraguay
Morlong Associates	
renewal
29	Sage Wieser	

Egypt
Truhlar And Truhlar Attys	
unqualified
30	Meaghan Garufi	

Malaysia
Bolton, Wilbur Esq	
unqualified
31	Allene Iturbide	

Italy
Ledecky, David Esq	
qualified
32	Alishia Sergi	

Qatar
Milford Enterprises Inc	
negotiation
33	
Onyama Limba
Onyama Limba
Leota Dilliard	

Serbia
Commercial Press	
renewal
34	Kris Marrier	

Mexico
King, Christopher A Esq	
negotiation
35	Kiley Caldarera	

Serbia
Feiner Bros	
unqualified
36	Bette Nicka	

Paraguay
Sport En Art	
renewal
37	Willow Kusko	

Romania
U Pull It	
qualified
38	Solange Shinko	

Cameroon
Mosocco, Ronald A	
qualified
39	Fatima Saylors	

Canada
Stanton, James D Esq	
renewal
40	
Stephen Shaw
Stephen Shaw
Gladys Rim	

Netherlands
T M Byxbee Company Pc	
renewal
41	Alisha Slusarski	

Iceland
Wtlz Power 107 Fm	
qualified
42	Lavera Perin	

Vietnam
Abc Enterprises Inc	
qualified
43	Emerson Bowley	

Finland
Knights Inn	
new
44	
Xuxue Feng
Xuxue Feng
Lenna Paprocki	

Slovenia
Feltz Printing Service	
new
45	Fletcher Flosi	

Argentina
Post Box Services Plus	
renewal
46	Ernie Stenseth	

Australia
Knwz Newsradio	
renewal
47	Youlanda Schemmer	

Bolivia
Tri M Tool Inc	
negotiation
48	Jina Briddick	

Mexico
Grace Pastries Inc	
unqualified
49	Kanisha Waycott	

Ecuador
Schroer, Gene E Esq	
new

<p-table [value]="customers" rowGroupMode="rowspan" groupRowsBy="representative.name" sortField="representative.name" sortMode="single" [tableStyle]="{ 'min-width': '75rem' }">
    <ng-template #header>
        <tr>
            <th style="width:3rem">#</th>
            <th>Representative</th>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer let-rowIndex="rowIndex" let-rowgroup="rowgroup" let-rowspan="rowspan">
        <tr>
            <td>{{ rowIndex }}</td>
            <td *ngIf="rowgroup" [attr.rowspan]="rowspan">
                <div class="flex items-center gap-2">
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" />
                    <span>{{ customer.representative.name }}</span>
                </div>
            </td>
            <td>
                {{ customer.name }}
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span>{{ customer.country.name }}</span>
                </div>
            </td>
            <td>
                {{ customer.company }}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
            </td>
        </tr>
    </ng-template>
</p-table>

Column Resize
Fit Mode
Columns can be resized using drag drop by setting the resizableColumns to true. Fit mode is the default one and the overall table width does not change when a column is resized.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [value]="products" [resizableColumns]="true" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th pResizableColumn>Code</th>
            <th pResizableColumn>Name</th>
            <th pResizableColumn>Category</th>
            <th pResizableColumn>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>

Expand Mode
Setting columnResizeMode as expand changes the table width as well.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [value]="products" [resizableColumns]="true" columnResizeMode="expand" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th pResizableColumn>Code</th>
            <th pResizableColumn>Name</th>
            <th pResizableColumn>Category</th>
            <th pResizableColumn>Quantity</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>

Scrollable
Name	Country	Company	Representative
James Butt	Algeria	Benton, John B Jr	Ioni Bowcher
Josephine Darakjy	Egypt	Chanay, Jeffrey A Esq	Amy Elsner
Art Venere	Panama	Chemel, James L Cpa	Asiya Javayant
Lenna Paprocki	Slovenia	Feltz Printing Service	Xuxue Feng
Donette Foller	South Africa	Printing Dimensions	Asiya Javayant
Simona Morasca	Egypt	Chapman, Ross E Esq	Ivan Magalhaes
Mitsue Tollner	Paraguay	Morlong Associates	Ivan Magalhaes
Leota Dilliard	Serbia	Commercial Press	Onyama Limba
Sage Wieser	Egypt	Truhlar And Truhlar Attys	Ivan Magalhaes
Kris Marrier	Mexico	King, Christopher A Esq	Onyama Limba
Minna Amigon	Romania	Dorl, James J Esq	Anna Fali
Abel Maclead	Singapore	Rangoni Of Florence	Bernardo Dominic
Kiley Caldarera	Serbia	Feiner Bros	Onyama Limba
Graciela Ruta	Chile	Buckley Miller & Wright	Amy Elsner
Cammy Albares	Philippines	Rousseaux, Michael Esq	Asiya Javayant
Mattie Poquette	Venezuela	Century Communications	Anna Fali
Meaghan Garufi	Malaysia	Bolton, Wilbur Esq	Ivan Magalhaes
Gladys Rim	Netherlands	T M Byxbee Company Pc	Stephen Shaw
Yuki Whobrey	Israel	Farmers Insurance Group	Bernardo Dominic
Fletcher Flosi	Argentina	Post Box Services Plus	Xuxue Feng
Bette Nicka	Paraguay	Sport En Art	Onyama Limba
Veronika Inouye	Ecuador	C 4 Network Inc	Ioni Bowcher
Willard Kolmetz	Tunisia	Ingalls, Donald R Esq	Asiya Javayant
Maryann Royster	Belarus	Franklin, Peter L Esq	Elwin Sharvill
Alisha Slusarski	Iceland	Wtlz Power 107 Fm	Stephen Shaw
Allene Iturbide	Italy	Ledecky, David Esq	Ivan Magalhaes
Chanel Caudy	Argentina	Professional Image Inc	Ioni Bowcher
Ezekiel Chui	Ireland	Sider, Donald C Esq	Amy Elsner
Willow Kusko	Romania	U Pull It	Onyama Limba
Bernardo Figeroa	Israel	Clark, Richard Cpa	Ioni Bowcher
Ammie Corrio	Hungary	Moskowitz, Barry S	Asiya Javayant
Francine Vocelka	Honduras	Cascade Realty Advisors Inc	Ioni Bowcher
Ernie Stenseth	Australia	Knwz Newsradio	Xuxue Feng
Albina Glick	Ukraine	Giampetro, Anthony D	Bernardo Dominic
Alishia Sergi	Qatar	Milford Enterprises Inc	Ivan Magalhaes
Solange Shinko	Cameroon	Mosocco, Ronald A	Onyama Limba
Jose Stockham	Italy	Tri State Refueler Co	Amy Elsner
Rozella Ostrosky	Venezuela	Parkway Company	Amy Elsner
Valentine Gillian	Paraguay	Fbs Business Finance	Bernardo Dominic
Kati Rulapaugh	Puerto Rico	Eder Assocs Consltng Engrs Pc	Ioni Bowcher
Youlanda Schemmer	Bolivia	Tri M Tool Inc	Xuxue Feng
Dyan Oldroyd	Argentina	International Eyelets Inc	Amy Elsner
Roxane Campain	France	Rapid Trading Intl	Anna Fali
Lavera Perin	Vietnam	Abc Enterprises Inc	Stephen Shaw
Erick Ferencz	Belgium	Cindy Turner Associates	Amy Elsner
Fatima Saylors	Canada	Stanton, James D Esq	Onyama Limba
Jina Briddick	Mexico	Grace Pastries Inc	Xuxue Feng
Kanisha Waycott	Ecuador	Schroer, Gene E Esq	Xuxue Feng
Emerson Bowley	Finland	Knights Inn	Stephen Shaw
Blair Malet	Finland	Bollinger Mach Shp & Shipyard	Asiya Javayant
Brock Bolognia	Bolivia	Orinda News	Onyama Limba
Lorrie Nestle	Germany	Ballard Spahr Andrews	Anna Fali
Sabra Uyetake	Peru	Lowy Limousine Service	Amy Elsner
Marjory Mastella	Netherlands	Vicon Corporation	Anna Fali
Karl Klonowski	Saudi Arabia	Rossi, Michael M	Onyama Limba
Tonette Wenner	Australia	Northwest Publishing	Elwin Sharvill
Amber Monarrez	Sweden	Branford Wire & Mfg Co	Bernardo Dominic
Shenika Seewald	Australia	East Coast Marketing	Xuxue Feng
Delmy Ahle	Belgium	Wye Technologies Inc	Anna Fali
Deeanna Juhas	Sweden	Healy, George W Iv	Asiya Javayant
Blondell Pugh	Ireland	Alpenlite Inc	Bernardo Dominic
Jamal Vanausdal	Morocco	Hubbard, Bruce Esq	Ioni Bowcher
Cecily Hollack	Bolivia	Arthur A Oliver & Son Inc	Amy Elsner
Carmelina Lindall	Puerto Rico	George Jessop Carter Jewelers	Asiya Javayant
Maurine Yglesias	Taiwan	Schultz, Thomas C Md	Ioni Bowcher
Tawna Buvens	Indonesia	H H H Enterprises Inc	Amy Elsner
Penney Weight	South Africa	Hawaiian King Hotel	Amy Elsner
Elly Morocco	Thailand	Killion Industries	Xuxue Feng
Ilene Eroman	Netherlands	Robinson, William J Esq	Anna Fali
Vallie Mondella	Latvia	Private Properties	Ivan Magalhaes
Kallie Blackwood	Iceland	Rowley Schlimgen Inc	Amy Elsner
Johnetta Abdallah	Netherlands	Forging Specialties	Elwin Sharvill
Bobbye Rhym	Ukraine	Smits, Patricia Garity	Xuxue Feng
Micaela Rhymes	France	H Lee Leonard Attorney At Law	Asiya Javayant
Tamar Hoogland	Guatemala	A K Construction Co	Asiya Javayant
Moon Parlato	Czech Republic	Ambelang, Jessica M Md	Onyama Limba
Laurel Reitler	United Kingdom	Q A Service	Amy Elsner
Delisa Crupi	Taiwan	Wood & Whitacre Contractors	Xuxue Feng
Viva Toelkes	United States	Mark Iv Press Ltd	Stephen Shaw
Elza Lipke	Ireland	Museum Of Science & Industry	Elwin Sharvill
Devorah Chickering	Spain	Garrison Ind	Asiya Javayant
Timothy Mulqueen	Netherlands	Saronix Nymph Products	Asiya Javayant
Arlette Honeywell	Panama	Smc Inc	Amy Elsner
Dominque Dickerson	Argentina	E A I Electronic Assocs Inc	Bernardo Dominic
Lettie Isenhower	Canada	Conte, Christopher A Esq	Bernardo Dominic
Myra Munns	Lithuania	Anker Law Office	Elwin Sharvill
Stephaine Barfield	Belgium	Beutelschies & Company	Anna Fali
Lai Gato	Nigeria	Fligg, Kenneth I Jr	Onyama Limba
Stephen Emigh	Cuba	Sharp, J Daniel Esq	Elwin Sharvill
Tyra Shields	Honduras	Assink, Anne H Esq	Anna Fali
Tammara Wardrip	Saudi Arabia	Jewel My Shop Inc	Xuxue Feng
Cory Gibes	Malaysia	Chinese Translation Resources	Anna Fali
Danica Bruschke	Taiwan	Stevens, Charles T	Stephen Shaw
Wilda Giguere	Iceland	Mclaughlin, Luther W Cpa	Asiya Javayant
Elvera Benimadho	Malaysia	Tree Musketeers	Onyama Limba
Carma Vanheusen	Turkey	Springfield Div Oh Edison Co	Stephen Shaw
Malinda Hochard	Serbia	Logan Memorial Hospital	Asiya Javayant
Natalie Fern	Canada	Kelly, Charles G Esq	Amy Elsner
Lisha Centini	Netherlands	Industrial Paper Shredders Inc	Ioni Bowcher
Arlene Klusman	Jamaica	Beck Horizon Builders	Elwin Sharvill
Alease Buemi	Costa Rica	Porto Cayo At Hawks Cay	Onyama Limba
Louisa Cronauer	Costa Rica	Pacific Grove Museum Ntrl Hist	Anna Fali
Angella Cetta	Vietnam	Bender & Hatley Pc	Ivan Magalhaes
Cyndy Goldammer	Burkina Faso	Di Cristina J & Son	Stephen Shaw
Rosio Cork	Singapore	Green Goddess	Asiya Javayant
Celeste Korando	Costa Rica	American Arts & Graphics	Amy Elsner
Twana Felger	Croatia	Opryland Hotel	Ioni Bowcher
Estrella Samu	Vietnam	Marking Devices Pubg Co	Bernardo Dominic
Donte Kines	Slovakia	W Tc Industries Inc	Onyama Limba
Tiffiny Steffensmeier	Pakistan	Whitehall Robbins Labs Divsn	Ivan Magalhaes
Edna Miceli	France	Sampler	Asiya Javayant
Sue Kownacki	Jamaica	Juno Chefs Incorporated	Onyama Limba
Jesusa Shin	Ukraine	Carroccio, A Thomas Esq	Bernardo Dominic
Rolland Francescon	United Kingdom	Stanley, Richard L Esq	Onyama Limba
Pamella Schmierer	Belgium	K Cs Cstm Mouldings Windows	Ioni Bowcher
Glory Kulzer	Croatia	Comfort Inn	Onyama Limba
Shawna Palaspas	Estonia	Windsor, James L Esq	Bernardo Dominic
Brandon Callaro	Romania	Jackson Shields Yeiser	Anna Fali
Scarlet Cartan	Panama	Box, J Calvin Esq	Xuxue Feng
Oretha Menter	Panama	Custom Engineering Inc	Elwin Sharvill
Ty Smith	United States	Bresler Eitel Framg Gllry Ltd	Anna Fali
Xuan Rochin	Colombia	Carol, Drake Sparks Esq	Amy Elsner
Lindsey Dilello	Austria	Biltmore Investors Bank	Amy Elsner
Devora Perez	Uruguay	Desco Equipment Corp	Onyama Limba
Herman Demesa	Paraguay	Merlin Electric Co	Asiya Javayant
Rory Papasergi	Egypt	Bailey Cntl Co Div Babcock	Anna Fali
Talia Riopelle	Guatemala	Ford Brothers Wholesale Inc	Elwin Sharvill
Van Shire	Netherlands	Cambridge Inn	Ioni Bowcher
Lucina Lary	Switzerland	Matricciani, Albert J Jr	Xuxue Feng
Bok Isaacs	Chile	Nelson Hawaiian Ltd	Asiya Javayant
Rolande Spickerman	Panama	Neland Travel Agency	Bernardo Dominic
Howard Paulas	Indonesia	Asendorf, J Alan Esq	Ioni Bowcher
Kimbery Madarang	Senegal	Silberman, Arthur L Esq	Onyama Limba
Thurman Manno	Colombia	Honey Bee Breeding Genetics &	Ivan Magalhaes
Becky Mirafuentes	Serbia	Wells Kravitz Schnitzer	Elwin Sharvill
Beatriz Corrington	South Africa	Prohab Rehabilitation Servs	Stephen Shaw
Marti Maybury	Thailand	Eldridge, Kristin K Esq	Bernardo Dominic
Nieves Gotter	Latvia	Vlahos, John J Esq	Elwin Sharvill
Leatha Hagele	Ukraine	Ninas Indian Grs & Videos	Stephen Shaw
Valentin Klimek	Ivory Coast	Schmid, Gayanne K Esq	Ivan Magalhaes
Melissa Wiklund	Japan	Moapa Valley Federal Credit Un	Onyama Limba
Sheridan Zane	Croatia	Kentucky Tennessee Clay Co	Bernardo Dominic
Bulah Padilla	Philippines	Admiral Party Rentals & Sales	Ioni Bowcher
Audra Kohnert	Netherlands	Nelson, Karolyn King Esq	Bernardo Dominic
Daren Weirather	Israel	Panasystems	Onyama Limba
Fernanda Jillson	Mexico	Shank, Edward L Esq	Xuxue Feng
Gearldine Gellinger	Egypt	Megibow & Edwards	Anna Fali
Chau Kitzman	Paraguay	Benoff, Edward Esq	Onyama Limba
Theola Frey	Vietnam	Woodbridge Free Public Library	Ioni Bowcher
Cheryl Haroldson	France	New York Life John Thune	Elwin Sharvill
Laticia Merced	Burkina Faso	Alinabal Inc	Ivan Magalhaes
Carissa Batman	Greece	Poletto, Kim David Esq	Ivan Magalhaes
Lezlie Craghead	Panama	Chang, Carolyn Esq	Xuxue Feng
Ozell Shealy	Pakistan	Silver Bros Inc	Bernardo Dominic
Arminda Parvis	Indonesia	Newtec Inc	Elwin Sharvill
Reita Leto	Belgium	Creative Business Systems	Ioni Bowcher
Yolando Luczki	France	Dal Tile Corporation	Ioni Bowcher
Lizette Stem	Slovakia	Edward S Katz	Stephen Shaw
Gregoria Pawlowicz	Egypt	Oh My Goodknits Inc	Stephen Shaw
Carin Deleo	China	Redeker, Debbie	Asiya Javayant
Chantell Maynerich	Estonia	Desert Sands Motel	Ivan Magalhaes
Dierdre Yum	Czech Republic	Cummins Southern Plains Inc	Onyama Limba
Larae Gudroe	Slovenia	Lehigh Furn Divsn Lehigh	Ioni Bowcher
Latrice Tolfree	Jamaica	United Van Lines Agent	Ioni Bowcher
Kerry Theodorov	Romania	Capitol Reporters	Amy Elsner
Dorthy Hidvegi	Poland	Kwik Kopy Printing	Ivan Magalhaes
Fannie Lungren	Belarus	Centro Inc	Stephen Shaw
Evangelina Radde	Ivory Coast	Campbell, Jan Esq	Anna Fali
Novella Degroot	Slovenia	Evans, C Kelly Esq	Amy Elsner
Clay Hoa	Paraguay	Scat Enterprises	Amy Elsner
Jennifer Fallick	Australia	Nagle, Daniel J Esq	Bernardo Dominic
Irma Wolfgramm	Belgium	Serendiquity Bed & Breakfast	Stephen Shaw
Eun Coody	Taiwan	Ray Carolyne Realty	Ioni Bowcher
Sylvia Cousey	Ireland	Berg, Charles E	Ioni Bowcher
Nana Wrinkles	Austria	Ray, Milbern D	Asiya Javayant
Layla Springe	South Africa	Chadds Ford Winery	Ioni Bowcher
Joesph Degonia	Serbia	A R Packaging	Elwin Sharvill
Annabelle Boord	Guatemala	Corn Popper	Anna Fali
Stephaine Vinning	Australia	Birite Foodservice Distr	Xuxue Feng
Nelida Sawchuk	South Africa	Anchorage Museum Of Hist & Art	Onyama Limba
Marguerita Hiatt	United Kingdom	Haber, George D Md	Anna Fali
Carmela Cookey	France	Royal Pontiac Olds Inc	Xuxue Feng
Junita Brideau	Indonesia	Leonards Antiques Inc	Anna Fali
Claribel Varriano	Ecuador	Meca	Onyama Limba
Benton Skursky	Iceland	Nercon Engineering & Mfg Inc	Asiya Javayant
Hillary Skulski	France	Replica I	Bernardo Dominic
Merilyn Bayless	Jamaica	20 20 Printing Inc	Ivan Magalhaes
Teri Ennaco	Pakistan	Publishers Group West	Bernardo Dominic
Merlyn Lawler	Germany	Nischwitz, Jeffrey L Esq	Ivan Magalhaes
Georgene Montezuma	Senegal	Payne Blades & Wellborn Pa	Elwin Sharvill
Jettie Mconnell	Denmark	Coldwell Bnkr Wright Real Est	Ivan Magalhaes
Lemuel Latzke	Colombia	Computer Repair Service	Stephen Shaw
Melodie Knipp	Finland	Fleetwood Building Block Inc	Asiya Javayant
Candida Corbley	Poland	Colts Neck Medical Assocs Inc	Onyama Limba
Karan Karpin	Estonia	New England Taxidermy	Stephen Shaw
Andra Scheyer	Romania	Ludcke, George O Esq	Elwin Sharvill
Felicidad Poullion	Greece	Mccorkle, Tom S Esq	Elwin Sharvill
Belen Strassner	Ivory Coast	Eagle Software Inc	Xuxue Feng
Gracia Melnyk	Costa Rica	Juvenile & Adult Super	Asiya Javayant
Jolanda Hanafan	Cameroon	Perez, Joseph J Esq	Ivan Magalhaes

<p-table [value]="customers" [scrollable]="true" scrollHeight="400px" [resizableColumns]="true" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th pResizableColumn>Name</th>
            <th pResizableColumn>Country</th>
            <th pResizableColumn>Company</th>
            <th pResizableColumn>Representative</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.representative.name}}</td>
        </tr>
    </ng-template>
</p-table>

Reorder
Order of the columns and rows can be changed using drag and drop. Column reordering is configured by adding reorderableColumns property.

Similarly, adding reorderableRows property enables draggable rows. For the drag handle a column needs to have rowReorder property and onRowReorder callback is required to control the state of the rows after reorder completes.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [value]="products" [columns]="cols" [reorderableColumns]="true" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header let-columns>
        <tr>
            <th style="width:3rem"></th>
            <th *ngFor="let col of columns" pReorderableColumn>
                {{col.header}}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowData let-columns="columns" let-index="rowIndex">
        <tr [pReorderableRow]="index">
            <td>
                <span class="pi pi-bars" pReorderableRowHandle></span>
            </td>
            <td *ngFor="let col of columns">
                {{rowData[col.field]}}
            </td>
        </tr>
    </ng-template>
</p-table>

Column Toggle
This demo uses a multiselect component to implement toggleable columns.

Name, Category, Quantity
Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table [columns]="selectedColumns" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #caption>
        <p-multiselect display="chip" [options]="cols" [(ngModel)]="selectedColumns" optionLabel="header" selectedItemsLabel="{0} columns selected" [style]="{ 'min-width': '200px' }" placeholder="Choose Columns" />
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th>Code</th>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-product let-columns="columns">
        <tr>
            <td>{{ product.code }}</td>
            <td *ngFor="let col of columns">
                {{ product[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>

Export
Table can export its data to CSV format.

Code	Name	Category	Quantity
f230fh0g3	Bamboo Watch	Accessories	24
nvklal433	Black Watch	Accessories	61
zz21cz3c1	Blue Band	Fitness	2
244wgerg2	Blue T-Shirt	Clothing	25
h456wer53	Bracelet	Accessories	73

<p-table #dt [columns]="cols" [value]="products" selectionMode="multiple" [(selection)]="selectedProducts" [exportHeader]="'customExportHeader'" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template #caption>
        <div class="text-end pb-4">
            <p-button icon="pi pi-external-link" label="Export" (click)="dt.exportCSV()" />
        </div>
    </ng-template>
    <ng-template #header let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template #body let-rowData let-columns="columns">
        <tr [pSelectableRow]="rowData">
            <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>

Context Menu
Table has exclusive integration with contextmenu component. In order to attach a menu to a table, add pContextMenuRow directive to the rows that can be selected with context menu, define a local template variable for the menu and bind it to the contextMenu property of the table. This enables displaying the menu whenever a row is right clicked. Optional pContextMenuRowIndex property is available to access the row index. A separate contextMenuSelection property is used to get a hold of the right clicked row. For dynamic columns, setting pContextMenuRowDisabled property as true disables context menu for that particular row.

Code	Name	Category	Price
f230fh0g3	Bamboo Watch	Accessories	$65.00
nvklal433	Black Watch	Accessories	$72.00
zz21cz3c1	Blue Band	Fitness	$79.00
244wgerg2	Blue T-Shirt	Clothing	$29.00
h456wer53	Bracelet	Accessories	$15.00

<p-contextmenu #cm [model]="items" (onHide)="selectedProduct = null" />
<p-table [value]="products" [(contextMenuSelection)]="selectedProduct" [contextMenu]="cm" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
    <ng-template #header>
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr [pContextMenuRow]="product">
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.price | currency: 'USD'}}</td>
        </tr>
    </ng-template>
</p-table>
<p-toast />

Stateful
Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using the last settings.

Change the state of the table e.g paginate, navigate away and then return to this table again to test this feature, the setting is set as session with the stateStorage property so that Table retains the state until the browser is closed. Other alternative is local referring to localStorage for an extended lifetime.

Global Search
James Butt	

Algeria
Ioni Bowcher
Ioni Bowcher
unqualified
Josephine Darakjy	

Egypt
Amy Elsner
Amy Elsner
negotiation
Art Venere	

Panama
Asiya Javayant
Asiya Javayant
qualified
Lenna Paprocki	

Slovenia
Xuxue Feng
Xuxue Feng
new
Donette Foller	

South Africa
Asiya Javayant
Asiya Javayant
negotiation

<p-table
    #dt1
    [value]="customers"
    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
    selectionMode="single"
    [(selection)]="selectedCustomers"
    dataKey="id"
    [tableStyle]="{ 'min-width': '50rem' }"
    [rows]="5"
    [paginator]="true"
    stateStorage="session"
    stateKey="statedemo-session"
>
    <ng-template #caption>
        <p-iconfield iconPosition="left">
            <p-inputicon>
                <i class="pi pi-search"></i>
            </p-inputicon>
            <input
                pInputText
                type="text"
                (input)="dt1.filterGlobal($event.target.value, 'contains')"
                placeholder="Global Search"
            />
        </p-iconfield>
    </ng-template>
    <ng-template #header>
        <tr>
            <th pSortableColumn="name" style="width:25%">Name <p-sortIcon field="name" /></th>
            <th pSortableColumn="country.name" style="width:25%">
                Country <p-sortIcon field="country.name" />
            </th>
            <th pSortableColumn="representative.name" style="width:25%">
                Representative <p-sortIcon field="representative.name" />
            </th>
            <th pSortableColumn="status" style="width:25%">Status <p-sortIcon field="status" /></th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr [pSelectableRow]="customer">
            <td>
                {{ customer.name }}
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span class="ml-1 align-middle">{{ customer.country.name }}</span>
                </div>
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                    <span class="ml-1 align-middle">{{ customer.representative.name }}</span>
                </div>
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
            </td>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr [pSelectableRow]="customer">
            <td>
                {{ customer.name }}
            </td>
            <td>
                <img
                    src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                    [class]="'flag flag-' + customer.country.code"
                    style="width: 20px"
                />
                <span class="ml-1 align-middle">{{ customer.country.name }}</span>
            </td>
            <td>
                <img
                    [alt]="customer.representative.name"
                    src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{
                        customer.representative.image
                    }}"
                    width="32"
                    style="vertical-align: middle"
                />
                <span class="ml-1 align-middle">{{ customer.representative.name }}</span>
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
            </td>
        </tr>
    </ng-template>
    <ng-template emptymessage>
        <tr>
            <td colspan="4">No customers found.</td>
        </tr>
    </ng-template>
</p-table>

Samples
Customers
DataTable with selection, pagination, filtering, sorting and templating.

Keyboard Search
James Butt	

Algeria
Ioni Bowcher
Ioni Bowcher
09/13/2015	$70,663.00	
unqualified
Josephine Darakjy	

Egypt
Amy Elsner
Amy Elsner
02/09/2019	$82,429.00	
negotiation
Art Venere	

Panama
Asiya Javayant
Asiya Javayant
05/13/2017	$28,334.00	
qualified
Lenna Paprocki	

Slovenia
Xuxue Feng
Xuxue Feng
09/15/2020	$88,521.00	
new
Donette Foller	

South Africa
Asiya Javayant
Asiya Javayant
05/20/2016	$93,905.00	
negotiation
Simona Morasca	

Egypt
Ivan Magalhaes
Ivan Magalhaes
02/16/2018	$50,041.00	
qualified
Mitsue Tollner	

Paraguay
Ivan Magalhaes
Ivan Magalhaes
02/19/2018	$58,706.00	
renewal
Leota Dilliard	

Serbia
Onyama Limba
Onyama Limba
08/13/2019	$26,640.00	
renewal
Sage Wieser	

Egypt
Ivan Magalhaes
Ivan Magalhaes
11/21/2018	$65,369.00	
unqualified
Kris Marrier	

Mexico
Onyama Limba
Onyama Limba
07/07/2015	$63,451.00	
negotiation
Showing 1 to 10 of 200 entries

<p-table
    #dt
    [value]="customers"
    [(selection)]="selectedCustomers"
    dataKey="id"
    [rowHover]="true"
    [rows]="10"
    [showCurrentPageReport]="true"
    [rowsPerPageOptions]="[10, 25, 50]"
    [loading]="loading"
    [paginator]="true"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [filterDelay]="0"
    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
>
    <ng-template #caption>
        <div class="flex justify-between">
            <p-button [outlined]="true" icon="pi pi-filter-slash" label="Clear" (click)="clear(dt)" />
            <p-iconField iconPosition="left">
                <p-inputIcon>
                    <i class="pi pi-search"></i>
                </p-inputIcon>
                <input pInputText type="text" [(ngModel)]="searchValue" (input)="dt.filterGlobal($event.target.value, 'contains')" placeholder="Keyboard Search" />
            </p-iconField>
        </div>
    </ng-template>
    <ng-template #header>
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox />
            </th>
            <th pSortableColumn="name" style="min-width: 14rem">
                <div class="flex justify-between items-center">
                    Name
                    <p-sortIcon field="name" />
                    <p-columnFilter type="text" field="name" display="menu" class="ml-auto" />
                </div>
            </th>
            <th pSortableColumn="country.name" style="min-width: 14rem">
                <div class="flex justify-between items-center">
                    Country
                    <p-sortIcon field="country.name" />
                    <p-columnFilter type="text" field="country.name" display="menu" class="ml-auto" />
                </div>
            </th>
            <th pSortableColumn="representative.name" style="min-width: 14rem">
                <div class="flex justify-between items-center">
                    Agent
                    <p-sortIcon field="representative.name" />
                    <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false" class="ml-auto">
                        <ng-template #filter let-value let-filter="filterCallback">
                            <p-multiselect [filter]="false" [(ngModel)]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" class="w-full">
                                <ng-template let-option #item>
                                    <div class="flex items-center gap-2">
                                        <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" style="width: 32px" />
                                        <span>{{ option.name }}</span>
                                    </div>
                                </ng-template>
                            </p-multiselect>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th pSortableColumn="date" style="min-width: 10rem">
                <div class="flex justify-between items-center">
                    Date
                    <p-sortIcon field="date" />
                    <p-columnFilter type="date" field="date" display="menu" class="ml-auto" />
                </div>
            </th>
            <th pSortableColumn="balance" style="min-width: 10rem">
                <div class="flex justify-between items-center">
                    Balance
                    <p-sortIcon field="balance" />
                    <p-columnFilter type="numeric" field="balance" display="menu" currency="USD" class="ml-auto" />
                </div>
            </th>
            <th pSortableColumn="status" style="min-width: 10rem">
                <div class="flex justify-between items-center">
                    Status
                    <p-sortIcon field="status" />
                    <p-columnFilter field="status" matchMode="equals" display="menu" class="ml-auto">
                        <ng-template #filter let-value let-filter="filterCallback">
                            <p-dropdown [(ngModel)]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any">
                                <ng-template let-option #item>
                                    <p-tag [value]="option.label" [severity]="getSeverity(option.label)" />
                                </ng-template>
                            </p-dropdown>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th pSortableColumn="activity" style="min-width: 10rem">
                <div class="flex justify-between items-center">
                    Activity
                    <p-sortIcon field="activity" />
                    <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false" class="ml-auto">
                        <ng-template #filter let-filter="filterCallback">
                            <p-slider [(ngModel)]="activityValues" [range]="true" (onSlideEnd)="filter($event.values)" styleClass="m-4"></p-slider>
                            <div class="flex items-center justify-between px-2">
                                <span>{{ activityValues[0] }}</span>
                                <span>{{ activityValues[1] }}</span>
                            </div>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th style="width: 5rem"></th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr class="p-selectable-row">
            <td>
                <p-tableCheckbox [value]="customer" />
            </td>
            <td>
                {{ customer.name }}
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span class="ml-1 align-middle">{{ customer.country.name }}</span>
                </div>
            </td>
            <td>
                <div class="flex items-center gap-2">
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                    <span class="ml-1 align-middle">{{ customer.representative.name }}</span>
                </div>
            </td>
            <td>
                {{ customer.date | date: 'MM/dd/yyyy' }}
            </td>
            <td>
                {{ customer.balance | currency: 'USD' : 'symbol' }}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)" />
            </td>
            <td>
                <p-progressBar [value]="customer.activity" [showValue]="false" />
            </td>
            <td style="text-align: center">
                <p-button rounded icon="pi pi-cog" />
            </td>
        </tr>
    </ng-template>
    <ng-template #emptymessage>
        <tr>
            <td colspan="8">No customers found.</td>
        </tr>
    </ng-template>
</p-table>

Products
CRUD implementation example with a Dialog.

Manage Products
Search...
Code	Image	
f230fh0g3	Bamboo Watch	Bamboo Watch	$65.00	Accessories	





INSTOCK
nvklal433	Black Watch	Black Watch	$72.00	Accessories	





INSTOCK
zz21cz3c1	Blue Band	Blue Band	$79.00	Fitness	





LOWSTOCK
244wgerg2	Blue T-Shirt	Blue T-Shirt	$29.00	Clothing	





INSTOCK
h456wer53	Bracelet	Bracelet	$15.00	Accessories	





INSTOCK
av2231fwg	Brown Purse	Brown Purse	$120.00	Accessories	





OUTOFSTOCK
bib36pfvm	Chakra Bracelet	Chakra Bracelet	$32.00	Accessories	





LOWSTOCK
mbvjkgip5	Galaxy Earrings	Galaxy Earrings	$34.00	Accessories	





INSTOCK
vbb124btr	Game Controller	Game Controller	$99.00	Electronics	





LOWSTOCK
cm230f032	Gaming Set	Gaming Set	$299.00	Electronics	





INSTOCK
Showing 1 to 10 of 30 entries
In total there are 30 products.

<p-toolbar styleClass="mb-6">
    <ng-template #start>
        <p-button label="New" icon="pi pi-plus" class="mr-2" (onClick)="openNew()" />
        <p-button severity="danger" label="Delete" icon="pi pi-trash" outlined (onClick)="deleteSelectedProducts()" [disabled]="!selectedProducts || !selectedProducts.length" />
    </ng-template>

    <ng-template #end>
        <p-fileUpload mode="basic" accept="image/*" [maxFileSize]="1000000" label="Import" chooseLabel="Import" auto customUpload class="mr-2 inline-block" [chooseButtonProps]="{ severity: 'secondary' }" />
        <p-button label="Export" icon="pi pi-upload" severity="secondary" (onClick)="exportCSV($event)" />
    </ng-template>
</p-toolbar>

<p-table
    #dt
    [value]="products"
    [rows]="10"
    [columns]="cols"
    [paginator]="true"
    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
    [tableStyle]="{ 'min-width': '75rem' }"
    [(selection)]="selectedProducts"
    [rowHover]="true"
    dataKey="id"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [showCurrentPageReport]="true"
>
    <ng-template #caption>
        <div class="flex items-center justify-between">
            <h5 class="m-0">Manage Products</h5>
            <p-iconfield>
                <p-inputicon styleClass="pi pi-search" />
                <input pInputText type="text" (input)="dt.filterGlobal($event.target.value, 'contains')" placeholder="Search..." />
            </p-iconfield>
        </div>
    </ng-template>
    <ng-template #header>
        <tr>
            <th style="width: 3rem">
                <p-tableHeaderCheckbox />
            </th>
            <th style="min-width: 16rem">Code</th>
            <th pSortableColumn="name" style="min-width:16rem">
                Name
                <p-sortIcon field="name" />
            </th>
            <th>Image</th>
            <th pSortableColumn="price" style="min-width: 8rem">
                Price
                <p-sortIcon field="price" />
            </th>
            <th pSortableColumn="category" style="min-width:10rem">
                Category
                <p-sortIcon field="category" />
            </th>
            <th pSortableColumn="rating" style="min-width: 12rem">
                Reviews
                <p-sortIcon field="rating" />
            </th>
            <th pSortableColumn="inventoryStatus" style="min-width: 12rem">
                Status
                <p-sortIcon field="inventoryStatus" />
            </th>
            <th style="min-width: 12rem"></th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td style="width: 3rem">
                <p-tableCheckbox [value]="product" />
            </td>
            <td style="min-width: 12rem">{{ product.code }}</td>
            <td style="min-width: 16rem">{{ product.name }}</td>
            <td>
                <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" style="width: 64px" class="rounded" />
            </td>
            <td>{{ product.price | currency: 'USD' }}</td>
            <td>{{ product.category }}</td>
            <td>
                <p-rating [(ngModel)]="product.rating" [readonly]="true" [cancel]="false" />
            </td>
            <td>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)" />
            </td>
            <td>
                <p-button icon="pi pi-pencil" class="mr-2" [rounded]="true" [outlined]="true" (click)="editProduct(product)" />
                <p-button icon="pi pi-trash" severity="danger" [rounded]="true" [outlined]="true" (click)="deleteProduct(product)" />
            </td>
        </tr>
    </ng-template>
    <ng-template #summary>
        <div class="flex items-center justify-between">In total there are {{ products ? products.length : 0 }} products.</div>
    </ng-template>
</p-table>

<p-dialog [(visible)]="productDialog" [style]="{ width: '450px' }" header="Product Details" [modal]="true">
    <ng-template #content>
        <div class="flex flex-col gap-6">
            <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.image" class="block m-auto pb-4" *ngIf="product.image" />
            <div>
                <label for="name" class="block font-bold mb-3">Name</label>
                <input type="text" pInputText id="name" [(ngModel)]="product.name" required autofocus fluid />
                <small class="text-red-500" *ngIf="submitted && !product.name">Name is required.</small>
            </div>
            <div>
                <label for="description" class="block font-bold mb-3">Description</label>
                <textarea id="description" pTextarea [(ngModel)]="product.description" required rows="3" cols="20" fluid></textarea>
            </div>

            <div>
                <label for="inventoryStatus" class="block font-bold mb-3">Inventory Status</label>
                <p-select [(ngModel)]="product.inventoryStatus" inputId="inventoryStatus" [options]="statuses" optionLabel="label" placeholder="Select a Status" fluid />
            </div>

            <div>
                <span class="block font-bold mb-4">Category</span>
                <div class="grid grid-cols-12 gap-4">
                    <div class="flex items-center gap-2 col-span-6">
                        <p-radiobutton id="category1" name="category" value="Accessories" [(ngModel)]="product.category" />
                        <label for="category1">Accessories</label>
                    </div>
                    <div class="flex items-center gap-2 col-span-6">
                        <p-radiobutton id="category2" name="category" value="Clothing" [(ngModel)]="product.category" />
                        <label for="category2">Clothing</label>
                    </div>
                    <div class="flex items-center gap-2 col-span-6">
                        <p-radiobutton id="category3" name="category" value="Electronics" [(ngModel)]="product.category" />
                        <label for="category3">Electronics</label>
                    </div>
                    <div class="flex items-center gap-2 col-span-6">
                        <p-radiobutton id="category4" name="category" value="Fitness" [(ngModel)]="product.category" />
                        <label for="category4">Fitness</label>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6">
                    <label for="price" class="block font-bold mb-3">Price</label>
                    <p-inputnumber id="price" [(ngModel)]="product.price" mode="currency" currency="USD" locale="en-US" fluid />
                </div>
                <div class="col-span-6">
                    <label for="quantity" class="block font-bold mb-3">Quantity</label>
                    <p-inputnumber id="quantity" [(ngModel)]="product.quantity" fluid />
                </div>
            </div>
        </div>
    </ng-template>

    <ng-template #footer>
        <p-button label="Cancel" icon="pi pi-times" text (click)="hideDialog()" />
        <p-button label="Save" icon="pi pi-check" (click)="saveProduct()" />
    </ng-template>
</p-dialog>

<p-confirmDialog [style]="{ width: '450px' }" />

Accessibility
Screen Reader
Default role of the table is table. Header, body and footer elements use rowgroup, rows use row role, header cells have columnheader and body cells use cell roles. Sortable headers utilizer aria-sort attribute either set to "ascending" or "descending".

Table rows and table cells should be specified by users using the aria-posinset, aria-setsize, aria-label, and aria-describedby attributes, as they are determined through templating.

Built-in checkbox and radiobutton components for row selection use checkbox and radiobutton. The label to describe them is retrieved from the aria.selectRow and aria.unselectRow properties of the locale API. Similarly header checkbox uses selectAll and unselectAll keys. When a row is selected, aria-selected is set to true on a row.

The element to expand or collapse a row is a button with aria-expanded and aria-controls properties. Value to describe the buttons is derived from aria.expandRow and aria.collapseRow properties of the locale API.

The filter menu button use aria.showFilterMenu and aria.hideFilterMenu properties as aria-label in addition to the aria-haspopup, aria-expanded and aria-controls to define the relation between the button and the overlay. Popop menu has dialog role with aria-modal as focus is kept within the overlay. The operator dropdown use aria.filterOperator and filter constraints dropdown use aria.filterConstraint properties. Buttons to add rules on the other hand utilize aria.addRule and aria.removeRule properties. The footer buttons similarly use aria.clear and aria.apply properties. filterInputProps of the Column component can be used to define aria labels for the built-in filter components, if a custom component is used with templating you also may define your own aria labels as well.

Editable cells use custom templating so you need to manage aria roles and attributes manually if required. The row editor controls are button elements with aria.editRow, aria.cancelEdit and aria.saveEdit used for the aria-label.

Paginator is a standalone component used inside the Table, refer to the paginator for more information about the accessibility features.

Keyboard Support
Any button element inside the Table used for cases like filter, row expansion, edit are tabbable and can be used with space and enter keys.

Sortable Headers Keyboard Support
Key	Function
tab	Moves through the headers.
enter	Sorts the column.
space	Sorts the column.
Filter Menu Keyboard Support
Key	Function
tab	Moves through the elements inside the popup.
escape	Hides the popup.
enter	Opens the popup.
Selection Keyboard Support
Key	Function
tab	Moves focus to the first selected row, if there is none then first row receives the focus.
up arrow	Moves focus to the previous row.
down arrow	Moves focus to the next row.
enter	Toggles the selected state of the focused row depending on the metaKeySelection setting.
space	Toggles the selected state of the focused row depending on the metaKeySelection setting.
home	Moves focus to the first row.
end	Moves focus to the last row.
shift + down arrow	Moves focus to the next row and toggles the selection state.
shift + up arrow	Moves focus to the previous row and toggles the selection state.
shift + space	Selects the rows between the most recently selected row and the focused row.
control + shift + home	Selects the focused rows and all the options up to the first one.
control + shift + end	Selects the focused rows and all the options down to the last one.
control + a	Selects all rows.