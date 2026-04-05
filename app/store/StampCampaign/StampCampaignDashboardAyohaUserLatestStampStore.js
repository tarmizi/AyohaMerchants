Ext.define('ianMizi.store.StampCampaign.StampCampaignDashboardAyohaUserLatestStampStore', {
  
});




var _DataStore_StampCampaignDashboardAyohaUserLatestStampStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.StampCampaign.StampCampaignModel',
    id: '_StampCampaignDashboardAyohaUserLatestStampStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/StampCampaign/StampCampaignDashboardAyohaUserLatestStamp',
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