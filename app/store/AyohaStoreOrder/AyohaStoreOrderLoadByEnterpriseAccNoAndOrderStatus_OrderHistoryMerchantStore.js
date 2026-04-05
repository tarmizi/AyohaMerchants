
Ext.define('ianMizi.store.AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore', {
});

var _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreOrder.AyohaStoreOrderModel',
    id: '_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchant',
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