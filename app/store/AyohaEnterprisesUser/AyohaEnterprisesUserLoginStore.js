Ext.define('ianMizi.store.AyohaEnterprisesUser.AyohaEnterprisesUserLoginStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.AyohaEnterprisesUser.AyohaEnterprisesUserModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaEnterprisesUser/AyohaEnterprisesUserLogin',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});




var _DataStore_AyohaEnterprisesUserLoginStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaEnterprisesUser.AyohaEnterprisesUserModel',
    id: '_AyohaEnterprisesUserLoginStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaEnterprisesUser/AyohaEnterprisesUserLogin',
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

