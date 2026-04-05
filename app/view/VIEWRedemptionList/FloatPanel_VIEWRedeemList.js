
Ext.define('ianMizi.view.VIEWRedemptionList.FloatPanel_VIEWRedeemList', {

});

var _FloatPanel_VIEWRedemptionList;


var isFloatPanel_VIEWRedemptionListOpen = 'N';






function FloatPanel_VIEWRedemptionList() {

    _FloatPanel_VIEWRedemptionList =
    Ext.create('Ext.Container', {
        zIndex: 60,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_VIEWRedemptionListID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
       // modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit',
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250


            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
       style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_VIEWRedemptionList.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_VIEWRedemptionListHide()");
                            isFloatPanel_VIEWRedemptionListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_VIEWRedemptionList.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_VIEWRedemptionListOpen = 'N';
                            RemovePages("FloatPanel_VIEWRedemptionListHide()");
                        }
                       
                    }
                });
            }
        },

        items: [
           
            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                height: 60,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_VIEWRedemptionListHeader',
               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
               style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                
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
                            width:20

                        },
                        {
                            margin: '0 10 0 0',
                            id: 'htmlFloatPanel_VIEWRedemptionList_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>Redeemed List</b></font>'
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
                        }, {
                            xtype: 'button',
                            margin: '1 0 0 0',
                            height: 40,
                            width: 40,
                            html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                            }
                        },
                            {
                              
    html:'<div class="search-container">'+
        '<input type="text" id="input-FloatPanel_VIEWRedemptionList_SearchTxt" placeHolder="Search (Name/Phone No)" class="search-input" >'+
    '</div>'
                            },
                                      {
                                          xtype: 'spacer',
                                          width:20
                                      },

                                     
                                                             { margin: '0 10 0 0',
                                                                html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Approval Status:</div>'
                                                             },
                                                             {
                                                                id: 'FloatPanel_VIEWRedemptionList_SearchTxt_Status',
                                                                margin: '0 0 0 -10',
                                                                width: 100,
                                                                height: 20,
                                                                html: '<input type="text" id="input-FloatPanel_VIEWRedemptionList_SearchTxt_Status" readOnly placeHolder="Status" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;font-weight:bold;">'
                                                            },
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_VIEWRedemptionListFilter_Status',
                                                                // hidden: true,
                                                                 //  badgeText: '1',
                                                                 margin: '2 0 0 0',
                                                                 height: 25,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/pointhistorytwo.png" width="25" height="25" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                    FloatPanel_RedeemApprovalStatusShow();
                                                                    //FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore('ALL');
                                        
                                                                //  var RedeemHistoryStatus=   document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Status').value;
                                                                //    var Year= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value;
                                                                //     FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore(RedeemHistoryStatus,Year)
                                                                 }
                                                             },
                                                             {
                                                                xtype:'spacer',
                                                                width:30
                                                            },
                                                            { margin: '0 10 0 0',
                                                            html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Year:</div>'
                                                         },
                                                             {
                                                                id: 'FloatPanel_VIEWRedemptionList_SearchTxt_Year',
                                                                margin: '0 0 0 -10',
                                                                width: 100,
                                                                height: 20,
                                                                html: '<input type="text" id="input-FloatPanel_VIEWRedemptionList_SearchTxt_Year" readOnly placeHolder="Year" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;font-weight:bold;">'
                                                            },
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_VIEWRedemptionListFilter_Year',
                                                                // hidden: true,
                                                                 //  badgeText: '1',
                                                                 margin: '2 0 0 0',
                                                                 height: 25,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                    FloatPanel_YearOnlyShow();
                                                                 }
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
                                        id: 'btnFloatPanel_VIEWRedemptionListBack',
                                        height: 30,
                                        width: 35,
                                        margin: '0 0 0 10',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            // FloatPanel_VIEWRedemptionListHide();
                                            // FloatPanel_VIEWRedemptionList_AddCardHide();
                                            isFloatPanel_VIEWRedemptionListOpen = 'N';
                                            RemovePages("FloatPanel_VIEWRedemptionListHide()");
                                            _FloatPanel_VIEWRedemptionList.hide(Ext.fx.Animation({
                                                type: 'popOut',
                                                //direction: 'left',
                                                //easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));
                                            //  FloatPanel_VIEWRedemptionList_AddCardHide();

                                        }
                                    },

                                      {
                                        xtype: 'spacer',
                                        width:20

                                    },
                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_VIEWRedemptionList_CardIcon',
                                                hidden:true,
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/Notification.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    isFloatPanel_VIEWRedemptionListOpen = 'N';

                                                    _FloatPanel_VIEWRedemptionList.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages(_FloatPanel_VIEWRedemptionList, "isFloatPanel_VIEWRedemptionListOpen");
                                                    //FloatPanel_VIEWRedemptionList_AddCardHide();
                                                }
                                            },









                       ]

            },
            {
                xtype: 'container',
                id: 'containerFloatPanel_VIEWRedemptionListTitleOutter',
                width: '100%',
             //   hidden:true,
             docked: 'bottom',
                height: 50,
                //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [

                  
                    


                      {
                          xtype: 'button',
                          id: 'btnFloatPanel_VIEWRedemptionListListSearch',
                         hidden: true,
                          //  badgeText: '1',
                          margin: '2 0 0 -5',
                          height: 40,
                          width: 40,
                          html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                          ui: 'plain',
                          handler: function () {
                              // NotificationsPanelShow();

                              // LoyaltyCardRedeemListShow();


                              //  LoyaltyCardRedeemListShow();
                          }
                      },



                     {
                         id: 'FloatPanel_VIEWRedemptionList_SearchTxt',
                         hidden: true,
                         margin: '0 0 0 -10',
                         width: '50%',
                         height: 20,
                         html: '<input type="text"  style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                     },


                     {
                        margin: '0 0 0 20',
                        //hidden:true,
                       // id: 'htmlFloatPanel_AyohaStore_NewOrderList_recordFoundCount',
                        html: '<font size=3 color=black><b>Record Found:</b></font>'
                    },
                     {
                         id: 'FloatPanel_VIEWRedemptionList_CountSearchTxt',
                         margin: '0 0 0 0',
                         // width: '75%',
                         height: 20,
                         html: '<font size=3 color=black>(0)</font>'
                     },
                    
                     {
                        xtype:'spacer',
                        },

                ]

            },
           
            {
                xtype: 'container',
                id: 'containerFloatPanel_VIEWRedemptionListList',
                margin: '0 0 0 0',
                width: '100%',
               height: '100%',
                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                style: "background-color: white;",
                //style: "background-color: #F35B57;",
                title: 'FloatPanel_VIEWRedemptionListCardLis',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                //listeners: {
                //    initialize: function (c) {

                //        this.element.on({
                //            swipe: function (e, node, options) {
                //                if (e.direction == "left") {
                //                    //  alert("Hey! I swipe left");

                //                } else {
                //                    //  alert("Hey! I swipe right");
                //                    Ext.getCmp('tabpanelFloatPanel_VIEWRedemptionList').setActiveItem(0);
                //                }
                //            }
                //        });
                //    }
                //},

                items: [
                   
                    

                  {
                      xtype: 'container',
                      width: '100%',
                      height: '100%',
                      style: "background-color: transparent;",
                      layout: {
                          type: 'vbox',
                          pack: 'start',
                          align: 'left'

                      },
                      items: [

                          

                             
                              {
                                xtype: 'panel',
                                width: '100%',
                             //   hidden: true,
                                id:'panelHeaderVIEWRedemptionListListContentID',
                              //  style: 'background-color:black; color: floralwhite;',
                                //height: 50,
                                items: [
                                    {
                                      //ori  html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:4%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:15%"><span style="font-family: Arial; text-transform:uppercase;">Notification Code</div ><div style="float:left;width:35%"><span style="font-family: Arial; text-transform:uppercase;">Title</div ><div style="float:left;width:11%;"><b>Publish By</b></div><div style="float:left;width:20%;"><b>Publish Date</b></div><div style="float:left;width:15%;"><b>Audience</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial; text-transform:uppercase;"><div style="float:left;width:2.5%"><span style="font-family: Arial; text-transform:uppercase;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial; text-transform:uppercase;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:2.5%;"><span style="font-family: Arial;"><b>No</div ><div style="float:left;width:16%"><span style="font-family: Arial;">Members Name</div ><div style="float:left;width:15%;"><b>Redeem Date</b></div><div style="float:left;width:12%;"><b>Redeem Info</b></div><div style="float:left;width:12.2%;"><b>Redeem Prize</b></div><div style="float:left;width:10%;"><b>Redeem Status</b></div></div></div></div>'
                                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial;padding:0px 0px"><b>Members Name / Mobile Phone No</b></div ><div style="float:left;width:13%;"><b>Membership Card</b></div><div style="float:left;width:15%;"><b>Membership Card Name</b></div><div style="float:left;width:12.7%;"><b>Membership Date</b></div><div style="float:left;width:12.2%;"><b>Membership End Date</b></div><div style="float:left;width:10.5%;"><b>Renewal Fee</b></div><div style="float:left;width:9%;"><b>Membership Status</b></div></div></div></div>'

                                        
                                    }
                                ]
                            },
                              {
                                  xtype: 'container',
                                  width: '100%',
                                  height: '95%',
                                  id: 'FloatPanel_VIEWRedemptionListListContentID',
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
                                          //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore,
                                          //store: _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore,
                                          id: 'FloatPanel_VIEWRedemptionListListID',
                                          mode: 'SINGLE',
                                          height: '100%',
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
           
                                         '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="float:left;width:2%"><span style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal; text-transform:uppercase;">{RowNumber}.</div ><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:16.5%;color:blue;cursor: pointer;"><u>{RedeemBy}</u><br><div style="margin:-5px 0px 0px 0px;color:blue"><u>{PhoneNo}</u></div></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:15%">{RedeemHistoryStatusDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:12%">{ModifiedRedeemInfo}</div><div style="float:left;width:12%">{ModifiedRedeemPrizeImage}<br><div style="margin:-7px 0px 0px 0px"><b>{RedeemPrizeName}</b></div></div><div style="float:left;width:18%">{ModifiedRedeemHistoryStatus}</div><div style="float:left;width:24%"><button class="buttonredemptionlist" OnClick="FloatPanel_VIEWRedemptionList_OpenLoyaltyCard(' + "'" + '{PointCampaignCode}' + "'" + ',' + "'" + '{RedeemHistoryStatusBy}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RedeemInfo}' + "'" + ',' + "'" + '{StampedCampaignStartDate}' + "'" + ',' + "'" + '{StampRuleRemarks}' + "'" + ',' + "'" + '{CampaignName}' + "'" + ',' + "'" + '{PointCampaignEndDate}' + "'" + ',' + "'" + '{PointCampaignisRequiredStartEndDate}' + "'" + ',' + "'" + '{isCampaignExpired}' + "'" + ',' + "'" + '{RedeemBy}' + "'" + ');">View Loyalty Card</button>&nbsp;&nbsp;&nbsp;<button class="buttonredemptionlist" OnClick="FloatPanel_Redemption_UpdateStatusShow(' + "'" + '{ModifiedButtonUpdateRedemptionStatus_RedeemPrizeImage}' + "'" + ',' + "'" + '{RedeemHistoryCode}' + "'" + ')">Update Redemption Status</button></div></div>' +
           
                                           '</div>',
                                    
                                          emptyText: '<div class="myContent">No Redemption</div>',
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



                      ]
                  },

                ]

            },


           
          

            // {
            //     xtype: 'container',
            //     width: '100%',
            //     height: '100%',
            //     layout: {
            //         type: 'vbox',
            //         pack: 'start',
            //         align: 'center'

            //     },
            //     items: [
                
                  
                   





            //     ]
            // },











        ]





    });
    return _FloatPanel_VIEWRedemptionList;



}








function FloatPanel_VIEWRedemptionListShow() {
   
    Ext.Viewport.remove(_FloatPanel_VIEWRedemptionList);
    this.overlay = Ext.Viewport.add(FloatPanel_VIEWRedemptionList());
    this.overlay.show();
    //LoadingPanelShow(getLoadingIcon(), 'Loading...');
    AddRoutePages("FloatPanel_VIEWRedemptionListHide()");
    isFloatPanel_VIEWRedemptionListOpen = 'Y';
  //alert('FloatPanel_VIEWRedemptionListShow')
    document.getElementById("input-FloatPanel_VIEWRedemptionList_SearchTxt").addEventListener("keyup", VIEWRedemptionListLoadBySubscriberAccNoStoreOnKeyUp);
   // FloatPanel_VIEWRedemptionListMasterEnterprisesLoadByEnterpriseAccNoStore();
    FloatPanel_VIEWRedemptionListAdjustHeight();
    FloatPanel_DrawerMenu_MainHide();
    //FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore('Submitted');
    document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Status').value='New';
    document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value=GetCurrentYear();
    FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore('Submitted',GetCurrentYear());

}


function FloatPanel_VIEWRedemptionListShow_SubscriberAccNo(SubscriberAccNo) {
   
    Ext.Viewport.remove(_FloatPanel_VIEWRedemptionList);
    this.overlay = Ext.Viewport.add(FloatPanel_VIEWRedemptionList());
    this.overlay.show();
    //LoadingPanelShow(getLoadingIcon(), 'Loading...');
    AddRoutePages("FloatPanel_VIEWRedemptionListHide()");
    isFloatPanel_VIEWRedemptionListOpen = 'Y';
   // alert('FloatPanel_VIEWRedemptionListShow_SubscriberAccNo')
    document.getElementById("input-FloatPanel_VIEWRedemptionList_SearchTxt").addEventListener("keyup", VIEWRedemptionListLoadBySubscriberAccNoStoreOnKeyUp);
   // FloatPanel_VIEWRedemptionListMasterEnterprisesLoadByEnterpriseAccNoStore();
    FloatPanel_VIEWRedemptionListAdjustHeight();
    FloatPanel_DrawerMenu_MainHide();
    //FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore('Submitted');
    document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Status').value='New';
    document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value=GetCurrentYear();
  //  FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore('Submitted',GetCurrentYear());
    FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore('Submitted',GetCurrentYear(),SubscriberAccNo)

}






function FloatPanel_VIEWRedemptionListHide() {
    // FloatPanel_VIEWRedemptionList_AddCardHide();
   
    if (isFloatPanel_VIEWRedemptionListOpen == "Y") {
        _FloatPanel_VIEWRedemptionList.hide(); isFloatPanel_VIEWRedemptionListOpen = 'N';
        RemovePages("FloatPanel_VIEWRedemptionListHide()");
    }
 
}



function FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore(RedeemHistoryStatus) {
    loadFrom='FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore';
//alert(RedeemHistoryStatus)
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.getProxy().setExtraParam('RedeemHistoryStatus', RedeemHistoryStatus);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.getProxy().setUrl(GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatus');
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.load();
    

    var task = Ext.create('Ext.util.DelayedTask', function () {
     
        Ext.Viewport.setMasked(false);
        Ext.getCmp('FloatPanel_VIEWRedemptionListListID').setStore(_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore);
       

        LoadingPanelHide();







    });
    task.delay(500);




}


var loadFrom;
function FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore(RedeemHistoryStatus,Year) {
   
    loadFrom='FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore';
    
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.getProxy().setExtraParam('RedeemHistoryStatus', RedeemHistoryStatus);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.getProxy().setExtraParam('Year', Year);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.getProxy().setUrl(GetAPIurl() + '/VIEWRedemptionList/VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYear');
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.load();
    

    var task = Ext.create('Ext.util.DelayedTask', function () {
     
        Ext.Viewport.setMasked(false);

        countVIEWRedemptionListLoadBySubscriberAccNoFirst=_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.getCount();
        Ext.getCmp('FloatPanel_VIEWRedemptionList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countVIEWRedemptionListLoadBySubscriberAccNoFirst + ')</b></font>');
        Ext.getCmp('FloatPanel_VIEWRedemptionListListID').setStore(_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore);
       
        LoadingPanelHide();







    });
    task.delay(500);




}


function FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore(RedeemHistoryStatus,Year,SubscriberAccNo) {
    loadFrom='FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore';

  
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setExtraParam('RedeemHistoryStatus', RedeemHistoryStatus);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setExtraParam('Year', Year);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', SubscriberAccNo);
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/VIEWRedemptionList/VIEW_RedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNo');
    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.load();
    

    var task = Ext.create('Ext.util.DelayedTask', function () {
     
        Ext.Viewport.setMasked(false);

        countVIEWRedemptionListLoadBySubscriberAccNoFirst=_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.getCount();
        Ext.getCmp('FloatPanel_VIEWRedemptionList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countVIEWRedemptionListLoadBySubscriberAccNoFirst + ')</b></font>');
        Ext.getCmp('FloatPanel_VIEWRedemptionListListID').setStore(_DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore);
       
        LoadingPanelHide();







    });
    task.delay(1000);




}








var countVIEWRedemptionListLoadBySubscriberAccNoFirst;
function VIEWRedemptionListLoadBySubscriberAccNoStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countcountVIEWRedemptionListLoadBySubscriberAccNoSequence = 0;


    _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countcountVIEWRedemptionListLoadBySubscriberAccNoSequence = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.getCount();
                Ext.getCmp('FloatPanel_VIEWRedemptionList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countcountVIEWRedemptionListLoadBySubscriberAccNoSequence + ')</b></font>');
                // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countcountVIEWRedemptionListLoadBySubscriberAccNoSequence = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.getCount();
        Ext.getCmp('FloatPanel_VIEWRedemptionList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countcountVIEWRedemptionListLoadBySubscriberAccNoSequence + ')</b></font>');

        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.clearFilter();
        Ext.getCmp('FloatPanel_VIEWRedemptionList_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countVIEWRedemptionListLoadBySubscriberAccNoFirst + ')</b></font>');
        // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}








function FloatPanel_VIEWRedemptionListAdjustHeight() {
    // var y = parseInt(screen.height);
    // var x = parseInt(window.innerHeight);


    // var newHeights = x - 40;    
    // Ext.getCmp('FloatPanel_VIEWRedemptionListID').setHeight(x + 40);
    // Ext.getCmp('FloatPanel_VIEWRedemptionListListID').setHeight(newHeights);
    

}

//var UserAccountName;
function FloatPanel_VIEWRedemptionList_OpenLoyaltyCard(CampaignCode,SubscriberAccNo,CampaignLoyaltyType,EnterpriseAccNo,RedeemInfo,StampedCampaignStartDate,StampRuleRemarks,CampaignName,PointCampaignEndDate,PointCampaignisRequiredStartEndDate,isCampaignExpired,RedeemBy){
    var EnterpriseName=GetEnterpriseName();
    var EnterpriseLogo=GetEnterpriseLogoPath();
    UserAccountName=RedeemBy;
    if(CampaignLoyaltyType=='StampCampaign'){
  
  var CountLoyaltyStampeds=RedeemInfo.split('/');
  var CountLoyaltyStamped=CountLoyaltyStampeds[0];
  var Stamp=CountLoyaltyStampeds[1];
  
    //FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseAccNo, "NO", "No End Date", SubscriberAccNo, "NO", "NO", "NO", "NO", "NO", "NO");
    //FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseAccNo, "NO", "No End Date", SubscriberAccNo, EnterpriseName, "NO", "NO", CountLoyaltyStamped, Stamp, EnterpriseLogo);
  

    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseAccNo, StampedCampaignStartDate, "No End Date", SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);

}else{

    //FloatLoyaltyCardPointShow("TESET", CampaignCode, "TESET", "TESET", EnterpriseAccNo, "TESET", "NO", "NO");
   // FloatPanel_VIEWRedemptionList_OpenPointLoyaltyCard(CampaignCode,SubscriberAccNo);
   globalDashboard_LatestPointCampaignCode_SubscriberAccNo=SubscriberAccNo;
 FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, PointCampaignEndDate, PointCampaignisRequiredStartEndDate, isCampaignExpired);
}
}



function FloatPanel_VIEWRedemptionList_OpenStampLoyaltyCard(CampaignCode,SubcriberAccNo) {






    _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getProxy().setExtraParam('SubscriberAccNo', SubcriberAccNo);
    _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getProxy().setExtraParam('StampCampaignCode', CampaignCode);
    _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getProxy().setUrl(GetAPIurl() + '/StampCampaign/StampCampaignDashboardAyohaUserLatestStamp');

    _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
       
        var count = _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getCount();



        var modelRecord = _DataStore_StampCampaignDashboardAyohaUserLatestStampStore.getAt(0);


     

        if (count > 0) {

            var StampCampaignCode = modelRecord.get('StampCampaignCode');
            var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
            var StartDateOnly = modelRecord.get('StartDateOnly');
            var EndDateOnly = modelRecord.get('EndDateOnly');
            var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
            var isStampRulePopUp = modelRecord.get('isStampRulePopUp');
            var StampCampaignName = modelRecord.get('StampCampaignName');
            var EnterpriseName = modelRecord.get('EnterpriseName');
            var EnterpriseLogo = modelRecord.get('EnterpriseLogo');
            var CountStampStr = modelRecord.get('CountStampStr').split("/");
            var YESStamped = CountStampStr[0];
            var TotalRows = CountStampStr[1];

            localStorage.setItem('StampCampaignCode', StampCampaignCode);
            localStorage.setItem('CountLoyaltyStamped', YESStamped);
            localStorage.setItem('CountStampCardRowShow', TotalRows);
            //alert(StampRuleRemarks); alert(isStampRulePopUp);

            FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDateOnly, EndDateOnly, globalDashboard_LatestStampCampaignCode_SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, YESStamped, TotalRows, EnterpriseLogo);

        } else {

            swalFireStampInfo("Dear User,Hurry up go to (" + globalEnterpriseNameStampCard + ") get stamped and redeem the reward!.");
        }




        
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);



}




function FloatPanel_VIEWRedemptionList_OpenPointLoyaltyCard(CampaignCode,SubcriberAccNo) {


   

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "PointCampaignCode": CampaignCode,
            "SubscriberAccNo": SubcriberAccNo
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/PointCampaign/PointCampaignMerchantDashboardLoadByPointCampaignCode',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {
                        PointCampaignName = data.results[0].PointCampaignName;
                        PointCampaignCode = data.results[0].PointCampaignCode;
                        EnterpriseLogo = data.results[0].EnterpriseLogo;
                        EnterpriseName = data.results[0].EnterpriseName;
                        EnterpriseAccNo = data.results[0].EnterpriseAccNo;
                        EndDate = data.results[0].EndDate;
                        StrEndDate = data.results[0].StrEndDate;
                        PointisCampaignExpired = data.results[0].PointisCampaignExpired;


                        UserAccountName = data.results[0].UserAccountName;
                        UserAccountPhoto = data.results[0].UserAccountPhoto;
                        UserMobilePhone = data.results[0].UserMobilePhone;
                        UserPlayerID = data.results[0].UserPlayerID;

             

                     
                        FloatLoyaltyCardPointShow(PointCampaignName, PointCampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, StrEndDate, PointisCampaignExpired, UserAccountName, UserAccountPhoto);
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {

                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    task.delay(500);

















}



