Ext.define('ianMizi.view.Master.FloatPanel_MessagingOption', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_MessagingOption;


var isFloatPanel_MessagingOptionOpen = 'N';





function FloatPanel_MessagingOption() {

    _FloatPanel_MessagingOption =
     Ext.create('Ext.Panel', {
         zIndex: 60,
         xtype: 'container',
         // height: '50%',
         width: 360,
         height: 360,
         //width: 280,
         id: 'LoadingFloatPanel_MessagingOptionID',
         draggable: false,
     

         centered: true,
         //bottom: 64,         
         modal: true,
         hideOnMaskTap: false,
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
             duration: 250,
             easing: 'ease-out'
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_MessagingOption.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_MessagingOptionOpen = 'N';
                             RemovePages("FloatPanel_MessagingOptionHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_MessagingOption.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_MessagingOptionOpen = 'N';
                             RemovePages("FloatPanel_MessagingOptionHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [








            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_MessagingOptionBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },
                items: [

                         {

                             xtype: 'container',
                             width: '100%',
                             docked: 'top',
                             height: 40,
                            // style: ' background-color:transparent;',
                             style: 'border-bottom:1px grey solid;background-color:transparent;',
                             //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                             //hidden: true,

                             id: 'containerFloatPanel_MessagingOptionHeader',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'transparent',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left',
                             },
                             // hidden:true,
                             items:
                                    [
                                        {
                                            margin: '10 0 0 10',
                                            id: 'htmlFloatPanel_MessagingOption_TitleHeaderTxt',
                                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Message Platform Option</div>',

                                        },


                                                  

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                  
                                                  {
                                                    xtype: 'button',
                                                    id: 'btnFloatPanel_MessagingOptionBack',
                                                     margin: '10 10 0 0',
                                                    height: 30,
                                                    width: 35,
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {

                                                        _FloatPanel_MessagingOption.hide(Ext.fx.Animation({
                                                            type: 'popOut',
             duration: 250,
             easing: 'ease-out'

                                                        }));
                                                        isFloatPanel_MessagingOptionOpen = 'N';
                                                        RemovePages("FloatPanel_MessagingOptionHide()");

                                                    }
                                                },












                                    ]

                         },



                         {
                             xtype: 'container',
                             width: '100%',
                             margin: '10 0 0 0',
                             //height: 300,
                             height: '95%',
                             style: 'background-color:white',                            
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'center',
                             },
                             scrollable: {
                                 direction: 'vertical',
                                 indicators: false,
                             },
                             items: [

                                 {

                                     xtype: 'container',
                                     width: '99%',
                                     height: 60,
                                     //margin: '10 0 0 0',
                                     // zIndex:200,
                                     id: 'containerFloatPanel_MessagingOption_AyohaeWallet',
                                     name: 'containerViewnamerFloatPanel_MessagingOption_AyohaeWallet',
                                     //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                     style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                     layout: {
                                         type: 'hbox',
                                         pack: 'center',
                                         align: 'center'
                                     },
                                     items: [


                                         {
                                             xtype: 'container',
                                             id: 'containerFloatPanel_MessagingOption_AyohaeWallet_tap',
                                             width: 10,
                                             height: 56,
                                             margin: '-1 0 0 0',
                                             // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                             style: 'background-color:transparent;',
                                         },
                                          {
                                              xtype: 'spacer',
                                              width: 10
                                          },


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 40,
                                              margin: '4 0 0 0',
                                              id: 'containerFloatPanel_MessagingOption_AyohaeWalletinner',
                                              name: 'nameFloatPanel_MessagingOption_AyohaeWalletinner',
                                              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                              // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                              style: 'background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'center',
                                                  align: 'center'
                                              },
                                              items: [

                                                   {
                                                       //height: 28,
                                                       //width: 28,
                                                       id: 'htmlFloatPanel_MessagingOption_AyohaeWallet_Image',
                                                       //badgeText: "2",
                                                       html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;cursor: pointer;" ><img src="resources/icons/unreadNotification.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                                   },
                                         {
                                             xtype: 'spacer',
                                             width: 10
                                         },
                                          {
                                              //height: 28,
                                              //width: 28,
                                              id: 'htmlFloatPanel_MessagingOption_AyohaeWallet_Name',
                                              //badgeText: "2",
                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px;cursor: pointer;">Push Notification</div>',
                                          },

                                          {
                                              xtype: 'spacer'
                                          },
                                         {
                                             id: 'htmlFloatPanel_MessagingOption_AyohaeWallet_arrow',
                                             margin: '0 0 0 0',
                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;cursor: pointer;" >></div>',
                                             //  height: 20,
                                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                         },
                                         {
                                             id: 'htmlFloatPanel_MessagingOption_AyohaeWallet_Spacer',
                                             xtype: 'spacer',
                                             width: 13
                                         },

                                              ]
                                          },


                                     ]

                                 },


                                 {

                                    xtype: 'container',
                                    width: '99%',
                                    height: 60,
                                    //margin: '10 0 0 0',
                                    // zIndex:200,
                                    id: 'containerFloatPanel_MessagingOption_WhatsApp',
                                    name: 'containerViewnamerFloatPanel_MessagingOption_WhatsApp',
                                    //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                    style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center'
                                    },
                                    items: [


                                        {
                                            xtype: 'container',
                                            id: 'containerFloatPanel_MessagingOption_WhatsApp_tap',
                                            width: 10,
                                            height: 56,
                                            margin: '-1 0 0 0',
                                            // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                            style: 'background-color:transparent;',
                                        },
                                         {
                                             xtype: 'spacer',
                                             width: 10
                                         },


                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             height: 40,
                                             margin: '4 0 0 0',
                                             id: 'containerFloatPanel_MessagingOption_WhatsAppinner',
                                             name: 'nameFloatPanel_MessagingOption_WhatsAppinner',
                                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                             // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                             style: 'background-color:transparent',
                                             layout: {
                                                 type: 'hbox',
                                                 pack: 'center',
                                                 align: 'center'
                                             },
                                             items: [

                                                  {
                                                      //height: 28,
                                                      //width: 28,
                                                      id: 'htmlFloatPanel_MessagingOption_WhatsApp_Image',
                                                      //badgeText: "2",
                                                      html: '<div style="cursor: pointer;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/WhatsAppIcon01.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                                  },
                                        {
                                            xtype: 'spacer',
                                            width: 10
                                        },
                                         {
                                             //height: 28,
                                             //width: 28,
                                             id: 'htmlFloatPanel_MessagingOption_WhatsApp_Name',
                                             //badgeText: "2",
                                             html: '<div style="cursor: pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">WhatsApp</div>',
                                         },

                                         {
                                             xtype: 'spacer'
                                         },
                                        {
                                            id: 'htmlFloatPanel_MessagingOption_WhatsApp_arrow',
                                            margin: '0 0 0 0',
                                            html: '<div style="cursor: pointer;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                            //  height: 20,
                                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                        },
                                        {
                                            id: 'htmlFloatPanel_MessagingOption_WhatsApp_Spacer',
                                            xtype: 'spacer',
                                            width: 13
                                        },

                                             ]
                                         },


                                    ]

                                },

                                 {

                                     xtype: 'container',
                                     width: '99%',
                                     height: 60,
                                     //margin: '10 0 0 0',
                                     id: 'containerFloatPanel_MessagingOption_OnlineBanking',
                                     name: 'containerViewnamecontainerFloatPanel_MessagingOption_OnlineBanking',
                                     style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                     layout: {
                                         type: 'hbox',
                                         pack: 'center',
                                         align: 'center'
                                     },
                                     items: [


                                         {
                                             xtype: 'container',
                                             id: 'containerFloatPanel_MessagingOption_OnlineBanking_tap',
                                             width: 10,
                                             height: 56,
                                             margin: '-1 0 0 0',
                                             // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                             style: 'background-color:transparent;',
                                         },
                                          {
                                              xtype: 'spacer',
                                              width: 10
                                          },


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 40,
                                              margin: '4 0 0 0',
                                              id: 'containerFloatPanel_MessagingOption_OnlineBanking_inner',
                                              name: 'nameFloatPanel_MessagingOption_OnlineBanking_inner',
                                              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                              // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                              style: 'background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'center',
                                                  align: 'center'
                                              },
                                              items: [

                                                   {
                                                       //height: 28,
                                                       //width: 28,
                                                       id: 'htmlFloatPanel_MessagingOption_OnlineBanking_Image',
                                                       //badgeText: "2",
                                                       html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/disable_sms.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                                   },
                                         {
                                             xtype: 'spacer',
                                             width: 10
                                         },
                                          {
                                              //height: 28,
                                              //width: 28,
                                              id: 'htmlFloatPanel_MessagingOption_OnlineBanking_Name',
                                              //badgeText: "2",
                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">SMS (Comming Soon)</div>',
                                          },

                                          {
                                              xtype: 'spacer'
                                          },
                                         {
                                             id: 'htmlFloatPanel_MessagingOption_OnlineBanking_arrow',
                                             margin: '0 0 0 0',
                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                             //  height: 20,
                                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                         },
                                         {
                                             id: 'htmlFloatPanel_MessagingOption_OnlineBanking_Spacer',
                                             xtype: 'spacer',
                                             width: 13
                                         },

                                              ]
                                          },


                                     ]

                                 },
                             




                            //  {

                            //      xtype: 'container',
                            //      width: '90%',
                            //      height: 60,
                            //      //hidden:true,
                            //      //margin: '10 0 0 0',
                            //      id: 'containerFloatPanel_MessagingOption_CDM',
                            //      name: 'containerViewnamecontainerFloatPanel_MessagingOption_CDM',
                            //      style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                            //      layout: {
                            //          type: 'hbox',
                            //          pack: 'center',
                            //          align: 'center'
                            //      },
                            //      items: [


                            //          {
                            //              xtype: 'container',
                            //              id: 'containerFloatPanel_MessagingOption_CDM_tap',
                            //              width: 10,
                            //              height: 56,
                            //              margin: '-1 0 0 0',
                            //              // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                            //              style: 'background-color:transparent;',
                            //          },
                            //           {
                            //               xtype: 'spacer',
                            //               width: 10
                            //           },


                            //           {
                            //               xtype: 'container',
                            //               width: '100%',
                            //               height: 40,
                            //               margin: '4 0 0 0',
                            //               id: 'containerFloatPanel_MessagingOption_CDM_inner',
                            //               name: 'nameFloatPanel_MessagingOption_CDM_inner',
                            //               //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                            //               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                            //               style: 'background-color:transparent',
                            //               layout: {
                            //                   type: 'hbox',
                            //                   pack: 'center',
                            //                   align: 'center'
                            //               },
                            //               items: [

                            //                    {
                            //                        //height: 28,
                            //                        //width: 28,
                            //                        id: 'htmlFloatPanel_MessagingOption_CDM_Image',
                            //                        //badgeText: "2",
                            //                        html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/banktransfer.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                            //                    },
                            //          {
                            //              xtype: 'spacer',
                            //              width: 10
                            //          },
                            //           {
                            //               //height: 28,
                            //               //width: 28,
                            //               id: 'htmlFloatPanel_MessagingOption_CDM_Name',
                            //               //badgeText: "2",
                            //               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">Manual(CDM)/Online Bank Transfer-(NA)</div>',
                            //           },

                            //           {
                            //               xtype: 'spacer'
                            //           },
                            //          {
                            //              id: 'htmlFloatPanel_MessagingOption_CDM_arrow',
                            //              margin: '0 0 0 0',
                            //              html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                            //              //  height: 20,
                            //              //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                            //          },
                            //          {
                            //              id: 'htmlFloatPanel_MessagingOption_CDM_Spacer',
                            //              xtype: 'spacer',
                            //              width: 33
                            //          },

                            //               ]
                            //           },


                            //      ]

                            //  },


                             {

                                 xtype: 'container',
                                 width: '99%',
                                 height: 60,
                                 //margin: '10 0 0 0',
                                 id: 'containerFloatPanel_MessagingOption_COD',
                                 name: 'containerViewnamecontainerFloatPanel_MessagingOption_COD',
                                 style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'
                                 },
                                 items: [


                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MessagingOption_Email_tap',
                                         width: 10,
                                         height: 56,
                                         margin: '-1 0 0 0',
                                         // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                         style: 'background-color:transparent;',
                                     },
                                      {
                                          xtype: 'spacer',
                                          width: 10
                                      },


                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height: 40,
                                          margin: '4 0 0 0',
                                          id: 'containerFloatPanel_MessagingOption_Email_inner',
                                          name: 'nameFloatPanel_MessagingOption_Email_inner',
                                          //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                          // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center'
                                          },
                                          items: [

                                               {
                                                   //height: 28,
                                                   //width: 28,
                                                   id: 'htmlFloatPanel_MessagingOption_Email_Image',
                                                   //badgeText: "2",
                                                   html: '<div style="cursor: pointer;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/SmsIcon01.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                               },
                                     {
                                         xtype: 'spacer',
                                         width: 10
                                     },
                                      {
                                          //height: 28,
                                          //width: 28,
                                          id: 'htmlFloatPanel_MessagingOption_Email_Name',
                                          //badgeText: "2",
                                          html: '<div style="cursor: pointer;width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">Email</div>',
                                      },

                                      {
                                          xtype: 'spacer'
                                      },
                                     {
                                         id: 'htmlFloatPanel_MessagingOption_Email_arrow',
                                         margin: '0 0 0 0',
                                         html: '<div style="cursor: pointer;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                         //  height: 20,
                                         //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                     },
                                     {
                                         id: 'htmlFloatPanel_MessagingOption_COD_Spacer',
                                         xtype: 'spacer',
                                         width: 13
                                     },

                                          ]
                                      },


                                 ]

                             },
                             ]

                         },


                //    {
                //        xtype: 'list',
                //        hidden:true,
                //        width: '100%',
                //        height: '100%',
                //        // height: '98%',
                //        // flex: 1,
                //        //store: 'PaymentMethodStore',
                //        store: _DataStore_PaymentMethodStore,
                //        id: 'FloatPanel_MessagingOption',
                //        scrollable: {
                //            direction: 'vertical',
                //            indicators: {
                //                y: {
                //                    autoHide: true
                //                },
                //                x: {
                //                    autoHide: true
                //                }
                //            }
                //        },
                //        mode: 'SINGLE',
                //        style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                //        // width: '100%',
                //        disableSelection: true,
                //        //itemTpl: '<div onclick="FloatPanel_MessagingOptionPaymentMethodSelected({ID})" class="myContent" style="background-color:white;width:104%">' +
                //        //    '<table style="border-collapse:collapse;border-spacing:0;width:104%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{Icon}" style="border:1px none black; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{PaymentMethodName}</b></td></tr></table>' +
                //        //    '<br>' +
                //        //    '<div style="width:104%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div></div>',



                //        itemTpl: '<div onclick="FloatPanel_MessagingOptionPaymentMethodSelected({ID})" class="myContent" style="background-color:white;width:104%;height:75px;">' +
                //            //'<div onclick="FloatPanel_MessagingOptionPaymentMethodSelected({ID})" style="overflow:auto;width:104%;margin:-2px 0px 0px 0px;background-color:white;height:90px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 0px;background-color:white;"><img src="{Icon}" style="border:1px none white; width:75px;height:75px;" /></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:84%;margin:15px 0px 0px 0px;background-color:white;color:black"><b>{PaymentMethodName}</b></div>',
                //            '<div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 0px;background-color:white;"><img src={Icon} style="border:1px none white; width:75px;height:75px;margin:-7px 0px 0px 0px;" /></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:80%;margin:0px 0px 0px 0px;background-color:transparent;color:black;padding:30px 10px;"><b>{PaymentMethodName}</b></div></div>',

                //        emptyText: '<div class="myContent">No Payment Method!</div>',
                     
                    

                //    },


  



                ]


            },



             ]




         }







     });
    return _FloatPanel_MessagingOption;





}



function FloatPanel_MessagingOptionShow(SubscriberAccNo,PhoneNumber,Email,ClientName) {
    arrVisitorAnalsys_SubscriberAccNo.length=0;
    globalFloatPanel_MembershipDetailsPage_PhoneNos="";
    globalFloatPanel_MembershipDetailsPage_Email="";
    Ext.Viewport.remove(_FloatPanel_MessagingOption);
    this.overlay = Ext.Viewport.add(FloatPanel_MessagingOption());
    this.overlay.show();
    AddRoutePages("FloatPanel_MessagingOptionHide()");
    isFloatPanel_MessagingOptionOpen = 'Y';
   // FloatPanel_MessagingOption_PaymentMethodStore();
   
  
   globalFloatPanel_MembershipDetailsPage_PhoneNos=PhoneNumber;
   globalFloatPanel_MembershipDetailsPage_Email=Email;
   globalFloatPanel_MembershipDetailsPage_AccountName=ClientName;
   arrVisitorAnalsys_SubscriberAccNo.push(SubscriberAccNo);






    var containerViewnamerFloatPanel_MessagingOption_AyohaeWallet = Ext.ComponentQuery.query('container[name=containerViewnamerFloatPanel_MessagingOption_AyohaeWallet]')[0];
    var containerViewElcontainerViewnamerFloatPanel_MessagingOption_AyohaeWallet = containerViewnamerFloatPanel_MessagingOption_AyohaeWallet.element;
    containerViewElcontainerViewnamerFloatPanel_MessagingOption_AyohaeWallet.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_MessagingOptionPaymentMethodSelected(1);
      }
    );




    var containerViewnameFloatPanel_MessagingOption_WhatsAppinner = Ext.ComponentQuery.query('container[name=nameFloatPanel_MessagingOption_WhatsAppinner]')[0];
    var containerViewElcontainerViewnameFloatPanel_MessagingOption_WhatsAppinner = containerViewnameFloatPanel_MessagingOption_WhatsAppinner.element;
    containerViewElcontainerViewnameFloatPanel_MessagingOption_WhatsAppinner.on('tap',
      function (event, node, options, eOpts) {
       
        FloatPanel_MembershipDetailsPage_openWhatsapp();

       // FloatPanel_MessagingOptionPaymentMethodSelected(2);
      }
    );



    


    var containerViewnamecontainerFloatPanel_MessagingOption_OnlineBanking = Ext.ComponentQuery.query('container[name=containerViewnamecontainerFloatPanel_MessagingOption_OnlineBanking]')[0];
    var containerViewElcontainerViewnamecontainerFloatPanel_MessagingOption_OnlineBanking = containerViewnamecontainerFloatPanel_MessagingOption_OnlineBanking.element;
    containerViewElcontainerViewnamecontainerFloatPanel_MessagingOption_OnlineBanking.on('tap',
      function (event, node, options, eOpts) {
      // FloatPanel_MembershipDetailsPage_openWhatsapp();
       // FloatPanel_MessagingOptionPaymentMethodSelected(2);
      }
    );


    var containerViewnamecontainerFloatPanel_MessagingOption_COD = Ext.ComponentQuery.query('container[name=containerViewnamecontainerFloatPanel_MessagingOption_COD]')[0];
    var containerViewElcontainerViewnamecontainerFloatPanel_MessagingOption_COD = containerViewnamecontainerFloatPanel_MessagingOption_COD.element;
    containerViewElcontainerViewnamecontainerFloatPanel_MessagingOption_COD.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_MembershipDetailsPage_openEmail();
        //  FloatPanel_MessagingOptionPaymentMethodSelected(4);
      }
    );

}





function FloatPanel_MessagingOption_PaymentMethodStore() {







    _DataStore_PaymentMethodStore.getProxy().setUrl(GetAPIurl() + '/AyohaPaymentMethod/AyohaPaymentMethodload');
    _DataStore_PaymentMethodStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_PaymentMethodStore.getCount();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_MessagingOptionHide() {
    if (isFloatPanel_MessagingOptionOpen == "Y") {
        _FloatPanel_MessagingOption.hide(); isFloatPanel_MessagingOptionOpen = 'N';
        RemovePages("FloatPanel_MessagingOptionHide()");
    }
  
}
var globalFloatPanel_AyohaStore_PaymentMethod_Code;
function FloatPanel_MessagingOptionPaymentMethodSelected(ID) {
   
    if (ID == 1) {
       // globalFloatPanel_AyohaStore_PaymentMethod_Code = 1;
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(false);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
        // document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "Ayoha e-Wallet";
        FloatPanel_MessagingOptionHide();
        FloatPanel_AyohaNotificationManagement_CreateMessageShow();                                   
        Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_SetReceipient').setHidden(true);
        Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_SetReceipient_FromVisitorAnalsys').setHidden(false);
        //Dashboard_LoadAyohaEwallet();
    }
    if (ID == 2) {
        swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "purple");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 2;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "Pay With Online Banking";
    }
    if (ID == 3) {
        swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "purple");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 3;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "CDM/Online Bank Transfer";
    }
    if (ID == 4) {
        swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "purple");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 4;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(false);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "COD-Cash On Delivery";
    }
}












