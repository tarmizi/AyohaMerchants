Ext.define('ianMizi.store.Enterprises.EnterprisesLoadByEnterpriseHQAccNoStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.Enterprises.EnterprisesModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseHQAccNo',
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



var _DataStore_EnterprisesLoadByEnterpriseHQAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Enterprises.EnterprisesModel',
    id: '_EnterprisesLoadByEnterpriseHQAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseHQAccNo',
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



var _DataStore_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Enterprises.AyohaMerchantPageMediaHeaderModel',
    id: '_AyohaMerchantPageMediaHeaderloadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/AyohaMerchantPageMediaHeaderloadByEnterpriseAccNo',
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
