Ext.define('ianMizi.store.AyohaNotificationMaster.AyohaNotificationMasterLoadByEnterpriseAccNoStore', {
    //extend: 'Ext.data.Store',
    ////  alias: 'store.ResponderAlertGetByAcc',
    //config: {
    //    model: 'ianMizi.model.AyohaNotificationMaster.AyohaNotificationMasterModel',
    //    autoLoad: false,

    //    proxy: {

    //        type: 'ajax',
    //        //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //        //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //        url: GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterLoadByEnterpriseAccNo',
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



var _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaNotificationMaster.AyohaNotificationMasterModel',
    id: '_AyohaNotificationMasterLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaNotificationMaster/AyohaNotificationMasterLoadByEnterpriseAccNo',
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