Ext.define('ianMizi.model.LoyaltyPoint.LoyaltyPointSendPointHistoryModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           'ID',
      'SubscriberAccNo',
      'EnterpriseAccNo',
      'PointCode',
      'PointQrCode',
      'PointedBy',
      'PointedByDate',
      'PointedByPhoneModel',
      'PointedByUserAccNo',
      'PointedByPhoneSerialNo',
      'PointedByPhoneManufacturer',
      'PointedByPhonePlatform',
      'PointedByOneSignalID',
      'PointedByPhoneRawInfo',
      'RowStatus',
      'CountsPoint',
      'PointCampaignCode',
      'Batch',
      'PointClaimStatus',
      'Amount',
      'ReceiptBillID',
      'PointEquation',
      'SumPoint',
      'PointCampaignName',
      'PointedByDate_DateOnly',
      'PointedByDate_TimeOnly',
      'PointedByDate_MonthYear',
      'RowID',
      'TypeCRDB',
      'PointType',
      'CustomerAccountName',
      'CustomerPhoneNo',
      'CustomerEmail',
      'ModifiedBy',
      'ModifiedDate',
         {
             name: 'ModifiedTypeCRDB',
             convert: function (value, record) {
                 var _value;

                 var str = record.get('TypeCRDB');


                 if (str == "Credit") {
                     _value = '<font size=5 color=black><b>+</b></font>'

                     // return;
                 }

                 if (str == "Debit") {
                     _value = '<font size=6 color=black><b>-</b></font>'
                 }



                 return _value;


             }
         },
         {
             name: 'ModifiedReceiptBillID',
             convert: function (value, record) {
                 var _value;

                 var str = record.get('PointType');
                 var ReceiptBillID = record.get('ReceiptBillID');
                 var ItemCode = record.get('ReceiptBillID').split('-');
                 var strItemCode = ItemCode[0];
                 if (str == "Earn") {
                     _value = '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Receipt/Bill No:' + ReceiptBillID + '</div>'

                     // return;
                 }

                 if (str == "Redeem") {
                     _value = '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Item Code:' + strItemCode + '</div>'
                 }


                 if (str == "Refund") {
                     _value = '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Item Code:' + strItemCode + ' -(Rejected)</div>'
                 }

                 return _value;


             }
         },
          {
              name: 'ModifiedAmount',
              convert: function (value, record) {
                  var _value;

                  var str = record.get('PointType');
                  var Amount = record.get('Amount');

                  if (str == "Earn") {
                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;">RM' + Amount + '</div>'

                      // return;
                  }

                  if (str == "Redeem") {
                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;">Redemption</div>'
                  }

                  if (str == "Refund") {
                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;">Refund Point</div>'
                  }


                  return _value;


              }
          },
           {
               name: 'ModifiedPointType',
               convert: function (value, record) {
                   var _value;

                   var str = record.get('PointType');
                   if (str == "Cancel") {
                       _value = '<div style="width:100%;text-align:center;margin:-5px 0px 0px 0px"><img src="resources/icons/cancelremovebg.png" style="width: 100%; height: 130px;" /></div>';

                       // return;
                   } else {
                       _value = '<div style="width:100%;text-align:center;margin:-5px 0px 0px 0px;background-color:transparent;height:130px">.</div>'
                   }



                   return _value;


               }
           },
            {
                name: 'CancelStatus',
                convert: function (value, record) {
                    var _value;

                    var str = record.get('PointType');
                    var ModifiedBy = record.get('ModifiedBy');
                    var ModifiedDate = record.get('ModifiedDate');
                    if (str == "Cancel") {
                        _value = '<br><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;word-break:normal;margin:-22px 0px 0px 0px;width:100%;"><b>Cancel By:' + ModifiedBy + '</b><br></div><br><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;word-break:normal;margin:-22px 0px 0px 0px;width:100%;"><b>Cancel Date:' + ModifiedDate + '</b><br></div>';

                        // return;
                    } else {
                        _value = ''
                    }



                    return _value;


                }
            },
        ]
    }
});


////////////////////////////////////////////// Latest
