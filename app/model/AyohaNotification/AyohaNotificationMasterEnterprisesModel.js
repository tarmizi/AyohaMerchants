Ext.define('ianMizi.model.AyohaNotification.AyohaNotificationMasterEnterprisesModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID'
      ,'NotificationCode'
      ,'NotificationType'
      ,'NotificationTitle'
      ,'NotificationBody'
      ,'NotifcationImage'
      ,'NotificationFooterImage'
      ,'EnterpriseAccNo'
      ,'EnterpriseHQAccNo'
      ,'SubscriberAccNo'
      ,'CreatedDate'
      ,'CreatedBy'
      ,'ModifiedDate'
      ,'ModifiedBy'
      ,'RowStatus'
      , 'IsRead'
        ,{
        name: 'ModifiedIsRead',
convert: function (value, record) {
    var _value;
    var IsReadStatus = record.get('IsRead');
    var ID = record.get('ID');
    if (IsReadStatus == "Y") {
        _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotificationMasterEnterprisesDelete(' + ID + ')" class="buttonsHtmlBgDeleteNotificationListTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 20px;" /></button></div>';
    }
    if (IsReadStatus == "N") {
        _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/unreadNotification01.png" style="width: 23px; height: 23px; margin:0px 0px 0px 20px;" /></button></div>';
    }



    return _value
}
},
{
    name: 'ModifiedNotification',
    convert: function (value, record) {
        var _value;


        var NotificationType = record.get('NotificationType');
        var IsReadStatus = record.get('IsRead');
        var EnterpriseLogoPath;
        var NotificationBody;
        var EnterpriseName = record.get('NotificationTitle');
        var OrderNo = record.get('NotificationCode');
        var OrderNoDisplay01 = record.get('NotificationCode').split('-');
        var SentDate = record.get('CreatedDate');
        var ID = record.get('ID');
        if (NotificationType == "Payment-Received") {
            EnterpriseLogoPath = "resources/icons/rmIcon.png";
            NotificationBody = 'Amount:RM' + record.get('NotificationBody');
        }
        if (NotificationType == "Memberships") {
           // EnterpriseLogoPath = "resources/icons/membershipPurpleTwo.png";
            EnterpriseLogoPath = record.get('NotifcationImage');
            NotificationBody = 'Member Name:' + record.get('NotificationBody');
        }
        if (NotificationType == "ReviewAndRate") {
            // EnterpriseLogoPath = "resources/icons/membershipPurpleTwo.png";
             EnterpriseLogoPath = "resources/icons/ReviewAndRate.png";
             NotificationBody = 'Member Name:' + record.get('NotificationBody');
         }

      

      
  
       
      
    
     

        // if (IsReadStatus == "Y") {
        //     _value = '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr OnClick="openNotificationPanel(' + "'" + OrderNo + "'" + ',' + "'" + NotificationType + "'" + ',' + ID + ')" ><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:5%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">' + EnterpriseName + '<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' + NotificationBody + '<br>Date:' + SentDate + '</font></td></tr></table>';

        // }
        // if (IsReadStatus == "N") {
        //     _value = '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr OnClick="openNotificationPanel(' + "'" + OrderNo + "'" + ',' + "'" + NotificationType + "'" + ',' + ID + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:5%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>' + EnterpriseName + '</b><br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">' + NotificationBody + '<br>Date:' + SentDate + '</font></td></tr></table>';
        // }


        
        if (IsReadStatus == "Y") {
            _value = '<table  style="width:100%;height:75px; background-color:transparent"          onclick="openNotificationPanel(' + "'" + OrderNo + "'" + ',' + "'" + NotificationType + "'" + ',' + ID + ')" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:5%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">' + EnterpriseName + '<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' + NotificationBody + '<br>Date:' + SentDate + '</font></td></tr></table>';

        }
        if (IsReadStatus == "N") {
            _value = '<table style="width:100%;height:75px; background-color:transparent" onclick="openNotificationPanel(' + "'" + OrderNo + "'" + ',' + "'" + NotificationType + "'" + ',' + ID + ')" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:5%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>' + EnterpriseName + '</b><br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">' + NotificationBody + '<br>Date:' + SentDate + '</font></td></tr></table>';
        }

        return _value
    }
},
        ]
    }
});