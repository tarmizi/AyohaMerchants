Ext.define('ianMizi.view.QrCodeScanner.Scan_QRCode_PointCard_Process', {

});


var globalScan_QRCode_VerifyQRCode_PointCampaign_SubscriberAccNo;
function Scan_QRCode_VerifyQRCode_PointCampaign(QrCode) {
    //var TempStampQRCode = GetCurrStampCardQrCode();

    Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHtml('<div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;">Processing...</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">Verify QR Code:' + QrCode + '</div>');
  
    var val = QrCode.split("|");
   
    globalScan_QRCode_VerifyQRCode_PointCampaign_SubscriberAccNo=val[0];
    Ext.getStore('MasterMembershipsVerifiedSubscriberStore').getProxy().setExtraParams({
        SubscriberAccNo: val[0],
        EnterpriseAccNo: GetEnterpriseAccNo()
    });

    Ext.StoreMgr.get('MasterMembershipsVerifiedSubscriberStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('MasterMembershipsVerifiedSubscriberStore').getProxy().setExtraParams({
            SubscriberAccNo: val[0],
            EnterpriseAccNo: GetEnterpriseAccNo()
        });

        Ext.StoreMgr.get('MasterMembershipsVerifiedSubscriberStore').load();
        var myStore = Ext.getStore('MasterMembershipsVerifiedSubscriberStore');
        count = myStore.getCount();

        if (count >= 1) {
            Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHtml('<div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;">Processing....</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">QR Code:' + QrCode + ' IS VALID !</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">Verify QR CODE Pass!</div>');
            var modelRecord = myStore.getAt(0);
            var ApprovalStatus = modelRecord.get('MembershipApprovalStatus');
            if (ApprovalStatus == "REQUEST") {
                Swal.fire(
  'Membership Info',
  'Membership still not Approved!!',
  'warning'
);
                Scan_QRCode_AyohaUserProfileLoadForPointCampaignStore(QrCode);
            }
            if (ApprovalStatus == "REJECTED") {
                Swal.fire(
'Membership Info',
'Membership have been rejected!!',
'warning'
);
            }
            if (ApprovalStatus == "APPROVED") {
                Scan_QRCode_AyohaUserProfileLoadForPointCampaignStore(QrCode);
               
            }
           
            FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide();
            return;

        } else {

            Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHtml('<div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;">Processing....</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">QR Code:' + QrCode + ' NOT VALID !</div><br><div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;margin:-20px 0px 0px 0px">QR Code Already Exist !<img src="resources/icons/errorklipklip.gif" style="width:22px;height:22px;margin:0px 0px 0px 6px;"></div>');
           
            swalFireFail('Stamped Fail !!');
            
            //Scan_QRCode_StampCard(QrCode)

        }
    });
    task.delay(500);

}








var globalScan_QRCode_VerifyQRCode_PointCampaign_PointCampaignCode;
function Scan_QRCode_AyohaUserProfileLoadForPointCampaignStore(QrCode) {
    //var TempStampQRCode = GetCurrStampCardQrCode();

  
    var val = QrCode.split("|");
    localStorage.setItem('PointCampaignCode', val[1]);
    localStorage.setItem('AyohaUserPointCampaignCode', val[1]);
    globalScan_QRCode_VerifyQRCode_PointCampaign_PointCampaignCode=val[1];
    Ext.getStore('AyohaUserProfileLoadForPointCampaignStore').getProxy().setExtraParams({
        AccountNo: val[0],
        PointCampaignCode: val[1]
    });

    Ext.StoreMgr.get('AyohaUserProfileLoadForPointCampaignStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserProfileLoadForPointCampaignStore').getProxy().setExtraParams({
            AccountNo: val[0],
            PointCampaignCode: val[1]
        });

        Ext.StoreMgr.get('AyohaUserProfileLoadForPointCampaignStore').load();
        var myStore = Ext.getStore('AyohaUserProfileLoadForPointCampaignStore');
        count = myStore.getCount();

        if (count >= 1) {
          
            var modelRecord = myStore.getAt(0);
            var Photo = modelRecord.get('Photo');
            var AccountName = modelRecord.get('AccountName');
            var AccountNo = modelRecord.get('AccountNo');
            var PointAmountEquation = modelRecord.get('PointAmountEquation');
            var RequiredReceiptBillNo = modelRecord.get('RequiredReceiptBillNo');
            localStorage.setItem('AyohaUserAccountNo', AccountNo);
            localStorage.setItem('AyohaUserPicProfile', Photo);
            localStorage.setItem('AyohaUserAccountNames', AccountName);

            var modifiedAccountNo = AccountNo.split("-");
            localStorage.setItem('AyohaUserMembershipNo', modifiedAccountNo[1]);
            globalRequiredReceiptBillNo = RequiredReceiptBillNo;
            globalPointAmountEquation = PointAmountEquation;
            FloatLoyaltyCardPoint_GeneratePointShow();
           
            return;

        } else {

           

            swalFireFail('Point Fail !!');

            //Scan_QRCode_StampCard(QrCode)

        }
    });
    task.delay(800);

}


