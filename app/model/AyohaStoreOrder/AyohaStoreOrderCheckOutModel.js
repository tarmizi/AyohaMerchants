Ext.define('ianMizi.model.AyohaStoreOrder.AyohaStoreOrderCheckOutModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'ID',
      'OrderNo',
      'ItemCartCode',
      'DeliveryChargeCode',
      'DeliveryCharge',
      'MembershipDiscountCampaignCode',
      'MembershipDiscount',
      'VoucherCampaignCode',
      'VoucherDiscount',
      'GrandTotal',
      'DeliveryAddress_StreetName',
      'DeliveryAddress_Town',
      'DeliveryAddress_Postcode',
      'DeliveryAddress_StateCode',
      'DeliveryAddress_CountryCode',
      'ReferenceName',
      'ReferencePhoneNo',
      'NoteToSeller',
      'MerchantPointEarn',
      'AyohaPointEarn',
      'EnterpriseAccNo',
      'SubscriberAccNo',
      'MembershipCardCode',
      'OrderStatus',
      'CreatedDate',
      'CreatedBy',
      'ModifiedBy',
      'ModifiedDate',
      'RowStatus',
      'DisplayOrderNo',
      'DeliveryName',
      'TotalQuantity',
      'OrderLogOrderStatus',
      'OrderLogCreatedDate',
      'Row_num',
      'ItemQuantity',
      'ItemCode',
      'ItemName',
      'ItemPrice',
      'ItemPriceDiscount',
      'ItemDescriptions',
      'MembershipCardBackgroundImg',
      'MembershipCardName',
      'ItemCoverImg',
      'SubTotal',
      'PaymentAmount',
      'PaymentMethod',
       'PaymentMethodCode',
      'PaymentNoDisplay',
       'PaymentNo',
      'PaymentStatus',
      'PaymentDate',
      'LoyaltyRewardType',
       'ClientName',
      'ClientEmail',
      'ClientPhoneNo',
      'ClientPhoto',
       'CreatedDate_MonthYear',
       'OrderPaidUnpaidStatus',
       'SearchCol',
       'MemberDiscountPercent',
       'MemberDiscountAmount',
       'PlayerID',
        {
            name: 'ModifiedItemPrice',
            convert: function (value, record) {
                var _value;
                var ItemPriceDiscount =parseFloat(record.get('ItemPriceDiscount'));
                var ItemPrice = record.get('ItemPrice');
                var ItemQuantity = record.get('ItemQuantity');

                if (ItemPriceDiscount > 0) {
                    _value = ItemPriceDiscount + " X (" + ItemQuantity +")"
                } else {
                    _value = ItemPrice + " X (" + ItemQuantity +")"
                }




                return _value;
            }
        },
         {
             name: 'RealItemPrice',
             convert: function (value, record) {
                 var _value;
                 var ItemPriceDiscount = parseFloat(record.get('ItemPriceDiscount'));
                 var ItemPrice = record.get('ItemPrice');

                 if (ItemPriceDiscount > 0) {
                     _value = ItemPriceDiscount
                 } else {
                     _value = ItemPrice
                 }




                 return _value;
             }
         },
      
        ]
    }
});
