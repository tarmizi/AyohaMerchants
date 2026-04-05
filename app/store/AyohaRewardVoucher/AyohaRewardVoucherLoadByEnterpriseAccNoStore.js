Ext.define('ianMizi.store.AyohaRewardVoucher.AyohaRewardVoucherLoadByEnterpriseAccNoStore', {
});

var _DataStore_AyohaRewardVoucherLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRewardVoucher.AyohaRewardVoucherModel',
    id: '_AyohaRewardVoucherLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher/AyohaRewardVoucherLoadByEnterpriseAccNo',
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


    //autoLoad: true

});


