Ext.define('ianMizi.store.VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore', {
});

var _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.VIEWRedemptionList.VIEWRedemptionListModel',
    id: '_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatus',
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