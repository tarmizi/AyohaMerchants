
Ext.define('ianMizi.view.Registration.FloatPanel_MerchantEnterpriseRegistration', {

});

var _FloatPanel_MerchantEnterpriseRegistration;


var isFloatPanel_MerchantEnterpriseRegistrationOpen = 'N';



var isDeleteorSave;


function FloatPanel_MerchantEnterpriseRegistration() {

    _FloatPanel_MerchantEnterpriseRegistration =
    Ext.create('Ext.Container', {
        zIndex: 200,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_MerchantEnterpriseRegistrationID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit'
            //type: 'vbox',
            //pack: 'start',
            //align: 'center'
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
        style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_MerchantEnterpriseRegistration.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_MerchantEnterpriseRegistration.hide(Ext.fx.Animation({
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
            //scrollable: {
            //    direction: 'vertical',
            //    directionLock: true
            //},
        items: [
            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                height: 60,
                style:GetHeaderStyle(),
               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                id: 'containerFloatPanel_MerchantEnterpriseRegistrationHeader',

                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                //style: 'background-color:transparent',
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
                            id: 'htmlFloatPanel_MerchantEnterpriseRegistration_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>Enterprise Info</b></font>'
                        },
                                   

                                      {
                                          xtype: 'spacer',

                                      },

                                     
                                      {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_MerchantEnterpriseRegistrationBack',
                                        height: 30,
                                        width: 35,
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {

                                            _FloatPanel_MerchantEnterpriseRegistration.hide(Ext.fx.Animation({
                                                type: 'popOut',
                                                //direction: 'left',
                                                //easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));
                                            isLoyaltyCardRedeemListOpen = 'N';
                                            carouselstate= 'OFF';
                                            typewriterDashBoardAutoSlideTimerReset();
                                        }
                                    },

                                                 
                        {
                            xtype: 'spacer',
                            width:20

                        },
                                              {
                                                  xtype: 'container',
                                                  //   margin: '0 0 0 5',
                                                  hidden: true,
                                                  //style: 'background-color: white;',
                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                  height: 25,
                                                  width: 70,
                                                  // margin: '70 0 0 0',
                                                  id: 'containerFloatPanel_MerchantEnterpriseRegistrationHaiUser',
                                                  layout: {

                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'
                                                  },
                                                  items: [


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_MerchantEnterpriseRegistrationHaiUser',
                                                          html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                      },
                                                      {
                                                          xtype: 'container',
                                                          //   margin: '0 0 0 5',
                                                          // hidden: true,
                                                          style: 'background-color: transparent;',

                                                          height: 25,
                                                          width: 70,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerFloatPanel_MerchantEnterpriseRegistrationeWallet',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_MerchantEnterpriseRegistrationeWallet',
                                                                   margin: '4 0 0 -15',
                                                                   height: 30,
                                                                   width: 35,
                                                                   // iconCls: 'list',
                                                                   html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                   ui: 'plain',
                                                                   handler: function () {
                                                                       DrawerMenuShow();

                                                                   }
                                                               },
                                                               {
                                                                   margin: '7 0 0 2',
                                                                   html: '<font size=2 color=black><b>RM00.00</b></font>'
                                                               }
                                                          ]
                                                      },

                                                  ]
                                              },
                                           {
                                               xtype: 'container',
                                               margin: '0 0 0 -5',
                                               hidden: true,
                                               //style: 'background-color: white;',
                                               style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                               height: 40,
                                               width: 40,
                                               // margin: '70 0 0 0',
                                               id: 'containerFloatPanel_MerchantEnterpriseRegistrationPictureUser',
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
                                                       margin: '0 0 0 -11',
                                                       id: 'btnFloatPanel_MerchantEnterpriseRegistrationInfo',
                                                       //badgeText: "2",
                                                       html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
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










                       ]

            },

{
    xtype: 'container',
    width: '100%',
    docked: 'bottom',
  ///  zIndex:'-10px',
    hidden:true,
    height: 45,
    //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;box-shadow: 5px 10px 18px #888888;',
    id: 'containerFloatPanel_MerchantEnterpriseRegistrationbottom',

    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    style: 'background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
},

            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                id:'container_mainRegistration_main',
            //  style: 'background-color: transparent;',
              style: 'background-image: url("resources/icons/signUpBg1.png"); background-size: 100% 100%;background-repeat: no-repeat;',
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
                        xtype:'spacer',
                        width:'100%',
                        height:10
                    },
{ xtype: 'container',
width: '100%',
height: '100%',
//height: 900,
id:'container_mainRegistration',
style: ' background-color: transparent',
layout: {
    type: 'hbox',
    pack: 'center',
    align: 'center'

},
items:[
    {
        xtype:'spacer',
        width:'10%'
                    },
    {
        xtype: 'container',
        width: '30%',
        margin: '-100 0 0 0',
        //height: 900,
        id:'container_mainRegistration_left',
        style: ' background-color: transparent',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'left'

        },
      
        items: [


              {
                  xtype: 'container',
                  margin: '0 0 0 0',
                  width: '100%',
                  height: 120,
                  id: 'containerFloatPanel_MerchantEnterpriseRegistrationPicProfile_User',
                  name: 'namecontainerFloatPanel_MerchantEnterpriseRegistrationPicProfile_User',
                  layout: {
                    type: 'vbox',
                                    pack: 'center',
                                    align: 'left'

                  },
                  items: [
{
//margin: '22 0 0 0',
height: 120,
width: 120,
id: 'FloatPanel_MerchantEnterpriseRegistrationPicProfile_User',
html: '<img src="resources/icons/wired-gradient-44-avatar-user-in-circle.gif" style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%;margin:0px 0px 0px 30px; "/>',
},
                      {
                          margin: '-8 0 0 30',
                          
                          html: '<font size=1 color=red><b>*Click image to upload picture</b></font>'
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
                                         html: '<font size=2 color=black>*Uploaded Image</font>',

                                     },


                               ]
                           },


        {
            id: 'HtmlinputImgFloatPanel_MerchantEnterpriseRegistrationUploadedPhoto_User',
            hidden: true,
            margin: '0 0 0 0',
            width: '100%',
            html: '<input type="file" id="inputImg-FloatPanel_MerchantEnterpriseRegistrationUploadedPhoto_User" accept="image/*"  onchange="inputImgFloatPanel_MerchantEnterpriseRegistrationUploadedPhoto_User()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

            //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





        },





        {
            margin: '-2 0 0 0',
            hidden: true,
            id: 'FloatPanel_MerchantEnterpriseRegistrationPhotoName',
            width: '100%',
            height: 20,
            html: '<input type="text" id="input-FloatPanel_MerchantEnterpriseRegistrationPhotoName_User"  readOnly style="border-color:#F2F2F2;color:#F2F2F2;width:100%;text-align: right;font-size:12px;">'


        },

                       ]

                   },


                    //{
                    //    xtype:'container'

                    //},
                      {
                          xtype: 'button',
                          id: 'btnFloatPanel_MerchantEnterpriseRegistrationUploadPhoto_User',
                          name: 'clickablebtnFloatPanel_MerchantEnterpriseRegistrationUploadPhoto_User',
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
         id: 'FloatPanel_MerchantEnterpriseRegistrationPhoto',
         width: '80%',
         height: 20,
         html: '<input type="text" id="input-FloatPanel_MerchantEnterpriseRegistrationPhoto_User"  style="border-color:#F2F2F2;color:white;width:100%;text-align: left;font-size:12px;">'


     },
    {
        margin: '3 0 0 0',
        hidden: true,
        html: '<font size=2 color=black>ID</font>',

    },

     {
         id: 'FloatPanel_MerchantEnterpriseRegistrationID_User',
         hidden: true,
         margin: '-2 0 0 0',
         width: '80%',
         height: 20,
         html: '<input type="text" id="input-FloatPanel_MerchantEnterpriseRegistrationID_User"  style="border-color:#F2F2F2;color:white;width:100%;text-align: left;font-size:12px;">'


     },



      {
          margin: '50 0 0 35',
          //  hidden: true,
          html: '<font size=3 color=red>*</font><font size=2 color=black>Account Name/Full Name</font>',

      },

     {
         //margin: '-2 0 0 0',
         //id: 'FloatPanel_MerchantEnterpriseRegistrationPhoneNumber',
         //margin: '-2 0 0 0',
         //width: '80%',
         //height: 20,
         //html: '<input type="textarea" id="input-FloatPanel_MerchantEnterpriseRegistrationPhoneNumber"  style="border-color:#F2F2F2;color:white;width:100%;height:35px;text-align: left;font-size:12px;">'

         //hidden: true,
         id: 'FloatPanel_MerchantEnterpriseRegistrationAccountName_User',
         margin: '-2 0 0 35',
         width: '90%',
         height: 20,
         html: '<input type="text" id="input-FloatPanel_MerchantEnterpriseRegistrationAccountName_User"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:20px;font-weight:bold;">'



     },





     {
         margin: '30 0 0 35',

         html: '<font size=3 color=red>*</font><font size=2 color=black>Email</font>',

     },

     {

         id: 'FloatPanel_MerchantEnterpriseRegistrationEmail_User',
         margin: '-2 0 0 35',
         width: '90%',
         height: 20,
         html: '<input type="text" id="input-FloatPanel_MerchantEnterpriseRegistrationEmail_User"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


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

                      width: '100%',
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

                                  html: '<font size=3 color=red>*</font><font size=2 color=black>Mobile Phone Number</font>',

                              },



                              ]
                          },




    {
        margin: '-2 0 0 35',
        id: 'FloatPanel_MerchantEnterpriseRegistrationUserPhoneNo',
        width: '90%',
        height: 20,
        html: '<input type="number" id="input-FloatPanel_MerchantEnterpriseRegistrationPhoneNumber_User"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

    },


                      ]

                  },


                   //{
                   //    xtype:'container'

                   //},
                     {
                         xtype: 'button',
                         id: 'btnFloatPanel_MerchantEnterpriseRegistrationUserPhoneNo_User',
                         //  badgeText: '1',
                         hidden:true,
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
             margin: '30 0 0 35',
             //hidden: true,
             html: '<font size=3 color=red>*</font><font size=2 color=black>User Name</font><font size=1 color=black>',

         },
{
   //hidden: true,
   id: 'FloatPanel_MerchantEnterpriseRegistrationUserName_User',
   margin: '-2 0 0 35',
   width: '90%',
   height: 20,
   html: '<input type="text" id="input-FloatPanel_MerchantEnterpriseRegistrationUserName_User"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:20px;font-weight:bold;">'


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

                                  html: '<font size=3 color=red>*</font><font size=2 color=black>Password</font>',

                              },



                              ]
                          },




    {
        margin: '-2 0 0 35',
        id: 'FloatPanel_MerchantEnterpriseRegistrationPassword_User',
        width: '90%',
        height: 20,
        html: '<input type="password" id="input-FloatPanel_MerchantEnterpriseRegistrationPassword_User"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

    },


                      ]

                  },


                   //{
                   //    xtype:'container'

                   //},
                     {
                         xtype: 'button',
                         id: 'btnFloatPanel_MerchantEnterpriseRegistrationPassword_User',
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
           id: 'htmFloatPanel_MerchantEnterpriseRegistrationPasswordMessage_User',
           html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>',
           // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
       },

       {
           xtype: 'container',
           width: '100%',
           margin: '30 0 0 0',
           id: 'container_FloatPanel_MerchantEnterpriseRegistrationPassword_User',
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

                                    html: '<font size=3 color=red>*</font><font size=2 color=black>Confirm Password</font>',

                                },



                                ]
                            },




      {
          margin: '-2 0 0 35',
          id: 'FloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User',
          width: '90%',
          height: 20,
          html: '<input type="password" id="input-FloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

      },


                        ]

                    },


                     //{
                     //    xtype:'container'

                     //},
                       {
                           xtype: 'button',
                           id: 'btnFloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User',
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
           id: 'htmFloatPanel_MerchantEnterpriseRegistrationConfirmPasswordMessage_User',
           html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>'
           // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
       },





     {
         hidden: true,
         margin: '-2 0 0 0',
         id: 'FloatPanel_MerchantEnterpriseRegistrationPasswordTxt_User',
         width: '100%',
         height: 20,
         html: '<input type="text" id="input-FloatPanel_MerchantEnterpriseRegistrationPasswordTxT_User"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'

     },



     {
         xtype: 'container',
         margin: '17 0 0 0',
         width: '100%',
         height: 50,
         style: {

             background: 'transparent',

         },
         layout: {
             type: 'hbox',
             pack: 'center',
             align: 'left'

         },
         items: [

                                                         //  },
                {
                    xtype: 'button',

                    //hidden: true,
                    //  align: 'stretch',
                   // flex: 1,
                    ui: 'plain',
                    width: '100%',
                    height: 50,
                    margin: '7 0 0 0',
                    id: 'btn_FloatPanel_MerchantEnterpriseRegistration_User_Save',
                    // width: '80%',
                    //style: {
                    //    background: '#FA8072',
                    //},
                    // padding: '10px',
                    //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                    text: '<button class="buttonSignUp">Sign Up</button>',

                    handler: function () {

                        LoadingCustomMsgShow('Creating User...', '4');
                        var AccountName = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationAccountName_User').value;
                        var Email = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationEmail_User').value;                                     
                        var UserName = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationUserName_User').value;
                        var Password = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPassword_User').value;
                        var PhoneNo = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPhoneNumber_User').value;
                        // var fileName = document.getElementById('inputImg-FloatPanel_MerchantEnterpriseRegistrationUploadedPhoto_User').value;

                        // if (!fileName) {
                        //     swalFireFail("Save Failed!!!" + "<br><font size=2>Profile Image required. Image less than 2MB Only!</font>");
                        //     LoadingCustomMsgHide();
                        //     return;
                        // }



                        if (!AccountName) {
                           // swalFireFail("Save Failed!!!" + "<br><font size=2>Account Name required!</font>");
                            swalFireFail("Account Name required");
                            LoadingCustomMsgHide();
                            return;
                        }


                        if (!Email) {
                            swalFireFail("Save Failed!!!" + "<br><font size=2>Email required!</font>");
                            LoadingCustomMsgHide();
                            return;
                        }


                        if (!PhoneNo) {
                            swalFireFail("Save Failed!!!" + "<br><font size=2>Phone No required!</font>");
                            LoadingCustomMsgHide();
                            return;
                        }
                     
                        if (!UserName) {
                            swalFireFail("Save Failed!!!" + "<br><font size=2>User Name required!</font>");
                            LoadingCustomMsgHide();
                            return;
                        }
                        if (!Password) {
                            swalFireFail("Save Failed!!!" + "<br><font size=2>Password required!</font>");
                            LoadingCustomMsgHide();
                            return;
                        }


                        AyohaEnterprisesUserCheckUserNameStore();





                     //  FloatPanel_MerchantEnterpriseRegistration_User_Save();
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













         ]
     },





     {

         xtype: 'container',
         margin: '10 0 0 0',
         hidden:true,
         // docked: 'bottom',
         width: '100%',
         layout: {
             type: 'vbox',
             pack: 'center',
             align: 'center'

         },
         height: 50,
         style: ' background-color: transparent;',
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
                                 id: 'htmlFloatPanel_MerchantEnterpriseRegistration_bottomTxt',
                                 html: '<font size=2 color=black><b>Ayoha-Reward v 1.0</b></font>'
                             },
                              {
                                  margin: '-5 0 0 0',
                                  html: '<font size=1px color=black><center>By signing up you are agree to the term and condition of service.</center></font>',

                              },
         ]
     },




        ]
    },
    { xtype: 'container',
    style: 'background-color:transparent;',
    width: '2%',
    height: '80%',
},

{ xtype: 'container',
    style: 'background-color:#d3d3d3;',
    width: 1,
    height: '80%',
},


    {

        xtype: 'container',
        width: '60%',
       // height: '100%',
        id:'container_mainRegistration_right',
        margin: '0 0 0 0',
        //style: 'background-image: url("resources/icons/regitrationimgbg01.png"); background-size: 100% 280px;background-repeat: no-repeat;',
        style: ' background-color: transparent',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'

        },
        items:[
{
    xtype: 'container',
    style: ' background-color: transparent',
    width: '100%',
    margin:'0 0 0 100',
    height:40,
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'left'

    },
    items:[
        {
            id:'typewriterDashBoardTitle',
            html: '<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📊 Track, Monitor, Optimize with Ayoha Merchant! 📊</div>'
        },
        {  
                   height: 35,
                 width: '100%',
                 id:'typewriterDashBoardContent',
            html: '<div id="typewriterDashBoard" style="width:70%;font-size:14px;text-align:left;font-weight:normal">Discover an intuitive dashboard that gives you everything you need to track membership activity, monitor growth, and optimize member engagement—all in one place! Stay on top of your business and keep your members coming back for more.</div>'
        },
        // {
        //     html: '<div id="typewriterDashBoard" class="typewriterDashboardSignUp"></div>',
        //     height: 35,
        //     width: '100%',
        // },


    ]
},
{
    xtype: 'container',
    style: ' background-color: transparent',
    width: '100%',
    height:60,
},







            {
                xtype: 'carousel',
                id: 'FloatPanel_MerchantEnterpriseRegistrationt_Carousel',
                name: 'FloatPanel_MerchantEnterpriseRegistration_CarouselName',
                width: '88%',
                height: 600,
                margin:'0 0 0 -55',
                //delay :2000,
                //  carouselSlideDelay: 1000,
                // autoSlide: true,
               // indicator: false,
               listeners:
               {

                   activeitemchange: function (container, newCard, oldCard, index) {

                       //console.log("newCard Index:"+carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard));
                       //console.log("oldCard Index:" + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard));




                       if (carouselstate== 'ON') {
                          
                        if (container.getActiveIndex()== 0) {
                            // crsl.previous();
                            Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📊 Track, Monitor, Optimize with Ayoha Merchant! 📊</div>');
                            Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Discover an intuitive dashboard that gives you everything you need to track membership activity, monitor growth, and optimize member engagement—all in one place! Stay on top of your business and keep your members coming back for more.</div>');
                           
                            // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
                            // var speed = 50; // speed in milliseconds
                            // typeWriter(text, 'typewriterDashBoard', speed);
                           
                           
                    }
                    if (container.getActiveIndex()== 1) {
                        // crsl.previous();
                        Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📊 Track, Monitor, Optimize with Ayoha Merchant! 📊</div>');
                        Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Discover an intuitive dashboard that gives you everything you need to track membership activity, monitor growth, and optimize member engagement—all in one place! Stay on top of your business and keep your members coming back for more.</div>');
                       
                        // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
                        // var speed = 50; // speed in milliseconds
                        // typeWriter(text, 'typewriterDashBoard', speed);
                       
                       
                }
                        if (container.getActiveIndex() == 2) {
                            // crsl.previous();
                            Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">🌟 Join Ayoha Merchant Today! 🌟</div>');
                            Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀</div>');
                           
                            // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
                            // var speed = 50; // speed in milliseconds
                            // typeWriter(text, 'typewriterDashBoard', speed);
                           
                           
                    }
                    if (container.getActiveIndex()== 3) {
                        // crsl.previous();
                        Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">👉 Elevate Your Business with Ayoha Merchant!</div>');
                        Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Create a stunning Enterprise Page and showcase your brand to the world! Upload eye-catching images, share essential business details, and connect with your customers effortlessly. Plus, use QR codes for easy access to exclusive rewards!</div>');
                       
                        // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
                        // var speed = 50; // speed in milliseconds
                        // typeWriter(text, 'typewriterDashBoard', speed);
                       
                       
                }
                if (container.getActiveIndex() == 4) {
                    // crsl.previous();
                    Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📢 Stay Connected with Ayoha Merchants Push Notification Dashboard! 📢</div>');
                    Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Effortlessly engage with your members using targeted push notifications. Send personalized messages, announcements, and offers directly to your customers. Track delivery and engagement in real-time, ensuring your message is seen!</div>');
                   
                    // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
                    // var speed = 50; // speed in milliseconds
                    // typeWriter(text, 'typewriterDashBoard', speed);
                   
                   
                }
                if (container.getActiveIndex() == 5) {
                    // crsl.previous();
                    Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📢 Stay Connected with Ayoha Merchants Push Notification Dashboard! 📢</div>');
                    Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Effortlessly engage with your members using targeted push notifications. Send personalized messages, announcements, and offers directly to your customers. Track delivery and engagement in real-time, ensuring your message is seen!</div>');
                   
                    // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
                    // var speed = 50; // speed in milliseconds
                    // typeWriter(text, 'typewriterDashBoard', speed);
                   
                   
                }

                       } 


                   },

               },
                items:[


                    {
                        xtype: 'container',
            width: '100%',
            height: '100%',
            style: 'background-image: url("resources/icons/dashboardOne.jpg"); background-size: 100% 100%;background-repeat: no-repeat;',
                    },
           
                    {
                        xtype: 'container',
            width: '100%',
            height: '100%',
            style: 'background-image: url("resources/icons/dashboardTwo.jpg"); background-size: 100% 600px;background-repeat: no-repeat;',
                    },
                    {
                        xtype: 'container',
            width: '100%',
            height: '100%',
            style: 'background-image: url("resources/icons/dashboardThree.jpg"); background-size: 100% 600px;background-repeat: no-repeat;',
                    },
                    {
                        xtype: 'container',
            width: '100%',
            height: '100%',
            style: 'background-image: url("resources/icons/dashboardFour.jpg"); background-size: 100% 600px;background-repeat: no-repeat;',
                    },
                    {
                        xtype: 'container',
            width: '100%',
            height: '100%',
            style: 'background-image: url("resources/icons/dashboardFive.jpg"); background-size: 100% 600px;background-repeat: no-repeat;',
                    },
                    {
                        xtype: 'container',
            width: '100%',
            height: '100%',
            style: 'background-image: url("resources/icons/dashboardSix2.jpg"); background-size: 100% 600px;background-repeat: no-repeat;',
                    },
                    {
                        xtype: 'container',
            width: '100%',
            height: '100%',
            style: 'background-image: url("resources/icons/dashboardSix.jpg"); background-size: 100% 600px;background-repeat: no-repeat;',
                    },
                ]
            }
       
        ]
       
        ///////image only
    },
    {
        xtype:'spacer',
        width:'2%'
                    },
]

},

                  


{
    xtype:'spacer',
    width:'100%',
    height:100
}


                   




                ]
            },






         


        ]





    });
    return _FloatPanel_MerchantEnterpriseRegistration;



}








function FloatPanel_MerchantEnterpriseRegistrationShow() {

    Ext.Viewport.remove(_FloatPanel_MerchantEnterpriseRegistration);
    this.overlay = Ext.Viewport.add(FloatPanel_MerchantEnterpriseRegistration());
    this.overlay.show();
    isFloatPanel_MerchantEnterpriseRegistrationOpen = 'Y';


    Load_FloatPanel_MerchantEnterpriseRegistration_EnterprisesLoadByEnterpriseAccNoStore();

    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MerchantEnterpriseRegistration_UploadLogoImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_MerchantEnterpriseRegistration_uploadEnterpriseLogoImg();
      }
    );

   // container_mainRegistration_left




}

var carouselstate='OFF';

function FloatPanel_MerchantEnterpriseRegistrationAddNewShow() {

    Ext.Viewport.remove(_FloatPanel_MerchantEnterpriseRegistration);
    this.overlay = Ext.Viewport.add(FloatPanel_MerchantEnterpriseRegistration());
    this.overlay.show();
    isFloatPanel_MerchantEnterpriseRegistrationOpen = 'Y';
    carouselstate='ON';
    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MerchantEnterpriseRegistrationPicProfile_User]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_MerchantEnterpriseRegistrationPicProfile_User();
      }
    );



    //Ext.getCmp('FloatPanel_MerchantEnterpriseRegistration_EnterpriseVersionTxt').setHidden(true);
    //Ext.getCmp('FloatPanel_MerchantEnterpriseRegistration_EnterpriseVersion').setHidden(true);
    //Ext.getCmp('FloatPanel_MerchantEnterpriseRegistration_RegisterDate').setHidden(true);
    //Ext.getCmp('FloatPanel_MerchantEnterpriseRegistration_EnterpriseCreatedDate').setHidden(true);
    //Ext.getCmp('FloatPanel_MerchantEnterpriseRegistration_EnterpriseAccNo').setHidden(true);
    //Ext.getCmp('HtmlFloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo_txt').setHidden(true);

    Ext.getCmp('htmlFloatPanel_MerchantEnterpriseRegistration_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Sign Up Account</b></font>');
    document.getElementById("input-FloatPanel_MerchantEnterpriseRegistrationPassword_User").addEventListener("keyup", OnKeyUp_FloatPanel_MerchantEnterpriseRegistration_User_Password);
    document.getElementById("input-FloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User").addEventListener("keyup", OnKeyUp_FloatPanel_MerchantEnterpriseRegistration_User_ConfirmPassword);
    
    Ext.getCmp('container_mainRegistration_right').setHeight(screen.height-200);
    Ext.getCmp('container_mainRegistration_left').setHeight(screen.height-200);
    Ext.getCmp('container_mainRegistration').setHeight(screen.height-200);
    globalUserEnterpriseProfileImgImageBase64_User="DefaultProfile";

  //  Ext.getCmp('FloatPanel_MerchantEnterpriseRegistrationt_Carousel').setActiveIndex(-1);
  Ext.getCmp('FloatPanel_MerchantEnterpriseRegistrationt_Carousel').setActiveItem(0);
    
  //  Ext.getCmp('container_mainRegistration_main').setHeight(screen.height);
    
//    // alert(screen.height)
//    var text = 'The intuitive dashboard provides all the necessary tools and insights to ensure that you can track membership activity, monitor growth, and optimize member engagement';
//    var speed = 50; // speed in milliseconds
//    typeWriter(text, 'typewriterDashBoard', speed);
   typewriterDashBoardAutoSlide();
}



function FloatPanel_MerchantEnterpriseRegistrationPicProfile_User() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_MerchantEnterpriseRegistrationUploadedPhoto_User").click();
    });
}

function FloatPanel_MerchantEnterpriseRegistrationHide() {
    _FloatPanel_MerchantEnterpriseRegistration.hide(); isFloatPanel_MerchantEnterpriseRegistrationOpen = 'N';
    typewriterDashBoardAutoSlideTimerReset();
}



//var StampCount;













var globalEnterpriseLogoImageBase64;
var globalFloatPanel_MerchantEnterpriseRegistration_ID;
function inputImgFloatPanel_MerchantEnterpriseRegistrationUploadedLogoImage() {
    var file = document.getElementById('inputImg-FloatPanel_MerchantEnterpriseRegistration_UploadedLogoImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MerchantEnterpriseRegistration_UploadedLogoImage').files[0].name;

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
                    globalEnterpriseLogoImageBase64 = event.target.result;
                    document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseLogoName').value = fileName;
                    Ext.getCmp('FloatPanel_MerchantEnterpriseRegistration_EnterpriseLogo').setHtml('<img src=' + globalEnterpriseLogoImageBase64 + ' width="160" height="160"/>')


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





//function FloatPanel_MerchantEnterpriseRegistration_uploadEnterpriseLogoImg() {
//    $(document).ready(function () {
//        $("input#inputImg-FloatPanel_MerchantEnterpriseRegistration_UploadedLogoImage").click();
//    });
//}















function FloatPanel_MerchantEnterpriseRegistration_SaveAyohaEnterpriseAccount(RowStatus) {



    var EnterpriseName = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseName').value;
    var EnterpriseAddress = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_Address').value;
    var BusinessType = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_BusinessType').value;
    var EnterpriseType = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseType').value;
    var PersonInChargeContactNo = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_PersonInChargeContactNo').value;
    var PersonInCharge = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_PersonInCharge').value;




    if (!EnterpriseName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Name required!</font>");
        return;
    }
    if (!EnterpriseAddress) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Address required!</font>");
        return;
    }
    if (!BusinessType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Business Type required!</font>");
        return;
    }
    if (!EnterpriseType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Branch Type required!</font>");
        return;
    }
    if (!PersonInChargeContactNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Person In Charge Contact No required!</font>");
        return;
    }
    if (!PersonInCharge) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Person In Charge Name required!</font>");
        return;
    }
    var imgbase64;

    if (globalEnterpriseLogoImageBase64) {
        imgbase64 = globalEnterpriseLogoImageBase64;
    } else {
        imgbase64 = "ExistingImage";
    }
    var EnterpriseAccNo;
    if (isAddNewEnterprise == 'Y') {
        var currEnterpriseAccNo = GetEnterpriseAccNo();
        var res = currEnterpriseAccNo.split("-");
        var genNumber = Math.floor(Math.random() * 99999) + 1;
        EnterpriseAccNo = res[0] + "-" + genNumber;
        globalFloatPanel_MerchantEnterpriseRegistration_ID = 0;
    } else {
        EnterpriseAccNo = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value

    }



    var gile = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_BusinessType').value;
    console.log(gile);
    var ImgPaths = "https://setkita.com/AyohaImgCard/Logo/" + GetEnterpriseAccNo() + "/" + document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseLogoName').value;
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": globalFloatPanel_MerchantEnterpriseRegistration_ID,
        "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
        "EnterpriseAccNo": EnterpriseAccNo,
        "EnterpriseName": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseName').value,
        "EnterpriseAddress": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_Address').value,
        "EnterprisePhoneNo": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterprisePhoneNo').value,
        "EnterpriseRegistrationNo": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseRegistrationNo').value,
        "EnterpriseEmail": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseEmail').value,
        "EnterpriseWebsite": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseWebsite').value,
        "EnterpriseDescriptions": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseDescriptions').value,
        "EnterpriseFacebook": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseFacebook').value,
        "EnterpriseTwiter": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseTwitter').value,
        "EnterpriseInstagram": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseInstagram').value,
        "EnterpriseCoordinate": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseCoordinate').value,
        "EnterpriseLogoPath": ImgPaths,
        "EnterpriseLogoName": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseLogoName').value,
        "RowStatus": RowStatus,
        //"CreatedBy": document.getElementById('UN').value,
        "CreatedBy":GetCurrAyohaEnterpriseUserAccountNo(),
        "PICContactNo": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_PersonInChargeContactNo').value,
        "PersonInCharge": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_PersonInCharge').value,
        "LoyaltyCardType": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_LoyaltyCardType').value,
        "EnterpriseType": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseType').value,
        "EnterpriseBusinessType": gile,
        "AyohaVersion": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistration_EnterpriseVersion').value,
        "EnterpriseLogoImg64": imgbase64,
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Enterprises/EnterprisesInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                isDeleteorSave
                swalFireSuccess(isDeleteorSave + " Succesfully!");



            }
            else {

                swalFireFail(isDeleteorSave + " Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail(isDeleteorSave + "Failed!!");
        }

    });
    FloatPanel_MerchantEnterpriseRegistrationHide();
    Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseHQAccNoStore();
}










function AyohaEnterprisesUserCheckUserNameStore() {
  
    Ext.getStore('AyohaEnterprisesUserCheckUserNameStore').getProxy().setExtraParams({
        UseName:document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationUserName_User').value,
        SerialPhoneNo: GetCurrentdeviceserial(),
    });
    Ext.StoreMgr.get('AyohaEnterprisesUserCheckUserNameStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaEnterprisesUserCheckUserNameStore').getProxy().setExtraParams({
            UseName: document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationUserName_User').value,
            SerialPhoneNo: GetCurrentdeviceserial(),
        });
        Ext.StoreMgr.get('AyohaEnterprisesUserCheckUserNameStore').load();
        var myStore = Ext.getStore('AyohaEnterprisesUserCheckUserNameStore');
        var count = myStore.getCount();
        console.log(count);
        var modelRecord = myStore.getAt(0);




        if (count >= 1) {
            // isUserNameAlreadyExist = "YES";
            swalFireFail("Sign Up Failed!!!" + "<br><font size=2>User Name Already Exsit!</font>");
            LoadingCustomMsgHide();
           
        } else {

            FloatPanel_MerchantEnterpriseRegistration_User_Save();
        }


        


        Ext.Viewport.setMasked(false);
      







    });
    task.delay(1000);
}


function OnKeyUp_FloatPanel_MerchantEnterpriseRegistration_User_Password() {

    
    
    var Password = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPassword_User').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User').value;


    if (Password.length < 6) {

        Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationPasswordMessage_User').setHidden(false);
        Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationPasswordMessage_User').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationPassword_User').setHidden(false);
        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationPassword_User').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
        Ext.getCmp('container_FloatPanel_MerchantEnterpriseRegistrationPassword_User').setMargin('20 0 0 0');


        if (ConfirmPassword) {
            if (Password != ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationConfirmPasswordMessage_User').setHidden(false);
                Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationConfirmPasswordMessage_User').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

                Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User').setHidden(false);
                Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
            }
        }


    } else {
        Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationPasswordMessage_User').setHidden(true);
        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationPassword_User').setHidden(true);
        Ext.getCmp('container_FloatPanel_MerchantEnterpriseRegistrationPassword_User').setMargin('30 0 0 0');
    }

   
}

function OnKeyUp_FloatPanel_MerchantEnterpriseRegistration_User_ConfirmPassword() {
    var Password = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPassword_User').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User').value;

    if ((Password == ConfirmPassword) && (Password.length >= 6)) {




        Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationConfirmPasswordMessage_User').setHidden(false);
        Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationConfirmPasswordMessage_User').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationPassword_User').setHidden(false);
        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationPassword_User').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User').setHidden(false);
        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
        Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationPasswordMessage_User').setHidden(true);



    } else {
        Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationConfirmPasswordMessage_User').setHidden(false);
        Ext.getCmp('htmFloatPanel_MerchantEnterpriseRegistrationConfirmPasswordMessage_User').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationPassword_User').setHidden(true);
        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationPassword_User').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User').setHidden(false);
        Ext.getCmp('btnFloatPanel_MerchantEnterpriseRegistrationConfirmPassword_User').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');





    }
}

function FloatPanel_MerchantEnterpriseRegistration_User_Save() {


   
   


    //var checkUserName = AyohaEnterprisesUserCheckUserNameStore();
    //console.log(checkUserName);
    //if (checkUserName == "YES") {
    //    swalFireFail("Save ailed!!!" + "<br><font size=2>User Name Already Exsit!</font>");
    //    return;
    //}


    var imgbase64;

    if (globalUserEnterpriseProfileImgImageBase64_User) {
        imgbase64 = globalUserEnterpriseProfileImgImageBase64_User;
    } else {
        imgbase64 = "ExistingImage";
    }
    var EnterpriseAccNo;

        var UserEnterprisePhoneNumber = document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPhoneNumber_User').value;

        var genNumber = Math.floor(Math.random() * 99999) + 1;
        var AccountNo = genNumber + "-" + UserEnterprisePhoneNumber;

       

       

    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "AyohaEnterpriseUserID": 0,
        "AccountNo": AccountNo,
        "AccountName": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationAccountName_User').value,
        "UseName": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationUserName_User').value,
        "Password": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPassword_User').value,
        "Email": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationEmail_User').value,
        "PhoneNumber": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPhoneNumber_User').value,
        "PicProfilePhoto64": imgbase64,
        "ModifiedBy":"NA",
        // "EnterpriseAccNo": AccountNo + "-NoEnterprise",
        "EnterpriseAccNo":"NOTYETCREATED",
        "UserType": "Administrator",
        "UserStatus": "Active",
        "PhotoName": document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPhotoName_User').value,
        "DOB": "Null",
        "SerialPhoneNo": GetCurrentdeviceserial(),
        "RowActive": "Active",
        "PlayerID":"PlayerID"
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + 'AyohaEnterprisesUser/AyohaEnterprisesUserInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Sign Up Succesfully!,Please sign in.");

                var task = Ext.create('Ext.util.DelayedTask', function () {

               
                    _FloatPanel_MerchantEnterpriseRegistration.hide(Ext.fx.Animation({
                        type: 'popOut',
                        //direction: 'left',
                        //easing: 'cubic-bezier(.7,0,.7,1)',
                        duration: 250
    
                    }));
                    isLoyaltyCardRedeemListOpen = 'N';
    
                    document.getElementById("UN").value=document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationUserName_User').value;
                    document.getElementById("PW").value=document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPassword_User').value;
                  
                    LoadingCustomMsgHide();
                    Ext.Viewport.setMasked(false);
                });
            
            
                task.delay(1500);
               
              
            }
            else {

                swalFireFail( "Sign Up Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            LoadingCustomMsgHide();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            LoadingCustomMsgHide();
            Ext.Viewport.unmask();
            swalFireFail(isDeleteorSave + "Failed!!");
        }

    });
}




var globalUserEnterpriseProfileImgImageBase64_User;

function inputImgFloatPanel_MerchantEnterpriseRegistrationUploadedPhoto_User() {
    var file = document.getElementById('inputImg-FloatPanel_MerchantEnterpriseRegistrationUploadedPhoto_User').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MerchantEnterpriseRegistrationUploadedPhoto_User').files[0].name;

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
                    globalUserEnterpriseProfileImgImageBase64_User = event.target.result;
                    document.getElementById('input-FloatPanel_MerchantEnterpriseRegistrationPhotoName_User').value = fileName;
                    Ext.getCmp('FloatPanel_MerchantEnterpriseRegistrationPicProfile_User').setHtml('<img src=' + globalUserEnterpriseProfileImgImageBase64_User + ' style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; "/>')


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




function typewriterDashBoardAutoSlide() {
    var i = 0;
    var interval = parseInt(3000);
    var crsl = Ext.getCmp('FloatPanel_MerchantEnterpriseRegistrationt_Carousel');

  
    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    typewriterDashBoardAutoSlideTimer = setInterval(function () {

        crsl.next();
        if (crsl.getActiveIndex() == 0) {
            // crsl.previous();
            Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📊 Track, Monitor, Optimize with Ayoha Merchant! 📊</div>');
            Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Discover an intuitive dashboard that gives you everything you need to track membership activity, monitor growth, and optimize member engagement—all in one place! Stay on top of your business and keep your members coming back for more.</div>');
           
            // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
            // var speed = 50; // speed in milliseconds
            // typeWriter(text, 'typewriterDashBoard', speed);
           
           
    }
        if (crsl.getActiveIndex() == 2) {
            // crsl.previous();
            Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">🌟 Join Ayoha Merchant Today! 🌟</div>');
            Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀</div>');
           
            // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
            // var speed = 50; // speed in milliseconds
            // typeWriter(text, 'typewriterDashBoard', speed);
           
           
    }
    if (crsl.getActiveIndex() == 3) {
        // crsl.previous();
        Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">👉 Elevate Your Business with Ayoha Merchant!</div>');
        Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Create a stunning Enterprise Page and showcase your brand to the world! Upload eye-catching images, share essential business details, and connect with your customers effortlessly. Plus, use QR codes for easy access to exclusive rewards!</div>');
       
        // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
        // var speed = 50; // speed in milliseconds
        // typeWriter(text, 'typewriterDashBoard', speed);
       
       
}
if (crsl.getActiveIndex() == 4) {
    // crsl.previous();
    Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📢 Stay Connected with Ayoha Merchants Push Notification Dashboard! 📢</div>');
    Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Effortlessly engage with your members using targeted push notifications. Send personalized messages, announcements, and offers directly to your customers. Track delivery and engagement in real-time, ensuring your message is seen!</div>');
   
    // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
    // var speed = 50; // speed in milliseconds
    // typeWriter(text, 'typewriterDashBoard', speed);
   
   
}
if (crsl.getActiveIndex() == 5) {
    // crsl.previous();
    Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📢 Stay Connected with Ayoha Merchants Push Notification Dashboard! 📢</div>');
    Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Effortlessly engage with your members using targeted push notifications. Send personalized messages, announcements, and offers directly to your customers. Track delivery and engagement in real-time, ensuring your message is seen!</div>');
   
    // var text = 'Unlock powerful tools to boost your business! Manage membership info, design custom membership cards, track user activity, approve members, manage rewards, and launch loyalty campaigns—all in one place! 🚀';
    // var speed = 50; // speed in milliseconds
    // typeWriter(text, 'typewriterDashBoard', speed);
   
   
}
        if (crsl.getActiveIndex() === crsl.getMaxItemIndex()) {
            // crsl.previous();
            Ext.getCmp('typewriterDashBoardTitle').setHtml('<div style="width:100%;font-size:20px;text-align:left;font-weight:bold">📊 Track, Monitor, Optimize with Ayoha Merchant! 📊</div>');
            Ext.getCmp('typewriterDashBoardContent').setHtml('<div id="typewriterDashBoard" style="width:73%;font-size:14px;text-align:left;font-weight:normal">Discover an intuitive dashboard that gives you everything you need to track membership activity, monitor growth, and optimize member engagement—all in one place! Stay on top of your business and keep your members coming back for more.</div>');
           
            Ext.getCmp('FloatPanel_MerchantEnterpriseRegistrationt_Carousel').setActiveItem(0);
      
    }



    }, interval);
}


function typewriterDashBoardAutoSlideTimerReset() {
    clearInterval(typewriterDashBoardAutoSlideTimer);
    Ext.getCmp('FloatPanel_MerchantEnterpriseRegistrationt_Carousel').setActiveItem(0);
   
}