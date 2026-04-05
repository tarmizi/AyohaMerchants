Ext.define('ianMizi.store.Memberships.MembershipsLoadByEnterpriseAccNoApprovalListStore', {  
});


var _DataStore_MembershipsLoadByEnterpriseAccNoApprovalListStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MasterMemberships.MasterMembershipsModel',
    id: '_MembershipsLoadByEnterpriseAccNoApprovalListStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsLoadByEnterpriseAccNoApprovalList',
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
  //  sorters: [{ property: 'Latest_ActivityDate_DateOnly', direction: 'desc' }],
    


    //autoLoad: true

});