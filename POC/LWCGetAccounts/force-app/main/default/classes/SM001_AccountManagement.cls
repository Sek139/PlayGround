public with sharing class SM001_AccountManagement {
    @AuraEnabled(cacheable=true)
    public static List<Account> listAccountFromLWC() {
        return [SELECT Id, Name,AccountNumber, Type FROM Account ];

    }
}
