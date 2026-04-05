Ext.define('ianMizi.store.VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore', {
});

var _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.VIEWRedemptionList.VIEWRedemptionListModel',
    id: '_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYear',
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