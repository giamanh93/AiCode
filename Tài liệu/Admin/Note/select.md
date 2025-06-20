Select
A dropdown menu for displaying choices.
Import
Source
Docs
When To Use#
A dropdown menu for displaying choices - an elegant alternative to the native <select> element.
Utilizing Radio is recommended when there are fewer total options (less than 5).
You probably need AutoComplete if you're looking for an input box that can be typed or selected.
Examples
Basic Usage
Basic Usage.

multiple selection
Multiple selection, selecting from existing items, max 3 option will display at the same time by nzMaxTagCount.

Tag Mode
Tags
Select with tags, transform input to tag (scroll the menu)

coordinate
Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.

Using the Cascader component is strongly recommended instead as it is more flexible and capable.

The selected option's age is 22


Get option object of selected item
The value of ngModel comes from the nzValue of nz-option, when the nzValue of nz-option is an object, the ngModel will be an object too, the usage of compareWith is the same as SelectControlValueAccessor.

Select users
Search and Select Users
A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.

Inserted are removed
Hide Already Selected
Hide already selected options in the dropdown via nzHide.

Select users 
Load Data on Scroll
Load data on scroll.

Large amounts of data
With the help of virtual scroll, select component can deal with Large amounts of data.

Select OS 


Select OS
Custom Top Render
Custom the content of nz-select via nzCustomTemplate.



Status
Add status to Select with nzStatus, which could be error or warning.

2 / 3
Max Count
You can set the nzMaxMultipleCount prop to control the max number of items can be selected. When the limit is exceeded, the options will become disabled.

Select a person 
Select with search field
Search the options while expanded.

LargeDefaultSmall







Sizes
The height of the input field for the select defaults to 32px. If nzSize is set to large, the height will be 40px, and if set to small, 24px.

Option Group
Using nz-option-group to group the options.

input search text 
Search Box
Search with remote data.

automatic tokenization
Automatic tokenization
Try to copy Lucy,Jack to the input. Only available in tags and multiple mode.

custom dropdown render 
Custom dropdown
Customize the dropdown menu via nzDropdownRender.

Select OS 
Custom Option Template
Custom the content of nz-option via nzCustomContent.



Default Value
Display a default value that not in the option list with nzHide in nz-option

Bordered-less
Bordered-less style component.

Input Options
Pass all options via nzOptions

topLefttopRightbottomLeftbottomRight

Placement
You can manually specify the position of the popup via placement.

API#
<nz-select>
  <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
</nz-select>
nz-selectcomponent#
Property	Description	Type	Default	Global Config
[nzId]	input id attribute inside the component	string	-	
[ngModel]	Current selected nz-option value, double binding.	any | any[]	-	
[compareWith]	Same as SelectControlValueAccessor	(o1: any, o2: any) => boolean	(o1: any, o2: any) => o1===o2	
[nzAutoClearSearchValue]	Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags.	boolean	true	
[nzAllowClear]	Show clear button.	boolean	false	
[nzBackdrop]	whether or not the overlay should attach a backdrop	boolean	false	
[nzBorderless]	whether has borderless style	boolean	false	✅
[nzOpen]	dropdown expand state, double binding	boolean	false	
[nzAutoFocus]	Get focus by default	boolean	false	
[nzDisabled]	Whether disabled select	boolean	false	
[nzDropdownClassName]	className of dropdown menu	string | string[]	-	
[nzDropdownMatchSelectWidth]	Whether dropdown's width is same width than select.	boolean	true	
[nzDropdownStyle]	style of dropdown menu	object	-	
[nzCustomTemplate]	The custom template of select	TemplateRef<{ $implicit: NzOptionComponent }>	-	
[nzServerSearch]	nz-option will not be filtered when set to true	boolean	false	
[nzFilterOption]	Filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.	(input?: string, option?: NzOptionComponent) => boolean;	-	
[nzMaxMultipleCount]	Max selected option can be selected	number	Infinity	
[nzMode]	Set mode of Select	'multiple' | 'tags' | 'default'	'default'	
[nzNotFoundContent]	Specify content to show when no result matches..	string | TemplateRef<void>	'Not Found'	
[nzPlaceHolder]	Placeholder of select	string	-	
[nzShowArrow]	Whether to show the drop-down arrow	boolean	true(for single select), false(for multiple select)	
[nzShowSearch]	Whether show search input in single mode.	boolean	false	
[nzSize]	Size of Select input	'large' | 'small' | 'default'	'default'	
[nzStatus]	Set validation status	'error' | 'warning'	-	
[nzSuffixIcon]	The custom suffix icon	TemplateRef<any> | string	-	✅
[nzRemoveIcon]	The custom remove icon	TemplateRef<any>	-	
[nzClearIcon]	The custom clear icon	TemplateRef<any>	-	
[nzMenuItemSelectedIcon]	The custom menuItemSelected icon	TemplateRef<any>	-	
[nzTokenSeparators]	Separator used to tokenize on tag/multiple mode	string[]	[]	
[nzLoading]	indicate loading state	boolean	false	
[nzMaxTagCount]	Max tag count to show	number	-	
[nzOptions]	use nzOptions or nz-option to pass options to the select	Array<{ label: string | number | TemplateRef<any>; value: any; key?: string | number; disabled?: boolean; hide?: boolean; groupLabel?: string | TemplateRef<any>;}>	-	
[nzMaxTagPlaceholder]	Placeholder for not showing tags	TemplateRef<{ $implicit: any[] }>	-	
[nzOptionHeightPx]	Each option height inside the dropdown	number	32	✅
[nzOptionOverflowSize]	Max option size inside the dropdown, overflow when exceed the size	number	8	
[nzSelectOnTab]	Allows to select an item with TAB key	boolean	false	
(ngModelChange)	Current selected nz-option value change callback.	EventEmitter<any[]>	-	
(nzOpenChange)	dropdown expand change callback	EventEmitter<boolean>	false	
(nzScrollToBottom)	Called when dropdown scrolls to bottom	EventEmitter<any>	-	
(nzOnSearch)	Callback function that is fired when input changed.	EventEmitter<string>	-	
(nzFocus)	focus callback	EventEmitter<any>	-	
(nzBlur)	blur callback	EventEmitter<any>	-	
nz-optioncomponent#
Property	Description	Type	Default
[nzDisabled]	Disable this option	boolean	false
[nzTitle]	Native title hint on this option	string | number	-
[nzLabel]	The text show in nz-select and dropdown menu	string | number	-
[nzValue]	The value passed to ngModel of nz-select	any	-
[nzKey]	Should be passed when typeof nzValue - Object. Key will be used for performance optimizations	string | number	-
[nzHide]	Whether hide the option in the option list	boolean	false
[nzCustomContent]	Whether custom nz-option content in drodown menu, the ng-content in nz-option will replace nzLabel when it was set to true	boolean	false
nz-option-groupcomponent#
Property	Description	Type	Default
[nzLabel]	Group label	string | number | TemplateRef<void>	-
Methods#
nz-selectcomponent#
Name	Description
blur()	Remove focus
focus()	Get focus

## Note: Phương án Layout Sidebar Collapsible (Sidebar thu gọn hiện đại)

**Mô tả:**
- Sidebar có thể thu gọn/mở rộng, giúp tiết kiệm không gian màn hình.
- Sidebar chứa các icon đại diện cho các module (Dashboard, Khách hàng, Sản phẩm, Đơn hàng, Báo cáo, Cài đặt).
- Khi thu gọn chỉ hiển thị icon, khi mở rộng hiển thị cả tên module.
- Header phía trên chứa logo, tên hệ thống, tìm kiếm, user menu, notification.
- Footer phía dưới hiển thị thông tin bản quyền, link, version.
- Phù hợp với giao diện hiện đại, tối ưu cho desktop và responsive tốt trên mobile.

**Ưu điểm:**
- Tiết kiệm không gian, hiện đại, dễ sử dụng.
- Dễ dàng mở rộng thêm module mới.
- Trải nghiệm người dùng tốt trên nhiều thiết bị.

**Nhược điểm:**
- Cần thêm animation và logic cho việc thu gọn/mở rộng.
- Người dùng mới có thể cần thời gian làm quen với icon.

**Wireframe tổng quan:**
```
┌─────────────────────────────────────────────────────────┐
│                    HEADER                               │
│  [Menu Toggle] [Logo] [Search] [User] [Notifications]   │
├─────────────────────────────────────────────────────────┤
│ SIDEBAR │                    MAIN CONTENT              │
│ (Collapsed)│                                         │
│ [≡] [🏠]   │                                         │
│ [≡] [👥]   │                                         │
│ [≡] [📦]   │                                         │
│ [≡] [📋]   │                                         │
│ [≡] [📊]   │                                         │
│ [≡] [⚙️]   │                                         │
├─────────┴─────────────────────────────────────────────┤
│                    FOOTER                             │
│  [Copyright] [Links] [Version]                        │
└─────────────────────────────────────────────────────────┘
```