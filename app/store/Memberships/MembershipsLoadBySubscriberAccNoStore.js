Ext.define('ianMizi.store.Memberships.MembershipsLoadBySubscriberAccNoStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.Memberships.MembershipsModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNo',
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


var _DataStore_MembershipsLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Memberships.MembershipsMemberDetailsModel',
    id: '_MembershipsMemberDetailsLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
      url: GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNoAndEnterpriseAccNo',
     // url: GetAPIurl() + '/Memberships/MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPage',
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

var _DataStore_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.Memberships.MembershipsPageDetailsModel',
    id: '_MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPageStoreID',
    proxy: {
        type: 'ajax',
      //  url: GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNoAndEnterpriseAccNo',
      url: GetAPIurl() + '/Memberships/MembershipsLoadByEnterpriseAccNoSubscriberAccNoMembershipDetailPage',
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