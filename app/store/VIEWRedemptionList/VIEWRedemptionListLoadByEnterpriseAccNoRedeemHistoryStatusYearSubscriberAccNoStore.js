Ext.define('ianMizi.store.VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore', {
});

var _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.VIEWRedemptionList.VIEWRedemptionListModel',
    id: '_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNo',
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