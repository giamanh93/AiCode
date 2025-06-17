Installation
Setting up PrimeNG in an Angular CLI project.

Download
PrimeNG is available for download on the npm registry.


# Using npm
npm install primeng @primeng/themes

# Using yarn
yarn add primeng @primeng/themes

# Using pnpm
pnpm add primeng @primeng/themes

Provider
Add providePrimeNG and provideAnimationsAsync to the list of providers in your app.config.ts and use the theme property to configure a theme such as Aura.


import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        })
    ]
};

Verify
Verify your setup by adding a component such as Button. Each component can be imported and registered individually so that you only include what you use for bundle optimization. Import path is available in the documentation of the corresponding component.


import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-demo',
    templateUrl: './button-demo.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonDemo {}


<div class="card flex justify-center">
    <p-button label="Check" />
</div>

Example
An example starter with Angular CLI is available at GitHub.

Next Steps
Welcome to the Prime UI Ecosystem! Once you have PrimeNG up and running, we recommend exploring the following resources to gain a deeper understanding of the library.

Global configuration
Customization of styles
Getting support



Configuration
Application wide configuration for PrimeNG.

Provider
The initial configuration is defined by the providePrimeNG provider during application startup.


import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({ /* options */ })
    ]
};

Dynamic
Inject the PrimeNG to your application to update the initial configuration at runtime.


import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.ripple.set(true);
    }
}

Theme
PrimeNG provides 4 predefined themes out of the box; Aura, Material, Lara and Nora. See the theming documentation for details.


import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'system',
                    cssLayer: false
                }
            }
        })
    ]
};

Ripple
Ripple is an optional animation for the supported components such as buttons. It is disabled by default.


providePrimeNG({
    ripple: true
})

InputVariant
Input fields come in two styles, default is outlined with borders around the field whereas filled alternative adds a background color to the field. A theme such as Material may add more additional design changes per each variant.


providePrimeNG({
    inputVariant: 'filled' 
})

ZIndex
ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeNG configuration offers the zIndex property to customize the default values for components categories. Default values are described below and can be customized when setting up PrimeNG.


providePrimeNG({
    zIndex: {
        modal: 1100,    // dialog, sidebar
        overlay: 1000,  // dropdown, overlaypanel
        menu: 1000,     // overlay menus
        tooltip: 1100   // tooltip
    }
})

CSP
Nonce
The nonce value to use on dynamically generated style elements in core.


providePrimeNG({
    csp: {
        nonce: '...'
    }
})

Filter Mode
Default filter modes to display on DataTable filter menus.


providePrimeNG({
    filterMatchModeOptions: {
        text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
        numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
        date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    }
})

Locale
Translation
A translation is specified using the translation property during initialization.


providePrimeNG({
    translation: {
        accept: 'Aceptar',
        reject: 'Rechazar',
        //translations
    }
})

Runtime
The translations can be changed dynamically at runtime, here is an example with ngx-translate.



import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private config: PrimeNG, private translateService: TranslateService) {}

    ngOnInit() {
        this.translateService.setDefaultLang('en');
    }

    translate(lang: string) {
        this.translateService.use(lang);
        this.translateService.get('primeng').subscribe(res => this.primeng.setTranslation(res));
    }
}

Repository
Ready to use settings for locales are available at the community supported PrimeLocale repository. We'd appreciate if you could contribute to this repository with pull requests and share it with the rest of the community.

API
Locale Options
Key	Value
startsWith	Starts with
contains	Contains
notContains	Not contains
endsWith	Ends with
equals	Equals
notEquals	Not equals
noFilter	No Filter
lt	Less than
lte	Less than or equal to
gt	Greater than
gte	Greater than or equal to
dateIs	Date is
dateIsNot	Date is not
dateBefore	Date is before
dateAfter	Date is after
clear	Clear
apply	Apply
matchAll	Match All
matchAny	Match Any
addRule	Add Rule
removeRule	Remove Rule
accept	Yes
reject	No
choose	Choose
upload	Upload
cancel	Cancel
completed	Completed
pending	Pending
fileSizeTypes	['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
dayNames	['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
dayNamesShort	['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
dayNamesMin	['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
monthNames	['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
monthNamesShort	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
chooseYear	Choose Year
chooseMonth	Choose Month
chooseDate	Choose Date
prevDecade	Previous Decade
nextDecade	Next Decade
prevYear	Previous Year
nextYear	Next Year
prevMonth	Previous Month
nextMonth	Next Month
prevHour	Previous Hour
nextHour	Next Hour
prevMinute	Previous Minute
nextMinute	Next Minute
prevSecond	Previous Second
nextSecond	Next Second
am	am
pm	pm
today	Today
weekHeader	Wk
firstDayOfWeek	0
dateFormat	mm/dd/yy
weak	Weak
medium	Medium
strong	Strong
passwordPrompt	Enter a password
emptyFilterMessage	No results found'
searchMessage	{0} results are available
selectionMessage	{0} items selected
emptySelectionMessage	No selected item
emptySearchMessage	No results found
emptyMessage	No available options
aria.trueLabel	True
aria.falseLabel	False
aria.nullLabel	Not Selected
aria.star	1 star
aria.stars	{star} stars
aria.selectAll	All items selected
aria.unselectAll	All items unselected
aria.close	Close
aria.previous	Previous
aria.next	Next
aria.navigation	Navigation
aria.scrollTop	Scroll Top
aria.moveTop	Move Top
aria.moveUp	Move Up
aria.moveDown	Move Down
aria.moveBottom	Move Bottom
aria.moveToTarget	Move to Target
aria.moveToSource	Move to Source
aria.moveAllToTarget	Move All to Target
aria.moveAllToSource	Move All to Source
aria.pageLabel	{page}
aria.firstPageLabel	First Page
aria.lastPageLabel	Last Page
aria.nextPageLabel	Next Page
aria.prevPageLabel	Previous Page
aria.rowsPerPageLabel	Rows per page
aria.jumpToPageDropdownLabel	Jump to Page Dropdown
aria.jumpToPageInputLabel	Jump to Page Input
aria.selectRow	Row Selected
aria.unselectRow	Row Unselected
aria.expandRow	Row Expanded
aria.collapseRow	Row Collapsed
aria.showFilterMenu	Show Filter Menu
aria.hideFilterMenu	Hide Filter Menu
aria.filterOperator	Filter Operator
aria.filterConstraint	Filter Constraint
aria.editRow	Row Edit
aria.saveEdit	Save Edit
aria.cancelEdit	Cancel Edit
aria.listView	List View
aria.gridView	Grid View
aria.slide	Slide
aria.slideNumber	{slideNumber}
aria.zoomImage	Zoom Image
aria.zoomIn	Zoom In
aria.zoomOut	Zoom Out
aria.rotateRight	Rotate Right
aria.rotateLeft	Rotate Left