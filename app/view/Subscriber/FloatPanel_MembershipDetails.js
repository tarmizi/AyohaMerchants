
Ext.define('ianMizi.view.Subscriber.FloatPanel_MembershipDetails', {

});

var _FloatPanel_MembershipDetails;
var _FloatPanel_MembershipDetails_EnterpriseAccNo;
var _FloatPanel_MembershipDetails_MembershipCode;
var _FloatPanel_MembershipDetails_SubscriberAccNo;
var Index = 0;
var isFloatPanel_MembershipDetailsOpen = 'N';

var CarouselIndex = 0;

var _FloatPanel_MembershipDetails_isFirstLoad = "N";







function FloatPanel_MembershipDetails() {

    _FloatPanel_MembershipDetails =
    Ext.create('Ext.Container', {
        requires: [
      'Ext.carousel.Carousel',
      'Ext.util.DelayedTask',
      'Ext.Video'
        ],
        zIndex: 90,
        xtype: 'container',
        height: 700,
        // height: '100%',
        // width: '100%',
      //  height: '95%',
        width: 370,
        id: 'FloatPanel_MembershipDetailsID',
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
            type: 'popOut',
           // direction: 'left',
           // easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
      //  style: 'background-color:white;',
        style: 'background-image: url("resources/icons/previewayohaMymembershibCard.png"); background-size: 100% 98%;border-bottom:1px none;background-repeat: no-repeat;',

        items: [
            {

                xtype: 'container',
                width: '100%',
                docked: 'bottom',
                height: 40,
                hidden:true,
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                //margin: '10 0 0 0',
                id: 'containerFloatPanel_MembershipDetailsBottom',
              //  name: 'clickableContainerFloatPanel_MembershipDetailsBottom',
                //style: {
                //    // background: '#D25959',
                //    background: 'transparent',
                //    // border: '2px'
                //},
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                ////style: 'border-bottom:2px none #D25959;background-color:transparent',
               // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-top:1px solid #d3d3d3;',
                style: 'background-color:transparent',
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
                                ////  align: 'stretch',
                                hidden:true,
                                ui: 'plain',
                                width: '50%',
                                margin: '-90 0 0 0',
                                height: 35,
                                id: 'btnFloatPanel_MembershipDetails_RejectMembershipCard',
                                //hidden: true,

                                html: '<button class="buttonReject">Reject</button>',
                                //handler: function () {
                                //    getMembershipCard();
                                //    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
                                //},


                            },



 {
     xtype: 'button',
     //  align: 'stretch',

     ui: 'plain',
     width: '99%',
     height: 35,
     margin: '-90 0 0 0',
     id: 'btnFloatPanel_MembershipDetails_ApprovedMembershipCard',
     //hidden: true,
     // width: '80%',
     //style: {
     //    background: '#FA8072',
     //},
     // padding: '10px',
     //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
     //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
     text: '<div class="blink_me_sendNow"><button class="buttonApproved">Request Approval</button></div>',
     handler: function () {

        FloatPanel_SubscriberList_MembershipsLoadByEnterpriseAccNoMembershipCardCodeSubscriberAccNo(_FloatPanel_MembershipDetails_SubscriberAccNo,_FloatPanel_MembershipDetails_MembershipCode);
       //  FloatPanel_MembershipDetails_ApproveShow();

     },


 },







                       ]

            },
//             {

//                 xtype: 'container',
//                 width: '100%',
//                 docked: 'top',
//                 height: 55,

//                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
//                 //hidden: true,

//                 id: 'containerFloatPanel_MembershipDetailsHeader',
//                 style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
//                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                 layout: {
//                     type: 'hbox',
//                     pack: 'center',
//                     align: 'center',
//                 },
//                 // hidden:true,
//                 items:
//                        [
//                         {
//                             xtype: 'spacer',
// width:20,
//                         },
//                         {
//                             margin: '-8 0 0 0',
//                             id: 'htmlFloatPanel_MembershipDetails_TitleHeaderTxt',
//                             html: '<font size=3 color=black><b>Membership Card</b></font>'
//                         },
                                    

//                                       {
//                                           xtype: 'spacer',

//                                       },

                                       

//                                             // {
//                                             //     xtype: 'button',
//                                             //     //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
//                                             //     height: 30,
//                                             //     width: 35,
//                                             //     // iconCls: 'list',
//                                             //     html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
//                                             //     ui: 'plain',
//                                             //     handler: function () {
//                                             //         _FloatPanel_MembershipDetails.hide(Ext.fx.Animation({
//                                             //             type: 'slideOut',
//                                             //             direction: 'right',
//                                             //             easing: 'cubic-bezier(.7,0,.7,1)',
//                                             //             duration: 250

//                                             //         }));
//                                             //         isFloatPanel_MembershipDetailsOpen = 'N';
//                                             //         _FloatPanel_MembershipDetails_isFirstLoad = "N";
//                                             //     }
//                                             // },



//                                             {
//                                                 xtype: 'button',
//                                                 id: 'btnFloatPanel_MembershipDetailsBack',
//                                                 height: 30,
//                                                 width: 35,
//                                                 // iconCls: 'list',
//                                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                                 ui: 'plain',
//                                                 handler: function () {
//                                                     FloatPanel_MembershipDetailsHide();
       
//                                                     //FloatPanel_MembershipDetails_AddCardHide();
//                                                     //_FloatPanel_MembershipDetails.hide(Ext.fx.Animation({
//                                                     //    type: 'slideOut',
//                                                     //    direction: 'left',
//                                                     //    easing: 'cubic-bezier(.7,0,.7,1)',
//                                                     //    duration: 250
       
//                                                     //}));
       
//                                                 }
//                                             },


//                                             {
//                                                 xtype: 'spacer',
//                     width:20,
//                                             },





//                        ]

//             },

            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containeFloatPanel_MembershipDetailsHeader',
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
                                xtype: 'panel',
                                width: 10
                            },

                            {
                             margin: '0 15 0 0',
                             hidden:true,
                             id: 'htmlFloatPanel_MembershipDetails_TitleHeaderTxt',
                             html: '<font size=2 color=black><b>Preview Voucher </b></font>'
                         },

                                      {
                                          xtype: 'spacer',

                                      },


                                     



                                      {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_MembershipDetailsBack',
                                         height: 30,
                                         width: 35,
                                         margin: '15 -30 0 0',
                                         // iconCls: 'list',
                                         html: '<img src="resources/icons/BtnCloseNew.png" width="25" height="25" alt="Company Name">',
                                       //  html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                            FloatPanel_MembershipDetailsHide();
       
                                                    //FloatPanel_MembershipDetails_AddCardHide();
                                                    //_FloatPanel_MembershipDetails.hide(Ext.fx.Animation({
                                                    //    type: 'slideOut',
                                                    //    direction: 'left',
                                                    //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                    //    duration: 250
       
                                                    //}));

                                         }
                                     },




                                      {
                                          xtype: 'panel',
                                          width:10
                                      },
                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_MembershipDetails_CardIcon',
                                                height: 30,
                                                hidden:true,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    is_FloatPanel_MembershipDetailsOpen = 'N';

                                                    _FloatPanel_MembershipDetails.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_MembershipDetailsHide()");
                                                    //FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                }
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
 //               id: 'containerFloatPanel_MembershipDetailsBottom',
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
 //                               id: 'btnFloatPanel_MembershipDetails_GetMembershipCard',
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
 //    id: 'btnFloatPanel_MembershipDetails_DeleteMembershipCard',
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
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
           // width: 530,
           width: 350,
            height: '89%',
            margin: '20 0 0 0',
             style: 'background-color: transparent',
           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'

            },
           
            items: [
                {

                    xtype: 'container',
                    width: '100%',
                    // width: 40,
                    docked: 'bottom',
                    height: 50,
                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                    //hidden: true,
        
                    id: 'containerFloatPanel_MembershipDetails_MenuBottomOutter',
                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                    
                   // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
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
                                   id: 'containerFloatPanel_MembershipDetails_MenuBottomInner',
                                   width: '99%',
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
                                       indicators:false,
                                   },
                                   items: [
        
        
                                       {
                                           xtype: 'container',
                                           width: 450,
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
                                                   id: 'containerFloatPanel_MembershipDetails_MenuBottom_EntitleReward',
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
                                                            id: 'btnFloatPanel_MembershipDetails_MenuBottom_EntitleReward',
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
                                                            id: 'containerFloatPanel_MembershipDetails_MenuBottom_MenuBottom_EntitleRewardTxt',
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
                                                   id: 'containerFloatPanel_MembershipDetails_MenuBottom_EnttileOutlet',
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
                                                            id: 'btnFloatPanel_MembershipDetails_MenuBottom_EnttileOutlet',
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
                                                            id: 'containerFloatPanel_MembershipDetails_MenuBottom_EnttileOutletTxt',
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
                                                   id: 'containerFloatPanel_MembershipDetails_MenuBottom_CardTransaction',
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
                                                            id: 'btnFloatPanel_MembershipDetails_MenuBottom_CardTransaction',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',
        
                                                            height: 36,
                                                            width: 36,
                                                            html: '<img src="resources/icons/MembershipCardTransaction.png" width="26" height="26" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                              //  MoveMembeshipCarousel(2);
        
        
        
                                                            }
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerFloatPanel_MembershipDetails_MenuBottom_CardTransactionTxt',
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
                                             id: 'containerFloatPanel_MembershipDetails_MenuBottom_CardDetailsInfo',
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
                                                      id: 'btnFloatPanel_MembershipDetails_MenuBottom_CardDetailsInfo',
                                                      //  badgeText: '1',
                                                      margin: '0 0 0 0',
        
                                                      height: 36,
                                                      width: 36,
                                                      html: '<img src="resources/icons/MembershipCardDetail.png" width="26" height="26" alt="Company Name">',
                                                      ui: 'plain',
                                                      handler: function () {
                                                       //   MoveMembeshipCarousel(3);
        
                                                      }
                                                  },
                                                  {
                                                      xtype: 'container',
                                                      id: 'containerFloatPanel_MembershipDetails_MenuBottom_CardDetailsInfoTxt',
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
                                             id: 'containerFloatPanel_MembershipDetails_MenuBottom_NFC',
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
                                                      id: 'btnFloatPanel_MembershipDetails_MenuBottom_NFC',
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
                                                      id: 'containerFloatPanel_MembershipDetails_MenuBottom_NFCTxt',
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
                                             id: 'containerFloatPanel_MembershipDetails_MenuBottom_DeleteCard',
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
                                                      id: 'btnFloatPanel_MembershipDetails_MenuBottom_DeleteCard',
                                                      //  badgeText: '1',
                                                      margin: '0 0 0 0',
        
                                                      height: 36,
                                                      width: 36,
                                                      html: '<img src="resources/icons/CancelMembershipCard.png" width="26" height="26" alt="Company Name">',
                                                      ui: 'plain',
                                                      handler: function () {
        
                                                        //  MoveMembeshipCarousel(4);
        
        
        
                                                      }
                                                  },
                                                  {
                                                      xtype: 'container',
                                                      id: 'containerFloatPanel_MembershipDetails_MenuBottom_DeleteCardTxt',
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
                                                              margin: '-12 0 0 0',
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
                                   id: 'containerFloatPanel_MembershipDetails_MenuBottom_GetMembershipCard',
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
                                           id: 'containerFloatPanel_MembershipDetails_MenuBottom_GetMembershipCardInner',
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
                                                   id: 'btnFloatPanel_MembershipDetails_MenuBottom_GetMembershipCard',
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

                {
                    style: 'background-color: transparent',
                    hidden: true,
                    id: 'htmlFloatPanel_MembershipDetails_CardLevel',
                    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.Gold Membership Card</div>',
                },


                {
                    xtype: 'container',
                    id: 'containerFloatPanel_MembershipDetails_Loading',
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
                              id: 'containerFloatPanel_MembershipDetails_LoadingInner',
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
                    id: 'FloatPanel_MembershipDetails_Carousel',
                    style: 'background-color: transparent',
                    width: '95%',
                   // height: '70%',
                    indicator: true,
                    height: 220,
                   
                    listeners: {

                        activeitemchange: function (container, newCard, oldCard, index) {
                           

                        },

                    },


                    
                    items: [




                      {
                          xtype: 'container',
                          id: 'carouselFloatPanel_MembershipDetails_0',
                          style: ' background-color: transparent',
                          hidden: true,
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
                          width: '100%'
                          //  mode: 'image'
                      },
                      {
                          xtype: 'container',
                          id: 'carouselFloatPanel_MembershipDetails_1',
                          hidden: true,
                          height: 250,
                          width: '100%',

                      },
                   //{
                   //    xtype: 'container',
                   //    id: 'carouselFloatPanel_MembershipDetails_2',
                   //    hidden: true,                                 
                   //    height: 250,
                   //    width: '100%',

                   //},
                   //  {
                   //      xtype: 'container',
                   //      id: 'carouselFloatPanel_MembershipDetails_3',
                   //      hidden: true,
                   //      height: 250,
                   //      width: '100%',

                   //  }, {
                   //      xtype: 'container',
                   //      id: 'carouselFloatPanel_MembershipDetails_4',
                   //      hidden: true,                                    
                   //      height: 250,
                   //      width: '100%',

                   //  },

                    ]
                },




                {
                    xtype: 'container',
                    width: '100%',
                    // style: 'background-color:black;color:white',
                    style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
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
                                id: 'btnFloatPanel_MembershipDetails_EntitiledReward',
                                html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Campaigns</u></div>',
                            },

                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_MembershipDetails_EntitiledRewardOld',
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
                                 id: 'btnFloatPanel_MembershipDetails_EntitiledEnterprise',
                                 height: 22,
                                 hidden: true,
                                 width: '50%',
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
                    id: 'FloatPanel_MembershipDetails_CarouselEntitleReward_EntitleEnterprise',
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

                            //if (_FloatPanel_PreviewAdvertisement_isFirstLoad == 'N') {
                            //    var valCaptionText = ArrCaptionText[container.getActiveIndex()];
                            //    globalMediaFileName = ArrMediaFileName[container.getActiveIndex()];

                            //    if (ArrCaptionText[container.getActiveIndex()] != 'NULL') {
                            //        Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(false);
                            //        Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + valCaptionText + '</div>');
                            //    } else {
                            //        Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
                            //    }

                            //    var NextIndex = container.getActiveIndex() + 1;

                            console.log("1:" + _FloatPanel_MembershipDetails_isFirstLoad);
                            if (_FloatPanel_MembershipDetails_isFirstLoad == "Y") {
                                MoveMembeshipCarousel(CarouselIndex);
                            }



                            ///////////////////// FloatPanel_MembershipDetails_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(_FloatPanel_MembershipDetails_MembershipCode, _FloatPanel_MembershipDetails_EnterpriseAccNo);

                            //    if (myCarousel.getInnerItems().indexOf(oldCard) > myCarousel.getInnerItems().indexOf(newCard)) {
                            //        console.log("kanan");
                            //        Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + NextIndex).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                            //        //  Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + myCarousel.getInnerItems().indexOf(oldCard)).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');

                            //    } else {
                            //        console.log("kiri");
                            //        Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + container.getActiveIndex()).setHtml('<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">');
                            //    }

                            //}



                            //if (Ext.getCmp('FloatPanel_MembershipDetails_CarouselEntitleReward_EntitleEnterprise').getInnerItems().indexOf(oldCard) > Ext.getCmp('FloatPanel_MembershipDetails_CarouselEntitleReward_EntitleEnterprise').getInnerItems().indexOf(newCard)) {
                            //    console.log("kanan");
                            //    Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledEnterprise').setHtml('<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:11px;">Membership Outlet</div>');
                            //    Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Privileges</u></div>');
                            //  //  console.log('Current index:' + container.getActiveIndex());
                            //      //  Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + NextIndex).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                            //        //  Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + myCarousel.getInnerItems().indexOf(oldCard)).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');


                            //    } else {
                            //    console.log("kiri");
                            //    Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledEnterprise').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;"><u>Membership Outlet</u></div>');
                            //    Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:11px;font-weight:bold;">Membership Privileges</div>');
                            //  //  console.log('Current index:' + container.getActiveIndex());
                            //       // Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + container.getActiveIndex()).setHtml('<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">');
                            //    }



                        },

                    },


     
                    items: [

                            //{
                            //    style: ' background-color: transparent',
                            //    margin:'0 0 0 0',
                            //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
                            //},
                            {
                                xtype: 'container',
                                id: 'IDcarouselFloatPanel_MembershipDetails_Campaignlist',
                                style: 'background-color: transparent',
                                height:'75%',
                                width: '100%',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'

                                },
                                items: [
                                 


                                    /////////////
                                    {
                                        xtype: 'list',
                                      
                                    //flex: 1,
                                        //margin: '0 0 0 0',
                                        width: '100%',
                                        // store: 'EnterprisegetAllStore',
                                        store: 'MembershipCardCampaingEntitledLoadByMembershipCardCodeStore',
                                        id: 'FloatPanel_MembershipDetails_Campaignlist',
                                        // grouped: true,
                                        mode: 'SINGLE',
                                        //  indexBar: true,
                                        disableSelection: true,
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
                                        style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                       // itemTpl: '<div class="myContent" style="background-color:transparent;">' +
                                        itemTpl: '<div class="myContent" style="background-color:transparent;" onclick="FloatPanel_MembershipDetails_staging(' + "'" + '{CampaignCode}' + "'" + ',' + "'" + '{EnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignStartDate}' + "'" + ',' + "'" + '{CampaignEndDate}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{Remarks}' + "'" + ',' + "'" + '{isRulePopUp}' + "'" + ',' + "'" + '{CampaignName}' + "'" + ',' + "'" + '{Stamp}' + "'" + ',' + "'" + '{CountLoyaltyStamped}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{isRequiredStartEndDate}' + "'" + ',' + "'" + '{isCampaignExpired}' + "'" + ',' + "'" + '{CampaignDayLeft}' + "'" + ');">' +
                                       '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:0px 0px 0px 0px;height:60px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 0px;width:30px;height:30px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({ModifiedCampaignType}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedCampaignTypeShorted}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{CampaignName} - {ModifiedCountLoyaltyStamped}</font></td></tr></table>'+
                                                                                               // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedCampaignTypeShorted}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{CampaignName} - {ModifiedCountLoyaltyStamped}</font></td></tr></table>'   
                                                                                               
                                             '</div>',


                                     height: '100%',
                                        //height: 1800,
                                        // listeners: {
                                        //     itemsingletap: function (list, idx, target, records, evt) {
                                        //         var CampaignCode = records.get('CampaignCode');
                                        //         var EnterpriseHQAccNo = records.get('EnterpriseHQAccNo');
                                        //         var StartDate = records.get('CampaignStartDate');
                                        //         var EndDate = records.get('CampaignEndDate');
                                        //         var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                        //         //var EnterpriseName = records.get('EnterpriseName');     
                                        //         var EnterpriseName = records.get('EnterpriseName');
                                        //         var StampRuleRemarks = records.get('Remarks');
                                        //         var isStampRulePopUp = records.get('isRulePopUp');
                                        //         var CampaignName = records.get('CampaignName');
                                        //         var Stamp = records.get('Stamp');
                                        //         var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                        //         //var EnterpriseLogo = records.get('EnterpriseLogo');
                                        //         var EnterpriseLogo = records.get('EnterpriseLogo');
                                        //         var CampaignType = records.get('CampaignType');
                                        //         var EnterpriseAccNo = records.get('EnterpriseAccNo');

                                        //         var isRequiredStartEndDate = records.get('isRequiredStartEndDate');
                                        //         var isCampaignExpired = records.get('isCampaignExpired');
                                        //         var CampaignDayLeft = records.get('CampaignDayLeft');



                                        //         localStorage.setItem('StampCampaignCode', CampaignCode);
                                        //         localStorage.setItem('CampaignCode', CampaignCode);




                                        //         localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                        //         localStorage.setItem('CountStampCardRowShow', Stamp);
                                        //         //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                             

                                        //         if (MembershipTag == 'YES') {


                                        //             if (CampaignType == "Stamp Reward Loyalty Card") {
                                        //                 FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, "No End Date", SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);
                                        //                 //Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');
                                        //                 Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '</b></font>');
                                        //             }
                                        //             if (CampaignType == "Point Reward Loyalty Card") {
                                        //                 //  FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseName);
                                        //                 FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, isCampaignExpired);
                                        //             }
                                        //             if (CampaignType == "Membership Card Discount") {
                                        //                 FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                        //                 //alert(CampaignType)
                                        //                 //  FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseName);
                                        //                // FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, isCampaignExpired);
                                        //             }
                                        //             if (CampaignType == "Membership Card Contest") {
                                        //                 FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
                                        //                // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                        //             }

                                        //             if (CampaignType == "Membership Card Event") {
                                        //                 FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore(CampaignCode);
                                                      
                                        //             }

                                                    
                                               

                                        //         }
                                        //         if (MembershipTag == 'NO') {
                                                   
                                        //             FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
                                        //             Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>0/' + Stamp + '</b></font>');

                                        //         }

                                        //     },
                                        //     deselect: function (list, records) {

                                        //     }
                                        // },

                                    },
                                    // {
                                    //     xtype:'container',
                                    //     width:'100%',
                                    //     height:100
                                    // }
                                ]

                            },


                 ///////////////////////




                 {
                     xtype: 'container',
                     id: 'containerFloatPanel_MembershipDetails_Enterpriselist',
                     style: ' background-color: transparent',
                     height: '100%',
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
                             id: 'FloatPanel_MembershipDetails_EnterpriseEntitledList',
                             mode: 'SINGLE',
                             //  grouped: true,
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
                         id: 'containerFloatPanel_MembershipDetails_CardTransaction',
                         style: ' background-color: transparent',
                         height: '95%',
                         width: '100%',
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'left'

                         },
                         items: [
                             {
                                 xtype: 'list',
                                 height: '100%',
                                 store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                 id: 'FloatPanel_MembershipDetails_StampHistoryList',
                                 mode: 'SINGLE',
                                 grouped: true,
                                 disableSelection: true,
                                 itemTpl: '<div class="myContent">' +

                                 //  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal">{LastStampBy}</th></tr></thead></table>' +
                                  '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</div>' +



                                   '</div>',
                                 width: '100%',
                                 listeners: {
                                     itemsingletap: function (list, idx, target, records, evt) {

                                         var StampedCampaignCode = records.get('StampedCampaignCode');
                                         var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                         var StartDate = records.get('StartDate');
                                         var EndDate = records.get('EndDate');
                                         var SubscriberAccNo = records.get('SubscriberAccNo');
                                         var EnterpriseName = records.get('EnterpriseName');
                                         var StampRuleRemarks = records.get('StampRuleRemarks');
                                         var isStampRulePopUp = records.get('isStampRulePopUp');
                                         var StampCampaignName = records.get('StampCampaignName');
                                         var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                         var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                         localStorage.setItem('StampCampaignCode', StampedCampaignCode);

                                         localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                         localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                         //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                         FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);


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
},

                  








































        ]





    });
    return _FloatPanel_MembershipDetails;



}








//function FloatPanel_MembershipDetailsShow(ID) {
var MembershipTag;
function FloatPanel_MembershipDetailsShow(MembershipCardCode, EnterpriseAccountNo) {
    Ext.Viewport.remove(_FloatPanel_MembershipDetails);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipDetails());
    this.overlay.show();
    console.log("2:" + _FloatPanel_MembershipDetails_isFirstLoad);
    isFloatPanel_MembershipDetailsOpen = 'Y';


    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipDetails_GetMembershipCard').setHidden(false);
 
    // Ext.getCmp('btnFloatPanel_MembershipDetails_DeleteMembershipCard').setHidden(true);

    _FloatPanel_MembershipDetails_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipDetails_MembershipCode = MembershipCardCode;




    FloatPanel_MembershipDetails_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipDetailsBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          GetMembershipCardEnableClick_containerFloatPanel_MembershipDetailsBottom();
      }
    );
    MembershipTag = 'NO';  
    disabledBottomButton();
    _FloatPanel_MembershipDetails_isFirstLoad = "Y";
    Ext.getCmp('containerFloatPanel_MembershipDetailsBottom').setHidden(false);
}

var _FloatPanel_MembershipDetails_ID;
function FloatPanel_MembershipDetailsShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, AyohaUserAccountNo, ID, MembershipApprovalStatus) {





    Ext.Viewport.remove(_FloatPanel_MembershipDetails);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipDetails());
    this.overlay.show();
    isFloatPanel_MembershipDetailsOpen = 'Y';


    _FloatPanel_MembershipDetails_EnterpriseAccNo = EnterpriseHQAccountNo;
    _FloatPanel_MembershipDetails_ID = ID;
    MembershipTag = 'YES';
    //Ext.getCmp('btnFloatPanel_MembershipDetails_GetMembershipCard').setHidden(true);
    //Ext.getCmp('btnFloatPanel_MembershipDetails_DeleteMembershipCard').setHidden(false);

    // Ext.getCmp('containerFloatPanel_MembershipDetailsBottom').setHidden(true);
    //// Ext.getCmp('containerFloatPanel_MembershipDetailsBottom').setHidden(true);

    // Ext.getCmp('htmlFloatPanel_MembershipDetails_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
    // FloatPanel_MembershipDetails_MembershipCardLoadByEnterpriseAccNoStore(EnterpriseHQAccountNo, EnterpriseAccountNo);
   // FloatPanel_MembershipDetails_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode)
    FloatPanel_MembershipDetails_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, AyohaUserAccountNo)


    disabledBottomButton();
    _FloatPanel_MembershipDetails_isFirstLoad = "Y";

    if (MembershipApprovalStatus == "REQUEST") {
        Ext.getCmp('containerFloatPanel_MembershipDetailsBottom').setHidden(false);
    } else {
        Ext.getCmp('containerFloatPanel_MembershipDetailsBottom').setHidden(true);
    }

   

}



function FloatPanel_MembershipDetailsHide() {
if(isFloatPanel_MembershipDetailsOpen == 'Y'){
    _FloatPanel_MembershipDetails.hide(); isFloatPanel_MembershipDetailsOpen = 'N'; _FloatPanel_MembershipDetails_isFirstLoad = "N";
}
  
}







//var countEnterpriseSubscribedLoadFirst = 0
var _DataStore_MembershipCardLoadByEnterpriseAccNoStore;
var countMembershipCardLoadByEnterpriseAccNoStoreFirst;
var MmcCode = [];
var EnterpriseAccount = [];
var MembershipCardLevels = [];
function FloatPanel_MembershipDetails_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode) {

   
    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
    Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
        EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
        EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
        AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
        MembershipCardCode: MembershipCardCode
    });
    Ext.StoreMgr.get('MembershipCardAyohaUserMembershipCardStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
            EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
            EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
            AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
            MembershipCardCode: MembershipCardCode
        });
        // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
        var myStore = Ext.getStore('MembershipCardAyohaUserMembershipCardStore');
        var count = myStore.getCount();


        for (i = 0; i < count; i++) {
            var modelRecorded = myStore.getAt(i);
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
            global_FloatPanel_MembershipDetails_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipDetails_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');


            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
            console.log(MembershipCardBackgroundImg);

            //       Ext.getCmp('carouselFloatPanel_MembershipDetails_' + i).setHidden(false);
            //       Ext.getCmp('carouselFloatPanel_MembershipDetails_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
            //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
            //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
            //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                       '</div>' +
            //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');





            Ext.getCmp('carouselFloatPanel_MembershipDetails_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipDetails_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;"><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipDetails_Carousel').setHidden(false);

        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipDetails_MembershipCode = MembershipCode;
        FloatPanel_MembershipDetails_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        //  FloatPanel_MembershipDetails_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipDetails_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipDetails_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');


        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}





var global_FloatPanel_MembershipDetails_EnterprisesName;
var global_FloatPanel_MembershipDetails_EnterprisesLogo;
function FloatPanel_MembershipDetails_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, AyohaUserAccountNo) {

// alert(EnterpriseHQAccountNo)
// alert(EnterpriseAccountNo)
//alert(MembershipCardCode)
// alert(AyohaUserAccountNo)
    MmcCode.length = 0;
    Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').getProxy().setExtraParams({
        EnterpriseAccNo: EnterpriseAccountNo,
        EnterpriseHQAccNo: EnterpriseHQAccountNo,
        AyohaUserAccountNo: AyohaUserAccountNo,
        MembershipCardCode: MembershipCardCode
    });
    Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccountNo,
            EnterpriseHQAccNo: EnterpriseHQAccountNo,
            AyohaUserAccountNo: AyohaUserAccountNo,
            MembershipCardCode: MembershipCardCode
        });
        // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
        var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore');
        var count = myStore.getCount();


        var modelRecorded = myStore.getAt(0);
        var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
        var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
        var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
        var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
        var MembershipCardType = modelRecorded.get('MembershipCardType');
        var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedAyohaUserAccountNo');
        var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
        var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
        var MembershipCardCode = modelRecorded.get('MembershipCardCode');
        var ModifiedMembershipNo = modelRecorded.get('ModifiedMembershipNo');
        var ValidUntilDateMonthYearOnly = modelRecorded.get('ValidUntilDateMonthYearOnly');
        var ModifiedMembershipApprovalStatus = modelRecorded.get('ModifiedMembershipApprovalStatus');
        var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
        var ModifiedMemberSinceDate = modelRecorded.get('ModifiedMemberSinceDate');
        var isRequiredApproval = modelRecorded.get('isRequiredApproval');
        var MembershipCardBackgroundImg_back = modelRecorded.get('MembershipCardBackgroundImg_back');
        var ModifiedMarginMembershipApprovalStatus= modelRecorded.get('ModifiedMarginMembershipApprovalStatus');
      //  var AyohaUserAccountNo=modelRecorded.get('AyohaUserAccountNo');

        global_FloatPanel_MembershipDetails_EnterprisesName = modelRecorded.get('EnterprisesName');
        global_FloatPanel_MembershipDetails_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
        localStorage.setItem("MembershipCardName",modelRecorded.get('MembershipCardName'));
        localStorage.setItem("MembershipCardType", modelRecorded.get('MembershipCardType'));
        localStorage.setItem("MembershipCardFee", modelRecorded.get('MembershipCardFee'));
        localStorage.setItem("MembershipCardFeePaymentCycle", modelRecorded.get('MembershipCardFeePaymentCycle'));
        localStorage.setItem("StrExpiredDate", modelRecorded.get('StrExpiredDate'));
        localStorage.setItem("isRequiredApproval", modelRecorded.get('isRequiredApproval'));
        localStorage.setItem("AyohaUserPhoto", modelRecorded.get('AyohaUserPhoto'));
        localStorage.setItem("AyohaUserAccountName", modelRecorded.get('AyohaUserAccountName'));
        localStorage.setItem("MembershipCardCode", MembershipCardCode);
        localStorage.setItem("MembershipCardID", _FloatPanel_MembershipDetails_ID);
        localStorage.setItem("AyohaUserAccountNo", AyohaUserAccountNo);
        localStorage.setItem("EnterpriseHQAccountNo", EnterpriseHQAccountNo);
        

        MmcCode.push(MembershipCardCode);

        console.log(MembershipCardBackgroundImg);

        //       Ext.getCmp('carouselFloatPanel_MembershipDetails_' + i).setHidden(false);
        //       Ext.getCmp('carouselFloatPanel_MembershipDetails_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
        //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
        //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
        //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
        //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
        //                                       '</div>' +
        //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');

   



        Ext.getCmp('carouselFloatPanel_MembershipDetails_0').setHidden(false);
     
        Ext.getCmp('carouselFloatPanel_MembershipDetails_0').setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;border-color:white;border-style:solid;border-width:1px;">' +
                                     //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                      //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
 // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
  ModifiedMembershipApprovalStatus +
                                        '<br><table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:'+ModifiedMarginMembershipApprovalStatus+'" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMembershipNo + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-24px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMemberSinceDate + '</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-18px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                  '</div>' +




                                       '</div>');


        Ext.getCmp('carouselFloatPanel_MembershipDetails_1').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg_back + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;border-color:white;border-style:solid;border-width:1px;"/>');
        Ext.getCmp('carouselFloatPanel_MembershipDetails_1').setHidden(false);
        Ext.getCmp('FloatPanel_MembershipDetails_Carousel').setHidden(false);
       
        Ext.getCmp('htmlFloatPanel_MembershipDetails_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">' + MembershipCardType + '</div>');

        var MembershipCode = MmcCode[0];
        _FloatPanel_MembershipDetails_MembershipCode = MembershipCode;
        _FloatPanel_MembershipDetails_SubscriberAccNo=AyohaUserAccountNo;

        FloatPanel_MembershipDetails_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode,AyohaUserAccountNo);
      
        Ext.getCmp('containerFloatPanel_MembershipDetails_Loading').setHidden(true);

        _FloatPanel_MembershipDetails_isFirstLoad = "Y";

        Ext.Viewport.setMasked(false);










    });
    task.delay(500);




}

function FloatPanel_MembershipDetails_StampCampaignLoadByEnterpriseAccNoStore(EnterpriseAccountNo) {
    Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore').getProxy().setExtraParams({
        EnterpriseAccNo: EnterpriseAccountNo
    });
    Ext.StoreMgr.get('StampCampaignLoadByGetLoyaltyCardStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccountNo
        });

        var myStore = Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore');

        Ext.Viewport.setMasked(false);





    });
    task.delay(2000);
}




function FloatPanel_MembershipDetails_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MMCCode,AyohaUserAccountNo) {
//
   // Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').removeAll();
    var mmmCode = MMCCode;
    //alert(mmmCode);
    if (mmmCode) {
        //Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
        //    MembershipCardCode: MMCCode,
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        //});
        //Ext.StoreMgr.get('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').load();
        var task = Ext.create('Ext.util.DelayedTask', function () {
            Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
                MembershipCardCode: MMCCode,
                SubscriberAccNo: AyohaUserAccountNo,
            });
            Ext.StoreMgr.get('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').load();
            var myStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
            var Count = myStore.getCount();
           
            //  _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
            Ext.Viewport.setMasked(false);

        });
        task.delay(700);
    }
}


function FloatPanel_MembershipDetails_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo) {
    // Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').removeAll();

    console.log(MembershipCode);
    console.log(EnterpriseAccountNo);
    if (MembershipCode) {
        //Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
        //    MembershipCardCode: MembershipCode,
        //    EnterpriseHQAccNo: EnterpriseAccountNo,
        //});
        //Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
        var task = Ext.create('Ext.util.DelayedTask', function () {
            Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
                MembershipCardCode: MembershipCode,
                EnterpriseHQAccNo: EnterpriseAccountNo,
            });
            Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
            var myStore = Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore');
            var StampCount = myStore.getCount();

            //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
            // adjustHeight();
            Ext.Viewport.setMasked(false);

        });
        task.delay(500);
    }
}





function MembershipCardDelete() {


    var obj = {
        "ID": _FloatPanel_MembershipDetails_ID,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "MembershipCardCode": _FloatPanel_MembershipDetails_MembershipCode,
        "CreatedBy": GetCurrentUserLogin(),

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Memberships/MembershipsDelete',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Delete Membership Card Success!");
                FloatPanel_MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore();
                FloatPanel_MembershipDetailsHide();
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

                //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

            }
            else {

                swalFireFail("Delete Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });
}




function getMembershipCard() {


}


function MoveMembeshipCarousel(Idx) {
    console.log(MembershipTag)
    console.log(Idx)

    if (Idx >= 2) {
        return;
    }


    if (Idx == 0) {
        Ext.getCmp('FloatPanel_MembershipDetails_CarouselEntitleReward_EntitleEnterprise').setActiveItem(0);
        FloatPanel_MembershipDetails_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(_FloatPanel_MembershipDetails_MembershipCode);
        Ext.getCmp('htmlMembershipTxt').setHtml('<font size=1 color=purple><b><u>Membership</u></b></font>');
        Ext.getCmp('htmlPrivillageTxt').setHtml('<font size=1 color=purple><b><u>Privillage</u></b></font>');



        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Ext.getCmp('htmlMembershipTxt02').setHtml('<font size=1 color=grey>Membership</font>');
        Ext.getCmp('htmlEntitleOutletTxt').setHtml('<font size=1 color=grey>Entitle Outlet</font>');

        if (MembershipTag == 'NO') {
            return;
        }


        Ext.getCmp('htmlCardTxt01').setHtml('<font size=1 color=grey>Card</font>');
        Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=grey>Transaction</font>');
        Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=grey>Card Detail</font>');
        Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=grey>Info</font>');
        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=grey>Unsubscribe</font>');
        Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=grey>Membership Card</font>');
        Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledReward').setHtml('<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Campaign</u></div>');

    }
    if (Idx == 1) {
        Ext.getCmp('FloatPanel_MembershipDetails_CarouselEntitleReward_EntitleEnterprise').setActiveItem(1);
        FloatPanel_MembershipDetails_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(_FloatPanel_MembershipDetails_MembershipCode, _FloatPanel_MembershipDetails_EnterpriseAccNo);
        Ext.getCmp('htmlMembershipTxt02').setHtml('<font size=1 color=purple><b><u>Membership</u></b></font>');
        Ext.getCmp('htmlEntitleOutletTxt').setHtml('<font size=1 color=purple><b><u>Entitle Outlet</u></b></font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Ext.getCmp('htmlMembershipTxt').setHtml('<font size=1 color=grey>Membership</font>');
        Ext.getCmp('htmlPrivillageTxt').setHtml('<font size=1 color=grey>Privillage</font>');

        if (MembershipTag == 'NO') {
            return;
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                        
        Ext.getCmp('htmlCardTxt01').setHtml('<font size=1 color=grey>Card</font>');
        Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=grey>Transaction</font>');
        Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=grey>Card Detail</font>');
        Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=grey>Info</font>');
        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=grey>Unsubscribe</font>');
        Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=grey>Membership Card</font>');
        Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Entitle Outlet</u></div>');

    }
    if (Idx == 2) {


        if (MembershipTag == 'NO') {
            return;
        }
        Ext.getCmp('FloatPanel_MembershipDetails_CarouselEntitleReward_EntitleEnterprise').setActiveItem(2);
        FloatPanel_LoyaltyCard_StampHistory_LoyaltyStampLoadBySubscriberAccNoStore();
        Ext.getCmp('htmlCardTxt01').setHtml('<font size=1 color=purple><b><u>Card</u></b></font>');
        Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=purple><b><u>Transaction</u></b></font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////   
        Ext.getCmp('htmlMembershipTxt02').setHtml('<font size=1 color=grey>Membership</font>');
        Ext.getCmp('htmlEntitleOutletTxt').setHtml('<font size=1 color=grey>Entitle Outlet</font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Ext.getCmp('htmlMembershipTxt').setHtml('<font size=1 color=grey>Membership</font>');
        Ext.getCmp('htmlPrivillageTxt').setHtml('<font size=1 color=grey>Privillage</font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////  
        Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=grey>Card Detail</font>');
        Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=grey>Info</font>');
        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=grey>Unsubscribe</font>');
        Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=grey>Membership Card</font>');
        Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Card Transaction</u></div>');
    }
    if (Idx == 3) {
        if (MembershipTag == 'NO') {
            return;
        }
        Ext.getCmp('FloatPanel_MembershipDetails_CarouselEntitleReward_EntitleEnterprise').setActiveItem(3);
        Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=purple><b><u>Card Detail</u></b></font>');
        Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=purple><b><u>Info</u></b></font>');
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Ext.getCmp('htmlCardTxt01').setHtml('<font size=1 color=grey>Card</font>');
        Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=grey>Transaction</font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////   
        Ext.getCmp('htmlMembershipTxt02').setHtml('<font size=1 color=grey>Membership</font>');
        Ext.getCmp('htmlEntitleOutletTxt').setHtml('<font size=1 color=grey>Entitle Outlet</font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Ext.getCmp('htmlMembershipTxt').setHtml('<font size=1 color=grey>Membership</font>');
        Ext.getCmp('htmlPrivillageTxt').setHtml('<font size=1 color=grey>Privillage</font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                      
        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=grey>Unsubscribe</font>');
        Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=grey>Membership Card</font>');
        Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Card Detail</u></div>');
    }
    if (Idx == 4) {
        if (MembershipTag == 'NO') {
            return;
        }

        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=purple><b><u>Unsubscribe</u></b></font>');
        Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=purple><b><u>Membership Card</u></b></font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=grey>Card Detail</font>');
        Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=grey>Info</font>');
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Ext.getCmp('htmlCardTxt01').setHtml('<font size=1 color=grey>Card</font>');
        Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=grey>Transaction</font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////   
        Ext.getCmp('htmlMembershipTxt02').setHtml('<font size=1 color=grey>Membership</font>');
        Ext.getCmp('htmlEntitleOutletTxt').setHtml('<font size=1 color=grey>Entitle Outlet</font>');
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        Ext.getCmp('htmlMembershipTxt').setHtml('<font size=1 color=grey>Membership</font>');
        Ext.getCmp('htmlPrivillageTxt').setHtml('<font size=1 color=grey>Privillage</font>');
        //////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        Ext.getCmp('btnFloatPanel_MembershipDetails_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Unsubcribe Membership</u></div>');
        Ext.getCmp('FloatPanel_MembershipDetails_CarouselEntitleReward_EntitleEnterprise').setActiveItem(4);
        Swal.fire({
            title: 'Are you sure To delete?',
            text: "Unsubscribe membership  will effect your Current Point,Stamp and Previllage card. Your are no longer accessible to this card. Think Carefully before proccedd !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (result.isConfirmed) {
                MembershipCardDelete();
            }
        });
    }

}




function GetMembershipCardEnableClick_containerFloatPanel_MembershipDetailsBottom() {


    var obj = {
        "CampaignEnterpriseAccNo": _FloatPanel_MembershipDetails_EnterpriseAccNo,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        //"MembershipByMethod": "AyohaStoreRequest",
        "MembershipByMethod": GetMembershipByMethod(),
        "ReferalSubscriberAccNo": "NA",
        "MembershipCardCode": _FloatPanel_MembershipDetails_MembershipCode,
        "CreatedBy": GetCurrentUserLogin(),

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Memberships/MembershipsInsert',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Get Membership Card Success!");
                FloatPanel_MembershipDetailsHide();
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

                //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

            }
            else {

                swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });
}



function disabledBottomButton() {

    Ext.getCmp('btnFloatPanel_MembershipDetails_MenuBottom_CardTransaction').setHtml('<img src="resources/icons/cardTransactionDisabled.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlCardTxt01').setHtml('<font size=1 color=#DCDCDC>Card</font>');
    Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=#DCDCDC>Transaction</font>');



    Ext.getCmp('btnFloatPanel_MembershipDetails_MenuBottom_CardDetailsInfo').setHtml('<img src="resources/icons/disableCardInfo.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=#DCDCDC>Card Detail</font>');
    Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=#DCDCDC>Info</font>');





    Ext.getCmp('btnFloatPanel_MembershipDetails_MenuBottom_NFC').setHtml('<img src="resources/icons/NFCdisabled.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlNFCTxt').setHtml('<font size=1 color=#DCDCDC>NFC</font>');
    Ext.getCmp('htmlEnabledTxt').setHtml('<font size=1 color=#DCDCDC>Enabled</font>');





    Ext.getCmp('btnFloatPanel_MembershipDetails_MenuBottom_DeleteCard').setHtml('<img src="resources/icons/disableCardUnsubscribe.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=#DCDCDC>Unsubscribe</font>');
    Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=#DCDCDC>Membership Card</font>');

}


function FloatPanel_MembershipDetails_staging(CampaignCode,EnterpriseHQAccNo,CampaignStartDate,CampaignEndDate,EnterpriseName,Remarks,isRulePopUp,CampaignName,Stamp,CountLoyaltyStamped,EnterpriseLogo,CampaignType,EnterpriseAccNo,isRequiredStartEndDate,isCampaignExpired,CampaignDayLeft){
    LoadingPanelShow(getLoadingIcon(), 'Loading...');
   
    if (CampaignType == "Stamp Reward Loyalty Card") {
        FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, CampaignStartDate, CampaignEndDate, globalFloatPanel_MembershipDetailsPage_SubscriberAccNo, EnterpriseName, Remarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo,isCampaignExpired,CampaignDayLeft);
        //Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');
        Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '</b></font>');
    }
    if (CampaignType == "Point Reward Loyalty Card") {
        //  FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseName);
        FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, CampaignEndDate, isRequiredStartEndDate, isCampaignExpired);
    }
    if (CampaignType == "Membership Card Discount") {
        FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
        //alert(CampaignType)
        //  FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseName);
       // FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, isCampaignExpired);
    }
    if (CampaignType == "Membership Card Contest") {
        FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
       // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
    }

    if (CampaignType == "Membership Card Event") {
        FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore(CampaignCode);
        //FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
       // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
    }










localStorage.setItem('StampCampaignCode', CampaignCode);
localStorage.setItem('CampaignCode', CampaignCode);




localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
localStorage.setItem('CountStampCardRowShow', Stamp);
}