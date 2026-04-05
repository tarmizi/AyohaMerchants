Ext.define('ianMizi.store.AyohaNotificationMasterEnterprises.AyohaNotificationMasterEnterprisesLoadByEnterpriseAccNoStore', {
  
});



var _DataStore_AyohaNotificationMasterEnterprisesLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaNotification.AyohaNotificationMasterEnterprisesModel',
    id: '_AyohaNotificationMasterEnterprisesLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaNotificationMasterEnterprises/AyohaNotificationMasterEnterprisesLoadByEnterpriseAccNo',
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



});