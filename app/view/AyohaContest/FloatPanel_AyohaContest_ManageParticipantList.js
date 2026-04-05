Ext.define('ianMizi.view.AyohaContest.FloatPanel_AyohaContest_ManageParticipantList', {

});


var _FloatPanel_AyohaContest_ManageParticipantList;


var isFloatPanel_AyohaContest_ManageParticipantListOpen = 'N';



var _FloatPanel_AyohaContest_ManageParticipantList_isFirstLoad = "N";



var arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal=[];



function FloatPanel_AyohaContest_ManageParticipantList() {

    _FloatPanel_AyohaContest_ManageParticipantList =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaContest_ManageParticipantListID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 100,

         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: true,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



         items: [




             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 style: "background-color: transparent;",
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                     type: 'fit',

                 },
                 items: [
                       {
                           xtype: 'container',
                           width: '100%',

                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'

                           },
                           items: [

                               /////

                               {

                                   xtype: 'container',
                                   width: '100%',
                                   height: 60,
                                   // width: 40,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaContest_ManageParticipantListHeader',
                                   style:GetHeaderStyle(),
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                                   // hidden:true,
                                   items:
                                          [
                                              {
                                                  xtype: 'spacer',
                                                  //height: 30,
                                                  width: 20,

                                              },

                                              {
                                                margin: '0 0 0 0',
                                                id: 'htmlFloatPanel_AyohaContest_ManageParticipantListTitleTxt',
                                                html: '<font size=4 color=black><b>Contest Participant List</b></font>'
                                            },

                                                         
 {
    xtype: 'spacer',
    width:20
},
{
    xtype: 'container',
    width: 1,
    height: '60%',
    style: ' background-color: #ccc;',
},
{
    xtype: 'spacer',
    width:10
},

{
xtype: 'button',
margin: '1 0 0 0',
height: 40,
width: 40,
id:'btnFloatPanel_AyohaContest_ManageParticipantList_SearchIcon',
html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
ui: 'plain',
handler: function () {
}
},
{
    id:'htmlFloatPanel_AyohaContest_ManageParticipantList_SearchTextBox',
html:'<div class="search-container">'+
'<input type="text" id="input-FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxt"  placeHolder="Search (Name)" class="search-input" >'+
'</div>'
},
              {
                  xtype: 'spacer',

              },

               


              {
                xtype: 'container',
                width: 1,
                height: '60%',
                style: ' background-color: #ccc;',
            },

            {
                xtype: 'spacer',
                width:10
            }, 

                                                          {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaContest_ManageParticipantListBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaContest_ManageParticipantList.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                   // direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaContest_ManageParticipantListOpen = 'N';
                                                                _FloatPanel_AyohaContest_ManageParticipantList_isFirstLoad = "N";
                                                               
                                                            }
                                                        },
                                                         {
                                                             xtype: 'button',
                                                             hidden:true,
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_AyohaContest_ManageParticipantList_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaContest_ManageParticipantList.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaContest_ManageParticipantListOpen = 'N';
                                                                 _FloatPanel_AyohaContest_ManageParticipantList_isFirstLoad = "N";

                                                             }
                                                         },




                                                         {
                                                             xtype: 'spacer',
                                                             height: 30,
                                                             width: 7,

                                                         },





                                          ]

                               },



                               ///////////







                               {
                                   xtype: 'container',
                                   // docked: 'top',
                                   // hidden:true,
                                   //  margin: '0 0 0 0',
                                   //  docked: 'bottom',
                                   style: 'background-color: transparent;',
                                   id: 'containerFloatPanel_AyohaContest_ManageParticipantList',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                   zIndex: 90,
                                   //height:200,
                                   // autoHeight:true,
                                   // height: '100%',
                                   // flex:1,
                                   //  maxHeight:'100%',
                                   //height:'63%',
                                   width: '100%',
                                  // margin: '20 0 0 0',

                                   layout: {

                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'
                                   },


                                   items: [




                                     
{
                                                xtype: 'panel',
                                                width: '100%',
                                             //   hidden: true,
                                                id:'panelHeaderParticipantstListContentID',
                                                style: 'background-color: transparent;',
                                               // style: 'background-color:black; color: floralwhite;',
                                                //height: 50,
                                                items: [
                                                    {
                                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:2.5%"><span style="padding:0px 13px"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial;">Members Name</div ><div style="float:left;width:15%;"><b>Submitted Date</b></div><div style="float:left;width:10%;"><b>Status</b></div><div style="float:left;width:7%;"><b>is Winner?</b></div><div style="float:left;width:9%;"><b>Ranking</b></div><div style="float:left;width:17%;"><b>Note</b></div><div style="float:left;width:10%;"><b>Checked By</b></div></div></div></div>'
                                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:6.2%;"><span style="padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:16.5%;padding:0px 0px"><b>Messaging Tool</b></div ><div style="float:left;width:57.5%;"><b>Message</b></div><div style="float:left;width:7.5%;"><b>IsRead</b></div><div style="float:left;width:10.3%;"><b>DateTime</b></div></div></div></div>'
                                                        //html: '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><b><div style="float:left;width:68%"><span style="font-family: Arial;"></br>&emsp;&nbsp;Name</div ><div style="float:left;width:10%"><b></br>&emsp;&nbsp;Age</b></div><div style="float:left;width:22%"></br>&emsp;&nbsp;Mobile Phone&nbsp;</div></b></div>',
                  
                                                    }
                                                ]
                                            },


                                            {
                                                xtype: 'container',
                                                width: '100%',
                                                height: '95%',
                                                margin: '0 0 0 0',
                                               // id: 'FloatPanel_VIEWRedemptionListListContentID',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'
              
                                                },
                                                style: 'background-color:transparent',
              
                                                items: [
                                                    {
                                                        xtype: 'list',
                                                        width: '100%',   
                                                        height: '100%',
                                                        hidden:true,                                      
                                                        //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore,
                                                        store: _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore,
                                                        id: 'FloatPanel_AyohaContest_ManageParticipantListListID',
                                                        mode: 'SINGLE',
                                                       // grouped: true,
                                                        disableSelection: true,
                                                        scrollable: {
                                                            direction: 'vertical',
                                                            indicators: {
                                                                y: {
                                                                    autoHide: true
                                                                },
                                                                x: {
                                                                    autoHide: true
                                                                }
                                                            }
                                                        },
                                                        style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                        itemTpl: '<div class="myContent">' +
              
              
                                                        // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +
                                                     //ori '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="float:left;width:5%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{No}</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:14%"><b>{NotificationCode}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:35%">{NotificationTitle}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:10%">{PublishBy}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:20%">{PublishedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{Audience}</div><div style="float:left;width:25%"><button class="buttonss button15" OnClick="loadViewNotifactionDetails({ID})">View Notification</button></div></div>' +
                                                       //'<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="float:left;width:2%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{RowNumber}.</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:16.5%;color:blue;cursor: pointer;"><u>{RedeemBy}</u><br><div style="margin:-5px 0px 0px 0px;color:blue"><u>{ModifiedRedeemHistoryStatusBy}</u></div></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{RedeemHistoryStatusDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:12%">{ModifiedRedeemInfo}</div><div style="float:left;width:12%">{ModifiedRedeemPrizeImage}<br><div style="margin:-7px 0px 0px 0px"><b>{RedeemPrizeName}</b></div></div><div style="float:left;width:18%">{ModifiedRedeemHistoryStatus}</div><div style="float:left;width:24%"><button class="buttonredemptionlist" OnClick="FloatPanel_VIEWRedemptionList_OpenLoyaltyCard(' + "'" + '{PointCampaignCode}' + "'" + ',' + "'" + '{RedeemHistoryStatusBy}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RedeemInfo}' + "'" + ',' + "'" + '{StampedCampaignStartDate}' + "'" + ',' + "'" + '{StampRuleRemarks}' + "'" + ',' + "'" + '{CampaignName}' + "'" + ',' + "'" + '{PointCampaignEndDate}' + "'" + ',' + "'" + '{PointCampaignisRequiredStartEndDate}' + "'" + ',' + "'" + '{isCampaignExpired}' + "'" + ',' + "'" + '{RedeemBy}' + "'" + ');">View Loyalty Card</button>&nbsp;&nbsp;&nbsp;<button class="buttonredemptionlist" OnClick="FloatPanel_Redemption_UpdateStatusShow(' + "'" + '{ModifiedButtonUpdateRedemptionStatus_RedeemPrizeImage}' + "'" + ',' + "'" + '{RedeemHistoryCode}' + "'" + ')">Update Redemption Status</button></div></div>' +
                         
                                                       '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="float:left;width:2%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{RowNumber}.</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:16.5%;color:blue;cursor: pointer;"><u>{AccountName}</u><br><div style="margin:-5px 0px 0px 0px;color:blue"><u>{AccountPhone}</u></div></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:10%">{ContestStatus}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:7%">{ModifiedisWinner}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:9%">{RankNo}</div><div style="float:left;width:17%">{Note}</div><div style="float:left;width:10%">{ModifiedAnswerBy}<br>{ModifiedDate}</div><div style="float:left;width:13%"><button class="buttoncheckviewcontestanswerlist" OnClick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit(' + "'" + '{SubscriberAccNo}' + "'" + ',' + "'" + '{ContestCode}' + "'" + ',' + "'" + '{ContestName}' + "'" + ',' + "'" + '{ContestType}' + "'" + ',' + "'" + '{isRequiredReceipt}' + "'" + ',' + "'" + '{AdvertisementImgPath}' + "'" + ',' + "'" + '{ContestQuestion}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{isWinner}' + "'" + ',' + "'" + '{RankNo}' + "'" + ',' + "'" + '{Note}' + "'" + ',' + "'" + '{ModifiedDate}' + "'" + ',' + "'" + '{ModifiedAnswerBy}' + "'" + ',{ID});">Check/View Submitted Answer</button></div></div>' +
                         
                                                         '</div>',
                                                  
                                                        emptyText: '<div class="myContent">No Participant</div>',
                                                      
                                                    },





                                                    {
                                                        xtype: 'list',
                                                        width: '100%',   
                                                        height: '100%',
                                                        hidden:true,                                     
                                                        //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore,
                                                        store: _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore,
                                                        id: 'FloatPanel_AyohaContest_ManageParticipantListListID_FromMembershipDetailsPage',
                                                        mode: 'SINGLE',
                                                        grouped: true,
                                                        disableSelection: true,
                                                        scrollable: {
                                                            direction: 'vertical',
                                                            indicators: {
                                                                y: {
                                                                    autoHide: true
                                                                },
                                                                x: {
                                                                    autoHide: true
                                                                }
                                                            }
                                                        },
                                                        style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                        itemTpl: '<div class="myContent">' +
              
              
                                                        // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +
                                                     //ori '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="float:left;width:5%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{No}</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:14%"><b>{NotificationCode}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:35%">{NotificationTitle}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:10%">{PublishBy}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:20%">{PublishedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{Audience}</div><div style="float:left;width:25%"><button class="buttonss button15" OnClick="loadViewNotifactionDetails({ID})">View Notification</button></div></div>' +
                                                       //'<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="float:left;width:2%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{RowNumber}.</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:16.5%;color:blue;cursor: pointer;"><u>{RedeemBy}</u><br><div style="margin:-5px 0px 0px 0px;color:blue"><u>{ModifiedRedeemHistoryStatusBy}</u></div></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{RedeemHistoryStatusDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:12%">{ModifiedRedeemInfo}</div><div style="float:left;width:12%">{ModifiedRedeemPrizeImage}<br><div style="margin:-7px 0px 0px 0px"><b>{RedeemPrizeName}</b></div></div><div style="float:left;width:18%">{ModifiedRedeemHistoryStatus}</div><div style="float:left;width:24%"><button class="buttonredemptionlist" OnClick="FloatPanel_VIEWRedemptionList_OpenLoyaltyCard(' + "'" + '{PointCampaignCode}' + "'" + ',' + "'" + '{RedeemHistoryStatusBy}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RedeemInfo}' + "'" + ',' + "'" + '{StampedCampaignStartDate}' + "'" + ',' + "'" + '{StampRuleRemarks}' + "'" + ',' + "'" + '{CampaignName}' + "'" + ',' + "'" + '{PointCampaignEndDate}' + "'" + ',' + "'" + '{PointCampaignisRequiredStartEndDate}' + "'" + ',' + "'" + '{isCampaignExpired}' + "'" + ',' + "'" + '{RedeemBy}' + "'" + ');">View Loyalty Card</button>&nbsp;&nbsp;&nbsp;<button class="buttonredemptionlist" OnClick="FloatPanel_Redemption_UpdateStatusShow(' + "'" + '{ModifiedButtonUpdateRedemptionStatus_RedeemPrizeImage}' + "'" + ',' + "'" + '{RedeemHistoryCode}' + "'" + ')">Update Redemption Status</button></div></div>' +
                         
                                                       '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="float:left;width:2%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{RowNumber}.</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:16.5%;color:blue;cursor: pointer;"><u>{AccountName}</u><br><div style="margin:-5px 0px 0px 0px;color:blue"><u>{AccountPhone}</u></div></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:10%">{ContestStatus}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:7%">{ModifiedisWinner}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:9%">{RankNo}</div><div style="float:left;width:17%">{Note}</div><div style="float:left;width:10%">{ModifiedAnswerBy}<br>{ModifiedDate}</div><div style="float:left;width:13%"><button class="buttoncheckviewcontestanswerlist" OnClick="FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormShow_Edit(' + "'" + '{SubscriberAccNo}' + "'" + ',' + "'" + '{ContestCode}' + "'" + ',' + "'" + '{ContestName}' + "'" + ',' + "'" + '{ContestType}' + "'" + ',' + "'" + '{isRequiredReceipt}' + "'" + ',' + "'" + '{AdvertisementImgPath}' + "'" + ',' + "'" + '{ContestQuestion}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{isWinner}' + "'" + ',' + "'" + '{RankNo}' + "'" + ',' + "'" + '{Note}' + "'" + ',' + "'" + '{ModifiedDate}' + "'" + ',' + "'" + '{ModifiedAnswerBy}' + "'" + ',{ID});">Check/View Submitted Answer</button></div></div>' +
                         
                                                         '</div>',
                                                  
                                                        emptyText: '<div class="myContent">No Contest Submitted</div>',
                                                      
                                                    },
                                                ]
                                            },
              


                                           

                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: 40,
                                                  hidden:true,
                                                style: 'background-color:black',
                                               //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  //height: 50,
                                                  margin:'0 0 0 0',
                                                  items: [

                                                          //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                          //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                          //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                          //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                          //    '</div></div></div>'

                                                          {

                                                           margin:'0 0 0 18',
                                                              id: 'htmlFloatPanel_AyohaContest_ManageParticipantList_Receipients',
                                                              html: '<font size="2" color="white"><b>Participants</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          {
                                                              xtype:'spacer'
                                                          },
                                                          {

                                                              margin: '0 100 0 0',
                                                              id: 'htmlFloatPanel_AyohaContest_ManageParticipantList_IsRead',
                                                              html: '<font size="2" color="white"><b>Is Voucher Used?</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          {
                                                            margin: '7 0 0 0',
html:'<input type="checkbox" class="largerCheckbox1" onclick="OnChangeCheckbox_CheckAll (this,0)" name="checkbox" id="CheckBox_SetVoucherAll"/>'
                                                          },
                                                          {
                                                            xtype:'spacer',
                                                            width:'28px'
                                                        },
                                                          //{

                                                          //    width: '50%',
                                                          //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                          //},
                                                          //     //{
                                                               //    margin: '-8 0 0 0',

                                                               //    html: '<font size=2 color=black>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                               //},
                                                               // {
                                                               //     margin: '-7 0 0 0',

                                                               //     html: '<font size=2 color=black>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                               // },


                                                  ]
                                              },

                                              


                                        {
                                            xtype: 'list',
                                           // flex: 1,
                                          hidden:true,
                                         height: '93%',
                                            store:_DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore,
                                            id: 'FloatPanel_AyohaContest_ManageParticipantList_List',
                                            mode: 'SINGLE',
                                            grouped: true,
                                            disableSelection: true,
                                            scrollable: {
                                                direction: 'vertical',
                                                indicators: {
                                                    y: {
                                                        autoHide: true
                                                    },
                                                    x: {
                                                        autoHide: true
                                                    }
                                                }
                                            },
                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                            itemTpl: '<div class="myContent">' +

                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                      + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{RowNumber}).<b>{AccountName}</b><br>{PhoneNo}<br>{Email}</div>'
                                                      + '<br>'
                                                      + '<div style="width:100%;text-align:right;margin:-45px 0px 0px -160px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ModifiedEntitledVoucherStatus}</div>'
                                                    //    + '<br>'
                                                    //   + '<div style="width:100%;text-align:right;margin:-20px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ModifedDate}</div>'
                                                      + '<br>'
                                                     // + '<div style="width:100%;text-align:right;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaContest_ManageParticipantList__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div>'
                                                     + '<div style="width:100%;text-align:right;margin: -35px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="MediumCheckbox" onclick="OnChangeCheckbox_DeleteVoucherReceipients (this,{ID})" name="checkbox" id="checkbox_setVoucherRecipents_{RowNumber}"/></div>'
                                                        
                                                      + '</div>' +

                                              '</div>',
                                            width: '100%',
                                            //listeners: {
                                            //    itemsingletap: function (list, idx, target, records, evt) {

                                            //        var StampCampaignCode = records.get('StampCampaignCode');
                                            //        var StampCampaignName = records.get('StampCampaignName');
                                            //        var StampCardType = records.get('StampCardType');
                                            //        var StartDate = records.get('StartDate');
                                            //        var EndDate = records.get('EndDate');
                                            //        var RowStatus = records.get('RowStatus');
                                            //        var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                            //        var CreatedByAccNo = records.get('CreatedByAccNo');
                                            //        var CreatedBy = records.get('CreatedBy');
                                            //        var CreatedDate = records.get('CreatedDate');
                                            //        var ModifiedBy = records.get('ModifiedBy');
                                            //        var ModifiedDate = records.get('ModifiedDate');
                                            //        var StartDateOnly = records.get('StartDateOnly');
                                            //        var EndDateOnly = records.get('EndDateOnly');
                                            //        var BackgroundImage = records.get('StampCardBackground');
                                            //        var isAnimated = records.get('isAnimated');
                                            //        var AnimatedInterval = records.get('AnimatedInterval');

                                            //        var StampRuleRemarks = records.get('StampRuleRemarks');
                                            //        var isStampRulePopUp = records.get('isStampRulePopUp');
                                            //        var LoyaltyCustomerType = records.get('LoyaltyCustomerType');

                                            //        var StampCampaignPremiumQRCode = records.get('StampCampaignPremiumQRCode');

                                            //        if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
                                            //            MembershipCardCampaingEntitled_InsertUpdate(StampCampaignCode, "Stamp Reward Loyalty Card");
                                            //            return;
                                            //        }





                                            //        FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, BackgroundImage, isAnimated, AnimatedInterval
                                            //            , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode);
                                            //        Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo)
                                            //        //Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
                                            //    },
                                            //    deselect: function (list, records) {

                                            //    }
                                            //},

                                        },



















                                        ///////////////////////


                                      
                                   ]
                               },




                               ////////////////////////////////////////////









                               //////////////////////////////////////////
                               {

                                   xtype: 'container',
                                   width: '100%',
                                  // hidden:true,
                                   // width: 40,
                                   docked: 'bottom',
                                   height: 50,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaContest_ManageParticipantList_MenuBottom',
                                  // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                  //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                                  style:GetFooterStyle(),
                                   layout: {
                                       type: 'hbox',
                                       pack: 'start',
                                       align: 'center',
                                   },




                                   // hidden:true,
                                   items:
                                          [
                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                 style: "background-color: transparent",
                                                 //style:GetFooterStyle(),
                                                  height: 50,
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'left',
                                                      align: 'center',
                                                  },
                                                  //scrollable: {
                                                  //    direction: 'horizontal',
                                                  //    directionLock: false
                                                  //},
                                                  items: [


                                                    {
                                                        xtype:'spacer',
                                                        width: '2%',
                                                    },




                                                        // {
                                                        //     xtype: 'button',
                                                        //     id: 'btnFloatPanel_AyohaContest_ManageParticipantList_Search',
                                                        //     // hidden: true,
                                                        //     //  badgeText: '1',
                                                        //     margin: '0 0 0 -10',
                                                        //     height: 40,
                                                        //     width: 40,
                                                        //     html: '<img src="resources/icons/searchPurpleTwo.png" width="30" height="30" alt="Company Name">',
                                                        //     ui: 'plain',
                                                        //     handler: function () {
                                                        //         // NotificationsPanelShow();

                                                        //         // LoyaltyCardRedeemListShow();


                                                        //         //  LoyaltyCardRedeemListShow();
                                                        //     }
                                                        // },





                            //  {
                            //      id: 'htmlFloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxt',
                            //      margin: '0 0 0 0',
                            //      width: '40%',
                            //      height: 20,
                            //      html: '<input type="text" id="input-FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                            //  },
                            {
                                margin: '0 0 0 0',
                              //  id:'htmlFloatPanel_AyohaContest_ManageParticipantList_count',
                                                           html: '<font size=3 color=black><b>Record Found:</b></font>'
                                                       },
                              {
                                  margin: '0 0 0 0',
                                  id:'htmlFloatPanel_AyohaContest_ManageParticipantList_count',
                                                             html: '<font size=3 color=black><b>(0)</b></font>'
                                                         },
                                                        //  {
                                                        //     xtype:'spacer'
                                                        // },

                                                         {


                                                            // xtype: 'button',
                                                            hidden: true,
                                                            id: 'btnFloatPanel_AyohaContest_ManageParticipantList_SetReceipient',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
                                                            height: 40,
                                                            width: 135,
                                                            //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                            html: '<button OnClick="FloatPanel_AyohaRewardVoucher_SetVoucherRecipentsShow()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Set Receipient(s)</button>',
                                                            //ui: 'confirm',
                                                            //handler: function () {

                                                            //}

                                                        },
                                                        // {
                                                        //     xtype:'spacer',
                                                        //     width: '3%',
                                                        // },

                                                        
                                                        {


                                                            // xtype: 'button',
                                                            hidden: true,
                                                            id: 'btnFloatPanel_AyohaContest_ManageParticipantList_DeleteReceipient',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
                                                            height: 40,
                                                            width: 70,
                                                            //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                            html: '<button OnClick="FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AyohaRewardVoucherEntitledUserDeleteMasterVoucherReceipients()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Delete</button>',
                                                            //ui: 'confirm',
                                                            //handler: function () {

                                                            //}

                                                        },
                                                        // {
                                                        //     xtype:'spacer',
                                                        //     width: '8%',
                                                        // }
                                                        

                                                  ]
                                              },





                                                         //{
                                                         //    margin: '0 0 0 0',
                                                         //    html: '<font size=3 color=black><b>TARMIZI RAHIM</b></font>'
                                                         //},







                                                         


                                          ]

                               },










                           ]

                       },








                              /////





                              //////



                              ////////////////////////









                 ]

             },




         ]















     });
    return _FloatPanel_AyohaContest_ManageParticipantList;



}



var globalFloatPanel_AyohaContest_ManageParticipantList_VoucherCode;
var globalFloatPanel_AyohaContest_ManageParticipantList_EntitledVoucherStartDate;
var globalFloatPanel_AyohaContest_ManageParticipantList_EntitledVoucherEndDate;
var globalFloatPanel_AyohaContest_ManageParticipantList_EntitledVoucherNote;
var globalFloatPanel_AyohaContest_ManageParticipantList_ContestCode;
//var globalarrFloatPanel_AyohaContest_ManageParticipantList_CheckingVal=[];
function FloatPanel_AyohaContest_ManageParticipantListShow(ContestCode) {
    // globalFloatPanel_AyohaContest_ManageParticipantList_VoucherCode=VoucherCode;
    // globalFloatPanel_AyohaContest_ManageParticipantList_StartDate=StartDate;
    // globalFloatPanel_AyohaContest_ManageParticipantList_EndDate=EndDate;
    // globalFloatPanel_AyohaContest_ManageParticipantList_VoucherNote=VoucherNote;
    arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.length=0;
    globalFloatPanel_AyohaContest_ManageParticipantList_ContestCode=ContestCode;


    Ext.Viewport.remove(_FloatPanel_AyohaContest_ManageParticipantList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaContest_ManageParticipantList());
    this.overlay.show();
   
    isFloatPanel_AyohaContest_ManageParticipantListOpen = 'Y';
    _FloatPanel_AyohaContest_ManageParticipantList_isFirstLoad = "Y";
    FloatPanel_AyohaContest_ManageParticipantListAdjustHeight();
    Ext.getCmp('FloatPanel_AyohaContest_ManageParticipantListListID').setHidden(false);    
    document.getElementById("input-FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxtOnKeyUp);
    FloatPanel_AyohaContest_ManageParticipantList_AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore(ContestCode);
   
}




function FloatPanel_AyohaContest_ManageParticipantListShow_FromMembershipDetailPage() {
    // globalFloatPanel_AyohaContest_ManageParticipantList_VoucherCode=VoucherCode;
    // globalFloatPanel_AyohaContest_ManageParticipantList_StartDate=StartDate;
    // globalFloatPanel_AyohaContest_ManageParticipantList_EndDate=EndDate;
    // globalFloatPanel_AyohaContest_ManageParticipantList_VoucherNote=VoucherNote;
    arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.length=0;
   // globalFloatPanel_AyohaContest_ManageParticipantList_ContestCode=ContestCode;


    Ext.Viewport.remove(_FloatPanel_AyohaContest_ManageParticipantList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaContest_ManageParticipantList());
    this.overlay.show();
   
    isFloatPanel_AyohaContest_ManageParticipantListOpen = 'Y';
    _FloatPanel_AyohaContest_ManageParticipantList_isFirstLoad = "Y";
    FloatPanel_AyohaContest_ManageParticipantListAdjustHeight();


    Ext.getCmp('btnFloatPanel_AyohaContest_ManageParticipantList_SearchIcon').setHidden(true);    
    Ext.getCmp('htmlFloatPanel_AyohaContest_ManageParticipantList_SearchTextBox').setHidden(true);    
    Ext.getCmp('FloatPanel_AyohaContest_ManageParticipantListListID_FromMembershipDetailsPage').setHidden(false);    
    document.getElementById("input-FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxtOnKeyUp);
    FloatPanel_AyohaContest_ManageParticipantList_AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore();
    // FloatPanel_AyohaContest_ManageParticipantList_AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore(ContestCode);
   
}

function FloatPanel_AyohaContest_ManageParticipantListShow_FromMemberDetail(ContestCode) {
    // globalFloatPanel_AyohaContest_ManageParticipantList_VoucherCode=VoucherCode;
    // globalFloatPanel_AyohaContest_ManageParticipantList_StartDate=StartDate;
    // globalFloatPanel_AyohaContest_ManageParticipantList_EndDate=EndDate;
    // globalFloatPanel_AyohaContest_ManageParticipantList_VoucherNote=VoucherNote;
    arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.length=0;
  

    Ext.Viewport.remove(_FloatPanel_AyohaContest_ManageParticipantList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaContest_ManageParticipantList());
    this.overlay.show();
   
    isFloatPanel_AyohaContest_ManageParticipantListOpen = 'Y';
    _FloatPanel_AyohaContest_ManageParticipantList_isFirstLoad = "Y";
    FloatPanel_AyohaContest_ManageParticipantListAdjustHeight();

    document.getElementById("input-FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxtOnKeyUp);
    FloatPanel_AyohaContest_ManageParticipantList_AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore(ContestCode);
   // alert(ContestCode)
    Ext.getCmp('LoadingFloatPanel_AyohaContest_ManageParticipantListID').setZIndex(360);
}



function FloatPanel_AyohaContest_ManageParticipantListHide() {
    _FloatPanel_AyohaContest_ManageParticipantList.hide();

    isFloatPanel_AyohaContest_ManageParticipantListOpen = 'N';
    _FloatPanel_AyohaContest_ManageParticipantList_isFirstLoad = "N";
  
    
}




function FloatPanel_AyohaContest_ManageParticipantListAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    //   var adjustedHeight = x - headerHeight;
    var newHeight = x - 90;
    //var bodyMsgHeight01 = x + 17;
    //var bodyMsgHeight02 = bodyMsgHeight01 - x;



    //  var newHeight = adjustedHeight - 80;
    //alert(x)
    // alert(bodyMsgHeight02)


    //900
    //450


    Ext.getCmp('containerFloatPanel_AyohaContest_ManageParticipantList').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaContest_ManageParticipantListInner').setHeight(newHeight + 60);






}

var globalcountParticipantList;
function FloatPanel_AyohaContest_ManageParticipantList_AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore(ContestCode) {

    globalcountParticipantList=0;
   

 


arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.length=0;
FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo = "";
globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo = "";

_DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
_DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.getProxy().setExtraParam('ContestCode', ContestCode);
_DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest_SelfieAndWin/AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCode');
_DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.load();


   var task = Ext.create('Ext.util.DelayedTask', function () {



       //_DataStore_EnterprisesLoadByMerchantCategory.load();
       var count = _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.getCount();


       for (i = 0; i < count; i++) {
        var Store = _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.getAt(i);

       
        
        arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.push(Store.get('SubscriberAccNo'));
        FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo += Store.get('SubscriberAccNo') + ",";

    }
       

    var text = FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo.replace("undefined", "");
    globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo = text.slice(0, -1) //'abcde'

//alert(globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo);
globalcountParticipantList = _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.getCount();
Ext.getCmp('htmlFloatPanel_AyohaContest_ManageParticipantList_count').setHtml('<font size="3" color="black"><b>(' + globalcountParticipantList + ')</b></font>')
      
       LoadingPanelHide();
    //   FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();



   });
   task.delay(500);

















   

}
function FloatPanel_AyohaContest_ManageParticipantList_AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore() {

    globalcountParticipantList=0;
   

 


arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.length=0;
FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo = "";
globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo = "";

_DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
_DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', globalFloatPanel_MembershipDetailsPage_SubscriberAccNo);
_DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest_SelfieAndWin/AyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNo');
_DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore.load();


   var task = Ext.create('Ext.util.DelayedTask', function () {



       //_DataStore_EnterprisesLoadByMerchantCategory.load();
       var count = _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore.getCount();


       for (i = 0; i < count; i++) {
        var Store = _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore.getAt(i);

       
        
        arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.push(Store.get('SubscriberAccNo'));
        FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo += Store.get('SubscriberAccNo') + ",";

    }
       

    var text = FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo.replace("undefined", "");
    globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo = text.slice(0, -1) //'abcde'

//alert(globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo);
globalcountParticipantList = _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndSubscriberAccNoStore.getCount();
Ext.getCmp('htmlFloatPanel_AyohaContest_ManageParticipantList_count').setHtml('<font size="3" color="black"><b>(' + globalcountParticipantList + ')</b></font>')
      
       LoadingPanelHide();
    //   FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();



   });
   task.delay(500);

















   

}

function FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxtOnKeyUp() {

  
    var countParticipantList_List = 0;


    _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaContest_ManageParticipantList_ListTypeSearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countParticipantList_List = _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaContest_ManageParticipantList_count').setHtml('<font size="3" color="black"><b>(' + countParticipantList_List + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countParticipantList_List = _DataStoreAyohaRewardContestSelfieAndWinLoadByEnterpriseAccNoAndContestCodeStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaContest_ManageParticipantList_count').setHtml('<font size="3" color="black"><b>(' + countParticipantList_List + ')</b></font>');
    }


    else {
       // console.log('tiada2');
       // _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaContest_ManageParticipantList_count').setHtml('<font size="3" color="black"><b>(' + globalcountParticipantList + ')</b></font>');
        
        //  Ext.getCmp('htmlFloatPanel_AyohaContest_ManageParticipantList_count').setHtml('<font size="2" color="black"><b>(' + globalcountAyohaNotificationLoadByNotification + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}




function FloatPanel_AyohaContest_ManageParticipantList__DeleteSpecificMember(ID){
    Swal.fire({
        title: 'Are you sure want to delete?',
      //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "ID": ID,

            };
            console.log(objn);
            var _value = Ext.Ajax.request({
                type: "POST",
                url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserDelete',
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        swalFireSuccess("Delete Successfully!");
                        var VoucherCode=globalFloatPanel_AyohaContest_ManageParticipantList_VoucherCode;
                        FloatPanel_AyohaContest_ManageParticipantList_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
                    }
                    else {
                        swalFireFail("Delete Failed!" + result.responseText.trim());
                    }

                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {

                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!" + result.responseText.trim());
                }

            });
        }
    });

   
   

   
   
}






var arrFloatPanel_AyohaContest_ManageParticipantList=[];

function OnChangeCheckbox_DeleteVoucherReceipients(checkbox, ID) {


   


/// 11/9/2023 pending nak delete dari ayohareward_voucher

    var AccountNo = _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var PAccountNos = AccountNo.get('SubscriberAccNo');
//alert(arrFloatPanel_AyohaContest_ManageParticipantList.length)

    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);
        document.getElementById("CheckBox_SetVoucherAll").checked = false;
           arrFloatPanel_AyohaContest_ManageParticipantList.push(PAccountNos);
            
      
    
    }
    else {
      //  alert("The check box is not checked.");
      document.getElementById("CheckBox_SetVoucherAll").checked = false;
        var index = arrFloatPanel_AyohaContest_ManageParticipantList.indexOf(PAccountNos);
        if (index > -1) {
            arrFloatPanel_AyohaContest_ManageParticipantList.splice(index, 1);
        }
       
    }


   
}


function OnChangeCheckbox_CheckAll(checkbox, ID){
  
    if (checkbox.checked) {
        arrFloatPanel_AyohaContest_ManageParticipantList.length=0;
       // alert(arrFloatPanel_AyohaContest_ManageParticipantList.length);
        
       // checkbox_setVoucherRecipents_{ID}
            
       for (i = 1; i <= arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.length; i++) {
       
        document.getElementById("checkbox_setVoucherRecipents_"+i).checked = true;
        
        arrFloatPanel_AyohaContest_ManageParticipantList.push(arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal[i-1]);
       
        // FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo += arrFloatPanel_AyohaContest_ManageParticipantList[i] + ",";
    }
   // alert(arrFloatPanel_AyohaContest_ManageParticipantList.length);
    
    }
    else {
        for (i = 1; i <= arrFloatPanel_AyohaRewardContest_ParticipantList_CheckingVal.length; i++) {
       
            document.getElementById("checkbox_setVoucherRecipents_"+i).checked = false;
            arrFloatPanel_AyohaContest_ManageParticipantList.length=0;
           // FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo += arrFloatPanel_AyohaContest_ManageParticipantList[i] + ",";
        }
    
    }

}

var globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo;
function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AyohaRewardVoucherEntitledUserDeleteMasterVoucherReceipients() {


    if (arrFloatPanel_AyohaContest_ManageParticipantList.length <= 0) {
        swalFireFail("No Recipient Selected!");
        // FloatPanel_AyohaRewardVoucher_AllMembersListHide();
         return;
     }
    
     if (arrFloatPanel_AyohaContest_ManageParticipantList) {
        
      }else{
         swalFireFail("No Recipient Selected!");
         // FloatPanel_AyohaRewardVoucher_AllMembersListHide();
          return;
      }
 
 
 
     FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo = "";
     globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo = "";
     if (arrFloatPanel_AyohaContest_ManageParticipantList.length > 0) {
         for (i = 0; i < arrFloatPanel_AyohaContest_ManageParticipantList.length; i++) {
             FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo += arrFloatPanel_AyohaContest_ManageParticipantList[i] + ",";
         }
 
 
         var text = FloatPanel_AyohaRewardContest_ParticipantList_SubscriberAccNo.replace("undefined", "");
         globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo = text.slice(0, -1) //'abcde'
     } else {
        globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo = "";
     }




    Swal.fire({
        title: 'Are you sure want to delete?',
      //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "SubscriberAccNo": globalFloatPanel_AyohaContest_ManageParticipantList_SubscriberAccNo,
                "EnterpriseAccNo": GetEnterpriseAccNo(),
                "VoucherCode": globalFloatPanel_AyohaContest_ManageParticipantList_VoucherCode,

            };
            console.log(objn);
            var _value = Ext.Ajax.request({
                type: "POST",
                url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserDeleteMasterVoucherReceipients',
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        swalFireSuccess("Delete Successfully!");
                        var VoucherCode=globalFloatPanel_AyohaContest_ManageParticipantList_VoucherCode;
                        FloatPanel_AyohaContest_ManageParticipantList_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
                    }
                    else {
                        swalFireFail("Delete Failed!" + result.responseText.trim());
                    }

                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {

                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!" + result.responseText.trim());
                }

            });
        }
    });

   


 

}