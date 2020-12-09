import { LightningElement, track, wire } from 'lwc';

export default class Demo extends LightningElement {
	get options(){
		return	[
				{key:"lwc" , value: "lwc"},
				{key: "Aura" , value: "Aura"},
				{key: "salesforce", value: "salesforce"},
				{key: "Apex", value: "Apex"},
				{key: "VF", value: "VF"},
				{key: "JavaScript", value: "JavaScript"},
				{key: "css", value: "css"},
		];
	}
}