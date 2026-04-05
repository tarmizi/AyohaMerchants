Ext.define('ianMizi.store.VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoStore', {
});

var _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.VIEWRedemptionList.VIEWRedemptionListModel',
    id: '_VIEWRedemptionListLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNo',
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