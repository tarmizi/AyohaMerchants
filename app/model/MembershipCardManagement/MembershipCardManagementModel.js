Ext.define('ianMizi.model.MembershipCardManagement.MembershipCardManagementModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'MembershipCardCode',
      'EnterpriseAccNo',
      'MembershipCardFee',
      'MembershipCardType',
      'RowStatus',
      'ExpiredDate',
      'MembershipCardBackgroundImg',
      'CreatedDate',
      'CreatedBy',
      'StartDate',
      'MembershipCardName',
      'MembershipCardFeePaymentCycle',
      'StrExpiredDate',
      'isValidLifeTime',
      'ModifiedBy',
      'ModifiedDate',
        ]
    }
});

