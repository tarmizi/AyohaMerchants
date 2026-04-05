Ext.define('ianMizi.view.MembershipCardManagement.FloatPanel_MembershipCardManagement_EditCard', {

});


var isFloatPanel_MembershipCardManagement_EditCardOpen = 'N';


var globalEditCard_RequireApprovalYesNo;

var _FloatPanel_MembershipCardManagement_EditCard;

function FloatPanel_MembershipCardManagement_EditCard() {

    _FloatPanel_MembershipCardManagement_EditCard = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_MembershipCardManagement_EditCardID',
            xtype: 'panel',
            zIndex: 200,
            xtype: 'container',
            height: '100%',
            //  height: '60%',
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

            style: ' background-color: white;',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color:transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators:false,
                },
                items: [


                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     height: 60,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_MembershipCardManagement_EditCardHeader',
                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                  // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ccc;border-top:2px none #ECF0F1 ;background: white;',
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
                                      width:20,
                                  },

                                  {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_MembershipCardManagement_EditCard_TitleHeaderTxt',
                                    html: '<font size=4 color=black><b>Membership Card Setting</b></font>'
                                },
                                          
                                         
                                           {
                                               xtype: 'spacer',

                                           },

                                           {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_MembershipCardManagement_EditCardBack',
                                            height: 30,
                                            width: 35,
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {

                                                _FloatPanel_MembershipCardManagement_EditCard.hide(Ext.fx.Animation({
                                                    type: 'popOut',
                                                   // direction: 'left',
                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                    duration: 250

                                                }));
                                                isFloatPanel_MembershipCardManagement_EditCardOpen = 'N';
                                            }
                                        },
                                           
                                                   
                                                
                                                 {
                                                     xtype: 'button',
                                                     id: 'btnFloatPanel_MembershipCardManagement_EditCard__CardIcon',
                                                     height: 30,
                                                     width: 35,
                                                     hidden:true,
                                                     // iconCls: 'list',
                                                     html: '<div ><img src="resources/icons/membershicardsetting.png" width="25" height="20" alt="Company Name"></div>',
                                                     ui: 'plain',
                                                     handler: function () {

                                                         isFloatPanel_MembershipCardManagement_EditCardOpen = 'N';

                                                         _FloatPanel_MembershipCardManagement_EditCard.hide(Ext.fx.Animation({
                                                             type: 'slideOut',
                                                             direction: 'right',
                                                             easing: 'cubic-bezier(.7,0,.7,1)',
                                                             duration: 250

                                                         }));
                                                        
                                                     }
                                                 },



                                                   {
                                                       xtype: 'spacer',
                                                       height: 30,
                                                       width: 8,
                                                   },






                            ]

                 },

                   {
                       xtype: 'container',
                       margin: '0 0 0 0',
                       height:50,
                       width: '100%',
                       docked: 'bottom',
                       id:'containerFloatPanel_MembershipCardManagement_EditCard_bottombtn',
                       //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                       style:GetFooterStyle(),
                       layout: {
                           type: 'hbox',
                           pack: 'center',
                           align: 'center'

                       },
                       items: [


                       {
                           xtype: 'button',
                           id: 'btnFloatPanel_MembershipCardManagement_EditCard_PreviewCard',
                           //  badgeText: '1',
                           hidden:true,
                           margin: '0 -18 -8 0',
                           //height: 35,
                           //width: 35,
                           html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {

                               //var StampCampaignName = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignName').value;
                               //var StampRuleRemarks = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampRuleRemarks').value;
                               //var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                               //var strStampCampaignCode = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value;
                               //var EnterpriseAccNo = GetEnterpriseAccNo();
                               //var StartDate = GetStartDateStampCardCampaign();
                               //var EndDate = GetEndDateStampCardCampaign();
                               //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks);
                           }
                       },
           {
               xtype: 'button',
               hidden:true,
               id: 'txtFloatPanel_MembershipCardManagement_EditCard_PreviewCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=black>PreView Card</font>',
               ui: 'plain',
               handler: function () {
                   //var StampCampaignName = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignName').value;
                   //var StampRuleRemarks = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampRuleRemarks').value;
                   //var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                   //var strStampCampaignCode = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value;
                   //var EnterpriseAccNo = GetEnterpriseAccNo();
                   //var StartDate = GetStartDateStampCardCampaign();
                   //var EndDate = GetEndDateStampCardCampaign();
                   //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks);
               }
           },


           {
               xtype: 'spacer'
           },
                   {
                       xtype: 'button',
                       id: 'btnFloatPanel_MembershipCardManagement_EditCard_DeleteCard',
                       //  badgeText: '1',
                       margin: '0 -18 -8 0',
                       //height: 35,
                       //width: 35,
                       html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                          
                           Swal.fire({
                               title: 'Are you sure To delete?',
                               text: "Deleting this Membership card will affect your customers. They will lose access to this card and its associated benefits. Please ensure that this action is intentional before proceeding.!",
                               icon: 'warning',
                               showCancelButton: true,
                               confirmButtonColor: '#3085d6',
                               cancelButtonColor: '#d33',
                               confirmButtonText: 'Yes'
                           }).then(function (result) {
                               if (result.isConfirmed) {
                                   FloatPanel_MembershipCardManagement_EditCard_DeleteCard();
                               }
                           });


                       }
                   },
           {
               xtype: 'button',
               id: 'txtFloatPanel_MembershipCardManagement_EditCard_DeleteCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=black>*Delete</font>',
               ui: 'plain',
               handler: function () {










                   Swal.fire({
                       title: 'Are you sure To delete?',
                       text: "Deleting this Membership card will affect your customers. They will lose access to this card and its associated benefits. Please ensure that this action is intentional before proceeding.!",
                       icon: 'warning',
                       showCancelButton: true,
                       confirmButtonColor: '#3085d6',
                       cancelButtonColor: '#d33',
                       confirmButtonText: 'Yes'
                   }).then(function (result) {
                       if (result.isConfirmed) {
                           FloatPanel_MembershipCardManagement_EditCard_DeleteCard();
                       }
                   });
               }
           },

                {
                    xtype: 'button',
                    id: 'btnFloatPanel_MembershipCardManagement_EditCard_SaveCard',
                    //  badgeText: '1',
                    margin: '0 -18 -8 0',
                    //height: 35,
                    //width: 35,
                    html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                        FloatPanel_MembershipCardManagement_EditCard_Save()
                    }
                },
           {
               xtype: 'button',
               id: 'txtFloatPanel_MembershipCardManagement_EditCard_SaveCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=black>Save</font>',
               ui: 'plain',
               handler: function () {
                   FloatPanel_MembershipCardManagement_EditCard_Save();
               }
           },
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

                                html: '<font size=3 color=black>Membership Card Setting Info</font>',

                            },

                              {
                                  margin: '3 0 0 0',
                               // hidden: true,
                                  html: '<font size=2 color=black>Card  ID</font>',

                              },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              //hidden: true,
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                          },

                           {
                               margin: '13 0 0 0',
                              // hidden:true,
                               html: '<font size=2 color=black>Card  Code</font>',

                           },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                             // hidden: true,
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                          },
                          {
                              margin: '13 0 0 0',
id:'lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardName',
                              html: '<font size=2 color=black>Membership Card  Name</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text"  oninput="FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardName`,`Membership Card Name`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardName`)"         id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardName"   style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
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
                                                       id:'lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardLevel',
                                                       html: '<font size=2 color=black>Card Level</font>',

                                                   },



                                                   ]
                                               },




                          {
                              margin: '-2 0 0 0',
                              id: 'FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType',
                              width: '100%',
                              height: 20,
                              html: '<input type="text" oninput="FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardLevel`,`Membership Card Level`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType`)"    id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                          },


                                           ]

                                       },


                                        //{
                                        //    xtype:'container'

                                        //},
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelTypeInfo',
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
                                                       id:'lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardPaymentCycle',
                                                       html: '<font size=2 color=black>Membership Card Fee Payment Cycle</font>',

                                                   },



                                                   ]
                                               },




                          {
                              margin: '-2 0 0 0',
                              id: 'FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle',
                              width: '100%',
                              height: 20,
                              html: '<input type="text" readOnly onchange="FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardPaymentCycle`,`Membership Card Fee Payment Cycle`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle`)"   id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                          },


                                           ]

                                       },


                                        //{
                                        //    xtype:'container'

                                        //},
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipFeeCycleList',
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
                                id: 'htmlFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNoTxt',
                                html: '<font size=2 color=black>Requires Admin Approval?</font>',

                            },
                          {
                              xtype: 'container',
                              margin: '13 0 0 0',
                              hidden: true,
                              width: '100%',
                              id: 'containertogglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo',
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
                                      id: 'togglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo',
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


                                                  globalEditCard_RequireApprovalYesNo = "YES";
                                                  Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>YES</font>');




                                              }


                                                  // if(newValue == false)
                                              else { // else make it false

                                                  Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>NO</font>');
                                                  //  Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_NewCardAdd_RequireApprovalYesNo').setHtml('<font size=2 color=black>.</font>');
                                                  //   Ext.getCmp('htmlisStampRulePopUpText').setHidden(true);
                                                  globalEditCard_RequireApprovalYesNo = "NO";
                                              }


                                          },


                                      }


                                  },
                                   {
                                       margin: '0 0 0 0',
                                       id: 'htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo',
                                       html: '<font size=2 color=black>NO</font>',

                                   },
                              ]

                          },









          {
              margin: '13 0 0 0',
              hidden: true,
              id:'htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges',
              html: '<font size=2 color=black>Membership Card Fee Charges</font>',

          },
           {
               id: 'htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield',
               margin: '-2 0 0 0',
               hidden: true,
               width: '40%',
               height: 20,
               html: '<input type="number" readOnly oninput="FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges`,`Membership Card Fee Charge`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges`)"       id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges"   style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
           },

             {
                 xtype: 'container',
                 width: '100%',
                 margin: '13 0 0 0',
                 id:'containerFloatPanel_MembershipCardManagement_EditCard_OnlinePaymentLinkFee',
                 hidden: true,
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
                                       
                                          html: '<font size=2 color=black>Online Payment Fee Link(Optional)</font>',

                                      },



                                      ]
                                  },




             {
                 margin: '-2 0 0 0',
                 id: 'FloatPanel_MembershipCardManagement_EditCard_MembershipCardPaymentFeeMethod',
              
                 width: '100%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardOnlinePaymentFeeLink"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

             },


                              ]

                          },


                           //{
                           //    xtype:'container'

                           //},
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_MembershipCardManagement_MembershipCardOnlinePaymentFeeLink',
                              
                                 //  badgeText: '1',
                                 margin: '0 0 -10 0',
                                 height: 35,
                                 width: 35,
                                 html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                                 ui: 'plain',
                                 handler: function () {
                                     Swal.fire(
'Membership Card Online Payment Fee',
'Provide  Merchant Payment gateway link for user to pay the fee thru the online method.',
'info'
)
                                 
                                 }
                             },

                 ]

             },

             

         {
             margin: '13 0 0 0',
             hidden: true,
             html: '<font size=2 color=black>MembershipCard Start Date</font>',

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
                    {
                        margin: '-2 0 0 0',

                        html: ' <input type="date" id="MembershipCardStartDate">',

                    },
                     {
                         xtype: 'button',
                         hidden: true,
                         id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardStartDateSave',
                         //  badgeText: '1',
                         margin: '-5 0 0 0',
                         //height: 30,
                         //width: 35,
                         html: '<img src="resources/icons/saveWhiteTwo.png" width="25" height="25" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {

                         }
                     },
             ]
         },





         {
             margin: '13 0 0 0',
         hidden:true,
             html: '<font size=2 color=black>Membership Card End (in Month)</font>',

         },

         {
             xtype: 'container',
             hidden:true,
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
                  {
                      hidden: true,
                      margin: '-2 0 0 0',
                      id: 'htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate',
                      html: ' <input type="date" id="MembershipCardEndDate">',
                    

                  },
                   //{

                   //    margin: '-2 0 0 0',
                   //    width: '85%',
                   //    height: 20,
                   //    id: 'htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtFieldMonthValue',
                   //    html: '<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDateMonthValue"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                   //},


                          {
                            
                              margin: '-2 0 0 0',
                              width: '85%',
                             
                              height: 20,
                              id: 'htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField',
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },

                            {
                                xtype: 'container',
                               
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'
                                },



                                margin: '-10 0 0 0',
                                items: [

                                    {
                                        margin: '8 -11 0 -85',
                                        id: 'FloatPanel_MembershipCardManagement_EditCard_CheckboxNoEndDate',

                                        html: '<input type="checkbox" value="no-end-date" id="FloatPanel_MembershipCardManagement_EditCard_noenddate_checkbox" name="Editnoenddate" >',
                                    },
                                    {
                                        margin: '7 0 0 -90',
                                        id: 'FloatPanel_MembershipCardManagement_EditCard_CheckboxNoEndDateFont',
                                        html: '<button style="background-color: Transparent;background-repeat:no-repeat;border: none;cursor:pointer;overflow: hidden;outline:none;color:black;" id="btnnoenddate" ">Valid lifetime</button>'
                                        //   html: '<font size="2px" color="white">Remember Me?</font>',
                                    }
                                ]

                                //id: 'rememberMeCheckboxID',
                                //html: '<input type="checkbox" value="remember-me" id="remember_me" onclick="handleClick(this);" >RememberMe',

                            },

                  
             ]
         },








         




















         ////////////////////////////////////////////////////////////////

             //{
             //    xtype: 'tabpanel',
             //    // hidden: true,
             //    //  hidden:true,
             //    id: 'tabpanelFloatPanel_AyohaCardManagement',
             //    style: "background-color: transparent;",
             //    // style: 'border-top:2px solid #ECF0F1;background: white;',
             //    // style: 'background-color: black;',
             //    // margin: '-20 0 0 -26',
             //    // margin: '25 0 0 0',

             //    //width: 200,
             //    width: '96%',
             //    height: '100%',
             //    //height: 120,
             //    //height: 50,
             //    //  zIndex: 200,
             //    //  docked: 'bottom',
             //    tabBarPosition: 'top',
             //    ui: 'plain',
             //    // docked: 'bottom',

             //    initialize: function (c) {
             //        //this.getTabBar().hide();


             //    },



             //    items: [
             //         //////////////////////////////////-Branch Participate



             /////////////////////////////     ///////////////////////////     ///////////////////////////

             //        ]



             //        },



               {

                   margin: '30 0 0 0',
                   html: '<font size=3 color=black>Card Background Image(Front)</font>',

               },

         {

             xtype: 'container',
             style: ' background-color:transparent',
             margin: '10 0 0 5',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'
             },
             items: [
                 {

                     id: 'FloatPanel_MembershipCardManagement_EditCard_BackgroundImgCard',
                     // iconCls: 'list',
                     html: '<div ><img src="resources/icons/AddCustomerWhite.png" width="100%" height="250px" alt="Company Name"></div>',

                 },

             ]

         },









           {
               xtype: 'container',
               style: ' background-color:transparent',
               id: 'ContainerFloatPanel_MembershipCardManagement_EditCard_BackgroundImgUploadImage',
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
                         id: 'HtmlinputImgFloatPanel_MembershipCardManagement_EditCardtUploadedImage',
                         hidden: true,
                         margin: '0 0 0 0',
                         width: '100%',
                         html: '<input type="file" id="inputImg-FloatPanel_MembershipCardManagement_EditCard_UploadedImage" accept="image/*"  onchange="inputImgFloatPanel_MembershipCardManagement_EditCardUploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                         //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                     },






                                  {

                                      margin: '-2 0 0 0',
                                      width: '105%',
                                      height: 20,
                                      html: '<input type="text" id="inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                  },

                                    ]

                                },


                                 //{
                                 //    xtype:'container'

                                 //},
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImage',
                                       name: 'clickablebtnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImage',
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

           ///////////////////////////////////////////////////////////////

               {

                   margin: '30 0 0 0',
                   html: '<font size=3 color=black>Card Background Image(Back)</font>',

               },

         {

             xtype: 'container',
             style: ' background-color:transparent',
             margin: '10 0 0 5',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'
             },
             items: [
                 {

                     id: 'FloatPanel_MembershipCardManagement_EditCard_BackgroundImgCard_back',
                     // iconCls: 'list',
                     html: '<div ><img src="resources/icons/AddCustomerWhite.png" width="100%" height="250px" alt="Company Name"></div>',

                 },

             ]

         },









           {
               xtype: 'container',
               style: ' background-color:transparent',
               id: 'ContainerFloatPanel_MembershipCardManagement_EditCard_BackgroundImgUploadImage_back',
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
                         id: 'HtmlinputImgFloatPanel_MembershipCardManagement_EditCardtUploadedImage_back',
                         hidden: true,
                         margin: '0 0 0 0',
                         width: '100%',
                         html: '<input type="file" id="inputImg-FloatPanel_MembershipCardManagement_EditCard_UploadedImage_back" accept="image/*"  onchange="inputImgFloatPanel_MembershipCardManagement_EditCardUploadedImage_back()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                         //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                     },






                                  {

                                      margin: '-2 0 0 0',
                                      width: '105%',
                                      height: 20,
                                      html: '<input type="text" id="inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage_back" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">'
                                  },

                                    ]

                                },


                                 //{
                                 //    xtype:'container'

                                 //},
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImage_back',
                                       name: 'clickablebtnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImage_back',
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

















           ////////////////////////////////////////////////////////////////////







      {
          xtype: 'container',          
          id: 'containerFloatPanel_MembershipCardManagement_EditCard_MembershipCardEntitleCampaing',
          margin: '50 0 0 0',
          width: '100%',
          style: {

              background: 'transparent',

          },
          layout: {
              type: 'hbox',
              pack: 'center',
              align: 'center'

          },
          items: [
              {
                
                  margin: '20 0 0 0',
                  html: '<font size=3 color=black>Membership Campaign</font>',

              },
              {
                  xtype: 'spacer'
              },
        
{
    xtype: 'button',
    hidden: true,
    id: 'txtFloatPanel_MembershipCardManagement_EditCard_MembershipCardEntitleCampaing',
    //  badgeText: '1',
    //margin: '0 -7 -12 0',
    argin: '0 -5 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=black>Campaign(s)</font>',
    ui: 'plain',
    handler: function () {
     
        FloatPanel_AyohaCardManagementShow_FromMembershipCardManagement();
    }
},
     {
         xtype: 'button',
         id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardEntitleCampaign',
         //  badgeText: '1',
         // hidden:true,
         //margin: '0 -5 -12 0',
         margin: '0 -7 -12 0',
         height: 35,
         width: 35,
         html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
         ui: 'plain',
         handler: function () {
             FloatPanel_AyohaCardManagementShow_FromMembershipCardManagement();

         }
     }, ]
      },








        {
            xtype: 'list',
           // hidden: true,
            //flex:1,
            height: 600,
            store: 'MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore',
            id: 'FloatPanel_MembershipCardManagement_EditCard_MerchantMembershipCardEntitleCampaingList',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
           // style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',




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
          //  itemTpl: '<div class="myContent" style="margin:15px 0px 0px -8px;width:105%;">' +
          ////  itemTpl: '<div class="myContent">' +
          //               '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;" ><tr><td style="background-color:transparent;border-radius: 5px 0px 0px 5px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{CampaignIcon}"style="width: 60px; height: 60px;" /></td><td style="background-color:transparent;border-color:black;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><div style="width:100%;text-align:left;margin:5px 0px 0px 0px"><font size=4><b>{CampaignName}</b></font></div><br><div style="width:100%;text-align:left;margin:-18px 0px 0px 0px">Campaign Type:{CampaignType}</div><br><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px"></div><br>Start Date:{CampaignStartDate}<br>End Date:{CampaignEndDate}</div></div><div style="width:100%;text-align:right;margin:-25px 0px 0px 0px;"><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 55px;" /></button><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/morePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 15px;" /></button></div></td></tr></table>' +
          //                '</div>',


            itemTpl: '<div class="myContent">' +
        //  itemTpl: '<div class="myContent">' +
                     //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;" ><tr><td style="background-color:transparent;border-radius: 5px 0px 0px 5px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{CampaignIcon}"style="width: 60px; height: 60px;" /></td><td style="background-color:transparent;border-color:black;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><div style="width:100%;text-align:left;margin:5px 0px 0px 0px"><font size=4><b>{CampaignName}</b></font></div><br><div style="width:100%;text-align:left;margin:-18px 0px 0px 0px">Campaign Type:{CampaignType}</div><br><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px">Start Date:{CampaignStartDate}</div><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px"><br>End Date:{CampaignEndDate}</div><div style="width:100%;text-align:right;margin:-25px 0px 0px 0px;"><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 55px;" /></button><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/morePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 15px;" /></button></div></td></tr></table>' +
                     '<div style="width:100%;text-align:right;margin:-5px 0px 0px 20px;"><button OnClick="FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledDelete({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/xsignPurpleOri.png" style="width: 18px; height: 18px; margin:-3px 0px 0px 15px;" /></button></div><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px"><font size=4><b>{CampaignName}</b></font></div><br><div style="width:100%;text-align:left;margin:-28px 0px 0px -2px"><b>({CampaignType})</b></div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px">Created Date:{CreatedDate}</div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px">Created By:{CreatedBy}</div><div style="width:100%;text-align:right;margin:-25px 0px 0px 10px;"><button OnClick="FloatPanel_MembershipCardManagment_EditCard_FloatPanel_AyohaCardManagement_PreviewCardShow({ID})" class="button3viewloyaltycard">View Card</button></div>' +

                        '</div>',

            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },

            //////////////////////////////////-Branch Participate
        


        {
            xtype: 'container',
            id: 'containerFloatPanel_AyohaCardManagement_EditCard_EnterpriseParticipated',
            width: '100%',
            margin: '50 0 0 0',
            style: {

                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [
                {
                    margin: '20 0 0 0',

                    html: '<font size=3 color=black>Entitle Enterprise/Branch</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_MembershipCardManagement_EditCard_EnterpriseParticipated',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -7 -12 0',
                height: 35,
                width: 35,
                html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaCardManagement_EnterprisesListShow();
                    //var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCardType').value;
                    //var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value;
                    //var EnterpriseAccNo = GetEnterpriseAccNo();
                    //var StartDate = GetStartDateStampCardCampaign();
                    //var EndDate = GetEndDateStampCardCampaign();
                    //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

                }
            },
  {
      xtype: 'button',
       hidden: true,
      id: 'txtFloatPanel_MembershipCardManagement_EditCard_EnterpriseParticipated',
      //  badgeText: '1',
      margin: '0 -7 -12 0',
      height: 40,
      width: 100,
      html: '<font size=2 color=black>Enterprise(s)</font>',
      ui: 'plain',
      handler: function () {
          FloatPanel_AyohaCardManagement_EnterprisesListShow();
          //var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCardType').value;
          //var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value;
          //var EnterpriseAccNo = GetEnterpriseAccNo();
          //var StartDate = GetStartDateStampCardCampaign();
          //var EndDate = GetEndDateStampCardCampaign();
          //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

      }
  },
            ]
        },




        {
            xtype: 'list',
            //flex:1,
            height: 250,
            store: 'MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore',
            id: 'FloatPanel_MembershipCardManagement_EditCard_EnterpriseEntitledList',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            itemTpl: '<div class="myContent">' +
                        //'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:black;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
                         '<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:black;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-3px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div><div style="width:100%;text-align:right;margin:-20px 0px 0px 0px;"><button OnClick="FloatPanel_MembershipCardManagement_EditCard_MembershipCardEnterprisesEntitledDelete({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div></th></tr><tr></tr></thead></table>' +


                           '</div>',
            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },


        //////////////////////////////////////


      {
          xtype: 'container',
          id: 'containerFloatPanel_MembershipCardManagement_EditCard_MembershipCardTerms',
          margin: '50 0 0 0',
          width: '100%',
          style: {

              background: 'transparent',

          },
          layout: {
              type: 'hbox',
              pack: 'center',
              align: 'center'

          },
          items: [
              {

                  margin: '20 0 0 0',
                  html: '<font size=3 color=black>Membership Card Terms And Conditions</font>',

              },
              {
                  xtype: 'spacer'
              },

{
    xtype: 'button',
    hidden: true,
    id: 'txtFloatPanel_MembershipCardManagement_EditCard_MembershipCardTerms',
    //  badgeText: '1',
    //margin: '0 -7 -12 0',
    argin: '0 -5 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=black>Campaign(s)</font>',
    ui: 'plain',
    handler: function () {

        FloatPanel_AyohaCardManagementShow_FromMembershipCardManagement();
    }
},
     {
         xtype: 'button',
         id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardTerms',
         //  badgeText: '1',
         // hidden:true,
         //margin: '0 -5 -12 0',
         margin: '0 -2 -12 0',
         height: 35,
         width: 35,
         html: '<img src="resources/icons/MaximizePurple02.png" width="25" height="25" alt="Company Name">',
         ui: 'plain',
         handler: function () {
             FloatPanel_MembershipCardManagement_TermAndConditionShow();
            // FloatPanel_AyohaCardManagementShow_FromMembershipCardManagement();

         }
     }, ]
      },








        {
            xtype: 'list',
            // hidden: true,
            //flex:1,
            height: 250,
            store: 'MembershipCardTermsLoadByMembershipCardCodeStore',
            id: 'FloatPanel_MembershipCardManagement_EditCard_MembershipCardTermsList',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            //  itemTpl: '<div class="myContent" style="margin:15px 0px 0px -8px;width:105%;">' +
            ////  itemTpl: '<div class="myContent">' +
            //               '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;" ><tr><td style="background-color:transparent;border-radius: 5px 0px 0px 5px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{CampaignIcon}"style="width: 60px; height: 60px;" /></td><td style="background-color:transparent;border-color:black;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><div style="width:100%;text-align:left;margin:5px 0px 0px 0px"><font size=4><b>{CampaignName}</b></font></div><br><div style="width:100%;text-align:left;margin:-18px 0px 0px 0px">Campaign Type:{CampaignType}</div><br><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px"></div><br>Start Date:{CampaignStartDate}<br>End Date:{CampaignEndDate}</div></div><div style="width:100%;text-align:right;margin:-25px 0px 0px 0px;"><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 55px;" /></button><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/morePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 15px;" /></button></div></td></tr></table>' +
            //                '</div>',


            itemTpl: '<div class="myContent">' +
        //  itemTpl: '<div class="myContent">' +
                     //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;" ><tr><td style="background-color:transparent;border-radius: 5px 0px 0px 5px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{CampaignIcon}"style="width: 60px; height: 60px;" /></td><td style="background-color:transparent;border-color:black;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><div style="width:100%;text-align:left;margin:5px 0px 0px 0px"><font size=4><b>{CampaignName}</b></font></div><br><div style="width:100%;text-align:left;margin:-18px 0px 0px 0px">Campaign Type:{CampaignType}</div><br><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px">Start Date:{CampaignStartDate}</div><div style="width:100%;text-align:left;margin:-32px 0px 0px 0px"><br>End Date:{CampaignEndDate}</div><div style="width:100%;text-align:right;margin:-25px 0px 0px 0px;"><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 55px;" /></button><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/morePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px 15px;" /></button></div></td></tr></table>' +
                     '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px"><font size=2><b>{ModifiedTermAndConditions}....</b></font></div><br><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px"><b>Created By:{CreatedBy}</b></div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px"><b>Status:{TermsStatus}</b></div><br><div style="width:100%;text-align:left;margin:-25px 0px 0px 0px"><b>Status Date:{CreatedDate}</b></div>{ModifiedTermsStatus}' +

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






        });

    return _FloatPanel_MembershipCardManagement_EditCard;
}


function FloatPanel_MembershipCardManagement_EditCardShow() {

    Ext.Viewport.remove(_FloatPanel_MembershipCardManagement_EditCard);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardManagement_EditCard());
    this.overlay.show();
    isFloatPanel_MembershipCardManagement_EditCardOpen = 'Y';

   // alert('FloatPanel_MembershipCardManagement_EditCardShow');

    var checkbox = document.querySelector("input[name=noenddate]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
         
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate').setHidden(true);
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHidden(false);           
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHtml('<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">');
            document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = "Membership Valid LifeTime";
            globalisValidLifeTime = "YES";


        } else {
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate').setHidden(true);
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHidden(false);
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">');       
            document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = 12;
            globalisValidLifeTime = "NO";
        }
    });



    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          MembershipCardManagement_EditCard_UploadBackgroundImage();
      }
    );






    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges').value = 0.00;
    document.getElementById('inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage').value = "Default";
}


function FloatPanel_MembershipCardManagement_EditCardShow_Edit(val) {

    Ext.Viewport.remove(_FloatPanel_MembershipCardManagement_EditCard);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardManagement_EditCard());
    this.overlay.show();
    isFloatPanel_MembershipCardManagement_EditCardOpen = 'Y';

    //console.log(ID)
    var IDs = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var MembershipCardCode = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var MembershipCardFee = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var MembershipCardType = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var RowStatus = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var ExpiredDate = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var MembershipCardBackgroundImg = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var CreatedDate = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var CreatedBy = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var StartDate = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var MembershipCardName = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var MembershipCardFeePaymentCycle = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var StrExpiredDate = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var isValidLifeTime = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var isRequiredApproval = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedBy = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedDate = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var EnterprisesName = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var EnterprisesLogo = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAddress = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseType = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var BusinessTypeIconPath = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var BusinessTypeGroup = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedEnterprisesName = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedEnterprisesLogo = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);



    var MembershipCardBackgroundImgName_back = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);
    var MembershipCardBackgroundImg_back = _DataStore_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore.findRecord('ID', val, 0, false, false, true);

    ///   var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseHQAccNo');
    var ID = IDs.get('ID');
    var MembershipCardCodes = MembershipCardCode.get('MembershipCardCode');
    var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
    var MembershipCardFees = MembershipCardFee.get('MembershipCardFee');

    var MembershipCardTypes = MembershipCardType.get('MembershipCardType');
    var RowStatuss = RowStatus.get('RowStatus');
    var ExpiredDates = ExpiredDate.get('ExpiredDate');
    var MembershipCardBackgroundImgs = MembershipCardBackgroundImg.get('MembershipCardBackgroundImg');
    var CreatedDates = CreatedDate.get('CreatedDate');
    var CreatedBys = CreatedBy.get('CreatedBy');
    var StartDates = StartDate.get('StartDate');
    var MembershipCardNames = MembershipCardName.get('MembershipCardName');
    var MembershipCardFeePaymentCycles = MembershipCardFeePaymentCycle.get('MembershipCardFeePaymentCycle');
    var StrExpiredDates = StrExpiredDate.get('StrExpiredDate');
    var isValidLifeTimes = isValidLifeTime.get('isValidLifeTime');
    var isRequiredApprovals = isRequiredApproval.get('isRequiredApproval');
    var ModifiedBys = ModifiedBy.get('ModifiedBy');
    var ModifiedDates = ModifiedDate.get('ModifiedDate');
    var EnterprisesNames = EnterprisesName.get('EnterprisesName');
    var EnterprisesLogos = EnterprisesLogo.get('EnterprisesLogo');
    var EnterpriseAddresss = EnterpriseAddress.get('EnterpriseAddress');
    var EnterpriseTypes = EnterpriseType.get('EnterpriseType');
    var BusinessTypeIconPaths = BusinessTypeIconPath.get('BusinessTypeIconPath');
    var BusinessTypeGroups = BusinessTypeGroup.get('BusinessTypeGroup');


    var MembershipCardBackgroundImgName_backs = MembershipCardBackgroundImgName_back.get('MembershipCardBackgroundImgName_back');
    var MembershipCardBackgroundImg_backs = MembershipCardBackgroundImg_back.get('MembershipCardBackgroundImg_back');

    globalEditCard_RequireApprovalYesNo = isRequiredApprovals;
  


   // alert(MembershipCardBackgroundImg_backs)
    //var checkbox = document.querySelector("input[name=noenddate]");

    //checkbox.addEventListener('change', function () {
    //    if (this.checked) {

    //        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate').setHidden(true);
    //        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHidden(false);          
    //        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHtml('<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">');
    //        document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = "Membership Valid LifeTime";
    //        globalisValidLifeTime = isValidLifeTimes;


    //    } else {
    //        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate').setHidden(true);
    //        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHidden(false);
    //       Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">');
    //       document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = StrExpiredDates;
    //        globalisValidLifeTime = isValidLifeTimes;
    //    }
    //});


    var checkbox = document.querySelector("input[name=Editnoenddate]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {

            //   Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate').setHidden(true);
            //  Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate_txtField').setHidden(false);
            //  Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate_txtField').setHtml('<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">');

            var PC = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value;

            if (PC == "OneTime Fee" || PC == "FOC") {



                Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHtml('<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate" readOnly style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">');
                document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = "Membership Valid LifeTime";

                globalisValidLifeTime = "YES";
            } else {

                swalFireFail("Valid LifeTime Only Applicable for FOC and One Time Fee!");
                Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">');
                document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = 12;

                globalisValidLifeTime = "NO";
                document.getElementById('FloatPanel_MembershipCardManagement_EditCard_noenddate_checkbox').checked = false;

            }




        } else {
            //  Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate').setHidden(true);
            // Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate_txtField').setHidden(false);
            // Ext.getCmp('htmlFloatPanel_MembershipCardManagement_NewCardAdd_MembershipCardEndDate_txtField').setHtml('<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate"  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:12px;">');
            document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = 12;
            globalisValidLifeTime = "NO";
        }
    });




    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          MembershipCardManagement_EditCard_UploadBackgroundImage();
      }
    );



    var containerView_back = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImage_back]')[0];
    var containerViewEl_back = containerView_back.element;
    containerViewEl_back.on('singletap',
      function (event, node, options, eOpts) {

          MembershipCardManagement_EditCard_UploadBackgroundImage_back();
      }
    );




    var vv = MembershipCardBackgroundImgs.split('/');

    
  
    console.log(MembershipCardBackgroundImgs)

    
    Ext.getCmp('FloatPanel_MembershipCardManagement_EditCard_BackgroundImgCard').setHtml('<div ><img src="' + MembershipCardBackgroundImgs + '"  style="width:97%;height:210px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');
    Ext.getCmp('FloatPanel_MembershipCardManagement_EditCard_BackgroundImgCard_back').setHtml('<div ><img src="' + MembershipCardBackgroundImg_backs + '"  style="width:97%;height:210px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');
    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value = val;
    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value=MembershipCardCodes;
    // "EnterpriseAccNo": GetEnterpriseAccNo(),
    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges').value = MembershipCardFees;
    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType').value =MembershipCardTypes;

    globalMembershipCardManagement_EditCard_UploadedImage = "ExistingImage";
    globalMembershipCardManagement_EditCard_UploadedImage_Back = "ExistingImage";
    document.getElementById('MembershipCardStartDate').value = StartDates;
    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardName').value = MembershipCardNames;
    document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value = MembershipCardFeePaymentCycles;
   
    document.getElementById('inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage').value = vv[6];
    document.getElementById('inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage_back').value = MembershipCardBackgroundImgName_backs;
    if (isValidLifeTimes == "YES") {
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHidden(false);
        document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = StrExpiredDates;
        document.getElementById('MembershipCardEndDate').value = ExpiredDates;      
        document.getElementById("FloatPanel_MembershipCardManagement_EditCard_noenddate_checkbox").checked = true;
        globalisValidLifeTime = isValidLifeTimes;
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNoTxt').setHidden(false);
        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHidden(false);



        
        

    }
    if (isValidLifeTimes == "NO") {
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHidden(false);
        document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = StrExpiredDates;
        document.getElementById('MembershipCardEndDate').value = ExpiredDates;
        document.getElementById("FloatPanel_MembershipCardManagement_EditCard_noenddate_checkbox").checked = false;
        globalisValidLifeTime = isValidLifeTimes;

    }

    if (MembershipCardFeePaymentCycles != "FOC") {
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges').setHidden(false);
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield').setHidden(false);
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNoTxt').setHidden(true);
        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHidden(true);
    } else {
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNoTxt').setHidden(false);
        Ext.getCmp('containertogglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHidden(false);
    }
    //alert('FloatPanel_MembershipCardManagement_EditCardShow_Edit: EnterpriseAccNo:' + EnterpriseAccNos);

    if (globalEditCard_RequireApprovalYesNo == "YES") {
      
        Ext.getCmp('togglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setValue(true);
        Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>YES</font>');
        
    }
    if (globalEditCard_RequireApprovalYesNo == "NO") {

        Ext.getCmp('togglefieldFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setValue(false);
        Ext.getCmp('htmlisFloatPanel_MembershipCardManagement_EditCard_RequireApprovalYesNo').setHtml('<font size=2 color=black>NO</font>');

    }
   

   Ext.getCmp('btnFloatPanel_MembershipCardManagement_EditCard_MembershipFeeCycleList').setHidden(true);

    


    FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore();
  //  FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore();
    FloatPanel_MembershipCardManagement_EditCard_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore();
    FloatPanel_MembershipCardManagement_EditCard_MembershipCardTermsLoadByMembershipCardCodeStore();
              

}

function MembershipCardManagement_EditCard_UploadBackgroundImage() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_MembershipCardManagement_EditCard_UploadedImage").click();
    });
}


function MembershipCardManagement_EditCard_UploadBackgroundImage_back() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_MembershipCardManagement_EditCard_UploadedImage_back").click();
    });
}

var globalMembershipCardManagement_EditCard_UploadedImage;
function inputImgFloatPanel_MembershipCardManagement_EditCardUploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_MembershipCardManagement_EditCard_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MembershipCardManagement_EditCard_UploadedImage').files[0].name;

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
                    globalMembershipCardManagement_EditCard_UploadedImage = event.target.result;
                    document.getElementById('inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage').value = fileName;


                    Ext.getCmp('FloatPanel_MembershipCardManagement_EditCard_BackgroundImgCard').setHtml('<div ><img src="' + globalMembershipCardManagement_EditCard_UploadedImage + '"  style="width:97%;height:210px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');


                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}



var globalMembershipCardManagement_EditCard_UploadedImage_back;
function inputImgFloatPanel_MembershipCardManagement_EditCardUploadedImage_back() {
    var file = document.getElementById('inputImg-FloatPanel_MembershipCardManagement_EditCard_UploadedImage_back').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_MembershipCardManagement_EditCard_UploadedImage_back').files[0].name;

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
                    globalMembershipCardManagement_EditCard_UploadedImage_back = event.target.result;
                  //  alert(globalMembershipCardManagement_EditCard_UploadedImage_back)
                    document.getElementById('inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage_back').value = fileName;


                    Ext.getCmp('FloatPanel_MembershipCardManagement_EditCard_BackgroundImgCard_back').setHtml('<div ><img src="' + globalMembershipCardManagement_EditCard_UploadedImage_back + '"  style="width:97%;height:210px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');


                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}




function FloatPanel_MembershipCardManagement_EditCardHide() {
   

  
    _FloatPanel_MembershipCardManagement_EditCard.hide(); isFloatPanel_MembershipCardManagement_EditCardOpen = 'N';

}






var globalisValidLifeTime="NO";

function FloatPanel_MembershipCardManagement_EditCard_Save() {

    var _EditCardStampCardCampaignName = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardName').value;

    var MembershipCardLevelType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType').value;

   
var MembershipFeePaymentCycle=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value;
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
    var MembershipCardFeeCharges=parseInt(document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges').value);

    if(MembershipCardFeeCharges){
      
       
    }else{
        swalFireFail("Membership Card Fee Charges Not Valid!!")
        FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges`,`Membership Card Fee Charge`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges`);
        return
    }



    if(MembershipCardFeeCharges<=0){
    swalFireFail("Membership Card Fee Charges Not Valid!!")
    FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges`,`Membership Card Fee Charge`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges`);
    return
}
}





    //var EditCardCampaignStartDate = new Date(document.getElementById('MembershipCardStartDate').value);
    //var EditCardCampaignEndDate = new Date(document.getElementById('MembershipCardEndDate').value);


    if (_EditCardStampCardCampaignName.length < 2) {
        swalFireFail("Membership Name Not Valid!!")
       // FloatPanel_MembershipCardManagement_NewCardAdd_validationTextValidated(`lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardName`,`Membership Card Name`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardName`);
        FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardName`,`Membership Card Name`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardName`);
        return
    }

    if (MembershipCardLevelType.length < 2) {
        swalFireFail("Membership Card Level Type Not Valid!!")
        FloatPanel_MembershipCardManagement_NewCardAdd_validationTextReset(`lblFloatPanel_MembershipCardManagement_EditCard_MembershipCardLevel`,`Membership Card Level`,`input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType`);
        return
    }


    //if (EditCardCampaignStartDate == "Invalid Date") {
    //    swalFireFail("Invalid Start Date!!");
    //    return;
    //}

    //if (globalisValidLifeTime == "NO") {
    //    if (EditCardCampaignEndDate == "Invalid Date") {
    //        swalFireFail("Invalid End Date!!!!");
    //        return;
    //    }
    //}

    


    //// Extract pieces of the date:
    //// var month = EditCardCampaignStartDate.getMonth(); // months start counting from zero!
    //var dayCampaignStart = parseInt(EditCardCampaignStartDate.getDate() + EditCardCampaignStartDate.getMonth() + EditCardCampaignStartDate.getFullYear());
    //var dayCampaignEnd = parseInt(EditCardCampaignEndDate.getDate() + EditCardCampaignEndDate.getMonth() + EditCardCampaignEndDate.getFullYear());





    //console.log(dayCampaignStart);
    //console.log(dayCampaignEnd);
    // var MembershipCardEndDateNoEndDate = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value;

    // if (globalisValidLifeTime == "NO") {

    //     if (MembershipCardEndDateNoEndDate == 0) {
    //         swalFireFail("Invalid End Month!!");
    //         return;
    //     }
 
    // }
       

    //    if (EditCardCampaignEndDate == "Invalid Date") {
    //        swalFireFail("Invalid End Date!!");
    //        return;
    //    }

    //    if (dayCampaignStart > dayCampaignEnd) {
    //        // alert("Fail-Campaing date Has passed");
    //        swalFireFail("Save Failed!<br>*Start date Has passed!!");
    //        return;

    //    }

    //    if (dayCampaignStart == dayCampaignEnd) {
    //        swalFireFail("Save Failed!<br>*Date start and date end is same!!");
    //        return;

    //    }
    //}





    //  var year = EditCardCampaignStartDate.getFullYear();


//alert(globalMembershipCardManagement_EditCard_UploadedImage_back)



    var imgbase64;

    if (globalMembershipCardManagement_EditCard_UploadedImage) {
        imgbase64 = globalMembershipCardManagement_EditCard_UploadedImage;
    } else {
        imgbase64 = "ExistingImage";
    }



    var imgbase64_back;

    if (globalMembershipCardManagement_EditCard_UploadedImage_back) {
        imgbase64_back = globalMembershipCardManagement_EditCard_UploadedImage_back;
    } else {
        imgbase64_back = "ExistingImage";
    }



    var obj = {
        "ID": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value,
        "MembershipCardCode": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "MembershipCardFee": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges').value,
        "MembershipCardType": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType').value,
        "ExpiredDate": document.getElementById('MembershipCardEndDate').value,
        "MembershipCardBackgroundImg": imgbase64,
        "CreatedBy": GetCurrAyohaUserAccountNo(),
        "StartDate": document.getElementById('MembershipCardStartDate').value,
        "MembershipCardName": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardName').value,
        "MembershipCardFeePaymentCycle": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value,
        "StrExpiredDate": MembershipCardEndDateNoEndDate,
        "isValidLifeTime": globalisValidLifeTime,
        "MembershipCardBackgroundImgName": document.getElementById('inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage').value,
        "isRequiredApproval": globalEditCard_RequireApprovalYesNo,
        "MembershipCardBackgroundImgName_back": document.getElementById('inputName-FloatPanel_MembershipCardManagement_EditCard_UploadedImage_back').value,
        "MembershipCardBackgroundImg_back": imgbase64_back,
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
                 FloatPanel_MembershipCardManagement_EditCardHide();
                swalFireSuccess("Save Successfully!");
                FloatPanel_MembershipCardManagement_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore();
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




















//function FloatPanel_MembershipCardManagement_EditCard_MembershipLoadByEnterpriseHQAccNo() {

//    Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore').getProxy().setExtraParams({

//        StampCampaignCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value,
//    });
//    Ext.StoreMgr.get('StampCampaignStamperLoadByStampCampaignCodeStore').load();
//    var task = Ext.create('Ext.util.DelayedTask', function () {
//        Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore').getProxy().setExtraParams({

//            StampCampaignCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value,
//        });
//        Ext.StoreMgr.get('StampCampaignStamperLoadByStampCampaignCodeStore').load();
//        var myStore = Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore');
//        //StampCount = myStore.getCount();
//        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
//        // adjustHeight();
//        Ext.Viewport.setMasked(false);

//    });
//    task.delay(2000);
//}


function FloatPanel_MembershipCardManagement_EditCard_DeleteCard() {


   
    Swal.fire({
        title: 'Are you sure want To delete?',
        // text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "ID": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value,
                "MembershipCardCode": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
                "EnterpriseAccNo": GetEnterpriseAccNo(),
                "ModifiedBy": GetCurrentUserLogin()

            };
            console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/MembershipCard/MembershipCardDelete',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {

                        swalFireSuccess("Delete Succesfully!");
                        FloatPanel_MembershipCardManagement_EditCardHide();
                        //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
                        //Load_FloatPanel_MembershipCardManagement_EditCard_StampCampaignStamperLoadByStampCampaignCodeStore();
                        FloatPanel_MembershipCardManagement_MembershipCardLoadByEnterpriseAccNoMerchantVersionStore();

                    }
                    else {

                        swalFireFail("Delete Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                    }

                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!!");
                }

            });
        }
    });








}



function MembershipFeePaymentCycleSettingControlComponet() {

 
    var PaymentCycle = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value;

    if (PaymentCycle != "FOC") {
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges').setHidden(false);
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield').setHidden(false);
        Ext.getCmp('containerFloatPanel_MembershipCardManagement_EditCard_OnlinePaymentLinkFee').setHidden(true);
    } else {
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield').setHidden(true);
        Ext.getCmp('containerFloatPanel_MembershipCardManagement_EditCard_OnlinePaymentLinkFee').setHidden(true);
    }
}


function MembershipCardCampaingEntitled_InsertUpdate(CampaignCode, CampaignType,CampaignID,MembershipCardCode) {



if(CampaignID=="Point-Reward-Loyalty-Card")
{
   
    if(isFloatPanel_OpenAccountStepOpen=='Y'){
    MembershipCardCode=globalFloatPanel_OpenAccountStepMembershipCardCode
    CampaignID= globalFloatPanel_OpenAccountStepMembershipRowID
}else{
    MembershipCardCode=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value;
   
    CampaignID=document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value;

}
   

}
// alert(MembershipCardCode)
// alert(CampaignID)

// return;

    var obj = {
       // "ID": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID').value,
       "ID":CampaignID,
       "CampaignCode": CampaignCode,
        "EnterpriseHQAccNo": GetEnterpriseAccNo(),
        "EnterpriseAccNo": GetEnterpriseAccNo(),
       // "MembershipCardCode": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
       "MembershipCardCode":MembershipCardCode,
       "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),
        "RowStatus": "Active",
        "CampaignType": CampaignType,

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                globalCountPrivilgeOnMembershipCard=0;
if(isFloatPanel_OpenAccountStepOpen=='Y'){
    swalFireSuccess("Add Campaign/privilege to Membership Card Successfully!");
    FloatPanel_AyohaCardManagementHide();
    FloatPanel_OpenAccountStepHide();
    globalCountPrivilgeOnMembershipCard=1;
    return;
}



if(isFloatPanel_MerchantDiscountLoyaltySettingOpen=='Y'){

}else{
    swalFireSuccess("Add Successfully!");
    // FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore();
     FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore();

}
              
            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }
            FloatPanel_AyohaCardManagementHide();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });
}



var _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore;
function FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore() {
   // console.log(document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value);
  //  console.log(GetEnterpriseAccNo());
    Ext.getStore('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore').getProxy().setExtraParams({
        MembershipCardCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
        EnterpriseAccNo:  GetEnterpriseAccNo(),
    });
    Ext.StoreMgr.get('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore').getProxy().setExtraParams({
            MembershipCardCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
            EnterpriseAccNo: GetEnterpriseAccNo(),
        });
        Ext.StoreMgr.get('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore').load();
        var myStore = Ext.getStore('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore');
        var Count = myStore.getCount();
       
        _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore = Ext.getStore('MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore');
        LoadingPanelHide();
        Ext.Viewport.setMasked(false);

    });
    task.delay(500);
}


function FloatPanel_MembershipCardManagment_EditCard_FloatPanel_AyohaCardManagement_PreviewCardShow(val)
{
    
    
    var EnterpriseAccNo = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);
    var CampaignCode = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);
    var CampaignName = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);
    var CampaignType = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);
    var CreatedDate = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);
    var CampaignEndDate = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);
    var Remarks = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);
    var isRequiredStartEndDate = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);
var isCampaignExpired = _DataStore_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore.findRecord('ID', val, 0, false, false, true);





    var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
    var CampaignCodes = CampaignCode.get('CampaignCode');
    var CampaignNames = CampaignName.get('CampaignName');
    var CampaignTypes = CampaignType.get('CampaignType');
    var CreatedDate = CreatedDate.get('CreatedDate');
    var CampaignEndDates = CampaignEndDate.get('CampaignEndDate');
    var isRequiredStartEndDates = isRequiredStartEndDate.get('isRequiredStartEndDate');



    
        var isCampaignExpireds = isCampaignExpired.get('isCampaignExpired');

    var StampRuleRemarkss = Remarks.get('Remarks');
    var EnterpriseLogo = GetEnterpriseLogoPath();
    var EnterpriseName = GetEnterpriseName();


    

    if (CampaignTypes == "Stamp Reward Loyalty Card") {
        LoadingPanelShow(getLoadingIcon(),'Loading...');
        FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCodes, EnterpriseAccNos, CampaignTypes, CreatedDate, "No End Date", CampaignNames, StampRuleRemarkss, EnterpriseLogo, EnterpriseName);
    }
    if (CampaignTypes == "Point Reward Loyalty Card") {      
       // FloatLoyaltyCardPointShow(CampaignNames, CampaignCodes);
       LoadingPanelShow(getLoadingIcon(),'Loading...');
        FloatLoyaltyCardPointShow(CampaignNames, CampaignCodes, EnterpriseLogo, EnterpriseName, EnterpriseAccNos, CampaignEndDates, isRequiredStartEndDates, isCampaignExpireds);
    }
    if (CampaignTypes == "Membership Card Discount") {      
        LoadingPanelShow(getLoadingIcon(),'Loading...');
        FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCodes,EnterpriseAccNos);
    }
    if (CampaignTypes == "Membership Card Contest") { 
        LoadingPanelShow(getLoadingIcon(),'Loading...');     
        FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCodes);
       // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCodes,EnterpriseAccNos);
    }
    
    if (CampaignTypes == "Membership Card Event") {      
       // FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore(CampaignCodes);
       LoadingPanelShow(getLoadingIcon(),'Loading...');
        FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadByEventCodeStore(CampaignCodes);
     }

    
}


function FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledDelete(ID) {



    Swal.fire({
        title: 'Are you sure want To delete?',
        // text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "ID": ID,
                "CreatedBy": GetCurrentUserLogin(),

            };
            console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledDelete',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {

                        swalFireSuccess("Delete Succesfully!");
                        //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
                      
                        FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledMerchantLoadByMembershipCardCodeStore();
                        

                    }
                    else {

                        swalFireFail("Delete Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                    }
                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!!");
                }

            });
        }
    });








}









function MembershipCardEnterprisesEntitledInsertUpdate(EnterpriseHQAccNo, EnterpriseAccNo) {


    var obj = {
        "ID": 0,
        "CampaignCode": "NA",
        "EnterpriseHQAccNo": EnterpriseAccNo,
        "EnterpriseAccNo": EnterpriseHQAccNo,
        "MembershipCardCode": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),
        "RowStatus": "Active",
    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/MembershipCardEnterprisesEntitled/MembershipCardEnterprisesEntitledInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                FloatPanel_AyohaCardManagement_EnterprisesListHide();
                swalFireSuccess("Add Successfully!");
                FloatPanel_MembershipCardManagement_EditCard_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore();
                //FloatPanel_MembershipCardManagement_EditCard_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore();

            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }
            //FloatPanel_AyohaCardManagementHide();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });
}


function FloatPanel_MembershipCardManagement_EditCard_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore() {

    Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
        MembershipCardCode:document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),
    });
    Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
            MembershipCardCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
            EnterpriseHQAccNo: GetEnterpriseHQAccNo(),
        });
        Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
        var myStore = Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore');
        var StampCount = myStore.getCount();
        
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}





var globalMembershipCardTermsAndCondition;
var globalMembershipCardTermsAndConditionCreatedBy;
var globalMembershipCardTermsAndConditionCreatedDate;
function FloatPanel_MembershipCardManagement_EditCard_MembershipCardTermsLoadByMembershipCardCodeStore() {

    Ext.getStore('MembershipCardTermsLoadByMembershipCardCodeStore').getProxy().setExtraParams({
        MembershipCardCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
        EnterpriseAccNo: GetEnterpriseHQAccNo(),
    });
    Ext.StoreMgr.get('MembershipCardTermsLoadByMembershipCardCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('MembershipCardTermsLoadByMembershipCardCodeStore').getProxy().setExtraParams({
            MembershipCardCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardCode').value,
            EnterpriseAccNo: GetEnterpriseHQAccNo(),
        });
       Ext.StoreMgr.get('MembershipCardTermsLoadByMembershipCardCodeStore').load();
        var myStore = Ext.getStore('MembershipCardTermsLoadByMembershipCardCodeStore');
        var Count = myStore.getCount();

        if (Count > 0) {
            var modelRecord = myStore.getAt(0);
            globalMembershipCardTermsAndCondition = modelRecord.get('TermAndConditions');
            globalMembershipCardTermsAndConditionCreatedBy = modelRecord.get('CreatedBy');
            globalMembershipCardTermsAndConditionCreatedDate = modelRecord.get('CreatedDate');
            globalTermAndConditionStatus = modelRecord.get('TermsStatus');
        }


       
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(500);
}







function FloatPanel_MembershipCardManagement_EditCard_MembershipCardEnterprisesEntitledDelete(ID) {



    Swal.fire({
        title: 'Are you sure want To delete?',
        // text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "ID": ID,
                "CreatedBy": GetCurrentUserLogin(),

            };
            console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/MembershipCardEnterprisesEntitled/MembershipCardEnterprisesEntitledDelete',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {

                        swalFireSuccess("Delete Succesfully!");
                        FloatPanel_MembershipCardManagement_EditCard_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore();

                    }
                    else {

                        swalFireFail("Delete Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                    }
                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!!");
                }

            });
        }
    });








}


