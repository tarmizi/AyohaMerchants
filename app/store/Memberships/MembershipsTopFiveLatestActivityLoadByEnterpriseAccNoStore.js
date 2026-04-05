Ext.define('ianMizi.store.Memberships.MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore', {  
});


var _DataStore_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Memberships.MembershipsTopFiveLatestActivityModel',
    id: '_MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsTopFiveLatestActivityLoadByEnterpriseAccNo',
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