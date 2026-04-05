Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderRespond', {

});

var _FloatPanel_AyohaStore_OrderRespond;


var isFloatPanel_AyohaStore_OrderRespondOpen = 'N';











function FloatPanel_AyohaStore_OrderRespond() {

    _FloatPanel_AyohaStore_OrderRespond =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: 360,
         width: 460,
         id: 'LoadingFloatPanel_AyohaStore_OrderRespondID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 250,
         modal: true,
         //  hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px solid;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaStore_OrderRespond.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_OrderRespond.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaStore_OrderRespondOpen = 'N';
                         RemovePages("FloatPanel_AyohaStore_OrderRespondHide()");
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 height: 35,
                 docked: 'top',
                 // width: 40,
                 style: ' background-color: white;',
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                 //hidden: true,

                 id: 'containerFloatPanel_AyohaStore_OrderRespondHeader',
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
                        [ {
                            xtype: 'spacer',
width:20
                        },

                            {
                                margin: '0 0 0 0',
                                html: '<font size=4 color=black><b>Order Respond Option</b></font>'
                            },
                                      
                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_AyohaStore_OrderRespondBack',
                                        height: 30,
                                        width: 35,
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            RemovePages("FloatPanel_AyohaStore_OrderRespondHide()");
                                            _FloatPanel_AyohaStore_OrderRespond.hide(Ext.fx.Animation({
                                                type: 'popOut',
                                                //direction: 'left',
                                                //easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));
                                            isFloatPanel_AyohaStore_OrderRespondOpen = 'N';
                                           

                                        }
                                    },
                                      
                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_AyohaStore_OrderRespondIcon',
                                               height: 30,
                                               width: 35,
                                               hidden: true,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/filterMerchantWhite.png" width="25" height="20" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {
                                                   RemovePages("FloatPanel_AyohaStore_OrderRespondHide()");
                                                   _FloatPanel_AyohaStore_OrderRespond.hide(Ext.fx.Animation({
                                                       type: 'slideOut',
                                                       direction: 'right',
                                                       easing: 'cubic-bezier(.7,0,.7,1)',
                                                       duration: 250

                                                   }));
                                                   isFloatPanel_AyohaStore_OrderRespondOpen = 'N';
                                                   FloatPanel_RewardStoreHide();
                                                   //  FloatPanel_RewardStoreHide();

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
                     height: 600,
                     id: 'containerFloatPanel_AyohaStore_OrderRespondMaster',
                     margin: '0 0 0 0',
                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: white;border-radius: 40px 40px 40px 40px;',
                     //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                     layout: {
                         type: 'vbox',
                         pack: 'start',
                         align: 'center'
                     },
                     scrollable: {
                         direction: 'vertical',
                         directionLock: true,
                         indicators: false
                     },
                     items: [



     

                         {

                             xtype: 'container',
                             width: '95%',
                             height: 50,
                             margin: '10 0 0 0',
                             id: 'ContainerFloatPanel_AyohaStore_OrderRespond_OrderConfirmed',
                             name: 'nameContainerFloatPanel_AyohaStore_OrderRespond_ReceivedAndConfirm',
                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                             style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;',
                             //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                             layout: {
                                 type: 'hbox',
                                 pack: 'center',
                                 align: 'center'
                             },
                             items: [
                                 {
                                     xtype: 'spacer',
                                     width: 20
                                 },
                                 {
                                     height: 28,
                                     width: 28,
                                     html: '<img src="resources/icons/orderReceived.jpg" alt="Image" style="width:28px;height:28px;">',
                                 },
                                 {
                                     xtype: 'spacer',
                                     width: 10
                                 },
                                 {
                                     id: 'FloatPanel_AyohaStore_OrderRespond_Menu_ReceivedAndConfirm',
                                     margin: '5 0 0 0',
                                     height: 20,
                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Confirmed Order</div>'
                                 },
                                  {
                                      xtype: 'spacer'
                                  },
                                 {
                                     id: 'FloatPanel_AyohaStore_OrderRespond_Menu_ReceivedAndConfirmSign',
                                     margin: '0 0 0 0',
                                     height: 20,
                                     hidden: true,
                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                 },
                             {
                                 xtype: 'spacer',
                                 width: 20
                             },
                             ]

                         },
                         {

                             xtype: 'container',
                             width: '95%',
                             height: 50,
                             margin: '10 0 0 0',
                             id: 'ContainerFloatPanel_AyohaStore_OrderRespond_OrderPost',
                             name: 'nameContainerFloatPanel_AyohaStore_OrderRespond_OrderPost',
                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                             style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                             //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                             layout: {
                                 type: 'hbox',
                                 pack: 'center',
                                 align: 'center'
                             },
                             items: [
                                 {
                                     xtype: 'spacer',
                                     width: 20
                                 },
                                 {
                                     height: 28,
                                     width: 28,
                                     html: '<img src="resources/icons/orderPost.jpg" alt="Image" style="width:28px;height:28px;">',
                                 },
                                 {
                                     xtype: 'spacer',
                                     width: 10
                                 },
                                 {
                                     id: 'FloatPanel_AyohaStore_OrderRespond_Menu_OrderPost',
                                     margin: '5 0 0 0',
                                     height: 20,
                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Sent Out Order</div>'
                                 },
                                  {
                                      xtype: 'spacer'
                                  },
                                 {
                                     id: 'FloatPanel_AyohaStore_OrderRespond_Menu_OrderPostSign',
                                     margin: '0 0 0 0',
                                     height: 20,
                                     hidden: true,
                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                 },
                             {
                                 xtype: 'spacer',
                                 width: 20
                             },
                             ]

                         },
                         {

                             xtype: 'container',
                             width: '95%',
                             height: 50,
                             margin: '10 0 0 0',
                             id: 'ContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted',
                             name: 'nameContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted',
                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                             style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                             //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                             layout: {
                                 type: 'hbox',
                                 pack: 'center',
                                 align: 'center'
                             },
                             items: [
                                 {
                                     xtype: 'spacer',
                                     width: 20
                                 },
                                 {
                                     height: 28,
                                     width: 28,
                                     html: '<img src="resources/icons/OrderComplete.jpg" alt="Image" style="width:28px;height:28px;">',
                                 },
                                 {
                                     xtype: 'spacer',
                                     width: 10
                                 },
                                 {
                                     id: 'FloatPanel_AyohaStore_OrderRespond_Menu_OrderCompleted',
                                     margin: '5 0 0 0',
                                     height: 20,
                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Order Completed</div>'
                                 },
                                  {
                                      xtype: 'spacer'
                                  },
                                 {
                                     id: 'FloatPanel_AyohaStore_OrderRespond_Menu_OrderCompletedSign',
                                     margin: '0 0 0 0',
                                     height: 20,
                                     hidden: true,
                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                 },
                             {
                                 xtype: 'spacer',
                                 width: 20
                             },
                             ]

                         },
                         {

                             xtype: 'container',
                             width: '95%',
                             height: 50,
                             margin: '10 0 0 0',
                             name: 'nameContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected',
                             id: 'ContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected',
                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                             style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                             //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                             layout: {
                                 type: 'hbox',
                                 pack: 'center',
                                 align: 'center'
                             },
                             items: [
                                 {
                                     xtype: 'spacer',
                                     width: 20
                                 },
                                 {
                                     height: 28,
                                     width: 28,
                                     html: '<img src="resources/icons/orderReject.jpg" alt="Image" style="width:28px;height:28px;">',
                                 },
                                 {
                                     xtype: 'spacer',
                                     width: 10
                                 },
                                 {
                                     id: 'FloatPanel_AyohaStore_OrderRespond_Menu_OrderRejected',
                                     margin: '5 0 0 0',
                                     height: 20,
                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Reject Order</div>'
                                 },
                                  {
                                      xtype: 'spacer'
                                  },
                                 {
                                     id: 'FloatPanel_AyohaStore_OrderRespond_Menu_OrderRejectedSign',
                                     margin: '0 0 0 0',
                                     hidden: true,
                                     height: 20,
                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                 },
                             {
                                 xtype: 'spacer',
                                 width: 20
                             },
                             ]

                         },
                            
                            
                                {

                                    xtype: 'container',
                                    width: '95%',
                                    height: 50,
                                    margin: '10 0 0 0',
                                    name: 'nameContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded',
                                    id: 'ContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded',
                                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;',
                                    //style: 'background-color:red;border-radius: 10px 10px 10px 10px;',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center'
                                    },
                                    items: [
                                        {
                                            xtype: 'spacer',
                                            width: 20
                                        },
                                        {
                                            height: 28,
                                            width: 28,
                                            html: '<img src="resources/icons/orderRefund.jpg" alt="Image" style="width:28px;height:28px;">',
                                        },
                                        {
                                            xtype: 'spacer',
                                            width: 10
                                        },
                                        {
                                            id: 'FloatPanel_AyohaStore_OrderRespond_Menu_OrderRefunded',
                                            margin: '5 0 0 0',
                                            height: 20,
                                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:normal;color:black;height:20px">Refund Order</div>'
                                        },
                                         {
                                             xtype: 'spacer'
                                         },
                                        {
                                            id: 'FloatPanel_AyohaStore_OrderRespond_Menu_OrderRefundedSign',
                                            margin: '0 0 0 0',
                                            hidden: true,
                                            height: 20,
                                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 22px;font-weight:normal;color:black;height:20px">></div>'
                                        },
                                    {
                                        xtype: 'spacer',
                                        width: 20
                                    },
                                    ]

                                },
                             
                       

                     ]

                 }
         ]







     });
    return _FloatPanel_AyohaStore_OrderRespond;





}

function FloatPanel_AyohaStore_OrderRespondShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderRespond);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderRespond());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_OrderRespondHide()");
    isFloatPanel_AyohaStore_OrderRespondOpen = 'Y';
  
   




    var containerViewnnameContainerFloatPanel_AyohaStore_OrderRespond_ReceivedAndConfirm = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaStore_OrderRespond_ReceivedAndConfirm]')[0];
    var containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_ReceivedAndConfirm = containerViewnnameContainerFloatPanel_AyohaStore_OrderRespond_ReceivedAndConfirm.element;
    containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_ReceivedAndConfirm.on('tap',
               function (event, node, options, eOpts) {
                   FloatPanel_AyohaStore_OrderRespond_ConfirmNotification(1, " <b>To Process and Confirmed This Order?</b>", "orderReceived.jpg","Order_Confirmed");
               }
             );


    var containerViewnameContainerFloatPanel_AyohaStore_OrderRespond_OrderPost = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaStore_OrderRespond_OrderPost]')[0];
    var containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_OrderPost = containerViewnameContainerFloatPanel_AyohaStore_OrderRespond_OrderPost.element;
    containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_OrderPost.on('tap',
               function (event, node, options, eOpts) {
                   FloatPanel_AyohaStore_OrderRespond_ConfirmNotification(1, " <b>This order has been post/send out to client?</b>", "orderPost.jpg", "Order_Sent");
               }
             );


    var containerViewnameContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted]')[0];
    var containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted = containerViewnameContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted.element;
    containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted.on('tap',
               function (event, node, options, eOpts) {
                   FloatPanel_AyohaStore_OrderRespond_ConfirmNotification(1, " <b>This order has been completed?</b>", "OrderComplete.jpg", "Order_Completed");
               }
             );



    var containerViewnameContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected]')[0];
    var containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected = containerViewnameContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected.element;
    containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected.on('tap',
               function (event, node, options, eOpts) {
                   FloatPanel_AyohaStore_OrderRespond_ConfirmNotification(1, " <b>To Reject this order?</b>", "orderReject.jpg","Order_Rejected");
               }
             );




    var containerViewnameContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded]')[0];
    var containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded = containerViewnameContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded.element;
    containerViewElnameContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded.on('tap',
               function (event, node, options, eOpts) {
                   FloatPanel_AyohaStore_OrderRespond_ConfirmNotification(1, " <b>To Refund this order?</b>", "OrderRefund.jpg", "Order_Refunded");
               }
             );
  
//alert(globalFloatPanel_AyohaStore_CheckOut_InvoiceStatus)

  
    // if (globalFloatPanel_AyohaStore_CheckOut_InvoiceStatus == "OrderUnPaid") {
    //     Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderPost').setHidden(true);
    //     Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted').setHidden(true);
    //     Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded').setHidden(true);

    //     if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Cancel") {
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderConfirmed').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderPost').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected').setHidden(false);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded').setHidden(true);
    //     }
       
    //     return;
       
    // } else {
    //     if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Confirmed") {
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderConfirmed').setHidden(true);
    //     }
    //     if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Sent") {
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderConfirmed').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderPost').setHidden(true);
    //     }
    //     if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Completed") {
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderConfirmed').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderPost').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted').setHidden(true);
    //     }
    //     if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Rejected") {
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderConfirmed').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderPost').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected').setHidden(true);
    //     }
    //     if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Refunded") {
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderConfirmed').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderPost').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded').setHidden(true);
    //     }
    //     if (globalFloatPanel_AyohaStore_CheckOut_OrderStatus == "Order_Cancel") {
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderConfirmed').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderPost').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderCompleted').setHidden(true);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderRejected').setHidden(false);
    //         Ext.getCmp('ContainerFloatPanel_AyohaStore_OrderRespond_OrderRefunded').setHidden(true);
    //     }
    // }
}


function FloatPanel_AyohaStore_OrderRespondHide() {
    if (isFloatPanel_AyohaStore_OrderRespondOpen == 'Y') {
        _FloatPanel_AyohaStore_OrderRespond.hide(); isFloatPanel_AyohaStore_OrderRespondOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_OrderRespondHide()");
        //  FloatPanel_RewardStoreHide();
    }

}





var globalFloatPanel_AyohaStore_OrderRespond_OrderStatus;

function FloatPanel_AyohaStore_OrderRespond_ConfirmNotification(ID,OrderOption,Icon,OrderStatus) {

//alert(OrderStatus)
globalFloatPanel_AyohaStore_OrderRespond_OrderStatus=OrderStatus;
    if(OrderStatus=="Order_Refunded"){
    Swal.fire({
        title: 'Are you sure To Refund?',
        text: "if you proceed to refund this order, an amount of RM "+globalFloatPanel_AyohaStore_CheckOut_GrandTotal+" will be deducted from your eWallet and credited to the customer.",
        icon: 'warning',
        imageUrl: "resources/icons/"+Icon,
        imageWidth: 150,
        imageHeight: 150,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "OrderNo": globalFloatPanel_AyohaStore_CheckOut_OrderNo,
                "SubscriberAccNo": GetCurrentUserAccountNo(),
                "OrderStatus": OrderStatus,
                "OrderLogOrderStatus": OrderStatus,
                "EnterpriseAccNo": GetEnterpriseAccNo()

            };
          //  console.log(objn);
            var _value = Ext.Ajax.request({
                type: "POST",
                url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderOrderRespondOptionMerchant',
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                      
                        FloatPanel_AyohaStore_OrderRespondHide();
                        FloatPanel_AyohaStore_CheckOutHide();
                       // FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant_AfterUpdateOrder(OrderStatus);
                       //if(OrderStatus=="Order_Refunded"){
                        FloatPanel_AyohaStore_OrderRespond_Refunded_Transfer_TransferNow(globalFloatPanel_AyohaStore_CheckOut_OrderNo);
                      
                        //}
                    }
                    else {
                        swalFireFail("Update Failed!" + result.responseText.trim());
                    }

                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {

                    Ext.Viewport.unmask();
                    swalFireFail(" Failed!" + result.responseText.trim());
                }

            });
        }
    });
    }else{

        Swal.fire({
            html: 'Are sure ' + OrderOption,
            //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
            //icon: 'warning',
            //showCancelButton: true,
            //confirmButtonColor: '#3085d6',
            //cancelButtonColor: '#d33',
            imageUrl: "resources/icons/"+Icon,
            imageWidth: 150,
            imageHeight: 150,
            showCloseButton: true,
            showCancelButton: false,
            //  confirmButtonColor: '#3085d6',
            confirmButtonColor: '#9932cc',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then(function (result) {
            if (result.isConfirmed) {
                var objn = {
                    "OrderNo": globalFloatPanel_AyohaStore_CheckOut_OrderNo,
                    "SubscriberAccNo": GetCurrentUserAccountNo(),
                    "OrderStatus": OrderStatus,
                    "OrderLogOrderStatus": OrderStatus,
                    "EnterpriseAccNo": GetEnterpriseAccNo()
    
                };
              //  console.log(objn);
                var _value = Ext.Ajax.request({
                    type: "POST",
                    url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderOrderRespondOptionMerchant',
                    dataType: "json",
                    data: JSON.stringify(objn),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },
    
                    success: function (result, request) {
    
                        //console.log(result.responseText);
    
    
                        data = Ext.decode(result.responseText.trim());
    
                        if (data.success == "true") {
                          
                            FloatPanel_AyohaStore_OrderRespondHide();
                            FloatPanel_AyohaStore_CheckOutHide();
                            FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant('NA','Enterprise');
                            ReloadDashboard_LoadMembershipsLatestActivity();
                            // if(OrderStatus=="Order_Confirmed"){
                            //     FloatPanel_AyohaStore_OrderHistory_OrderRecConfirmTitle_Active();
                            //   }
                            //   if(OrderStatus=="Order_Sent"){
                            //     FloatPanel_AyohaStore_OrderHistory_OrderSent_Active();
                            //   }
                            //   if(OrderStatus=="Order_Completed"){
                            //     FloatPanel_AyohaStore_OrderHistory_OrderCompletedTitle_Active();
                            //   }
                            //   if(OrderStatus=="Order_Rejected"){
                            //     FloatPanel_AyohaStore_OrderHistory_OrderRejectedTitle_Active()
                            //   }
                            
                        }
                        else {
                            swalFireFail("Update Failed!" + result.responseText.trim());
                        }
    
                        Ext.Viewport.unmask();
    
                    },
    
                    failure: function (result, request) {
    
                        Ext.Viewport.unmask();
                        swalFireFail("Failed!" + result.responseText.trim());
                    }
    
                });
            }
        });


    }



   


  


}




function FloatPanel_AyohaStore_OrderRespond_Refunded_Transfer_TransferNow(globalFloatPanel_AyohaStore_CheckOut_OrderNo) {
    
    // var TransferNote = "Refund OrderNo:" +globalFloatPanel_AyohaStore_CheckOut_OrderNo;
    // var TransactionAmount_Credits = parseFloat(document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_AmountTransfer').value);
    // if (TransferNote) {
    //     TransferNote = TransferNote;
    // } else {
    //     TransferNote = "NA";
    // }
    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Refund to eWallet..");
    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {
            "eWalletAccNo_Credit": globalFloatPanel_AyohaStore_CheckOut_SubscriberAccNo,
            "TransactionType_Credit": "eWallet_AppTransferCredit",
            "TransactionAmount_Credit": globalFloatPanel_AyohaStore_CheckOut_GrandTotal,
            "TransactionReferenceNo_Credit": "TransactionReferenceNo_Credit",
            "TransactionStatus_Credit": "Success",
            "TransactionNote_Credit":  "Refund OrderNo:" +globalFloatPanel_AyohaStore_CheckOut_OrderNo,
            "CreditDebitType_Credit": "Credit",
            "CustomerAccNo_Credit": GetEnterpriseAccNo(),
            "Email_Credit": globalFloatPanel_AyohaStore_CheckOut_ClientEmail,
            "eWalletAccNo_Debit": GetEnterpriseAccNo(),
            "TransactionType_Debit": "eWallet_AppTransferDebit",
            "TransactionAmount_Debit":globalFloatPanel_AyohaStore_CheckOut_GrandTotal,
            "TransactionReferenceNo_Debit": "TransactionReferenceNo_Debit",
            "TransactionStatus_Debit": "Success",
            "TransactionNote_Debit": "Refund OrderNo:" +globalFloatPanel_AyohaStore_CheckOut_OrderNo,
            "CreditDebitType_Debit": "Debit",
            "CustomerAccNo_Debit": globalFloatPanel_AyohaStore_CheckOut_SubscriberAccNo,
            "Email_Debit": globalLogin_EnterpriseEmail,
            "PlayerID_Credit": globalFloatPanel_AyohaStore_CheckOut_PlayerID,
            "AyohaeWalletTransactionTransactionType":"Client",
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionInsertTransferEwallet',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);

                
                data = Ext.decode(result.responseText.trim());
               
                if (data.success == "true") {
                   // FloatPanel_AyohaeWallet_TransferHide();
                    Dashboard_LoadAyohaEwallet();
                   
                    swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "Ayoha eWallet Amount <b>RM" + globalFloatPanel_AyohaStore_CheckOut_GrandTotal + "</b> has been refunded to  <b>" + globalFloatPanel_AyohaStore_CheckOut_ClientName + "</b> successfully!", "black", "#9932cc");
                   
                   // FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();
                  
                    LoadingPanelHide();
                    FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant('NA','Enterprise');
                    ReloadDashboard_LoadMembershipsLatestActivity();
                    return
                    //var task = Ext.create('Ext.util.DelayedTask', function () {
                    //FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                    //});
                    //task.delay(1000);
                }
                if (data.success == "false-Email") {
                    FloatPanel_AyohaeWallet_TransferHide();
                    Dashboard_LoadAyohaEwallet();

                  //  swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "eWallet Transfer has been process successfully-Notification Email Failed!", "black", "#9932cc");
                    swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "Ayoha eWallet Amount <b>RM" + globalFloatPanel_AyohaStore_CheckOut_GrandTotal + "</b> has been refunded to  <b>" + globalFloatPanel_AyohaStore_CheckOut_ClientName + "</b> successfully!-->BUT,Notification Email Failed!", "black", "#9932cc");
                   
                   // FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();
                  // DashboardMerchantMainStore();
                  ReloadDashboard_LoadMembershipsLatestActivity();
                    LoadingPanelHide();
                    return
                    //var task = Ext.create('Ext.util.DelayedTask', function () {
                    //FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                    //});
                    //task.delay(1000);
                }
                else {

                    swalFireFail("Fail Transfer!--->" + data.success);
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail Transfer !!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}