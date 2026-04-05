Ext.define('ianMizi.store.Memberships.MembershipsLoadByBirthDayStore', {  
});




var _DataStore_MembershipsLoadByBirthDayStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Memberships.MembershipsBirthDayModel',
    id: '_MembershipsLoadByBirthDayStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsLoadByBirthDay',
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