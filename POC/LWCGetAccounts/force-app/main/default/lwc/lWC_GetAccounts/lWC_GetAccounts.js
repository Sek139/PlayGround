import { LightningElement,wire, track } from 'lwc';
import listAccountFromLWC from '@salesforce/apex/SM001_AccountManagement.listAccountFromLWC';

const columns = [
    { label: 'id', fieldName: 'Id', type: 'text' },
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'AccountNumber', fieldName: 'AccountNumber', type: 'text'},
    { label: 'Type', fieldName: 'Type', type: 'text' },

];

export default class LWC_GetAccounts extends LightningElement {
    @wire(listAccountFromLWC) Accounts;
    @track columns = columns;
}