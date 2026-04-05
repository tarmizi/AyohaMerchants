Ext.define('ianMizi.store.AyohaNotification.AyohaNotificationLoadByEnterpriseAccNoStore', {
});


var _DataStore_AyohaNotificationLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

   model: 'ianMizi.model.AyohaNotification.AyohaNotificationHistoryModel',
   id: '_AyohaNotificationLoadByEnterpriseAccNoStoreID',
   proxy: {
       type: 'ajax',
       url: GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadByEnterpriseAccNo',
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