
Ext.define('ianMizi.store.AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesStore', {
});

var _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaeWalletTransaction.AyohaeWalletTransactionModel',
    id: '_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOut_Enterprises',
        actionMethods: {
            read: 'GET'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },



    //autoLoad: true

});