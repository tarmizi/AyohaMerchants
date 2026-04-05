Ext.define('ianMizi.model.RecipientSpecificMember.RecipientSpecificMemberModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
      'NotificationCode',
      'VoucherCode',
      'EnterpriseAccNo',
      'SubscriberAccNo',
      'AccountName',
      'PhoneNo',
      'Email',
      'PlayerID',
      'CreatedDate',
      'CreatedBy',
      'RowStatus',
      'RowNumber'
        ]
    }
});