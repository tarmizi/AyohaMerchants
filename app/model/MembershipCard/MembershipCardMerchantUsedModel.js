Ext.define('ianMizi.model.MembershipCard.MembershipCardMerchantUsedModel', {
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
       'isRequiredApproval',
      'MembershipCardBackgroundImgName_back',
      'MembershipCardBackgroundImg_back',
       'EnterprisesName',
      'EnterprisesLogo',
      'EnterpriseAddress',
      'EnterpriseType',
      'BusinessTypeIconPath',
      'BusinessTypeGroup',
       'MembersCount',
      'ValidUntilDate',
      'MembershipCardPoint',
      {
          name: 'ModifiedEnterprisesNameUpperCase',
          convert: function (value, record) {

              var _value;
              var str = record.get('EnterprisesName');

              _value = str.toUpperCase();




              return _value;
          }
      }
          , {
              name: 'ModifiedEnterprisesName',
              convert: function (value, record) {

                  var _value;
                  var str = record.get('EnterprisesName');
                  console.log(str);

                  if (str.length <= 16) {
                      _value = '<div style="margin:-51px 0px 0px 68px;font-family:Arial, sans-serif;font-size:22px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str.toUpperCase() + '</div>';
                      console.log(str);
                      return _value;
                  }
                  if (str.length >= 17) {
                      var str0 = str.substring(0, 16);
                      var str1 = str.substring(16, str.length);
                      console.log(str0);
                      console.log(str1);
                      _value = '<div style="margin:-61px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str0.toUpperCase() + '-</div><br>' +
                               '<div style="margin:-26px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str1.toUpperCase() + '</div>';
                      return _value;
                  }



              }
          }
            , {
                name: 'ModifiedEnterprisesLogo',
                convert: function (value, record) {

                    var _value;
                    var str = record.get('EnterprisesName');
                    var logo = record.get('EnterprisesLogo');
                    console.log(str);

                    if (str.length <= 13) {
                        _value = '<img src="' + logo + '" alt="Image" style="width:60px;height:60px;border-radius: 50%;border: 1px solid white;margin:-36px 0px 0px 0px">';
                        console.log(str.length);
                        return _value;
                    }
                    if (str.length >= 14) {
                        _value = '<img src="' + logo + '" alt="Image" style="width:60px;height:60px;border-radius: 50%;border: 1px solid white;margin:-36px 0px 0px 0px">';
                        console.log(str.length);
                        return _value;
                    }



                }
            }
              , {
                  name: 'ModifiedStrExpiredDate',
                  convert: function (value, record) {

                      var _value;
                      var str = record.get('StrExpiredDate');

                      if (str == "Membership Valid LifeTime") {
                          _value = str;
                          return _value;
                      } else {

                          _value = str + '(Month)';
                          return _value;
                      }

                      //if (Number.isInteger(str)) {

                      //    _value = str + ' (Month)';
                      //    return _value.toString()+' (Month)';
                      //} else {
                      //    _value = str;
                      //    return _value;
                      //}


                      // return _value;

                  }
              }, {
                  name: 'ModifiedHeaderHeight',
                  convert: function (value, record) {

                      var _value;
                      var str = record.get('EnterprisesName');

                      console.log(str);

                      if (str.length <= 16) {
                          _value = 'height:73px';
                          console.log(str.length);
                          return _value;
                      }
                      if (str.length >= 17) {
                          _value = 'height:90px';
                          console.log(str.length);
                          return _value;
                      }



                  }
              }
        ]
    }
});
