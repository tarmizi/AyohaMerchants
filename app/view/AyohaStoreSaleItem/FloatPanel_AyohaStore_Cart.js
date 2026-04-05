Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_Cart', {
  
});





var _FloatPanel_AyohaStore_Cart;


var isFloatPanel_AyohaStore_CartOpen = 'N';

function FloatPanel_AyohaStore_Cart() {

    _FloatPanel_AyohaStore_Cart =
          Ext.create('Ext.Container', {
              requires: [
         'Ext.util.DelayedTask',
              ],
              xtype: 'container',
              height: '100%',
              // height: 615,
              width: 280,
              id: 'FloatPanel_AyohaStore_CartID',
              zIndex: 320,
              // centered: true,
              right: -1,
              //top:32,
              modal: true,
              hideOnMaskTap: true,
              layout: {
                  type: 'fit'
              },
              showAnimation: {
                  type: 'slideIn',
                  direction: 'left',
                  duration: 150,
                  //easing: 'ease-in'
              },
              hideAnimation: {
                  //type: 'reveal',
                  //duration: 250,
                  type: 'slideOut',

                  direction: 'right',
                  duration: 150
              },

              listeners: {
                  initialize: function (c) {
                      this.element.on({
                          swipe: function (e, node, options) {
                              if (e.direction == "right") {
                                  FloatPanel_AyohaStore_CartHide();
                                  //  alert("Hey! I swipe left");
                                  //Ext.getCmp('tabpanelTrackingOverViewMapPointInfoTblManualTrack').setActiveItem(2);
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderMovement').setHtml("<font size=2>Tracking</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderClaim').setHtml("<font size=2>Claim</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderPurpose').setHtml("<font size=3><u><b>Purpose</b></u></font>");

                              } else {
                                //  FloatPanel_AyohaStore_CartHide();



                              }
                          }
                      });
                  }
              },

              style: "background-color: white",
             

                        items: [


{

    xtype: 'container',
    width: '100%',
    height: 40,
    // width: 40,
    //zIndex:-10,
    //  title: '<font size="3" color="white">Live Tracking Map</font>',
    //hidden: true,
    docked: 'top',
    id: 'containerFloatPanel_AyohaStore_CartHeader',
    style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
    // hidden:true,
    items:
           [

                {
                    margin: '0 0 0 0',

                    width: 24,
                    height: 24,
                    html: '<img src="resources/icons/myCart01.png" alt="Image" style="width:24px;height:24px;">',
                    // ui:'plain'
                },

                  {
                      margin: '15 0 0 0',
                      id: 'htmlFloatPanel_AyohaStore_Cart_Title',
                      html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:white;text-align:center;" >Shopping Cart</div>'
                  },
                                                      


                        






           ]

},




                            {
                                xtype: 'container',
                                style: 'border-left:1px solid grey;background-color:white;',
                                //////  style: 'border-bottom:1px solid;background-color:white;',
                                // style: 'border-bottom:1px solid;background-color:#F7FDFA;',
                                //  style: GetCurrentToolbarStyle(),
                                //  style: 'background-image: url("resources/icons/BGsummaryReceipt4.jpg"); background-size: 100% 100%;border-bottom:1px solid;',
                                //height: 250,
                                height: '100%',
                                width: 280,
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center',

                                },

                                items: [
                                   
                               
                                   
                                    {
                                        xtype: 'container',
                                        id: 'containerFloatPanel_AyohaStore_CartItem',
                                        style: ' background-color: transparent',
                                        margin: '0 0 0 0',
                                        height: '100%',
                                        width: '100%',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left'

                                        },
                                        items: [
                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  docked: 'bottom',
                                                  margin: '0 0 0 0',
                                                  height: 60,
                                                  style: 'background-color:transparent;',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          xtype: 'container',
                                                          width: '100%',
                                                          margin: '-10 0 0 14',
                                                          height: 20,
                                                          style: 'background-color:transparent;',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'

                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   width: 40,
                                                                   height: 20,
                                                                   //  margin: '5 0 0 14',
                                                                   ui: 'plain',
                                                                   id:'btnFloatPanel_AyohaStore_Cart_Order',
                                                                   html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order</u></div>',
                                                                   handler: function () {
                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_Cart_MakePayment').setHidden(true);
                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderWhatsApp').setHidden(false);
                                                                       Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderHistory').setHidden(true);                                                                       
                                                                       Ext.getCmp('btnFloatPanel_AyohaStore_Cart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order</u></div>');
                                                                       Ext.getCmp('btnFloatPanel_AyohaStore_Cart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Make Payment</div>');
                                                                       Ext.getCmp('btnFloatPanel_AyohaStore_Cart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order History</div>');

                                                                   }
                                                               },
                                                               
                                                                   {
                                                                       xtype: 'button',
                                                                       width: 100,
                                                                       height: 20,
                                                                       margin: '0 0 0 -14',
                                                                       ui: 'plain',
                                                                       id: 'btnFloatPanel_AyohaStore_Cart_OrderHistory',
                                                                       html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order History</div>',
                                                                       handler: function () {
                                                                           Ext.getCmp('containerFloatPanel_AyohaStore_Cart_MakePayment').setHidden(true);
                                                                           Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderWhatsApp').setHidden(true);
                                                                           Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderHistory').setHidden(false);
                                                                           Ext.getCmp('btnFloatPanel_AyohaStore_Cart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order</div>');
                                                                           Ext.getCmp('btnFloatPanel_AyohaStore_Cart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Make Payment</div>');
                                                                           Ext.getCmp('btnFloatPanel_AyohaStore_Cart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order History</u></div>');

                                                                       }
                                                                   },
                                                                   {
                                                                       xtype:'spacer',
                                                                   },
                                                                    {
                                                                        xtype: 'button',
                                                                        hidden:true,
                                                                        width: 100,
                                                                        height: 20,
                                                                        margin: '0 0 0 -14',
                                                                        ui: 'plain',
                                                                        id: 'btnFloatPanel_AyohaStore_Cart_MakePayemnt',
                                                                        html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Make Payment</div>',
                                                                        handler: function () {
                                                                            Ext.getCmp('containerFloatPanel_AyohaStore_Cart_MakePayment').setHidden(false);
                                                                            Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderWhatsApp').setHidden(true);
                                                                            Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderHistory').setHidden(true);
                                                                            Ext.getCmp('btnFloatPanel_AyohaStore_Cart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order</div>');
                                                                            Ext.getCmp('btnFloatPanel_AyohaStore_Cart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Make Payment</u></div>');
                                                                            Ext.getCmp('btnFloatPanel_AyohaStore_Cart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order History</div>');

                                                                        }
                                                                    },
                                                                    {
                                                                        xtype: 'panel',
                                                                        width:12
                                                                    },
                                                          ]
                                                      },
                                                      {
                                                          xtype: 'container',
                                                          id: 'containerFloatPanel_AyohaStore_Cart_OrderWhatsApp',
                                                          name: 'namecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp',
                                                          width: '80%',
                                                          height: 40,
                                                          margin: '5 0 0 0',
                                                          
                                                          // style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background: #075e54;border-radius: 20px 20px 20px 20px;',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },
                                                          items: [
                                                              {
                                                                  margin: '0 0 0 0',

                                                                  width: 24,
                                                                  height: 24,
                                                                  html: '<img src="resources/icons/whatsappWhite.png" alt="Image" style="width:24px;height:24px;">',
                                                                  // ui:'plain'
                                                              },

                  {
                      margin: '12 0 0 5',
                      id: 'htmlFloatPanel_AyohaStore_Cart_WhatsAppText',
                      html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:white;text-align:center;" >Order via whatsapp</div>'
                  },
                                                          ]
                                                      },
                                                      {
                                                          xtype: 'container',
                                                          id: 'containerFloatPanel_AyohaStore_Cart_OrderHistory',
                                                          width: '100%',
                                                          height: 40,
                                                          margin: '0 0 0 0',
                                                          hidden: true,
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background: #075e54;border-radius: 20px 20px 20px 20px;',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },
                                                          items: [
                 //                                             {
                 //                                                 xtype: 'panel',
                 //                                                 width: 5
                 //                                             },
                 //                                             {
                 //                                                 xtype: 'container',
                 //                                                 id: 'containerFloatPanel_AyohaStore_Cart_OrderHistory_Year',
                 //                                                 width: '26%',
                 //                                                 height: 35,
                 //                                                 margin: '0 0 0 0',
                 //                                                 // hidden: true,
                 //                                                 // style: "background-color: transparent",
                 //                                                 //style: "background-color: #F35B57;",
                 //                                                 style: 'border-right:1px none grey;border-left:1px none grey;border-bottom:1px none grey;border-top:1px none grey ;background: white;',
                 //                                                 layout: {
                 //                                                     type: 'hbox',
                 //                                                     pack: 'center',
                 //                                                     align: 'center'

                 //                                                 },
                 //                                                 items: [
                 //                                                      {
                 //                                                          //  width: 150,

                 //                                                          id: 'htmlFloatPanel_AyohaStore_Cart_Year',
                 //                                                          html: '<input type="text" id="input-htmlFloatPanel_AyohaStore_Cart_Year"  placeHolder="Year" readOnly  style="border-radius: 0px;border-bottom: 1px solid purple;padding: 2px; width: 65px;height: 20px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/>'
                 //                                                      },
                 //{
                 //    width: 26,
                 //    height: 26,
                 //    margin: '-2 0 0 -25',                    
                 //    html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                 //    xtype: 'button',
                 //    ui: 'plain',
                 //    handler: function () {
                 //        FloatPanel_YearOnlyShow();

                 //    }
                 //},
                     
                 //                                                 ]
                 //                                             },
                 //                                             {
                 //                                                 xtype: 'panel',
                 //                                                 width:1
                 //                                             },
                 //                                            {
                 //                                                xtype: 'container',
                 //                                                id: 'containerFloatPanel_AyohaStore_Cart_OrderHistory_Month',
                 //                                                width: '34%',
                 //                                                height: 35,
                 //                                                margin: '0 0 0 0',
                 //                                                style: 'border-right:1px none grey;border-left:1px none grey;border-bottom:1px none grey;border-top:1px none grey ;background: white;',
                 //                                                layout: {
                 //                                                    type: 'hbox',
                 //                                                    pack: 'center',
                 //                                                    align: 'center'

                 //                                                },
                 //                                                items: [
                 //                                                     {
                 //                                                         //  width: 150,

                 //                                                         id: 'htmlFloatPanel_AyohaStore_Cart_Month',
                 //                                                         html: '<input type="text" id="input-htmlFloatPanel_AyohaStore_Cart_Month"  placeHolder="Month" readOnly  style="border-radius: 0px;border-bottom: 1px solid purple;padding: 2px; width:85px;height: 20px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/>'
                 //                                                     },
                 //{
                 //    width: 26,
                 //    height: 26,                   
                 //    html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                 //    margin: '-2 0 0 -25',
                 //    xtype: 'button',
                 //    ui: 'plain',
                 //    handler: function () {
                 //        FloatPanel_MonthOnlyShow();

                 //    }
                 //},
                         
                 //                                                ]
                 //                                            },
                                                             {
                                                                 xtype: 'container',
                                                                 id: 'containerFloatPanel_AyohaStore_Cart_OrderHistory_Status',
                                                                 width: '100%',
                                                                 height: 35,
                                                                 margin: '0 0 0 0',
                                                                 style: 'border-right:1px none grey;border-left:1px none grey;border-bottom:1px none grey;border-top:1px none grey ;background: white;',
                                                                 layout: {
                                                                     type: 'hbox',
                                                                     pack: 'center',
                                                                     align: 'center'

                                                                 },
                                                                 items: [
                                                                      {
                                                                          //  width: 150,

                                                                          id: 'htmlFloatPanel_AyohaStore_Cart_Status',
                                                                          html: '<input type="text" id="input-htmlFloatPanel_AyohaStore_Cart_Status"  placeHolder="Status" readOnly  style="border-radius: 0px;border-bottom: 1px solid purple;padding: 2px; width: 80%;height: 20px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/>'
                                                                      },
                 {
                     
                     width: 26,
                     height: 26,
                     margin: '6 0 0 -40',
                     html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                     xtype: 'button',
                     ui: 'plain',
                     handler: function () {

                         FloatPanel_AyohaStore_CartStatusListShow();
                     }
                 },

                                                                 ]
                                                             },
                                                             {
                                                                 xtype: 'panel',
                                                                 width: 5
                                                             },
                                                          ]
                                                      },

                                                      {
                                                          xtype: 'container',
                                                          id: 'containerFloatPanel_AyohaStore_Cart_MakePayment',
                                                          width: '100%',
                                                          height: 40,
                                                          margin: '0 0 0 0',
                                                          hidden: true,
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                         // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background: #075e54;border-radius: 20px 20px 20px 20px;',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },
                                                          items: [
                                                              {
                                                                  xtype: 'panel',
                                                                  width: 5
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerFloatPanel_AyohaStore_Cart_MakePayment_OnlineBanking',
                                                                  width: '41%',
                                                                  height: 35,
                                                                  margin: '0 0 0 0',
                                                                  // hidden: true,
                                                                 // style: "background-color: transparent",
                                                                  //style: "background-color: #F35B57;",
                                                                   style: 'border-right:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-top:1px solid grey ;background: white;border-radius: 10px 10px 10px 10px;',
                                                                  layout: {
                                                                      type: 'hbox',
                                                                      pack: 'center',
                                                                      align: 'center'

                                                                  },
                                                                  items: [

                                                                       {
                                                                           margin: '0 0 0 0',

                                                                           width: 24,
                                                                           height: 24,
                                                                           html: '<img src="resources/icons/onlineBanking.png" alt="Image" style="width:24px;height:24px;">',
                                                                           // ui:'plain'
                                                                       },

                  {
                      margin: '12 0 0 5',
                      id: 'htmlFloatPanel_AyohaStore_Cart_onlineBankingText',
                      html: '<div style="background: transparent;height:30px;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Online Banking</div>'
                  },
                                                                  ]
                                                              },
                                                              {
                                                                  xtype: 'panel',
                                                                  width:10
                                                              },
                                                             {
                                                                 xtype: 'container',
                                                                 id: 'containerFloatPanel_AyohaStore_Cart_MakePayment_AyohaEwallet',
                                                                 width: '41%',
                                                                 height: 35,
                                                                 margin: '0 0 0 0',
                                                                 // hidden: true,
                                                                 // style: "background-color: transparent",
                                                                 //style: "background-color: #F35B57;",
                                                                 style: 'border-right:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-top:1px solid grey ;background: white;border-radius: 10px 10px 10px 10px;',
                                                                 layout: {
                                                                     type: 'hbox',
                                                                     pack: 'center',
                                                                     align: 'center'

                                                                 },
                                                                 items: [

                                                                      {
                                                                          margin: '0 0 0 0',

                                                                          width: 24,
                                                                          height: 24,
                                                                          html: '<img src="resources/icons/ayohaewallet01.png" alt="Image" style="width:24px;height:24px;">',
                                                                          // ui:'plain'
                                                                      },

                 {
                     margin: '12 0 0 5',
                     id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwalletText',
                     html: '<div style="background: transparent;height:30px;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Ayoha e-Wallet</div>'
                 },
                                                                 ]
                                                             },
                                                             {
                                                                 xtype: 'panel',
                                                                 width: 5
                                                             },
                                                          ]
                                                      }
                                                  ]
                                              },
                                            {


                                                xtype: 'list',
                                                // height: '64%',
                                                // height: '100%',
                                                // height: 200,
                                                //   flex: 2,
                                                store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                                                style: 'border-bottom:1px none grey;background-color:white;',
                                                id: 'List_FloatPanel_AyohaStore_CartList',
                                                mode: 'SINGLE',
                                                disableSelection: true,
                                                //  grouped: true,
                                                // disableSelection: true,
                                                itemTpl: '<div style="width:110%;text-align:right;margin:-8px 0px 0px -3px;"><button OnClick="FloatPanel_AyohaStore_Cart_Delete({ID})" class="buttonsHtmlBgDeleteNotificationListTransparent" style="margin:-10px 0px 0px 0px;z-index:100;"><img src="resources/icons/xsigncircle04.png" style="width: 16px; height: 16px; margin:-10px 0px 0px -10px;z-index:100;" /></button></div>' +
                                               '<div class="myContent" style="background-color:white;width:112%;height:99px; margin:-30px 0px 0px -16px;">' +
                                                                                                 ///ori  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:5px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});">{ItemName}</div><br><div onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br> <div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="0.05 Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*0.05 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;height:45px" onclick="FloatPanel_AyohaStore_DetailsShow({ID});">{ItemDescriptions}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;" onclick="FloatPanel_AyohaStore_DetailsShow({ID});"><input type="number" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_RewardStore_OpenStore()" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                                                                                                   // '<div style="width:100%;text-align:right;margin:-10px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaStore_Cart_DeleteItem({ID})" class="buttonsHtmlBgDeleteNotificationListTransparent"><img src="resources/icons/xsigncircle04.png" style="width: 16px; height: 16px; margin:0px 0px 0px -10px;z-index:100;" /></button></div><br>'

                                                                                                  //ori + '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:-50px 0px 0px -13px;height:95px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 100px; height: 100px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:5px 0px 0px 0px;height:30px;" onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;"><button OnClick="FloatPanel_RewardStore_AddToCart_Minus() class="buttonAddToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_Qty{ID}" value="1" style="border-radius: 2px;border: 1px solid purple;padding: 2px; width: 25px;height: 22px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_ADD() class="buttonAddToCartSign">+</button> X RM{ItemPrice}</div><br>{PointlabelTemp}</th></tr></thead></table>'
                                                                                                  // + '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:-50px 0px 0px -13px;height:95px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 100px; height: 100px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:90%;" onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});">{ItemName}</div>{PointlabelTemp}<br><div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;"><button OnClick="FloatPanel_RewardStore_AddToCart_Minus() class="buttonAddToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_Qty{ID}" value="1" style="border-radius: 2px;border: 1px solid purple;padding: 2px; width: 25px;height: 22px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_ADD() class="buttonAddToCartSign">+</button> X RM{ItemPrice}</div></th></tr></thead></table>'


                                                                                                   '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px solid #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 100px; height: 113px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px solid #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:90%;" onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});">{RowNumber}).{ItemName}</div>{Pointlabel}   <br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px;" onclick="FloatPanel_AyohaStore_DetailsShow({ID});">{ItemDescriptions}</div>{OrderSentCreatedDate}</th></tr></thead></table>'

                                                                                                  
                                                                                                 + '</div>'
                                                + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_MINUS({ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ')"  class="buttonAddToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_Cart_Qty{ID}" value={ItemQuantity} style="border-radius: 2px;border: 1px solid purple;padding: 2px; width: 25px;height: 23px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_ADD({ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ')"  class="buttonAddToCartSign">+</button> X RM{ItemPrice}</div>',


                                                //  + '{ButtonBottomHistoryStatus}',
                                                //+ '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonAyohaRedemptionHistoryCancel" onClick="FloatPanel_AyohaPointRedemption_RedeemHistoryLogShow({ID})">Cancel</button>&nbsp;&nbsp;&nbsp;<button class="buttonAyohaRedemptionHistoryStatus" onClick="FloatPanel_AyohaPointRedemption_RedeemHistoryLogShow({ID})">View Redeem Status Log</button></div>',
                                                emptyText: '<div class="myContent">No Cart Item</div>',
                                                width: '100%',
                                                // height: 600,
                                                 height: '70%',

                                                listeners: {


                                                    itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                                    },

                                                    itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                                    }
                                                }






                                            },



                                            {
                                                xtype: 'container',
                                                id: 'containerFloatPanel_AyohaStore_CartItemBottom',
                                                style: ' background-color: transparent',
                                                margin: '0 0 0 0',
                                                height: '30%',
                                                width: '100%',
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

                                                    

                                                    ////////////////

                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        margin: '-3 0 0 0',
                                                        height: 1,
                                                        style: 'background-color:transparent;',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                             {
                                                                 xtype: 'container',
                                                                 width: '90%',
                                                                 margin: '3 0 0 0',
                                                                 height: 1,
                                                                 style: 'background-color:grey;',
                                                             },
                                                        ]
                                                    },


                                            {
                                                xtype: 'container',
                                                width: '100%',
                                                margin: '8 0 0 0',
                                                height: 18,
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center'

                                                },
                                                items: [

                                                    {
                                                        xtype: 'container',
                                                        width: '80%',
                                                        // height: 30,
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'right',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                             {
                                                                 html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Quantity:</div>'
                                                             }
                                                        ]
                                                    },
                                                     {
                                                         xtype: 'container',
                                                         width: '20%',
                                                         // height: 30,
                                                         layout: {
                                                             type: 'hbox',
                                                             pack: 'left',
                                                             align: 'center'

                                                         },
                                                         items: [
                                                           {
                                                               margin: '0 0 0 5',
                                                               id:'htmlFloatPanel_AyohaStore_Cart_TotalQuantity',
                                                               html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">0</div>'
                                                           }
                                                         ]
                                                     },
                                                ]
                                            },


                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               height: 18,
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                   {
                                                       xtype: 'container',
                                                       width: '80%',
                                                       // height: 30,
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'right',
                                                           align: 'center'

                                                       },
                                                       items: [
                                                            {
                                                              
                                                                html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">SubTotal(RM):</div>'
                                                            }
                                                       ]
                                                   },
                                                    {
                                                        xtype: 'container',
                                                        width: '20%',
                                                        // height: 30,
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'left',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                          {
                                                              margin: '0 0 0 5',
                                                              id: 'htmlFloatPanel_AyohaStore_Cart_SubTotal',
                                                              html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                          }
                                                        ]
                                                    },
                                               ]
                                           },

                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               height: 18,
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                   {
                                                       xtype: 'container',
                                                       width: '80%',
                                                       // height: 30,
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'right',
                                                           align: 'center'

                                                       },
                                                       items: [
                                                            {
                                                                html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">M.Point:</div>'
                                                            }
                                                       ]
                                                   },
                                                    {
                                                        xtype: 'container',
                                                        width: '20%',
                                                        // height: 30,
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'left',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                          {
                                                              margin: '0 0 0 5',
                                                              id: 'htmlFloatPanel_AyohaStore_Cart_Mpoint',
                                                              html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                          }
                                                        ]
                                                    },
                                               ]
                                           },
                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               height: 18,
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                   {
                                                       xtype: 'container',
                                                       width: '80%',
                                                       // height: 30,
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'right',
                                                           align: 'center'

                                                       },
                                                       items: [
                                                            {
                                                                html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Ayoha Point:</div>'
                                                            }
                                                       ]
                                                   },
                                                    {
                                                        xtype: 'container',
                                                        width: '20%',
                                                        // height: 30,
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'left',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                          {
                                                              margin: '0 0 0 5',
                                                              id: 'htmlFloatPanel_AyohaStore_Cart_Apoint',
                                                              html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                                          }
                                                        ]
                                                    },
                                               ]
                                           },
                                           //{
                                           //    xtype: 'container',
                                           //    width: '100%',
                                           //    height: 18,
                                           //    layout: {
                                           //        type: 'hbox',
                                           //        pack: 'center',
                                           //        align: 'center'

                                           //    },
                                           //    items: [

                                           //        {
                                           //            xtype: 'container',
                                           //            width: '80%',
                                           //            // height: 30,
                                           //            layout: {
                                           //                type: 'hbox',
                                           //                pack: 'right',
                                           //                align: 'center'

                                           //            },
                                           //            items: [
                                           //                 {
                                           //                     html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Status:</div>'
                                           //                 }
                                           //            ]
                                           //        },
                                           //         {
                                           //             xtype: 'container',
                                           //             width: '20%',
                                           //             // height: 30,
                                           //             layout: {
                                           //                 type: 'hbox',
                                           //                 pack: 'left',
                                           //                 align: 'center'

                                           //             },
                                           //             items: [
                                           //               {
                                           //                   margin: '0 0 0 5',
                                           //                   id: 'htmlFloatPanel_AyohaStore_Cart_Status',
                                           //                   html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">NEW</div>'
                                           //               }
                                           //             ]
                                           //         },
                                           //    ]
                                           //},
                                           //{
                                           //    xtype: 'container',
                                           //    width: '100%',
                                           //    margin:'-4 0 0 0',
                                           //    height: 8,
                                           //    layout: {
                                           //        type: 'hbox',
                                           //        pack: 'center',
                                           //        align: 'center'

                                           //    },
                                           //    items: [

                                           //        {
                                           //            xtype: 'container',
                                           //            width: '100%',
                                           //            // height: 30,
                                           //            layout: {
                                           //                type: 'hbox',
                                           //                pack: 'right',
                                           //                align: 'right'

                                           //            },
                                           //            items: [
                                           //                 {
                                           //                     html: '<div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">11-09-2021 02:09:10 AM</div>'
                                           //                 },
                                           //                 {
                                           //                     xtype: 'panel',
                                           //                     width:20
                                           //                 },
                                           //            ]
                                           //        },
                                                    
                                           //    ]
                                           //},
                                             //{
                                             //    xtype: 'container',
                                             //    width: '100%',
                                             //    margin: '1 0 0 0',
                                             //    height: 1,
                                             //    style: 'background-color:transparent;',
                                             //    layout: {
                                             //        type: 'vbox',
                                             //        pack: 'center',
                                             //        align: 'center'

                                             //    },
                                             //    items: [
                                             //         {
                                             //             xtype: 'container',
                                             //             width: '90%',
                                             //             margin: '5 0 0 0',
                                             //             height: 1,
                                             //             style: 'background-color:grey;',
                                             //         },
                                             //    ]
                                             //},

                                               {
                                                   margin: '6 0 0 14',
                                                   html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Instruction/Note To Seller</div>'
                                               },
                                        {
                                            margin: '5 0 0 14',
                                            id: 'htmlFloatPanel_AyohaStore_Cart_Note',
                                            width: '90%',
                                            height: 70,
                                            // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                                            html: '<textarea id="input-FloatPanel_AyohaStore_Cart_Note" style="width:100%;height:70px;padding: 0px 0px;box-sizing: border-box;border: 1px solid grey;border-radius: 4px;background-color: transparent;color:black;font-size: 12px;font-weight:bold" wrap="hard" placeHolder="Note" ></textarea>'
                                            // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                                        },

                                        

                                                ]
                                            },
                                            
                                       




                                        ]

                                    },
                              

                              
                              
                              


                              
                              




                                ]
                            },







              ],



          });

    return _FloatPanel_AyohaStore_Cart





}





function FloatPanel_AyohaStore_CartShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_Cart);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_Cart());
    this.overlay.show();
    AddRoutePages(_FloatPanel_AyohaStore_Cart, "isFloatPanel_AyohaStore_CartOpen");
    isFloatPanel_AyohaStore_CartOpen = 'Y';





  FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewOrder');






    var containerViewnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp = containerViewnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
      }
    );



    globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = "0";

}


function FloatPanel_AyohaStore_Cart_AyohaStoreCart_Insert(ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint) {

   
    //toastMsg("Add to cart...", "resources/icons/addtocart01.gif");

    LoadingPanelShow("resources/icons/addtocart01.gif", "Add to cart...")
   

    var task = Ext.create('Ext.util.DelayedTask', function () {

       
        var objn = {
            "ID": 0,
            "ItemCode": ItemCode,
            "ItemQuantity": Qty,
            "ItemSumPrice": SumPrice,
            "ItemCartStatus": "NewOrder",
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "LoyaltyRewardType": CampaignType,
            "MerchantSumPoint": TTlMerchantPoint.toFixed(2),
            "AyohaSumPoint": TTlAyohaPoint.toFixed(2),
            "MerchantSumStamp": MerchantSumStamp,
            "MerchantPoint": MerchantPoint,
            "AyohaPoint": AyohaPoint
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    FloatPanel_AyohaStore_SaleItemDetailHide();

                    FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore(FloatPanel_AyohaStore_getEnterpriseAccNo());
                    LoadingPanelHide();


                }
                else {

                    swalFireFail("Fail!");
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });
      
        Ext.Viewport.unmask();
    });
    task.delay(1000);


  
}



var globalFloatPanel_AyohaStore_Cart_TotalItemQuantity;
var globalFloatPanel_AyohaStore_Cart_TotalSumPrice;
var globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint;

function FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore(ItemCartStatus) {
    
   
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('ItemCartStatus', ItemCartStatus);
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStore');
    _DataStore_AyohaStoreCartLoadCartAyohaStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count =parseInt(_DataStore_AyohaStoreCartLoadCartAyohaStore.getCount());
        if (count <= 0) {
            return;
                    }

        var Store = _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(0);
        if (Store.get('TotalItemQuantity').length >= 6) {
            Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -7');
        }
        if (Store.get('TotalItemQuantity').length < 6) {
            Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -8');
        }
        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalItemQuantity') + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalSumPrice') + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Mpoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalMerchantPoint') + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Apoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalAyohaPoint') + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div class="blink_me" style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:purple;text-align:center;" >RM' + Store.get('TotalSumPrice') + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div class="blink_me" style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:white;text-align:center;" ><b>' + Store.get('TotalItemQuantity') + '</b></div>');

        globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = Store.get('TotalItemQuantity');
        globalFloatPanel_AyohaStore_Cart_TotalSumPrice = Store.get('TotalSumPrice');
        globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = Store.get('TotalMerchantPoint');


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}





function FloatPanel_AyohaStore_CartHide() {
    if (isFloatPanel_AyohaStore_CartOpen == 'Y')
    {
        _FloatPanel_AyohaStore_Cart.hide(); isFloatPanel_AyohaStore_CartOpen = 'N';
        RemovePages(_FloatPanel_AyohaStore_Cart, "isFloatPanel_AyohaStore_CartOpen");
    }
   
}



function FloatPanel_AyohaStore_Cart_Order_viaWhatsApp() {
    var val = parseInt(globalFloatPanel_AyohaStore_Cart_TotalItemQuantity);
    if (val <= 0) {
        swalFireWarning("No Cart Item.!")
        return;
    }


    var pn = FloatPanel_AyohaStore_getWhatsAppLink();
    var count = _DataStore_AyohaStoreCartLoadCartAyohaStore.getCount();
    var ItemName;
    var ItemQuantity;
    var ItemPrice;
    var strOrder;
    var Store;
    var orders;
    var orderss;
    var fullOrder;
    var OrderNote;
    for (i = 0; i < count; i++) {
        Store = _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(i);
        strOrder += Store.get('RowNumber') +")."+ Store.get('ItemName') + '%0a' + Store.get('ItemQuantity') + ' X (RM)' + Store.get('ItemPrice') + '%0a' + '*Total:' + Store.get('ItemSumPrice') + '*' + '%0a%0a'
       
        
    }
    var entName = FloatPanel_AyohaStore_getEnterpriseName();
    orderss = "Hi " + entName + "%0a%0a" + "Below is my order:%0a%0a";
    orders = strOrder.replace("undefined", "");

    var aa = document.getElementById("input-FloatPanel_AyohaStore_Cart_Note").value;

    if (aa) {
        OrderNote = aa;
    } else {
        OrderNote = 'No Note/Instructions';
    }
   

    fullOrder = orderss + orders + "%0aOrder Summary:%0a*Total Quantity:" + globalFloatPanel_AyohaStore_Cart_TotalItemQuantity + "*%0a*Grand Total:" + globalFloatPanel_AyohaStore_Cart_TotalSumPrice + "*%0a*Point Earn:" + globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint + "*%0a%0aOrder Notes:%0a*" + OrderNote + "*";
    

   // alert(orders);
    window.open("https://api.whatsapp.com/send?phone=" + pn + "&text=" + fullOrder);

    FloatPanel_AyohaStore_Cart_AyohaStoreCartUpdateStatusOrderSent();
    
}


function FloatPanel_AyohaStore_Cart_Delete(ID) {
    
   //toastMsg("Delete cart...", "resources/icons/addtocart02.gif");
    LoadingPanelShow("resources/icons/delete01.gif", "Delete cart...")

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "ID": ID,
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartDelete',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewOrder');
                    LoadingPanelHide();
                    // FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore(FloatPanel_AyohaStore_getEnterpriseAccNo());


                }
                else {

                    swalFireFail("Fail!" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();
            },

            failure: function (result, request) {
                swalFireFail("Fail!" + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });


        Ext.Viewport.unmask();
    });
    task.delay(1000);



}



function FloatPanel_AyohaStore_Cart_AyohaStoreCartUpdateStatusOrderSent() {

   // toastMsg("update cart...", "resources/icons/addtocart02.gif");
    //var task = Ext.create('Ext.util.DelayedTask', function () {



    //    Ext.Viewport.unmask();
    //});
    //task.delay(1500);


    var objn = {
        "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartUpdateStatusOrderSent',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireGeneralMessaging("Your order have been sent", "resources/icons/sendReceipt.png");
                Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeTextItem').setHtml('<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>');
                Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setStyle('border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;');
                Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -5');
                FloatPanel_AyohaStore_CartHide();

               

            }
            else {

                swalFireFail("Fail!" + result.responseText.trim());
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!" + result.responseText.trim());
            Ext.Viewport.unmask();
        }

    });
}

var AddToCart_ADD;
var AddToCart_MINUS;

function FloatPanel_AyohaStore_cart_AddToCart_ADD(ID, MerchantPoint, AyohaPoint, ItemPrice, CampaignType, ItemCode) {
  
    AddToCart_ADD =parseInt(document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value);
    AddToCart_ADD = AddToCart_ADD + 1;
    if (AddToCart_ADD <= 999) {      
        document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value = AddToCart_ADD;
       

      
        var MerchantSumStamp;
        var TTlMerchantPoint;
        var TTlAyohaPoint;
        var SumPrice;
        if (CampaignType == "Stamp Reward Loyalty Card") {
            TTlMerchantPoint = 0.00;
            TTlAyohaPoint = AddToCart_ADD * AyohaPoint;
            MerchantSumStamp = 1;
        }
        if (CampaignType == "Point Reward Loyalty Card") {
            TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
            TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
            MerchantSumStamp = 0;
        }
        SumPrice = ItemPrice * AddToCart_ADD;
        //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID, ItemCode, AddToCart_ADD, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint);
       
    }
    

}


function FloatPanel_AyohaStore_cart_AddToCart_MINUS(ID, MerchantPoint, AyohaPoint, ItemPrice, CampaignType, ItemCode) {
  
    AddToCart_MINUS = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value);
    AddToCart_MINUS = AddToCart_MINUS - 1;
    if (AddToCart_MINUS >= 1) {      
        document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value = AddToCart_MINUS;


        var MerchantSumStamp;
        var TTlMerchantPoint;
        var TTlAyohaPoint;
        var SumPrice;
        if (CampaignType == "Stamp Reward Loyalty Card") {
            TTlMerchantPoint = 0.00;
            TTlAyohaPoint = AddToCart_MINUS * AyohaPoint;
            MerchantSumStamp = 1;
        }
        if (CampaignType == "Point Reward Loyalty Card") {
            TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
            TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
            MerchantSumStamp = 0;
        }
        SumPrice = ItemPrice * AddToCart_MINUS;
        //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID, ItemCode, AddToCart_MINUS, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint);
      
    }
  
}





function FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID,ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint) {


  // toastMsg("Update Cart...", "resources/icons/addtocart01.gif");
    LoadingPanelShow("resources/icons/addtocart01.gif", "Update Cart...")
   
    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {
            "ID": ID,
            "ItemCode": ItemCode,
            "ItemQuantity": Qty,
            "ItemSumPrice": SumPrice,
            "ItemCartStatus": "NewOrder",
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "LoyaltyRewardType": CampaignType,
            "MerchantSumPoint": TTlMerchantPoint.toFixed(2),
            "AyohaSumPoint": TTlAyohaPoint.toFixed(2),
            "MerchantSumStamp": MerchantSumStamp,
            "MerchantPoint": MerchantPoint,
            "AyohaPoint": AyohaPoint
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {


                    FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewOrder');
                    LoadingPanelHide();

                }
                else {

                    swalFireFail("Fail!");
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);


}
