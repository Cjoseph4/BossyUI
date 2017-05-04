import {Component} from '@angular/core';
import {ConfigService} from './config.service';
import {BossyCalendarConfig} from '../../dist/config/calendar';
import {BossyCalendar} from '../../dist/components/calendar';
import {BossyFormInputConfig} from '../../dist/config/form-input';
import {BossyFormInput} from '../../dist/components/form-input';
import {BossyFormConfig} from '../../dist/config/form';
import {BossyForm} from '../../dist/components/form';
import {BossyFormLabelConfig} from '../../dist/config/form-label';
import {BossyFormRadio} from '../../dist/components/form-radio';
import {BossyFormRadioConfig} from '../../dist/config/form-radio';
import {BossyDropdown} from '../../dist/components/dropdown';
import {BossyDropdownConfig} from '../../dist/config/dropdown';
import {BossyDropdownMenuItem} from '../../dist/components/dropdown-menu';
import {BossyDropdownMenuItemConfig} from '../../dist/config/dropdown-menu';
import {BossyFormSelectMenu} from '../../dist/components/form-selectmenu';
import {BossyFormSelectMenuConfig} from '../../dist/config/form-selectmenu';
import {BossyFormTextarea} from '../../dist/components/bossy-form-textarea';
import {BossyFormTextareaConfig} from '../../dist/config/bossy-form-textarea';

//declare const Components: Array<BossyFormInputConfig>;
declare const module: any;

@Component({
	moduleId: module.id,
	selector: 'sandbox-app',
	templateUrl: '../templates/app.component.html',
	providers: [ConfigService]
})
export class AppComponent {
	//components: Array<any> = Components;
	bossyCalendar = BossyCalendar;
	bossyForm = BossyForm;
	bossyFormRadio = BossyFormRadio;
	bossyDropdown = BossyDropdown;
	bossyDropdownMenuItem = BossyDropdownMenuItem;
	bossyFormInput = BossyFormInput;
	bossyFormSelectMenu = BossyFormSelectMenu;
  	bossyFormTextarea = BossyFormTextarea;

	constructor(private configService: ConfigService) {
	}

	ngOnInit() {
		const calendarConfig = new BossyCalendarConfig();
		const formInput1 = {
				name: 'textInput',
				type: 'text',
				value: 'test value for text',
				label: new BossyFormLabelConfig('text label test', true, false, false, false)
			},
			formInput2 = {
				name: 'textareaInput',
				type: 'textarea',
				value: 'test value for textarea',
				rows: 5,
				cols: 10
			},
			formInput3 = {
				name: 'emailInput',
				type: 'email',
				value: 'test value for email'
			},
			// Thing that seems to serve no apparent purpose other than to indicate that it is possible to create this.
			formInput4 = {
				name: 'Input',
				type: 'text'
			},
			formInput5 = {
				name: 'selectmenu',
				type: 'selectmenu',
				selectmenu: new BossyFormSelectMenuConfig({title: 'Vegetables',
					items:
					[
						{value : 'carrot'},
						{value : 'celery', isDisabled : true},
						{value : 'potato'}
					]
				})
			},
			formInput6 = {
				name: 'radio',
				type: 'radio',
				label: new BossyFormLabelConfig('Test label for radio button')
				radio: new BossyFormRadioConfig({
					componentId: 'myRadio',
					items: [
						{value: 'Option 1'},
						{value: 'Option 2'},
						{value: 'Option 3', isDisabled: true}
					]
				})
			},
     	textareaInput1 = {
				name: 'textareaInput',
				type: 'textarea',
				label: 'Comments',
				rows: 5,
				placeholder: 'Put your comment here'
			};

		const formConfig = new BossyFormConfig(
			[
				new BossyFormInputConfig(formInput1),
				new BossyFormInputConfig(formInput2),
				new BossyFormInputConfig(formInput3),
				new BossyFormInputConfig(formInput5),
				new BossyFormInputConfig(formInput6)
			],
		);

		// Radio component independent of form
		const bossyFormRadioConfig = new BossyFormRadioConfig({
			componentId: 'Pick Star Wars',
			items: [
				{value: 'The Neon Demon', isDisabled: true},
				{value: 'Star Wars Episode VI: Return of the Jedi', isDisabled: false},
				{value: 'Silence of the Lambs', isDisabled: true},
				{value: 'Twilight', isDisabled: true}
			]}
		);
		const formInputConfig = new BossyFormInputConfig(formInput4);
		const dropdownConfig = new BossyDropdownConfig('Dropdown Menu', 'button',
			[
				new BossyDropdownMenuItemConfig('button', 'Item 1', '#', false),
				new BossyDropdownMenuItemConfig('button', 'Item 2'),
				new BossyDropdownMenuItemConfig('button', 'Item 3')
			],
			false, 'large', undefined, false, 'primary');

		const selectMenuConfig = new BossyFormSelectMenuConfig( {title: 'State',
			items:
			[
				{value : 'California'},
				{value : 'Nevada', isDisabled : true},
				{value : 'Oregon'}
			]}
		);
   		const bossyFormTextareaConfig = new BossyFormTextareaConfig(textareaInput1);

		this.configService.setConfig('calendarConfig', calendarConfig);
		this.configService.setConfig('formConfig', formConfig);
		this.configService.setConfig('FormInputConfig', formInputConfig);
		this.configService.setConfig('bossyFormRadioConfig', bossyFormRadioConfig);
		this.configService.setConfig('dropdownConfig', dropdownConfig);
		this.configService.setConfig('selectMenuConfig', selectMenuConfig);
		this.configService.setConfig('bossyFormTextareaConfig', bossyFormTextareaConfig);
	}
}
