Ext.define('ianMizi.store.AyohaNotification.AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore', {
 });


 var _DataStore_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaNotification.AyohaNotificationHistoryModel',
    id: '_AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNo',
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



});