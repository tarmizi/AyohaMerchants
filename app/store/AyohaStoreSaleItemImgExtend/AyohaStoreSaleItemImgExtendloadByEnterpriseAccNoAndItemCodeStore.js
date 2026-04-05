
Ext.define('ianMizi.store.AyohaStoreSaleItemImgExtend.AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore', {
});

var _DataStore_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreSaleItemImgExtend.AyohaStoreSaleItemImgExtendModel',
    id: '_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreSaleItemImgExtend/AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCode',
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