
Ext.define('ianMizi.store.AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore', {
});

var _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreOrder.AyohaStoreOrderModel',
    id: '_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchant',
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