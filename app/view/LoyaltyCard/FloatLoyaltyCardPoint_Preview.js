
Ext.define('ianMizi.view.LoyaltyCard.FloatLoyaltyCardPoint_Preview', {

});


var _FloatLoyaltyCardPoint_Preview;


var isFloatLoyaltyCardPoint_PreviewOpen = 'N';



var _FloatLoyaltyCardPoint_Preview_isFirstLoad = "N";







function FloatLoyaltyCardPoint_Preview() {

    _FloatLoyaltyCardPoint_Preview =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatLoyaltyCardPoint_PreviewID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 400,

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
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



         items: [




             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 //  style: "background-color: transparent;",
                 style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                     type: 'fit',

                 },
                 items: [
                       {
                           xtype: 'container',
                           width: '100%',

                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'

                           },
                           items: [

                               /////

                               {

                                   xtype: 'container',
                                   width: '100%',
                                   // width: 40,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatLoyaltyCardPoint_PreviewHeader',
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
                                                            id: 'btnFloatLoyaltyCardPoint_PreviewBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatLoyaltyCardPoint_Preview.hide(Ext.fx.Animation({
                                                                    type: 'slideOut',
                                                                    direction: 'left',
                                                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatLoyaltyCardPoint_PreviewOpen = 'N';
                                                                _FloatLoyaltyCardPoint_Preview_isFirstLoad = "N";
                                                            }
                                                        },

                                                         {
                                                             xtype: 'spacer',

                                                         },

                                                          {
                                                              margin: '-15 -7 0 0',
                                                              html: '<font size=2 color=white><b>PREVIEW</b></font>'
                                                          },


                                                              {
                                                                  xtype: 'container',
                                                                  margin: '1 0 0 -5',
                                                                  //hidden: true,
                                                                  //style: 'background-color: white;',
                                                                  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                                                                  height: 35,
                                                                  width: 35,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatLoyaltyCardPoint_PreviewPicture',
                                                                  layout: {

                                                                      type: 'hbox',
                                                                      pack: 'right',
                                                                      align: 'right'
                                                                  },
                                                                  items: [
                                                                      {
                                                                          xtype: 'button',
                                                                          height: 40,
                                                                          width: 40,
                                                                          margin: '0 0 0 3',
                                                                          id: 'btnFloatLoyaltyCardPoint_Preview_PointIcon',
                                                                          //badgeText: "2",
                                                                          html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/WhitePointStamp.png"  style="width: 30px; height: 30px; border:2px none grey; border-radius: 0%;  margin:-1px 0px 0px 2px"></div>',
                                                                          ui: 'plain',
                                                                          handler: function () {



                                                                              _FloatLoyaltyCardPoint_Preview.hide(Ext.fx.Animation({
                                                                                  type: 'slideOut',
                                                                                  direction: 'right',
                                                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                                                  duration: 250

                                                                              }));
                                                                              isFloatLoyaltyCardPoint_PreviewOpen = 'N';
                                                                              _FloatLoyaltyCardPoint_Preview_isFirstLoad = "N";

                                                                          }
                                                                      },



                                                                  ]
                                                              },










                                          ]

                               },



                               ///////////

                               {
                                   xtype: 'container',
                                   style: "background-color: transparent",
                                   margin: '-25 0 0 0',
                                   width: '100%',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   items: [
           {
               xtype: 'container',

               width: '100%',
               layout: {
                   type: 'vbox',
                   pack: 'center',
                   align: 'center'

               },
               items: [

                   {
                       margin: '2 0 0 0',
                       height: 130,
                       width: 130,
                       id: 'htmlFloatLoyaltyCardPoint_Preview_Logo',
                       html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
                   },
                   {
                       xtype: 'container',

                       width: '100%',
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'center'

                       },
                       items: [

                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatLoyaltyCardPoint_Preview_EnterpriseName',
                                html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >Community Coffee Roastes Sdn Bhd</div>',
                            },
                             {
                                 xtype: 'container',
                                 style: "background-color: white;border-bottom:1px solid white;",
                                 height: 2,
                                 width: '85%',
                                 margin: '-3 0 0 0',
                                 //style: {

                                 //    background: 'white',

                                 //},
                                 //layout: {
                                 //    type: 'hbox',
                                 //    pack: 'center',
                                 //    align: 'center'

                                 //},
                             },
                       //     {
                       //         margin: '-8 0 0 0',

                       //         html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                       //     },
                       //      {
                       //          margin: '-7 0 0 0',

                       //          html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                       //      },
                       ]

                   }

               ]
           },







                                //{
                                //    xtype: 'container',
                                //    height: 1,
                                //    width: '90%',
                                //    style: {

                                //        background: 'white',

                                //    },
                                //    layout: {
                                //        type: 'hbox',
                                //        pack: 'center',
                                //        align: 'center'

                                //    },
                                //},



                                //////////////////////

                                {
                                    xtype: 'container',
                                    id: 'containerFloatLoyaltyCardPoint_Preview',
                                    width: '100%',
                                    // height: 35,

                                    style: "background-color:transparent;",
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [


                                         {
                                             margin: '-1 0 0 0',

                                             id: 'htmlFloatLoyaltyCardPoint_Preview_CampaignName',

                                             html: '<font size=2 color=white><b>Ramadhan 2021!</b></font>',
                                         },
                                        {
                                            xtype: 'container',
                                            id: 'containerLoyaltyCardStampbottom',
                                            hidden: true,
                                            style: "background-color: transparent",
                                            //style: "background-color: #F35B57;",

                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'

                                            },


                                            items: [




                                            ]

                                        },
                                    ]
                                },








                                /////////////


























                                 //{
                                 //    zIndex: 40,
                                 //    margin: '-25 0 0 0',
                                 //    html: '<div class="btn--shockwave is-active"><div class="transboxFloatLoyaltyCardPoint_PreviewContainer"></div></div>',
                                 //    height: 100,
                                 //    width: '100%',
                                 //},
                                 {
                                     xtype: 'container',
                                     height: 50,
                                     width: '90%',
                                     margin: '5 0 0 0',
                                     //// style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',   
                                     //style: 'background-color: rgb(255 230 0);background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                                     //  style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                                     // style: 'background-color:white;border-radius: 10px 10px 10px 10px;',
                                     // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                     style: {

                                         background: 'transparent',

                                     },
                                     layout: {
                                         type: 'vbox',
                                         pack: 'center',
                                         align: 'center'

                                     },
                                     items: [


                                         {
                                             margin: '-17 0 0 0',
                                             //  html:'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:50px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;width:100%;height:100px">1000</div>',
                                             id: 'htmlFloatLoyaltyCardPoint_Preview_SumPoint',
                                             html: '<font size="15" color="white"><b>0</b></font>'
                                         },
                                          {
                                              margin: '-17 0 0 0',
                                              html: '<font size=2 color=white><b>Points</b></font>'
                                          },


                                     {
                                         xtype: 'container',
                                         width: '100%',
                                         hidden: true,
                                         margin: '-65 0 0 -7',
                                         style: {

                                             background: 'transparent',

                                         },
                                         layout: {
                                             type: 'hbox',
                                             pack: 'right',
                                             align: 'right'

                                         },
                                         items: [

                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 margin: '-2 0 0 0',
                                                 style: {

                                                     background: 'transparent',

                                                 },
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'right',
                                                     align: 'right'

                                                 },
                                                 items: [

                                                   {
                                                       xtype: 'button',
                                                       id: 'btnRedeem_FloatLoyaltyCardPoint_Preview',
                                                       //  badgeText: '1',
                                                       margin: '-5 15 0 0',
                                                       height: 55,
                                                       width: 55,
                                                       html: '<div class="blink_me"><img src="resources/icons/gift-hearts-icon.png" width="45" height="45" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();
                                                           LoyaltyCardRedeemListShow();
                                                       }
                                                   },
                                                    {
                                                        //margin: '10 0 0 0',
                                                        margin: '-11 15 0 0',
                                                        id: 'htmlBtnFloatLoyaltyCardPoint_PreviewRedeem',
                                                        html: '<div class="blink_me"><button OnClick="LoyaltyCardRedeemListShow()" class="buttonLoyaltyCardPointRedeem">Redeem</button></div>'
                                                    }

                                                 ]

                                             },


                                         ]
                                     }

                                     ]
                                 },
                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      height: 10,
                                  },
                                   ]

                               },



                               ////////////////////////////////////////////

                               {
                                   xtype: 'container',
                                   id: 'containerFloatLoyaltyCardPoint_PreviewMasterHeader',
                                   width: '100%',
                                   height: 25,

                                   // style: "background-color: white",
                                   // style: 'border-bottom:1px solid #D25959;background-color:transparent',
                                   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                   // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                   //style: "background-color: #F35B57;",

                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left'

                                   },
                                   items: [

                                       {
                                           width: 20,
                                           height: 20,
                                           margin: '0 0 0 0',
                                           id: 'htmlFloatLoyaltyCardPoint_PreviewMasterHeaderIcon',
                                           html: '<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">',
                                       },
                                       {
                                           //  width: 150,
                                           margin: '0 0 0 5',
                                           id: 'htmlFloatLoyaltyCardPoint_PreviewMasterHeaderTxt',
                                           html: '<font size=2 color=black>Redeem Prize</font>'
                                       },


                                   ]

                               },


                               /////////////////////////////


                               {
                                   xtype: 'container',
                                   // docked: 'top',
                                   // hidden:true,
                                   //  margin: '0 0 0 0',
                                   //  docked: 'bottom',
                                   style: 'background-color: transparent;',
                                   id: 'tabpanelFloatLoyaltyCardPoint_Preview',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                   zIndex: 90,
                                   //height:200,
                                   // autoHeight:true,
                                   // height: '100%',
                                   // flex:1,
                                   //  maxHeight:'100%',
                                   //height:'63%',
                                   width: '100%',
                                   // margin: '70 0 0 0',

                                   layout: {

                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   items: [

                                       ///////////////////////////////////////////////
                                       {
                                           xtype: 'carousel',

                                           //hidden: true,
                                           id: 'carouselFloatLoyaltyCardPoint_Preview',
                                           style: 'background-color:#f7f7f7',
                                           width: '100%',
                                           height: '100%',
                                           indicator: false,
                                           listeners: {

                                               activeitemchange: function (container, newCard, oldCard, index) {
                                                   // console.log('Current index:' + container.getActiveIndex());
                                                   console.log("1:" + _FloatLoyaltyCardPoint_Preview_isFirstLoad);
                                                   if (_FloatLoyaltyCardPoint_Preview_isFirstLoad == "Y") {
                                                       FloatPanel_MoveCarousel_Preview(container.getActiveIndex());
                                                   }

                                                   //console.log("1:" + _FloatPanel_MembershipCardList_Upgrade_isFirstLoad);
                                                   //if (_FloatPanel_MembershipCardList_Upgrade_isFirstLoad == "Y") {
                                                   //    MoveMembeshipCarousel(CarouselIndex);
                                                   //}




                                               },

                                           },


                                           margin: '0 0 0 0',
                                           items: [

                                                   //{
                                                   //    style: ' background-color: transparent',
                                                   //    margin:'0 0 0 0',
                                                   //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
                                                   //},
                                                   {
                                                       xtype: 'container',
                                                       id: 'carouselFloatLoyaltyCardPoint_Preview_RedeemItem',
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
                                                               // height: '64%',
                                                               height: '100%',
                                                               // height: 200,
                                                               //   flex: 2,
                                                               store: 'PointCampaignRedeemLoadByPointCampaignCodeStore',
                                                               id: 'List_FloatLoyaltyCardPoint_Preview_RedeemPrize',
                                                               mode: 'SINGLE',
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

                 //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed;width: 100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal;width: 70px;"><img src="{AccPicProfile}" style="width: 62px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px;" /></th><th onclick=" MultipleTrackingMap_LiveTrackingZoomTo({ID})" style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal"><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal">{EmployeeName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/CheckInRed1.png" style="width: 16px; height: 16px;" />Check-In Location:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{EndPointNameModified}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/latestDestination.png" style="width: 16px; height: 16px;" />Movement Purpose:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{MovementPurpose}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/TimerRed3.png" style="width: 16px; height: 16px;" />Check-In DateTime:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{DateDT}</div></th></tr></thead></table>'

                 // <tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:bottom;word-break:normal"><div><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeem">Redeem</button></div></td></tr>
                  //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed;width: 100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:2px 2px;text-align:left;vertical-align:middle;word-break:normal;"><img src="https://setkita.com/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;" /></th><th onclick=" MultipleTrackingMap_LiveTrackingZoomTo({ID})" style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{ItemName}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;">Point Required:</div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{ItemPoint}</div></th></tr></thead></table>'


                  // '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ModifiedItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{ItemPoint}</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Cost:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{ItemPrizePriceCost}</b></div></th></tr></thead></table>'
                 //'<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="https://setkita.com/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
               //  + '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointShow_Edit({ID})" class="buttonLoyaltyCardPointRedeemList">Edit</button></div>'
                   '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ModifiedItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-45px 0px 0px 0px;"><button OnClick="CheckRedeemEntitle({ID})" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'

            + '</div>',

                                                               width: '100%',

                                                               listeners: {


                                                                   itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                                                   },

                                                                   itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                                                   }
                                                               }






                                                           },
                                                       ]

                                                   },


                                        ///////////////////////




                                        {
                                            xtype: 'container',
                                            id: 'carouselFloatLoyaltyCardPoint_Preview_RedeemPrizeHistory',
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
                                                    // height: '64%',
                                                    height: '100%',
                                                    // height: 200,
                                                    //   flex: 2,
                                                    store: 'AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore',
                                                    id: 'List_FloatLoyaltyCardPoint_Preview_RedeemPrizeHistory',
                                                    mode: 'SINGLE',
                                                    disableSelection: true,
                                                    // disableSelection: true,


                                                    itemTpl: '<div class="myContent">' +

                                                    //  '<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Subscribtion</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">{SubscribedCloudReceipt}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">{SubscribedNewsAndPromotion}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><b>Start subscribtion date:{SubscribedDate}</b><br><br></td></tr></table>' +

                                                      //'<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:left" colspan="3">Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="3">Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{ItemCode}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="3">Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{RedeemPoint}</div></td></tr></table>' +

                                                     //ori //'<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemHistoryStatus} - {RedeemHistoryStatusDate} </div></td></tr></table>' +
                                                      '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">No.{RowNumber}</div>' +
                                                     //  '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:10px 0px 0px 0px;width:100%;text-align:left;color:black;">Redeem ID:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-10px 0px 0px 0px;width:100%;text-align:left;color:black;">{ID}</div></div>' +
                                                      ///jadi//'<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemHistoryStatus} - {RedeemHistoryStatusDate}</div></td></tr></table>' +
                                                                             '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br>{ModifiedRedeemHistoryStatus}</td></tr></table>' +
                                                                 '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-33px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonStatusLog" onClick="FloatPanel_AyohaRedeemPrizeHistoryLogShow({ID})">Status Log</button></div>' +
                                                    '</div>',

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
                                            ]

                                        },



                                            ///////////////////////////////////////////////////////
                                            {
                                                xtype: 'container',
                                                id: 'carouselFloatPanel_AyohaReward_AyohaPointHistory',
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
                                                        // height: '64%',
                                                        height: '100%',
                                                        // height: 200,
                                                        //   flex: 2,
                                                        store: 'LoyaltyPointLoadByPointCampaignCodeStore',
                                                        id: 'List_FloatLoyaltyCardPoint_Preview_AyohaRewardPointHistory',
                                                        mode: 'SINGLE',
                                                        disableSelection: true,
                                                        grouped: true,
                                                        // disableSelection: true,
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

                                                        //  '<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Subscribtion</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">{SubscribedCloudReceipt}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">{SubscribedNewsAndPromotion}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><b>Start subscribtion date:{SubscribedDate}</b><br><br></td></tr></table>' +

                                                          //'<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:left" colspan="3">Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="3">Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{ItemCode}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="3">Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{RedeemPoint}</div></td></tr></table>' +

                                                         //ori //'<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemHistoryStatus} - {RedeemHistoryStatusDate} </div></td></tr></table>' +

                                                         //  '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:10px 0px 0px 0px;width:100%;text-align:left;color:black;">Redeem ID:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-10px 0px 0px 0px;width:100%;text-align:left;color:black;">{ID}</div></div>' +
                                                          ///jadi//'<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemHistoryStatus} - {RedeemHistoryStatusDate}</div></td></tr></table>' +

                                                          '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><thead><tr><th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal;width:80%;background-color:transparent;"><div style="font-family:Arial, sans-serif;font-size:25px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;">RM{Amount}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Receipt/Bill No:{ReceiptBillID}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedBy}</th><th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal;width:20%;background-color:transparent;"><div style="font-family:Arial, sans-serif;font-size:35px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:center">{CountsPoint}</div><br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;margin:-30px 0px 0px 0px;text-align:center">Point(s)</div></th></tr></thead></table>' +


                                                                               // '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{PointCampaignName}</div><br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-20px 0px 0px 0px;">RM{Amount}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-1px 0px 0px 0px;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly} <b>-({PointedBy})</b></div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:25px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;text-align:right">{CountsPoint}-Point(s)</div></td></tr></table>' +

                                                        '</div>',

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
                                                ]

                                            },

                                            ////////////////////////////////////////////////////















                                           ]
                                       },




















                                       ///////////////////////////////////////////

                                       ////{
                                       ////    xtype: 'list',
                                       ////    // height: '64%',
                                       ////    height: '100%',
                                       ////    // height: 200,
                                       ////    //   flex: 2,
                                       ////    store: 'AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore',
                                       ////    id: 'FloatLoyaltyCardPoint_PreviewID',
                                       ////    mode: 'SINGLE',
                                       ////   disableSelection: true,
                                       ////    // disableSelection: true,


                                       ////    itemTpl: '<div class="myContent">' +

                                       ////          '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="FloatPanel_RedeemPrizeShow({ID})" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
                                       ////        //'<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="https://setkita.com/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
                                       ////     + '</div>',

                                       ////    width: '100%',
                                       ////    // height: 600,
                                       ////    // height: '100%',

                                       ////    listeners: {


                                       ////        itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                       ////        },

                                       ////        itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                       ////        }
                                       ////    }





                                       ////},






                                   ]
                               },



                               ///////////////////////////////////


                               {
                                   xtype: 'tabpanel',
                                   hidden: true,
                                   //  hidden:true,
                                   id: 'tabpanelFloatLoyaltyCardPoint_Previewori',
                                   // style: 'border-top:2px solid #ECF0F1;background: white;',
                                   // style: 'background-color: black;',
                                   // margin: '-20 0 0 -26',
                                   // margin: '25 0 0 0',

                                   //width: 200,
                                   width: '100%',
                                   height: 360,
                                   //height: 120,
                                   //height: 50,
                                   //  zIndex: 200,
                                   //  docked: 'bottom',
                                   tabBarPosition: 'top',
                                   ui: 'plain',
                                   // docked: 'bottom',

                                   initialize: function (c) {
                                       this.getTabBar().hide();
                                   },



                                   items: [



               {
                   xtype: 'container',
                   id: 'containerFloatLoyaltyCardPoint_PreviewMaster',
                   width: '100%',
                   height: 360,
                   //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                   style: "background-color: white;",
                   //style: "background-color: #F35B57;",
                   title: 'FloatLoyaltyCardPoint_PreviewMaster',
                   layout: {
                       type: 'vbox',
                       pack: 'center',
                       align: 'center'

                   },
                   listeners: {
                       initialize: function (c) {

                           this.element.on({
                               swipe: function (e, node, options) {
                                   if (e.direction == "left") {
                                       //  alert("Hey! I swipe left");
                                       Ext.getCmp('tabpanelFloatLoyaltyCardPoint_Preview').setActiveItem(1);
                                   } else {
                                       //  alert("Hey! I swipe right");

                                   }
                               }
                           });
                       }
                   },


                   items: [




                         {
                             xtype: 'list',
                             height: '100%',
                             store: 'FlatBillGetByIcStore',
                             id: 'FloatLoyaltyCardPoint_PreviewListID',
                             mode: 'SINGLE',
                             // disableSelection: true,
                             itemTpl: '<div class="myContent">' +
                                 // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                                 //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                                  // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                                 //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                               // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                              //backgroundimage '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-image: url(resources/icons/backgroundlistdowngrades.jpg);background-repeat:no-repeat;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                                //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

                                  //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div style="background-color: white; color: black; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:42px" ><font size=5>10</font><br>Point</div><b>{FlatBillShotDescModified}</b><br>{FlatBillDate} - {FlatBillAccountNo}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:left;font-size:16px;padding:0px 0px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                                  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{FlatBillShotDescModified}<br>{FlatBillDate} - {FlatBillAccountNo}<br><div style="border-bottom: 1px none black;border-top: 1px none black;background-color: white;">Total Paid:RM{FlatBillFinalAmount}</div></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal"><div style="border: 1px solid grey;height:60px;width:60px;border-radius: 60px;vertical-align:middle;text-align:center;"><div style="margin:10px 0px 0px 0px;"><font size=3><b>100</b></font></div><br><div style="margin:-20px 0px 0px 0px;"><font size=2><b>Point</b></font></div></div></th></tr></thead></table>' +




                                // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 74px" class="tg"><colgroup><col style="width: 49px"><col style="width: 25px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr></thead></table>'
                               // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
                            //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                               '</div>',
                             width: '100%',
                             listeners: {
                                 itemsingletap: function (list, idx, target, records, evt) {
                                     LoadingPanelShow();
                                     Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                                     Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                                     Ext.getCmp('mainView').setActiveItem(2);
                                     Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                                     Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                                     FlatBillID_ID = records.get('ID');
                                     FlatBillID = records.get('FlatBillID');
                                     FlatBillStatus = records.get('FlatBillStatus');
                                     FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                                     CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                                     ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                                     localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                                     Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                                     var CurrFlatBillStatusAndCategory = '<b>New</b>';
                                     localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                                     //StatusDetailReceiptMenuShow();
                                     directedMenu('New');
                                     Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                                         BillID: FlatBillID
                                     });
                                     Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                                     Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                                         TemplateCode: ReceiptTemplateCode

                                     });
                                     Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                                     GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                                     // detailsReceiptsprocess(FlatBillID);
                                     // generateReceipts(CloudreceiptAccNo, FlatBillID);



                                     //  detailsReceiptsprocess(FlatBillID);

                                 },
                                 deselect: function (list, records) {

                                 }
                             },

                         },













                   ]

               },


                                        {
                                            xtype: 'container',
                                            id: 'containerFloatLoyaltyCardPoint_PreviewMasterQRCodePoint',
                                            width: '100%',
                                            height: 360,
                                            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                            style: "background-color: white;",
                                            //style: "background-color: #F35B57;",
                                            title: 'FloatLoyaltyCardPoint_PreviewMasterQRCodePoint',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'

                                            },
                                            listeners: {
                                                initialize: function (c) {

                                                    this.element.on({
                                                        swipe: function (e, node, options) {
                                                            if (e.direction == "left") {
                                                                //  alert("Hey! I swipe left");

                                                            } else {
                                                                //  alert("Hey! I swipe right");
                                                                Ext.getCmp('tabpanelFloatLoyaltyCardPoint_Preview').setActiveItem(0);
                                                            }
                                                        }
                                                    });
                                                }
                                            },

                                            items: [


                                                {
                                                    id: 'htmlFloatLoyaltyCardPoint_PreviewMasterQRCodePoint',
                                                    margin: '18 0 0 20',
                                                    width: '100%',
                                                    height: 360,
                                                    html: '<img src="' + GetQRCodeImg() + '" style="width: 100px; height: 100px; border:1px solid white;" />',
                                                }



                                            ]

                                        },



                                   ]

                                   //}
                               },

                               ////////////////////////////////////////////
                               {

                                   xtype: 'container',
                                   width: '100%',
                                   // width: 40,
                                   // docked: 'bottom',
                                   height: 55,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom',
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
                                                  width: '100%',
                                                  style: "background-color: transparent",
                                                  height: 55,
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  //scrollable: {
                                                  //    direction: 'horizontal',
                                                  //    directionLock: false
                                                  //},
                                                  items: [


                                                      {
                                                          xtype: 'container',
                                                          //width: 600,
                                                          //  width: 400,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          height: 55,
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center',
                                                          },
                                                          items: [










                                                        {
                                                            xtype: 'container',
                                                            id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrize',

                                                            //width: '33%',
                                                            //height: 30,
                                                            margin: '0 0 0 0',
                                                            flex: 1,
                                                            style: "background-color: transparent",
                                                            //style: "background-color: #F35B57;",

                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [

                                                                 {
                                                                     xtype: 'button',
                                                                     id: 'btn_FloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrize',
                                                                     //  badgeText: '1',
                                                                     margin: '0 0 0 0',

                                                                     height: 36,
                                                                     width: 36,
                                                                     html: '<img src="resources/icons/AyohaStorePurple.png" width="26" height="26" alt="Company Name">',
                                                                     ui: 'plain',
                                                                     handler: function () {
                                                                         // FloatPanel_LoyaltyCard_PointHistoryShow();
                                                                         FloatPanel_MoveCarousel_Preview(0);
                                                                     }
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt',
                                                                     width: '100%',
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'start',
                                                                         align: 'center'

                                                                     },
                                                                     items: [
                                                                         {
                                                                             margin: '-12 0 0 0',
                                                                             id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt01',
                                                                             html: '<font size=1 color=purple><u><b>Redeem</b></u></font>'
                                                                         },
                                                                         {
                                                                             margin: '-12 0 0 0',
                                                                             id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt02',
                                                                             html: '<font size=1 color=purple><u><b>Prize</b></u></font>'
                                                                         },
                                                                     ]

                                                                 },


                                                            ]
                                                        },

                                                        {
                                                            xtype: 'container',
                                                            id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistory',

                                                            //width: '33%',
                                                            //height: 30,
                                                            margin: '0 0 0 0',
                                                            flex: 1,
                                                            style: "background-color: transparent",
                                                            //style: "background-color: #F35B57;",

                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [

                                                                 {
                                                                     xtype: 'button',
                                                                     id: 'btn_FloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistory',
                                                                     //badgeText: '2',
                                                                     margin: '0 0 0 0',
                                                                     disabled:true,
                                                                     height: 36,
                                                                     width: 36,
                                                                     html: '<img src="resources/icons/myredeemption.png" width="26" height="26" alt="Company Name">',
                                                                     ui: 'plain',
                                                                     handler: function () {
                                                                         //  LoyaltyCardRedeemListShow();
                                                                         FloatPanel_MoveCarousel_Preview(1);
                                                                     }
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt',
                                                                     width: '100%',
                                                                     disabled: true,
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'start',
                                                                         align: 'center'

                                                                     },
                                                                     items: [
                                                                         {
                                                                             margin: '-12 0 0 0',
                                                                             id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt01',
                                                                             html: '<font size=1 color=#d3d3d3>Prize</font>'
                                                                         },
                                                                         {
                                                                             margin: '-12 0 0 0',
                                                                             id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt02',
                                                                             html: '<font size=1 color=#d3d3d3>Redemption</font>'
                                                                         },
                                                                     ]

                                                                 },


                                                            ]
                                                        },


                                                            {
                                                                xtype: 'container',
                                                                id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistory',
                                                                //width: '33%',
                                                                //height: 30,
                                                                margin: '0 0 0 0',
                                                                flex: 1,
                                                                style: "background-color: transparent",
                                                                //style: "background-color: #F35B57;",

                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [

                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btn_FloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistory',
                                                                         //  badgeText: '1',
                                                                         margin: '0 0 0 0',
                                                                         disabled: true,
                                                                         height: 36,
                                                                         width: 36,
                                                                         html: '<img src="resources/icons/HistoryPurple01.png" width="26" height="26" alt="Company Name">',
                                                                         ui: 'plain',
                                                                         handler: function () {
                                                                             // FloatLoyaltyCardStampShow();
                                                                             FloatPanel_MoveCarousel_Preview(2);
                                                                         }
                                                                     },
                                                                     {
                                                                         xtype: 'container',
                                                                         id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt',
                                                                         width: '100%',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'center'

                                                                         },
                                                                         items: [
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt01',
                                                                                 html: '<font size=1 color=#d3d3d3>Points</font>'
                                                                             },
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt02',
                                                                                 html: '<font size=1 color=#d3d3d3>History</font>'
                                                                             },
                                                                         ]

                                                                     },


                                                                ]
                                                            },







                                                            {
                                                                xtype: 'container',
                                                                id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPoint',
                                                                //width: '33%',
                                                                //height: 30,
                                                                margin: '0 0 0 0',
                                                                flex: 1,
                                                                style: "background-color: transparent",
                                                                //style: "background-color: #F35B57;",

                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [

                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btn_FloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPoint',
                                                                         //  badgeText: '1',
                                                                         margin: '0 0 0 0',
                                                                         disabled: true,
                                                                         height: 36,
                                                                         width: 36,
                                                                         html: '<img src="resources/icons/redeemHistorys.png" width="26" height="26" alt="Company Name">',
                                                                         ui: 'plain',
                                                                         handler: function () {
                                                                             FloatLoyaltyCardPoint_Preview_GeneratePointShow();
                                                                         }
                                                                     },
                                                                     {
                                                                         xtype: 'container',
                                                                         id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt',
                                                                         width: '100%',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'center'

                                                                         },
                                                                         items: [
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt01',
                                                                                 html: '<font size=1 color=#d3d3d3>Generate</font>'
                                                                             },
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt02',
                                                                                 html: '<font size=1 color=#d3d3d3>Point</font>'
                                                                             },
                                                                         ]

                                                                     },


                                                                ]
                                                            },



                                                            {
                                                                xtype: 'container',
                                                                id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_CashBack',
                                                                //width: '33%',
                                                                //height: 30,
                                                                margin: '0 0 0 0',
                                                                flex: 1,
                                                                style: "background-color: transparent",
                                                                //style: "background-color: #F35B57;",

                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [

                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btn_FloatLoyaltyCardPoint_Preview_MenuBottom_CashBack',
                                                                         //  badgeText: '1',
                                                                         margin: '0 0 0 0',
                                                                         disabled: true,
                                                                         height: 36,
                                                                         width: 36,
                                                                         html: '<img src="resources/icons/cashback01.png" width="26" height="26" alt="Company Name">',
                                                                         ui: 'plain',
                                                                         handler: function () {

                                                                         }
                                                                     },
                                                                     {
                                                                         xtype: 'container',
                                                                         id: 'containerFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt',
                                                                         width: '100%',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'center'

                                                                         },
                                                                         items: [
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt01',
                                                                                 html: '<font size=1 color=grey>Ayoha Point</font>'
                                                                             },
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt02',
                                                                                 html: '<font size=1 color=grey>Cash Back</font>'
                                                                             },
                                                                         ]

                                                                     },


                                                                ]
                                                            },







                                                          ]

                                                      },
















                                                  ]
                                              },





                                                         //{
                                                         //    margin: '0 0 0 0',
                                                         //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                         //},










                                          ]

                               },










                           ]

                       },








                              /////





                              //////



                              ////////////////////////









                 ]

             },




         ]















     });
    return _FloatLoyaltyCardPoint_Preview;



}



function FloatLoyaltyCardPoint_PreviewShow(CampaingName, PointCampaignCode) {

    Ext.Viewport.remove(_FloatLoyaltyCardPoint_Preview);
    this.overlay = Ext.Viewport.add(FloatLoyaltyCardPoint_Preview());
    this.overlay.show();
    isFloatLoyaltyCardPoint_PreviewOpen = 'Y';
    _FloatLoyaltyCardPoint_Preview_isFirstLoad = "Y";
    FloatLoyaltyCardPoint_PreviewAdjustHeight();
    localStorage.setItem("AyohaUserPointCampaignCode", PointCampaignCode);
    //Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_Logo').setHtml('<img src="' + GetEnterpriseLogoPath() + '" width="130" height="130"/>');

    Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_Logo').setHtml('<img src="' + GetEnterpriseLogoPath() + '" style = "width: 130px; height: 130px; border:2px solid grey; border-radius: 50%; max-width:250px;" />');


    Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_EnterpriseName').setHtml('<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >' + GetEnterpriseName() + '</div>');



    Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_CampaignName').setHtml('<font size=2 color=white><b>' + CampaingName + '</b></font>');

    Load_FloatLoyaltyCardPoint_Preview_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode);

    //  Ext.getCmp('htmlFloatLoyaltyCardPoint_PreviewPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');



    //  Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    // AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();


}





function FloatLoyaltyCardPoint_PreviewHide() {
    _FloatLoyaltyCardPoint_Preview.hide();

    isFloatLoyaltyCardPoint_PreviewOpen = 'N';
    _FloatLoyaltyCardPoint_Preview_isFirstLoad = "N";
}











//function adjustHeight() {
//    //270
//    var y = parseInt(screen.height);
//    var x = parseInt(window.innerHeight);
//    var headerHeight = parseInt(218);
//    console.log(y);
//    console.log(x);
//    // var headerHeight = parseInt(218);
//    var adjustedHeight = x - headerHeight;
//    var newHeight = adjustedHeight - 33;
//    //alert(adjustedHeight);
//    //alert(newHeight)
//    return newHeight;





//}


function FloatLoyaltyCardPoint_PreviewAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(251);
    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    //var newHeight = adjustedHeight - 99;
    var newHeight = adjustedHeight - 85;

    //alert(newHeight)

    Ext.getCmp('tabpanelFloatLoyaltyCardPoint_Preview').setHeight(newHeight);
    Ext.getCmp('containerFloatLoyaltyCardPoint_PreviewMaster').setHeight(newHeight);






}





var globalItemPoint;
function CheckRedeemEntitle(val) {

    Swal.fire({
        title: 'Insufficient Ayoha Point',
        text: "Unable to redeem prize!",
        showConfirmButton: false,
        imageUrl: "resources/icons/insufficientRedeem.png",
        imageWidth: 300,
        imageHeight: 200,
        //   imageAlt: 'Cloud-Reward Pro v 1.0',
        footer: '<a href>Ayoha Reward v 1.0</a>'
    })

}





function FloatPanel_MoveCarousel_Preview(Idx) {

    console.log(Idx)

    if (Idx > 0) {
        return;
    }

    if (Idx == 0) {
        Ext.getCmp('carouselFloatLoyaltyCardPoint_Preview').setActiveItem(0);
        Ext.getCmp('htmlFloatLoyaltyCardPoint_PreviewMasterHeaderIcon').setHtml('<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_PreviewMasterHeaderTxt').setHtml('<font size=1 color=black>Redeem Prize</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=purple><b><u>Redeem</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=purple><b><u>Prize</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey>Points</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Generate</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');
    }
    if (Idx == 1) {
        Ext.getCmp('carouselFloatLoyaltyCardPoint_Preview').setActiveItem(1);
        Ext.getCmp('htmlFloatLoyaltyCardPoint_PreviewMasterHeaderIcon').setHtml('<img src="resources/icons/myredeemption.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_PreviewMasterHeaderTxt').setHtml('<font size=1 color=black>Point Redemptions</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=purple><b><u>Point</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=purple><b><u>Redemption</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey>Points</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Generate</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');


    }
    if (Idx == 2) {

        Ext.getCmp('carouselFloatLoyaltyCardPoint_Preview').setActiveItem(2);
        Ext.getCmp('htmlFloatLoyaltyCardPoint_PreviewMasterHeaderIcon').setHtml('<img src="resources/icons/HistoryPurple01.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_PreviewMasterHeaderTxt').setHtml('<font size=1 color=black>Points History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=purple><b><u>Points</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=purple><b><u>History</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Generate</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_Preview_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');
    }


}

function Load_FloatLoyaltyCardPoint_Preview_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode) {
    localStorage.setItem('PointCampaignCode', PointCampaignCode);
    Ext.getStore('PointCampaignRedeemLoadByPointCampaignCodeStore').getProxy().setExtraParams({

        PointCampaignCode: PointCampaignCode,
        EnterpriseAccNo: GetEnterpriseAccNo(),
    });
    Ext.StoreMgr.get('PointCampaignRedeemLoadByPointCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('PointCampaignRedeemLoadByPointCampaignCodeStore').getProxy().setExtraParams({

            PointCampaignCode: PointCampaignCode,
            EnterpriseAccNo: GetEnterpriseAccNo(),
        });
        //_DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore = Ext.StoreMgr.get('PointCampaignRedeemLoadByPointCampaignCodeStore').load();
        var myStore = Ext.getStore('PointCampaignRedeemLoadByPointCampaignCodeStore');
        //var modelRecord = myStore.getAt(0);
        //var TotalItemPoint = modelRecord.get('TotalItemPoint');
        //var TotalItemPrizePriceCost = modelRecord.get('TotalItemPrizePriceCost');
        //var result01 = TotalItemPrizePriceCost / TotalItemPoint;

        //var num = result01;
        //var n = num.toFixed(2);

        //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemPoint').value = TotalItemPoint;
        //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemCost').value = TotalItemPrizePriceCost;
        //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationMethod').value = "Total Item Cost=(" + TotalItemPrizePriceCost + ") /" + "Total Item Point=(" + TotalItemPoint + ")";
        //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationResult01').value = n;

        //PointCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalPointCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + PointCount + '</div>');
        // adjustHeight();
      
        Ext.Viewport.setMasked(false);

    });
    task.delay(500);
}




