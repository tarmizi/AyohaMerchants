Ext.define('ianMizi.model.AyohaStoreOrder.AyohaStoreOrderModel', {
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
      'TotalStampEarn',
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
      'SubTotal',      
      'EnterpriseName',
      'EnterpriseLogo',
      'ClientName',
      'ClientEmail',
      'ClientPhoneNo',
      'ClientPhoto',
      'CreatedDate_MonthYear',
      'OrderPaidUnpaidStatus',
      'SearchCol',
      'ItemsName',
      'strItemQuantity',
      'TotalRow',
      {
          name: 'ModifiedOrderLogOrderStatusOrderPaidOnly',
          convert: function (value, record) {
              var _value;
              var txt = record.get('OrderLogOrderStatus');
              var OrderLogOrderStatus = record.get('OrderLogOrderStatus').split(",");
              var OrderLogCreatedDate = record.get('OrderLogCreatedDate').split(",");
              

              var count = txt.split(",").length - 1;
              var html0;
            //  html0 = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-5px 0px 0px -10px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[0] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px -10px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" class="blink_me_sendNow"><i>&nbsp;&nbsp;&nbsp;&nbsp;<font color="black">(' + OrderLogOrderStatus[0].replace("_", " ") + ')</font></i></div>'
             
              if (OrderLogOrderStatus[0] == "OrderPaid")
              {
                  html0 = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-5px 0px 0px -10px;color:blue;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[0] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px -10px;color:blue;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" class="blink_me_sendNow"><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="blue">(' + OrderLogOrderStatus[0].replace("_", " ") + ')</font></i></div>'
              }

              if (OrderLogOrderStatus[0] == "OrderUnPaid") {
                  html0 = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-5px 0px 0px -10px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[0] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px -10px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">(' + OrderLogOrderStatus[0].replace("_", " ") + ')</font></i></div>'
              }

            
              if (count > 1) {
                  for (i = 1; i <= count; i++) {
                     

                      if (OrderLogOrderStatus[i] == "OrderPaid") {
                         
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:blue;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:blue;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" class="blink_me_sendNow" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i].replace("_", " ") + ')</i></div>'

                      }
                      //if (OrderLogOrderStatus[i] == "OrderUnPaid") {
                      //    html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i].replace("_", " ") + ')</i></div>'
                      //}





                      if (OrderLogOrderStatus[i] == "Order_Confirmed") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:orange;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:orange;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i].replace("_", " ") + ' by Merchant)</i></div>'
                      }
                      if (OrderLogOrderStatus[i] == "Order_Sent") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:purple;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:purple;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Posted/Sent Out)</i></div>'
                      } if (OrderLogOrderStatus[i] == "Order_Rejected") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:pink;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:pink;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Rejected)</i></div>'
                      }

                      if (OrderLogOrderStatus[i] == "Order_Refunded") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:#99cc00;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:#99cc00;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Refunded)</i></div>'
                      }
                      if (OrderLogOrderStatus[i] == "Order_Completed") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:green;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:green;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Completed)</i></div>'
                      }
                      if (OrderLogOrderStatus[i] == "Order_Cancel") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Cancel)</i></div>'
                      }
                      //else {
                      //    html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i] + ')</i></div>'

                      //}



                     
                  }
                 

              }
            // console.log(html0);
             _value = html0.replace('<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;()</i></div>', "")
            
              



              return _value;
          }
      },
      {
          name: 'ModifiedOrderLogOrderStatus',
          convert: function (value, record) {
              var _value;
              var txt = record.get('OrderLogOrderStatus');
              var OrderLogOrderStatus = record.get('OrderLogOrderStatus').split(",");
              var OrderLogCreatedDate = record.get('OrderLogCreatedDate').split(",");


              var count = txt.split(",").length - 1;
              var html0;
              html0 = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-5px 0px 0px -10px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[0] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px -10px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" class="blink_me_sendNow"><i>&nbsp;&nbsp;&nbsp;&nbsp;<font color="black">(' + OrderLogOrderStatus[0].replace("_", " ") + ')</font></i></div>'

              if (OrderLogOrderStatus[0] == "OrderPaid") {
                  html0 = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-5px 0px 0px -10px;color:blue;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[0] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px -10px;color:blue;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" class="blink_me_sendNow"><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="blue">(' + OrderLogOrderStatus[0].replace("_", " ") + ')</font></i></div>'
              }

              if (OrderLogOrderStatus[0] == "OrderUnPaid") {
                  html0 = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-5px 0px 0px -10px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[0] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px -10px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" class="blink_me_sendNow"><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">(' + OrderLogOrderStatus[0].replace("_", " ") + ')</font></i></div>'
              }


              if (count > 1) {
                  for (i = 1; i <= count; i++) {


                      if (OrderLogOrderStatus[i] == "OrderPaid") {

                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:blue;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:blue;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" class="blink_me_sendNow" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i].replace("_", " ") + ')</i></div>'

                      }
                      if (OrderLogOrderStatus[i] == "OrderUnPaid") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i].replace("_", " ") + ')</i></div>'
                      }





                      if (OrderLogOrderStatus[i] == "Order_Confirmed") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:orange;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:orange;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i].replace("_", " ") + ' by Merchant)</i></div>'
                      }
                      if (OrderLogOrderStatus[i] == "Order_Sent") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:purple;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:purple;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Posted/Sent Out)</i></div>'
                      } if (OrderLogOrderStatus[i] == "Order_Rejected") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:pink;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:pink;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Rejected)</i></div>'
                      }

                      if (OrderLogOrderStatus[i] == "Order_Refunded") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:#99cc00;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:#99cc00;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Refunded)</i></div>'
                      }
                      if (OrderLogOrderStatus[i] == "Order_Completed") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:green;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:green;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Completed)</i></div>'
                      }
                      if (OrderLogOrderStatus[i] == "Order_Cancel") {
                          html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:red;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;" ><i>&nbsp;&nbsp;&nbsp;&nbsp;(Order Cancel)</i></div>'
                      }
                      //else {
                      //    html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i] + ')</i></div>'

                      //}




                  }


              }
              // console.log(html0);
              _value = html0.replace('<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;()</i></div>', "")





              return _value;
          }
      },
       {
           name: 'ModifiedOrderLogCreatedDate',
           convert: function (value, record) {
               var _value;
              
               var OrderLogCreatedDate = record.get('OrderLogCreatedDate').split(",");


              
               _value = OrderLogCreatedDate[0]





               return _value;
           }
       },
       {
        name: 'ModifiedItemsName',
        convert: function (value, record) {
            var _value;        
          
           
            

            // var ItemsName = record.get('ItemsName');       
            // if(ItemsName){
            //     var txt = record.get('ItemsName');
            //     var count = txt.split(",").length-1;
            //     var kira=1;
            //     var val = record.get('ItemsName').split(",");
            //     for (i = 0; i <= count; i++) {
            //         _value+=+kira+")."+val[i].replace("undefined","")+"<br>";
            //         kira++;
            //     }           
            // }else{
            //     _value="NA";
            // }
            // return _value.replace("undefined","");
            

           // var strItemQuantity = record.get('strItemQuantity');
            var ItemsName = record.get('ItemsName');       
            if(ItemsName){
                var txt = record.get('ItemsName');
                
                var count = txt.split(",").length-1;
                var kira=1;
                var val = record.get('ItemsName').split(",");
                var strItemQuantity = record.get('strItemQuantity').split(",");
                for (i = 0; i <= count; i++) {
                    _value+=+kira+")."+val[i].replace("undefined","")+" x "+strItemQuantity[i].replace("undefined","")+"<br>";
                    kira++;
                }           
            }else{
                _value="NA";
            }
            return _value.replace("undefined","");
            
            




            
        }
    },
    // {
    //     name: 'ModifiedstrItemQuantity',
    //     convert: function (value, record) {
    //         var _value;
           
          
           
            

    //         var strItemQuantity = record.get('strItemQuantity');
            
    //         if(strItemQuantity){
    //             var txt = record.get('strItemQuantity');
    //             var count = txt.split(",").length-1;
    //             var kira=1;
    //            // var val;
    //             var val = record.get('strItemQuantity').split(",");
    //             for (i = 0; i <= count; i++) {
    //                 //_value+=val[i].replace(",",[i]+"<br>");
    //                 _value+=+kira+")."+val[i].replace("undefined","")+"<br>";
    //                 kira++;
    //             }
    //           //  _value=ItemsName.replace(",","<br>");

    //         }else{
    //             _value="NA";
    //         }
            
            

           
            




    //         return _value.replace("undefined","");
    //     }
    // },
       'OrderUnPaid',
       'OrderPaid',
       'Order_Confirmed',
       'Order_SentOut',
        'Order_Completed',
       'Order_Cancel',
       'Order_Rejected',
       'Order_Refunded',       
        ]
    }
});
