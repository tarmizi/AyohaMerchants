Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistory', {

});

var _FloatPanel_AyohaStore_OrderHistory;


var isFloatPanel_AyohaStore_OrderHistoryOpen = 'N';





function FloatPanel_AyohaStore_OrderHistory() {

    _FloatPanel_AyohaStore_OrderHistory =
     Ext.create('Ext.Panel', {
        zIndex: 140,
        // zIndex: 220,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         height: '100%',
         styleHtmlContent: true,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_OrderHistoryID',
         // name: 'nameFloatPanel_AyohaStore_OrderHistoryID',
         draggable: false,
         //hideOnMaskTap: true,


         centered: true,
         //bottom: 64,         
         modal: true,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250

             type: 'popOut',
             duration: 150,
             easing: 'ease-out'
         },

         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',




         items: [
            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                height: 60,
               // height: '5%',

               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',


                id: 'containerFloatPanel_AyohaStore_OrderHistoryHeader',
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
                             width:20
                         },
                         {
                             margin: '0 0 0 0',
                           
                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                             id: 'htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt',
                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Order Transaction</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:purple;margin:-28px 0px 0px 0px">New Order (1)</div>',

                             //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                         },

                         {
                             margin: '-13 0 0 3',
                           hidden:true,
                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                             id: 'htmlFloatPanel_AyohaStore_OrderHistory_MemberName_TitleHeaderTxt',
                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">- TARMIZI BIN RAHIM</div>',

                             //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                         },

                                     {
                                         xtype: 'spacer'
                                     },


                                      
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaStore_OrderHistoryBack',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {

                                             _FloatPanel_AyohaStore_OrderHistory.hide(Ext.fx.Animation({
                                                 type: 'popOut',
                                                 //direction: 'left',
                                                 //easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             isFloatPanel_AyohaStore_OrderHistoryOpen = 'N';
                                             RemovePages("FloatPanel_AyohaStore_OrderHistoryHide()");

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
                docked: 'top',
                height: 60,
               // height: '5%',

               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',


                id: 'containerFloatPanel_AyohaStore_OrderHistoryHeader_StatusLog',
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
                             width:10
                         },
                         {
                             margin: '0 0 0 0',
                           
                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                             id: 'htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt_StatusLog',
                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Order Status Log</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:purple;margin:-28px 0px 0px 0px"></div>',

                             //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                         },

                         {
                             margin: '-13 0 0 3',
                           hidden:true,
                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                             id: 'htmlFloatPanel_AyohaStore_OrderHistory_MemberName_TitleHeaderTxt_StatusLog',
                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">- TARMIZI BIN RAHIM</div>',

                             //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                         },

                                     {
                                         xtype: 'spacer'
                                     },


                                      
                                     {
                                         xtype: 'button',
                                       //  id: 'btnFloatPanel_AyohaStore_OrderHistoryBack',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {

                                             _FloatPanel_AyohaStore_OrderHistory.hide(Ext.fx.Animation({
                                                 type: 'popOut',
                                                 //direction: 'left',
                                                 //easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             isFloatPanel_AyohaStore_OrderHistoryOpen = 'N';
                                             RemovePages("FloatPanel_AyohaStore_OrderHistoryHide()");

                                         }
                                     },

                                     {
                                         xtype: 'spacer',
                                         width:10
                                     },










                       ]

            },
               {
                   xtype: 'container',
                   width: '100%',
                   height: '100%',
                   style: ' background-color: transparent',
                   margin: '0 0 0 0',
                   layout: {
                       //type: 'fit',
                       type: 'vbox',
                       pack: 'start',
                       align: 'center',

                   },
                   items: [
                    //    {

                    //        xtype: 'container',
                    //        width: '100%',
                    //        docked: 'top',
                    //        //height: 40,
                    //        height: '5%',

                    //        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',


                    //        id: 'containerFloatPanel_AyohaStore_OrderHistoryHeader',
                    //        //style: {
                    //        //    // background: '#D25959',
                    //        //    background: 'transparent',
                    //        //    // border: '2px'
                    //        //},
                    //        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    //        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    //        layout: {
                    //            type: 'hbox',
                    //            pack: 'center',
                    //            align: 'center',
                    //        },
                    //        // hidden:true,
                    //        items:
                    //               [
                    //                 {
                    //                     xtype: 'spacer',
                    //                     width:20
                    //                 },
                    //                 {
                    //                     margin: '0 0 0 0',
                                      
                    //                     //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                    //                     id: 'htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt',
                    //                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Order Transaction</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:purple;margin:-28px 0px 0px 0px">New Order (1)</div>',

                    //                     //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                    //                 },

                    //                 {
                    //                     margin: '-13 0 0 3',
                    //                   hidden:true,
                    //                     //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                    //                     id: 'htmlFloatPanel_AyohaStore_OrderHistory_MemberName_TitleHeaderTxt',
                    //                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">- TARMIZI BIN RAHIM</div>',

                    //                     //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                    //                 },

                    //                             {
                    //                                 xtype: 'spacer'
                    //                             },


                                                 
                    //                             {
                    //                                 xtype: 'button',
                    //                                 id: 'btnFloatPanel_AyohaStore_OrderHistoryBack',
                    //                                 height: 30,
                    //                                 width: 35,
                    //                                 // iconCls: 'list',
                    //                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                    //                                 ui: 'plain',
                    //                                 handler: function () {

                    //                                     _FloatPanel_AyohaStore_OrderHistory.hide(Ext.fx.Animation({
                    //                                         type: 'popOut',
                    //                                         //direction: 'left',
                    //                                         //easing: 'cubic-bezier(.7,0,.7,1)',
                    //                                         duration: 250

                    //                                     }));
                    //                                     isFloatPanel_AyohaStore_OrderHistoryOpen = 'N';
                    //                                     RemovePages("FloatPanel_AyohaStore_OrderHistoryHide()");

                    //                                 }
                    //                             },

                    //                             {
                    //                                 xtype: 'spacer',
                    //                                 width:20
                    //                             },










                    //               ]

                    //    },
                       
                 {
                     xtype: 'tabpanel',
                     //hidden: true,
                     //  hidden:true,
                     id: 'tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent',
                     // style: 'border-top:2px solid #ECF0F1;background: white;',
                     // style: 'background-color: black;',
                     // margin: '-20 0 0 -26',
                   

                     //width: 200,
                     width: '100%',
                     height: '92%',
                     //height: 120,
                     //height: 50,
                     //  zIndex: 200,
                     //  docked: 'bottom',
                     tabBarPosition: 'top',
                     ui: 'plain',
                    
                     initialize: function (c) {
                         //this.getTabBar().hide();


                     },

                     items: [
                         
                         {
                             xtype: 'container',
                             width: '100%',
                             id: 'containerFloatPanel_AyohaStore_OrderHistory_AllOrders',
                             height: '100%',
                            
                             //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',

                             //style: "background-color: #F35B57;",
                             //styleHtmlContent: true,
                             title: 'titleFloatPanel_AyohaStore_OrderHistory_AllOrders',
                             style: 'background-color:transparent',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'left'
                             },
                             items: [
                               
                                {
                                    xtype: 'list',
                                    margin: '0 0 0 0',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore,
                                    id: 'FloatPanel_AyohaStore_OrderHistory_AllOrdersListIDx',
                                    mode: 'SINGLE',
                                    disableSelection: false,
                                 //   grouped: true,
                                    style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
                                    //scrollable: {
                                    //    direction: 'vertical',
                                    //    indicators: {
                                    //        y: {
                                    //            autoHide: true
                                    //        },
                                    //        x: {
                                    //            autoHide: true
                                    //        }
                                    //    }
                                    //},



                                    scrollable: {
                                        direction: 'vertical',
                                        // directionLock: true,
                                        indicators: false,
                                        // bounces: false,
                                        // outOfBoundRestrictFactor: 0,
                                        //threshold: 20,
                                        scroller: {
                                            listeners: {
                                                scroll: function (scroller, x, y, eOpts) {
                                                    //  console.log('[scrollable][on scroll]x=' + x + ', y=' + y);
                                                    if (y < -123) {





                                                        Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryHeaderInner').setHidden(false);
                                                      // // Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').getTabBar().hide();
                                                       // Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + GetCurrentYear() + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Payment Received-Order Paid</div>');
                                                       // Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryFooter').setHidden(false);
                                                        
                                                       // globalFloatPanel_AyohaStore_OrderHistory_Year = GetCurrentYear();
                                                       // FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant();



                                                      //  FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active();

                                                      
                                                    }
                                                },
                                                //scrollend: function (scroller, x, y, eOpts) {
                                                //    //console.log('[scrollable][on scrollend]x=' + x + ', y=' + y);
                                                //    //if (y <= 0) {
                                                //    //    console.log('sampai')
                                                //    //    scroller.scrollTo({
                                                //    //        x: 0,
                                                //    //        y: 0
                                                //    //    });
                                                //    //}


                                                //}
                                            }
                                        }
                                    },

                                 
                                

                                            //   itemTpl: '<div class="myContent">' +
                                            //   '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                                            //  '</table><br>' +
                                            //   '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                            //         '</div>',

                                                    itemTpl: '<div class="myContent">' +
                                                    '<table style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                                                   '</table><br>' +
                                                    '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                                          '</div>',
      




                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:32px;height:32px;"><br>No New Order',

                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,









                                },
                             ]
                         },
                         {
                             xtype: 'container',
                             width: '100%',
                             id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderReceivedConfirm',
                             height: '100%',
                             title: 'titleFloatPanel_AyohaStore_OrderHistory_OrderReceivedConfirm',
                             //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                             style: 'background-color:transparent',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'left'
                             },
                             items: [

                                    //{
                                    //    xtype: 'container',
                                    //    style: 'background-color: transparent;',
                                    //    width: '100%',
                                    //    margin: '10 0 0 0',
                                    //    height: 15,
                                    //    layout: {
                                    //        type: 'vbox',
                                    //        pack: 'left',
                                    //        align: 'left'
                                    //    },
                                    //    items: [
                                    //        {
                                    //            margin: '0 0 0 0',
                                    //            html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:Orange;text-align:left;" >Order Received&Confirm</div>',
                                    //        },
                                    //    ]


                                    //},
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore,
                                    // id: 'FloatPanel_AyohaStore_OrderHistory_OrderSentListID',
                                    mode: 'SINGLE',
                                    grouped: true,
                                    disableSelection: false,
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
                                    //itemTpl: '<div class="myContent">' +
                                    //   // '{ID}'+
                                    //    '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ')" style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:orange;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.Order From:{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="orange">Order Received&Confirm</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                    //   '</table>' +
                                    //   // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Invoice No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                    //    '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                    //          '</div>',


                                    itemTpl: '<div class="myContent">' +
                                '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                               '</table><br>' +
                                '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                      '</div>',
                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Confirmed',
                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,


                                },


                             ]

                         },


                         {
                             xtype: 'container',
                             width: '100%',
                             title: 'titleFloatPanel_AyohaStore_OrderHistory_OrderPaid',
                             id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderPaid',
                             height: '100%',
                            // hidden:true,
                             //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                             style: 'background-color:white',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'left'
                             },
                             items: [
                                   
                                {
                                    xtype: 'list',
                                    store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore,
                                   
                                    mode: 'SINGLE',
                                    disableSelection: false,
                                    grouped: true,
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
                                      '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatusOrderPaidOnly}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                                     //  '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ')" style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:#3399ff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.#Order No:{DisplayOrderNo}</u></span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="blue">{OrderStatus}</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                       '</table><br>' +
                                       
                                       '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                             '</div>',
                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Paid',

                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,


                                },


                             ]
                         },
                          {
                              xtype: 'container',
                              width: '100%',
                              id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderCompleted',
                              height: '100%',
                              //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                              style: 'background-color:white',
                              title: 'titleFloatPanel_AyohaStore_OrderHistory_OrderCompleted',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'left'
                              },
                              items: [

                                      //{
                                      //    xtype: 'container',
                                      //    style: 'background-color: transparent;',
                                      //    width: '100%',
                                      //    margin: '10 0 0 0',
                                      //    height: 15,
                                      //    layout: {
                                      //        type: 'vbox',
                                      //        pack: 'left',
                                      //        align: 'left'
                                      //    },
                                      //    items: [
                                      //        {
                                      //            margin: '0 0 0 0',
                                      //            html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:green;text-align:left;" >Order Completed</div>',
                                      //        },
                                      //    ]


                                      //},
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore,
                                    // id: 'FloatPanel_AyohaStore_OrderHistory_OrderSentListID',
                                    mode: 'SINGLE',
                                    disableSelection: false,
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
                                    //itemTpl: '<div class="myContent">' +
                                    //   // '{ID}'+
                                    //    '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:green;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.Order From:{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="green">Order Completed</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                    //   '</table>' +
                                    //   // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Invoice No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                    //    '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                    //          '</div>',

                                    itemTpl: '<div class="myContent">' +
                                '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                               '</table><br>' +
                                '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                      '</div>',

                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Completed',
                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,


                                },

                              ]
                          },
                           {
                               xtype: 'container',
                               width: '100%',
                               id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderCancel',
                               title: 'titleFloatPanel_AyohaStore_OrderHistory_OrderCancel',
                               height: '100%',
                               //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                               style: 'background-color:white',
                               layout: {
                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'left'
                               },
                               items: [

                                         //{
                                         //    xtype: 'container',
                                         //    style: 'background-color: transparent;',
                                         //    width: '100%',
                                         //    margin: '10 0 0 0',
                                         //    height: 15,
                                         //    layout: {
                                         //        type: 'vbox',
                                         //        pack: 'left',
                                         //        align: 'left'
                                         //    },
                                         //    items: [
                                         //        {
                                         //            margin: '0 0 0 0',
                                         //            html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:red;text-align:left;" >Order Cancel</div>',
                                         //        },
                                         //    ]


                                         //},
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore,
                                    // id: 'FloatPanel_AyohaStore_OrderHistory_OrderSentListID',
                                    mode: 'SINGLE',
                                    disableSelection: false,
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
                                    //itemTpl: '<div class="myContent">' +
                                    //   // '{ID}'+
                                    //    '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.Order From:{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="red">Order Cancel</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                    //   '</table>' +
                                    //   // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Invoice No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                    //    '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                    //          '</div>',

                                    itemTpl: '<div class="myContent">' +
                                '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                               '</table><br>' +
                                '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                      '</div>',

                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Cancelled',
                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,


                                },

                               ]
                           },
                            {
                                xtype: 'container',
                                width: '100%',
                                id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderRejected',
                                title: 'titleFloatPanel_AyohaStore_OrderHistory_OrderRejected',
                                height: '100%',
                                //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                style: 'background-color:white',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'
                                },
                                items: [

                                          //{
                                          //    xtype: 'container',
                                          //    style: 'background-color: transparent;',
                                          //    width: '100%',
                                          //    margin: '10 0 0 0',
                                          //    height: 15,
                                          //    layout: {
                                          //        type: 'vbox',
                                          //        pack: 'left',
                                          //        align: 'left'
                                          //    },
                                          //    items: [
                                          //        {
                                          //            margin: '0 0 0 0',
                                          //            html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:#ff0066;text-align:left;" >Order Rejected</div>',
                                          //        },
                                          //    ]


                                          //},
                                 {
                                     xtype: 'list',
                                     //  flex: 1,
                                     store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore,
                                     // id: 'FloatPanel_AyohaStore_OrderHistory_OrderSentListID',
                                     mode: 'SINGLE',
                                     disableSelection: false,
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
                                  

                            //          itemTpl: '<div class="myContent">' +
                            //     '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                            //    '</table><br>' +
                            //     '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                            //           '</div>',

                                      itemTpl: '<div class="myContent">' +
                                      '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                                     '</table><br>' +
                                      '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                            '</div>',
      




                                     emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Rejected',
                                     width: '100%',
                                     height: '100%',
                                     disableSelection: true,


                                 },

                                ]
                            },

                     ]
                 },

                 {
                     xtype: 'container',
                     margin: '-4 0 0 0',
                     // docked:'bottom',
                     id: 'containerFloatPanel_AyohaStore_OrderHistoryHeaderInner',
                     width: '100%',
                     height: '6%',
                     // style: "background-color: white",
                   style: 'border-top:3px solid #f0f2f5;background-color:white',
                     //style: 'background-color:white;border-top:2px solid #f0f2f5;border-bottom:2px none #f0f2f5;box-shadow: 10px 4px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                     //style: 'background-color:white;border-top:2px solid #f0f2f5;border-bottom:2px none #f0f2f5;box-shadow: 10px 4px 0px 0 ;',
                     layout: {
                         type: 'hbox',
                         pack: 'center',
                         align: 'center'

                     },
                     items: [



                                {
                                    xtype: 'panel',
                                    width: 11
                                },
                                  {
                                      id: 'htmlFloatPanel_AyohaStore_OrderHistorySearch',
                                      margin: '0 0 0 0',

                                      // zIndex: -10,
                                      width: '85%',
                                      // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                      // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                      html: '<input type="text" id="input-FloatPanel_AyohaStore_OrderHistorySearch"    onkeyup="FloatPanel_AyohaStore_OnKeyUpSearchOrder()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 10px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="Search">',
                                  },

                                   {
                                       xtype: 'button',
                                       id: 'btn_FloatPanel_AyohaStore_OrderHistorySearch_FilterMenu',
                                       //  badgeText: '1',
                                       margin: '0 0 0 5',
                                       //  hidden: true,
                                       height: 40,
                                       width: 40,
                                       html: '<img src="resources/icons/filterPurpleThree.png" style="width:30px;height:27px;margin:0px 0px 0px -2px;" alt="Company Name">',
                                       ui: 'plain',
                                       handler: function () {
                                           globalYearSourceModule = "FloatPanel_AyohaStore_OrderHistory";
                                           FloatPanel_YearOnlyShow();
                                           //FloatPanel_AyohaStore_FilterOrderUnpaid();
                                       }
                                   },
                                   {
                                    xtype: 'button',
                                    id: 'btn_FloatPanel_AyohaStore_OrderHistorySearch_ReloadAll',
                                    //  badgeText: '1',
                                    hidden:true,
                                    margin: '0 0 0 5',
                                    //  hidden: true,
                                    height: 40,
                                    width: 40,
                                    html: '<img src="resources/icons/ResetPurpleTwo.png" style="width:30px;height:27px;margin:0px 0px 0px -2px;" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                        globalFloatPanel_AyohaStore_OrderHistory_SubscriberAccNo='NA';
    globalFloatPanel_AyohaStore_OrderHistory_FilterType='Enterprise';
    globalFloatPanel_AyohaStore_OrderHistory_Year=GetCurrentYear();
    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant('NA','Enterprise');

   

    FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active();
                                    }
                                },
                                    {
                                        xtype: 'panel',
                                        width: 11
                                    },

                     ]

                 },

                //  {

                //      xtype: 'container',
                //      width: '100%',
                //     docked: 'bottom',
                //      height: '5%',
                //      // style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                //      style: 'background-color:white;',
                //      id: 'containerFloatPanel_AyohaStore_OrderHistoryFooter',
                //     // style: 'background-color:white',
                //      //style: {
                //      //    // background: '#D25959',
                //      //    background: 'transparent',
                //      //    // border: '2px'
                //      //},
                //      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                //      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                //      layout: {
                //          type: 'hbox',
                //          pack: 'start',
                //          align: 'center',
                //      },

                //      // hidden:true,
                //      items:
                //             [
                //                  //{
                //                  //    xtype: 'container',
                //                  //    width: '8%',
                //                  //    style: "background-color: transparent",
                //                  //    height: 55,
                //                  //    layout: {
                //                  //        type: 'hbox',
                //                  //        pack: 'center',
                //                  //        align: 'center',
                //                  //    },
                //                  //    scrollable: {
                //                  //        direction: 'horizontal',
                //                  //        directionLock: true,
                //                  //        indicators: false
                //                  //    },
                //                  //},

                //                 {
                //                     xtype: 'container',
                //                     width: '100%',
                //                     id: 'containerFloatPanel_AyohaStore_OrderHistory_AllOrders_bottom',
                //                     height: 40,
                //                     //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                //                     style: 'background-color:white',
                //                     layout: {
                //                         type: 'hbox',
                //                         pack: 'center',
                //                         align: 'center'
                //                     },
                //                     scrollable: {
                //                         direction: 'horizontal',
                //                         directionLock: true,
                //                         indicators: false
                //                     },
                //                     items: [

                //                          {
                //                              xtype: 'container',
                //                              //width: 600,
                //                              width: 850,
                //                              // width: 650,
                //                              style: "background-color: transparent",
                //                              height: 30,
                //                              layout: {
                //                                  type: 'hbox',
                //                                  pack: 'center',
                //                                  align: 'center',
                //                              },
                //                              items: [
                //                                  {
                //                                      xtype: 'container',
                //                                      id: 'containerFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle',
                //                                      name: 'nameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle',
                //                                      hidden: true,
                //                                      style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                      // style: 'background-color:#fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px solid #fac;border-left:2px solid #fac;',
                //                                      flex: 1,
                //                                      height: 40,
                //                                      layout: {
                //                                          type: 'vbox',
                //                                          pack: 'center',
                //                                          align: 'center'
                //                                      },
                //                                      items: [
                //                                          {
                //                                              margin: '0 0 0 0',
                //                                              id: 'htmlFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle',
                //                                              html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:black;text-align:center;" ><u>All Orders</u></div>',
                //                                          }
                //                                      ]


                //                                  },
                                             
                //                                {
                //                                    xtype: 'container',
                                                   
                //                                    //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                //                                    id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle',
                //                                    name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle',
                //                                    style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                    flex: 1,
                //                                    height: 30,
                //                                    layout: {
                //                                        type: 'vbox',
                //                                        pack: 'center',
                //                                        align: 'center'
                //                                    },
                //                                    items: [
                //                                        {
                //                                            margin: '0 0 0 0',
                //                                            id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle',
                //                                            html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>',
                //                                        },
                //                                    ]


                //                                },
                //                                      {
                //                                          xtype: 'container',
                                                        
                //                                          //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                //                                          id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle',
                //                                          name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle',
                //                                          style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                          flex: 1,
                //                                          height: 30,
                //                                          layout: {
                //                                              type: 'vbox',
                //                                              pack: 'center',
                //                                              align: 'center'
                //                                          },
                //                                          items: [
                //                                              {
                //                                                  margin: '0 0 0 0',
                //                                                  id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle',
                //                                                  html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid</div>',
                //                                              },
                //                                          ]


                //                                      },
                //                                {
                //                                    xtype: 'container',
                //                                    //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                //                                    id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle',
                //                                    name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle',
                //                                    style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                    flex: 1,
                //                                    height: 30,
                //                                    layout: {
                //                                        type: 'vbox',
                //                                        pack: 'center',
                //                                        align: 'center'
                //                                    },
                //                                    items: [
                //                                        {
                //                                            margin: '0 0 0 0',
                //                                            id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle',
                //                                            html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed</div>',
                //                                        },
                //                                    ]


                //                                },
                //                                           {
                //                                               xtype: 'container',
                //                                               //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                //                                               id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle',
                //                                               name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle',
                //                                               style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                               flex: 1,
                //                                               height: 30,
                //                                               layout: {
                //                                                   type: 'vbox',
                //                                                   pack: 'center',
                //                                                   align: 'center'
                //                                               },
                //                                               items: [
                //                                                   {
                //                                                       margin: '0 0 0 0',
                //                                                       id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle',
                //                                                       html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out</div>',
                //                                                   },
                //                                               ]


                //                                           },
                //                                {
                //                                    xtype: 'container',
                //                                    //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                //                                    id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle',
                //                                    name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle',
                //                                    style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                    flex: 1,
                //                                    height: 30,
                //                                    layout: {
                //                                        type: 'vbox',
                //                                        pack: 'center',
                //                                        align: 'center'
                //                                    },
                //                                    items: [
                //                                        {
                //                                            margin: '0 0 0 0',
                //                                            id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle',
                //                                            html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>',
                //                                        },
                //                                    ]


                //                                },
                //                                {
                //                                    xtype: 'container',
                //                                    //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                //                                    id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle',
                //                                    name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle',
                //                                    style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                    flex: 1,
                //                                    height: 30,
                //                                    layout: {
                //                                        type: 'vbox',
                //                                        pack: 'center',
                //                                        align: 'center'
                //                                    },
                //                                    items: [
                //                                        {
                //                                            margin: '0 0 0 0',
                //                                            id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle',
                //                                            html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>',
                //                                        },
                //                                    ]


                //                                },
                //                                  {
                //                                      xtype: 'container',
                //                                      //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                //                                      id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle',
                //                                      name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle',
                //                                      style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                      flex: 1,
                //                                      height: 30,
                //                                      layout: {
                //                                          type: 'vbox',
                //                                          pack: 'center',
                //                                          align: 'center'
                //                                      },
                //                                      items: [
                //                                          {
                //                                              margin: '0 0 0 0',
                //                                              id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle',
                //                                              html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>',
                //                                          },
                //                                      ]


                //                                  },
                //                                     {
                //                                         xtype: 'container',
                //                                         //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                //                                         id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle',
                //                                         name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle',
                //                                         style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                //                                         flex: 1,
                //                                         height: 30,
                //                                         layout: {
                //                                             type: 'vbox',
                //                                             pack: 'center',
                //                                             align: 'center'
                //                                         },
                //                                         items: [
                //                                             {
                //                                                 margin: '0 0 0 0',
                //                                                 id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle',
                //                                                 html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refund</div>',
                //                                             },
                //                                         ]


                //                                     },
                //                              ]
                //                          },



                //                     ]
                //                 },















                //             ]

                //  },
                   ]
               },






               {

                xtype: 'container',
                width: '100%',
               docked: 'bottom',
                height: 40,
                // style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                style: 'background-color:white;',
                id: 'containerFloatPanel_AyohaStore_OrderHistoryFooter',
               // style: 'background-color:white',
                //style: {
                //    // background: '#D25959',
                //    background: 'transparent',
                //    // border: '2px'
                //},
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'center',
                },

                // hidden:true,
                items:
                       [
                            //{
                            //    xtype: 'container',
                            //    width: '8%',
                            //    style: "background-color: transparent",
                            //    height: 55,
                            //    layout: {
                            //        type: 'hbox',
                            //        pack: 'center',
                            //        align: 'center',
                            //    },
                            //    scrollable: {
                            //        direction: 'horizontal',
                            //        directionLock: true,
                            //        indicators: false
                            //    },
                            //},

                           {
                               xtype: 'container',
                               width: '100%',
                               id: 'containerFloatPanel_AyohaStore_OrderHistory_AllOrders_bottom',
                               height: 40,
                               //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                               style: 'background-color:white',
                               layout: {
                                   type: 'hbox',
                                   pack: 'center',
                                   align: 'center'
                               },
                               scrollable: {
                                   direction: 'horizontal',
                                   directionLock: true,
                                   indicators: false
                               },
                               items: [

                                    {
                                        xtype: 'container',
                                        //width: 600,
                                        width: 850,
                                        // width: 650,
                                        style: "background-color: transparent",
                                        height: 30,
                                        layout: {
                                            type: 'hbox',
                                            pack: 'center',
                                            align: 'center',
                                        },
                                        items: [
                                            {
                                                xtype: 'container',
                                                id: 'containerFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle',
                                                name: 'nameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle',
                                                hidden: true,
                                                style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                                // style: 'background-color:#fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px solid #fac;border-left:2px solid #fac;',
                                                flex: 1,
                                                height: 40,
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        margin: '0 0 0 0',
                                                        id: 'htmlFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle',
                                                        html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:black;text-align:center;" ><u>All Orders</u></div>',
                                                    }
                                                ]


                                            },
                                        
                                          {
                                              xtype: 'container',
                                              
                                              //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                              id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle',
                                              name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle',
                                              style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                              flex: 1,
                                              height: 30,
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center'
                                              },
                                              items: [
                                                  {
                                                      margin: '0 0 0 0',
                                                      id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle',
                                                      html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>',
                                                  },
                                              ]


                                          },
                                                {
                                                    xtype: 'container',
                                                   
                                                    //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                    id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle',
                                                    name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle',
                                                    style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                                    flex: 1,
                                                    height: 30,
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
                                                    },
                                                    items: [
                                                        {
                                                            margin: '0 0 0 0',
                                                            id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle',
                                                            html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid</div>',
                                                        },
                                                    ]


                                                },
                                          {
                                              xtype: 'container',
                                              //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                              id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle',
                                              name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle',
                                              style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                              flex: 1,
                                              height: 30,
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center'
                                              },
                                              items: [
                                                  {
                                                      margin: '0 0 0 0',
                                                      id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle',
                                                      html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed</div>',
                                                  },
                                              ]


                                          },
                                                     {
                                                         xtype: 'container',
                                                         //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                         id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle',
                                                         name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle',
                                                         style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                                         flex: 1,
                                                         height: 30,
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center'
                                                         },
                                                         items: [
                                                             {
                                                                 margin: '0 0 0 0',
                                                                 id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle',
                                                                 html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out</div>',
                                                             },
                                                         ]


                                                     },
                                          {
                                              xtype: 'container',
                                              //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                              id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle',
                                              name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle',
                                              style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                              flex: 1,
                                              height: 30,
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center'
                                              },
                                              items: [
                                                  {
                                                      margin: '0 0 0 0',
                                                      id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle',
                                                      html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>',
                                                  },
                                              ]


                                          },
                                          {
                                              xtype: 'container',
                                              //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                              id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle',
                                              name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle',
                                              style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                              flex: 1,
                                              height: 30,
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center'
                                              },
                                              items: [
                                                  {
                                                      margin: '0 0 0 0',
                                                      id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle',
                                                      html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>',
                                                  },
                                              ]


                                          },
                                            {
                                                xtype: 'container',
                                                //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle',
                                                name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle',
                                                style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                                flex: 1,
                                                height: 30,
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        margin: '0 0 0 0',
                                                        id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle',
                                                        html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>',
                                                    },
                                                ]


                                            },
                                               {
                                                   xtype: 'container',
                                                   //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                   id: 'containerFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle',
                                                   name: 'nameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle',
                                                   style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px none #D3D3D3;',
                                                   flex: 1,
                                                   height: 30,
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center'
                                                   },
                                                   items: [
                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle',
                                                           html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refund</div>',
                                                       },
                                                   ]


                                               },
                                        ]
                                    },



                               ]
                           },















                       ]

            },
         ],










     });
    return _FloatPanel_AyohaStore_OrderHistory;





}


var globalFloatPanel_AyohaStore_OrderHistory_SubscriberAccNo;
var globalFloatPanel_AyohaStore_OrderHistory_FilterType;
function FloatPanel_AyohaStore_OrderHistoryShow_MemberDetailPage(SubscriberAccNo,MemberName) {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderHistory());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_OrderHistoryHide()");
    isFloatPanel_AyohaStore_OrderHistoryOpen = 'Y';
    Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryFooter').setHidden(false);
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').getTabBar().hide();
    Ext.getCmp('btn_FloatPanel_AyohaStore_OrderHistorySearch_ReloadAll').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_MemberName_TitleHeaderTxt').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_MemberName_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 15px;font-weight:bold;color:black;margin:0px 0px 0px 0px">- (<u>'+MemberName+'</u>)</div>');

   
    globalFloatPanel_AyohaStore_OrderHistory_SubscriberAccNo=SubscriberAccNo;
    globalFloatPanel_AyohaStore_OrderHistory_FilterType='MemberDetail';


    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant(SubscriberAccNo,'MemberDetail');

   
   

    var containerViewnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle.on('tap',
      function (event, node, options, eOpts) {
          //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.removeAll();
          //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.sync();
          FloatPanel_AyohaStore_OrderHistory_AllOrdersTitle_Active();
      }
    );

    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle_Active();
      }
    );



    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active();
      }
    );

    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle_Active();
          //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.removeAll();
          //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.sync();
          //FloatPanel_AyohaStore_OrderHistory_AllOrdersTitle_Active();
      }
    );

    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle_Active();
      }
    );


    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderCancelTitle_Active();
      }
    );


    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active();
      }
    );





    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderSent_Active();
      }
    );


    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle.on('tap',
      function (event, node, options, eOpts) {
          // FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active();
          FloatPanel_AyohaStore_OrderHistory_OrderRefunded_Active();
      }
    );




  

    FloatPanel_AyohaStore_OrderHistoryAdjustHeight();
    FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active();

}




function FloatPanel_AyohaStore_OrderHistoryShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderHistory());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_OrderHistoryHide()");
    isFloatPanel_AyohaStore_OrderHistoryOpen = 'Y';
    Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryHeader_StatusLog').setHidden(true);
    Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryHeader').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryFooter').setHidden(false);
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').getTabBar().hide();
    Ext.getCmp('btn_FloatPanel_AyohaStore_OrderHistorySearch_ReloadAll').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_MemberName_TitleHeaderTxt').setHidden(true);
   // FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("All Orders", "black");
   globalFloatPanel_AyohaStore_OrderHistory_SubscriberAccNo='NA';
    globalFloatPanel_AyohaStore_OrderHistory_FilterType='Enterprise';
    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant('NA','Enterprise');

   

    FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active();
   // FloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle_Active();

    // Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(0);

    // FloatPanel_AyohaStore_OrderHistory_AyohaStoreShippingAddressLoadBySubscriberAccNoStore();


    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    //Ext.getCmp('btnFloatPanel_AyohaStore_OrderHistory_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');



    var containerViewnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle.on('tap',
      function (event, node, options, eOpts) {
          //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.removeAll();
          //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.sync();
          FloatPanel_AyohaStore_OrderHistory_AllOrdersTitle_Active();
      }
    );

    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle_Active();
      }
    );



    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active();
      }
    );

    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle_Active();
          //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.removeAll();
          //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.sync();
          //FloatPanel_AyohaStore_OrderHistory_AllOrdersTitle_Active();
      }
    );

    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle_Active();
      }
    );


    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderCancelTitle_Active();
      }
    );


    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active();
      }
    );





    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_OrderHistory_OrderSent_Active();
      }
    );


    var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle]')[0];
    var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle.element;
    containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle.on('tap',
      function (event, node, options, eOpts) {
          // FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active();
          FloatPanel_AyohaStore_OrderHistory_OrderRefunded_Active();
      }
    );




  

    FloatPanel_AyohaStore_OrderHistoryAdjustHeight();

}


function FloatPanel_AyohaStore_OrderHistory_AllOrdersTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(1);
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:black;text-align:center;" ><u>All Orders</u></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out</div>');
    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("All Orders", "black");
    FloatPanel_AyohaStore_FilterOrderUnpaid();
}

function FloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(0);
  //  alert("FloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle_Active()");


    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:red;text-align:center;" ><u>Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</u></div>');






   // FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("OrderUnPaid", "red");
    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("All Orders", "red");
    FloatPanel_AyohaStore_FilterOrderUnpaid();
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:red;margin:-28px 0px 0px 0px">Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');

}





function FloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(1);

//alert("FloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle_Active()");

    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:orange;text-align:center;" ><u>Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</u></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');

    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:orange;margin:-28px 0px 0px 0px">Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');





    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Confirmed", "orange");


}
function FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active() {
    //alert("FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active()")
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(2);
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:blue;text-align:center;" ><u>Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</u></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');




    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("OrderPaid", "blue");
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');

}
function FloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle_Active() {
  // alert("FloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle_Active()")
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(3);
    
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:green;text-align:center;" ><u>Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')<u></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');

    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Completed", "green");
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:green;margin:-28px 0px 0px 0px">Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');

}
function FloatPanel_AyohaStore_OrderHistory_OrderCancelTitle_Active() {
    //alert("FloatPanel_AyohaStore_OrderHistory_OrderCancelTitle_Active()")
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(4);

    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:red;text-align:center;" ><u>Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</u></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');


    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Cancel", "black");
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:red;margin:-28px 0px 0px 0px">Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');

}
function FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active() {
    //alert("FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active()")
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(5);
    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed</div>');
    //// Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >All Orders</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:#ff0066;text-align:center;" ><u>Order Rejected</u></div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out</div>');



    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:bold;color:black;text-align:center;" >Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:red;text-align:center;" ><u>Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</u></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');




    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Rejected", "red");
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:red;margin:-28px 0px 0px 0px">Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
}


function FloatPanel_AyohaStore_OrderHistory_OrderSent_Active() {
   // alert("FloatPanel_AyohaStore_OrderHistory_OrderSent_Active()")
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(5);

    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;"> Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:purple;text-align:center;" ><u>Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</u></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');



    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Sent", "purple");
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:purple;margin:-28px 0px 0px 0px">Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');


}


function FloatPanel_AyohaStore_OrderHistory_OrderRefunded_Active() {
    //alert("FloatPanel_AyohaStore_OrderHistory_OrderRefunded_Active()")
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(5);
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;"> Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:#99cc00;text-align:center;" ><u>Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</u></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');




    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Refunded", "#99cc00");
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:#99cc00;margin:-28px 0px 0px 0px">Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');

}



function FloatPanel_AyohaStore_OrderHistoryAdjustHeight() {
    // var y = parseInt(screen.height);
    // var x = parseInt(window.innerHeight);


    // var newHeights = x + 5;
    // Ext.getCmp('LoadingFloatPanel_AyohaStore_OrderHistoryID').setHeight(newHeights);

}


function FloatPanel_AyohaStore_OrderHistoryHide() {
    if (isFloatPanel_AyohaStore_OrderHistoryOpen == 'Y') {
        _FloatPanel_AyohaStore_OrderHistory.hide(); isFloatPanel_AyohaStore_OrderHistoryOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_OrderHistoryHide()");
    }
}


var globalFloatPanel_AyohaStore_OrderHistory_Year;
var globalFloatPanel_AyohaStore_OrderHistory_OrderStatus;
var globalFloatPanel_AyohaStore_OrderHistory_Color;
function FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore(OrderStatus,color) {
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.clearFilter();
    globalFloatPanel_AyohaStore_OrderHistory_OrderStatus = OrderStatus;
    globalFloatPanel_AyohaStore_OrderHistory_Color = color;

   

    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getProxy().setExtraParam('OrderStatus', OrderStatus);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getProxy().setExtraParam('Year', globalFloatPanel_AyohaStore_OrderHistory_Year);

    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getProxy().setExtraParam('SubscriberAccNo', globalFloatPanel_AyohaStore_OrderHistory_SubscriberAccNo);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getProxy().setExtraParam('FilterType', globalFloatPanel_AyohaStore_OrderHistory_FilterType);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchant');
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        globalNewOrderPaid =parseInt(_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getCount());
       

       // var OrderStatus = Store.get('OrderStatus');

        //ModifiedOrderLogCreatedDate
        //if (OrderStatus == "All Orders") {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (28) | <font color="red">Order UnPaid (1)</font></div>');

        //} else {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div>');

        //}
        
       

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}






function FloatPanel_AyohaStore_OrderHistoryLoadByOrderNoMerchantShow(OrderNo,ID) {

   
    



    Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderHistory());
    this.overlay.show();







    AddRoutePages("FloatPanel_AyohaStore_OrderHistoryHide()");
    isFloatPanel_AyohaStore_OrderHistoryOpen = 'Y';

    Ext.getCmp('LoadingFloatPanel_AyohaStore_OrderHistoryID').setHeight(500);
    Ext.getCmp('LoadingFloatPanel_AyohaStore_OrderHistoryID').setWidth(500);

    Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryHeader_StatusLog').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryHeader').setHidden(true);

    Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryHeaderInner').setHidden(true);
    Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').getTabBar().hide();
    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + GetCurrentYear() + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Payment Received-Order Paid</div>');
    Ext.getCmp('containerFloatPanel_AyohaStore_OrderHistoryFooter').setHidden(true);
   

    // if(isFloatPanel_AyohaeWallet_TransactionHistoryOpen=='Y'){
    // Ext.getCmp('LoadingFloatPanel_AyohaStore_OrderHistoryID').setZIndex(220);
    // }
  
    globalFloatPanel_AyohaStore_OrderHistory_Year = GetCurrentYear();
  
  
    FloatPanel_AyohaStoreOrderLoadByOrderNoMerchant(OrderNo, ID);

 



    // //FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active();


    // // FloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle_Active();

    // // Ext.getCmp('tabpanelFloatPanel_AyohaStore_OrderHistory_MasterContent').setActiveItem(0);

    // // FloatPanel_AyohaStore_OrderHistory_AyohaStoreShippingAddressLoadBySubscriberAccNoStore();


    // //Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    // //Ext.getCmp('btnFloatPanel_AyohaStore_OrderHistory_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');



    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.removeAll();
    //       //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.sync();
    //       FloatPanel_AyohaStore_OrderHistory_AllOrdersTitle_Active();
    //   }
    // );

    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle_Active();
    //   }
    // );



    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_AyohaStore_OrderHistory_OrderPaidTitle_Active();
    //   }
    // );

    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle_Active();
    //       //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.removeAll();
    //       //_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.sync();
    //       //FloatPanel_AyohaStore_OrderHistory_AllOrdersTitle_Active();
    //   }
    // );

    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle_Active();
    //   }
    // );


    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_AyohaStore_OrderHistory_OrderCancelTitle_Active();
    //   }
    // );


    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active();
    //   }
    // );





    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_AyohaStore_OrderHistory_OrderSent_Active();
    //   }
    // );


    // var containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle]')[0];
    // var containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle = containerViewnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle.element;
    // containerViewElnameFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle.on('tap',
    //   function (event, node, options, eOpts) {
    //       // FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active();
    //       FloatPanel_AyohaStore_OrderHistory_OrderRefunded_Active();
    //   }
    // );






  //  FloatPanel_AyohaStore_OrderHistoryAdjustHeight();

}

function FloatPanel_AyohaStoreOrderLoadByOrderNoMerchant(OrderNo,ID) {
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.clearFilter();
    //globalFloatPanel_AyohaStore_OrderHistory_OrderStatus = OrderStatus;
    //globalFloatPanel_AyohaStore_OrderHistory_Color = color;



    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getProxy().setExtraParam('OrderNo', OrderNo);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByOrderNoMerchant');
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getCount();
        //if (OrderStatus == "All Orders") {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (28) | <font color="red">Order UnPaid (1)</font></div>');

        //} else {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div>');

        //}

        // FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant();
       
      
       
        FloatPanel_AyohaNotification_UpdateIsReadNotification(ID);

    });
    task.delay(1000);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStore_OnKeyUpSearchOrder() {

    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaStore_OrderHistorySearch').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                // countEnterprise = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();
                //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        // countEnterprise = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();

        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.clearFilter();
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}


function FloatPanel_AyohaStore_FilterOrderUnpaid() {

    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.clearFilter();

    var queryString = 'OrderUnPaid';



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('OrderPaidUnpaidStatus'))) {
                console.log('ada0');

                // countEnterprise = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();
                //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        // countEnterprise = _DataStore_MasterMembershipsLoadByEnterpriseAccNoStore.getCount();

        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.clearFilter();
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }
}

var FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid;
var FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid;
var FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed;
var FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut;
var FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed;
var FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel;
var FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected;
var FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded;

function FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant(SubscriberAccNo,FilterType) {
 
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {


            "EnterpriseAccNo": GetEnterpriseAccNo(),
            "Year": globalFloatPanel_AyohaStore_OrderHistory_Year,
            "SubscriberAccNo": SubscriberAccNo,
            "FilterType": FilterType
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderCountOrderStatusMerchant',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    if (data.total > 0) {

                       
                        FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid = data.results[0].OrderUnPaid;
                        FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid = data.results[0].OrderPaid;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed = data.results[0].Order_Confirmed;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut = data.results[0].Order_SentOut;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed = data.results[0].Order_Completed;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel = data.results[0].Order_Cancel;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected = data.results[0].Order_Rejected;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded = data.results[0].Order_Refunded;                      


                        var count = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getCount();
                        //if (globalFloatPanel_AyohaStore_OrderHistory_OrderStatus == "All Orders") {
                        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + globalFloatPanel_AyohaStore_OrderHistory_OrderStatus + ' (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ') | <font color="red">Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</font></div>');

                        //} else {
                        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + globalFloatPanel_AyohaStore_OrderHistory_OrderStatus + ' (' + count + ')</div>');

                        //}

                       // Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:-28px 0px 0px 0px">All Orders (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ') | <font color="red">Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</font></div>');

                        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Ayoha Store Order-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</div>');




                       // Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_AllOrdersTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:black;text-align:center;" ><u>All Orders (' + count + ')</u></div>');
                       
                      //commented 16/3/2024 
                       Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Confirmed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed + ')</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:blue;text-align:center;" ><u>Order Paid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid + ')</u></div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed + ')</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel + ')</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected + ')</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderRefundedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Refunded (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded + ')</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderPostSentOutTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Post/Sent Out (' + FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut + ')</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_OrderUnPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order UnPaid (' + FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid + ')</div>');

                        


                        if(globalFloatPanel_AyohaStore_OrderRespond_OrderStatus=="Order_Confirmed"){
                            FloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle_Active();
                           }
                           if(globalFloatPanel_AyohaStore_OrderRespond_OrderStatus=="Order_Sent"){
                            FloatPanel_AyohaStore_OrderHistory_OrderSent_Active();
                           }
                           if(globalFloatPanel_AyohaStore_OrderRespond_OrderStatus=="Order_Completed"){
                             FloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle_Active();
                           }
                           if(globalFloatPanel_AyohaStore_OrderRespond_OrderStatus=="Order_Rejected"){
                            FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active()
                           }

                           if(globalFloatPanel_AyohaStore_OrderRespond_OrderStatus=="Order_Refunded"){
                            FloatPanel_AyohaStore_OrderHistory_OrderRefunded_Active();
                           }
                           





                       
                        Ext.Viewport.setMasked(false);

                    }
                    if (data.total <= 0) {
                        LoadingCustomMsgHide();
                        swalFireLoginFailed("Failed!" + result.responseText.trim());
                    }


                }
                else {
                    LoadingCustomMsgHide();
                    swalFireLoginFailed("Failed!" + result.responseText.trim());
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                LoadingCustomMsgHide();
                swalFireLoginFailed("Failed!" + result.responseText.trim());

            }

        });
    });

    task.delay(500);

}






function FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant_AfterUpdateOrder(OrderStatus) {

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {


            "EnterpriseAccNo": GetEnterpriseAccNo(),
            "Year": globalFloatPanel_AyohaStore_OrderHistory_Year,
            "SubscriberAccNo": 'NA',
            "FilterType": 'Enterprise'
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderCountOrderStatusMerchant',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    if (data.total > 0) {


                        FloatPanel_AyohaStore_OrderHistory_Count_OrderUnPaid = data.results[0].OrderUnPaid;
                        FloatPanel_AyohaStore_OrderHistory_Count_OrderPaid = data.results[0].OrderPaid;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Confirmed = data.results[0].Order_Confirmed;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_SentOut = data.results[0].Order_SentOut;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Completed = data.results[0].Order_Completed;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Cancel = data.results[0].Order_Cancel;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Rejected = data.results[0].Order_Rejected;
                        FloatPanel_AyohaStore_OrderHistory_Count_Order_Refunded = data.results[0].Order_Refunded;


                        var count = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusMerchantStore.getCount();
                        



                        if (OrderStatus == "Order_Confirmed") {
                            FloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle_Active();
                        }
                        if (OrderStatus == "Order_Completed") {
                            FloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle_Active();
                        }
                        if (OrderStatus == "Order_Sent") {
                            FloatPanel_AyohaStore_OrderHistory_OrderSent_Active();
                        }
                        if (OrderStatus == "Order_Rejected") {
                            FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active();
                        }
                        if (OrderStatus == "Order_Refunded") {
                            FloatPanel_AyohaStore_OrderHistory_OrderRefunded_Active();
                        }







                        Ext.Viewport.setMasked(false);

                    }
                    if (data.total <= 0) {
                        LoadingCustomMsgHide();
                        swalFireLoginFailed("Failed!" + result.responseText.trim());
                    }


                }
                else {
                    LoadingCustomMsgHide();
                    swalFireLoginFailed("Failed!" + result.responseText.trim());
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                LoadingCustomMsgHide();
                swalFireLoginFailed("Failed!" + result.responseText.trim());

            }

        });
    });

    task.delay(500);

}