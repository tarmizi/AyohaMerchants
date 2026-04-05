Ext.define('ianMizi.store.Memberships.MembershipsLoadByEnterpriseAccNoSearchMembershipStore', {  
});


var _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Memberships.MembershipsSearchModel',
    id: '_MembershipsLoadByEnterpriseAccNoSearchMembershipStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsLoadByEnterpriseAccNoSearchMembership',
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