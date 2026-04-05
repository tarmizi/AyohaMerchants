Ext.define('ianMizi.store.DiscountCampaign.DiscountCampaignLoadByEnterpriseAccNoStore', {
});

var _DataStore_DiscountCampaignLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.DiscountCampaign.DiscountCampaignModel',
    id: '_DiscountCampaignLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DiscountCampaign/DiscountCampaignLoadByEnterpriseAccNo',
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



    //autoLoad: true

});