
Ext.define('ianMizi.store.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPageStore', {
});

var _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherReceipients',
    id: '__DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPageStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPage',
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


    groupDir: "DESC",
    grouper: {
        groupFn: function (record) {
            // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>',
            // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseNameUpperCase') + '<div style="display:none;">' + record.get('CampaignBatch') + '</div></th><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:26px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Campaign:' + record.get('StampCampaignNameLowerCase') + '-Batch(' + record.get('Batch') + ')</td></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Expired:' + record.get('EndDate') + '</td></tr></thead></table>'
            // return '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="border-color:#000000;border-style:none;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="border-color:#000000;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="border-color:#000000;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>'
           
           var status=record.get('EntitledVoucherEndDate');
           if(status !="19/2/1983"){
          //  return '<div style="color:white;text-align: left;font-size:15px;width:100%;">Voucher Name:' + record.get('VoucherName') + ' | Voucher Amount:' + record.get('VoucherAmount') + ' | Day Left:' + record.get('DayLeft') + '</div>';
            return  '<div style="color:white; text-align: left; font-size: 15px; display: flex; align-items: center; justify-content: space-between; width: 100%;">'+
            '<span>Voucher Name: ' + record.get('VoucherName') + ' | Voucher Amount: ' + record.get('VoucherAmount') + ' | Day Left: ' + record.get('DayLeft') + '</span>'+
            '<div style="margin-left: 10px;font-size: 15px;color:white;font-weight:bold;cursor:pointer;"  onclick="FloatPanel_AyohaRewardVoucher_PreviewVoucherShow(`' + record.get('VoucherName') + '`,`' + record.get('VoucherImgPath') + '`,`' + record.get('EntitledVoucherEndDate') + '`,`' + record.get('DayLeft') + '`,`' + record.get('VoucherCode') + '`,`' + record.get('VoucherAmount') + '`,`' + record.get('VoucherTermAndCondition') + '`,`' + record.get('isRequireVoucherEndDate') + '`)"><u>View Voucer</u></div>'+
        '</div>';
        
        
        }
           
           if(status=="19/2/1983"){
          //  return '<div style="color:white;text-align: left;font-size:15px;width:100%;">Voucher Name:' + record.get('VoucherName') + ' | Voucher Amount:' + record.get('VoucherAmount') + ' </div>'
          return  '<div style="color:white; text-align: left; font-size: 15px; display: flex; align-items: center; justify-content: space-between; width: 100%;">'+
            '<span>Voucher Name: ' + record.get('VoucherName') + ' | Voucher Amount: ' + record.get('VoucherAmount') + '</span>'+
            '<div style="margin-left: 10px;font-size: 15px;color:white;font-weight:bold;cursor:pointer;"  onclick="FloatPanel_AyohaRewardVoucher_PreviewVoucherShow(`' + record.get('VoucherName') + '`,`' + record.get('VoucherImgPath') + '`,`' + record.get('EntitledVoucherEndDate') + '`,`' + record.get('DayLeft') + '`,`' + record.get('VoucherCode') + '`,`' + record.get('VoucherAmount') + '`,`' + record.get('VoucherTermAndCondition') + '`,`' + record.get('isRequireVoucherEndDate') + '`)"><u>View Voucer</u></div>'+
        '</div>';
        
        
        }
           
           
           
           
           
        },
        sortProperty: 'ID'
    }


    //autoLoad: true

});

// var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_voucherName;
// var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherImgPath;
// var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherEndDate;
// var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherDayLeft;
// var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode;
// var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherAmount;
// var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherTermAndCondition;
// var globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_isRequireVoucherEndDate;