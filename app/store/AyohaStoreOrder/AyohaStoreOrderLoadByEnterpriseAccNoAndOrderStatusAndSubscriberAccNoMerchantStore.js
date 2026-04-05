
Ext.define('ianMizi.store.AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore', {
});

var _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreOrder.AyohaStoreOrderModel',
    id: '_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchant',
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

   groupDir: "DESC",
    grouper: {
        groupFn: function (record) {
            
           
            return '<div style="color:white;text-align: left;font-size:15px;width:100%;margin:0px 0px 0px 10px;">' + record.get('CreatedDate_MonthYear') + '</div>'
        },
       sortProperty: 'Month'
    }

    //autoLoad: true

});