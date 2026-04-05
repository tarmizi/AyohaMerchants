Ext.define('ianMizi.model.Memberships.MembershipsPageDetailsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID'
            ,'CampaignEnterpriseAccNo'
           ,'CampaignRewardType'
           ,'SubscriberAccNo'
           ,'MembershipDate'
           ,'MembershipByMethod'
           ,'MembrshipApprovalDate'
           ,'MembershipApprovalBy'
           ,'ReferalSubscriberAccNo'    
           ,'MembershipLevel'     
           ,'RowStatus'
           ,'MembershipNo'
           ,'MembershipApprovalStatus'
           ,'MembershipFeePaymentMethod'
           ,'MembershipPaymentLink'
           ,'MembershipPaymentPaidProof'	 
           ,'MembershipPaymentCode'
           ,'MembershipPaymentDate'
           ,'CreatedDate'
           ,'CreatedBy'
           ,'ModifiedDate'
           ,'ModifiedBy'    
           ,'CampaignEnterpriseHQAccNo'
           ,'MembershipRejectedDate'
           ,'ReceivedAmount'
           ,'Remarks'
           ,'MembershipCardName'
           ,'MembershipFee'
           ,'MembershipCardFeePaymentCycle'
           ,'StrExpiredDate'
           ,'isValidLifeTime'
           ,'IsRequiredMembershipFee'
            ,'MembershipCardCode'
            ,'MembershipCardBackgroundImg'
            ,'MembershipCardBackgroundImgback'
         ,'ValidUntilDate'
       ,'AccountName'
       ,'PhoneNo'
       ,'Email'
       ,'Photo'
       , {
        name: 'ModifiedMembershipApprovalStatus',
        convert: function (value, record) {
            // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
            // 0111 3218 9269
            var _value;
            var MembershipApprovalStatus = record.get('MembershipApprovalStatus');
            var SubscriberAccNo= record.get('SubscriberAccNo');
            var MembershipCardCode= record.get('MembershipCardCode');
            if (MembershipApprovalStatus == "APPROVED") {
                _value = '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`);" style="background-color:green;color:white;width:auto;height:20px;text-align:left;font-family:Arial, sans-serif;font-size:14px;padding:0px 5px">APPROVED</div>';
            }
            if (MembershipApprovalStatus == "REJECTED") {
                _value = '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`);" style="background-color:red;color:white;width:auto;height:20px;text-align:left;font-family:Arial, sans-serif;font-size:14px;padding:0px 5px">REJECTED</div>';
            }
            if (MembershipApprovalStatus == "EXPIRED") {
                _value = '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`);" style="background-color:grey;color:white;width:auto;height:20px;text-align:left;font-family:Arial, sans-serif;font-size:14px;padding:0px 5px">EXPIRED</div>';
            }
            if (MembershipApprovalStatus == "REQUEST") {

                _value = '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`);" style="background-color:blue;color:white;width:auto;height:20px;text-align:left;font-family:Arial, sans-serif;font-size:14px;padding:0px 5px" class="blink_me_sendNow">REQUEST APPROVAL</div>';

            }
            if (MembershipApprovalStatus == "UNSUBSCRIBE") {

                _value = '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`);"  style="background-color:orange;color:white;width:auto;height:20px;text-align:left;font-family:Arial, sans-serif;font-size:14px;padding:0px 5px">UNSUBSCRIBE</div>';

            }
            if (MembershipApprovalStatus == "BANNED") {

                _value = '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`);"  style="background-color:red;color:white;width:auto;height:20px;text-align:left;font-family:Arial, sans-serif;font-size:14px;padding:0px 5px">BANNED</div>';

            }
            if (MembershipApprovalStatus == "CANCELLED") {

                _value = '<div onclick="FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(`'+SubscriberAccNo+'`,`'+MembershipCardCode+'`);" style="background-color:red;color:white;width:auto;height:20px;text-align:left;font-family:Arial, sans-serif;font-size:14px;padding:0px 5px">CANCELLED</div>';

            }
            return _value;

        }
    }
      
        ]
    }
});
