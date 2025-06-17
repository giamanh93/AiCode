Tailwind CSS
Integration between PrimeNG and Tailwind CSS.

Overview
Tailwind CSS is a popular CSS framework based on a utility-first design. The core provides flexible CSS classes with predefined CSS rules to build your own UI elements. For example, instead of an opinionated btn class as in Bootstrap, Tailwind offers primitive classes like bg-blue-500, rounded and p-4 to apply a button.

Tailwind is an outstanding CSS library, however it lacks a true comprehensive UI suite when combined with Angular, this is where PrimeNG comes in by providing a wide range of highly accessible and feature rich UI component library. The core of PrimeNG does not depend on Tailwind CSS, instead we provide the necessary integration points such as the primeui tailwind plugin.

Plugin
The tailwindcss-primeui is an official plugin by PrimeTek to provide first class integration between a Prime UI library like PrimeNG and Tailwind CSS. It is designed to work both in styled and unstyled modes. In styled mode, for instance the semantic colors such as primary and surfaces are provided as Tailwind utilities e.g. bg-primary, text-surface-500, text-muted-color.

If you haven't already done so, start by integrating Tailwind into your project. Detailed steps for this process can be found in the Tailwind documentation. After successfully installing Tailwind, proceed with the installation of the PrimeUI plugin. This single npm package comes with two libraries: the CSS version is compatible with Tailwind v4, while the JS version is designed for Tailwind v3.


npm i tailwindcss-primeui

Tailwind v4
In the CSS file that contains the tailwindcss import, add the tailwindcss-primeui import as well.


@import "tailwindcss";
@plugin "tailwindcss-primeui";

Tailwind v3
Use the plugins option in your Tailwind config file to configure the plugin.


// tailwind.config.js
import PrimeUI from 'tailwindcss-primeui';

export default {
    // ...
    plugins: [PrimeUI]
};

Extensions
The plugin extends the default configuration with a new set of utilities whose values are derived from the PrimeNG theme in use. All variants and breakpoints are supported e.g. dark:sm:hover:bg-primary.

Color Palette
Class	Property
primary-[50-950]	Primary color palette.
surface-[0-950]	Surface color palette.
primary	Default primary color.
primary-contrast	Default primary contrast color.
primary-emphasis	Default primary emphasis color.
border-surface	Default primary emphasis color.
bg-emphasis	Emphasis background e.g. hovered element.
bg-highlight	Highlight background.
bg-highlight-emphasis	Highlight background with emphasis.
rounded-border	Border radius.
text-color	Text color with emphasis.
text-color-emphasis	Default primary emphasis color.
text-muted-color	Secondary text color.
text-muted-color-emphasis	Secondary text color with emphasis.
Dark Mode
In styled mode, PrimeNG uses the system as the default darkModeSelector in theme configuration. If you have a dark mode switch in your application, ensure that darkModeSelector is aligned with the Tailwind dark variant for seamless integration. Note that, this particular configuration isn't required if you're utilizing the default system color scheme.

Suppose that, the darkModeSelector is set as my-app-dark in PrimeNG.


providePrimeNG({
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark'
        }
    }
})

Tailwind v4
Add a custom variant for dark with a custom selector.


@import "tailwindcss";
@plugin "tailwindcss-primeui";
@custom-variant dark (&:where(.my-app-dark, .my-app-dark *));     //dark mode configuration

Tailwind v3
Use the plugins option in your Tailwind config file to configure the plugin.


// tailwind.config.js
import PrimeUI from 'tailwindcss-primeui';

export default {
    darkMode: ['selector', '[class~="my-app-dark"]'],           //dark mode configuration
    plugins: [PrimeUI]
};

Override
Tailwind utilities may not be able to override the default styling of components due to css specificity, there are two possible solutions; Import and CSS Layer.

Important
Use the ! as a prefix to enforce the styling. This is not the recommend approach, and should be used as last resort to avoid adding unnecessary style classes to your bundle.

Tailwind v4

<input pInputText placeholder="Overriden" class="p-8!" />

Tailwind v3

<input pInputText placeholder="Overriden" class="!p-8" />

CSS Layer
CSS Layer provides control over the css specificity so that Tailwind utilities can safely override components.

Tailwind v4
Ensure primeng layer is after theme and base, but before the other Tailwind layers such as utilities.


providePrimeNG({
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primeng',
                order: 'theme, base, primeng'
            }
        }
    }
})

No change in the CSS configuration is required.


@import "tailwindcss";
@plugin "tailwindcss-primeui";

Tailwind v3
The primeng layer should be between base and utilities.


providePrimeNG({
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primeng',
                order: 'tailwind-base, primeng, tailwind-utilities'
            }
        }
    }
})

Tailwind v3 does not use native layer so needs to be defined with CSS.


@layer tailwind-base, primeng, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}

Samples
Example uses cases with PrimeNG and Tailwind CSS.

Color Palette
PrimeNG color palette as utility classes.

primary
50
100
200
300
400
500
600
700
800
900
950
surface
0
50
100
200
300
400
500
600
700
800
900
950
primary
highlight
box
Form
Using Tailwind utilities for the responsive layout of a form with PrimeNG components.

Firstname
Lastname
Date
Country
Message

<div class="flex flex-col gap-6 w-full sm:w-auto">
    <div class="flex flex-col sm:flex-row sm:items-center gap-6">
        <div class="flex-auto">
            <label for="firstname" class="block font-semibold mb-2">Firstname</label>
            <input type="text" pInputText id="firstname" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="lastname" class="block font-semibold mb-2">Lastname</label>
            <input type="text" pInputText id="lastname" class="w-full" />
        </div>
    </div>
    <div class="flex flex-col sm:flex-row sm:items-center gap-6">
        <div class="flex-1">
            <label for="date" class="block font-semibold mb-2">Date</label>
            <p-datepicker inputId="date" class="w-full" />
        </div>
        <div class="flex-1">
            <label for="country" class="block font-semibold mb-2">Country</label>
            <p-select
                [options]="countries"
                [(ngModel)]="selectedCountry"
                optionLabel="name"
                placeholder="Select a Country"
                class="w-full"
            >
                <ng-template #selectedItem>
                    <div class="flex items-center gap-2" *ngIf="selectedCountry">
                        <img
                            src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                            [class]="'flag flag-' + selectedCountry.code.toLowerCase()"
                            style="width: 18px"
                        />
                        <div>{{ selectedCountry.name }}</div>
                    </div>
                </ng-template>
                <ng-template let-country #item>
                    <div class="flex items-center gap-2">
                        <img
                            src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                            [class]="'flag flag-' + country.code.toLowerCase()"
                            style="width: 18px"
                        />
                        <div>{{ country.name }}</div>
                    </div>
                </ng-template>
            </p-select>
        </div>
    </div>
    <div class="flex-auto">
        <label for="message" class="block font-semibold mb-2">Message</label>
        <textarea pTextarea id="message" class="w-full" rows="4"></textarea>
    </div>
</div>

Headless
A headless PrimeNG dialog with a custom UI.


<p-button (click)="showDialog()" icon="pi pi-user" label="Login" />
    <p-dialog maskStyleClass="backdrop-blur-sm" [(visible)]="visible" styleClass="!border-0 !bg-transparent">
        <ng-template #headless>
            <div
                class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
                style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))"
            >
                <svg
                    width="31"
                    height="33"
                    viewBox="0 0 31 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="block mx-auto"
                >
                    <path
                        d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                        fill="var(--p-primary-color)"
                    />
                    <mask id="mask0_1_52" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                        <path
                            d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z"
                            fill="var(--ground-background)"
                        />
                    </mask>
                    <g mask="url(#mask0_1_52)">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z"
                            fill="var(--p-primary-color)"
                        />
                    </g>
                    <path
                        d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z"
                        fill="var(--ground-background)"
                    />
                    <path
                        d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z"
                        fill="var(--ground-background)"
                    />
                </svg>
                <div class="inline-flex flex-col gap-2">
                    <label for="username" class="text-primary-50 font-semibold">Username</label>
                    <input pInputText id="username" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" />
                </div>
                <div class="inline-flex flex-col gap-2">
                    <label for="password" class="text-primary-50 font-semibold">Password</label>
                    <input pInputText id="password" class="!bg-white/20 !border-0 !p-4 !text-primary-50 w-80" type="password" />
                </div>
                <div class="flex items-center gap-4">
                    <p-button
                        label="Cancel"
                        (click)="closeDialog()"
                        [text]="true"
                        styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                        class="w-full"
                    />
                    <p-button
                        label="Sign-In"
                        (click)="closeDialog()"
                        [text]="true"
                        styleClass="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10"
                        class="w-full"
                    />
                </div>
            </div>
        </ng-template>
    </p-dialog>

Animations
The plugin also adds extended animation utilities that can be used with the styleclass and animateonscroll directives.


<p-select [(ngModel)]="animation" [options]="animations" placeholder="Select One" class="w-full sm:w-44" />
<div class="py-8 overflow-hidden">
   <div [ngClass]="dynamicAnimationClasses"></div>
</div>

Enter and Leave
In addition to the prebuilt animations, you may also build your own declaratively using the animate-enter and animate-leave along with the opacity, rotate, scale and translate parameters. These animations work perfectly with the AnimateOnScroll directive, visit this directive for various examples.


Animations
Class	Property
animate-enter	animation-name: enter;
--p-enter-opacity: initial;
--p-enter-scale: initial;
--p-enter-rotate: initial;
--p-enter-translate-x: initial;
--p-enter-translate-y: initial;
animate-leave	animation-name: leave;
--p-leave-opacity: initial;
--p-leave-scale: initial;
--p-leave-rotate: initial;
--p-leave-translate-x: initial;
--p-leave-translate-y: initial;
animate-leave	fadein 0.15s linear
animate-fadein	fadein 0.15s linear
animate-fadeout	fadeout 0.15s linear
animate-slidedown	slidedown 0.45s ease-in-out
animate-slideup	slideup 0.45s cubic-bezier(0, 1, 0, 1)
animate-scalein	scalein 0.15s linear
animate-fadeinleft	fadeinleft 0.15s linear
animate-fadeoutleft	fadeoutleft 0.15s linear
animate-fadeinright	fadeinright 0.15s linear
animate-fadeoutright	fadeoutright 0.15s linear
animate-fadeinup	fadeinup 0.15s linear
animate-fadeoutup	fadeoutup 0.15s linear
animate-fadeindown	fadeindown 0.15s linear
animate-fadeoutup	fadeoutup 0.15s linear
animate-width	width 0.15s linear
animate-flip	flip 0.15s linear
animate-flipup	flipup 0.15s linear
animate-flipleft	fadein 0.15s linear
animate-flipright	flipright 0.15s linear
animate-zoomin	zoomin 0.15s linear
animate-zoomindown	zoomindown 0.15s linear
animate-zoominleft	zoominleft 0.15s linear
animate-zoominright	zoominright 0.15s linear
animate-zoominup	zoominup 0.15s linear
Animation Duration
Class	Property
animate-duration-0	animation-duration: 0s
animate-duration-75	animation-duration: 75ms
animate-duration-100	animation-duration: 100ms
animate-duration-200	animation-duration: 200ms
animate-duration-300	animation-duration: 300ms
animate-duration-400	animation-duration: 400ms
animate-duration-500	animation-duration: 500ms
animate-duration-700	animation-duration: 700ms
animate-duration-1000	animation-duration: 1000ms
animate-duration-2000	animation-duration: 2000ms
animate-duration-3000	animation-duration: 300ms
animate-duration-[value]	animation-duration: value
Animation Delay
Class	Property
animate-delay-none	animation-duration: 0s
animate-delay-75	animation-delay: 75ms
animate-delay-100	animation-delay: 100ms
animate-delay-150	animation-delay: 150ms
animate-delay-200	animation-delay: 200ms
animate-delay-300	animation-delay: 300ms
animate-delay-400	animation-delay: 400ms
animate-delay-500	animation-delay: 500ms
animate-delay-700	animation-delay: 700ms
animate-delay-1000	animation-delay: 1000ms
Iteration Count
Class	Property
animate-infinite	animation-iteration-count: infinite
animate-once	animation-iteration-count: 1
animate-twice	animation-iteration-count: 2
Direction
Class	Property
animate-normal	animation-direction: normal
animate-reverse	animation-direction: reverse
animate-alternate	animation-direction: alternate
animate-alternate-reverse	animation-direction: alternate-reverse
Timing Function
Class	Property
animate-ease-linear	animation-timing-function: linear
animate-ease-in	animation-timing-function: cubic-bezier(0.4, 0, 1, 1)
animate-ease-out	animation-timing-function: cubic-bezier(0, 0, 0.2, 1)
animate-ease-in-out	animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
Fill Mode
Class	Property
animate-fill-none	animation-fill-mode: normal
animate-fill-forwards	animation-fill-mode: forwards
animate-fill-backwards	animation-fill-mode: backwards
animate-fill-both	animation-fill-mode: both
Play State
Class	Property
animate-running	animation-play-state: running
animate-paused	animation-play-state: paused
Backface Visibility State
Class	Property
backface-visible	backface-visibility: visible
backface-hidden	backface-visibility: hidden
Fade In and Out
Values are derived from the Tailwind CSS opacity e.g. fade-in-50 and fade-out-20. Arbitrary values such as fade-in-[15] are also supported.

Class	Property
fade-in-{value}	--p-enter-opacity: {value}
fade-out-{value}	--p-leave-opacity: {value}
Zoom In and Out
Values are derived from the Tailwind CSS scale e.g. zoom-in-50 and zoom-out-75. Arbitrary values such as zoom-in-[0.8] are also supported.

Class	Property
zoom-in-{value}	--p-enter-scale: {value}
zoom-out-{value}	--p-leave-scale: {value}
Spin In and Out
Values are derived from the Tailwind CSS rotate e.g. spin-in-45 and spin-out-90. Arbitrary values such as spin-in-[60deg] are also supported.

Class	Property
spin-in-{value}	--p-enter-rotate: {value}
spin-out-{value}	--p-leave-rotate: {value}
Slide In and Out
Values are derived from the Tailwind CSS translate e.g. slide-in-from-t-50 and slide-out-to-l-8. Arbitrary values such as slide-in-from-b-[8px] are also supported.

Class	Property
slide-in-from-t-{value}	--p-enter-translate-y: -{value}
slide-in-from-b-{value}	--p-enter-translate-y: {value}
slide-in-from-l-{value}	--p-enter-translate-x: -{value}
slide-in-from-r-{value}	--p-enter-translate-x: {value}
slide-out-to-t-{value}	--p-leave-translate-y: -{value}
slide-out-to-b-{value}	--p-leave-translate-y: {value}
slide-out-to-l-{value}	--p-leave-translate-x: -{value}
slide-out-to-r-{value}	--p-leave-translate-x: {value}