Ext.define('ianMizi.model.AyohaRewardEvent.AyohaRewardEventModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'EventCode',
      'EventType',
      'EventName',
      'EventStartDate_Day',
      'EventStartDate_Month',
      'EventStartDate_Year',
      'EventStartTime',
      'EventEndDate_Day',
      'EventEndDate_Month',
      'EventEndDate_Year',
      'EventEndTime',
      'EventDescription',
      'EventCategoryCode',
      'EventLocationCoordinate',
      'EventLocationName',
      'EventCoverPhoto',
      'EventUrlTicket',
      'EnterpriseAccNo',
      'EventStatus',
      'RowStatus',
      'CreatedDate',
      'CreatedBy',
      'ModifiedBy',
      'ModifiedDate',
      'EnterpriseLogo',
      'EnterpriseName',
      'RespondStatus',
      'RespondStatus_IwillAttendCount',
      'RespondStatus_InterestedCount',
      'RowNumber',
      'EventStatus_Merchant',
      'EventCoverPhotoName',
      'EventStartDate_DateOnly',
      'EventEndDate_DateOnly',
      {
        name: 'EventStartTime_Modified',
        convert: function (value, record) {
            var EventStartTime = record.get('EventStartTime');
            var _value=convertTo12HourFormat(EventStartTime);
            return _value;
        }
    },
    {
        name: 'EventEndTime_Modified',
        convert: function (value, record) {
            var EventEndTime = record.get('EventEndTime');
var _value=convertTo12HourFormat(EventEndTime);
            return _value;
        }
    },
      {
          name: 'ModifiedWidth',
          convert: function (value, record) {
              var _value = parseInt(window.innerWidth) - 24;

              return _value;
          }
      },
        {
            name: 'ModifiedRespondStatus',
            convert: function (value, record) {
                var RespondStatus = record.get('RespondStatus');
                var EnterpriseAccNo = record.get('EnterpriseAccNo');
                var ID = record.get('ID');
                var EventCode = record.get('EventCode');
                var _value;

                _value = '<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-10px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ','+ID+')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>';

                if (RespondStatus == "IwillAttend") {
                    _value = '<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-10px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/iwillattend01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:bold;color:purple"><u>I Will Attend</u></div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>'
                } if (RespondStatus == "Interested") {
                    _value = '<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-10px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/like02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;font-weight:bold;color:purple"><u>Interested</u></div></div></div>';

                } 

                

                return _value;
            }
        },

        {
            name: 'ModifiedRespondStatusImg',
            convert: function (value, record) {
                var RespondStatus = record.get('RespondStatus');
               
                var _value;

                _value = '<img src="resources/icons/transparentbox.png" style="width:20px;height:20px;margin:0px 20px 0px 0px;"/>';
                if (RespondStatus == "IwillAttend") {
                    _value = '<img src="resources/icons/iwillattend01.png" style="width:20px;height:20px;margin:0px 20px 0px 0px;"/>';
                } if (RespondStatus == "Interested") {
                    _value = '<img src="resources/icons/like02.png" style="width:20px;height:20px;margin:0px 20px 0px 0px;"/>';

                }



                return _value;
            }
        },
        {
            name: 'ModifiedEventStatus_Merchant',
            convert: function (value, record) {
                var EventStatus_Merchant = record.get('EventStatus_Merchant');
                var _value;

              
                if (EventStatus_Merchant == "Expired") {
                    _value = '<div style="width: 130px; height:20px; background:red;text-align:left;font-size:14px;color:white">Event Expired</div>'
                    return _value;
                } else {
                    _value = '<div style="width: 250px; height:20px; background:white;text-align:left;font-size:14px;color:black">Running</div>'
                    return _value;
                } 

                

               
            }
        },
        
        ]
    }
});




function convertTo12HourFormat(time) {
    // Validate the input time format
    var timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(time)) {
        throw new Error("Invalid time format. Please provide time in 24-hour format (HH:MM).");
    }
 
    // Extract the hour and minute from the input time
    var [hour, minute] = time.split(":");
 
    // Convert the hour to 12-hour format
    var hour12 = parseInt(hour);
    var period = "AM";
    if (hour12 >= 12) {
        hour12 = hour12 === 12 ? 12 : hour12 - 12;
        period = "PM";
    }
    if (hour12 === 0) {
        hour12 = 12;
    }
 
    // Return the time in 12-hour format
    return `${hour12}:${minute} ${period}`;
}