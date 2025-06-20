Custom Icons
PrimeNG components can be used with any icon library using the templating features.

Material
Material icons is the official icon library based on Google Material Design.


<p-select>
    <ng-template #dropdownicon>
        <span class="material-icons">arrow_drop_down</span>
    </ng-template>
</p-select>

Font Awesome
Font Awesome is a popular icon library with a wide range of icons.


<p-select>
    <ng-template #dropdownicon>
        <i class="fa-light fa-chevron-down"></i>
    </ng-template>
</p-select>

SVG
Inline SVGs are embedded inside the dom.


<p-select>
    <ng-template #dropdownicon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g id="chevron-down">
                <path d="M12,15.25a.74.74,0,0,1-.53-.22l-5-5A.75.75,0,0,1,7.53,9L12,13.44,16.47,9A.75.75,0,0,1,17.53,10l-5,5A.74.74,0,0,1,12,15.25Z"/>
            </g>
        </svg>
    </ng-template>
</p-select>

Image
Any type of image can be used as an icon.



<p-select>
    <ng-template #dropdownicon>
        <img alt="dropdown icon" src="/assets/icons/arrow_down.png">
    </ng-template>
</p-select>
