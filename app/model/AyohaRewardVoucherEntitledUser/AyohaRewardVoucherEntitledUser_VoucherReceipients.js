Ext.define('ianMizi.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherReceipients', {
    extend: 'Ext.data.Model',
    config: {
        fields: [

            'ID'
      ,'VoucherCode'
      ,'SubscriberAccNo'
      ,'EnterpriseAccNo'
      ,'EntitledVoucherStartDate'
      ,'EntitledVoucherEndDate'
      ,'EntitledVoucherNote'
      ,'EntitledVoucherStatus'
      ,'RowStatus'
      ,'CreatedDate'
      ,'CreatedBy'
      ,'ModifiedDate'
      ,'ModifiedBy'
      ,'PaymentNo'
      ,'PaymentAtEnterpriseAccNo'
      ,'PaymentNoDisplay'
      ,'MembershipCardCode'
      ,'AccountName'
      ,'DayLeft'
      ,'RowNumber'
      ,'VoucherName'
      ,'VoucherAmount'
      ,'PhoneNo'
      ,'Email'
      ,'VoucherImgPath'
      ,'VoucherTermAndCondition'
      ,'isRequireVoucherEndDate'
      ,'OrderNo'
      ,'DisplayOrderNo'
      ,{
        name: 'ModifiedEntitledVoucherStatus',
        convert: function (value, record) {
            var EntitledVoucherStatus = record.get('EntitledVoucherStatus');
            var DisplayOrderNo = record.get('DisplayOrderNo');
            var OrderNo = record.get('OrderNo');
var _value;
            if(EntitledVoucherStatus=='Valid'){
                _value='<font color=green size=2px>Not yet Used</font>';
            }else{
                _value='<div style="width:100%;cursor:pointer"  onclick="FloatPanel_AyohaStore_OrderHistoryListAllMemberShow_FromMemberDetailsPage(`'+OrderNo+'`);"><u><font color=blue size=2px>Has Been Used</font><br><font color=blue size=2px>'+DisplayOrderNo+'</font></u></div>';
            }
            return _value;
        }
    }
        ]
    }
});