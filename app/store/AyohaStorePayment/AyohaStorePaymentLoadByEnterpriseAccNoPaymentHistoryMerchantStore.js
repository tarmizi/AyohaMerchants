
Ext.define('ianMizi.store.AyohaStorePayment.AyohaStorePaymentLoadByEnterpriseAccNoPaymentHistoryMerchantStore', {
});

var _DataStore_AyohaStorePaymentLoadByEnterpriseAccNoPaymentHistoryMerchantStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStorePayment.AyohaStorePaymentModel',
    id: '_AyohaStorePaymentLoadByEnterpriseAccNoPaymentHistoryMerchantStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStorePayment/AyohaStorePaymentLoadByEnterpriseAccNoPaymentHistoryMerchant',
        actionMethods: {
            read: 'POST'
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