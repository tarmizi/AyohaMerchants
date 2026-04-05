Ext.define('ianMizi.model.MembershipCardCampaingEntitled.MembershipCardMerchantCampaingEntitledModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
    //  'ID',
    //   'CampaignCode',
    //   'EnterpriseAccNo',
    //   'EnterpriseHQAccNo',
    //   'MembershipCardCode',
    //    'RowStatus',
    //   'CampaignType',
    //   'CampaignName',
    //   'CreatedBy',
    //   'CreatedDate',
    //   'Remarks',



    'ID',
   'CampaignCode',
   'EnterpriseAccNo',
   'EnterpriseHQAccNo',
   'MembershipCardCode',
     'RowStatus',
     'CampaignType',
   'CampaignName',
   'CreatedBy',
   'CreatedDate',
   'Remarks',
   'isRulePopUp',
   'Stamp',
 'EnterpriseName',
   'EnterpriseLogo',
   'CountLoyaltyStamped',
   'CampaignStartDate',
   'CampaignEndDate',
   'isRequiredStartEndDate',
   'isCampaignExpired',
   'CampaignDayLeft',
    //    {
    //        name: 'CampaignIcon',
    //        convert: function (value, record) {

    //            var _value;
    //            var str = record.get('CampaignType');

    //            if (str == "Stamp Reward Loyalty Card") {
    //                _value = "resources/icons/AyohaStampCardPurple.png";
    //            }
    //            if (str == "Point Reward Loyalty Card") {
    //                _value = "resources/icons/pointPurpleOne.png";
    //            }
    //            if (str == "Membership Card Discount") {
    //             _value = "resources/icons/mypromotionThree.png";
    //         }
    //            if (str == "Privilege") {
    //                _value = "resources/icons/membershipPurpleFive.png";
    //            }


               



    //            return _value;
    //        }
    //    },
    //    {
    //        name: 'ModifiedCampaignType',
    //        convert: function (value, record) {

    //            var _value;
    //            var str = record.get('CampaignType');

    //            if (str == "Stamp Reward Loyalty Card") {
    //                _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src="resources/icons/StampTopImgOne.png">';
    //            }
    //            if (str == "Point Reward Loyalty Card") {
    //                _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src="resources/icons/PointAnimation03.gif">';
    //            }
    //            if (str == "Membership Card Discount") {
    //             _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src="resources/icons/mypromotionThree.png">';
    //         }

               
    //            if (str == "Privilege") {
    //                _value = "resources/icons/membershipPurpleFive.png";
    //            }






    //            return _value;
    //        }
    //    }
    //    ,
    //    {
    //        name: 'ModifiedCampaignTypeShorted',
    //        convert: function (value, record) {

    //            var _value;
    //            var str = record.get('CampaignType');

    //            if (str == "Stamp Reward Loyalty Card") {
    //                _value = 'Stamp Loyalty Card';
    //            }
    //            if (str == "Point Reward Loyalty Card") {
    //                _value = 'Point Loyalty Card';
    //            }
    //            if (str == "Membership Card Discount") {
    //             _value = 'Membership Card Discount';
    //         }

               
    //            if (str == "Privilege") {
    //                _value = 'Privilege';
    //            }






    //            return _value;
    //        }
    //    },
    //    {
    //        name: 'ModifiedCountLoyaltyStamped',
    //        convert: function (value, record) {

    //            var _value;
    //            var str = record.get('CampaignType');
    //            var CountLoyaltyStamped = record.get('CountLoyaltyStamped');

    //            if (str == "Stamp Reward Loyalty Card") {
    //                _value = '(' + CountLoyaltyStamped +')';
    //            }
    //            if (str == "Point Reward Loyalty Card") {
    //                if (CountLoyaltyStamped) {
    //                    _value = '(' + CountLoyaltyStamped + ') Points';
    //                } else {
    //                    _value = '( 0 )Point';
    //                }
                  
    //            }
    //            if (str == "Membership Card Discount") {
    //             _value = 'Entitled ' + CountLoyaltyStamped + '% discount on every purchases';
    //         }

               
    //            if (str == "Privilege") {
    //                _value = 'Privilege';
    //            }






    //            return _value;
    //        }
    //    }
       {
        name: 'CampaignIcon',
        convert: function (value, record) {

            var _value;
            var str = record.get('CampaignType');

            if (str == "Stamp Reward Loyalty Card") {
                _value = "resources/icons/AyohaStampCardPurple.png";
            }
            if (str == "Point Reward Loyalty Card") {
                _value = "resources/icons/pointPurpleOne.png";
            }
            if (str == "Membership Card Discount") {
             _value = "resources/icons/mypromotionThree.png";
         }
         if (str == "Membership Card Contest") {
             _value = "resources/icons/contest-removebg-preview.png";
         }
            if (str == "Privilege") {
                _value = "resources/icons/membershipPurpleFive.png";
            }
            return _value;
        }
    },
    {
        name: 'ModifiedCampaignType',
        convert: function (value, record) {

            var _value;
            var str = record.get('CampaignType');

            if (str == "Stamp Reward Loyalty Card") {
              //  _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src=https://setkita.com/AyohaImgCard/AyohaRewardMembershipPrevillageIcon/StampTopImgOne.png>';
                _value = 'https://setkita.com/AyohaImgCard/AyohaRewardMembershipPrevillageIcon/StampTopImgOne.png';
           
           
             }
            if (str == "Point Reward Loyalty Card") {
             _value = 'https://setkita.com/AyohaImgCard/AyohaRewardMembershipPrevillageIcon/loyaltypointicon1.png';
           
              //  _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src=https://setkita.com/AyohaImgCard/AyohaRewardMembershipPrevillageIcon/PointAnimation03.gif>';
            }
            if (str == "Membership Card Discount") {
            
             _value = 'https://setkita.com/AyohaImgCard/AyohaRewardMembershipPrevillageIcon/discountIcon1.png';
           
            // _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src=https://setkita.com/AyohaImgCard/AyohaRewardMembershipPrevillageIcon/mypromotionThree.png>';
         }
         if (str == "Membership Card Contest") {
             _value = 'https://setkita.com/AyohaImgCard/AyohaRewardMembershipPrevillageIcon/contesticon2.png';
           
            // _value = '<img style="margin:-10px 0px 0px 0px;width:65px;height:65px;" src=https://setkita.com/AyohaImgCard/AyohaRewardMembershipPrevillageIcon/contest-removebg-preview.png>';
         }
            
            if (str == "Privilege") {
                _value = "resources/icons/membershipPurpleFive.png";
            }






            return _value;
        }
    }
    ,
    {
        name: 'ModifiedCampaignTypeShorted',
        convert: function (value, record) {

            var _value;
            var str = record.get('CampaignType');

            if (str == "Stamp Reward Loyalty Card") {
                _value = 'Stamp Loyalty Card';
            }
            if (str == "Point Reward Loyalty Card") {
                _value = 'Point Loyalty Card';
            }
            if (str == "Membership Card Discount") {
             _value = 'Membership Card Discount';
         }
         if (str == "Membership Card Contest") {
             _value = 'Membership Loyalty Contest';
         }
            
            if (str == "Privilege") {
                _value = 'Privilege';
            }






            return _value;
        }
    },
    {
        name: 'ModifiedCountLoyaltyStamped',
        convert: function (value, record) {

            var _value;
            var str = record.get('CampaignType');
            var CountLoyaltyStamped = record.get('CountLoyaltyStamped');

            if (str == "Stamp Reward Loyalty Card") {
                _value = '(' + CountLoyaltyStamped +')';
            }
            if (str == "Point Reward Loyalty Card") {
                if (CountLoyaltyStamped) {
                    _value = '(' + CountLoyaltyStamped + ') Points';
                } else {
                    _value = '( 0 )Point';
                }
               
            }
            if (str == "Membership Card Discount") {
             _value = 'Entitled ' + CountLoyaltyStamped + '% discount on every purchases';
         }
         if (str == "Membership Card Contest") {
             _value = 'Entitled to join Loyalty contest';
         }
            
            if (str == "Privilege") {
                _value = 'Privilege';
            }






            return _value;
        }
    }
        ]
    }
});

