Ext.define('ianMizi.store.AyohaUserProfile.AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore', {
});

var _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaUserProfile.AyohaUserProfileModel',
    id: '_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNo',
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