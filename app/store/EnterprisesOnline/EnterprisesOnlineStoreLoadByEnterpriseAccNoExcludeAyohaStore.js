
Ext.define('ianMizi.store.EnterprisesOnline.EnterprisesOnlineStoreLoadByEnterpriseAccNoExcludeAyohaStore', {
});

var _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoExcludeAyohaStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.EnterprisesOnline.EnterprisesOnlineStoreModel',
    id: '_EnterprisesOnlineStoreLoadByEnterpriseAccNoExcludeAyohaStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/EnterprisesOnlineStore/EnterprisesOnlineStoreLoadByEnterpriseAccNoExcludeAyohaStore',
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




var _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.EnterprisesOnline.EnterprisesOnlineStoreModel',
    id: '_EnterprisesOnlineStoreLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl_Mobile() + '/EnterprisesOnlineStore/EnterprisesOnlineStoreLoadByEnterpriseAccNo',
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