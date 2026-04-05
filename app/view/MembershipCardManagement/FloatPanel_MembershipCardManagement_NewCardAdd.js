Ext.define('ianMizi.view.MembershipCardManagement.FloatPanel_MembershipCardManagement_NewCardAdd', {

});


var globalNewCardAdd_RequireApprovalYesNo="YES";

var _FloatPanel_MembershipCardManagement_NewCardAdd;

function FloatPanel_MembershipCardManagement_NewCardAdd() {

    _FloatPanel_MembershipCardManagement_NewCardAdd = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_MembershipCardManagement_NewCardAddID',
            // xtype: 'panel',
            zIndex: 210,
            xtype: 'container',
          //  height: 530,
             height: '100%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            hideOnMaskTap: true,
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
            },

            style: 'background-color: white;',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color: transparent',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators:false,
                },
                width: '100%',
                height: '100%',
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked: 'top',
                        height: 60,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_MembershipCardManagement_NewCardAddHeader',
                        style:GetHeaderStyle(),
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
                                       // height: 30,
                                        width: 10,
                                    },
                                    {
                                        margin: '0 0 0 0',
                                        html: '<font size=4 color=black><b>Create New Membership Card</b></font>'
                                    },
                                           
                                              {
                                                  xtype: 'spacer',

                                              },



                                              


                                                {
                                                    xtype: 'button',
                                                    id: 'btnFloatPanel_MembershipCardManagement_NewCardAddCardBack',
                                                    height: 30,
                                                    width: 35,
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {
   
                                                        _FloatPanel_MembershipCardManagement_NewCardAdd.hide(Ext.fx.Animation({
                                                            type: 'popOut',
                                                            //direction: 'left',
                                                            //easing: 'cubic-bezier(.7,0,.7,1)',
                                                            duration: 250
   
                                                        }));
                                                        is_FloatPanel_MembershipCardManagement_NewCardAddOpen = 'N';
   
                                                    }
                                                },
                                                 {
                                                     xtype: 'button',
                                                     hidden:true,
                                                   //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                     height: 30,
                                                     width: 35,
                                                     // iconCls: 'list',
                                                     html: '<div ><img src="resources/icons/AddNewMembershipCardWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         _FloatPanel_MembershipCardManagement_NewCardAdd.hide(Ext.fx.Animation({
                                                             type: 'slideOut',
                                                             direction: 'right',
                                                             easing: 'cubic-bezier(.7,0,.7,1)',
                                                             duration: 250

                                                         }));
                                                         is_FloatPanel_MembershipCardManagement_NewCardAddOpen = 'N';
                                                     }
                                                 },


                                                  {
                                                      xtype: 'spacer',
                                                      //height: 30,
                                                      width: 20,
                                                  },




                               ]

                    },
                     {
                         xtype: 'container',
                         margin: '9 0 0 0',
                         docked: 'bottom',
                       height: 50,
                         width: '100%',
                         //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                         style:GetFooterStyle(),
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center'

                         },
                         items: [

                            {
xtype:'spacer',
                            },
                            {
                                xtype: 'button',
                                //id:'btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_Save',
                                //  badgeText: '1',
                                margin: '0 -18 0 0',
                                //height: 35,
                                //width: 35,
                                html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                                ui: 'plain',
                                handler: function () {
                                    FloatPanel_MembershipCardManagement_NewCardAdd_Save();
                                }
                            },
                       {
                           xtype: 'button',
                           //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                          // id:'txtFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_Save',
                           //  badgeText: '1',
                           margin: '4 0 0 7',
                           //height: 40,
                           //width: 130,
                           html: '<font size=2 color=grey>Save</font>',
                           ui: 'plain',
                           handler: function () {
                            FloatPanel_MembershipCardManagement_NewCardAdd_Save();
                           }
                       },
                   


                       {
                        xtype:'spacer',
                        width:20,
                                                    },



                            //////
                    //  {
                    //      xtype: 'button',
                    //      //  align: 'stretch',

                    //      ui: 'plain',
                    //      width: 460,
                    //      height: 50,
                    //      margin: '0 0 0 0',
                    //      // width: '80%',
                    //      //style: {
                    //      //    background: '#FA8072',
                    //      //},
                    //      // padding: '10px',
                    //      //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                    //      text: '<button class="buttonSaveCreateNewMembershipCard">Save</button>',

                    //      handler: function () {

                            
                    //      },


                    //  },

                         ]
                     },

                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        margin: '0 0 0 0',
                        hidden:true,
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {

                                id: 'FloatPanel_MembershipCardManagement_NewCardAddImg',
                                width: 50,
                                height: 50,
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/addNewCard.png" width="50" height="50" alt="Company Name"></div>',

                            },
                            {
                                html: '<font size=2 color=black><b>Create New Membership Card</b></font>'
                            }
                        ]
                    },



                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        width: '95%',
                        margin: '13 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left'
                        },
                        items: [
                       

                              {
                                  margin: '3 0 0 0',
                                  id:'lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName',
                                  html: '<font size=2 color=black>*Membership Card  Name</font>',

                              },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" oninput="FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName`,`Membership Card Name`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName`)"   id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                          },







                          {
                              xtype: 'container',
                              width: '100%',
                              margin: '13 0 0 0',
                              //hidden: true,
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
                                                       id:'lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardLevel',
                                                       html: '<font size=2 color=black>*Membership Card Level</font>',

                                                   },



                                                   ]
                                               },




                          {
                              margin: '-2 0 0 0',                           
                              width: '100%',
                              height: 20,
                              html: '<input type="text" oninput="FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardLevel`,`Membership Card Level`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardLevelType`)" id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardLevelType"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                          },


                                           ]

                                       },


                                        //{
                                        //    xtype:'container'

                                        //},
                                          {
                                              xtype: 'button',
                                            //  id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelTypeInfo',
                                              //  badgeText: '1',
                                              margin: '0 0 -10 0',
                                              height: 35,
                                              width: 35,
                                              html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                  Swal.fire(
  'Membership Card Level',
  'Allow merchant to create his/her own card level, such GOLD,SILVER,BRONZE level.its up to merchant to define type of level.',
  'info'
)
                                              }
                                          },

                              ]

                          },






                          {
                              xtype: 'container',
                              width: '100%',
                              margin: '13 0 0 0',
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
                                                       id:'lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeePaymentCycle',
                                                       html: '<font size=2 color=black>*Membership Card Fee Payment Cycle</font>',

                                                   },



                                                   ]
                                               },




                          {
                              margin: '-2 0 0 0',
                              id: 'FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle',
                              width: '100%',
                              height: 20,
                              html: '<input type="text" oninput="FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeePaymentCycle`,`Membership Card Fee Payment Cycle`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle`)" id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                          },


                                           ]

                                       },


                                        //{
                                        //    xtype:'container'

                                        //},
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeeCycleList',
                                              //  badgeText: '1',
                                              margin: '0 0 -10 0',
                                              height: 35,
                                              width: 35,
                                              html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                  FloatPanel_MembershipCardPaymentCycleShow();
                                              }
                                          },

                              ]

                          },

                             {
                                 margin: '13 0 0 0',
                                 hidden: true,
                                 id: 'htmlFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNoTxt',
                                 html: '<font size=2 color=black>Requires Admin Approval?</font>',

                             },
                          {
                              xtype: 'container',
                              margin: '15 0 0 0',
                              hidden:true,
                              width: '100%',
                              id: 'containertogglefieldFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo',
                              style: {

                                  background: 'transparent',

                              },
                              layout: {
                                  type: 'hbox',
                                  pack: 'left',
                                  align: 'left'

                              },
                              items: [

                                  {
                                      xtype: 'togglefield',
                                      // text:'NO/YES',
                                      //    name: 'toggleName',
                                      margin: '-12 0 0 -10',
                                      height: 5,
                                      // width:20,
                                      id: 'togglefieldFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo',
                                      //label: 'Manual',
                                      disabled: false,
                                      value: false,
                                      style: {

                                          // background: '#f44336',
                                          background: 'transparent',

                                      },
                                      listeners: {
                                          change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                                              //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                                              if (newValue == true) { // if toggle is true then enable the slider


                                                  globalNewCardAdd_RequireApprovalYesNo = "YES";
                                                  Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHtml('<font size=2 color=black>YES</font>');

                                                


                                              }


                                                  // if(newValue == false)
                                              else { // else make it false

                                                  Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHtml('<font size=2 color=black>NO</font>');
                                                //  Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHtml('<font size=2 color=black>.</font>');
                                               //   Ext.getCmp('htmlisStampRulePopUpText').setHidden(true);
                                                  globalNewCardAdd_RequireApprovalYesNo = "NO";
                                              }


                                          },


                                      }


                                  },
                                   {
                                       margin: '0 0 0 0',
                                       id: 'htmlisFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo',
                                       html: '<font size=2 color=black>NO</font>',

                                   },
                              ]

                          },












                            {
                                margin: '13 0 0 0',
                                hidden: true,
                                id: 'htmlFloatPanel_MembershipCardManagement_NewCardAdd_CardFeeCharges',
                                html: '<font size=2 color=black>Membership Card Fee Charges</font>',

                            },
           {
               id: 'htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFee_txtfield',
               margin: '-2 0 0 0',
               hidden: true,
               width: '40%',
               height: 20,
               html: '<input type="number"   oninput="FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`htmlFloatPanel_MembershipCardManagement_NewCardAdd_CardFeeCharges`,`Membership Card Fee Charges`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges`)" id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges"   style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
           },

         {
             margin: '13 0 0 0',
             hidden: true,
             html: '<font size=2 color=black>Membership Card End (in Month)</font>',

         },

         {
             xtype: 'container',
             hidden: true,
             width: '70%',
             style: {

                 background: 'transparent',

             },
             layout: {
                 type: 'hbox',
                 pack: 'left',
                 align: 'left'

             },
             items: [
                
                   //{

                   //    margin: '-2 0 0 0',
                   //    width: '85%',
                   //    height: 20,
                   //    id: 'htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtFieldMonthValue',
                   //    html: '<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDateMonthValue"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                   //},


                          {

                              margin: '-2 0 0 0',
                              width: '85%',

                              height: 20,
                              id: 'htmlFloatPanel_MembershipCardManagement_NewCardAdd__MembershipCardEndDate_txtField',
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                          },

                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_MembershipCardManagement_NewCardAdd_CheckboxNoEndDate',
                              //  hidden:true,
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'
                                },



                                margin: '-10 0 0 0',
                                items: [

                                    {
                                        margin: '8 -11 0 -85',
                                        id: 'FloatPanel_MembershipCardManagement_NewCardAdd_CheckboxNoEndDate',

                                        html: '<input type="checkbox" value="no-end-date" id="FloatPanel_MembershipCardManagement_NewCardAdd_noenddate_checkbox" name="noenddate" >',
                                    },
                                    {
                                        margin: '7 0 0 -90',                                      
                                        id: 'FloatPanel_MembershipCardManagement_NewCardAdd_CheckboxNoEndDateFont',
                                        html: '<button style="background-color: Transparent;background-repeat:no-repeat;border: none;cursor:pointer;overflow: hidden;outline:none;color:white;" id="FloatPanel_MembershipCardManagement_NewCardAdd_btnnoenddate" ">Valid lifetime</button>'
                                        //   html: '<font size="2px" color="white">Remember Me?</font>',
                                    }
                                ]

                                //id: 'rememberMeCheckboxID',
                                //html: '<input type="checkbox" value="remember-me" id="remember_me" onclick="handleClick(this);" >RememberMe',

                            },














             ]
         },


          {

              margin: '15 0 0 0',              
 id:'lblFloatPanel_MembershipCardManagement_NewCardAdd_FrontView',
              html: '<font size=2 color=black>*Membership Card Background Image - Front View</font>',

          },

         {

             xtype: 'container',
             style: ' background-color:transparent',
             margin: '5 0 0 0',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'
             },
             items: [
                 {

                     id: 'FloatPanel_MembershipCardManagement_NewCardAdd_BackgroundImgCard',
                     // iconCls: 'list',
                     html: '<div ><img src="resources/icons/goldcardbg.jpeg" style="width:100%;height:150px;border-radius:10px 10px 10px 10px;" alt="Company Name"></div>',

                 },

             ]

         },

         {
             xtype: 'container',
             style: ' background-color:transparent',
             id: 'ContainerFloatPanel_MembershipCardManagement_NewCardAdd_BackgroundImgUploadImage',
             //hidden: true,
             margin: '0 0 0 0',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'
             },
             items: [
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

                                                    html: '<font size=1 color=black>*Uploaded Image limit to < 2MB</font>',

                                                },


                                          ]
                                      },


                   {
                       id: 'HtmlinputImgFloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage',
                       hidden: true,
                       margin: '0 0 0 0',
                       width: '100%',
                       html: '<input type="file" id="inputImg-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage" accept="image/*"  onchange="inputImgFloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                       //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                   },






                                {

                                    margin: '-2 0 0 0',
                                    width: '105%',
                                    height: 20,
                                    html: '<input type="text"   id="inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                                },

                                  ]

                              },


                               //{
                               //    xtype:'container'

                               //},
                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_MembershipCardManagement_NewCardAdd_UploadBackgroundImage',
                                     name: 'clickablebtnFloatPanel_MembershipCardManagement_NewCardAdd_UploadBackgroundImage',
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

             ]
         },







         ///////



          {

              margin: '20 0 0 0',
              id:'lblFloatPanel_MembershipCardManagement_NewCardAdd_BackView',
              html: '<font size=2 color=black>Membership Card Background Image - Back View</font>',

          },

         {

             xtype: 'container',
             style: ' background-color:transparent',
             margin: '5 0 0 0',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'
             },
             items: [
                 {

                     id: 'FloatPanel_MembershipCardManagement_NewCardAdd_BackgroundImgCard_backView',
                     // iconCls: 'list',
                     html: '<div ><img src="resources/icons/goldcardbg.jpeg" style="width:100%;height:150px;border-radius:10px 10px 10px 10px;" alt="Company Name"></div>',

                 },

             ]

         },

         {
             xtype: 'container',
             style: ' background-color:transparent',
             id: 'ContainerFloatPanel_MembershipCardManagement_NewCardAdd_BackgroundImgUploadImage_backView',
             //hidden: true,
             margin: '0 0 0 0',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'
             },
             items: [
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

                                                    html: '<font size=1 color=black>*Uploaded Image limit to < 2MB</font>',

                                                },


                                          ]
                                      },


                   {
                       id: 'HtmlinputImgFloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView',
                       hidden: true,
                       margin: '0 0 0 0',
                       width: '100%',
                       html: '<input type="file"  id="inputImg-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView" accept="image/*"  onchange="inputImgFloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                       //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                   },






                                {

                                    margin: '-2 0 0 0',
                                    width: '105%',
                                    height: 20,
                                    html: '<input type="text"   id="inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                                },

                                  ]

                              },


                               //{
                               //    xtype:'container'

                               //},
                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_MembershipCardManagement_NewCardAdd_UploadBackgroundImage_backView',
                                     name: 'clickablebtnFloatPanel_MembershipCardManagement_NewCardAdd_UploadBackgroundImage_backView',
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

             ]
         },

////




        





       
       


          


        



























                        ]
                    },


                ]

            },






        });

    return _FloatPanel_MembershipCardManagement_NewCardAdd;
}



function FloatPanel_MembershipCardManagement_NewCardAddShow() {
    Ext.Viewport.remove(_FloatPanel_MembershipCardManagement_NewCardAdd);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardManagement_NewCardAdd());
    this.overlay.show();
    is_FloatPanel_MembershipCardManagement_NewCardAddOpen = 'Y';



    var checkbox = document.querySelector("input[name=noenddate]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {

         //   Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate').setHidden(true);
          //  Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate_txtField').setHidden(false);
          //  Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate_txtField').setHtml('<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">');

            var PC = document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle').value;

            if (PC == "OneTime Fee" || PC == "FOC") {
         


                Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd__MembershipCardEndDate_txtField').setHtml('<input type="text" id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">');
                document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate').value = "Membership Valid LifeTime";
  
                globalisValidLifeTime = "YES";
            } else {
          
                swalFireFail("Valid LifeTime Only Applicable for FOC and One Time Fee!");
                Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd__MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">');
                document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate').value = 12;             
               
                globalisValidLifeTime = "NO";
                document.getElementById('FloatPanel_MembershipCardManagement_NewCardAdd_noenddate_checkbox').checked = false;

            }




        } else {
          //  Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate').setHidden(true);
           // Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate_txtField').setHidden(false);
           // Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">');
            document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate').value = 12;
            globalisValidLifeTime = "NO";
        }
    });



    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MembershipCardManagement_NewCardAdd_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          MembershipCardManagement_NewCardAdd_UploadBackgroundImage();
      }
    );
   // document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges').value = 0.00;
   // document.getElementById('inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage').value = "Default.png";
  




    var containerView1 = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MembershipCardManagement_NewCardAdd_UploadBackgroundImage_backView]')[0];
    var containerViewEl1 = containerView1.element;
    containerViewEl1.on('tap',
      function (event, node, options, eOpts) {

          MembershipCardManagement_NewCardAdd_UploadBackgroundImage_backView();
      }
    );
    // document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges').value = 0.00;
   // document.getElementById('inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView').value = "Default.png";

}


function MembershipCardManagement_NewCardAdd_UploadBackgroundImage() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage").click();
    });
}



function MembershipCardManagement_NewCardAdd_UploadBackgroundImage_backView() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView").click();
    });
}

var globalMembershipCardManagement_NewCardAdd_UploadedImage;
var globalMembershipCardManagement_NewCardAdd_UploadedImage_backView;


function inputImgFloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage').files[0].name;

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
                    globalMembershipCardManagement_NewCardAdd_UploadedImage = event.target.result;
                    document.getElementById('inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage').value = fileName;

                   


                    FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`lblFloatPanel_MembershipCardManagement_NewCardAdd_FrontView`,`Membership Card Background Image - Front View`,`inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage`);    
                  
                    Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAdd_BackgroundImgCard').setHtml('<div ><img src="' + globalMembershipCardManagement_NewCardAdd_UploadedImage + '"  style="width:100%;height:150px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');


                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}






function inputImgFloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView() {
    var file = document.getElementById('inputImg-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView').files[0].name;

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
                    globalMembershipCardManagement_NewCardAdd_UploadedImage_backView = event.target.result;
                    document.getElementById('inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView').value = fileName;
                   // FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`lblFloatPanel_MembershipCardManagement_NewCardAdd_BackView`,`Membership Card Background Image - Back View`,`inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView`);    
                   Ext.getCmp('lblFloatPanel_MembershipCardManagement_NewCardAdd_BackView').setHtml('<font size=2 color=black>*Membership Card Background Image - Back View</font>');

                    Ext.getCmp('FloatPanel_MembershipCardManagement_NewCardAdd_BackgroundImgCard_backView').setHtml('<div ><img src="' + globalMembershipCardManagement_NewCardAdd_UploadedImage_backView + '"  style="width:100%;height:150px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');


                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}






var is_FloatPanel_MembershipCardManagement_NewCardAddOpen = 'N';

function FloatPanel_MembershipCardManagement_NewCardAddHide() {
    if (is_FloatPanel_MembershipCardManagement_NewCardAddOpen == 'Y') {
        _FloatPanel_MembershipCardManagement_NewCardAdd.hide();
        is_FloatPanel_MembershipCardManagement_NewCardAddOpen = 'N';
    }

}




function FloatPanel_MembershipCardManagement_NewCardAdd_Save() {
  
    //validateInputs();
  //  alert(MembershipCardEndDateNoEndDate)

  //  alert('save')

    var _EditCardStampCardCampaignName = document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName').value;

    var MembershipCardLevelType = document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardLevelType').value;

   
    var MembershipFeePaymentCycle = document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle').value;

    if (_EditCardStampCardCampaignName.length < 2) {
        swalFireFail("Membership Card Name Not Valid!!")
        FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName`,`Membership Card Name`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName`);
     
        //  Ext.getCmp('lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName').setHtml('<font size=2 color=red><b>*Membership Card  Name</b></font>  <font size=1 color=red><b>(Membership Card  Name Not Valid!)</b></font>');
      
        // var inputField = document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName')
        // inputField.style.borderColor = 'red';
        return
    }

    if (MembershipCardLevelType.length < 2) {
        swalFireFail("Membership Card Level Type Not Valid!!");
        FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardLevel`,`Membership Card Level`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardLevelType`)
       
        return
    }


    if (MembershipFeePaymentCycle.length < 2) {
        swalFireFail("Membership Card Fee Payment Cycle Not Valid!!")
        FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`lblFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeePaymentCycle`,`Membership Card Fee Payment Cycle`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle`)
        return
    }


    var MembershipCardEndDateNoEndDate = document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDateNoEndDate').value;


    var MembershipFeePaymentCycle=document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle').value;
    MembershipCardEndDateNoEndDate=0;
    if(MembershipFeePaymentCycle=="FOC"){
        globalisValidLifeTime="YES";
        MembershipCardEndDateNoEndDate="ValidLifeTime";
    }
    if(MembershipFeePaymentCycle=="OneTime Fee"){
        globalisValidLifeTime="YES";
        MembershipCardEndDateNoEndDate="ValidLifeTime";
    }
    
    
    if(MembershipFeePaymentCycle !="FOC"){
        var MembershipCardFeeCharges=parseInt(document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges').value);
    
      
        if(MembershipCardFeeCharges){
           
        }else{
            swalFireFail("Membership Card Fee Charges Not Valid!!");
            FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`htmlFloatPanel_MembershipCardManagement_NewCardAdd_CardFeeCharges`,`Membership Card Fee Charges`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges`);
            return
        }
        if(MembershipCardFeeCharges<=0){
        swalFireFail("Membership Card Fee Charges Not Valid!!");
        FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`htmlFloatPanel_MembershipCardManagement_NewCardAdd_CardFeeCharges`,`Membership Card Fee Charges`,`input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges`)
        return
    }
    
    }
   
    // if (globalisValidLifeTime == "NO") {

    //     if (MembershipCardEndDateNoEndDate == 0) {
    //         swalFireFail("Invalid End Month!!");
    //         return;
    //     }

    // }

    // var imgBackground = document.getElementById('inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage').value;


    // if (imgBackground == 'Default.png') {
    //     globalMembershipCardManagement_NewCardAdd_UploadedImage = 'ExistingImage';
    // }

if(globalMembershipCardManagement_NewCardAdd_UploadedImage){

}else{
    swalFireFail("Membership Card Background Image - Front view is Compulsory!");
    FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`lblFloatPanel_MembershipCardManagement_NewCardAdd_FrontView`,`Membership Card Background Image - Front View`,`inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage`)
    return
}
if(globalMembershipCardManagement_NewCardAdd_UploadedImage_backView){

}else{
    swalFireFail("Membership Card Background Image - Back view is Compulsory!");
    
    Ext.getCmp('lblFloatPanel_MembershipCardManagement_NewCardAdd_BackView').setHtml('<font size=2 color=red>*Membership Card Background Image - Back View</font>');
   // FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`lblFloatPanel_MembershipCardManagement_NewCardAdd_BackView`,`Membership Card Background Image - Back View`,`inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView`)
    return 
}




    


    var obj = {
        "ID": 0,
        "MembershipCardCode": "AutoGenerateByTrigger",
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "MembershipCardFee": document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardFeeCharges').value,
        "MembershipCardType": document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardLevelType').value,
        "ExpiredDate": "NA",
        "MembershipCardBackgroundImg": globalMembershipCardManagement_NewCardAdd_UploadedImage,
        "CreatedBy": GetCurrAyohaUserAccountNo(),
        "StartDate":"NA",
        "MembershipCardName": document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardName').value,
        "MembershipCardFeePaymentCycle": document.getElementById('input-FloatPanel_MembershipCardManagement_NewCardAdd_MembershipFeePaymentCycle').value,
        "StrExpiredDate": MembershipCardEndDateNoEndDate,
        "isValidLifeTime": globalisValidLifeTime,
        "MembershipCardBackgroundImgName": document.getElementById('inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage').value,
        "isRequiredApproval": globalNewCardAdd_RequireApprovalYesNo,
        "MembershipCardBackgroundImgName_back": document.getElementById('inputName-FloatPanel_MembershipCardManagement_NewCardAdd_UploadedImage_backView').value,
        "MembershipCardBackgroundImg_back": globalMembershipCardManagement_NewCardAdd_UploadedImage_backView

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/MembershipCard/MembershipCardInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Successfully!");
                FloatPanel_MembershipCardManagement_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore();
                FloatPanel_MembershipCardManagement_NewCardAddHide();
            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }
           
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });




}





function validateInputs() {
    // Select all input fields that need validation
    var inputFields = document.querySelectorAll('.validate-input');

    inputFields.forEach(function(inputField) {
        if (inputField.value === "") {
            // If validation fails (e.g., the input is empty), change the border color to red
            inputField.style.borderColor = 'red';
        } else {
            // If validation passes, reset the border color
            inputField.style.borderColor = 'black';
        }
    });
}



function FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(elm,elmName,idelm){
  // alert(idelm)
   var idelmLength=document.getElementById(idelm).value;
 
    if(idelmLength.length>0){
        Ext.getCmp(elm).setHtml('<font size=2 color=black>*'+elmName+'</font>');
    }else{
        Ext.getCmp(elm).setHtml('<font size=2 color=red>*'+elmName+'</font>');
    }
 
      
}


function FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(elm,elmName,idelm){
    //alert(elm)
     var idelmLength=document.getElementById(idelm).value;
   
      if(idelmLength.length>0){
          Ext.getCmp(elm).setHtml('<font size=2 color=black>*'+elmName+'</font>');
      }else{
          Ext.getCmp(elm).setHtml('<font size=2 color=red>*'+elmName+'</font>');
      }
   
        
  }