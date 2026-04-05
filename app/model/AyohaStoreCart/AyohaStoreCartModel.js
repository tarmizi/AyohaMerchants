Ext.define('ianMizi.model.AyohaStoreCart.AyohaStoreCartModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'RowNumber',
      'ID',
        'ItemCode',
      'ItemQuantity',
      'ItemSumPrice',
      'ItemCartStatus',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'RowStatus',
      'EnterpriseAccNo',
      'SubscriberAccNo',
      'LoyaltyRewardType',
      'MerchantSumPoint',
      'AyohaSumPoint',
      'MerchantSumStamp',
       'ItemCoverImg',
      'MerchantPoint',
      'AyohaPoint',
      'ItemName',
      'ItemPrice',
      'ItemPriceDiscount',
      'TotalItemQuantity',
      'TotalSumPrice',
      'TotalMerchantPoint',
      'TotalAyohaPoint',
      'TotalMerchantSumStamp',
      'ItemDescriptions',
      {
          name: 'Pointlabel',
          convert: function (value, record) {
              var _value;

              var CampaignType = record.get('LoyaltyRewardType');

              if (CampaignType == "Point Reward Loyalty Card") {
                  var MerchantPoint = parseFloat(record.get('MerchantPoint'));
                  var AyohaPoint = parseFloat(record.get('AyohaPoint'));
                  var ItemPrice = parseFloat(record.get('ItemPrice'));
                  var TTlMerchantPoint = ItemPrice * MerchantPoint;
                  var TTlAyohaPoint = ItemPrice * AyohaPoint;
                  _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px -1px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 60px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>  <input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }

              if (CampaignType == "Stamp Reward Loyalty Card") {
                  _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="1 Stamp" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*5 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }

              if (CampaignType == "NoMembershipCard") {
                  _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="? Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*? Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }




              return _value;
          }
      },
      {
          name: 'OrderSentCreatedDate',
          convert: function (value, record) {
              var _value;

              var ItemCartStatus = record.get('ItemCartStatus');

              if (ItemCartStatus == "NewOrder") {
                 
                  _value = '';
              }

              else {
                  _value = '<br><div style="font-family:Arial, sans-serif;font-size:8px;font-weight:bold;word-break:break-all;margin:-15px 16px 0px 0px;height:5px;border-top:1px none grey;color:grey;text-align:right;"><u>Created Date:{CreatedDate}</u></div>';
              }




              return _value;
          }
      },
        ]
    }
});
