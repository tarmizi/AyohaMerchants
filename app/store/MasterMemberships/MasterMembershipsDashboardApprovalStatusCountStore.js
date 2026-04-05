Ext.define('ianMizi.store.MasterMemberships.MasterMembershipsDashboardApprovalStatusCountStore', {
    //extend: 'Ext.data.Store',
    ////  alias: 'store.ResponderAlertGetByAcc',
    //config: {
    //    model: 'ianMizi.model.MasterMemberships.MasterMembershipsDashboardApprovalStatusCountModel',
    //    autoLoad: false,

    //    proxy: {

    //        type: 'ajax',
    //        //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //        //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //        url: GetAPIurl() + '/MasterMemberships/MasterMembershipsDashboardApprovalStatusCount',
    //        reader: {
    //            type: 'json',
    //            rootProperty: 'results',
    //            totalProperty: 'total',
    //            successProperty: 'success',
    //            messageProperty: 'message'
    //        },



    //    }


    //}
});


var _DataStore_MasterMembershipsDashboardApprovalStatusCountStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MasterMemberships.MasterMembershipsDashboardApprovalStatusCountModel',
    id: '_MasterMembershipsDashboardApprovalStatusCountModelID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MasterMemberships/MasterMembershipsDashboardApprovalStatusCount',
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