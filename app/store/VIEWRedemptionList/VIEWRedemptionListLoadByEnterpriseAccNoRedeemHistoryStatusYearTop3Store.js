Ext.define('ianMizi.store.VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store', {
});

var _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.VIEWRedemptionList.VIEWRedemptionListModel',
    id: '_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3StoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3',
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