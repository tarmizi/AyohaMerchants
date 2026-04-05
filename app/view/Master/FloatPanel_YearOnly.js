Ext.define('ianMizi.view.Master.FloatPanel_YearOnly', {

});

var _FloatPanel_YearOnly;


var isFloatPanel_YearOnlyOpen = 'N';


var globalYearSourceModule = "NA";








function FloatPanel_YearOnly() {

    _FloatPanel_YearOnly =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 380,
         width: 450,
         id: 'LoadingFloatPanel_YearOnlyID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: false,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'slideOut',
             direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
       //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:10px 10px 0px 0px;border-style:2px solid black;',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_YearOnly.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_YearOnly.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_YearOnlyOpen = 'N';
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             //  style: 'border-bottom:0px solid;background-color:white;',
             style: ' background-color:transparent;',
            // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     height: 40,
                     style: ' background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_YearOnlyHeader',
                     //style: {
                     //    // background: '#D25959',
                     //    background: 'transparent',
                     //    // border: '2px'
                     //},
                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
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
width:10,
                                },
                                {
                                    margin: '0 0 0 0',
                                    html: '<font size=4 color=black><b>Select Year</b></font>'
                                },

                                          

                                           {
                                               xtype: 'spacer',

                                           },


                                           {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_YearOnlyBack',
                                            height: 30,
                                            width: 35,
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {

                                                _FloatPanel_YearOnly.hide(Ext.fx.Animation({
                                                    type: 'popOut',
                                                    //direction: 'left',
                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                    duration: 250

                                                }));
                                                isFloatPanel_YearOnlyOpen = 'N';

                                            }
                                        },
                                              {
                                                  xtype: 'panel',
                                                  width: 20
                                              },










                            ]

                 },



            //{


            //    // xtype: 'button',
            //    xtype: 'container',
            //    margin: '10 0 0 0',
            //    id: 'FloatPanel_YearOnlyBorderBg',
            //    //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
            //    style: ' background-color:transparent;',
            //    height: 290,
            //    width: '100%',
            //    // style: 'border:2px solid #D25959;',
            //    layout: {
            //        type: 'vbox',
            //        pack: 'left',
            //        align: 'left'
            //    },
            //    items: [







                    


            //    ]


            //},




            {
                xtype: 'list',
                //  flex: 1,
                store: 'YearOnlyStore',
                id: 'FloatPanel_YearOnlyLoadMasterListID',
                mode: 'SINGLE',
                disableSelection: false,

                //itemTpl: '<div class="myContent">' +
                //   '<div><b>{ID}</b></div>' +
                //   '<div>{ReceiptName}</div>' +
                //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                //   '<div><b>{Amount}</b></div>' +
                //    '<div style="display: none;">{ID}</div>' +
                //   '</div>',
                style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
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
                itemTpl: '<div class="myContent">' +


                          // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +


                      //jadi// '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:13%"><b>{ID}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%"><b>{ReceiptName}</b><br>{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div>' +

                   // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:center;width:77.5%;"><b>{Year}</b></div>' +
                     '<div style="overflow:auto;width:100%;height:100%;text-align:center"><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:center;width:100%;text-align:center"><b>{Year}</b></div>' +

                     //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


             // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                           '</div>',

                width: '100%',
                height: 320,
                disableSelection: true,

                listeners: {


                    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                        var Year = record.get('Year');


                        if (globalYearSourceModule == "DashBoard_VisitorAnalsys") {
                            document.getElementById('Dashboard_visitorAnalsysYear').value = Year;
                            Gnerate_VisitorAnalsysChart();
                        } if (globalYearSourceModule == "FloatPanel_AyohaStore_OrderHistory") {
                            globalFloatPanel_AyohaStore_OrderHistory_Year = Year;
                            var OrderStatus = globalFloatPanel_AyohaStore_OrderHistory_OrderStatus;
                            var color = globalFloatPanel_AyohaStore_OrderHistory_Color;
                            FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore(OrderStatus, color);
                        } if (globalYearSourceModule == "AyohaeWallet_TransactionHistory") {
                            globalFloatPanel_AyohaStore_OrderHistory_Year = Year;
                            FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(Year);
                           
                        }
                        if(isFloatPanel_VIEWRedemptionListOpen == 'Y' && isFloatPanel_Redemption_UpdateStatusOpen=='N'){
                           var RedeemStatus= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Status').value;
                           var Year= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value;
                            FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore(RedeemStatus,Year);
                        }
                        else {
                         document.getElementById('FloatPanel_PointManagement_CreatePointsMonthYear').value = Year;
                            FloatPanel_PointManagement_CreatePoints_LoyaltyPointLoadByEnterpriseAccNoStore("NotUsed", Year);

                        }





                        if (isFloatPanel_YearOnlyOpen == 'Y') {
                            _FloatPanel_YearOnly.hide(Ext.fx.Animation({
                                //type: 'popOut',
                                //easing: 'easeInOut',
                                //duration: 250,
                                type: 'fadeOut',
                                duration: 400,
                            }));

                        }
                        isFloatPanel_YearOnlyOpen = 'N';




                    },

                    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                        var Year = record.get('Year');


                        if (globalYearSourceModule == "DashBoard_VisitorAnalsys") {
                            document.getElementById('Dashboard_visitorAnalsysYear').value = Year;
                            Gnerate_VisitorAnalsysChart();
                        } if (globalYearSourceModule == "FloatPanel_AyohaStore_OrderHistory") {
                            globalFloatPanel_AyohaStore_OrderHistory_Year = Year;
                            var OrderStatus = globalFloatPanel_AyohaStore_OrderHistory_OrderStatus;
                            var color = globalFloatPanel_AyohaStore_OrderHistory_Color;
                            FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore(OrderStatus, color);
                        }
                        if (globalYearSourceModule == "AyohaeWallet_TransactionHistory") {
                            globalFloatPanel_AyohaStore_OrderHistory_Year = Year;
                            FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(Year);
                           
                        }
                        if(isFloatPanel_VIEWRedemptionListOpen == 'Y' && isFloatPanel_Redemption_UpdateStatusOpen=='N'){
                            var RedeemStatus= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Status').value;
                            var Year= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value;
                             FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore(RedeemStatus,Year);
                         }
                        
                        else {
                            document.getElementById('FloatPanel_PointManagement_CreatePointsMonthYear').value = Year;
                            FloatPanel_PointManagement_CreatePoints_LoyaltyPointLoadByEnterpriseAccNoStore("NotUsed", Year);

                        }





                        if (isFloatPanel_YearOnlyOpen == 'Y') {
                            _FloatPanel_YearOnly.hide(Ext.fx.Animation({
                                //type: 'popOut',
                                //easing: 'easeInOut',
                                //duration: 250,
                                type: 'fadeOut',
                                duration: 400,
                            }));

                        }
                        isFloatPanel_YearOnlyOpen = 'N';


                    }
                }





            },


            {
                xtype: 'list',
                //  flex: 1,
                store: 'YearOnlyStore',
                id: 'FloatPanel_YearOnlyLoadMasterListID_RedemptionList',
                mode: 'SINGLE',
                disableSelection: false,
hidden:true,
                //itemTpl: '<div class="myContent">' +
                //   '<div><b>{ID}</b></div>' +
                //   '<div>{ReceiptName}</div>' +
                //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                //   '<div><b>{Amount}</b></div>' +
                //    '<div style="display: none;">{ID}</div>' +
                //   '</div>',
                style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
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
                itemTpl: '<div class="myContent">' +


                          // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +


                      //jadi// '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:13%"><b>{ID}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%"><b>{ReceiptName}</b><br>{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div>' +

                   // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:center;width:77.5%;"><b>{Year}</b></div>' +
                     '<div style="overflow:auto;width:100%;height:100%;text-align:center"><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:center;width:100%;text-align:center"><b>{Year}</b></div>' +

                     //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


             // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                           '</div>',

                width: '100%',
                height: 320,
                disableSelection: true,

                listeners: {


                    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                        var Year = record.get('Year');
                        document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value=Year;

                        var RedeemStatus= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Status').value;
                        var Year= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value;
                         FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore(RedeemStatus,Year);





                        if (isFloatPanel_YearOnlyOpen == 'Y') {
                            _FloatPanel_YearOnly.hide(Ext.fx.Animation({
                                //type: 'popOut',
                                //easing: 'easeInOut',
                                //duration: 250,
                                type: 'fadeOut',
                                duration: 400,
                            }));

                        }
                        isFloatPanel_YearOnlyOpen = 'N';




                    },

                    itemsingletap: function (dataview, index, target, record, e, eOpts) {
                        var Year = record.get('Year');


                       
                        document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value=Year;

                         var RedeemStatus= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Status').value;
                         var Year= document.getElementById('input-FloatPanel_VIEWRedemptionList_SearchTxt_Year').value;
                          FloatPanel_VIEWRedemptionListLoadByEnterpriseAccNoRedeemHistoryStatusYearStore(RedeemStatus,Year);

                        if (isFloatPanel_YearOnlyOpen == 'Y') {
                            _FloatPanel_YearOnly.hide(Ext.fx.Animation({
                                //type: 'popOut',
                                //easing: 'easeInOut',
                                //duration: 250,
                                type: 'fadeOut',
                                duration: 400,
                            }));

                        }
                        isFloatPanel_YearOnlyOpen = 'N';


                    }
                }





            },

             ]




         }







     });
    return _FloatPanel_YearOnly;





}

function FloatPanel_YearOnlyShow() {

    Ext.Viewport.remove(_FloatPanel_YearOnly);
    this.overlay = Ext.Viewport.add(FloatPanel_YearOnly());
    this.overlay.show();
    isFloatPanel_YearOnlyOpen = 'Y';
    
    if(isFloatPanel_VIEWRedemptionListOpen == 'Y'){
        Ext.getCmp('FloatPanel_YearOnlyLoadMasterListID_RedemptionList').setHidden(false);
        Ext.getCmp('FloatPanel_YearOnlyLoadMasterListID').setHidden(true);
    }else
    {
        Ext.getCmp('FloatPanel_YearOnlyLoadMasterListID_RedemptionList').setHidden(true);
        Ext.getCmp('FloatPanel_YearOnlyLoadMasterListID').setHidden(false);
    }
}


function FloatPanel_YearOnlyHide() {

    if (isFloatPanel_YearOnlyOpen == 'Y') {
        _FloatPanel_YearOnly.hide(); isFloatPanel_YearOnlyOpen = 'N';
    }
   
}








