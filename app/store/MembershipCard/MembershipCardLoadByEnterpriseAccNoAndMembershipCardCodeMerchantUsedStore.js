Ext.define('ianMizi.store.MembershipCard.MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsedStore', {

});




var _DataStore_MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsedStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MembershipCard.MembershipCardMerchantUsedModel',
    id: '_MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsedStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsed',
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