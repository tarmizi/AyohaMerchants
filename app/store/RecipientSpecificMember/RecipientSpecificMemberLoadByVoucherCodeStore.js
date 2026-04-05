Ext.define('ianMizi.store.RecipientSpecificMember.RecipientSpecificMemberLoadByVoucherCodeStore', {
});

var _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.RecipientSpecificMember.RecipientSpecificMemberModel',
    id: '_RecipientSpecificMemberLoadByVoucherCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberLoadByVoucherCode',
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