Ext.define('ianMizi.model.AyohaStoreSaleItem.AyohaStoreSaleItemModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
      'EnterpriseAccNo',
      'ItemCode',
      'ItemName',
      'ItemPrice',
      'ItemPriceDiscount',
      'ItemCoverImg',
      'ItemDescriptions',
      'ItemCategoryCode',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'RowStatus',
      'CountItemCategory',
      'MembershipCardCode',
      'CampaignCode',
      'CampaignType',
      'MerchantPoint',
      'AyohaPoint',
      'ItemCoverImgName',
      {
          name: 'Pointlabel',
          convert: function (value, record) {
              var _value;

              var CampaignType = record.get('CampaignType');
            

              if (CampaignType == "Point Reward Loyalty Card")
              {
                  var MerchantPoint = parseFloat(record.get('MerchantPoint'));
                  var AyohaPoint = parseFloat(record.get('AyohaPoint'));
                  var ItemPrice = parseFloat(record.get('ItemPrice'));
                  var TTlMerchantPoint = ItemPrice * MerchantPoint;
                  var TTlAyohaPoint = ItemPrice * AyohaPoint;
                  _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }

              if (CampaignType == "Stamp Reward Loyalty Card") {
                  _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="1 Stamp" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*5 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }

              if (CampaignType == "NoMembershipCard") {
                  _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="? Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*? Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }




              return _value;
          }
      },
      {
          name: 'PointlabelTemp',
          convert: function (value, record) {
              var _value;

              var CampaignType = record.get('CampaignType');


              if (CampaignType == "Point Reward Loyalty Card") {
                  var MerchantPoint = parseFloat(record.get('MerchantPoint'));
                  var AyohaPoint = parseFloat(record.get('AyohaPoint'));
                  var ItemPrice = parseFloat(record.get('ItemPrice'));
                  var TTlMerchantPoint = ItemPrice * MerchantPoint;
                  var TTlAyohaPoint = ItemPrice * AyohaPoint;
                //  _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px -1px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:right;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/></div><br><div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px -1px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:right;"><input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                  _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px -1px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>  <input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
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
        ]
    }
});