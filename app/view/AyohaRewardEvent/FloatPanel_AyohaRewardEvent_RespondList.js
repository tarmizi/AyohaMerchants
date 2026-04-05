Ext.define('ianMizi.view.AyohaRewardEvent.FloatPanel_AyohaRewardEvent_RespondList', {

});


var _FloatPanel_AyohaRewardEvent_RespondList;


var isFloatPanel_AyohaRewardEvent_RespondListOpen = 'N';



var _FloatPanel_AyohaRewardEvent_RespondList_isFirstLoad = "N";



var arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal=[];



function FloatPanel_AyohaRewardEvent_RespondList() {

    _FloatPanel_AyohaRewardEvent_RespondList =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaRewardEvent_RespondListID',
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
                                   style:GetHeaderStyle(),
                                   id: 'containerFloatPanel_AyohaRewardEvent_RespondListHeader',
                                   //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                                id: 'htmlFloatPanel_AyohaRewardEvent_RespondListTitleTxt',
                                                html: '<font size=4 color=black><b>Event Respond List</b></font>'
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
id:'btnFloatPanel_AyohaRewardEvent_RespondList_Search',
hidden:true,
margin: '1 0 0 0',
height: 40,
width: 40,
html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
ui: 'plain',
handler: function () {
}
},
{
    hidden:true,
    id:'htmFloatPanel_AyohaRewardEvent_RespondList_SearchTextBox',
html:'<div class="search-container">'+
'<input type="text" id="input-FloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxt"  placeHolder="Search (Name/Mobile Phone No)" class="search-input" >'+
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
                                                            id: 'btnFloatPanel_AyohaRewardEvent_RespondListBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaRewardEvent_RespondList.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                   // direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaRewardEvent_RespondListOpen = 'N';
                                                                _FloatPanel_AyohaRewardEvent_RespondList_isFirstLoad = "N";
                                                               
                                                            }
                                                        },
                                                         {
                                                             xtype: 'button',
                                                             hidden:true,
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_AyohaRewardEvent_RespondList_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaRewardEvent_RespondList.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaRewardEvent_RespondListOpen = 'N';
                                                                 _FloatPanel_AyohaRewardEvent_RespondList_isFirstLoad = "N";

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
                                   id: 'containerFloatPanel_AyohaRewardEvent_RespondList',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                   zIndex: 90,
                                   //height:200,
                                   // autoHeight:true,
                                   // height: '100%',
                                   // flex:1,
                                   //  maxHeight:'100%',
                                   //height:'63%',
                                   width: '100%',
                                   margin: '0 0 0 0',

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
                                                //height: 50,
                                                items: [
                                                    {
                                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="'+GetTableListHeader()+'"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="'+GetTableListTextHeader()+'"><div style="float:left;width:6%;"><span style="padding:0px 0px"><b>No</div ><div style="float:left;width:20%"><span style="font-family: Arial;">Members Name</div ><div style="float:left;width:20%;"><b>Respond Date</b></div><div style="float:left;width:20%;"><b>Respond Status</b></div><div style="float:left;width:15%;"><b>Note</b></div></div></div></div>'

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
                                                        store: _DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore,
                                                        id: 'FloatPanel_AyohaRewardEvent_RespondListListID',
                                                        mode: 'SINGLE',
                                                        //grouped: true,
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
                         
                                                       '<div style="overflow:auto;width:100%;height:100%;"><div style="float:left;width:6%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{RowNumber}.</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:20%;color:black"><u>{AccountName}</u><br><div style="margin:-5px 0px 0px 0px;color:black"><u>{AccountPhoneNo}</u></div></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:20%">{ModifiedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:20%">{RespondStatus}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{Noted}</div></div>' +
                         
                                                         '</div>',
                                                  
                                                        emptyText: '<div class="myContent">No Membership Event Created</div>',
                                                        //listeners: {
                                                        //    itemsingletap: function (list, idx, target, records, evt) {
              
                                                        //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                        //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                        //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                        //        //var ID = records.get('ID');
                                                        //        ////FloatPanel_VIEWRedemptionList_EditCardShow_Edit(ID);
                                                        //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                                        //        //setTimeout(function () {
                                                        //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
                                                        //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
              
                                                        //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                                                        //        //}, 2000);
              
              
              
                                                        //    },
                                                        //    deselect: function (list, records) {
              
                                                        //    }
                                                        //},
                                                        listeners: {
                                                            itemswipe: function (list, idx, target, record, evt) {
                                                              //  To get the selection you should use getSelection() instead
                                                                //////var selected = list.getActiveItem();
                                                                //////alert(list.getActiveItem());
                                                                //////if (!selected) { return; }
              
                                                                //////var selectedIndex = selected[0];
                                                                //////alert([selectedIndex, idx]);
                                                                //Ext.Msg.alert('itemswipe', idx);
              
              
                                                            } // itemswipe
                                                        }
              
                                                    },
                                                    {
                                                        xtype: 'list',
                                                        width: '100%',   
                                                        height: '100%',
                                                        hidden:true,                                     
                                                        //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore,
                                                        store: _DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore,
                                                        id: 'FloatPanel_AyohaRewardEvent_RespondListListID_FromMemberDetailsPage',
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
                         
                                                       '<div style="overflow:auto;width:100%;height:100%;"><div style="float:left;width:6%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{RowNumber}.</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:20%;color:black"><u>{AccountName}</u><br><div style="margin:-5px 0px 0px 0px;color:black"><u>{AccountPhoneNo}</u></div></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:20%">{ModifiedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:20%">{RespondStatus}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{Noted}</div></div>' +
                         
                                                         '</div>',
                                                  
                                                        emptyText: '<div class="myContent">No Event Invited</div>',
                                                        //listeners: {
                                                        //    itemsingletap: function (list, idx, target, records, evt) {
              
                                                        //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                        //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                        //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                        //        //var ID = records.get('ID');
                                                        //        ////FloatPanel_VIEWRedemptionList_EditCardShow_Edit(ID);
                                                        //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                                        //        //setTimeout(function () {
                                                        //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
                                                        //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
              
                                                        //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                                                        //        //}, 2000);
              
              
              
                                                        //    },
                                                        //    deselect: function (list, records) {
              
                                                        //    }
                                                        //},
                                                        listeners: {
                                                            itemswipe: function (list, idx, target, record, evt) {
                                                              //  To get the selection you should use getSelection() instead
                                                                //////var selected = list.getActiveItem();
                                                                //////alert(list.getActiveItem());
                                                                //////if (!selected) { return; }
              
                                                                //////var selectedIndex = selected[0];
                                                                //////alert([selectedIndex, idx]);
                                                                //Ext.Msg.alert('itemswipe', idx);
              
              
                                                            } // itemswipe
                                                        }
              
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
                                                              id: 'htmlFloatPanel_AyohaRewardEvent_RespondList_Receipients',
                                                              html: '<font size="2" color="white"><b>Participants</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          {
                                                              xtype:'spacer'
                                                          },
                                                          {

                                                              margin: '0 100 0 0',
                                                              id: 'htmlFloatPanel_AyohaRewardEvent_RespondList_IsRead',
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

                                              


                                        // {
                                        //     xtype: 'list',
                                        //    // flex: 1,
                                        //   hidden:true,
                                        //  height: '93%',
                                        //     store:_DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore,
                                        //     id: 'FloatPanel_AyohaRewardEvent_RespondList_List',
                                        //     mode: 'SINGLE',
                                        //     grouped: true,
                                        //     disableSelection: true,
                                        //     scrollable: {
                                        //         direction: 'vertical',
                                        //         indicators: {
                                        //             y: {
                                        //                 autoHide: true
                                        //             },
                                        //             x: {
                                        //                 autoHide: true
                                        //             }
                                        //         }
                                        //     },
                                        //     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                        //     itemTpl: '<div class="myContent">' +

                                        //               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                        //               + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{RowNumber}).<b>{AccountName}</b><br>{AccountPhoneNo}</div>'
                                        //               + '<br>'
                                        //               + '<div style="width:100%;text-align:right;margin:-45px 0px 0px -160px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ModifiedEntitledVoucherStatus}</div>'
                                        //             //    + '<br>'
                                        //             //   + '<div style="width:100%;text-align:right;margin:-20px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ModifedDate}</div>'
                                        //              // + '<br>'
                                        //              // + '<div style="width:100%;text-align:right;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaRewardEvent_RespondList__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div>'
                                        //             // + '<div style="width:100%;text-align:right;margin: -35px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="MediumCheckbox" onclick="OnChangeCheckbox_DeleteVoucherReceipients (this,{ID})" name="checkbox" id="checkbox_setVoucherRecipents_{RowNumber}"/></div>'
                                                        
                                        //               + '</div>' +

                                        //       '</div>',
                                        //     width: '100%',
                                        //     //listeners: {
                                        //     //    itemsingletap: function (list, idx, target, records, evt) {

                                        //     //        var StampCampaignCode = records.get('StampCampaignCode');
                                        //     //        var StampCampaignName = records.get('StampCampaignName');
                                        //     //        var StampCardType = records.get('StampCardType');
                                        //     //        var StartDate = records.get('StartDate');
                                        //     //        var EndDate = records.get('EndDate');
                                        //     //        var RowStatus = records.get('RowStatus');
                                        //     //        var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                        //     //        var CreatedByAccNo = records.get('CreatedByAccNo');
                                        //     //        var CreatedBy = records.get('CreatedBy');
                                        //     //        var CreatedDate = records.get('CreatedDate');
                                        //     //        var ModifiedBy = records.get('ModifiedBy');
                                        //     //        var ModifiedDate = records.get('ModifiedDate');
                                        //     //        var StartDateOnly = records.get('StartDateOnly');
                                        //     //        var EndDateOnly = records.get('EndDateOnly');
                                        //     //        var BackgroundImage = records.get('StampCardBackground');
                                        //     //        var isAnimated = records.get('isAnimated');
                                        //     //        var AnimatedInterval = records.get('AnimatedInterval');

                                        //     //        var StampRuleRemarks = records.get('StampRuleRemarks');
                                        //     //        var isStampRulePopUp = records.get('isStampRulePopUp');
                                        //     //        var LoyaltyCustomerType = records.get('LoyaltyCustomerType');

                                        //     //        var StampCampaignPremiumQRCode = records.get('StampCampaignPremiumQRCode');

                                        //     //        if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
                                        //     //            MembershipCardCampaingEntitled_InsertUpdate(StampCampaignCode, "Stamp Reward Loyalty Card");
                                        //     //            return;
                                        //     //        }





                                        //     //        FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, BackgroundImage, isAnimated, AnimatedInterval
                                        //     //            , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode);
                                        //     //        Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo)
                                        //     //        //Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
                                        //     //    },
                                        //     //    deselect: function (list, records) {

                                        //     //    }
                                        //     //},

                                        // },



















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
                                   style:GetFooterStyle(),
                                   id: 'containerFloatPanel_AyohaRewardEvent_RespondList_MenuBottom',
                                  // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
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
                                                  height: 55,
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
                                                        width: '3%',
                                                    },




                                                        // {
                                                        //     xtype: 'button',
                                                        //     id: 'btnFloatPanel_AyohaRewardEvent_RespondList_Search',
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
                            //      id: 'htmlFloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxt',
                            //      margin: '0 0 0 0',
                            //      width: '40%',
                            //      height: 20,
                            //      html: '<input type="text" id="input-FloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                            //  },
                            {
                                margin: '0 0 0 0',
                               // id:'htmlFloatPanel_AyohaRewardEvent_RespondList_count',
                                                           html: '<font size=3 color=black><b>Record Found:</b></font>'
                                                       },
                              {
                                  margin: '0 0 0 0',
                                  id:'htmlFloatPanel_AyohaRewardEvent_RespondList_count',
                                                             html: '<font size=3 color=black><b>(0)</b></font>'
                                                         },
                                                         {
                                                            xtype:'spacer'
                                                        },

                                                         {


                                                            // xtype: 'button',
                                                            //hidden: true,
                                                      
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
                                                            height: 50,
                                                            width: 90,
                                                            hidden:true,
                                                            id: 'btnFloatPanel_AyohaRewardEvent_RespondList_Interested',
                                                            html: '<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" ><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">Interested</div></div>'

                                                        },
                                                        {
                                                            xtype:'spacer',
                                                            width: '2%',
                                                        },

                                                        
                                                        {


                                                            // xtype: 'button',
                                                           // hidden: true,
                                                         
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
                                                            height: 50,
                                                            width: 90,
                                                            hidden:true,
                                                            id: 'btnFloatPanel_AyohaRewardEvent_RespondList_IwillAttend',
                                                            html: '<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" ><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">Attend</div></div>'

                                                        },
                                                        {
                                                            xtype:'spacer',
                                                            width: '5%',
                                                        }
                                                        

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
    return _FloatPanel_AyohaRewardEvent_RespondList;



}



var globalFloatPanel_AyohaRewardEvent_RespondList_VoucherCode;
var globalFloatPanel_AyohaRewardEvent_RespondList_EntitledVoucherStartDate;
var globalFloatPanel_AyohaRewardEvent_RespondList_EntitledVoucherEndDate;
var globalFloatPanel_AyohaRewardEvent_RespondList_EntitledVoucherNote;
//var globalarrFloatPanel_AyohaRewardEvent_RespondList_CheckingVal=[];
function FloatPanel_AyohaRewardEvent_RespondListShow(EventCode,RespondStatus_IwillAttendCount,RespondStatus_InterestedCount) {
    // globalFloatPanel_AyohaRewardEvent_RespondList_VoucherCode=VoucherCode;
    // globalFloatPanel_AyohaRewardEvent_RespondList_StartDate=StartDate;
    // globalFloatPanel_AyohaRewardEvent_RespondList_EndDate=EndDate;
    // globalFloatPanel_AyohaRewardEvent_RespondList_VoucherNote=VoucherNote;
    arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal.length=0;
  

    Ext.Viewport.remove(_FloatPanel_AyohaRewardEvent_RespondList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardEvent_RespondList());
    this.overlay.show();
   
    isFloatPanel_AyohaRewardEvent_RespondListOpen = 'Y';
    _FloatPanel_AyohaRewardEvent_RespondList_isFirstLoad = "Y";
    FloatPanel_AyohaRewardEvent_RespondListAdjustHeight();
    Ext.getCmp('FloatPanel_AyohaRewardEvent_RespondListListID').setHidden(false);

    Ext.getCmp('btnFloatPanel_AyohaRewardEvent_RespondList_Search').setHidden(false);
    Ext.getCmp('htmFloatPanel_AyohaRewardEvent_RespondList_SearchTextBox').setHidden(false);

    Ext.getCmp('btnFloatPanel_AyohaRewardEvent_RespondList_Interested').setHidden(false);
    Ext.getCmp('btnFloatPanel_AyohaRewardEvent_RespondList_IwillAttend').setHidden(false);

    document.getElementById("input-FloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxtOnKeyUp);
   

   
    Ext.getCmp('btnFloatPanel_AyohaRewardEvent_RespondList_Interested').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" ><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">Interested <b>('+RespondStatus_InterestedCount+')</b></div></div>');
    Ext.getCmp('btnFloatPanel_AyohaRewardEvent_RespondList_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" ><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">Attend <b>('+RespondStatus_IwillAttendCount+')</b></div></div>');
   
   
    FloatPanel_AyohaRewardEvent_RespondList_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore(EventCode);
   
}

function FloatPanel_AyohaRewardEvent_RespondListShow_FromMemberDetailsPage() {
    // globalFloatPanel_AyohaRewardEvent_RespondList_VoucherCode=VoucherCode;
    // globalFloatPanel_AyohaRewardEvent_RespondList_StartDate=StartDate;
    // globalFloatPanel_AyohaRewardEvent_RespondList_EndDate=EndDate;
    // globalFloatPanel_AyohaRewardEvent_RespondList_VoucherNote=VoucherNote;
    arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal.length=0;
  

    Ext.Viewport.remove(_FloatPanel_AyohaRewardEvent_RespondList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardEvent_RespondList());
    this.overlay.show();
   
    isFloatPanel_AyohaRewardEvent_RespondListOpen = 'Y';
    _FloatPanel_AyohaRewardEvent_RespondList_isFirstLoad = "Y";
    FloatPanel_AyohaRewardEvent_RespondListAdjustHeight();
    Ext.getCmp('FloatPanel_AyohaRewardEvent_RespondListListID_FromMemberDetailsPage').setHidden(false);
  //  document.getElementById("input-FloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxtOnKeyUp);
   

   
  //  Ext.getCmp('btnFloatPanel_AyohaRewardEvent_RespondList_Interested').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" ><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">Interested <b>('+RespondStatus_InterestedCount+')</b></div></div>');
  //  Ext.getCmp('btnFloatPanel_AyohaRewardEvent_RespondList_IwillAttend').setHtml('<div style="width: 100%; height:50px; background:white;text-align:center;font-size:12px;" ><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">Attend <b>('+RespondStatus_IwillAttendCount+')</b></div></div>');
   
   
    FloatPanel_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore();
   
}



function FloatPanel_AyohaRewardEvent_RespondListHide() {
    _FloatPanel_AyohaRewardEvent_RespondList.hide();

    isFloatPanel_AyohaRewardEvent_RespondListOpen = 'N';
    _FloatPanel_AyohaRewardEvent_RespondList_isFirstLoad = "N";
  
    
}




function FloatPanel_AyohaRewardEvent_RespondListAdjustHeight() {
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


    Ext.getCmp('containerFloatPanel_AyohaRewardEvent_RespondList').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaRewardEvent_RespondListInner').setHeight(newHeight + 60);






}

var globalcountRespondList;
function FloatPanel_AyohaRewardEvent_RespondList_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore(EventCode) {

    globalcountRespondList=0;
   

   // 


arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal.length=0;
FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo = "";
globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo = "";

_DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.getProxy().setExtraParam('EventCode', EventCode);
_DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
_DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNo');
_DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.load();


   var task = Ext.create('Ext.util.DelayedTask', function () {



       //_DataStore_EnterprisesLoadByMerchantCategory.load();
       var count = _DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.getCount();


       for (i = 0; i < count; i++) {
        var Store = _DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.getAt(i);

       
        
        arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal.push(Store.get('SubscriberAccNo'));
        FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo += Store.get('SubscriberAccNo') + ",";

    }
       

    var text = FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo.replace("undefined", "");
    globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo = text.slice(0, -1) //'abcde'

//alert(globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo);
globalcountRespondList = _DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.getCount();
Ext.getCmp('htmlFloatPanel_AyohaRewardEvent_RespondList_count').setHtml('<font size="3" color="black"><b>(' + globalcountRespondList + ')</b></font>')
      
       LoadingPanelHide();
    //   FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();



   });
   task.delay(500);

















   

}



function FloatPanel_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore() {

    globalcountRespondList=0;
   

   // 


arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal.length=0;
FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo = "";
globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo = "";

_DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', globalFloatPanel_MembershipDetailsPage_SubscriberAccNo);
_DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
_DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNo');
_DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore.load();


   var task = Ext.create('Ext.util.DelayedTask', function () {



       //_DataStore_EnterprisesLoadByMerchantCategory.load();
       var count = _DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore.getCount();


       for (i = 0; i < count; i++) {
        var Store = _DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore.getAt(i);

       
        
        arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal.push(Store.get('SubscriberAccNo'));
        FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo += Store.get('SubscriberAccNo') + ",";

    }
       

    var text = FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo.replace("undefined", "");
    globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo = text.slice(0, -1) //'abcde'

//alert(globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo);
globalcountRespondList = _DataStore_AyohaRewardEvent_RespondLoadBySubscriberAccNoAndEnterpriseAccNoStore.getCount();
Ext.getCmp('htmlFloatPanel_AyohaRewardEvent_RespondList_count').setHtml('<font size="3" color="black"><b>(' + globalcountRespondList + ')</b></font>')
      
       LoadingPanelHide();
    //   FloatPanel_AyohaRewardVoucherList_AyohaRewardVoucherLoadByEnterpriseAccNoStore();



   });
   task.delay(500);

















   

}

function FloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxtOnKeyUp() {

  
    var countRespondList_List = 0;


    _DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaRewardEvent_RespondList_ListTypeSearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRespondList_List = _DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaRewardEvent_RespondList_count').setHtml('<font size="3" color="black"><b>(' + countRespondList_List + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRespondList_List = _DataStore_AyohaRewardEvent_RespondLoadByEventCodeAndEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaRewardEvent_RespondList_count').setHtml('<font size="3" color="black"><b>(' + countRespondList_List + ')</b></font>');
    }


    else {
       // console.log('tiada2');
       // _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaRewardEvent_RespondList_count').setHtml('<font size="3" color="black"><b>(' + globalcountRespondList + ')</b></font>');
        
        //  Ext.getCmp('htmlFloatPanel_AyohaRewardEvent_RespondList_count').setHtml('<font size="2" color="black"><b>(' + globalcountAyohaNotificationLoadByNotification + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}




function FloatPanel_AyohaRewardEvent_RespondList__DeleteSpecificMember(ID){
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
                        var VoucherCode=globalFloatPanel_AyohaRewardEvent_RespondList_VoucherCode;
                        FloatPanel_AyohaRewardEvent_RespondList_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
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






var arrFloatPanel_AyohaRewardEvent_RespondList=[];

function OnChangeCheckbox_DeleteVoucherReceipients(checkbox, ID) {


   


/// 11/9/2023 pending nak delete dari ayohareward_voucher

    var AccountNo = _DataStore_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var PAccountNos = AccountNo.get('SubscriberAccNo');
//alert(arrFloatPanel_AyohaRewardEvent_RespondList.length)

    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);
        document.getElementById("CheckBox_SetVoucherAll").checked = false;
           arrFloatPanel_AyohaRewardEvent_RespondList.push(PAccountNos);
            
      
    
    }
    else {
      //  alert("The check box is not checked.");
      document.getElementById("CheckBox_SetVoucherAll").checked = false;
        var index = arrFloatPanel_AyohaRewardEvent_RespondList.indexOf(PAccountNos);
        if (index > -1) {
            arrFloatPanel_AyohaRewardEvent_RespondList.splice(index, 1);
        }
       
    }


   
}


function OnChangeCheckbox_CheckAll(checkbox, ID){
  
    if (checkbox.checked) {
        arrFloatPanel_AyohaRewardEvent_RespondList.length=0;
       // alert(arrFloatPanel_AyohaRewardEvent_RespondList.length);
        
       // checkbox_setVoucherRecipents_{ID}
            
       for (i = 1; i <= arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal.length; i++) {
       
        document.getElementById("checkbox_setVoucherRecipents_"+i).checked = true;
        
        arrFloatPanel_AyohaRewardEvent_RespondList.push(arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal[i-1]);
       
        // FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo += arrFloatPanel_AyohaRewardEvent_RespondList[i] + ",";
    }
   // alert(arrFloatPanel_AyohaRewardEvent_RespondList.length);
    
    }
    else {
        for (i = 1; i <= arrFloatPanel_AyohaRewardContest_RespondList_CheckingVal.length; i++) {
       
            document.getElementById("checkbox_setVoucherRecipents_"+i).checked = false;
            arrFloatPanel_AyohaRewardEvent_RespondList.length=0;
           // FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo += arrFloatPanel_AyohaRewardEvent_RespondList[i] + ",";
        }
    
    }

}

var globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo;
function FloatPanel_AyohaRewardVoucher_SetVoucherRecipents_AyohaRewardVoucherEntitledUserDeleteMasterVoucherReceipients() {


    if (arrFloatPanel_AyohaRewardEvent_RespondList.length <= 0) {
        swalFireFail("No Recipient Selected!");
        // FloatPanel_AyohaRewardVoucher_AllMembersListHide();
         return;
     }
    
     if (arrFloatPanel_AyohaRewardEvent_RespondList) {
        
      }else{
         swalFireFail("No Recipient Selected!");
         // FloatPanel_AyohaRewardVoucher_AllMembersListHide();
          return;
      }
 
 
 
     FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo = "";
     globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo = "";
     if (arrFloatPanel_AyohaRewardEvent_RespondList.length > 0) {
         for (i = 0; i < arrFloatPanel_AyohaRewardEvent_RespondList.length; i++) {
             FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo += arrFloatPanel_AyohaRewardEvent_RespondList[i] + ",";
         }
 
 
         var text = FloatPanel_AyohaRewardEvent_Respond_SubscriberAccNo.replace("undefined", "");
         globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo = text.slice(0, -1) //'abcde'
     } else {
        globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo = "";
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
                "SubscriberAccNo": globalFloatPanel_AyohaRewardEvent_RespondList_SubscriberAccNo,
                "EnterpriseAccNo": GetEnterpriseAccNo(),
                "VoucherCode": globalFloatPanel_AyohaRewardEvent_RespondList_VoucherCode,

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
                        var VoucherCode=globalFloatPanel_AyohaRewardEvent_RespondList_VoucherCode;
                        FloatPanel_AyohaRewardEvent_RespondList_AyohaRewardVoucherEntitledUserLoadByVoucherCodeEnterpriseAccNoStore(VoucherCode);
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