Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview', {

});
    

var _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview;
var _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EnterpriseAccNo;
var _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MembershipCode;
var Index=0;
var isFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewOpen = 'N';

var CarouselIndex = 0;

var _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_isFirstLoad = "N";







function FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview() {

    _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview =
    Ext.create('Ext.Container', {
        zIndex: 320,
        xtype: 'container',
        height: 465,
        width:400,
      // height: '100%',
      // height: '95%',
      //  width: '100%',
        id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewID',
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
      //  style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
      

        items: [
            {

                xtype: 'container',
                width: '100%',
                docked: 'bottom',
                height: 40,
                //hidden:true,
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                //margin: '10 0 0 0',
                id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewBottom',
                name: 'clickableContainerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewBottom',
                //style: {
                //    // background: '#D25959',
                //    background: 'transparent',
                //    // border: '2px'
                //},
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                style: 'border-bottom:2px none #D25959;background-color:transparent',
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #d3d3d3;',
                layout: {
                    type: 'fit',
                    //pack: 'center',
                    //align: 'center',
                },
                // hidden:true,
                items:
                       [

                            {
                                //xtype: 'button',
                                ////  align: 'stretch',

                                //ui: 'plain',
                                // width: '100%',
                                margin:'2 0 0 0',
                                height: 40,
                                id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_GetMembershipCard',
                                //hidden: true,
                              
                                html: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card !!!</button></div>',
                                //handler: function () {
                                //    getMembershipCard();
                                //    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
                                //},


                            },



 {
     xtype: 'button',
     //  align: 'stretch',

     ui: 'plain',
     width: '100%',
     height: 40,
     id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_DeleteMembershipCard',
     hidden: true,
     // width: '80%',
     //style: {
     //    background: '#FA8072',
     //},
     // padding: '10px',
     //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
     //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
     text: '<button class="button3Deleteviewloyaltycard">Delete Membership Card</button>',
     handler: function () {




     },


 },







                       ]

            },
            {

                xtype: 'container',
                width: '100%',
                docked:'top',
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewHeader',
                style: {
                    // background: '#D25959',
                    background: 'transparent',
                    // border: '2px'
                },
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
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewBack',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewHide();

                                             //FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_AddCardHide();
                                             //_FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview.hide(Ext.fx.Animation({
                                             //    type: 'slideOut',
                                             //    direction: 'left',
                                             //    easing: 'cubic-bezier(.7,0,.7,1)',
                                             //    duration: 250

                                             //}));

                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },

                                       {
                                           margin: '-8 0 0 0',                                          
                                           id: 'htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_TitleHeaderTxt',
                                           html: '<font size=2 color=black><b>Membership Card</b></font>'
                                       },

                                            {
                                                xtype: 'button',
                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 30,
                                                width: 35,
                                                hidden:true,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    isFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewOpen = 'N';
                                                    _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_isFirstLoad = "N";
                                                    RemovePages("FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewHide()");
                                                }
                                            },












                       ]

            },



            {

                xtype: 'container',
                width: '100%',
                // width: 40,
                docked: 'bottom',
                height: 51,
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottomOutter',
                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
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
                           {
                               xtype: 'container',
                               id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottomInner',
                               width: '100%',
                               style: "background-color: transparent",
                               height: 51,
                               layout: {
                                   type: 'hbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               scrollable: {
                                   direction: 'horizontal',
                                   directionLock: true,
                                   indicators: false
                               },
                               items: [


                                   {
                                       xtype: 'container',
                                       width: 490,
                                       style: "background-color: transparent",
                                       height: 51,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'center',
                                           align: 'center',
                                       },
                                       items: [



                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_EntitleReward',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_EntitleReward',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',

                                                        height: 36,
                                                        width: 36,
                                                        html: '<img src="resources/icons/EntitleReward.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {

                                                            MoveMembeshipCarousel(0);
                                                           

                                                         
                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_MenuBottom_EntitleRewardTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-15 0 0 0',
                                                                id: 'htmlMembershipTxt',
                                                                html: '<font size=1 color=purple><b><u>Membership</u></b></font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlPrivillageTxt',
                                                                html: '<font size=1 color=purple><b><u>Privillage</u></b></font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },
                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_EnttileOutlet',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'
                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_EnttileOutlet',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',

                                                        height: 36,
                                                        width: 36,
                                                        html: '<img src="resources/icons/EnttileOutlet.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            MoveMembeshipCarousel(1);
                                                           
                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_EnttileOutletTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-15 0 0 0',
                                                                id: 'htmlMembershipTxt02',
                                                                html: '<font size=1 color=grey>Membership</font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlEntitleOutletTxt',
                                                                html: '<font size=1 color=grey>Entitle Outlet</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },


                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_AyohaStore',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_AyohaStore',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',

                                                        height: 36,
                                                        width: 36,
                                                        html: '<img src="resources/icons/AyohaStorePurple.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                           // FloatPanelMerchantDetailPage_AyohaStore();
                                                            FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_AyohaStore();

                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_AyohaStoreTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-15 0 0 0',
                                                                id: 'htmlCardTxt01',
                                                                html: '<font size=1 color=grey>Ayoha</font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlTransactionTxt',
                                                                html: '<font size=1 color=grey>Store</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },

                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_CardTransaction',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_CardTransaction',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',

                                                        height: 36,
                                                        width: 36,
                                                        html: '<img src="resources/icons/MembershipCardTransaction.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            MoveMembeshipCarousel(2);
                                                          


                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_CardTransactionTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-15 0 0 0',
                                                                id: 'htmlCardTxt01',
                                                                html: '<font size=1 color=grey>Card</font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlTransactionTxt',
                                                                html: '<font size=1 color=grey>Transaction</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },

                                     
                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_CardDetailsInfo',
                                         //width: '33%',
                                         //height: 30,
                                         margin: '0 0 0 0',
                                         flex: 1,
                                         style: "background-color: transparent",
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_CardDetailsInfo',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',

                                                  height: 36,
                                                  width: 36,
                                                  html: '<img src="resources/icons/MembershipCardDetail.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      MoveMembeshipCarousel(3);
                                                      
                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_CardDetailsInfoTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-15 0 0 0',
                                                          id: 'htmlCardDetailTxt',
                                                          html: '<font size=1 color=grey>Card Detail</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 0',
                                                          id: 'htmlInfoTxt',
                                                          html: '<font size=1 color=grey>Info</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },


                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_TermAndCondition',
                                         //width: '33%',
                                         //height: 30,
                                        // hidden: true,
                                         margin: '0 0 0 0',
                                         flex: 1,
                                         style: "background-color: transparent",
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_TermAndCondition',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',

                                                  height: 36,
                                                  width: 36,
                                                  html: '<img src="resources/icons/shakeHand01.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {

                                                      // MoveMembeshipCarousel(4);
                                                      FloatPanel_Membership_TermAndConditionShow();


                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_TermAndConditionTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-15 0 0 0',
                                                          id: 'htmlTermAndConditionTxt',
                                                          html: '<font size=1 color=grey>Terms &</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 0',
                                                          id: 'htmlTermAndConditionTxts',
                                                          html: '<font size=1 color=grey>Condition</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },



                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_NFC',
                                         //width: '33%',
                                         //height: 30,
                                         hidden:true,
                                         margin: '0 0 0 0',
                                         flex: 1,
                                         style: "background-color: transparent",
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_NFC',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',

                                                  height: 36,
                                                  width: 36,
                                                  html: '<img src="resources/icons/NFCenabled.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {

                                                     // MoveMembeshipCarousel(4);



                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_NFCTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-15 0 0 0',
                                                          id: 'htmlNFCTxt',
                                                          html: '<font size=1 color=grey>NFC</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 0',
                                                          id: 'htmlEnabledTxt',
                                                          html: '<font size=1 color=grey>Enabled</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },

                                     

                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_DeleteCard',
                                         //width: '33%',
                                         //height: 30,
                                         margin: '0 0 0 0',
                                         flex: 1,
                                         style: "background-color: transparent",
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_DeleteCard',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',

                                                  height: 36,
                                                  width: 36,
                                                  html: '<img src="resources/icons/CancelMembershipCard.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {

                                                      MoveMembeshipCarousel(4);
                                                     

                                                    
                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_DeleteCardTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-15 0 0 0',
                                                          id: 'htmlUnsubscribeTxt',
                                                          html: '<font size=1 color=grey>Unsubscribe</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 10',
                                                          id: 'htmlMembershipCardTxt',
                                                          html: '<font size=1 color=grey>Membership Card</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },


                                         






                                         










                                       ]

                                   },
















                               ]
                           },








                           {
                               xtype: 'container',
                               margin: '10 0 0 0',
                               hidden: true,
                               style: 'background-color: transparent;',
                               //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                               height: 80,
                               width: '20%',
                               // margin: '70 0 0 0',
                               id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_GetMembershipCard',
                               layout: {

                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'center'
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       margin: '-40 0 0 -3',
                                       // hidden: true,
                                       //style: 'background-color: white;',
                                       style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                       height: 80,
                                       width: 80,
                                       // margin: '70 0 0 0',
                                       id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_GetMembershipCardInner',
                                       layout: {

                                           type: 'vbox',
                                           pack: 'center',
                                           align: 'center'
                                       },
                                       items: [
                                           {
                                               xtype: 'button',
                                               height: 80,
                                               width: 80,
                                               margin: '0 0 0 0',
                                               id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MenuBottom_GetMembershipCard',
                                               html: '<img src="resources/icons/MembershipcardPurple.png" width="45" height="45" alt="Company Name">',
                                               //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:70px;height:70px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {

                                                   //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                   //  setupMovementMap(2);


                                                 //  FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();


                                                   //Ext.getCmp('mainView').setActiveItem(16);
                                                   //loadNotificationSummary();
                                               }
                                           },



                                       ]
                                   },
                               ]
                           },




                       ]

            },



//////////////////////////
 //           {

 //               xtype: 'container',
 //               width: '100%',
 //              // docked: 'bottom',
 //               height: 40,
 //               hidden:true,
 //               // width: 40,

 //               //  title: '<font size="3" color="white">Live Tracking Map</font>',
 //               //hidden: true,
 //               //margin: '10 0 0 0',
 //               id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewBottom',
 //               //style: {
 //               //    // background: '#D25959',
 //               //    background: 'transparent',
 //               //    // border: '2px'
 //               //},
 //               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
 //                style: 'border-bottom:2px solid #D25959;background-color:transparent',
 //              // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #d3d3d3;',
 //               layout: {
 //                   type: 'hbox',
 //                   pack: 'center',
 //                   align: 'center',
 //               },
 //               // hidden:true,
 //               items:
 //                      [

 //                           {
 //                               xtype: 'button',
 //                               //  align: 'stretch',

 //                               ui: 'plain',
 //                               width: '100%',
 //                               height: 40,
 //                               id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_GetMembershipCard',
 //                             hidden:true,
 //                               // width: '80%',
 //                               //style: {
 //                               //    background: '#FA8072',
 //                               //},
 //                               // padding: '10px',
 //                               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
 //                               //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
 //                               text: '<button class="button3viewloyaltycard">Get Membership Card</button>',
 //                               handler: function () {
 //                                   getMembershipCard();
 //                                  // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
 //                               },


 //                           },
                                    


 //{
 //    xtype: 'button',
 //    //  align: 'stretch',

 //    ui: 'plain',
 //    width: '100%',
 //    height: 40,
 //    id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_DeleteMembershipCard',
 //    hidden: true,
 //    // width: '80%',
 //    //style: {
 //    //    background: '#FA8072',
 //    //},
 //    // padding: '10px',
 //    //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
 //    //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
 //    text: '<button class="button3Deleteviewloyaltycard">Delete Membership Card</button>',
 //    handler: function () {

      
       

 //    },


 //},







 //                      ]

 //           },
            
                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        //    margin: '0 0 0 0',
                       style: 'background-color: transparent',
                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left'

                        },
                        items: [
                            
                            
                            {
                                style: 'background-color: transparent',
                                hidden:true,
                                id:'htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_CardLevel',
                                html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.Gold Membership Card</div>',
                            },


                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_Loading',
                                width: '100%',
                                height: 200,
                                //hidden:true,
                                 style: "background-color: transparent",
                                //style: "background-color: #F35B57;",
                             //   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [
                                      {
                                          xtype: 'container',
                                          id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_LoadingInner',
                                          width: '80%',
                                          height: 200,
                                          //hidden:true,
                                          // style: "background-color: transparent",
                                          //style: "background-color: #F35B57;",
                                          style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                          
                                      },

                                ]

                            },
                           
                            //{
                            //    xtype: 'container',
                            //    style: 'background-color: transparent',
                            //    width: '100%',
                            //    height:5,
                            //},

                            {
                                xtype: 'carousel',
                               
                                hidden: true,
                                id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_Carousel',
                                style: 'background-color: transparent',
                                width: '100%',
                                height: 220,
                                indicator: true,
                                listeners: {

                                    //initialize: function (c) {
                                    //    this.element.on({
                                    //        swipe: function (e, node, options) {
                                    //            if (e.direction == "left") {
                                    //                swipeDirection = "Left";

                                    //            } else {
                                    //                swipeDirection = "Right";
                                    //            }
                                    //        }
                                    //    });
                                    //},
                                    activeitemchange: function (container, newCard, oldCard, index) {
                                      

                                    },

                                },


                                margin: '0 0 0 0',
                                items: [



                                    
                                  {
                                      xtype: 'container',
                                      id: 'carouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_0',
                                      style: ' background-color: transparent',
                                      hidden:true,
                                      // html: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +
                                      html: '<div class="myContent" style="margin:0px 0px 0px -7px;height: 255px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                          '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                            '</div>' +
                                           '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="{AyohaUserPhoto}" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',
                                      //'<div style="width:100%;text-align:right;margin:0px 0px 0px 0px;background-color: transparent;height:30px"></div>',
                                      height: 250,
                                      width: '100%',
                                      //  mode: 'image'
                                  },
                                  {
                                      xtype: 'container',
                                      id: 'carouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_1',
                                      hidden: true,                                    
                                      height: 250,
                                      width: '100%',
                                     
                                  },
                               //{
                               //    xtype: 'container',
                               //    id: 'carouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_2',
                               //    hidden: true,                                 
                               //    height: 250,
                               //    width: '100%',
                                 
                               //},
                               //  {
                               //      xtype: 'container',
                               //      id: 'carouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_3',
                               //      hidden: true,
                               //      height: 250,
                               //      width: '100%',
                                   
                               //  }, {
                               //      xtype: 'container',
                               //      id: 'carouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_4',
                               //      hidden: true,                                    
                               //      height: 250,
                               //      width: '100%',
                                   
                               //  },

                                ]
                            },




                            {
                                xtype: 'container',
                                width: '100%',
                                style: 'background-color:white',
                              //  hidden:true,
                              //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'

                                },
                                //height: 50,
                                // margin:'10 0 0 0',
                                items: [

                                        //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                        //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                        //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                        //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                        //    '</div></div></div>'
                                        {
                                            id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EntitiledReward',
                                            html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Privileges</u></div>',
                                        },

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EntitiledRewardOld',
                                             hidden: true,
                                             height: 22,
                                             width: '50%',
                                             // iconCls: 'list',
                                             html: '<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Privileges</u></div>',
                                             ui: 'plain',
                                             handler: function () {
                                                
                                               
                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EntitiledEnterprise',
                                             height: 22,
                                             hidden:true,
                                             width:'50%',
                                             // iconCls: 'list',
                                             html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:11px;">Membership Outlet</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                
                                             }
                                         },
                                        //{

                                        //    width: '50%',
                                        //    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Membership Card List</div>'
                                        //},

                                        //{

                                        //    width: '50%',
                                        //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                        //},
                                        //     //{
                                             //    margin: '-8 0 0 0',

                                             //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                             //},
                                             // {
                                             //     margin: '-7 0 0 0',

                                             //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                             // },


                                ]
                            },

                            {
                                xtype: 'carousel',

                                //hidden: true,
                                id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_CarouselEntitleReward_EntitleEnterprise',
                               // style: 'background-color:#f7f7f7',
                                style: 'background-color:white',
                                width: '100%',
                                height: '70%',
                                indicator: true,
                                listeners: {

                                    //initialize: function (c) {
                                    //    this.element.on({
                                    //        swipe: function (e, node, options) {
                                    //            if (e.direction == "left") {
                                    //                swipeDirection = "Left";

                                    //            } else {
                                    //                swipeDirection = "Right";
                                    //            }
                                    //        }
                                    //    });
                                    //},
                                    activeitemchange: function (container, newCard, oldCard, index) {
                                        // console.log('Current index:' + container.getActiveIndex());
                                        CarouselIndex = container.getActiveIndex();

                                  
                                        if (_FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_isFirstLoad == "Y") {
                                            MoveMembeshipCarousel(CarouselIndex);
                                        }

                                      

                                    },

                                },


                               // margin: '0 0 0 0',
                                items: [
                                  
                                        //{
                                        //    style: ' background-color: transparent',
                                        //    margin:'0 0 0 0',
                                        //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
                                        //},
                                        {
                                            xtype: 'container',
                                            id: 'IDcarouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_Campaignlist',
                                            style: ' background-color: transparent',
                                            height:'100%',
                                            width: '100%',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'left'
            
                                            },
                                            items: [
                                                {
                                                    xtype: 'list',
                                                    //  flex: 1,
                                                   // hidden:true,
                                                  //  margin: '1 0 0 0',
                                                    width: '100%',
                                                    // store: 'EnterprisegetAllStore',
                                                    store: _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore,
                                                   // store: 'MembershipCardCampaingEntitledLoadByMembershipCardCodeStore',
                                                    id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_Campaignlist',
                                                   
                                                    // grouped: true,
                                                    mode: 'SINGLE',
                                                    //  indexBar: true,
                                                    disableSelection: true,
                                                    style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                    scrollable: {
                                                        direction: 'vertical',
                                                        directionLock: true,
                                                        indicators: {
                                                            y: {
                                                                autoHide: true
                                                            },
                                                            x: {
                                                                autoHide: true
                                                            }
                                                        }
                                                    },
                                                         
                                                  
                                                //     itemTpl: '{ModifiedCampaignTypeShorted}' +                                              
                                                //    '<br><div style="width:100%;text-align:center;margin:-10px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black">{ModifiedCampaignType}</div>' +
                                                //        '<br><div style="width:100%;text-align:center;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{CampaignName}</div>' +
                                                //         '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{ModifiedCountLoyaltyStamped}</div>' +
                                                //           '{ModifiedisRequiredStartEndDate}' +
                                                //                                                      // '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black">Day Left:{CampaignDayLeft}</div>' +

                                                //     '</div>',


                                                itemTpl: '<div class="myContent" style="background-color:transparent;">' +
            

                                               '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;height:60px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 0px;width:30px;height:30px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({ModifiedCampaignType}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedCampaignTypeShorted}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{CampaignName} - {ModifiedCountLoyaltyStamped}</font></td></tr></table>'
                                               // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedCampaignTypeShorted}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{CampaignName} - {ModifiedCountLoyaltyStamped}</font></td></tr></table>'   
                                               
                                               
                                               + '</div>',






                                                   
                                                    // itemTpl: '<div class="myContent" style="background-color:transparent;height:125px">' +
            
                                                    //    '<div style="width:100%;text-align:center;margin:0px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black"><u>{ModifiedCampaignTypeShorted}</u></div>' +
                                                    //                                                                            // '<br><div style="width:100%;text-align:right;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;font-weight:bold;color:black"></div>' +
                                                    //     '<br><div style="width:100%;text-align:center;margin:-10px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black">{ModifiedCampaignType}</div>' +
                                                    //         '<br><div style="width:100%;text-align:center;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{CampaignName}</div>' +
                                                    //          '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{ModifiedCountLoyaltyStamped}</div>' +
                                                             
                                                    //      '</div>',
                                                    height: '100%',
                                                   //height: '100%',
                                                    listeners: {
                                                        itemsingletap: function (list, idx, target, records, evt) {

                                                            //var Stamps = records.get('Stamps');
                                                            //var StampsArr = Stamps.split('/');


                                                            var CampaignCode = records.get('CampaignCode');
                                                            var EnterpriseHQAccNo = records.get('EnterpriseHQAccNo');
                                                            var StartDate = records.get('CampaignStartDate');
                                                            var EndDate = records.get('CampaignEndDate');
                                                            var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                            //var EnterpriseName = records.get('EnterpriseName');     
                                                            var EnterpriseName = records.get('EnterpriseName');
                                                            var StampRuleRemarks = records.get('Remarks');
                                                            var isStampRulePopUp = records.get('isRulePopUp');
                                                            var CampaignName = records.get('CampaignName');
                                                            var Stamp = records.get('Stamp');
                                                            var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                            //var EnterpriseLogo = records.get('EnterpriseLogo');
                                                            var EnterpriseLogo = records.get('EnterpriseLogo');
                                                            var CampaignType = records.get('CampaignType');
                                                            var EnterpriseAccNo = records.get('EnterpriseAccNo');

                                                            var isRequiredStartEndDate = records.get('isRequiredStartEndDate');
                                                            var isCampaignExpired = records.get('isCampaignExpired');
                                                            var CampaignDayLeft = records.get('CampaignDayLeft');

                                                            //  FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks);



                                                            //var StampedCampaignCode = records.get('StampedCampaignCode');
                                                            //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                            //var StartDate = records.get('StartDate');
                                                            //var EndDate = records.get('EndDate');
                                                            //var SubscriberAccNo = records.get('SubscriberAccNo');
                                                            //var EnterpriseName = records.get('EnterpriseName');
                                                            //var StampRuleRemarks = records.get('StampRuleRemarks');
                                                            //var isStampRulePopUp = records.get('isStampRulePopUp');
                                                            //var StampCampaignName = records.get('StampCampaignName');
                                                            //var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                            //var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                                            localStorage.setItem('StampCampaignCode', CampaignCode);

                                                            localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                            localStorage.setItem('CountStampCardRowShow', Stamp);
                                                             
                                                           // alert(isStampRulePopUp);



                                                            if (MembershipTag == 'YES') {


                                                                if (CampaignType == "Stamp Reward Loyalty Card") {

                                                                    //alert(CampaignType);
                                                                   // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle) {

                                                                    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);
                                                                    //Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');
                                                                    Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '</b></font>');
                                                                }
                                                                if (CampaignType == "Point Reward Loyalty Card") {
                                                                    FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, isCampaignExpired);
                                                                   // FloatLoyaltyCardPointShow(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, PointisCampaignExpired);
                                                                }
                                                                if (CampaignType == "Membership Card Discount") {
                                                                    FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                if (CampaignType == "Membership Card Contest") {
                                                                    FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
                                                                   // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                               // 



                                                            }
                                                            if (MembershipTag == 'NO') {
                                                                //   FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp);

                                                              
                                                                if (CampaignType == "Stamp Reward Loyalty Card") {                                                                 

                                                                    FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
                                                                    Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>0/' + Stamp + '</b></font>');
                                                                }
                                                                if (CampaignType == "Point Reward Loyalty Card") {
                                                                    FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo);
                                                                }
                                                                if (CampaignType == "Membership Card Contest") {
                                                                    FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
                                                                   // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                            }

                                                          //  //var Stamps = records.get('Stamps');
                                                          //  //var StampsArr = Stamps.split('/');


                                                          //  var CampaignCode = records.get('CampaignCode');
                                                          //  var EnterpriseHQAccNo = records.get('EnterpriseHQAccNo');
                                                          //  var StartDate = records.get('CampaignStartDate');
                                                          //  var EndDate = records.get('CampaignEndDate');
                                                          //  var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                          //  //var EnterpriseName = records.get('EnterpriseName');     
                                                          //  var EnterpriseName = global_FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EnterprisesName;
                                                          //  var StampRuleRemarks = records.get('StampRuleRemarks');
                                                          //  var isStampRulePopUp = records.get('isStampRulePopUp');
                                                          //  var CampaignName = records.get('CampaignName');
                                                          //  var Stamp = records.get('Stamp');
                                                          //  var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                          //  //var EnterpriseLogo = records.get('EnterpriseLogo');
                                                          //  var EnterpriseLogo = global_FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EnterprisesLogo;
                                                         
                                                           
                                                    
                                                          ////  FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks);
                                                          

                                                            


                                                          //  //var StampedCampaignCode = records.get('StampedCampaignCode');
                                                          //  //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                          //  //var StartDate = records.get('StartDate');
                                                          //  //var EndDate = records.get('EndDate');
                                                          //  //var SubscriberAccNo = records.get('SubscriberAccNo');
                                                          //  //var EnterpriseName = records.get('EnterpriseName');
                                                          //  //var StampRuleRemarks = records.get('StampRuleRemarks');
                                                          //  //var isStampRulePopUp = records.get('isStampRulePopUp');
                                                          //  //var StampCampaignName = records.get('StampCampaignName');
                                                          //  //var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                          //  //var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                                          //  localStorage.setItem('StampCampaignCode', CampaignCode);

                                                          //  localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                          //  localStorage.setItem('CountStampCardRowShow', Stamp);
                                                          //  //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                          //  console.log(MembershipTag);

                                                          //  if (MembershipTag == 'YES') {
                                                          //      FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);
                                                          //      Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');

                                                          //  }
                                                          //  if (MembershipTag == 'NO') {
                                                          //   //   FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp);

                                                          //      FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
                                                          //      Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>0/' + Stamp + '</b></font>');

                                                          //  }

                                                        },
                                                        deselect: function (list, records) {

                                                        }
                                                    },

                                                },
                                                {
                                                    xtype:'container',
                                                    width:'100%',
                                                    height:100
                                                }
                                            ]

                                        },


                             ///////////////////////




                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_Enterpriselist',
                                 style: ' background-color: transparent',
                                 height: '75%',
                                 width: '100%',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'left'

                                 },
                                 items: [
                                     {
                                         xtype: 'list',
                                         //flex:1,
                                         height: '100%',
                                         store: 'MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore',
                                         id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EnterpriseEntitledList',
                                         mode: 'SINGLE',
                                         //  grouped: true,
                                         disableSelection: true,
                                         style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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
                                         itemTpl: '<div class="myContent"  style="background-color:white;width:104%">' +
                                                     //'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
                                                      '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:3px 0px 0px -13px;" ><thead><tr><th style="background-color:transparent;border-radius: 0px 0px 0px 0px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo}"style="width: 80px; height: 80px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-3px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div></th></tr><tr></tr></thead></table>' +


                                                        '</div>',
                                         width: '100%',
                                         listeners: {
                                             itemsingletap: function (list, idx, target, records, evt) {





                                             },
                                             deselect: function (list, records) {

                                             }
                                         },

                                     },

                                 ]

                             },
                                     
                                 
                                 ///////////////////////////////////////////////////////
                                 {
                                     xtype: 'container',
                                     id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_CardTransaction',
                                     style: ' background-color: transparent',
                                    // height: '95%',
                                     width: '100%',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [
                                         {


                                             xtype: 'list',
                                             // height: '64%',
                                             // height: '100%',
                                             // height: 200,
                                             //   flex: 2,
                                             store: 'AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore',
                                             id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_CardTransactionList',
                                             mode: 'SINGLE',
                                             disableSelection: true,
                                             grouped: true,
                                             // disableSelection: true,

                                             style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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


                                                                     '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{AyohaPointType}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:1px 0px 0px 0px;"><b>{CampaignName}</b></div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right">{ModifiedTypeCRDBExtent}</div></td></tr></table>' +

                                             '</div>',
                                             emptyText: '<div class="myContent">No Transactions</div>',
                                             width: '100%',
                                             // height: 600,
                                             // height: '100%',

                                             listeners: {


                                                 itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                                 },

                                                 itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                                 }
                                             }






                                         },
                                         //{
                                         //    xtype: 'list',
                                         //    height: '100%',
                                         //    // store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                         //    store:'LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore',
                                         //    id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_StampHistoryList',
                                         //    mode: 'SINGLE',
                                         //    grouped: true,
                                         //    disableSelection: true,
                                         //    itemTpl: '<div class="myContent">' +

                                         //    //  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal">{LastStampBy}</th></tr></thead></table>' +
                                         //     '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</div>' +



                                         //      '</div>',
                                         //    width: '100%',
                                         //    listeners: {
                                         //        itemsingletap: function (list, idx, target, records, evt) {

                                         //            var StampedCampaignCode = records.get('StampedCampaignCode');
                                         //            var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                         //            var StartDate = records.get('StartDate');
                                         //            var EndDate = records.get('EndDate');
                                         //            var SubscriberAccNo = records.get('SubscriberAccNo');
                                         //            var EnterpriseName = records.get('EnterpriseName');
                                         //            var StampRuleRemarks = records.get('StampRuleRemarks');
                                         //            var isStampRulePopUp = records.get('isStampRulePopUp');
                                         //            var StampCampaignName = records.get('StampCampaignName');
                                         //            var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                         //            var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                         //            localStorage.setItem('StampCampaignCode', StampedCampaignCode);

                                         //            localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                         //            localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                         //            //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                         //            FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);


                                         //        },
                                         //        deselect: function (list, records) {

                                         //        }
                                         //    },

                                         //},

                                     ]

                                 },



                                    ///////////////////////////////////////////////////////
                                 {
                                     xtype: 'container',
                                     id: 'containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_CardDetails',
                                     style: ' background-color: white',
                                     // height: '95%',
                                    // height: 412,
                                     width: '100%',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [
                                         {
                                             xtype: 'list',
                                           //  height: 480,
                                             id: 'FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_CardDetails',
                                             // store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                             store: 'MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore',                                            
                                             mode: 'SINGLE',
                                             style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                            // grouped: true,
                                             disableSelection: true,
                                             itemTpl: '<div class="myContent">' +

                                             //  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal">{LastStampBy}</th></tr></thead></table>' +
                                              '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Membership Card Name</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardName}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Level</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardType}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Fees</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardFee}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Fees Payment Cycle</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardFeePaymentCycle}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Expiry (Month)</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{StrExpiredDate}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">is Required Approval?</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{isRequiredApproval}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Registration/Request Date</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{CreatedDate}</div>' +
                                               //'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Registration/Request Date</div><br>' +
                                               //'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipDate}</div>' +
                                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Registration/Request Method</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipByMethod}</div>' +
                                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Date</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembrshipApprovalDate}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval By</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipApprovalBy}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Status</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipApprovalStatus}</div>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Paid Fees Amount</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{ReceivedAmount}</div>' +
                                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Remarks</div><br>' +
                                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{Remarks}</div>' +
                                             '</div>',
                                             width: '100%',
                                             listeners: {
                                                 itemsingletap: function (list, idx, target, records, evt) {

                                                   

                                                 },
                                                 deselect: function (list, records) {

                                                 }
                                             },

                                         },

                                     ]

                                 },










                                   
                             
                                ]
                            },






                        ]
                    },









                    



















          










        ]





    });
    return _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview;



}








function FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewShow_FromDashboard_Main(MembershipCardCode) {
    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview());
    this.overlay.show();
    globalOpenMembershipCardList_Upgrade_From = "DashboardMain";





   // globalFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    isFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewOpen = 'Y';

    //FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewAdjustHeight();
  



    //_FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MembershipCode = MembershipCardCode;

    //globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;


    FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MembershipCardAyohaUserMembershipCardStore_Maindashboard(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
        //  FloatPanel_MembershipCardManagement_TermAndConditionShow();
      }
    );



    _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_isFirstLoad = "Y";
   
}






var MmcCode=[];
var MembershipCardLevels=[];
function FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MembershipCardAyohaUserMembershipCardStore_Maindashboard(MembershipCardCode) {


    MmcCode.length = 0;
    MembershipCardLevels.length = 0;


 


    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseHQAccNo', GetEnterpriseAccNo());
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('AyohaUserAccountNo', '123');
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setUrl(GetAPIurl_Mobile() + '/MembershipCard/MembershipCardAyohaUserMembershipCard');
    _DataStore_MembershipCardAyohaUserMembershipCardStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_MembershipCardAyohaUserMembershipCardStore.getCount();


        for (i = 0; i < count; i++) {
            var modelRecorded = _DataStore_MembershipCardAyohaUserMembershipCardStore.getAt(i);
            var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
            var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
            var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
            var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
            var MembershipCardType = modelRecorded.get('MembershipCardType');
            var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedMembershipNo');
            var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
            var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
            var MembershipCardCode = modelRecorded.get('MembershipCardCode');
            var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
            global_FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');


            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
           
            Ext.getCmp('carouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');

        }




        Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_Carousel').setHidden(false);

        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MembershipCode = MembershipCode;
        FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        Ext.getCmp('containerFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');


        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}




function FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MMCCode) {
  
  
     
    _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.removeAll();
     
  
  
  
      var mmmCode = MMCCode;
      if (mmmCode) {
     
          _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MMCCode);
          _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', '123');
          _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl_Mobile() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode');
          _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.load();
  
  
      var task = Ext.create('Ext.util.DelayedTask', function () {
         
          var Count = _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getCount();
        //alert(Count)
        
        Ext.Viewport.setMasked(false);
  
      });
      task.delay(1000);
      }
  }























function FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewHide() {

    if (isFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewOpen == 'Y') {
        _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview.hide(); isFloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewOpen = 'N'; _FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreview_isFirstLoad = "N";
        RemovePages("FloatPanel_AyohaEnterpriseAccount_MembershipCardPagePreviewHide()");
    }

 
}
























































