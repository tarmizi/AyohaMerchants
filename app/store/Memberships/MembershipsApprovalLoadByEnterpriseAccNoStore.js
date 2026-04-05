Ext.define('ianMizi.store.Memberships.MembershipsApprovalLoadByEnterpriseAccNoStore', {  
});




var _DataStore_MembershipsApprovalLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {
    model: 'ianMizi.model.Memberships.MembershipsMemberDetailsModel',
    id: '_MembershipsApprovalLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsApprovalLoadByEnterpriseAccNo',
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