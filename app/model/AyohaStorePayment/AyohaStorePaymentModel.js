Ext.define('ianMizi.model.AyohaStorePayment.AyohaStorePaymentModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'Row_num',
        'ID',
      'OrderNo',
      'PaymentNo',
      'SubscriberAccNo',
      'EnterpriseAccNo',
      'GrandTotal',
      'PaymentAmount',
      'PaymentMethod',
      'PaymentMethodCode',
      'CreatedDate',
      'CreatedBy',
      'MembershipCardCode',
      'RowStatus',
      'PaymentStatus',
      'PaymentNoDisplay',
      'MemberDiscountPercent',
      'MemberDiscountAmount',
      'ClientName',
      'ClientPhoneNo',
      'SearchCol'
        ]
    }
});
