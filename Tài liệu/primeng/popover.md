Popover
Popover is a container component that can overlay other components on page.

Import

import { PopoverModule } from 'primeng/popover';

Basic
Popover is accessed via its reference and visibility is controlled using toggle, show and hide methods with an event of the target.


<p-button (click)="op.toggle($event)" icon="pi pi-share-alt" label="Share" />
<p-popover #op>
    <div class="flex flex-col gap-4 w-[25rem]">
        <div>
            <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Share this document</span>
            <p-inputgroup>
                <input pInputText value="https://primeng.org/12323ff26t2g243g423g234gg52hy25XADXAG3" readonly class="w-[25rem]" />
                <p-inputgroup-addon>
                    <i class="pi pi-copy"></i>
                </p-inputgroup-addon>
            </p-inputgroup>
        </div>
        <div>
            <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Invite Member</span>
            <div class="flex">
                <p-inputgroup>
                    <input pInputText disabled />
                    <button pButton label="Invite" icon="pi pi-users"></button>
                </p-inputgroup>
            </div>
        </div>
        <div>
            <span class="font-medium text-surface-900 dark:text-surface-0 block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col gap-4">
                @for(member of members; track member) {
                <li class="flex items-center gap-2">
                    <img [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + member.image" style="width: 32px" />
                    <div>
                        <span class="font-medium">{{ member.name }}</span>
                        <div class="text-sm text-muted-color">{{ member.email }}</div>
                    </div>
                    <div class="flex items-center gap-2 text-muted-color ml-auto text-sm">
                        <span>{{ member.role }}</span>
                        <i class="pi pi-angle-down"></i>
                    </div>
                </li>
                }
            </ul>
        </div>
    </div>
</p-popover>

Select Data
In this sample, data is retrieved from the content inside the popover.


<p-button type="button" [label]="selectedMember ? selectedMember.name : 'Select Member'" (onClick)="toggle($event)" styleClass="min-w-48" />

<p-popover #op>
    <div class="flex flex-col gap-4">
        <div>
            <span class="font-medium block mb-2">Team Members</span>
            <ul class="list-none p-0 m-0 flex flex-col">
                <li *ngFor="let member of members" class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border" (click)="selectMember(member)">
                    <img [src]="'https://primefaces.org/cdn/primeng/images/demo/avatar/' + member.image" style="width: 32px" />
                    <div>
                        <span class="font-medium">{{ member.name }}</span>
                        <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</p-popover>

DataTable
Place the Popover outside of the data iteration components to avoid rendering it multiple times.

Id	Code	Name	Image	Details
1000	f230fh0g3	Bamboo Watch	$ 65	bamboo-watch.jpg	
1001	nvklal433	Black Watch	$ 72	black-watch.jpg	
1002	zz21cz3c1	Blue Band	$ 79	blue-band.jpg	
1003	244wgerg2	Blue T-Shirt	$ 29	blue-t-shirt.jpg	
1004	h456wer53	Bracelet	$ 15	bracelet.jpg	

<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }" [paginator]="true" [rows]="5">
    <ng-template #header>
        <tr>
            <th class="w-1/6">Id</th>
            <th class="w-1/6">Code</th>
            <th class="w-1/6">Name</th>
            <th class="w-1/6" pSortableColumn="price">Price <p-sortIcon field="price" /></th>
            <th class="w-1/6">Image</th>
            <th class="w-1/6">Details</th>
        </tr>
    </ng-template>
    <ng-template #body let-product>
        <tr>
            <td>{{ product.id }}</td>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>$ {{ product.price }}</td>
            <td>
                <img
                    [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image"
                    [alt]="product.image"
                    class="w-16 shadow-sm"
                />
            </td>
            <td>
                <p-button (onClick)="displayProduct($event, product)" icon="pi pi-search" severity="secondary" rounded />
            </td>
        </tr>
    </ng-template>
</p-table>
<p-popover #op (onHide)="selectedProduct = null">
    <ng-template #content>
        <div *ngIf="selectedProduct" class="rounded flex flex-col">
            <div class="flex justify-center rounded">
                <div class="relative mx-auto">
                    <img
                        class="rounded w-44 sm:w-64"
                        [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + selectedProduct.image"
                        [alt]="selectedProduct.name"
                    />
                    <p-tag
                        [value]="selectedProduct.inventoryStatus"
                        [severity]="getSeverity(selectedProduct)"
                        class="absolute"
                        styleClass="dark:!bg-surface-900"
                        [style.left.px]="4"
                        [style.top.px]="4"
                    />
                </div>
            </div>
            <div class="pt-4">
                <div class="flex flex-row justify-between items-start gap-2 mb-4">
                    <div>
                        <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                            selectedProduct.category
                        }}</span>
                        <div class="text-lg font-medium mt-1">{{ selectedProduct.name }}</div>
                    </div>
                    <div class="bg-surface-100 p-1" style="border-radius: 30px">
                        <div
                            class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                            style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                        >
                            <span class="text-surface-900 font-medium text-sm">{{ selectedProduct.rating }}</span>
                            <i class="pi pi-star-fill text-yellow-500"></i>
                        </div>
                    </div>
                </div>
                <div class="flex gap-2">
                    <p-button
                        icon="pi pi-shopping-cart"
                        [label]="'Buy Now | $' + selectedProduct.price"
                        [disabled]="selectedProduct.inventoryStatus === 'OUTOFSTOCK'"
                        class="flex-auto"
                        styleClass="w-full whitespace-nowrap"
                        (onClick)="hidePopover()"
                    />
                    <p-button icon="pi pi-heart" outlined (onClick)="hidePopover()" />
                </div>
            </div>
        </div>
    </ng-template>
</p-popover>

Accessibility
Screen Reader
Popover component uses dialog role and since any attribute is passed to the root element you may define attributes like aria-label or aria-labelledby to describe the popup contents. In addition aria-modal is added since focus is kept within the popup.

It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding tabIndex would be necessary. Popover adds aria-expanded state attribute and aria-controls to the trigger so that the relation between the trigger and the popup is defined.

Popover Keyboard Support
When the popup gets opened, the first focusable element receives the focus and this can be customized by adding autofocus to an element within the popup.

Key	Function
tab	Moves focus to the next the focusable element within the popup.
shift + tab	Moves focus to the previous the focusable element within the popup.
escape	Closes the popup and moves focus to the trigger.
Close Button Keyboard Support
Key	Function
enter	Closes the popup and moves focus to the trigger.
space	Closes the popup and moves focus to the trigger.



API

Popover API
API defines helper props, events and others for the PrimeNG Popover module.

Popover
Popover is a container component that can overlay other components on page.

Properties
Defines the input properties of the component.

name	type	default	description		
ariaLabel	string	null	Defines a string that labels the input for accessibility.		
ariaLabelledBy	string	null	Establishes relationships between the component and label(s) where its value should be one or more element IDs.		
dismissable	boolean	true	Enables to hide the overlay when outside is clicked.		
style	(klass: string) => any	null	Inline style of the component.		
styleClass	string	null	Style class of the component.		
appendTo	any	body	Target element to attach the panel, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).		
autoZIndex	boolean	true	Whether to automatically manage layering.		
ariaCloseLabel	string	null	Aria label of the close icon.		
baseZIndex	number	0	Base zIndex value to use in layering.		
focusOnShow	boolean	true	When enabled, first button receives focus on show.		
showTransitionOptions	string	.12s cubic-bezier(0, 0, 0.2, 1)	Transition options of the show animation.		
hideTransitionOptions	string	.1s linear	Transition options of the hide animation.		
Emitters
Defines emit that determine the behavior of the component based on a given condition or report the actions that the component takes.

name	parameters	description	
onShow	
value : any
Callback to invoke when an overlay becomes visible.	
onHide	
value : any
Callback to invoke when an overlay gets hidden.	
Methods
Defines methods that can be accessed by the component's reference.

name	parameters	description	
toggle	
event : any
target : any
Toggles the visibility of the panel.	
show	
event : any
target : any
Displays the panel.	
hide		Hides the panel.	
Templates
Defines the templates used by the component.

name	parameters	description	
content	
context : {
closeCallback: VoidFunction, // undefined
}
Custom template of content.	
closeicon


THEMEING





Popover Theming
CSS Classes
List of class names used in the styled mode.

class	description
p-popover	Class name of the root element
p-popover-content	Class name of the content element
Popover Design Tokens
List of design tokens used in a preset.

token	variable	description
popover.background	--p-popover-background	Background of root
popover.border.color	--p-popover-border-color	Border color of root
popover.color	--p-popover-color	Color of root
popover.border.radius	--p-popover-border-radius	Border radius of root
popover.shadow	--p-popover-shadow	Shadow of root
popover.gutter	--p-popover-gutter	Gutter of root
popover.arrow.offset	--p-popover-arrow-offset	Arrow offset of root
popover.content.padding	--p-popover-content-padding	Padding of content
Built-in Presets
PrimeNG offers various preset options that allow you to customize the component's styling to match your application's design system. Below you'll find links to the implementation and type definitions for each preset.

Preset	Implementation	Types
Aura	
Aura
Aura
Lara	
Lara
Lara
Nora	
Nora
Nora
Material	
Material
Material
