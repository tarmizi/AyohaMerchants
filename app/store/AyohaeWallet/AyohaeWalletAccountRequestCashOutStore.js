Ext.define("ianMizi.store.AyohaeWallet.AyohaeWalletAccountRequestCashOutStore", {
});




var _DataStore_AyohaeWalletAccountRequestCashOutStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Enterprises.EnterprisesModel',
    id: '_AyohaeWalletAccountRequestCashOutStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesRequestCashOutLoadByEnterpriseAccNo',
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
