
Ext.define('ianMizi.store.AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore', {
});

var _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreOrder.AyohaStoreOrderModel',
    id: '_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNo_Merchant',
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