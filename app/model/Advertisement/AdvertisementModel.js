Ext.define('ianMizi.model.Advertisement.AdvertisementModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'AdvertisementCode',
      'AdvertisementTitle',
      'AdvertisementDesc',
      'AdvertisementImg',
      'AdvertisementImgName',
      'AdvertisementStartDate',
      'AdvertisementEndDate',
      'AdvertisementStartDateOnly',
      'AdvertisementEndDateOnly',
      'AdvertisementType',
      'AdvertisementStatus',
      'AdvertisementNote',
      'EnterpriseAccNo',
      'EnterpriseHQAccNo',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'ModifiedRemarks',
      'RowStatus',
      'AdvertisementPeriod',
      'AdvertisementFees',
      'AdvertisementMedia',
      'AdvertismentMediaUrl',
      'AdvertismentMediaNote',
      'MediaType',
      'MediaFileName',
      'AdvertisementTitle',
      'AdvertisementCode',
      'AdvertisementEndDate',
      'EnterpriseName',
      'EnterpriseLogoPath',
      'EnterpriseEmail',
      'EnterpriseFacebook',
      'EnterpriseInstagram',
      'EnterpriseCoordinate',
      'EnterpriseTwiter',
      'EnterpriseWebsite',
      'PICContactNo',
          {
              name: 'AdvertisementStatusButton',
              convert: function (value, record) {
                  var _value;

                  var str = record.get('AdvertisementStatus');
                  var ID = record.get('ID');

                  if (str == "Submitted") {
                      _value = '<div style="width:100%;height:65px;text-align:right;margin:-200px 0px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png" onclick="FloatPanel_PreviewAdvertisementShowFromEditAdvertisement(`FloatPanel_PreviewAdvertisement`)" width="40" height="45" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton"><u>View</u></button></div><br><br><br><div style="width:100%;height:65px;text-align:right;margin:0px 0px 0px 0px;"  onclick="FloatPanel_AdvertisementSettingEditShowing(' + ID + ')"><img src="resources/icons/settingPurple.png"  width="40" height="40" margin="0px -10px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton" ><u>Setting</u></button></div><br>'
                      return _value;
                     // return;
                  }

                  else
                  if (str == "Approved") {
                      _value = '<div style="width:100%;height:65px;text-align:right;margin:-200px 0px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png" onclick="FloatPanel_PreviewAdvertisementShowFromEditAdvertisement(`FloatPanel_PreviewAdvertisement`)" width="40" height="45" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton"><u>View</u></button></div><br><br><br><div style="width:100%;height:65px;text-align:right;margin:0px 0px 0px 0px;"  onclick="FloatPanel_AdvertisementSettingEditShowing(' + ID + ')"><img src="resources/icons/editReview.png"  width="40" height="40" margin="0px -10px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton" ><u>Edit</u></button></div><br>'
                      return _value;
                  }
                  else
                  if (str == "Rejected") {
                      _value = '<div style="width:100%;height:65px;text-align:right;margin:-200px 0px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png" onclick="FloatPanel_PreviewAdvertisementShowFromEditAdvertisement(`FloatPanel_PreviewAdvertisement`)" width="40" height="45" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton"><u>View</u></button></div><br><br><br><div style="width:100%;height:65px;text-align:right;margin:0px 0px 0px 0px;"  onclick="FloatPanel_AdvertisementSettingEditShowing(' + ID + ')"><img src="resources/icons/editReview.png"  width="40" height="40" margin="0px -10px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton" ><u>Edit</u></button></div><br>'
                      return _value;
                  } else
                      if (str == "Published" || str == "Publishing") {
                      _value = '<div style="width:100%;height:65px;text-align:right;margin:-200px 0px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png" onclick="FloatPanel_PreviewAdvertisementShowFromEditAdvertisement(`FloatPanel_PreviewAdvertisement`)" width="40" height="45" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton"><u>View</u></button></div><br><br><br><div style="width:100%;height:65px;text-align:right;margin:0px 0px 0px 0px;"  onclick="FloatPanel_AdvertisementSettingEditShowing(' + ID + ')"><img src="resources/icons/editReview.png"  width="40" height="40" margin="0px -10px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton" ><u>Edit</u></button></div><br>'
                      return _value;
                  }
                  


               
              }
          },
          {
            name: 'AdvertisementStatusTxtModified',
            convert: function (value, record) {
                var _value;

                var str = record.get('AdvertisementStatus');
                var ID = record.get('ID');

                if (str == "Submitted") {
                  //  _value = '<div class="blink_me" style="width:100%;text-align:center;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:white;background-color:blue">SUBMITTED</div>'
                  _value = '<div style="text-align:right;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:green;background-color:transparent;padding:10px 0px;"><span style="background:blue;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:white;padding:10px 10px;">SUBMITTED</span></div>'
                  
                  return _value;
                   // return;
                }

                else
                if (str == "Approved") {
                    _value = '<div class="blink_me" style="text-align:right;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:green;background-color:transparent;padding:10px 0px;"><span style="background:green;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:white;padding:10px 10px;">APPROVED</span></div>'
                    return _value;
                }
                else
                if (str == "Rejected") {
                    _value = '<div style="text-align:right;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:green;background-color:transparent;padding:10px 0px;"><span style="background:red;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:white;padding:10px 10px;">REJECTED</span></div>'                  
                   // _value = '<div class="blink_me" style="width:100%;text-align:center;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:white;background-color:red">REJECTED</div>'
                    return _value;
                } else
                    if (str == "Published" || str == "Publishing") {
                        _value = '<div style="text-align:right;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:green;background-color:transparent;padding:10px 0px;"><span style="background:orange;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:white;padding:10px 10px;">PUBLISHING</span></div>'    
                      //  _value = '<div class="blink_me" style="width:100%;text-align:center;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:white;background-color:orange">PUBLISHING</div>'
                    return _value;
                }
                


             
            }
        },
        ]
    }
});

