Ext.define('ianMizi.store.AyohaNotificationMaster.AyohaNotificationMasterPNDashboardStore', {
    //extend: 'Ext.data.Store',
    ////  alias: 'store.ResponderAlertGetByAcc',
    //config: {
    //    model: 'ianMizi.model.AyohaNotificationMaster.AyohaNotificationMasterPNDashboardModel',
    //    autoLoad: false,

    //    proxy: {

    //        type: 'ajax',
    //        //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //        //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //        url: GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterPNDashboard',
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


var _DataStore_AyohaNotificationMasterPNDashboardStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaNotificationMaster.AyohaNotificationMasterPNDashboardModel',
    id: '_AyohaNotificationMasterPNDashboardStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterPNDashboard',
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