/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
// var mouseWheelHandler = function (e) {
//     var e = window.event || e,
//         el = e.target,
//         cmp,
//         offset,
//         scroller,
//         delta,
//         _results = [];
//    e.preventDefault(); // prevent scrolling when in iframe
//     while (el !== document.body) {
//         if (el && el.className && el.className.indexOf('x-container') >= 0) {
//             cmp = Ext.getCmp(el.id);
//             if (cmp && typeof cmp.getScrollable == 'function' && cmp.getScrollable()) {
//                 scroller = cmp.getScrollable().getScroller();
//                 if (scroller) {
//                     delta = e.detail ? e.detail*(-120) : e.wheelDelta;
//                     offset = { x:0, y: -delta*0.5 };
//                     scroller.fireEvent('scrollstart', scroller, scroller.position.x, scroller.position.y, e);
//                     scroller.scrollBy(offset.x, offset.y);
//                     scroller.snapToBoundary();
//                     scroller.fireEvent('scrollend', scroller, scroller.position.x, scroller.position.y-offset.y);
//                     break;
//                 }
//             }
//         }
//     _results.push(el = el.parentNode);
//     }
//     return _results;
// };

// if (document.addEventListener) {
//     // IE9, Chrome, Safari, Opera
//     document.addEventListener('mousewheel', mouseWheelHandler, false);
//     // Firefox
//     document.addEventListener('DOMMouseScroll', mouseWheelHandler, false);
// }





var mouseWheelHandler = function (e) {
    var e = window.event || e,
        el = e.target,
        cmp,
        offset,
        scroller,
        delta,
        _results = [];
    e.preventDefault(); // prevent scrolling when in iframe
   
   

    while (el !== document.body) {
        if (el && el.className && el.className.indexOf('x-container') >= 0) {
            cmp = Ext.getCmp(el.id);
            if (cmp && typeof cmp.getScrollable == 'function' && cmp.getScrollable()) {
                scroller = cmp.getScrollable().getScroller();
                if (scroller) {
                    delta = e.detail ? e.detail * (-120) : e.wheelDelta;
                    offset = { x:0, y: -delta * 0.5 };
                    scroller.fireEvent('scrollstart', scroller, scroller.position.x, scroller.position.y, e);
                    scroller.scrollBy(offset.x, offset.y);
                    scroller.snapToBoundary();
                    scroller.fireEvent('scrollend', scroller, scroller.position.x, scroller.position.y - offset.y);
                    break;
                }
            }
        }
        _results.push(el = el.parentNode);
    }
    return _results;
};



if (document.addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.addEventListener('mousewheel', mouseWheelHandler, false);
    // Firefox
    document.addEventListener('DOMMouseScroll', mouseWheelHandler, false);
}







Ext.application({
    name: 'ianMizi',

    requires: [
           'Ext.MessageBox',
             'Ext.form.*',
           'Ext.field.*',
           'Ext.Img',
           'Ext.app.History',
           'Ext.Map'
    ],
    models: ['Customer.CustomerModel', 'Receipt.FlatBillModel', 'CloudReceiptsMobileUser.CloudReceiptsMobileUserModel', 'Notifications.NotificationsModel',
        'Enterprise.EnterpriseModel', 'EnterpriseSubscriber.EnterpriseSubscriberModel', 'ReceiptTemplate.ReceiptTemplateModel', 'Receipt.ReceiptModel',
        'RedeemItem.RedeemItemModel', 'LoyaltyStamp.LoyaltyStampModel', 'Subscriber.SubscriberModel', 'StampCampaign.StampCampaignModel', 'StampCard.StampCardModel',
        'StampContentDefaultTemplate.StampContentDefaultTemplateModel', 'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageModel', 'AyohaEnterpriseAccount.AyohaEnterpriseAccountModel',
    'Master.BusinessTypeModel', 'Master.EnterprisesBranchTypeModel', 'Enterprises.EnterprisesModel', 'AyohaEnterprisesUser.AyohaEnterprisesUserModel', 'Master.AyohaEnterprisesUserStatusModel',
    'Master.AyohaEnterprisesUserTypeModel', 'StampCampaignEnterprises.StampCampaignEnterprisesModel', 'StampCampaignStamper.StampCampaignStamperModel', 'Advertisement.AdvertisementModel',
    'Advertisement.AdvertisementImagesModel', 'Advertisement.AdvertisementVideoModel', 'Advertisement.AdvertisementAudioModel', 'Master.AdvertisementTypeModel', 'Master.ModuleModel', 'AdvertisementLinkModule.AdvertisementLinkModuleModel',
    'Advertisement.AdvertisementDashboardCountModel', 'Master.AdvertisementApprovalStatusModel', 'AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogModel', 'AyohaUserProfile.AyohaUserProfileModel',
    'AyohaUserStampCard.AyohaUserStampCardModel', 'TemporaryStampQrCode.TemporaryStampQrCodeModel', 'LoyaltyStamp.LoyaltyStampCheckQRCodeModel', 'Master.MembershipCardPaymentCycleModel',
    'MembershipCardManagement.MembershipCardManagementModel', 'MembershipCard.MembershipCardModel', 'MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel', 'MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledModel',
    'MasterMemberships.MasterMembershipsModel', 'MembershipCard.AyohaUserMembershipCardModel', 'Memberships.MembershipsModel', 'Master.PaymentMethodModel', 'MasterMemberships.MasterMembershipsDashboardApprovalStatusCountModel',
    'DashboardMerchant.DashboardMerchantModel', 'PointCampaign.PointCampaignModel', 'PointCampaignPointer.PointCampaignPointerModel', 'PointCampaignRedeemItemSetting.PointCampaignRedeemItemSettingModel', 'MembershipCardTerms.MembershipCardTermsModel',
    'StampCampaignRubberStamp.StampCampaignRubberStampModel', 'MembershipCardCampaingEntitled.MembershipCardMerchantCampaingEntitledModel', 'LoyaltyPoint.LoyaltyPointModel', 'LoyaltyPoint.LoyaltyPointDashboardAyohaUserLatestPointModel', 'LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryModel',
    'Master.RedeemApprovalStatusModel', 'MasterMemberships.MasterMembershipsVerifiedSubscriberModel', 'AyohaNotificationMaster.AyohaNotificationMasterModel', 'AyohaNotification.AyohaNotificationModel', 'RecipientSpecificMember.RecipientSpecificMemberModel',
    'AyohaNotificationMaster.AyohaNotificationMasterPNDashboardModel', 'Master.MerchantLinkTypeModel', 'Master.BusinessModeModel', 'Memberships.MembershipsCampaignCodeModel', 'Master.YearOnlyModel', 'AyohaMerchantReview.AyohaMerchantReviewModel',
    'VisitorAnalsys.VisitorAnalsysModel', 'Advertisement.AdvertisementloadMediaAyohaUserDashboardModel', 'Enterprises.EnterpriseContactUsLinkModel', 'Enterprises.EnterprisesAyohaMerchantsModel', 'AyohaStoreCart.AyohaStoreCartModel', 'AyohaStoreCart.AyohaStoreCartStatusModel',
    'AyohaStoreLikeStatus.AyohaStoreLikeStatusModel', 'AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageModel', 'AyohaStoreSaleItem.AyohaStoreSaleItemImgExtendModel', 'AyohaStoreSaleItem.AyohaStoreSaleItemModel', 'LoyaltyPoint.LoyaltyPointSendPointHistoryModel',
    'AyohaStoreSaleItem.AyohaStoreSaleItemMerchantUsedModel', 'AyohaStoreSaleItem.AyohaStoreSaleItemProductCategoryModel', 'MembershipCard.MembershipCardMerchantUsedModel', 'Master.ChargeTypeModel', 'Master.FreeConditionDeliveryChargeModel',
    'ChargeDeliverySetting.ChargeDeliverySettingModel', 'AyohaStoreSaleItemImgExtend.AyohaStoreSaleItemImgExtendModel', 'AyohaHotMerchant.AyohaHotMerchantModel', 'AyohaStoreOrder.AyohaStoreOrderCheckOutModel', 'AyohaStoreOrder.AyohaStoreOrderModel',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherHistoryModel', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel', 'AyohaeWalletTransaction.AyohaeWalletTransactionModel', 'AyohaeWallet.AyohaeWalletModel',
    'Master.BankAccountTypeModel', 'AyohaNotification.AyohaNotificationMasterEnterprisesModel', 'Master.MalaysiaPostcodeModel', 'EnterprisesOnline.EnterprisesOnlineStoreModel','LoyaltyPointRedeemPrizeHistoryLog.LoyaltyPointRedeemPrizeHistoryLogModel',
'VIEWRedemptionList.VIEWRedemptionListModel','Master.RedemptionApprovalStatusModel','Memberships.MembershipsMemberDetailsModel','DiscountCampaign.DiscountCampaignModel','AyohaRewardVoucher.AyohaRewardVoucherModel','AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherReceipients',
'AyohaRewardContest.AyohaRewardContestModel','AyohaRewardContest.AyohaRewardContest_SelfieAndWinModel','AyohaRewardEvent.AyohaRewardEventModel','AyohaRewardEvent.AyohaRewardEvent_RespondModel','AyohaRewardEvent.AyohaRewardEvent_EventTypeModel','Memberships.MembershipsBirthDayModel','Memberships.MembershipsLatestActivityModel',
'AyohaMerchantInfoMembershipLoyaltyProgram.AyohaMerchantInfoMembershipLoyaltyProgramModel','Enterprises.AyohaMerchantPageMediaHeaderModel','Master.refMembershipStatusModel','Memberships.MembershipsPageDetailsModel','AyohaNotification.AyohaNotificationHistoryModel',
'AyohaStorePayment.AyohaStorePaymentModel','Memberships.MembershipsTopFiveLatestActivityModel','DashboardMerchant.AyohaStoreDashboardModel','AyohaStoreCart.AyohaStoreCartNewCartModel','Memberships.MembershipsSearchModel'],

    stores: ['AyohaMerchantReview.AyohaMerchantReviewLoadByEnterpriseAccNoStore', 'AyohaMerchantReview.AyohaMerchantReviewTopTwoLoadByEnterpriseAccNoStore', 'Enterprise.EnterprisegetAllStore', 'Enterprise.EnterprisegetDetailsStore', 'Customer.CustomerStore', 'Receipt.FlatBillGetByIcStore', 'Receipt.FlatBillDetailByBillIDStore',
     'CloudReceiptsMobileUser.CR_MobileUserVerifyRegistrationEmailIDStore', 'CloudReceiptsMobileUser.CR_MobileUserVerifyRegistrationMyKadNoStore',
    'CloudReceiptsMobileUser.CR_MobileUserVerifyRegistrationUserNameStore', 'CloudReceiptsMobileUser.CR_MobileUserInsertUser',
    'CloudReceiptsMobileUser.CR_MobileUserGetVerifyStringStore', 'CloudReceiptsMobileUser.CR_MobileUserVerifiedUser', 'CloudReceiptsMobileUser.CR_MobileUserLoadUser',
    'CloudReceiptsMobileUser.CR_MobileUserLoadMyKadNoStore', 'Notifications.NotificationsStore', 'Notifications.NotificationTypeNStore', 'Notifications.NotificationTypeNAllStore',
    'Receipt.FlatBillSearchCReceiptStore', 'EnterpriseSubscriber.EnterpriseSubscribergetBySubcriberAccNoStore', 'ReceiptTemplate.ReceiptTemplateGetByEnterpriseAccNo',
    'ReceiptTemplate.ReceiptTemplateGetByTemplateCode', 'Notifications.NotificationsCountTypeNNStore', 'Notifications.NotificationsCountTypeRStore', 'Receipt.ReceiptCountByCategoryGetByIcStore',
    'EnterpriseSubscriber.EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore', 'CloudReceiptsMobileUser.CR_MobileUserGetRegeneratedPwd',
    'RedeemItem.RedeemItemgetByEnterpriseAccNoStore', 'LoyaltyStamp.LoyaltyStampLoadByEnterpriseAccNoStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore',
    'LoyaltyStamp.LoyaltyStampLoadByStampedByUserAccNoAndEnterpriseAccNoStore', 'Subscriber.SubscriberLoadByEnterpriseAccountNoStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore'
    , 'StampCampaign.StampCampaignLoadByEnterpriseAccNoStore', 'StampCampaign.StampCampaignLoadByStampCampaignCodeStore', 'StampCard.StampCardLoadByStampCampaignCodeEnterpriseAccNoStore',
    'StampContentDefaultTemplate.StampContentDefaultTemplateResetByIDStore', 'StampCard.StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore', 'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore',
    'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore', 'AyohaEnterpriseAccount.AyohaEnterprisesUserLoginStore',
    'Master.BusinessTypeLoadStore', 'Master.EnterprisesBranchTypeStore', 'Enterprises.EnterprisesLoadByEnterpriseAccNoStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserLoginStore',
    'Master.AyohaEnterprisesUserTypeLoadStore', 'Master.AyohaEnterprisesUserStatusLoadStore', 'Enterprises.EnterprisesLoadByEnterpriseHQAccNoStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore',
    'AyohaEnterprisesUser.AyohaEnterprisesUserLoadByAccountNoStore', 'StampCampaignEnterprises.StampCampaignEnterprisesLoadByEnterpriseAccNoStore', 'StampCampaignEnterprises.StampCampaignEnterprisesLoadByStampCampaignCodeStore',
    'StampCampaignStamper.StampCampaignStamperLoadByStampCampaignCodeStore', 'Advertisement.AdvertisementloadByEnterpriseHQAccNoStore', 'Advertisement.AdvertisementloadByApprovedAdvertisementStartDateEndDateStore',
    'Advertisement.AdvertisementAudioloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementVideoloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore',
    'Master.AdvertisementTypeLoadAllStore', 'Master.ModuleloadMasterStore', 'AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementDashboardCountByEnterpriseHQAccNoStore',
    'Master.AdvertisementApprovalStatusLoadMasterStore', 'AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogLoadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementloadMediaStore', 'Advertisement.AdvertisementloadMediaPreviewStore',
    'Enterprises.EnterprisesContactUsLinkStore', 'Advertisement.AdvertisementloadMediaAdvertisementVIAStore', 'Advertisement.AdvertisementloadStandardStore', 'Advertisement.AdvertisementloadHotSeatStore', 'Advertisement.AdvertisementloadFloatingStore', 'Advertisement.AdvertisementloadMediaAyohaUserDashboardStore', 'AyohaUserProfile.AyohaUserProfileLoginStore',
    'AyohaUserProfile.AyohaUserProfileLoadProfileStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoStore', 'AyohaUserStampCard.AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore', 'AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore',
    'TemporaryStampQrCode.TemporaryStampQrCodeGenerateTempQrCodeStore', 'AyohaUserStampCard.AyohaUserStampCardLoadByStampCardCodeStore', 'AyohaUserStampCard.AyohaUserStampCardCheckStampedStatusStore',
    'LoyaltyStamp.LoyaltyStampCheckExistingStampQrCodeStore', 'Master.MembershipCardPaymentCycleLoadStore', 'MembershipCardManagement.MembershipCardLoadByEnterpriseAccNoStore', 'MembershipCard.MembershipCardLoadByEnterpriseAccNoMerchantVersionStore',
    'MembershipCardCampaingEntitled.MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore', 'MembershipCardCampaingEntitled.MembershipCardCampaingEntitledLoadByMembershipCardCodeStore', 'MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserCheckUserNameStore',
    'MasterMemberships.MasterMembershipsLoadByEnterpriseAccNoStore', 'MembershipCard.MembershipCardLoadByEnterpriseAccNoStore', 'MembershipCard.MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore', 'MembershipCard.MembershipCardAyohaUserMembershipCardStore',
    'Memberships.MembershipsLoadBySubscriberAccNoStore', 'Master.PaymentMethodloadAllStore', 'MasterMemberships.MasterMembershipsDashboardApprovalStatusCountStore', 'DashboardMerchant.DashboardMerchantMainStore', 'PointCampaign.PointCampaignLoadByEnterpriseAccNoStore',
    'PointCampaignPointer.PointCampaignPointerLoadByPointCampaignCodeStore', 'PointCampaignRedeemItemSetting.PointCampaignRedeemLoadByPointCampaignCodeStore', 'MembershipCardTerms.MembershipCardTermsLoadByMembershipCardCodeStore',
    'StampCampaignRubberStamp.StampCampaignRubberStampLoadByStampCampaignCodeStore', 'PointCampaign.PointCampaignLoadByPointCampaignCodeStore', 'LoyaltyPoint.LoyaltyPointLoadByPointCampaignCodeStore', 'LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore',
    'Master.RedeemApprovalStatusLoadStore', 'MasterMemberships.MasterMembershipsVerifiedSubscriberStore', 'AyohaUserProfile.AyohaUserProfileLoadForPointCampaignStore', 'AyohaUserProfile.AyohaUserProfileLoadByEnterpriseAccNoStore',
    'AyohaNotificationMaster.AyohaNotificationMasterLoadByEnterpriseAccNoStore', 'AyohaNotification.AyohaNotificationLoadByNotificationCodeStore', 'RecipientSpecificMember.RecipientSpecificMemberLoadByNotificationCodeStore', 'AyohaNotificationMaster.AyohaNotificationMasterRecentlyUsedStore',
    'AyohaNotificationMaster.AyohaNotificationMasterPNDashboardStore', 'Master.MerchantLinkTypeloadStore', 'Master.BusinessModeloadStore', 'Memberships.MembershipsLoadByCampaignCodeStore', 'LoyaltyPoint.LoyaltyPointLoadByEnterpriseAccNoStore',
    'Master.YearOnlyStore', 'VisitorAnalsys.VisitorAnalsysLoadDetailsStore', 'Enterprises.EnterprisesLoadByMerchantCategoryStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemImgExtendloadByItemCodeStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore',
    'AyohaStoreSaleItem.AyohaStoreSaleItemloadItemCategoryStore', 'AyohaStoreLikeStatus.AyohaStoreLoadLikeStatusStore', 'AyohaStoreCart.AyohaStoreCartLoadItemCartStatusStore', 'AyohaStoreCart.AyohaStoreCartLoadCartAyohaStore',
    'LoyaltyPoint.LoyaltyPointDashboardAyohaUserLatestPointStore', 'LoyaltyPoint.LoyaltyPointLoadByPointCampaignCodeUserStore', 'AyohaStoreMerchant.AyohaStoreSaleItemloadByEnterpriseAccNoStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemProductCategoryLoadByEnterpriseAccNoStore',
    'AyohaStoreSaleItem.AyohaStore_SaleItemloadByEnterpriseAccNoItemCategoryMerchantUsedStore', 'MembershipCard.MembershipCardLoadByEnterpriseAccNoAndMembershipCardCodeMerchantUsedStore',
    'MembershipCard.MembershipCardLoadByEnterpriseAccNoAMerchantUsedStore', 'Master.FreeConditionDeliveryChargeStore', 'Master.ChargeTypeStore', 'ChargeDeliverySetting.ChargeDeliverySettingLoadByEnterpriseAccNoStore', 'AyohaStoreSaleItemImgExtend.AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore',
    'StampCampaign.StampCampaignDashboardAyohaUserLatestStampStore', 'AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantCodeStore', 'AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusStore', 'AyohaStoreOrder.AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore',
    'AyohaStoreOrder.AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore', 'AyohaStoreOrder.AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore', 'AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoAyohaStoreVoucherHistoryStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardVoucherHistoryStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore', 'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore',
    'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore', 'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoDebitCreditStore', 'AyohaeWallet.AyohaeWalletAccountSettingStore', 'AyohaUserProfile.AyohaUserProfileLoadByPhoneNoStore',
    'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore', 'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore',
    'Master.BankAccountTypeStore', 'AyohaeWallet.AyohaeWalletAccountRequestCashOutStore', 'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesStore', 'AyohaNotification.AyohaNotificationLoadByNotificationCodeStore', 'AyohaNotification.AyohaNotificationLoadBySubscriberAccNoStore',
    'AyohaNotificationMasterEnterprises.AyohaNotificationMasterEnterprisesLoadByEnterpriseAccNoStore', 'Master.MalaysiaPostcodeLoadByPoscodeStateCodeStore', 'Master.MalaysiaPostcodestatesLoadStore',
    'EnterprisesOnline.EnterprisesOnlineStoreLoadByEnterpriseAccNoExcludeAyohaStore', 'Master.OnlineStoreList','LoyaltyPointRedeemPrizeHistoryLog.LoyaltyPointRedeemPrizeHistoryLogLoadStore',
'VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoStore','VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore','VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore',
'Master.RedemptionApprovalStatusStore','VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore','AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusAndSubscriberAccNoMerchantStore',
'DiscountCampaign.DiscountCampaignLoadByEnterpriseAccNoStore','AyohaRewardVoucher.AyohaRewardVoucherLoadByEnterpriseAccNoStore','RecipientSpecificMember.RecipientSpecificMemberLoadByVoucherCodeStore','AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore',
'AyohaUserProfile.AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore','AyohaRewardContest.AyohaRewardContestLoadByEnterpriseAccNoStore','AyohaRewardContest.AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoStore',
'AyohaRewardContest.AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore','AyohaRewardEvent.AyohaRewardEventLoadByEnterpriseAccNoStore','AyohaRewardEvent.AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore',
'AyohaRewardEvent.AyohaRewardEvent_EventTypeStore','AyohaRewardContest.AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore','AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore','AyohaRewardEvent.AyohaRewardEventLoadBySubscriberAccNoAndEventCodeStore','Memberships.MembershipsLoadByBirthDayStore','Memberships.MembershipsLatestActivityLoadByEnterpriseAccNoStore',
'VIEWRedemptionList.VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearTop3Store','AyohaMerchantInfoMembershipLoyaltyProgram.AyohaMerchantInfoMembershipLoyaltyProgramStore','Memberships.MembershipsApprovalLoadByEnterpriseAccNoStore','Master.refMembershipStatusStore','Memberships.MembershipsLatestActivityLoadByEnterpriseAccNoSubscriberAccNoStore',
'AyohaNotification.AyohaNotificationLoadBySubscriberAccNoEnterpriseAccNoStore','AyohaNotification.AyohaNotificationLoadByEnterpriseAccNoStore','Memberships.MembershipsLoadByEnterpriseAccNoApprovalListStore','AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus_OrderHistoryMerchantStore','AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore',
'AyohaStorePayment.AyohaStorePaymentLoadByEnterpriseAccNoPaymentHistoryMerchantStore','Memberships.MembershipsTopFiveLatestActivityLoadByEnterpriseAccNoStore','DashboardMerchant.AyohaStoreDashboardSaleInfoTopProductMerchantStore','AyohaStoreCart.AyohaStoreCartNewCartMerchantStore','Memberships.MembershipsLoadByEnterpriseAccNoSearchMembershipStore',
'AyohaRewardContest.AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore','AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMemberDetailsPageStore','AyohaRewardEvent.AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore',
'AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderNoMerchantStore','MasterMemberships.MembershipsLoadByEnterpriseAccNoAndApprovalStatusStore'],

    views: [
         //' 'LoginAyohaUser', 'Config.Configs', 'Main', 'Login', 'Receipt.SummaryReceipt', 'Menu.DrawerMenu', 'Menu.StatusMenus', 'Menu.StatusDetailReceiptMenu', 'Menu.SearchResultReceiptMenu',
     'Enterprise.EnterpriseList', 'Config.Configs', 'Main', 'Receipt.SummaryReceipt', 'Menu.DrawerMenu', 'Menu.StatusMenus', 'Menu.StatusDetailReceiptMenu', 'Menu.SearchResultReceiptMenu',
         'Receipt.DetailReceipt', 'Receipt.LoadingPanel', 'MyAccount.AccountInfo', 'Registrations', 'Dashboard.Dashboards',
        'FloatPanel.LoadingRegistration', 'FloatPanel.LoadingVerifyCode', 'FloatPanel.LoadingCustomMsg', 'FloatPanel.LoadingToastMsg',
        'FloatPanel.LoadingReconfirmPwdPanel', 'FloatPanel.ReceiptSearchResultCriteria', 'Notification.NotificationsPanel', 'Notification.NotificationSummary', 'Route', 'Receipt.FilterReceipt',
    'Receipt.SearchResultReceipt', 'Enterprise.EnterpriseDetails', 'MyAccount.EnterpriseSubscribed', 'Receipt.ReceiptTemplate', 'Menu.ReceiptCategoryMenu',
    'FloatPanel.ReceiptStatusCategoryPanel', 'Menu.DetailReceiptMenu', 'Menu.DetailReceiptMenuPanel','MyAccount.Dashboard',
    'Notification.NotificationsPanelIndividual', 'Print.SingleReceipt', 'FloatPanel.SearchReceiptsFilterEnterprisePanel', 'FloatPanel.AboutPanel', 'FloatPanel.ForgotPasswordPanel',
    'FloatPanel.TestRoutePanel', 'FloatPanel.NotificationIndividualPanel', 'Config.JqueryQRcode', 'Config.QRcode',
     //'LoyaltyCard.LoyaltyCardStamp', 'LoyaltyCard.LoyaltyCardPoint', 'LoyaltyCard.LoyaltyCardRedeemList', 'Enterprise.ScanQrCode', 'LoyaltyCard.FloatLoyaltyCardPoint', 'LoyaltyCard.FloatLoyaltyCardStamp',
    'LoyaltyCard.LoyaltyCardRedeemList', 'Enterprise.ScanQrCode', 'LoyaltyCard.FloatLoyaltyCardPoint', 'LoyaltyCard.FloatLoyaltyCardStamp',
    'Subscriber.FloatPanel_SubscriberList', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_DotMenuItem', 'Subscriber.FloatPanel_SubscriberAddNewQrCode', 'Subscriber.FloatPanel_SubscriberMenu',
    'Subscriber.Subscriber_FloatLoyaltyCardStamp', 'Subscriber.FloatPanel_SubscriberMaster', 'AyohaCardManagement.FloatPanel_AyohaCardManagement', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCard',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCardForm', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCard', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCardContent', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard_ContentNote', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCardBackgroundImg',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCardBackgroundImg', 'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount', 'Master.FloatPanel_BusinessTypeList', 'Master.FloatPanel_EnterprisesBranchTypeList',
    'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword', 'Master.FloatPanel_EnterprisesUserTypeList', 'Master.FloatPanel_EnterprisesUserStatusList',
    'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails', 'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_EnterprisesList',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_UserEnterprisesList', 'Advertisement.FloatPanel_Advertisement', 'Advertisement.FloatPanel_AdvertisementSetting', 'Master.FloatPanel_AdvertisementType',
    'Advertisement.FloatPanel_AdvertisementCalendar', 'Advertisement.FloatPanel_AddEdit_AdvertisementImages', 'Master.FloatPanel_AdvertisementLinkModule', 'Master.FloatPanel_AdvertisementApprovalStatus',
    'AdvertisementApprovalStatusLog.FloatPanel_AdvertisementApprovalStatusLog', 'Advertisement.FloatPanel_PreviewAdvertisement', 'Config.PinchZoomImage', 'Registration.FloatPanel_AyohaUserRegistration',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_AdvertisementButton', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_StampQrCode','AyohaCardManagement.FloatPanel_AyohaCardManagement_StampSuccesAnimation',
    'QrCodeScanner.FloatPanel_QrCodeScanner_ScanLoyaltyStampCard', 'QrCodeScanner.FloatPanel_QrCodeScanner_CenterLineMessage', 'QrCodeScanner.Scan_QRCode_StampCard_Process', 'QrCodeScanner.FloatPanel_QrCodeScanner_StampSuccessAnimation',
    'MembershipCardManagement.FloatPanel_MembershipCardManagement', 'MembershipCardManagement.FloatPanel_MembershipCardManagement_EditCard', 'Master.FloatPanel_MembershipCardPaymentCycle',
    'MembershipCardManagement.FloatPanel_MembershipCardManagement_AddCard', 'MembershipCardManagement.FloatPanel_MembershipCardManagement_NewCardAdd', 'Registration.FloatPanel_MerchantUserRegistration',
    'Registration.FloatPanel_MerchantEnterpriseRegistration', 'Subscriber.FloatPanel_MembershipCardList', 'Subscriber.FloatPanel_MembershipDetails', 'Subscriber.FloatPanel_MembershipDetails_Approve', 'Master.FloatPanel_PaymentMethodList',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCardForm_Point', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCard_Point', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point',
    'MembershipCardManagement.FloatPanel_MembershipCardManagement_TermAndCondition', 'LoyaltyCard.FloatLoyaltyCardPoint_GeneratePoint', 'LoyaltyCard.FloatLoyaltyCardPoint_Preview', 'Redemption.FloatPanel_Redemption_UpdateStatus',
    'Master.FloatPanel_RedeemApprovalStatus', 'QrCodeScanner.Scan_QRCode_PointCard_Process', 'AyohaNotificationManagement.AyohaNotificationManagement', 'AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_Add',
    'AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_CreateMessage', 'AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_PreviewMessage', 'AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_SetRecipient',
    'AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_ViewMessage', 'AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_RecipientList', 'AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_MembersList',
    'AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_RecentlyUsed', 'Master.FloatPanel_MerchantLinkType', 'Master.FloatPanel_BusinessMode', 'PointManagement.FloatPanel_PointManagement_CreatePoints', 'PointManagement.FloatPanel_PointManagement_SearchSubscriber',
    'PointManagement.FloatPanel_PointManagement_SearchPointHistory', 'Master.FloatPanel_YearOnly', 'AyohaFloatPanel.FloatPanel_DrawerMenu_Main', 'Dashboard.VisitorAnalsys.VisitorAnalsysList', 'AyohaMerchantReview.AyohaMerchantReview', 'AyohaMerchantReview.AyohaMerchantReview_AddEdit',
    'Advertisement.FloatPanel_Advertisement_FloatAdvertisement', 'Advertisement.FloatPanel_FloatingAdvertisement', 'RewardStore.FloatPanel_RewardStore', 'RewardStore.FloatPanel_RewardStoreCategoryFilter', 'RewardStore.FloatPanel_RewardStoreMembershipCard',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_Cart', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_CartStatusList', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_FloatCart', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_ItemCategory', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_LikeStatusList',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_SaleItemDetail', 'FloatPanel.LoadingPanel','AyohaStoreSaleItem.FloatPanel_AyohaStoreMerchant_AddEditItem', 'AyohaStoreSaleItem.FloatPanel_AyohaStoreMerchant_ProductList',
    'Config.UploadImageProcess', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_AddNewItemCategory', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardBeingUsed', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardUsed',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardEntitled', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_SearchProduct', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_StockList', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_StockList',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_StockEdit', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryCharge', 'Master.FloatPanel_FreeConditionDeliveryCharge', 'Master.FloatPanel_ChargeType', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryChargeList',
    'Master.FloatPanel_DialogBox', 'AyohaStoreSaleItem.FloatPanel_AyohaStoreMerchant_EditProductImage', 'Advertisement.FloatPanel_Advertisement_MerchantHotVideoLinkUpload', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistory',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_CheckOut', 'AyohaRewardVoucher.FloatPanel_AyohaReward_MerchantReward_VoucherListUsed', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherDetail', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaRewardHome',
    'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaStore', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_Dashboard',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderRespond', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderDetail', 'AyohaeWallet.FloatPanel_AyohaeWallet','AyohaeWallet.FloatPanel_AyohaeWallet_TransactionHistory', 'AyohaeWallet.FloatPanel_AyohaeWallet_TransactionIncomeSpent', 'AyohaeWallet.FloatPanel_AyohaeWallet_Setting', 'AyohaeWallet.FloatPanel_AyohaeWallet_Passcode', 'AyohaeWallet.FloatPanel_AyohaeWallet_Transfer',
        'AyohaeWallet.FloatPanel_AyohaeWallet_Transaction_Detail', 'AyohaeWallet.FloatPanel_AyohaeWallet_TransferConfirm', 'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_Upgrade', 'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_Payment',
    'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_AyohaPointCollectedAnim', 'AyohaeWallet.FloatPanel_AyohaeWallet_CashOut', 'AyohaeWallet.FloatPanel_AyohaeWallet_CashOutConfirm',
    'Master.FloatPanel_BankAccountName', 'Master.FloatPanel_BankAccountType', 'AyohaNotification.FloatPanel_AyohaNotification', 'AyohaNotification.FloatPanel_AyohaNotification_Notification', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_CampaignTemplate',
    'Master.FloatPanel_State', 'Master.FloatPanel_State_City', 'AyohaOtherOnlineStore.FloatPanel_AyohaOtherOnlineStore', 'AyohaOtherOnlineStore.FloatPanel_AyohaOtherOnlineStoreDetail', 'Master.FloatPanel_OnlineStoreList', 'Master.FloatPanel_DialogBoxDelete',
'LoyaltyCard.FloatLoyaltyCardPoint_RedeemPrizeHistoryLog','VIEWRedemptionList.FloatPanel_VIEWRedeemList','Master.FloatPanel_UpdateRedeemApprovalStatus','Subscriber.FloatPanel_MembershipDetailsPage','AyohaMerchantReview.AyohaMerchantReview_Reply',
'AyohaRewardMerchantDiscountLoyalty.FloatPanel_MerchantDiscountLoyalty','AyohaRewardMerchantDiscountLoyalty.FloatPanel_MerchantDiscountLoyaltySetting','AyohaRewardMerchantDiscountLoyalty.FloatPanel_MerchantDiscountLoyaltyDescription',
'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_ListVoucher','AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_Setting','AyohaRewardVoucher.FloatPanel_AyohaRewardVoucher_VoucherRecipents','AyohaRewardVoucher.FloatPanel_AyohaRewardVoucher_SetVoucherRecipents',
'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucher_AllMembersList','AyohaRewardVoucher.FloatPanel_AyohaRewardVoucher_PreviewVoucher','AyohaContest.FloatPanel_AyohaContestList','AyohaContest.FloatPanel_AyohaContestSetting','AyohaContest.FloatPanel_AyohaContest_MembershipContestDetail',
'AyohaContest.FloatPanel_AyohaContest_ManageParticipantList','AyohaContest.FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm','AyohaContest.FloatPanel_DashboardMerchantReward_UploadedReceipt','AyohaRewardEvent.FloatPanel_AyohaRewardEventList',
'AyohaRewardEvent.FloatPanel_DashboardMerchantReward_MembershipEventDetail','AyohaRewardEvent.FloatPanel_AyohaRewardEvent_RespondList','AyohaRewardEvent.FloatPanel_AyohaRewardEventSetting','AyohaRewardEvent.FloatPanel_AyohaRewardEvent_EventType',
'AyohaContest.FloatPanel_DashboardMerchantReward_MembershipContestDetail','Login','Master.FloatPanel_MessagingOption','AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_EnterprisePage','AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_AddEditMedia',
'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_MembershipCardPage','AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview','Master.FloatPanel_MembershipApprovalStatus','Subscriber.FloatPanel_MembershipActivity','Subscriber.FloatPanel_NotificationActivity',
'Subscriber.FloatPanel_MembershipApprovalList','AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistoryListAll','AyohaStoreSaleItem.FloatPanel_AyohaStore_NewOrderList','AyohaStoreSaleItem.FloatPanel_AyohaStore_PaymentHistory','AyohaStoreSaleItem.FloatPanel_AyohaStore_CartNewList','Master.FloatPanel_OpenAccountStep','Master.FloatPanel_WizardCover0'
,'Master.FloatPanel_WizardCover1','Master.FloatPanel_WizardCover2','AyohaFloatPanel.FloatPanel_DrawerMenu_Main_stepOne','AyohaFloatPanel.FloatPanel_DrawerMenu_Main_StepTwo','AyohaFloatPanel.FloatPanel_DrawerMenu_MainCoverUp','AyohaFloatPanel.FloatPanel_DrawerMenu_Main_StepThree',
'AyohaFloatPanel.FloatPanel_DrawerMenu_Main_stepFive','AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_MembershipCardPage_Print','FloatPanel.LoginContactUsPanel','FloatPanel.SearchMembers'],
//'AyohaLogin'

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //  Ext.Viewport.add(Ext.create('ReceiptsWorld.view.MyAccount.VehicleList'));
        // Initialize the main view
       Ext.Viewport.add(Ext.create('ianMizi.view.Main'));

       // Ext.Viewport.add(Ext.create('ianMizi.view.Subscriber.SubscriberList'));


        //enablefocuslogin();

        var currentTime = new Date()
        var month = currentTime.getMonth() + 1
        var monthconvert = ConvertinputTypeMonth(month);
        var year = currentTime.getFullYear();
        var fullyM = year + '-' + monthconvert;
        // console.log(fullyM);
        document.getElementById("NotificationmonthID").value = fullyM;
        Initialnotificationdateonchange(monthconvert);
       // alert('start');





        //  TestRoutePanelShow();
        //  loadRememberMe();
        //  localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistupgrades.jpg');
        //   Ext.Viewport.add(Ext.create('ReceiptsWorld.view.Registrations'));
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

var OneSignalPlayerID
var SimInfo;
var device_model;
var device_platform;
var device_uuid;
var device_version;
var device_manufacturer;
var device_isVirtual;
var device_serial;
var deviceRawPhoneinfo;
var currIP;
var networkState;

document.addEventListener('deviceready', function () {
    enablefocuslogin();
    localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistupgrades.jpg');
    networkState = navigator.connection.type;
    routesArray.push("mainView,view,0");
    //setThemeloginpage();




  
    // Call syncHashedEmail anywhere in your app if you have the user's email.
    // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
    // window.plugins.OneSignal.syncHashedEmail(userEmail);



  























    //  networkinterface.getIPAddress(getIPcallback);
    //window.plugins.OneSignal.setLogLevel(
    //    { logLevel: 4, visualLevel: 4 }
    //    );


    //  window.plugins.sim.getSimInfo(successCallback, errorCallback);
    //window.plugins.OneSignal.getIds(successGetPlayerID(ids));

    window.plugins.OneSignal.getIds(function (ids) {
        // alert("LatestplayerID:" + ids.userId);

        // Ext.getCmp('loginuserNameTextField').setValue(ids.userId);
        Ext.getCmp('CR_OneSignalID').setValue(ids.userId);
        //var playerID = Ext.getCmp('CR_OneSignalID').getValue();


        localStorage.setItem('player_id', ids.userId);
        localStorage.setItem('device_model', device.model);

        localStorage.setItem('device_platform', device.platform);
        localStorage.setItem('device_uuid', device.uuid);

        localStorage.setItem('device_version', device.version);
        localStorage.setItem('device_manufacturer', device.manufacturer);

        localStorage.setItem('device_isVirtual', device.isVirtual);
        localStorage.setItem('device_serial', device.serial);

        window.plugins.sim.getSimInfo(successCallback, errorCallback);
        // dekat class main.js
        notificationReceivednOpensetMykad();


    });
    // device_model = device.model;
    // device_platform=device.platform;
    // device_uuid = device.uuid;
    // device_version = device.version;
    // device_manufacturer = device.manufacturer;
    // device_isVirtual = device.isVirtual;
    // device_serial = device.serial;

    displayRememberMe();
    //  alert(device_model);
    var notificationReceivedCallback = function (jsonData) {
        //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        //alert('info: ' + JSON.stringify(jsonData));

        //  Ext.getCmp('btnNotificationSummaryReceipt').setBadgeText('5');


        var month = GetCurrentMonth();
        var day = GetCurrentDay();
        var year = GetCurrentYear();
        loadSummaryReceiptFromReceivedPushNotification(GetCurrentMyKadNo(), "2", month, year, GetCurrentAccountNo(), "Status", "Y");
        countNotificationNNtypeAndRType();
    };


    var notificationOpenedCallback = function (jsonData) {
        //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        //    alert('info: ' + JSON.stringify(jsonData));


        var month = GetCurrentMonth();
        var day = GetCurrentDay();
        var year = GetCurrentYear();
        var myString = JSON.stringify(jsonData);
        var n = myString.includes("Promo/News");
        if (n) {
            loadNotificationSummary();
            //var result = myString.substring(myString.indexOf('(') + 1, myString.indexOf(')'));
            //var sillyString = result.substr(5);
            //var NotiCode = sillyString.slice(0, -1);

        } else {
            Ext.getCmp('mainView').setActiveItem(1);
            routesArray.push("mainView,view,1");
            loadSummaryReceiptFromReceivedPushNotification(GetCurrentMyKadNo(), "2", month, year, GetCurrentAccountNo(), "Status", "Y")
        }



    };
    //window.plugins.OneSignal.init('eb840aed-ded6-4a47-96d0-e3276962852b',
    //    { googleProjectNumber: '919701359018' }, notificationOpenedCallback);

    //window.plugins.OneSignal.setSubscription(true);

    // window.plugins.OneSignal.enableNotificationWhenActive(true);


    window.plugins.OneSignal
      .startInit("eb840aed-ded6-4a47-96d0-e3276962852b")
      .handleNotificationOpened(notificationOpenedCallback)
        .handleNotificationReceived(notificationReceivedCallback)
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
      .endInit();

    //  window.plugins.OneSignal
    //.startInit("YOUR_APPID")
    //.handleNotificationReceived(function (jsonData) {
    //    alert("Notification received:\n" + JSON.stringify(jsonData));
    //    console.log('Did I receive a notification: ' + JSON.stringify(jsonData));
    //})
    //.endInit();





    // Call syncHashedEmail anywhere in your app if you have the user's email.
    // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
    // window.plugins.OneSignal.syncHashedEmail("tarmizi.rahim@ianMizi.com");
}, false);


if (Ext.os.is('Android')) {
    document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);

    function onBackKeyDown(eve) {
        eve.preventDefault();

        Routes();
        //  enablefocuslogin();

    }
}




function successCallback(result) {
    // SimInfo = JSON.stringify(result);
    localStorage.setItem('SimInfo', JSON.stringify(result));

    networkinterface.getCarrierIPAddress(function (ip) {
        // alert("getCarrierIPAddress:" + ip);
        localStorage.setItem('device_ip', ip);
    });

    // With subnet and error handler
    networkinterface.getWiFiIPAddress(
        function (ip, subnet) {

            localStorage.setItem('device_ip', myip);
        },
        function (err) {

            //  localStorage.setItem('device_ip', "Err: " + err);
            localStorage.setItem('device_ip', myip);
        }
    );





    //networkinterface.getWiFiIPAddress(function (ip) { alert(ip); });
    //networkinterface.getCarrierIPAddress(function (ip) { alert(ip); });

    //networkinterface.getIPAddress(function (ip) {
    //    alert(ip);
    //    localStorage.setItem('device_ip', ip);
    //});
}

function errorCallback(error) {
    localStorage.setItem('SimInfo', JSON.stringify(error));

    networkinterface.getCarrierIPAddress(function (ip) {
        // alert("getCarrierIPAddress:" + ip);
        localStorage.setItem('device_ip', myip);
    });

    // With subnet and error handler
    networkinterface.getWiFiIPAddress(
        function (ip, subnet) {

            localStorage.setItem('device_ip', myip);
        },
        function (err) {

            localStorage.setItem('device_ip', myip);
        }
    );

    //networkinterface.getIPAddress(function (ip) {
    //    alert(ip);
    //    localStorage.setItem('device_ip', ip);
    //});
}


function getIPcallback(ip) {
    //  currIP = ip;
    alert("IP:" + ip);
}

var countTab = 0;
function ExitDoubleTap() {
    navigator.app.exitApp();
    //Ext.getCmp('mainView').setActiveItem(0);

    //if (countTab == 0)
    //{
    //    countTab++;


    //    setTimeout(function () {

    //        countTab = 0;
    //        LoadingToastMsgShow();
    //        LoadingToastMsgHide();
    //    }, 2000);
    //}else
    //{
    //    navigator.app.exitApp();
    //}

}





var ArrappRoute = [];
var ArrappRouteCheckVal = [];
var ArrappRouteisOpen = [];











function AddRoutePages(Page, val) {
    // console.log("AddRoutePages:" + Page);

    var n = ArrappRoute.includes(Page);
    if (n) {

    } else {
        // ArrappRouteCheckVal.push(Page);
        ArrappRoute.push(Page);
        ArrappRouteisOpen.push(val);

        //var m = ArrappRoute.includes("MainDashBoard");

        //console.log(m);
        //if (m) {
        //    var indexs = ArrappRoute.indexOf("MainDashBoard");
        //    if (indexs > -1) {
        //       // console.log(ArrappRouteCheckVal);
        //        console.log(ArrappRoute);
        //        console.log(ArrappRouteisOpen);


        //      //  ArrappRouteCheckVal.splice(indexs, 1);
        //        ArrappRoute.splice(indexs, 1);
        //        ArrappRouteisOpen.splice(indexs, 1);

        //       // console.log(ArrappRouteCheckVal);
        //        console.log(ArrappRoute);
        //        console.log(ArrappRouteisOpen);
        //    }
        //}


    }

    // console.log(ArrappRoute.length);

}


function RoutePages() {


    var isOpen = 'isOpen';
    var pagesRoute;
    var page;
    var ii = ArrappRoute.length - 1;
    console.log(ArrappRoute.length);
    console.log(ii);
    if (ArrappRoute.length > 0) {
        page = ArrappRoute[ii];
        page.hide(Ext.fx.Animation({
            type: 'slideOut',
            direction: 'left',
            easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250

        }));
        pagesRoute = ArrappRouteisOpen[ii];
        var name = pagesRoute;
        eval('var ' + name + '="N"');
        var indexs = ArrappRoute.indexOf(page);
        if (indexs > -1) {
            ArrappRoute.splice(indexs, 1);
        }
        var indexss = ArrappRouteisOpen.indexOf(pagesRoute);
        if (indexss > -1) {

            ArrappRouteisOpen.splice(indexss, 1);
        }
        ii--;
        if (pagesRoute == "is_FloatPanel_QrCodeScanner_ScanCampaignOpen") {
            Ext.getCmp('mainView').setHidden(false);
            FloatPanel_AyohaeWallet_IconShow();
            FloatPanel_QrCodeScanner_CenterLineMessageHide();
            window.QRScanner.destroy(function (status) {
                // alert(status);
            });
        }
        if (pagesRoute == "_FloatPanel_AyohaCardManagement_StampQrCodeisOpen") {
            StopCheckStampedStatusInterval();
        }
        if (pagesRoute == "isFloatPanel_AyohaCardManagement_PreviewCardOpen") {
            clearInterval(BackgroungImgInterval);
        }
    } else {
        //console.log(ArrappRoute.length);
        //console.log('MainMenu');

        navigator.app.exitApp();
    }

}

function RemovePages(Page, val) {

    var indexs = ArrappRoute.indexOf(Page);
    if (indexs > -1) {
        ArrappRoute.splice(indexs, 1);
    }

    var indexss = ArrappRouteisOpen.indexOf(val);
    if (indexss > -1) {
        ArrappRouteisOpen.splice(indexss, 1);
    }

}
