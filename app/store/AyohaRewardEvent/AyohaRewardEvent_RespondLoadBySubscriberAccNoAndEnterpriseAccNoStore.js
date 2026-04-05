
Ext.define('ianMizi.store.AyohaRewardEvent.AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore', {
});

var _DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRewardEvent.AyohaRewardEvent_RespondModel',
    id: '_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNo',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },

    groupDir: "DESC",
    grouper: {
        groupFn: function (record) {
            // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>',
            // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseNameUpperCase') + '<div style="display:none;">' + record.get('CampaignBatch') + '</div></th><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:26px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Campaign:' + record.get('StampCampaignNameLowerCase') + '-Batch(' + record.get('Batch') + ')</td></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Expired:' + record.get('EndDate') + '</td></tr></thead></table>'
            // return '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="border-color:#000000;border-style:none;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="border-color:#000000;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="border-color:#000000;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>'
           
       
            //return '<div style="color:white;text-align: left;font-size:15px;width:100%;">Event Name:' + record.get('EventName') + '</div>';
         
            return  '<div style="color:white; text-align: left; font-size: 15px; display: flex; align-items: center; justify-content: space-between; width: 100%;">'+
            '<span>Voucher Name: ' + record.get('EventName') + ' </span>'+
            '<div style="margin-left: 10px;font-size: 15px;color:white;font-weight:bold;cursor:pointer;"  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(`' + GetEnterpriseLogoPath() + '`,`' + GetEnterpriseName() + '`,`' + record.get('EventCoverPhoto') + '`,`' + record.get('EventName') + '`,`' + record.get('EventStartDate_Day') + '`,`' + record.get('EventStartDate_Month') + '`,`' + record.get('EventStartTime') + '`,`' + record.get('EventEndDate_Day') + '`,`' + record.get('EventEndDate_Month') + '`,`' + record.get('EventEndTime') + '`,`' + record.get('EventLocationName') + '`,`' + record.get('ModifiedWidth') + '`,`' + record.get('EventDescription') + '`,`' + record.get('EventLocationCoordinate') + '`,`' + record.get('EventUrlTicket') + '`,`' + record.get('EventCode') + '`,`' + record.get('EnterpriseAccNo') + '`,`' + record.get('RespondStatus') + '`,`' + 1+ '`)"><u>View Event</u></div>'+
        '</div>';
           
           
           
           
           
        },
        sortProperty: 'ID'
    }
});

//' + "'" + '{EnterpriseLogo}' + "'" + '

//onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow('https://setkita.com/AyohaImgCard/Logo/72666-0134292934-NoEnterprise/monsterchicken.jpg','Monster Chickens','https://setkita.com/AyohaImgCard/AyohaRewardEvent/72666-0134292934-NoEnterprise/EVM-3-5643519-/ulubendul.jpg','ulu bendul camping','4','SEP','08:07','4','OCT','01:07','ulu bendul camping site','1521','majlis ramah mesra bersama pelanggan setia monster chicken dan makan makan sambil piknik','2.7314123325624515, 102.08068217247077','','EVM-3-5643519-','72666-0134292934-NoEnterprise','RespondStatus',4);"


//OnClick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + 'GetEnterpriseLogoPath()' + "'" + ',' + "'" + GetEnterpriseName() + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID})