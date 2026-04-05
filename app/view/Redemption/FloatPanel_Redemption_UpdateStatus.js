Ext.define('ianMizi.view.Redemption.FloatPanel_Redemption_UpdateStatus', {

});

var _FloatPanel_Redemption_UpdateStatus;


var isFloatPanel_Redemption_UpdateStatusOpen = 'N';











function FloatPanel_Redemption_UpdateStatus() {

    _FloatPanel_Redemption_UpdateStatus =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_Redemption_UpdateStatusID',
         draggable: false,
         zIndex: 500,


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
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {
                         //if (e.direction == "up") {
                         //    FloatPanel_Redemption_UpdateStatusHide();
                         //}
                         if (e.direction == "left") {
                             _FloatPanel_Redemption_UpdateStatus.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_Redemption_UpdateStatusOpen = 'N';
                         } if (e.direction == "right") {
                             _FloatPanel_Redemption_UpdateStatus.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_Redemption_UpdateStatusOpen = 'N';
                         }

                     }
                 });
             }
         },


         items: [


             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 style: "background-color: white;",
                // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                    type: 'fit',

                },
                 items: [


                     
                     
            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                height: 60,
            
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
            
                id: 'containerFloatPanel_Redemption_UpdateStatusHeader1',
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
                            width:20

                        },
            
                                  
                                    {
                                        margin: '-10 -5 0 0',
                                        html: '<font size=4 color=black><b>Redemption Approval</b></font>'
                                    },
                                    {
                                        xtype: 'spacer',
            
                                    },
            
                          {
                              xtype: 'button',
                              id: 'btnFloatPanel_Redemption_UpdateStatus_backright',
                              height: 30,
                              width: 35,
                              // iconCls: 'list',
                              margin: '-5 1 0 0',
                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                              ui: 'plain',
                              handler: function () {
                                  _FloatPanel_Redemption_UpdateStatus.hide(Ext.fx.Animation({
                                    type: 'popOut',
                                    //direction: 'left',
                                    //easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250
            
                                  }));
                                  isFloatPanel_Redemption_UpdateStatusOpen = 'N';
                              }
                          },
            
            
            
                          {
                            xtype: 'spacer',
                            width:20

                        },
            
            
            
                       ]
            
            },








            {

                xtype: 'container',
                width: '100%',
                // width: 40,
                docked: 'bottom',
                height: 50,
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                style:GetFooterStyle(),
                id: 'containerFloatPanel_Redemption_UpdateStatus_MenuBottom',
               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
               
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
            
            
            
            
                // hidden:true,
                items:
                       [
                        {
                            xtype:'spacer',
                                        },
                                        
                                                                    // {
                                                                    //     xtype: 'button',
                                                                    //     ////  align: 'stretch',
                                        
                                                                    //     ui: 'plain',
                                                                    //   //  width: '100%',
                                                                    //     margin: '-5 0 0 0',
                                                                    //     height: 40,
                                                                    //     id: 'btnFloatPanel_Redemption_UpdateStatus_Confirmed',
                                                                    //     //hidden: true,
                                        
                                                                    //     html: '<button class="button3viewloyaltycard">Save</button>',
                                                                    //     handler: function () {
                                                                    //         var val = document.getElementById('input-FloatPanel_Redemption_UpdateStatus_UpdateStatus').value;
                                                                          
                                                                    //         if (val) {
                                                                    //             LoadingCustomMsgShow('Processing...', '4');
                                                                    //             FloatPanel_Redemption_UpdateStatus_RedeemNow();
                                                                    //         } else {
                                                                    //             swalFireFail("Approval Status is Required!");
                                                                    //         }
                                                                    //     },
                                        
                                        
                                                                    // },
                                        



                                                                    {
                                                                        xtype: 'button',
                                                                        id:'btnFloatPanel_Redemption_UpdateStatus_Confirmed',
                                                                        //  badgeText: '1',
                                                                        margin: '0 -18 -8 0',
                                                                        //height: 35,
                                                                        //width: 35,
                                                                        html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                                                                        ui: 'plain',
                                                                        handler: function () {
                                                                            var val = document.getElementById('input-FloatPanel_Redemption_UpdateStatus_UpdateStatus').value;
                                                                          
                                                                            if (val) {
                                                                                LoadingCustomMsgShow('Processing...', '4');
                                                                                FloatPanel_Redemption_UpdateStatus_RedeemNow();
                                                                            } else {
                                                                                swalFireFail("Approval Status is Required!");
                                                                            }        
                                                                        }
                                                                    },
                                                               {
                                                                   xtype: 'button',
                                                                   //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                                                                   id:'txtbtnFloatPanel_Redemption_UpdateStatus_Confirmed',
                                                                   //  badgeText: '1',
                                                                   margin: '7 0 0 7',
                                                                   //height: 40,
                                                                   //width: 130,
                                                                   html: '<font size=2 color=grey>Save</font>',
                                                                   ui: 'plain',
                                                                   handler: function () {
                                                                    var val = document.getElementById('input-FloatPanel_Redemption_UpdateStatus_UpdateStatus').value;
                                                                          
                                                                    if (val) {
                                                                        LoadingCustomMsgShow('Processing...', '4');
                                                                        FloatPanel_Redemption_UpdateStatus_RedeemNow();
                                                                    } else {
                                                                        swalFireFail("Approval Status is Required!");
                                                                    }
                                                                   }
                                                               },
                                                           













                                                                    {
                                                                        xtype:'spacer',
                                                                        width:20
                                                                                    },
                                        
                        //    {
                        //        xtype: 'container',
                        //        width: '100%',
                        //        style: "background-color: transparent",
                        //        height: 50,
                        //        layout: {
                        //            type: 'hbox',
                        //            pack: 'center',
                        //            align: 'right',
                        //        },
                        //        //scrollable: {
                        //        //    direction: 'horizontal',
                        //        //    directionLock: false
                        //        //},
                        //        items: [
            

            
            
            
            
            
            
            
            
            
            
            
            
            
                        //        ]
                        //    },
            
            
            
            
            
                                      //{
                                      //    margin: '0 0 0 0',
                                      //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                      //},
            
            
            
            
            
            
            
            
            
            
                       ]
            
            },





{
    xtype: 'container',
    // docked: 'top',
    // hidden:true,
    margin: '20 0 0 0',
    //  docked: 'bottom',
    style: 'background-color: transparent;',
    id: 'containerFloatPanelRedemption_UpdateStatusMaster',
    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
    zIndex: 90,
    //height:200,
    // autoHeight:true,
    // height: '100%',
    // flex:1,
    //  maxHeight:'100%',
    //height:'63%',
   // width: '100%',
   height: 800,
    height: '100%',
    // margin: '70 0 0 0',

    layout: {

        type: 'vbox',
        pack: 'start',
        align: 'left'
    },
    scrollable: {
        direction: 'vertical',
        directionLock: true
    },
    items: [

        {
            xtype: 'container',
            width: '50%',
            height: 1000,
            margin: '0 0 0 10',
            //style: {
            //    // background: '#D25959',
            //    background: 'rgba(76, 175, 80, 0.3);',
            //    // border: '2px'
            //},
            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 0px 0px 0px 0px;',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left',
            },
         
            items: [
                  {
                      xtype: 'container',
                      width: '100%',
                      zIndex: -100,
                      margin: '-10 0 0 0',
                      //style: {
                      //    // background: '#D25959',
                      //    background: 'rgba(76, 175, 80, 0.3);',
                      //    // border: '2px'
                      //},
                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                      style: 'background-color:transparent',
                      layout: {
                          type: 'vbox',
                          pack: 'start',
                          align: 'center',
                      },
                      //scrollable: {
                      //    direction: 'vertical',
                      //    directionLock: true
                      //},
                      items: [
                           {
                               width: '60%',
                               zIndex: -100,
                               height: 400,
                               margin: '30 0 0 5',
                               id: 'FloatPanel_Redemption_UpdateStatus_PrizeImg',
                               html: '<img src="https://setkita.com/AyohaImgCard/AyohaRedeemPrize/01/externalhd-removebg-preview.png"   style="width:100%;height:400px;zIndex:-100px;">',
                           },


                          
                      ]
                  },

                           {
                               xtype: 'container',
                               width: '100%',
                               zIndex: 100,
                               margin: '10 0 0 0',
                               layout: {
                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'left',
                               },
                               items: [
                                   {

                                       id: 'FloatPanel_Redemption_UpdateStatus_PrizeLbl',
                                       width: '100%',
                                       html: '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem By:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ModifiedItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;text-align:right;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Current Redeem Status:<br>{ModifiedRedeemHistoryStatus}</td></tr></table>'

                                       // html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">5621</div>',
                                   },
                               ]
                           },




                             //{
                             //    xtype: 'container',
                             //    style: "background-color: white;border-bottom:1px solid white;",
                             //    height: 2,
                             //    width: '100%',
                             //    margin: '3 0 0 0',
                                
                             //},

                           










{
    xtype: 'container',
    width: '100%',
    //hidden: true,
    style: ' background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center'

    },
    items: [

             {
                 xtype: 'container',

                 width: '90%',
                 style: {

                     background: 'transparent',

                 },
                 layout: {
                     type: 'vbox',
                     pack: 'left',
                     align: 'left'

                 },
                 items: [


                     {
                         xtype: 'container',

                         width: '100%',
                         style: {

                             background: 'transparent',

                         },
                         layout: {
                             type: 'hbox',
                             pack: 'start',
                             align: 'center'

                         },
                         items: [
                         {
                             width: '100%',
                             html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;text-align:left;width:100%;" >Redeem Approval:</div>',

                         },



                         ]
                     },




{
    margin: '-2 0 0 5',
    id: 'FloatPanel_Redemption_UpdateStatus_UpdateStatus',
    width: '100%',
    height: 20,
    html: '<input type="text" id="input-FloatPanel_Redemption_UpdateStatus_UpdateStatus"  style="border-color:black;color:black;width:100%;text-align: left;font-size:15px;">'

},


                 ]

             },


              //{
              //    xtype:'container'

              //},
                {
                    xtype: 'button',
                    id: 'btnFloatPanel_Redemption_UpdateStatus_UpdateList',
                    //  badgeText: '1',
                    margin: '0 0 -10 0',
                    height: 35,
                    width: 35,
                    html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                       // FloatPanel_RedeemApprovalStatusShow();
                       FloatPanel_UpdateRedeemApprovalStatusShow();
                    }
                },

    ]

},

{
    width: '100%',
    margin: '20 0 0 0',
    html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:bold;text-align:left;width:100%;" >Approval Remarks:</div>',

},
{

margin: '2 0 0 5',
width: '98%',
height: 40,
//id: 'htmlAnimatedIntervalValue',
html: '<textarea id="input-FloatPanel_Redemption_UpdateStatus_Remarks"  style="border: 1px solid grey;color:black;text-align: left;font-size:15px;background-color: white;width:100%;height:80px;" wrap="hard">'
},






            ]
        },






    ]
},





                 ]

             },




         ]















     });
    return _FloatPanel_Redemption_UpdateStatus;



}




var FloatPanel_Redemption_UpdateStatus_globalItemCode;
var FloatPanel_Redemption_UpdateStatus_globalRemarks;
var FloatPanel_Redemption_UpdateStatus_ItemID;
var FloatPanel_Redemption_UpdateStatus_RedeemHistoryCode;
var FloatPanel_Redemption_UpdateStatus_RedeemPoint;
var FloatPanel_Redemption_UpdateStatus_CampaignType;
var FloatPanel_Redemption_UpdateStatus_RedeemHistoryStatusBy;
var FloatPanel_Redemption_UpdateStatus_EnterpriseAccNo;
var FloatPanel_Redemption_UpdateStatus_PointCampaignCode;

function FloatPanel_Redemption_UpdateStatusShow(RedeemPrizeImage,val) {

    Ext.Viewport.remove(_FloatPanel_Redemption_UpdateStatus);
    this.overlay = Ext.Viewport.add(FloatPanel_Redemption_UpdateStatus());
    this.overlay.show();
    isFloatPanel_Redemption_UpdateStatusOpen = 'Y';

// alert(RedeemPrizeImage)
// alert(val)
    // Ext.getCmp('htmlFloatPanel_Redemption_UpdateStatusPointsCollected').setHtml('<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:40px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;color:black;width:100%;height:110px">' + localStorage.getItem("AyohaPoint") + '</div>');
    //  Ext.getCmp('containerRedeemPrize').setHeight(adjustHeight());

    FloatPanel_Redemption_UpdateStatus_RedeemHistoryCode = val;
    if(loadFrom=='FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore'){
    var CampaignType = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var AyohaUserAccountName = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var AyohaUserMembershipNo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var RedeemPrizeName = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var ItemCode = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var RedeemInfo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var RedeemStatus = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var PointCampaignCode = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    }
    if(loadFrom=='FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore'){
        var CampaignType = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        var AyohaUserAccountName = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        var AyohaUserMembershipNo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        var RedeemPrizeName = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        var ItemCode = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        var RedeemInfo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        var RedeemStatus = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        var EnterpriseAccNo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        var PointCampaignCode = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearSubscriberAccNoStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
        }
        if(loadFrom=='FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore'){
    var CampaignType = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var AyohaUserAccountName = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var AyohaUserMembershipNo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var RedeemPrizeName = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var ItemCode = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var RedeemInfo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var RedeemStatus = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);
    var PointCampaignCode = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);

    
   }

   // var ItemCode = _DataStore_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore.findRecord('RedeemHistoryCode', val, 0, false, false, true);



    FloatPanel_Redemption_UpdateStatus_globalItemCode = ItemCode.get('ItemCode');
    FloatPanel_Redemption_UpdateStatus_CampaignType = CampaignType.get('CampaignType');
    FloatPanel_Redemption_UpdateStatus_RedeemHistoryStatusBy=AyohaUserMembershipNo.get('RedeemHistoryStatusBy');
    FloatPanel_Redemption_UpdateStatus_EnterpriseAccNo=EnterpriseAccNo.get('EnterpriseAccNo');
    FloatPanel_Redemption_UpdateStatus_PointCampaignCode = PointCampaignCode.get('PointCampaignCode')
   var redeeminfotypelabelHeader;
   var redeeminfotypelabel;
   if(CampaignType.get('CampaignType')=="StampCampaign"){
    redeeminfotypelabelHeader='Stamped Campaign';
    redeeminfotypelabel='(Stamped Redeem)';
   }else{
    redeeminfotypelabelHeader='Point Campaign';
    redeeminfotypelabel='(Point Redeem)';
   }
  
  if(RedeemPrizeImage.includes('<div'))
  {
    Ext.getCmp('FloatPanel_Redemption_UpdateStatus_PrizeImg').setHtml(RedeemPrizeImage);
   
   // Ext.getCmp('FloatPanel_Redemption_UpdateStatus_PrizeImg').setHtml(`<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:7px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp3">5%</div><br><div id="divContentFloatLoyaltyCardStampExt3" style="margin:-90px 0px 0px 0px"><font size="3">Less</font></div></div>`);
   
  }else{
    Ext.getCmp('FloatPanel_Redemption_UpdateStatus_PrizeImg').setHtml('<img src="' + RedeemPrizeImage + '"   style="width:100%;height:380px;zIndex:-100px;">');
  
  }
   
   
   
   
   Ext.getCmp('FloatPanel_Redemption_UpdateStatus_PrizeLbl').setHtml('<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem By:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">' + AyohaUserAccountName.get('RedeemBy') + ' ' + AyohaUserMembershipNo.get('RedeemHistoryStatusBy') + '</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">' + RedeemPrizeName.get('RedeemPrizeName') + '</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">' + ItemCode.get('ItemCode') + '</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;text-align:right;">'+redeeminfotypelabelHeader+':<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">' + RedeemInfo.get('RedeemInfo') +''+redeeminfotypelabel+'</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Current Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">' + RedeemStatus.get('RedeemHistoryStatus')  + '</div></td></tr></table>');



//    id: 'FloatPanel_Redemption_UpdateStatus_PrizeLbl',
//                                        width: '100%',
//                                        html: '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem By:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ModifiedItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;text-align:right;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Current Redeem Status:<br>{ModifiedRedeemHistoryStatus}</td></tr></table>'


}





function FloatPanel_Redemption_UpdateStatusHide() {
    _FloatPanel_Redemption_UpdateStatus.hide(); isFloatPanel_Redemption_UpdateStatusOpen = 'N';
}



function FloatPanel_Redemption_UpdateStatus_RedeemNow() {

    var remarks;
    var UpdateStatus=document.getElementById('input-FloatPanel_Redemption_UpdateStatus_UpdateStatus').value;

    remarks = document.getElementById('input-FloatPanel_Redemption_UpdateStatus_Remarks').value;

    if (remarks.length <= 0){
        remarks = "No Remarks";
    }


if(UpdateStatus){

}else{
    swalFireFail("Status Not Valid!");

    return;
}
   

    var obj = {
        "CampaignType": FloatPanel_Redemption_UpdateStatus_CampaignType,
        "ItemCode": FloatPanel_Redemption_UpdateStatus_globalItemCode,
        "RedeemHistoryCode": FloatPanel_Redemption_UpdateStatus_RedeemHistoryCode,
        "RedeemHistoryStatus": document.getElementById('input-FloatPanel_Redemption_UpdateStatus_UpdateStatus').value,
        "RedeemHistoryStatusBy": FloatPanel_Redemption_UpdateStatus_RedeemHistoryStatusBy,
        "RedeemPoint": 0,
        "Remarks": remarks,
        "RowStatus": 'Active',
        "EnterpriseAccNo": FloatPanel_Redemption_UpdateStatus_EnterpriseAccNo,
        "PointCampaignCode": FloatPanel_Redemption_UpdateStatus_PointCampaignCode,
        "RedeemHistoryApprovalStatusBy": GetCurrentUserAccountNo()
    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/MerchantRedeemPrizeHistory/MerchantRedeemPrizeHistoryUpdateSatatus',
       
        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Successfully!");
             
                FloatPanel_Redemption_UpdateStatusHide();
                FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore('ALL',GetCurrentYear());

              //  Load_FloatLoyaltyCardPoint_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore();

            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }
           // LoadingPanelHide();
            LoadingCustomMsgHide();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            LoadingCustomMsgHide();
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });


}

//GetCurrAyohaUserGroupCode()
