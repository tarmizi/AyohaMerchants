
Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_NewOrderList', {

});

var _FloatPanel_AyohaStore_NewOrderList;


var isFloatPanel_AyohaStore_NewOrderListOpen = 'N';






function FloatPanel_AyohaStore_NewOrderList() {

    _FloatPanel_AyohaStore_NewOrderList =
    Ext.create('Ext.Container', {
        //zIndex: 150,
        zIndex: 49,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaStore_NewOrderListID',
        draggable: false,

        styleHtmlContent: true,

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
            type: 'slideOut',
            direction: 'left',
            easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
   // style: 'background-color:white;',
    style: GetbackgroundColor(),
      //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_AyohaStore_NewOrderList.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaStore_NewOrderList.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                }

        //            }
        //        });
        //    }
        //},

        items: [

            {

                xtype: 'container',
                width: '100%',
                docked:'top',
                 height: 60,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_AyohaStore_NewOrderListHeader',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                    
                //style: ' background-color: transparent;',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:1px solid #CCCCCC;border-top:2px none #ECF0F1 ;background: white;',
              //     
               //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
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
                            id: 'htmlFloatPanel_AyohaStore_NewOrderList_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>New Order</b></font>'
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
                        html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
                        ui: 'plain',
                        handler: function () {
                            // NotificationsPanelShow();

                            // LoyaltyCardRedeemListShow();


                            //  LoyaltyCardRedeemListShow();
                        }
                    },
                        {
                          
html:'<div class="search-container">'+

//'<button class="search-button">'+
//    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">'+
//     '<path d="M23.384,21.619l-5.282-5.282c1.465-1.849,2.338-4.174,2.338-6.741C20.44,4.207,16.232,0,11.22,0 C6.208,0,2,4.207,2,9.225c0,5.018,4.208,9.226,9.22,9.226c2.566,0,4.892-0.873,6.741-2.338l5.282,5.282 c0.383,0.383,1.003,0.383,1.386,0C23.767,22.622,23.767,22.002,23.384,21.619z M11.22,16.92c-4.234,0-7.694-3.46-7.694-7.694 c0-4.234,3.46-7.694,7.694-7.694s7.694,3.46,7.694,7.694C18.914,13.46,15.454,16.92,11.22,16.92z"/>'+
//         ' </svg>'+
//     '</button>'+
    '<input type="text" id="input-NewOrderListSearchText" class="search-input" placeholder="Search Order (Member Name/Phone No/Order No)">'+
'</div>'
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
                            width:20
                        },
                        {
                        
                                html: '<div style="color:black;text-align: left;font-size:16px;width:100%;paddign:0px 20px"><select style="font-size:16px;width:180px;height:30px"  id="FloatPanel_AyohaStore_NewOrderList_Selection"><option value="NA"> - Filter - </option><option value="Today">Today</option><option value="ThisWeek">This Week</option><option value="Month">This Month</option><option value="Year">This Year</option><option value="Custome">Custome Date</option></select></div>'  
                             
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
                                        id: 'btnFloatPanel_AyohaStore_NewOrderListBack',
                                        height: 30,
                                        width: 35,
                                        margin: '10 0 0 0',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                           // FloatPanel_AyohaStore_NewOrderListHide();
                                          isFloatPanel_AyohaStore_NewOrderListOpen = 'N';

                                           _FloatPanel_AyohaStore_NewOrderList.hide(Ext.fx.Animation({
                                            type: 'popOut',
                                            //direction: 'left',
                                           // easing: 'cubic-bezier(.7,0,.7,1)',
                                            duration: 250

                                        }));
                                        document.getElementById("input-NewOrderListSearchText").value=" ";
                                            FloatPanel_SubscriberMenuHide();
                                           

                                        }
                                    },
                                       {
                                           xtype: 'container',
                                           width: 15,
                                           height: 30,
                                       },
                                              









                       ]

            },




            {
                xtype: 'container',
                id: 'containerMembershipApprovalListTitleOutter',
                width: '100%',
                docked: 'bottom',
                // hidden:true,
                height: 50,
                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
               // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                // style: "background-color: #EAEEF3;",
                //////////style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ccc ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [




                      {
                          xtype: 'button',
                          id: 'btnMembershipApprovalListSearch',
                          hidden: true,
                          //  badgeText: '1',
                          margin: '1 0 0 0',
                          height: 40,
                          width: 40,
                          html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
                          ui: 'plain',
                          handler: function () {
                              // NotificationsPanelShow();

                              // LoyaltyCardRedeemListShow();


                              //  LoyaltyCardRedeemListShow();
                          }
                      },





                     {
                         id: 'MyMembershipApprovalListMasterHeader_MyLMembershipApprovalListTypeSearchTxt',
                         margin: '0 0 0 -10',
                         hidden:true,
                         width: '48%',
                         height: 20,
                        // html: '<input type="text" id="input-NewOrderListSearchText" placeHolder="Search (Member Name / Phone No/Order No)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                         html:'<div class="search-container">'+

                             '<input type="text"  class="search-input" placeholder="Search Order (Member Name/Phone No/Order No)">'+
                         '</div>'
                     
                     
                     
                        },
                        {
                            margin: '0 0 0 20',
                            //hidden:true,
                            id: 'htmlFloatPanel_AyohaStore_NewOrderList_recordFoundCount',
                            html: '<font size=3 color=black><b>Record Found:</b></font>'
                        },
                     {
                        margin: '0 0 0 0',
                        //hidden:true,
                        id: 'htmlFloatPanel_AyohaStore_NewOrderList_Count',
                        html: '<font size=3 color=black><b>(0)</b></font>'
                    },
{
xtype:'spacer',
},
                     {
                        xtype: 'container',                                                          
                        height: 40,
                        hidden:true,
                        margin: '0 0 0 10',
                      width:120,
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                             {
                                 margin: '3 0 0 -55',
                                 html: '<div style="color:green;text-align: center;font-size:10px;width:100%;font-weight:bold">APPROVED</div>',
                             },
                              {
                                  margin: '0 0 0 -55',
                                  id: 'htmlApprovedMembershipCount',                                                                    
                                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">0</div>',
                               
                              },
                        ]
                    },
                 
                    {
                        xtype: 'container',
                        height: 40,
                        width:70,
                        hidden:true,
                        margin: '2 0 0 0',
                        //style: {
                        //    // background: '#D25959',
                        //    background: 'rgba(76, 175, 80, 0.3);',
                        //    // border: '2px'
                        //},
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                             {
                                 margin: '0 0 0 -45',
                                 html: '<div style="color:red;text-align: center;font-size:10px;width:100%;font-weight:bold">REJECTED</div>',
                             },
                              {
                                  margin: '0 0 0 -45',
                                  id: 'htmlRejectedMembershipCount',
                                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">0</div>',
                                 // html: '<div  style="background-color: red;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                                //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                              },
                        ]
                    },
                    {
                        xtype: 'container',
                        height: 40,
                        width:70,
                        hidden:true,
                        margin: '2 0 0 0',
                        //style: {
                        //    // background: '#D25959',
                        //    background: 'rgba(76, 175, 80, 0.3);',
                        //    // border: '2px'
                        //},
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                             {
                                 margin: '0 0 0 0',
                                 html: '<div style="color:grey;text-align: center;font-size:10px;width:100%;font-weight:bold">EXPIRED</div>',
                             },
                              {
                                  margin: '0 0 0 0',
                                  id: 'htmlExpiredMembershipCount',
                                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>',
                                  //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                 // html: '<div  style="background-color: grey;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                              },
                        ]
                    },

                    {
                        xtype: 'container',
                        height: 40,
                        margin: '2 0 0 10',
                      width:160,
                      hidden:true,
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        items: [
                             {
                                 margin: '0 0 0 0',
                                 html: '<div style="color:orange;text-align: center;font-size:10px;width:100%;font-weight:bold">PENDING APPROVAL</div>',
                             },
                              {
                                  margin: '0 0 0 0',
                                  id: 'htmlRequestApprovalMembershipCount',
                                  html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">0</div>',
                                //  html: '<div class="blink_me" style="background-color: orange;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div class="blink_me" style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                              },
                        ]
                    },
                      {
                          xtype: 'button',
                          id: 'btnMembershipApprovalListFilter',
                          hidden: true,
                          //  badgeText: '1',
                          margin: '1 0 0 -5',
                          height: 40,
                          width: 40,
                          html: '<img src="resources/icons/MenuBoxPurple.png" width="30" height="30" alt="Company Name">',
                          ui: 'plain',
                          handler: function () {
                              FloatPanel_AddSubscriberMenuShow();
                              // NotificationsPanelShow();

                              // LoyaltyCardRedeemListShow();


                              //  LoyaltyCardRedeemListShow();
                          }
                      },




                ]

            },
            //////

            {
                xtype: 'container',
                width: '100%',
                height: '100%',
               //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
               style: 'background-color:transparent;',
                layout: {
                    type: 'fit',
                   

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            











                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////


                             
                              {
                                xtype: 'panel',
                                width: '100%',
                             //   hidden: true,
                               // id:'panelHeaderMembershipApprovalListListID',
                               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                //height: 50,
                                items: [
                                    {
                                     
                                     //ori html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border:1px solid grey"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial; text-transform:uppercase;font-size:12px;color:white"><div style="float:left;width:3%;"><span style="font-family: Arial; text-transform:uppercase;color:white;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial; text-transform:uppercase;color:white;padding:0px 0px"><b>Members Name / Phone No</b></div ><div style="float:left;width:11%;color:white;"><b>Order No</b></div><div style="float:left;width:19.5%;color:white;"><b>Order Item</b></div><div style="float:left;width:14.7%;color:white;"><b>Order Date</b></div><div style="float:left;width:8.5%;color:white;"><b>Delivery</b></div><div style="float:left;width:10%;color:white;"><b>Grand Total</b></div><div style="float:left;width:7%;color:white;"><b>Order Status</b></div></div></div></div>'
                                      html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color:#f4f4f4;;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:3%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:17.8%;font-family: Arial; padding:0px 0px"><b>Members Name / Phone No</b></div ><div style="float:left;width:11%;"><b>Order No</b></div><div style="float:left;width:19.5%;"><b>Order Item</b></div><div style="float:left;width:14.7%;"><b>Order Date</b></div><div style="float:left;width:8.5%;"><b>Delivery</b></div><div style="float:left;width:10%;"><b>Grand Total</b></div><div style="float:left;width:7%;"><b>Order Status</b></div></div></div></div>'
  
                                        
                                    }
                                ]
                            },
                      
                              {
                                 // height: 639,
                                  width: '100%',
                                  height: '90%',
                                  style: 'background-color:transparent',
                                  id: 'containerMembershipApprovalListList',
                                  xtype:'container',
                                  //style: {
                                  //    // background: '#D25959',
                                  //    background: 'white',
                                  //    // border: '2px'
                                  //},
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center',

                                  },
                                  items: [



                                    {
                                        xtype: 'list',
                                        //  flex: 1,
                                        store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore,
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
                                     
   
                                        //  itemTpl: '<div class="myContent">' +
                                        //  '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                                        // '</table><br>' +
                                        //  '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                        //        '</div>',
         


                                               itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                            
                                             
                                            //  '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{Row_num}).</div ><div  style="float:left;width:18.4%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:bold">{ClientName}<br>({ClientPhoneNo})</div ><div style="float:left;width:11%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{DisplayOrderNo}</div><div style="float:left;width:22%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{ModifiedItemsName}</div><div style="float:left;width:13%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{CreatedDate}</div><div style="float:left;width:8%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{DeliveryName}</div><div style="float:left;width:9%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal;">{GrandTotal}</div><div style="float:left;width:8%;font-family:'+GetListFontStyle()+'; color:blue;font-size:12px;font-weight:normal;bold;cursor: pointer;"   onclick="FloatPanel_AyohaStore_OrderHistoryLoadByOrderNoMerchantShow(`{OrderNo}`,`1`)"><u>{OrderStatus}</u></div><div style="float:left;width:6%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal"><div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:0px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:0px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div></div></div></div></div>'+
   
  '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{Row_num}).</div ><div  style="float:left;width:18.4%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{ClientName}<br>({ClientPhoneNo})</div ><div style="float:left;width:11%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{DisplayOrderNo}</div><div style="float:left;width:20%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{ModifiedItemsName}</div><div style="float:left;width:15%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{CreatedDate}</div><div style="float:left;width:9%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal">{DeliveryName}</div><div style="float:left;width:10%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:16px;font-weight:bold;">RM{GrandTotal}</div><div class="blink_me_sendNow" style="float:left;width:8%;font-family:'+GetListFontStyle()+'; color:blue;font-size:12px;font-weight:normal;bold;cursor: pointer;"   onclick="FloatPanel_AyohaStore_OrderHistoryLoadByOrderNoMerchantShow(`{OrderNo}`,`1`)"><u>New Order</u></div><div style="float:left;width:6%;font-family:'+GetListFontStyle()+'; color:'+GetListFontColor()+';font-size:12px;font-weight:normal"><div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:0px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:0px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div></div></div></div></div>'+
   
 
                                                   '</div>',
   
   
   
   
                                        emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Rejected',
                                        width: '100%',
                                        height: '100%',
                                        disableSelection: true,
   
   
                                    },


                                    //   {
                                    //       xtype: 'list',
                                    //       //  flex: 1,
                                    //       width: '100%',
                                    //       store: _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore,
                                    //       //store: 'MasterMembershipsLoadByEnterpriseAccNoStore',
                                    //       id: 'FloatPanel_AyohaStore_NewOrderList_MembershipApprovalListID',                                         
                                    //       // grouped: true,
                                    //       mode: 'SINGLE',
                                    //       //scrollable: {
                                    //       //    direction: 'vertical',
                                    //       //    indicators: {
                                    //       //        y: {
                                    //       //            autoHide: true
                                    //       //        },
                                    //       //        x: {
                                    //       //            autoHide: true
                                    //       //        }
                                    //       //    }
                                    //       //},

                                    //       scrollable: {
                                    //           direction: 'vertical',
                                    //          // directionLock: true,
                                    //           indicators: false,
                                    //          // bounces: false,
                                    //          // outOfBoundRestrictFactor: 0,
                                    //           //threshold: 20,
                                    //           scroller: {
                                    //               listeners: {
                                    //                   scroll: function (scroller, x, y, eOpts) {
                                    //                      //  console.log('[scrollable][on scroll]x=' + x + ', y=' + y);
                                    //                       if (y < -123) {
                                    //                         rn=0;
                                    //                         MasterMembershipsLoadByEnterpriseAccNoStore();
                                    //                           //// console.log('sampai scrollable')
                                    //                           //scroller.scrollTo({
                                    //                           //    x: 0,
                                    //                           //    y: 0
                                    //                           //});
                                    //                           //return
                                    //                       }
                                    //                   },
                                    //                   //scrollend: function (scroller, x, y, eOpts) {
                                    //                   //    //console.log('[scrollable][on scrollend]x=' + x + ', y=' + y);
                                    //                   //    //if (y <= 0) {
                                    //                   //    //    console.log('sampai')
                                    //                   //    //    scroller.scrollTo({
                                    //                   //    //        x: 0,
                                    //                   //    //        y: 0
                                    //                   //    //    });
                                    //                   //    //}


                                    //                   //}
                                    //               }
                                    //           }
                                    //       },
                                    //      // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                    //       style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                    //       disableSelection: true,
                                        

                                    //           itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                                            
                                               
                                               
                                               
                                    //           // '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="width:1%;background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;">{ModifiedRowNumber}).</th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:5%;"><img src="{Photo}" alt="Image" style="width: 110px; height: 120px; margin:7px 0px 0px 0px;"></th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 0px;text-align:left;vertical-align:top;word-break:normal;width:66%;"><div style="background-color: white; color: black;text-align: left;margin: 2px 0px 0px 0px;font-family:Arial, sans-serif;font-size:13px;font-weight:bold;width:100%">{ModifiedAccountName}</div><br><div style="background-color: white; color: black;text-align: left;margin: -27px 0px 0px 0px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;width:100%">{MembershipNo}</div><br><div style="background-color: white; color: black;text-align: left;margin: -21px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;width:100%">Membership Date:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 0px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{CreatedDate}</div><br><div style="background-color: white; black: white;text-align: left;margin: -20px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;width:100%">Subscribed Membership Card:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 0px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{CardCount}</div><br><div style="background-color: white; color: black;text-align: left;margin: -20px 0px 0px 3px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;width:100%">Latest Activity:</div><br><div style="background-color: white; color: black;text-align: left;margin: -24px 0px 0px 3px;font-family:Arial, sans-serif;font-size:11px;font-weight:bold;width:100%">{Latest_ActivityDate}</div><br><div style="background-color: white; color: black;text-align: right;margin: -100px 0px 0px -23px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;width:100%"><button OnClick="FloatPanel_AyohaStore_NewOrderList_ExpandMembershipSummary({ID})" class="buttonMediaSocial" style="margin:0px 20px 0px 0px;">{ModifiedMembershipApprovalStatusRound}</button>{ModifiedMembershipApprovalStatus}</div></th><th style="background-color:white;border-color:white;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;width:28%;"><button  onClick="FloatPanel_AyohaStore_NewOrderList_ExpandMembershipSummary({ID});" class="buttonAyohaNotificationMgmt" style="margin:0px 30px 0px 0px;"><img src="resources/icons/viewCardPurpleExt.png"  style="width:32px;height:32px;margin:0px 0px -17px 0px;" alt="Company Name"></button><br><font size=2>View Detail</font></th></tr></thead></table>' +

                                    //          // '<div style="background-color: transparent;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;"/></span></div ><div style="float:left;width:16.3%;font-family: Arial; text-transform:uppercase;color:black;font-size:12px;font-weight:bold">{ModifiedAccountName}<br>{MembershipNo}</div ><div style="float:left;width:16%;color:#71797E;"><img src="{ModifiedMembershipCardBg}" alt="Image" style="width: 45px; height: 30px; margin:0px 0px 0px 0px;border-radius:5px;"/></div><div style="float:left;width:12%;color:#71797E;"><b>Membership Date</b></div><div style="float:left;width:12.2%;color:#71797E;"><b>Membership End Date</b></div><div style="float:left;width:13%;color:#71797E;"><b>Latest Activity</b></div><div style="float:left;width:10%;color:#71797E;"><b>Membership Status</b></div></div></div></div>'+
                                    //           '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><span style="font-family: Arial;"><div style="float:left;width:2%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div style="float:left;width:6.5%;"><span style="font-family: Arial; text-transform:uppercase;color:#71797E;"><img  onClick="FloatPanel_AyohaStore_NewOrderList_ExpandMembershipSummary_fromMembershipApprovalList({ID});" src="{Photo}" alt="Image" style="width: 80px; height: 80px; margin:0px 0px 0px 0px;border-radius:50%;cursor: pointer"/></span></div ><div onClick="FloatPanel_AyohaStore_NewOrderList_ExpandMembershipSummary_fromMembershipApprovalList({ID});" style="float:left;width:18.4%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{ModifiedAccountName}</u><br><u>{PhoneNo}</u></div ><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipCardBg}</div><div style="float:left;width:15.5%;color:#71797E;">{ModifiedMembershipCardName}</div><div style="float:left;width:13%;color:#71797E;">{ModifiedMembershipApprovalDate}</div><div style="float:left;width:12.5%;color:#71797E;">{ModifiedMembershipEndDate}</div><div style="float:left;width:10.5%;color:#71797E;">{ModifiedMembershipsRenewalInfo}</div><div style="float:left;width:6%;color:#71797E;">{ModifiedMembershipsApprovalStatus}</div></div></div></div>'+
  


                                    //               '</div>',
                                    //      height: '100%',
                                    //       listeners: {
                                    //           itemsingletap: function (list, idx, target, records, evt) {
                                    //               //LoadingPanelShow();
                                    //               //ID = records.get('ID');
                                    //               //EnterpriseAccNo = records.get('EnterpriseAccNo');
                                    //               //localStorage.setItem('EnterpriseAccNo', records.get('EnterpriseAccNo'));

                                    //               //loadEnterpriseDetails(records.get('ID'), records.get('EnterpriseAccNo'));


                                    //               //var SubcriberAccNo = records.get('SubcriberAccNo');
                                    //               //var LoyaltyCardType = records.get('LoyaltyCardType');

                                    //               //if (LoyaltyCardType == "Point") {
                                    //               //    FloatLoyaltyCardPointShow();
                                    //               //    loadlistsummaryreceipt('NewReceipt');
                                    //               //    Ext.getCmp('tabpanelFloatLoyaltyCardPoint').getTabBar().hide();
                                    //               //}
                                    //               //if (LoyaltyCardType == "Stamp") {
                                    //               //    //  Subscriber_FloatLoyaltyCardStampShow(SubcriberAccNo);
                                    //               //    FloatPanel_SubscriberMasterShow();
                                    //               //}




                                    //           },
                                    //           deselect: function (list, records) {

                                    //           }
                                    //       },

                                    //   },

                                      {
                                          width: '100%',
                                          height: '10%',
                                          style: 'background-color:white',
                                         
                                          xtype: 'container',
                                          //style: {
                                          //    // background: '#D25959',
                                          //    background: 'white',
                                          //    // border: '2px'
                                          //},
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center',

                                          },
                                      }
                                      

                                  ]

                              },

                              



                              
                              





                        ]
                    },









                    



















                ]
            },












        ]





    });
    return _FloatPanel_AyohaStore_NewOrderList;



}













function FloatPanel_AyohaStore_NewOrderListMemberShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_NewOrderList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_NewOrderList());
    this.overlay.show();
    isFloatPanel_AyohaStore_NewOrderListOpen = 'Y';
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.clearFilter();
    FloatPanel_AyohaStore_NewOrderList_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore('Year','00','00');
   document.getElementById("input-NewOrderListSearchText").addEventListener("keyup", SearchNewOrderListSearch);
   // FloatPanel_AyohaStore_NewOrderListMember_MembershipsLoadByEnterpriseAccNoApprovalListStore();
    FloatPanel_DrawerMenu_MainHide();
 //   document.getElementById("input-NewOrderListSearchText").value="";


 var selectElement = document.getElementById('FloatPanel_AyohaStore_NewOrderList_Selection');

 // Add an event listener for the 'change' event
 selectElement.addEventListener('change', function() {
     // Get the value of the selected option
     var selectedValue = selectElement.value;
     
     // Do something with the selected value
     console.log("Selected filter: " + selectedValue);
     // For example, you can call a function to handle different filters
     handleFilterChange_NewOrderList(selectedValue);
 });
   
}

function handleFilterChange_NewOrderList(filter) {
    switch (filter) {
        case 'Today':

            FloatPanel_AyohaStore_NewOrderList_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore(filter,'00','00');
            break;
        case 'ThisWeek':
            FloatPanel_AyohaStore_NewOrderList_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore(filter,'00','00');
            break;
        case 'Month':
            FloatPanel_AyohaStore_NewOrderList_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore(filter,'00','00');
            break;
        case 'Year':
            FloatPanel_AyohaStore_NewOrderList_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore(filter,'00','00');
            break;
        case 'Custome':
            FloatPanel_AyohaStore_NewOrderList_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore(filter,'00','00');
            break;
        default:
            console.log("No filter selected or action defined.");
    }
}



function FloatPanel_AyohaStore_NewOrderListHide() {
    // FloatPanel_AyohaStore_NewOrderList_AddCardHide();
   // FloatPanel_SubscriberMenuHide();
   if(isFloatPanel_AyohaStore_NewOrderListOpen == 'Y')
   {
    _FloatPanel_AyohaStore_NewOrderList.hide(); isFloatPanel_AyohaStore_NewOrderListOpen = 'N';
   }
   
}







function FloatPanel_AyohaStore_NewOrderList_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore(DashboardFilter,StartDate,EndDate) {
   // _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.clearFilter();
  
  
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getProxy().setExtraParam('DashboardFilter', DashboardFilter);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getProxy().setExtraParam('StartDate', StartDate);
    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getProxy().setExtraParam('EndDate', EndDate);

    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchant');
 
   

    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
        
                var Store = records[0]; // Access only the first record
                globalCountOrder=Store.get('TotalRow');
                Ext.getCmp('htmlFloatPanel_AyohaStore_NewOrderList_Count').setHtml('<font size="3" color="black"><b>(' + globalCountOrder + ')</b></font>');    
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
        });












    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //   //  _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.load();
    //   // alert(_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getCount())
    //    var Store = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getAt(0);
    //    globalCountOrder=Store.get('TotalRow');
    //    Ext.getCmp('htmlFloatPanel_AyohaStore_NewOrderList_Count').setHtml('<font size="3" color="black"><b>(' + globalCountOrder + ')</b></font>');
    
    
    
    //    //  var count =parseInt(_DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getCount());
       

    //    // var OrderStatus = Store.get('OrderStatus');

    //     //ModifiedOrderLogCreatedDate
    //     //if (OrderStatus == "All Orders") {
    //     //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (28) | <font color="red">Order UnPaid (1)</font></div>');

    //     //} else {
    //     //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div>');

    //     //}
    //     // id: 'htmlFloatPanel_AyohaStore_NewOrderList_Count',
    //     // html: '<font size=2 color=black><b>(0)</b></font>'
       

    // });
    // task.delay(500);


   // Ext.Viewport.setMasked(false);
}














//////////////////////////////////////////////////////////////////////////































function SearchNewOrderListSearch() {






    console.log('SearchEnterpriseOnKeyUp');
    var countOrder = 0;


    _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.clearFilter();

    var queryString = document.getElementById('input-NewOrderListSearchText').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

              countOrder = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getCount();
              Ext.getCmp('htmlFloatPanel_AyohaStore_NewOrderList_Count').setHtml('<font size="3" color="black"><b>(' + countOrder + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countOrder = _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.getCount();
       Ext.getCmp('htmlFloatPanel_AyohaStore_NewOrderList_Count').setHtml('<font size="3" color="black"><b>(' + countOrder + ')</b></font>');
     //   Ext.getCmp('htmlMembershipApprovalListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoNewOrderListMerchantStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaStore_NewOrderList_Count').setHtml('<font size="3" color="black"><b>(' + globalCountOrder + ')</b></font>');
     //   Ext.getCmp('htmlMembershipApprovalListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}






