Ext.define('ianMizi.store.MasterMemberships.MasterMembershipsLoadByEnterpriseAccNoStore', {
    //extend: 'Ext.data.Store',
    ////  alias: 'store.ResponderAlertGetByAcc',
    //config: {
    //    model: 'ianMizi.model.MasterMemberships.MasterMembershipsModel',
    //    autoLoad: false,

    //    proxy: {

    //        type: 'ajax',
    //        //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //        //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //        url: GetAPIurl() + '/MasterMemberships/MasterMembershipsLoadByEnterpriseAccNo',
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




var _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MasterMemberships.MasterMembershipsModel',
    id: '_MasterMembershipsLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MasterMemberships/MasterMembershipsLoadByEnterpriseAccNo',
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
  //  sorters: [{ property: 'Latest_ActivityDate_DateOnly', direction: 'desc' }],
    


    //autoLoad: true

});