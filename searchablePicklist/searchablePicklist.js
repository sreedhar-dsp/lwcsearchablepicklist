import {LightningElement,track,wire,api} from "lwc";
export default class SearchablePicklist extends LightningElement {
    @api options;
    @api label;
    @api disabled;
    @api searchable;
    @api ismultiSelect;
    @api required = false;
    @api selectedValue;
    @api selectedKey;
    @api placeholder = 'Search an option..'
    isDropdownExpanded = false;
    searchKey='';
    showMessage = false;
    @track filteredOptions=[];
    connectedCallback(){
        this.filteredOptions = this.options;
        console.log(this.options)
    }
    handleClick(){
        console.log("onclick");
        this.isDropdownExpanded = true;
    }
    handlefocusout(){
        console.log("onfocusout");
        setTimeout(() => {
            this.filteredOptions = this.options;  
            this.isDropdownExpanded = false;  
            this.searchKey = '';
            this.showMessage = false;
           }, 300); 
    }
    handleOptionSelect(event){
        console.log('onptionselect');
        this.selectedValue = event.target.dataset.name;
        this.selectedKey = event.target.dataset.key;
        this.searchKey = '';
        this.isDropdownExpanded = false;
        this.notifySelection();
    }
    removeSelectedOption(event){
        this.selectedValue = null;
        this.selectedKey = null;
        this.notifySelection();
    }
    handleSearch(event){
        this.searchKey = event.target.value;
        this.showMessage = false;
        if(this.searchKey){
            this.filteredOptions = this.options.filter(option=>option.value.toLowerCase().includes(this.searchKey.toLowerCase()));
            if(this.filteredOptions.length==0){
                this.showMessage = true;
            }
        }else{
            this.filteredOptions = this.options;
        }
    }
    notifySelection(){  
        const evnt = new CustomEvent('optionSelection', {  
          detail: { key: this.selectedKey, value: this.selectedValue }  
         });  
        this.dispatchEvent(evnt);  
    } 
}