
Ext.define('ianMizi.view.Registration.FloatPanel_MerchantUserRegistration', {

});

var _FloatPanel_MerchantUserRegistration;


var isFloatPanel_MerchantUserRegistrationOpen = 'N';

var isFromUserEnterpriseDetails;

var isDeleteorSave;


function FloatPanel_MerchantUserRegistration() {

    _FloatPanel_MerchantUserRegistration =
    Ext.create('Ext.Panel', {
        zIndex: 200,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_MerchantUserRegistrationID',
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
            //direction: 'up',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },

        //style: 'border-bottom:1px solid;background-color:#353839;',
        //  style: 'border-bottom:1px solid;background-color:white;',
        style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_MerchantUserRegistration.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isFloatPanel_MerchantUserRegistrationOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_MerchantUserRegistration.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isFloatPanel_MerchantUserRegistrationOpen = 'N';
        //                }

        //            }
        //        });
        //    }
        //},

        items: [

          //{

          //    xtype: 'container',
          //    docked: 'bottom',
          //    width: '100%',
          //    layout: {
          //        type: 'vbox',
          //        pack: 'center',
          //        align: 'center'

          //    },

          //    style: 'background-color: transparent;',
          //    items: [

          //                        {
          //                            //xtype: 'button',
          //                            //id: 'btnMyAccount_DashboardBack',
          //                            //height: 65,
          //                            //width: 65,
          //                            // iconCls: 'list',
          //                            margin: '0 0 0 0',
          //                            html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="55" height="55" alt="Company Name"></div>',
          //                            //ui: 'plain',
          //                            //handler: function () {

          //                            //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
          //                            //    //    type: 'slideOut',
          //                            //    //    direction: 'left',
          //                            //    //    easing: 'cubic-bezier(.7,0,.7,1)',
          //                            //    //    duration: 250

          //                            //    //}));
          //                            //    //isLoyaltyCardRedeemListOpen = 'N';
          //                            //}
          //                        },
          //                        {
          //                            margin: '-10 0 0 0',
          //                            id: 'htmlFloatPanel_MerchantUserRegistration_bottomTxt',
          //                            html: '<font size=2 color=white><b>Ayoha-Reward v 1.0</b></font>'
          //                        },
          //                         {
          //                             margin: '-2 0 0 0',
          //                             html: '<font size=1px color=white><center>By signing up you are agree to the term and condition of service.</center></font>',

          //                         },
          //    ]
          //},

            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

                layout: {
                    //  type: 'fit',
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },

                items: [

                    {

                        xtype: 'container',
                        docked: 'bottom',
                        width: '100%',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'

                        },

                        style: 'background-color: transparent;',
                        items: [

                                            {
                                                //xtype: 'button',
                                                //id: 'btnMyAccount_DashboardBack',
                                                //height: 65,
                                                //width: 65,
                                                // iconCls: 'list',
                                                margin: '0 0 0 0',
                                                html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="55" height="55" alt="Company Name"></div>',
                                                //ui: 'plain',
                                                //handler: function () {

                                                //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                                //    //    type: 'slideOut',
                                                //    //    direction: 'left',
                                                //    //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                //    //    duration: 250

                                                //    //}));
                                                //    //isLoyaltyCardRedeemListOpen = 'N';
                                                //}
                                            },
                                            {
                                                margin: '-10 0 0 0',
                                                id: 'htmlFloatPanel_MerchantUserRegistration_bottomTxt',
                                                html: '<font size=2 color=white><b>Ayoha-Reward (Merchant) v 1.0</b></font>'
                                            },
                                             {
                                                 margin: '-2 0 0 0',
                                                 html: '<font size=1px color=white><center>By signing up you are agree to the term and condition of service.</center></font>',

                                             },
                        ]
                    },

                     //{

                     //    xtype: 'container',
                     //    docked: 'bottom',
                     //    width:'100%',
                     //    layout: {
                     //        type: 'vbox',
                     //        pack: 'center',
                     //        align: 'center'

                     //    },

                     //    style: ' background-color: transparent;',
                     //    items: [

                     //                        {
                     //                            xtype: 'button',
                     //                            id: 'btnMyAccount_DashboardBack',
                     //                            height: 65,
                     //                            width: 65,
                     //                            // iconCls: 'list',
                     //                            html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="55" height="55" alt="Company Name"></div>',
                     //                            ui: 'plain',
                     //                            handler: function () {

                     //                                //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                     //                                //    type: 'slideOut',
                     //                                //    direction: 'left',
                     //                                //    easing: 'cubic-bezier(.7,0,.7,1)',
                     //                                //    duration: 250

                     //                                //}));
                     //                                //isLoyaltyCardRedeemListOpen = 'N';
                     //                            }
                     //                        },
                     //                        {
                     //                            margin: '0 0 0 0',
                     //                            id: 'htmlMyAccount_Dashboard_TitleHeaderTxt',
                     //                            html: '<font size=2 color=white><b>Ayoha-Reward v 1.0</b></font>'
                     //                        },
                     //                         {

                     //                             html: '<font size=2px color=white><center>By signing up you agree to the term and condition of service.</center></font>',

                     //                         },
                     //    ]
                     //},






                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                        //  style: 'background-image: url("resources/icons/registerBackground.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },

                        items: [




                            {

                                xtype: 'container',
                                width: '100%',
                                //  docked:'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_MerchantUserRegistrationHeader',
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
                                                         id: 'btnFloatPanel_MerchantUserRegistrationBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_MerchantUserRegistration.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             isFloatPanel_MerchantUserRegistrationOpen = 'N';
                                                         }
                                                     },
                                                    
                                                      {
                                                          xtype: 'spacer',

                                                      },
                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_MerchantUserRegistration_TitleHeaderTxt',
                                                           html: '<font size=2 color=white><b>Register Account</b></font>'
                                                       },
                                                      {
                                                          xtype: 'container',
                                                          margin: '5 0 0 0',
                                                          hidden: true,
                                                          //style: 'background-color: white;',
                                                          //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                          style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                          height: 25,
                                                          width: 75,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerFloatPanel_MerchantUserRegistrationHaiUser',
                                                          layout: {

                                                              type: 'vbox',
                                                              pack: 'center',
                                                              align: 'center'
                                                          },
                                                          items: [


                                                              {
                                                                  margin: '2 0 0 0',
                                                                  id: 'htmlFloatPanel_MerchantUserRegistrationHaiUser',
                                                                  html: '<font size=2 color=black><b>Hai User!</b></font>'
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  //   margin: '0 0 0 5',
                                                                  // hidden: true,
                                                                  style: 'background-color: transparent;',

                                                                  height: 25,
                                                                  width: 70,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatPanel_MerchantUserRegistrationeWallet',
                                                                  layout: {

                                                                      type: 'hbox',
                                                                      pack: 'left',
                                                                      align: 'left'
                                                                  },
                                                                  items: [
                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnFloatPanel_MerchantUserRegistrationeWallet',
                                                                           margin: '4 0 0 8',
                                                                           height: 30,
                                                                           width: 35,
                                                                           // iconCls: 'list',
                                                                           html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               Ayoha_eWallet();

                                                                           }
                                                                       },
                                                                       //{
                                                                       //    height: 30,
                                                                       //    margin: '10 0 0 0',
                                                                       //    width: 65,

                                                                       //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:white;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                                                       //},
                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnFloatPanel_MerchantUserRegistrationeWalletValue',
                                                                           margin: '7 0 0 2',
                                                                           height: 30,
                                                                           width: 65,

                                                                           // iconCls: 'list',
                                                                           html: '<div style="color:white;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM00.00</div>',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               Ayoha_eWallet();

                                                                           }
                                                                       },
                                                                       //{
                                                                       //    margin: '7 0 0 2',

                                                                       //}
                                                                  ]
                                                              },

                                                          ]
                                                      },
                                                   {
                                                       xtype: 'container',
                                                       margin: '0 0 0 -5',
                                                       hidden: true,
                                                       //style: 'background-color: white;',
                                                       style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                       height: 35,
                                                       width: 35,
                                                       // margin: '70 0 0 0',
                                                       id: 'containerFloatPanel_MerchantUserRegistrationPictureUser',
                                                       layout: {

                                                           type: 'hbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [
                                                           {
                                                               xtype: 'button',
                                                               height: 40,
                                                               width: 40,
                                                               margin: '0 0 0 -8',
                                                               id: 'btnFloatPanel_MerchantUserRegistrationPicProfile',
                                                               //badgeText: "2",
                                                               html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: white;border-radius: 30px 30px 30px 30px;width:30px;height:30px" ><img src="resources/icons/myAccountBlack1.png"  style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%;  margin:-1px 0px 0px 2px"></div>',
                                                               ui: 'plain',
                                                               handler: function () {

                                                                   //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                   //  setupMovementMap(2);





                                                                   //Ext.getCmp('mainView').setActiveItem(16);
                                                                   //loadNotificationSummary();
                                                               }
                                                           },



                                                       ]
                                                   },



                                                   //{
                                                   //    xtype: 'panel',
                                                   //    width: 2
                                                   //}












                                       ]

                            },




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_MerchantUserRegistration_Master',
                                width: '100%',
                                // height: 360,
                                height: '95%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_MerchantUserRegistrationMaster',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true
                                },
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");
                                //                    Ext.getCmp('tabpanelFloatPanel_MerchantUserRegistration').setActiveItem(1);
                                //                } else {
                                //                    //  alert("Hey! I swipe right");

                                //                }
                                //            }
                                //        });
                                //    }
                                //},


                                items: [





                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left'

                                        },
                                        items: [




















                                            //////////////////////////////////////////////////////////////////////////
                                             //{
                                             //    margin: '3 0 0 0',

                                             //    html: '<font size=3 color=white><b>Merchant User Login Profile</b></font>',

                                             //},

                                             {
                                                 xtype: 'container',
                                                 margin: '0 0 0 0',
                                                 width: '100%',
                                                 id: 'containerFloatPanel_MerchantUserRegistrationPicProfile',
                                                 name: 'namecontainerFloatPanel_MerchantUserRegistrationPicProfile',
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'start',
                                                     align: 'center'

                                                 },
                                                 items: [
  {
      margin: '2 0 0 0',
      height: 120,
      width: 120,
      id: 'FloatPanel_MerchantUserRegistrationPicProfile',
      html: '<img src="resources/icons/profileIconWhiteTwo.png" style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; "/>',
  },


                                                 ]
                                             },





                                              {
                                                  xtype: 'container',
                                                  width: '100%',
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
                                                                                 margin: '3 0 0 0',
                                                                                 hidden: true,
                                                                                 html: '<font size=2 color=white>*Uploaded Image</font>',

                                                                             },


                                                                       ]
                                                                   },


                                                {
                                                    id: 'HtmlinputImgFloatPanel_MerchantUserRegistrationUploadedPhoto',
                                                    hidden: true,
                                                    margin: '0 0 0 0',
                                                    width: '100%',
                                                    html: '<input type="file" id="inputImg-FloatPanel_MerchantUserRegistrationUploadedPhoto" accept="image/*"  onchange="inputImgFloatPanel_MerchantUserRegistrationUploadedPhoto()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                                    //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                                },





                                                {
                                                    margin: '-2 0 0 0',
                                                    hidden: true,
                                                    id: 'FloatPanel_MerchantUserRegistrationPhotoName',
                                                    width: '100%',
                                                    height: 20,
                                                    html: '<input type="text" id="input-FloatPanel_MerchantUserRegistrationPhotoName"  readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: right;font-size:12px;">'


                                                },

                                                               ]

                                                           },


                                                            //{
                                                            //    xtype:'container'

                                                            //},
                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btnFloatPanel_MerchantUserRegistrationUploadPhoto',
                                                                  name: 'clickablebtnFloatPanel_MerchantUserRegistrationUploadPhoto',
                                                                  hidden: true,
                                                                  //  badgeText: '1',
                                                                  margin: '0 0 -10 0',
                                                                  height: 35,
                                                                  width: 35,
                                                                  html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                                                  ui: 'plain',
                                                                  handler: function () {

                                                                  }
                                                              },

                                                  ]

                                              },




                                              //{
                                              //    xtype: 'container',
                                              //    hidden: true,
                                              //    width: '99%',
                                              //    height: 600,
                                              //    layout: {
                                              //        type: 'vbox',
                                              //        pack: 'left',
                                              //        align: 'left'

                                              //    },
                                              //    style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
                                              //    items: [



                                              //    ]

                                              //},


                                             {
                                                 margin: '-2 0 0 0',
                                                 hidden: true,
                                                 id: 'FloatPanel_MerchantUserRegistrationPhoto',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_MerchantUserRegistrationPhoto"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                                             },
                                            {
                                                margin: '3 0 0 0',
                                                hidden: true,
                                                html: '<font size=2 color=white>ID</font>',

                                            },

                                             {
                                                 id: 'FloatPanel_MerchantUserRegistrationID',
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_MerchantUserRegistrationID"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                                             },



                                              {
                                                  margin: '3 0 0 0',
                                                  hidden: true,
                                                  html: '<font size=2 color=white>Account No</font>',

                                              },

                                             {
                                                 //margin: '-2 0 0 0',
                                                 //id: 'FloatPanel_MerchantUserRegistrationPhoneNumber',
                                                 //margin: '-2 0 0 0',
                                                 //width: '80%',
                                                 //height: 20,
                                                 //html: '<input type="textarea" id="input-FloatPanel_MerchantUserRegistrationPhoneNumber"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;">'

                                                 hidden: true,
                                                 id: 'FloatPanel_MerchantUserRegistrationAccountNo',
                                                 margin: '-2 0 0 0',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_MerchantUserRegistrationAccountNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'



                                             },

                                             {
                                                 margin: '30 0 0 35',
                                                 //hidden: true,
                                                 html: '<font size=2 color=white>*Account Name</font><font size=1 color=white>',

                                             },
 {
     margin: '-10 0 0 35',
     //hidden: true,
     html: '<font size=1 color=white>(Full Name of Merchant or Enterprise Name)</font>',

 },
                                             {
                                                 //hidden: true,
                                                 id: 'FloatPanel_MerchantUserRegistrationAccountName',
                                                 margin: '-2 0 0 35',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_MerchantUserRegistrationAccountName"  style="border-color:white;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


                                             },



                                             {
                                                 margin: '30 0 0 35',

                                                 html: '<font size=2 color=white>Email</font>',

                                             },

                                             {

                                                 id: 'FloatPanel_MerchantUserRegistrationEmail',
                                                 margin: '-2 0 0 35',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_MerchantUserRegistrationEmail"  style="border-color:white;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


                                             },






                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 margin: '30 0 0 0',
                                                 //   hidden: true,
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
                                                                          margin: '3 0 0 35',

                                                                          html: '<font size=2 color=white>*Mobile Phone Number</font>',

                                                                      },



                                                                      ]
                                                                  },
                                                                   {
                                                                       margin: '-10 0 0 35',
                                                                       //hidden: true,
                                                                       html: '<font size=1 color=white>(Mobile Phone Number will be your user ID)</font>',

                                                                   },



                                            {
                                                margin: '-2 0 0 35',
                                                id: 'FloatPanel_MerchantUserRegistrationUserPhoneNo',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="tel" id="input-FloatPanel_MerchantUserRegistrationPhoneNumber"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                            },


                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_MerchantUserRegistrationUserPhoneNo',
                                                                 //  badgeText: '1',
                                                                 margin: '0 0 -10 -30',
                                                                 height: 35,
                                                                 width: 35,
                                                                 html: '<div class="blink_me"><img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name"></div>',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                     swalFireInformationMsg('Please provide real mobile phone number,verification code will be send thru SMS using this mobile phone no');
                                                                 }
                                                             },

                                                 ]

                                             },









                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 margin: '30 0 0 0',
                                                 //   hidden: true,
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
                                                                          margin: '3 0 0 35',

                                                                          html: '<font size=2 color=white>*Password</font>',

                                                                      },



                                                                      ]
                                                                  },




                                            {
                                                margin: '-2 0 0 35',
                                                id: 'FloatPanel_MerchantUserRegistrationPassword',
                                                width: '90%',
                                                height: 20,
                                                html: '<input type="password" id="input-FloatPanel_MerchantUserRegistrationPassword"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                            },


                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_MerchantUserRegistrationPassword',
                                                                 //  badgeText: '1',
                                                                 hidden: true,
                                                                 margin: '0 0 -10 -30',
                                                                 height: 35,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >',
                                                                 ui: 'plain',
                                                                 handler: function () {

                                                                 }
                                                             },

                                                 ]

                                             },

                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_MerchantUserRegistrationPasswordMessage',
                                                   html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>',
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },

                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   margin: '30 0 0 0',
                                                   id: 'container_FloatPanel_MerchantUserRegistrationPassword',
                                                   //   hidden: true,
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
                                                                            margin: '3 0 0 35',

                                                                            html: '<font size=2 color=white>*Confirm Password</font>',

                                                                        },



                                                                        ]
                                                                    },




                                              {
                                                  margin: '-2 0 0 35',
                                                  id: 'FloatPanel_MerchantUserRegistrationConfirmPassword',
                                                  width: '90%',
                                                  height: 20,
                                                  html: '<input type="password" id="input-FloatPanel_MerchantUserRegistrationConfirmPassword"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                              },


                                                                ]

                                                            },


                                                             //{
                                                             //    xtype:'container'

                                                             //},
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_MerchantUserRegistrationConfirmPassword',
                                                                   hidden: true,
                                                                   margin: '0 0 -10 -30',
                                                                   height: 35,
                                                                   width: 35,
                                                                   html: '<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;" >',
                                                                   ui: 'plain',
                                                                   handler: function () {

                                                                   }
                                                               },

                                                   ]

                                               },
                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage',
                                                   html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },

                                             {
                                                 margin: '30 0 0 35',
                                                 hidden: true,
                                                 html: '<font size=2 color=white>Date Of Birth(Optional)</font>',

                                             },

                                             {
                                                 margin: '-2 0 0 35',
                                                 id: 'FloatPanel_MerchantUserRegistrationDOB',
                                                 hidden: true,
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="date" id="input-FloatPanel_MerchantUserRegistrationDOB"  style="border-color:white;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


                                             },












                                                   {
                                                       xtype: 'container',
                                                       hidden: true,
                                                       width: '100%',
                                                       style: ' background-color:transparent',
                                                       margin: '30 0 0 0',
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
                                                                                margin: '3 0 0 35',

                                                                                html: '<font size=2 color=white>Gender</font>',

                                                                            },



                                                                            ]
                                                                        },




                                                  {
                                                      margin: '-2 0 0 35',
                                                      id: 'FloatPanel_MerchantUserRegistrationUserGender',
                                                      width: '90%',
                                                      height: 20,
                                                      html: '<input type="text" id="input-FloatPanel_MerchantUserRegistrationUserGender" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                                  },


                                                                    ]

                                                                },


                                                                 //{
                                                                 //    xtype:'container'

                                                                 //},
                                                                   {
                                                                       xtype: 'button',
                                                                       id: 'btnFloatPanel_MerchantUserRegistrationUserGender',
                                                                       //  badgeText: '1',
                                                                       margin: '0 0 -10 -30',
                                                                       height: 35,
                                                                       width: 35,
                                                                       html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                                                       ui: 'plain',
                                                                       handler: function () {
                                                                           //isFromUserEnterpriseDetails = 'Y';
                                                                           //FloatPanel_EnterprisesUserTypeListShow();
                                                                       }
                                                                   },

                                                       ]

                                                   },
















                                     //{
                                     //    margin: '26 0 0 0',

                                     //    html: '<font size=3 color=white>Login</font>',

                                     //},






                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_MerchantUserRegistrationPasswordTxt',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_MerchantUserRegistrationPasswordTxT"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                                             },



                                             {
                                                 xtype: 'container',
                                                 margin: '17 0 0 0',
                                                 width: '100%',
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
                                                 xtype: 'button',
                                                 hidden: true,
                                                 //  align: 'stretch',
                                                 flex: 1,
                                                 ui: 'plain',
                                                 // width: '80%',
                                                 height: 50,
                                                 margin: '7 0 0 0',
                                                 id: 'btn_FloatPanel_MerchantUserRegistration_Delete',
                                                 // width: '80%',
                                                 //style: {
                                                 //    background: '#FA8072',
                                                 //},
                                                 // padding: '10px',
                                                 //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                                                 text: '<button class="buttonStampCampaignCreate">Delete</button>',

                                                 handler: function () {


                                                     isDeleteorSave = 'Delete';

                                                     Swal.fire({
                                                         title: 'Are you sure want to delete?',
                                                         // text: "You won't be able to revert this!",
                                                         icon: 'warning',
                                                         showCancelButton: true,
                                                         confirmButtonColor: '#3085d6',
                                                         cancelButtonColor: '#d33',
                                                         confirmButtonText: 'Yes'
                                                     }).then(function (result) {
                                                         if (result.isConfirmed) {




                                                             FloatPanel_MerchantUserRegistration_SaveDelete("InActive")

                                                         }
                                                     })



                                                     //var valTextOne = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
                                                     //if (valTextOne) {

                                                     //    SaveTextCardContent();

                                                     //} else {
                                                     //    Swal.fire({
                                                     //        position: 'center',
                                                     //        icon: 'error',
                                                     //        title: '<font size=5 color=red>Row Text 1 Cannot Empty!!</font>',
                                                     //        showConfirmButton: true,
                                                     //        // timer: 2500
                                                     //    });
                                                     //}






                                                 },


                                             },
                                                                                                 //  },
                                                        {
                                                            xtype: 'button',
                                                            flex: 1,
                                                            hidden: true,
                                                            //  align: 'stretch',

                                                            ui: 'plain',
                                                            //  width: '80%',
                                                            height: 50,
                                                            margin: '7 0 0 0',
                                                            id: 'btn_FloatPanel_MerchantUserRegistration_Save',
                                                            // width: '80%',
                                                            //style: {
                                                            //    background: '#FA8072',
                                                            //},
                                                            // padding: '10px',
                                                            //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                                                            text: '<button class="buttonSignUp">Sign Up</button>',

                                                            handler: function () {
                                                                FloatPanel_MerchantUserRegistration_Save();
                                                                //var valTextOne = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
                                                                //if (valTextOne) {

                                                                //    SaveTextCardContent();

                                                                //} else {
                                                                //    Swal.fire({
                                                                //        position: 'center',
                                                                //        icon: 'error',
                                                                //        title: '<font size=5 color=red>Row Text 1 Cannot Empty!!</font>',
                                                                //        showConfirmButton: true,
                                                                //        // timer: 2500
                                                                //    });
                                                                //}






                                                            },


                                                        },






                                                        //{

                                                        //    xtype: 'container',
                                                        //    docked: 'bottom',
                                                        //    width: '100%',
                                                        //    layout: {
                                                        //        type: 'vbox',
                                                        //        pack: 'center',
                                                        //        align: 'center'

                                                        //    },

                                                        //    style: ' background-color: transparent;',
                                                        //    items: [

                                                        //                        {
                                                        //                            //xtype: 'button',
                                                        //                            //id: 'btnMyAccount_DashboardBack',
                                                        //                            //height: 65,
                                                        //                            //width: 65,
                                                        //                            // iconCls: 'list',
                                                        //                            margin:'0 0 0 0',
                                                        //                            html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="55" height="55" alt="Company Name"></div>',
                                                        //                            //ui: 'plain',
                                                        //                            //handler: function () {

                                                        //                            //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                                        //                            //    //    type: 'slideOut',
                                                        //                            //    //    direction: 'left',
                                                        //                            //    //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                        //                            //    //    duration: 250

                                                        //                            //    //}));
                                                        //                            //    //isLoyaltyCardRedeemListOpen = 'N';
                                                        //                            //}
                                                        //                        },
                                                        //                        {
                                                        //                            margin: '-10 0 0 0',
                                                        //                            id: 'htmlFloatPanel_MerchantUserRegistration_bottomTxt',
                                                        //                            html: '<font size=2 color=white><b>Ayoha-Reward v 1.0</b></font>'
                                                        //                        },
                                                        //                         {
                                                        //                             margin: '-5 0 0 0',
                                                        //                             html: '<font size=1px color=white><center>By signing up you are agree to the term and condition of service.</center></font>',

                                                        //                         },
                                                        //    ]
                                                        //},






                                                 ]
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
    return _FloatPanel_MerchantUserRegistration;



}








function FloatPanel_MerchantUserRegistrationShow(AccountNo) {

    Ext.Viewport.remove(_FloatPanel_MerchantUserRegistration);
    this.overlay = Ext.Viewport.add(FloatPanel_MerchantUserRegistration());
    this.overlay.show();
    isFloatPanel_MerchantUserRegistrationOpen = 'Y';





    var containerView = Ext.ComponentQuery.query('button[name=namecontainerFloatPanel_MerchantUserRegistrationPicProfile]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_MerchantUserRegistration_UploadPhoto();
      }
    );


    Ext.getCmp('btn_FloatPanel_MerchantUserRegistration_Delete').setHidden(false);
    Ext.getCmp('btn_FloatPanel_MerchantUserRegistration_Save').setHidden(false);


    Load_FloatPanel_MerchantUserRegistration_AyohaEnterprisesUserLoadByAccountNoStore(AccountNo);
}



function FloatPanel_MerchantUserRegistrationAddNewShow() {

    Ext.Viewport.remove(_FloatPanel_MerchantUserRegistration);
    this.overlay = Ext.Viewport.add(FloatPanel_MerchantUserRegistration());
    this.overlay.show();
    isFloatPanel_MerchantUserRegistrationOpen = 'Y';
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    //document.getElementById('input-FloatPanel_MerchantUserRegistrationRegisterDate').value = date;
    //document.getElementById('input-FloatPanel_MerchantUserRegistrationLastLoginDate').value = date;


    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MerchantUserRegistrationPicProfile]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_MerchantUserRegistration_UploadPhoto();
      }
    );

    Ext.getCmp('btn_FloatPanel_MerchantUserRegistration_Delete').setHidden(true);
    Ext.getCmp('btn_FloatPanel_MerchantUserRegistration_Save').setHidden(false);
    Ext.getCmp('htmlFloatPanel_MerchantUserRegistration_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Merchant Sign Up</b></font>');
    document.getElementById("input-FloatPanel_MerchantUserRegistrationPassword").addEventListener("keyup", OnKeyUp_FloatPanel_MerchantUserRegistrationPassword);
    document.getElementById("input-FloatPanel_MerchantUserRegistrationConfirmPassword").addEventListener("keyup", OnKeyUp_FloatPanel_MerchantUserRegistrationConfirmPassword);
    document.getElementById("input-FloatPanel_MerchantUserRegistrationAccountName").addEventListener("keyup", OnKeyUp_FloatPanel_MerchantUserRegistrationAccountName);

}



function OnKeyUp_FloatPanel_MerchantUserRegistrationAccountName() {
    var AccountName = document.getElementById('input-FloatPanel_MerchantUserRegistrationAccountName').value.toLowerCase();
    if (AccountName.length <= 6) {
        Ext.getCmp('htmlFloatPanel_MerchantUserRegistrationHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.charAt(0).toUpperCase() + AccountName.slice(1) + '</b></font>');
    }


}



function OnKeyUp_FloatPanel_MerchantUserRegistrationPassword() {


    var Password = document.getElementById('input-FloatPanel_MerchantUserRegistrationPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_MerchantUserRegistrationConfirmPassword').value;


    if (Password.length < 6) {

        Ext.getCmp('htmFloatPanel_MerchantUserRegistrationPasswordMessage').setHidden(false);
        Ext.getCmp('htmFloatPanel_MerchantUserRegistrationPasswordMessage').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHidden(false);
        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
        Ext.getCmp('container_FloatPanel_MerchantUserRegistrationPassword').setMargin('20 0 0 0');


        if (ConfirmPassword) {
            if (Password != ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHidden(false);
                Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

                Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHidden(false);
                Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
            }
        }


    } else {
        Ext.getCmp('htmFloatPanel_MerchantUserRegistrationPasswordMessage').setHidden(true);
        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHidden(true);
        Ext.getCmp('container_FloatPanel_MerchantUserRegistrationPassword').setMargin('30 0 0 0');
    }

    //if (Password == ConfirmPassword) {
    //    Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHidden(false);
    //    Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

    //    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHidden(false);
    //    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

    //    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHidden(false);
    //    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
    //    Ext.getCmp('htmFloatPanel_MerchantUserRegistrationPasswordMessage').setHidden(true);



    //}else
    //{
    //    Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHidden(false);
    //    Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

    //    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHidden(false);
    //    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

    //    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHidden(false);
    //    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');





}


function OnKeyUp_FloatPanel_MerchantUserRegistrationConfirmPassword() {
    var Password = document.getElementById('input-FloatPanel_MerchantUserRegistrationPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_MerchantUserRegistrationConfirmPassword').value;

    if ((Password == ConfirmPassword) && (Password.length >= 6)) {




        Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHidden(false);
        Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHidden(false);
        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHidden(false);
        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
        Ext.getCmp('htmFloatPanel_MerchantUserRegistrationPasswordMessage').setHidden(true);



    } else {
        Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHidden(false);
        Ext.getCmp('htmFloatPanel_MerchantUserRegistrationConfirmPasswordMessage').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHidden(true);
        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHidden(false);
        Ext.getCmp('btnFloatPanel_MerchantUserRegistrationConfirmPassword').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');





    }
}


function FloatPanel_MerchantUserRegistrationHide() {
    _FloatPanel_MerchantUserRegistration.hide(); isFloatPanel_MerchantUserRegistrationOpen = 'N';
}



//var StampCount;

function Load_FloatPanel_MerchantUserRegistration_AyohaEnterprisesUserLoadByAccountNoStore(AccountNo) {

    Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore').getProxy().setExtraParams({
        AccountNo: AccountNo,

    });
    Ext.StoreMgr.get('AyohaEnterprisesUserLoadByAccountNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore').getProxy().setExtraParams({
            AccountNo: AccountNo
        });
        Ext.StoreMgr.get('AyohaEnterprisesUserLoadByAccountNoStore').load();
        var myStore = Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore');
        var modelRecord = myStore.getAt(0);




        Ext.getCmp('FloatPanel_MerchantUserRegistrationPicProfile').setHtml('<img src="' + modelRecord.get('Photo') + '" width="120" height="120"/>')

        globalFloatPanel_MerchantUserRegistration_ID = modelRecord.get('ID');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationPhotoName').value = modelRecord.get('PhotoName');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationID').value = modelRecord.get('AyohaEnterpriseUserID');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationAccountNo').value = modelRecord.get('AccountNo');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationAccountName').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationEmail').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationPhoneNumber').value = modelRecord.get('PhoneNumber');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationDOB').value = modelRecord.get('DOB');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationRegisterDate').value = modelRecord.get('RegisterDate');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationIsUserVerified').value = modelRecord.get('IsUserVerified');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationVerifyString').value = modelRecord.get('VerifyString');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationVeriyDate').value = modelRecord.get('VeriyDate');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationModifiedBy').value = modelRecord.get('ModifiedBy');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationModifiedDate').value = modelRecord.get('ModifiedDate');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationEnterpriseAccNo').value = modelRecord.get('EnterpriseAccNo');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationUserType').value = modelRecord.get('UserType');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationUserStatus').value = modelRecord.get('UserStatus');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationLastLoginDate').value = modelRecord.get('LastLoginDate');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationUserName').value = modelRecord.get('UseName');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationPassword').value = modelRecord.get('Password');
        document.getElementById('input-FloatPanel_MerchantUserRegistrationPasswordTxT').value = modelRecord.get('Password');

        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}












var globalFloatPanel_MerchantUserRegistration_ID;
var globalUserPicProfile64;
function inputImgFloatPanel_MerchantUserRegistrationUploadedPhoto() {
    var file = document.getElementById('inputImg-FloatPanel_MerchantUserRegistrationUploadedPhoto').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MerchantUserRegistrationUploadedPhoto').files[0].name;
    var AccountName = document.getElementById('input-FloatPanel_MerchantUserRegistrationAccountName').value;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    if (FileSize > 4096) {


        swalFireFail("Image size cannot exceeds 4 MB!");
        // CustomeMsgBoxShow('Image size exceeds 200 KB!');
        return;
        // $(file).val(''); //for clearing with Jquery
    } else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalUserPicProfile64 = event.target.result;
                    document.getElementById('input-FloatPanel_MerchantUserRegistrationPhotoName').value = fileName;

                    Ext.getCmp('htmlFloatPanel_MerchantUserRegistrationHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '!</b></font>');
                    Ext.getCmp('btnFloatPanel_MerchantUserRegistrationPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + globalUserPicProfile64 + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
                    Ext.getCmp('FloatPanel_MerchantUserRegistrationPicProfile').setHtml('<img src="' + globalUserPicProfile64 + '"  style="width: 160px; height: 160px; border:2px solid white; border-radius: 50%; "/>');


                    //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',


                    // Ext.getCmp('AccomodationReceiptPicture').setSrc(FuelReceiptsImg64);
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}





function FloatPanel_MerchantUserRegistration_UploadPhoto() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_MerchantUserRegistrationUploadedPhoto").click();
    });
}

var isAddNewUserEnterprise;
function FloatPanel_MerchantUserRegistration_Save() {
    var AccountName = document.getElementById('input-FloatPanel_MerchantUserRegistrationAccountName').value;
    var Email = document.getElementById('input-FloatPanel_MerchantUserRegistrationEmail').value;
    var PhoneNo = document.getElementById('input-FloatPanel_MerchantUserRegistrationPhoneNumber').value;
    var Password = document.getElementById('input-FloatPanel_MerchantUserRegistrationPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_MerchantUserRegistrationConfirmPassword').value;



    if (!AccountName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Full Name required!</font>");
        return;
    }
    if (!PhoneNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Phone No required!</font>");
        return;
    }
    if (!Email) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Email required!</font>");
        return;
    }

    if (!Password) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Password required!</font>");
        return;
    }
    if (!ConfirmPassword) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Confirm Password required!</font>");
        return;
    }

    if (!globalUserPicProfile64) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Picture Profile  required!</font>");
        return;
    }




    var imgbase64;

    if (globalUserPicProfile64) {
        imgbase64 = globalUserPicProfile64;
    } else {
        imgbase64 = "ExistingImage";
    }




    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {

        "AccountNo": AccountName + '-' + PhoneNo + '-' + GenerateRandomNo(),
        "AccountName": document.getElementById('input-FloatPanel_MerchantUserRegistrationAccountName').value,
        "Email": document.getElementById('input-FloatPanel_MerchantUserRegistrationEmail').value,
        "PhoneNo": document.getElementById('input-FloatPanel_MerchantUserRegistrationPhoneNumber').value,
        "Photo": imgbase64,
        "Email": document.getElementById('input-FloatPanel_MerchantUserRegistrationEmail').value,
        "UserName": document.getElementById('input-FloatPanel_MerchantUserRegistrationPhoneNumber').value,
        "Katalaluan": document.getElementById('input-FloatPanel_MerchantUserRegistrationPassword').value,
        "PhotoName": document.getElementById('input-FloatPanel_MerchantUserRegistrationPhotoName').value,
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileInsert',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Succesfully!");

                FloatPanel_MerchantUserRegistrationHide();

            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}














