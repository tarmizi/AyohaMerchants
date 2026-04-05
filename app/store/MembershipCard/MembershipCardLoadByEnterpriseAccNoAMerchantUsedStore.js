Ext.define('ianMizi.store.MembershipCard.MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore', {

});




var _DataStore_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MembershipCard.MembershipCardMerchantUsedModel',
    id: '_MembershipCardLoadByEnterpriseAccNoAMerchantUsedStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoAMerchantUsed',
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


var _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MembershipCard.MembershipCardMerchantUsedModel',
    id: '_DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersionStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMembershipCardCodeMerchantVersion',
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