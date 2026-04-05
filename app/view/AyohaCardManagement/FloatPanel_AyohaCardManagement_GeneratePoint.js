Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_GeneratePoint', {

});







var _FloatPanel_AyohaCardManagement_GeneratePoint;

function FloatPanel_AyohaCardManagement_GeneratePoint() {

    _FloatPanel_AyohaCardManagement_GeneratePoint = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_GeneratePointID',
            xtype: 'panel',
            zIndex: 300,
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
                duration: 150,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
            },

            style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [


                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     // width: 40,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_AyohaCardManagement_GeneratePointHeader',
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
                                              id: 'btnFloatPanel_AyohaCardManagement_GeneratePointBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_AyohaCardManagement_GeneratePoint.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_AyohaCardManagement_GeneratePointOpen = 'N';
                                              }
                                          },

                                           {
                                               xtype: 'spacer',

                                           },
                                           {
                                               margin: '0 0 0 0',
                                               id: 'htmlFloatPanel_AyohaCardManagement_GeneratePoint_TitleHeaderTxt',
                                               html: '<font size=2 color=white><b>Stamp Card Setting</b></font>'
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
                                                       id: 'containerFloatPanel_AyohaCardManagement_GeneratePointHaiUser',
                                                       layout: {

                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [


                                                           {
                                                               margin: '0 0 0 0',
                                                               id: 'htmlFloatPanel_AyohaCardManagement_GeneratePointHaiUser',
                                                               html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               //   margin: '0 0 0 5',
                                                               hidden: true,
                                                               style: 'background-color: transparent;',

                                                               height: 25,
                                                               width: 70,
                                                               // margin: '70 0 0 0',
                                                               id: 'containerFloatPanel_AyohaCardManagement_GeneratePointeWallet',
                                                               layout: {

                                                                   type: 'hbox',
                                                                   pack: 'left',
                                                                   align: 'left'
                                                               },
                                                               items: [
                                                                    {
                                                                        xtype: 'button',
                                                                        id: 'btnFloatPanel_AyohaCardManagement_GeneratePointeWallet',
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
                                                                        html: '<font size=2 color=white><b>RM00.00</b></font>'
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
                                                    id: 'containerFloatPanel_AyohaCardManagement_GeneratePointPictureUser',
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
                                                            id: 'btnFloatPanel_AyohaCardManagement_GeneratePointInfo',
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
                       margin: '10 0 0 0',
                       width: '100%',
                       docked: 'bottom',
                       style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                       //style: {

                       //    background: 'transparent',

                       //},
                       layout: {
                           type: 'hbox',
                           pack: 'center',
                           align: 'center'

                       },
                       items: [


                       {
                           xtype: 'button',
                           id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_PreviewCard',
                           //  badgeText: '1',
                           // hidden:true,
                           margin: '0 -18 -8 0',
                           //height: 35,
                           //width: 35,
                           html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {

                               var StampCampaignName = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignName').value;
                               var StampRuleRemarks = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampRuleRemarks').value;
                               var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                               var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
                               var EnterpriseAccNo = GetEnterpriseAccNo();
                               var StartDate = GetStartDateStampCardCampaign();
                               var EndDate = GetEndDateStampCardCampaign();
                               FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks);
                           }
                       },
           {
               xtype: 'button',
               //hidden:true,
               id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_PreviewCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>PreView Card</font>',
               ui: 'plain',
               handler: function () {
                   var StampCampaignName = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignName').value;
                   var StampRuleRemarks = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampRuleRemarks').value;
                   var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                   var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
                   var EnterpriseAccNo = GetEnterpriseAccNo();
                   var StartDate = GetStartDateStampCardCampaign();
                   var EndDate = GetEndDateStampCardCampaign();
                   var EnterpriseLogo = GetEnterpriseLogoPath();
                   var EnterpriseName = GetEnterpriseName();
                   //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks);
                   FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
               }
           },


           {
               xtype: 'spacer'
           },
                   {
                       xtype: 'button',
                       id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_DeleteCard',
                       //  badgeText: '1',
                       margin: '0 -18 -8 0',
                       //height: 35,
                       //width: 35,
                       html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                           var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                           if (CardType == "Auto-Default") {
                               Swal.fire({
                                   icon: 'error',
                                   title: 'Defautl Card',
                                   text: 'Default Card cannot be deleted!',
                               })
                               return
                           }


                           Swal.fire({
                               title: 'Are you sure To delete?',
                               text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                               icon: 'warning',
                               showCancelButton: true,
                               confirmButtonColor: '#3085d6',
                               cancelButtonColor: '#d33',
                               confirmButtonText: 'Yes'
                           }).then(function (result) {
                               if (result.isConfirmed) {
                                   DeleteGeneratePointMaster();
                               }
                           });




                       }
                   },
           {
               xtype: 'button',
               id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_DeleteCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>*Delete</font>',
               ui: 'plain',
               handler: function () {



                   var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                   if (CardType == "Auto-Default") {
                       Swal.fire({
                           icon: 'error',
                           title: 'Defautl Card',
                           text: 'Default Card cannot be deleted!',
                       })
                       return
                   }








                   Swal.fire({
                       title: 'Are you sure To delete?',
                       text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                       icon: 'warning',
                       showCancelButton: true,
                       confirmButtonColor: '#3085d6',
                       cancelButtonColor: '#d33',
                       confirmButtonText: 'Yes'
                   }).then(function (result) {
                       if (result.isConfirmed) {
                           DeleteGeneratePointMaster();
                       }
                   });
               }
           },

                {
                    xtype: 'button',
                    id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_SaveCard',
                    //  badgeText: '1',
                    margin: '0 -18 -8 0',
                    //height: 35,
                    //width: 35,
                    html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                        saveGeneratePointMaster();
                    }
                },
           {
               xtype: 'button',
               id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_SaveCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>Save</font>',
               ui: 'plain',
               handler: function () {
                   saveGeneratePointMaster();
               }
           },
                       ]
                   },

                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        width: '100%',

                        margin: '13 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left'
                        },

                        items: [

                            {
                                margin: '3 0 0 0',

                                html: '<font size=3 color=white>Card Setting Info</font>',

                            },



                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=white>Stamp Card Campaign Name</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignName"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },



                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=white>Card Campaign Code</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode"  readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },



          {
              margin: '3 0 0 0',

              html: '<font size=2 color=white>Card Types</font>',

          },
           {
               id: 'htmlFloatPanel_AyohaCardManagement_GeneratePointCardType',
               margin: '-2 0 0 0',
               width: '40%',
               height: 20,
               html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType"  readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
           },

        //{
        //    xtype: 'container',
        //    id: 'containerFloatPanel_AyohaCardManagement_GeneratePointCardType',
        //    // width: '100%',
        //    margin: '5 0 0 0',
        //    style: {

        //        // background: '#f44336',
        //        background: 'transparent',

        //    },
        //    layout: {
        //        type: 'hbox',
        //        pack: 'left',
        //        align: 'left'
        //    },
        //    items: [
        //        {
        //        xtype: 'togglefield',
        //        // text:'NO/YES',
        //        //    name: 'toggleName',
        //        margin: '-12 0 0 -10',
        //        height: 5,
        //        // width:20,
        //        id: 'togglefieldFloatPanel_AyohaCardManagement_GeneratePointCardType',
        //        //label: 'Manual',
        //        disabled: false,
        //        value: false,
        //        style: {

        //            // background: '#f44336',
        //            background: 'transparent',

        //        },
        //        listeners: {
        //            change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
        //                //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
        //                if (newValue == true) { // if toggle is true then enable the slider



        //                    return;

        //                }


        //                    // if(newValue == false)
        //                else { // else make it false





        //                }


        //            },


        //        }


        //    },
        //     {
        //         margin: '3 0 0 0',
        //         id:'htmlStampCardType',
        //         html: '<font size=2 color=white>Default</font>',

        //     },

        //    ]





        //},


         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>Campaign Start Date</font>',

         },

         {
             xtype: 'container',

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

                        html: ' <input type="date" id="GeneratePointCampaignStartDate">',

                    },
                     {
                         xtype: 'button',
                         hidden: true,
                         id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_CampaignStartDateSave',
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

             html: '<font size=2 color=white>Campaign End Date</font>',

         },

         {
             xtype: 'container',

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

                      html: ' <input type="date" id="GeneratePointCampaignEndDate">',

                  },
                     {
                         xtype: 'button',
                         hidden: true,
                         id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_CampaignEndDateSave',
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
             xtype: 'container',
             width: '100%',
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

                                      html: '<font size=2 color=white>Stamp Rule</font>',

                                  },



                                  ]
                              },




        {
            margin: '-2 0 0 0',
            id: 'FloatPanel_AyohaCardManagement_GeneratePoint_StampRule',
            width: '100%',
            height: 20,
            html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_StampRuleRemarks"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

        },


                          ]

                      },


                       //{
                       //    xtype:'container'

                       //},
                         {
                             xtype: 'button',
                             id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_StampRuleInfo',
                             //  badgeText: '1',
                             margin: '0 0 -10 0',
                             height: 35,
                             width: 35,
                             html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {
                                 swalFireGeneralMsg("A Rule Stamp Message will be pop up to remind mechandiser before card stamped");
                             }
                         },

             ]

         },




         {
             margin: '0 0 0 0',
             id: 'htmlFloatPanel_AyohaCardManagement_GeneratePoint_isStampRulePopUp',
             html: '<font size=2 color=white>Pop Up Stamp Rule?</font>',

         },

{
    xtype: 'container',
    margin: '5 0 0 0',
    width: '100%',
    id: 'containertogglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isStampRulePopUp',
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
            id: 'togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isStampRulePopUp',
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


                        var val = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampRuleRemarks').value;

                        if (val.length > 2) {
                            globalisStampRulePopUp = "YES";
                            Ext.getCmp('htmlisStampRulePopUpYesNo').setHtml('<font size=2 color=white>YES</font>');
                            Ext.getCmp('htmlisStampRulePopUpText').setHtml('<font size=2 color=white>(Stamp rule will be pop up before merchadiser started to stamp card)</font>');
                            Ext.getCmp('htmlisStampRulePopUpText').setHidden(false);
                            return;
                        } else {

                            swalFireFail("Stamp Rule is Empty!");
                            Ext.getCmp('htmlisStampRulePopUpYesNo').setHtml('<font size=2 color=white>NO</font>');
                            Ext.getCmp('htmlisStampRulePopUpText').setHtml('<font size=2 color=white>.</font>');
                            Ext.getCmp('htmlisStampRulePopUpText').setHidden(true);
                            globalisStampRulePopUp = "NO";
                            Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isStampRulePopUp').setValue(false);
                        }



                    }


                        // if(newValue == false)
                    else { // else make it false

                        Ext.getCmp('htmlisStampRulePopUpYesNo').setHtml('<font size=2 color=white>NO</font>');
                        Ext.getCmp('htmlisStampRulePopUpText').setHtml('<font size=2 color=white>.</font>');
                        Ext.getCmp('htmlisStampRulePopUpText').setHidden(true);
                        globalisStampRulePopUp = "NO";
                    }


                },


            }


        },
         {
             margin: '0 0 0 0',
             id: 'htmlisStampRulePopUpYesNo',
             html: '<font size=2 color=white>No</font>',

         },
    ]

},

{
    margin: '0 0 0 0',
    id: 'htmlisStampRulePopUpText',
    hidden: true,
    html: '<font size=2 color=white>.</font>',

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

             /////////////////
             {
                 xtype: 'container',

                 width: '100%',
                 style: {

                     background: 'transparent',

                 },
                 layout: {
                     type: 'vbox',
                     pack: 'start',
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
                              pack: 'center',
                              align: 'center'

                          },
                          items: [
                              {
                                  margin: '10 0 0 0',

                                  html: '<font size=3 color=white>Rubber Stamp</font>',

                              },
                              {
                                  xtype: 'spacer'
                              },
                          {
                              xtype: 'button',
                              id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignRubberStamp',
                              //  badgeText: '1',
                              // hidden:true,
                              margin: '0 -10 -5 0',
                              height: 35,
                              width: 35,
                              html: '<img src="resources/icons/whiteStamp.png" width="25" height="25" alt="Company Name">',
                              ui: 'plain',
                              handler: function () {


                              }
                          },
              {
                  xtype: 'button',
                  // hidden: true,
                  id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignRubberStamp',
                  //  badgeText: '1',
                  margin: '0 0 -9 0',
                  height: 40,
                  width: 110,
                  html: '<font size=2 color=white>Custome Stamp</font>',
                  ui: 'plain',
                  handler: function () {


                  }
              },
                          ]
                      },

                      {
                          xtype: 'list',
                          //flex:1,
                          height: 200,
                          store: 'StampCampaignRubberStampLoadByStampCampaignCodeStore',
                          id: 'FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignRubberStampList',
                          mode: 'SINGLE',
                          //  grouped: true,
                          disableSelection: true,
                          itemTpl: '<div style="margin:20px 0px 0px 180px"><font size=3>Default Stamp</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Status:<u><b>{RowStatus}</b></u></font></div>' +

                                   '<div style="margin:-58px 0px 0px 0px;" ><img src="{RubberStampImagePath}" width="100" height="100" alt="Company Name"></div>' +

                                   // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
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





        /////////////////////

      {
          xtype: 'container',
          id: 'containerFloatPanel_AyohaCardManagement_GeneratePoint_EnterpriseParticipated',
          hidden: true,
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

                  html: '<font size=3 color=white>Enterprise Participated</font>',

              },
              {
                  xtype: 'spacer'
              },
          {
              xtype: 'button',
              id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_EnterpriseParticipated',
              //  badgeText: '1',
              // hidden:true,
              margin: '0 -5 -12 0',
              height: 35,
              width: 35,
              html: '<img src="resources/icons/EnterpriseWhite.png" width="25" height="25" alt="Company Name">',
              ui: 'plain',
              handler: function () {
                  FloatPanel_AyohaCardManagement_EnterprisesListShow();
                  //var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                  //var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
                  //var EnterpriseAccNo = GetEnterpriseAccNo();
                  //var StartDate = GetStartDateStampCardCampaign();
                  //var EndDate = GetEndDateStampCardCampaign();
                  //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

              }
          },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_EnterpriseParticipated',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=white>Enterprise(s)</font>',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaCardManagement_EnterprisesListShow();
        //var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
        //var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
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
            hidden: true,
            height: 250,
            store: 'StampCampaignEnterprisesLoadByStampCampaignCodeStore',
            id: 'FloatPanel_AyohaCardManagement_GeneratePoint_EnterpriseParticipatedList',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            itemTpl: '<div class="myContent">' +
                        //'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
                         '<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-3px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div><div style="width:100%;text-align:right;margin:-20px 0px 0px 0px;"><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div></th></tr><tr></tr></thead></table>' +


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
                    margin: '10 0 0 0',

                    html: '<font size=3 color=white>Authorized Stamper</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_Stamper',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -5 -12 0',
                height: 35,
                width: 35,
                html: '<img src="resources/icons/userWhite.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaCardManagement_UserEnterprisesListShow();

                }
            },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_Stamper',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=white>Stamper(s)</font>',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaCardManagement_UserEnterprisesListShow();

    }
},
            ]
        },








        {
            xtype: 'list',
            //flex:1,
            height: 150,
            store: 'StampCampaignStamperLoadByStampCampaignCodeStore',
            id: 'FloatPanel_AyohaCardManagement_GeneratePoint_StamperList',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            itemTpl: '<div class="myContent">' +
                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{AccountName}<br>{UserType}</div><br><div style="width:100%;text-align:right;margin:-45px 0px 0px -8px;"><button OnClick="buttonsHtmlDeleteStampCampaignStamper({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div>' +

                                   '</div>',
            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },





        ///////////////////

        {
            xtype: 'container',

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
                    margin: '10 0 0 0',

                    html: '<font size=3 color=white>Card Contents</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_View',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -5 -12 0',
                height: 35,
                width: 35,
                html: '<img src="resources/icons/viewWhiteThreeExt.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                    var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
                    var EnterpriseAccNo = GetEnterpriseAccNo();
                    var StartDate = GetStartDateStampCardCampaign();
                    var EndDate = GetEndDateStampCardCampaign();
                    FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

                }
            },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_View',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=white>PreView Card</font>',
    ui: 'plain',
    handler: function () {
        var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
        var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
        var EnterpriseAccNo = GetEnterpriseAccNo();
        var StartDate = GetStartDateStampCardCampaign();
        var EndDate = GetEndDateStampCardCampaign();
        FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

    }
},
            ]
        },




           {
               xtype: 'list',
               //flex:1,
               height: 350,
               store: 'StampCardLoadByStampCampaignCodeEnterpriseAccNoStore',
               id: 'FloatPanel_AyohaCardManagement_GeneratePoint_ContentListID',
               mode: 'SINGLE',
               //  grouped: true,
               disableSelection: true,
               itemTpl: '<div style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Content Status:<u><b>{ShowHide}</b></u></font></div>' +

                        '<div style="margin:-58px 0px 0px 0px">{StampContentModified}</div>' +

                        // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
                 '</div>',
               width: '100%',
               listeners: {
                   itemsingletap: function (list, idx, target, records, evt) {

                       var StampContentModified = records.get('StampContentModified');
                       var TextOne = records.get('TextOne');
                       var TextTwo = records.get('TextTwo');
                       var DivContent = records.get('DivContent');
                       var DivContentTextTwo = records.get('DivContentTextTwo');
                       var StampContentNote = records.get('StampContentNote');
                       var RowID = records.get('ID');
                       var StampContentDefaultTemplateID = records.get('StampContentDefaultTemplateID');
                       var ShowHide = records.get('ShowHide');
                       var ImgContentName = records.get('ImgContentName');
                       var isRedeemItem = records.get('isRedeemItem');
                       FloatPanel_AyohaCardManagement_GeneratePointContentShow(StampContentModified, TextOne, TextTwo, DivContent, DivContentTextTwo, RowID, StampContentNote, StampContentDefaultTemplateID, ShowHide);

                       var str = StampContentModified;
                       var n = str.includes("background-image");


                       if (n) {
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentHeaderTxt').setHtml('<font size=2 color=white><b>Edit Card Content - Upload Image</b></font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_ChangeToText_bottom').setHtml('<font size=1 color=grey><b>Change Text</b></font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_UploadImage_bottom').setHtml('<font size=1 color=purple><b><u>Change Image</u></b></font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_HideContent_bottom').setHtml('<font size=1 color=grey><b>Hide/Show Content</b></font>');
                           Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_GeneratePointContentContainerChangeText').setHidden(true);
                           Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_GeneratePointContentUploadImage').setHidden(false);
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_SaveText').setHidden(true);
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_HideContent').setHidden(true);
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_SaveImage').setHidden(false);
                           document.getElementById('inputName-FloatPanel_AyohaCardManagement_GeneratePointContent_UploadedImage').value = ImgContentName;

                       } else {

                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentHeaderTxt').setHtml('<font size=2 color=white><b>Edit Card Content - Change Text</b></font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_ChangeToText_bottom').setHtml('<font size=1 color=purple><b><u>Change Text</u></b></font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_UploadImage_bottom').setHtml('<font size=1 color=grey><b>Change Image</b></font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_HideContent_bottom').setHtml('<font size=1 color=grey><b>Hide/Show Content</b></font>');


                           Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_GeneratePointContentContainerChangeText').setHidden(false);
                           Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_GeneratePointContentUploadImage').setHidden(true);
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_SaveText').setHidden(false);
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_HideContent').setHidden(true);
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_SaveImage').setHidden(true);
                       }


                       if (ShowHide == "Show") {

                           Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePointContentShowHide').setValue(true);
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentShowHideTxt').setHtml('<font size=3 color=white>Show</font>');
                           globalShowHide = "Show";

                       } else {
                           Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePointContentShowHide').setValue(false);
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentShowHideTxt').setHtml('<font size=3 color=white>Hide</font>');
                           globalShowHide = "Hide";
                       }


                       Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePointContentisRedeem').setDisabled(false);
                       var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                       if (CardType == "Auto-Default") {
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentHeaderTxt').setHtml('<font size=2 color=white><b>Edit Card Content - Hide/Show Content</b></font>');
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_SaveText').setHidden(true);
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_HideContent').setHidden(false);
                           Ext.getCmp('btnFloatPanel_AyohaCardManagement_GeneratePointContent_SaveImage').setHidden(true);
                           Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_GeneratePointContentContainerChangeText').setHidden(true);
                           Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_GeneratePointContentUploadImage').setHidden(true);
                           Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_GeneratePointContentShowHide').setHidden(false);
                           Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePointContentisRedeem').setDisabled(true);
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_ChangeToText_bottom').setHtml('<font size=1 color=grey><b>Change Text(NA)</b></font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_UploadImage_bottom').setHtml('<font size=1 color=grey><b><u>Change Image(NA)</b></font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContent_HideContent_bottom').setHtml('<font size=1 color=purple><b><u>Hide/Show Content</u></b></font>');
                           Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePointContentisRedeem').setValue(false);
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentisRedeemitemTxt').setHtml('<font size=2 color=white>is this Redeem item:NO</font>');
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentisRedeemitemTxt').setHidden(true);
                           Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePointContentisRedeem').setHidden(true);
                           Ext.getCmp('htmlisRedeemItemTagText').setHidden(true);
                           Ext.getCmp('FloatPanel_AyohaCardManagement_GeneratePointContentID').setHeight(415);


                       }

                       globalisRedeemItem = isRedeemItem;
                       if (isRedeemItem == "YES") {
                           Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePointContentisRedeem').setValue(true);
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentisRedeemitemTxt').setHtml('<font size=2 color=white>is this Redeem item:YES</font>');
                       }
                       if (isRedeemItem == "NO") {
                           Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePointContentisRedeem').setValue(false);
                           Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointContentisRedeemitemTxt').setHtml('<font size=2 color=white>is this Redeem item:NO</font>');
                       }




                   },
                   deselect: function (list, records) {

                   }
               },

           },

           {
               xtype: 'container',

               width: '100%',
               style: {

                   background: 'transparent',

               },
               layout: {
                   type: 'vbox',
                   pack: 'start',
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
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
                            {
                                margin: '10 0 0 0',

                                html: '<font size=3 color=white>Card Background Image</font>',

                            },
                            {
                                xtype: 'spacer'
                            },
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_PreViewAtBackgroundImg',
                            //  badgeText: '1',
                            // hidden:true,
                            margin: '0 -5 -12 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/viewWhiteThreeExt.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                                var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
                                var EnterpriseAccNo = GetEnterpriseAccNo();
                                var StartDate = GetStartDateStampCardCampaign();
                                var EndDate = GetEndDateStampCardCampaign();
                                FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

                            }
                        },
            {
                xtype: 'button',
                // hidden: true,
                id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_PreViewAtBackgroundImg',
                //  badgeText: '1',
                margin: '0 -7 -12 0',
                height: 40,
                width: 100,
                html: '<font size=2 color=white>PreView Card</font>',
                ui: 'plain',
                handler: function () {
                    var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                    var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
                    var EnterpriseAccNo = GetEnterpriseAccNo();
                    var StartDate = GetStartDateStampCardCampaign();
                    var EndDate = GetEndDateStampCardCampaign();
                    FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

                }
            },
                        ]
                    },

                    {
                        xtype: 'list',
                        //flex:1,
                        height: 200,
                        store: 'LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore',
                        id: 'FloatPanel_AyohaCardManagement_GeneratePoint_BackgroundImgListD',
                        mode: 'SINGLE',
                        //  grouped: true,
                        disableSelection: true,
                        itemTpl: '<div style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Background Status:<u><b>{ShowHide}</b></u></font></div>' +

                                 '{ModifyImgPath}' +

                                 // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
                          '</div>',
                        width: '100%',
                        listeners: {
                            itemsingletap: function (list, idx, target, records, evt) {

                                var ImgName = records.get('ImgName');
                                var ImgPath = records.get('ImgPath');
                                var ShowHide = records.get('ShowHide');
                                var ID = records.get('ID');


                                var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;


                                if (CardType == "Auto-Default") {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Default Card',
                                        text: 'Not Allowed to Edit Background!',
                                        footer: 'Create Custome Card!',
                                    });
                                    // return;
                                }

                                if (CardType == "Custome") {
                                    FloatPanel_AyohaCardManagement_GeneratePointBackgroundImgShow(ImgName, ImgPath, ShowHide, ID)
                                }


                            },
                            deselect: function (list, records) {

                            }
                        },

                    },


               ]
           },






           {
               xtype: 'container',


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
                            xtype: 'container',

                            width: '90%',
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
                                    xtype: 'container',

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
                                              margin: '3 0 0 0',
                                              xtype: 'button',

                                              id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_UploadBackgroundImageTxt',
                                              //  badgeText: '1',
                                              //  margin: '7 0 0 7',
                                              //height: 40,
                                              //width: 130,
                                              html: '<font size=2 color=white>Add Card Background Image</font>',
                                              ui: 'plain',
                                              handler: function () {


                                                  var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                                                  if (CardType == "Auto-Default") {
                                                      Swal.fire({
                                                          icon: 'error',
                                                          title: 'Default Card',
                                                          text: 'Not Allowed to Edit Background!',
                                                          footer: 'Create Custome Card!',
                                                      });
                                                      return;
                                                  }
                                                  FloatPanel_AyohaCardManagement_AddCardBackgroundImgShow();
                                              }



                                          },
                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_UploadBackgroundImage',
                                                 //  badgeText: '1',
                                                 margin: '0 0 0 0',
                                                 height: 35,
                                                 width: 35,
                                                 html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                                 ui: 'plain',
                                                 handler: function () {

                                                     var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
                                                     if (CardType == "Auto-Default") {
                                                         Swal.fire({
                                                             icon: 'error',
                                                             title: 'Default Card',
                                                             text: 'Not Allowed to Edit Background!',
                                                             footer: 'Create Custome Card!',
                                                         });
                                                         return;
                                                     }
                                                     FloatPanel_AyohaCardManagement_AddCardBackgroundImgShow();
                                                 }
                                             },

                                    ]
                                },




                          {

                              margin: '-2 0 0 0',
                              width: '100%',
                              hidden: true,
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardBackgroundImage" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },

                            ]

                        },
                         {
                             xtype: 'button',
                             hidden: true,
                             id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_ResetBackgroundImage',
                             //  badgeText: '1',
                             margin: '0 0 -30 0',
                             height: 35,
                             width: 35,
                             html: '<img src="resources/icons/resetWhiteTwo.png" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {

                             }
                         },

               ]

           },

         {
             margin: '6 0 0 0',
             id: 'htmlFloatPanel_AyohaCardManagement_GeneratePoint_Card_Background_Image_Animate_SettingTxt',
             html: '<font size=3 color=white>Card Background Image Animate Setting</font>',

         },
          {
              margin: '-1 0 0 0',
              id: 'htmlFloatPanel_AyohaCardManagement_GeneratePoint_isAnimatedTxt',
              html: '<font size=2 color=white>Is Animated?</font>',

          },

{
    xtype: 'container',
    margin: '5 0 0 0',
    width: '100%',
    id: 'containertogglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated',
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
            id: 'togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated',
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


                    var val = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value;

                    if (newValue == true) { // if toggle is true then enable the slider

                        globalisAnimated = "YES";
                        Ext.getCmp('htmlisAnimatedText').setHtml('<font size=3 color=white>YES</font>');
                        Ext.getCmp('htmlAnimatedIntervalText').setHidden(false);
                        Ext.getCmp('htmlAnimatedIntervalValue').setHidden(false);
                        document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value = val;
                        return;
                        //if (val > 1) {

                        //    Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated').setValue(true);


                        //} else {
                        //    Ext.getCmp('htmlisAnimatedText').setHtml('<font size=3 color=white>NO</font><font size=2 color=white>(Background image will be set Randomly)</font>');
                        //    Ext.getCmp('htmlAnimatedIntervalText').setHidden(false);
                        //    Ext.getCmp('htmlAnimatedIntervalValue').setHidden(false);
                        //   // document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value = val;

                        //  //  Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated').setValue(false);
                        //    globalisAnimated = "NO";
                        //  //  swalFireFail("Animated Interval Value Not Valid!");

                        //    return;
                        //}




                    }


                        // if(newValue == false)
                    else { // else make it false

                        Ext.getCmp('htmlisAnimatedText').setHtml('<font size=3 color=white>NO</font><font size=2 color=white>(Background image will be set Randomly)</font>');
                        Ext.getCmp('htmlAnimatedIntervalText').setHidden(true);
                        Ext.getCmp('htmlAnimatedIntervalValue').setHidden(true);
                        document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value = val;
                        globalisAnimated = "NO";
                        //  Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated').setValue(false);

                    }


                },


            }


        },
         {
             margin: '0 0 0 0',
             id: 'htmlisAnimatedText',
             html: '<font size=3 color=white>No</font><font size=2 color=white>(Background image will be set Randomly)</font>',

         },

    ]

},


{
    margin: '10 0 0 0',
    id: 'htmlAnimatedIntervalText',
    html: '<font size=2 color=white>Animate Interval(Second)</font>',

},

  {

      margin: '-2 0 0 0',
      width: '80%',
      height: 20,
      id: 'htmlAnimatedIntervalValue',
      html: '<input type="number" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
  },



//        {
//            xtype: 'container',
//            margin: '10 0 0 0',
//            width: '100%',

//            style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
//            //style: {

//            //    background: 'transparent',

//            //},
//            layout: {
//                type: 'hbox',
//                pack: 'center',
//                align: 'center'

//            },
//            items: [


//            {
//                xtype: 'button',
//                id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_PreviewCard',
//                //  badgeText: '1',
//               // hidden:true,
//                margin: '0 -18 -8 0',
//                //height: 35,
//                //width: 35,
//                html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
//                ui: 'plain',
//                handler: function () {


//                    var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
//                    var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
//                    var EnterpriseAccNo = GetEnterpriseAccNo();
//                    var StartDate = GetStartDateStampCardCampaign();
//                    var EndDate = GetEndDateStampCardCampaign();
//                    FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType,StartDate,EndDate);
//                }
//            },
//{
//    xtype: 'button',
//    //hidden:true,
//    id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_PreviewCard',
//    //  badgeText: '1',
//    margin: '7 0 0 7',
//    //height: 40,
//    //width: 130,
//    html: '<font size=2 color=grey>PreView Card</font>',
//    ui: 'plain',
//    handler: function () {

//        var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
//        var strStampCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;
//        var EnterpriseAccNo = GetEnterpriseAccNo();
//        var StartDate = GetStartDateStampCardCampaign();
//        var EndDate = GetEndDateStampCardCampaign();
//        FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);
//    }
//},


//{
//    xtype:'spacer'
//},
//        {
//            xtype: 'button',
//            id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_DeleteCard',
//            //  badgeText: '1',
//            margin: '0 -18 -8 0',
//            //height: 35,
//            //width: 35,
//            html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
//            ui: 'plain',
//            handler: function () {
//                var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
//                if (CardType == "Auto-Default") {
//                    Swal.fire({
//                        icon: 'error',
//                        title: 'Defautl Card',
//                        text: 'Default Card cannot be deleted!',
//                    })
//                    return
//                }


//                Swal.fire({
//                    title: 'Are you sure To delete?',
//                    text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
//                    icon: 'warning',
//                    showCancelButton: true,
//                    confirmButtonColor: '#3085d6',
//                    cancelButtonColor: '#d33',
//                    confirmButtonText: 'Yes'
//                }).then(function (result) {
//                    if (result.isConfirmed) {
//                        DeleteGeneratePointMaster();
//                    }
//                });




//            }
//        },
//{
//    xtype: 'button',
//    id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_DeleteCard',
//    //  badgeText: '1',
//    margin: '7 0 0 7',
//    //height: 40,
//    //width: 130,
//    html: '<font size=2 color=grey>*Delete</font>',
//    ui: 'plain',
//    handler: function () {



//        var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value;
//        if (CardType == "Auto-Default") {
//            Swal.fire({
//                icon: 'error',
//                title: 'Defautl Card',
//                text: 'Default Card cannot be deleted!',               
//            })
//            return
//        }








//        Swal.fire({
//            title: 'Are you sure To delete?',
//            text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
//            icon: 'warning',
//            showCancelButton: true,
//            confirmButtonColor: '#3085d6',
//            cancelButtonColor: '#d33',
//            confirmButtonText: 'Yes'
//        }).then(function (result) {
//            if (result.isConfirmed) {
//                DeleteGeneratePointMaster();
//            }
//        });
//    }
//},

//     {
//            xtype: 'button',
//            id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_SaveCard',
//            //  badgeText: '1',
//            margin: '0 -18 -8 0',
//            //height: 35,
//            //width: 35,
//            html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
//            ui: 'plain',
//            handler: function () {
//                saveGeneratePointMaster();
//            }
//        },
//{
//    xtype: 'button',
//    id: 'txtFloatPanel_AyohaCardManagement_GeneratePoint_SaveCard',
//    //  badgeText: '1',
//    margin: '7 0 0 7',
//    //height: 40,
//    //width: 130,
//    html: '<font size=2 color=grey>Save</font>',
//    ui: 'plain',
//    handler: function () {
//        saveGeneratePointMaster();
//    }
//},
//            ]
//        },









         {
             xtype: 'container',
             height: 10,
             width: '100%',
             style: ' background-color:transparent',
             margin: '0 0 0 0',
             layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center'
             },

         },




           {
               margin: '5 0 0 0',
               hidden: true,
               id: 'htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium_label',
               html: '<font size=3 color=white>Stamp Campaign QR Code(Custome)</font>',

           },


           {

               // hidden: true,
               xtype: 'image',
               margin: '0 0 0 0',
               hidden: true,
               //  margin: '-100 0 0 20',
               width: '100%',
               height: 360,
               // height: '100%',
               id: 'htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium',
               //  html: '<img src="resources/icons/qrcodeReceipt.png" style="width: 100%; height: 360px; border:1px solid white;" />',
           },

           {

               // hidden: true,
               // xtype: 'image',
               margin: '-230 0 0 0',
               // hidden: true,
               //  margin: '-100 0 0 20',
               width: '100%',
               height: 230,
               // height: '100%',
               id: 'htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_SamplePremium_EnterpriseLogo',
               html: '<div style="width:100%;height:55px;text-align:center;"><img src="resources/icons/ccrlogo.png" style="width: 95px; height: 95px; border:1px solid white;border-radius: 50%;" /></div>',
           },



           {
               xtype: 'container',
               id: 'containerFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium_Button',
               hidden: true,
               width: '100%',
               height: 40,
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
                      xtype: 'spacer'
                  },
                   {
                       xtype: 'button',
                       id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium_Share',
                       //  badgeText: '1',
                       // hidden:true,
                       margin: '0 0 0 0',
                       height: 35,
                       width: 35,
                       html: '<img src="resources/icons/shareWhite.png" width="25" height="25" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {


                       }
                   },
               {
                   xtype: 'button',
                   id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium_Print',
                   //  badgeText: '1',
                   // hidden:true,
                   margin: '0 0 0 0',
                   height: 35,
                   width: 35,
                   html: '<img src="resources/icons/printWhite.png" width="25" height="25" alt="Company Name">',
                   ui: 'plain',
                   handler: function () {


                   }
               },


               ]
           },



          {
              margin: '5 0 0 0',

              html: '<font size=3 color=white>Stamp Campaign QR Code(Standard)</font>',

          },


           {

               hidden: true,
               xtype: 'image',
               margin: '0 0 0 0',
               //  margin: '-100 0 0 20',
               width: '100%',
               height: 360,
               // height: '100%',
               id: 'htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Standards',
               //  html: '<img src="resources/icons/qrcodeReceipt.png" style="width: 100%; height: 360px; border:1px solid white;" />',
           },
             {

                 // hidden: true,
                 margin: '0 0 0 0',
                 //  margin: '-100 0 0 20',
                 width: '100%',
                 height: 360,
                 // height: '100%',

                 id: 'htmlFloatPanel_AyohaCardManagement_StampQrCode_GeneratePoint',
                 html: '<div id="myQRCodeImg"  style="width: 100%; height: 100%; border:1px none white;" />',
             },


           {
               xtype: 'container',

               width: '100%',
               height: 40,
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
                      xtype: 'spacer'
                  },
                   {
                       xtype: 'button',
                       id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Standards_Share',
                       //  badgeText: '1',
                       // hidden:true,
                       margin: '0 0 0 0',
                       height: 35,
                       width: 35,
                       html: '<img src="resources/icons/shareWhite.png" width="25" height="25" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {


                       }
                   },
               {
                   xtype: 'button',
                   id: 'btnFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Standards_Print',
                   //  badgeText: '1',
                   // hidden:true,
                   margin: '0 0 0 0',
                   height: 35,
                   width: 35,
                   html: '<img src="resources/icons/printWhite.png" width="25" height="25" alt="Company Name">',
                   ui: 'plain',
                   handler: function () {


                   }
               },


               ]
           },






          {
              margin: '10 0 0 0',

              html: '<font size=3 color=white>Audit</font>',
              hidden: true,

          },

        {
            xtype: 'container',
            margin: '0 0 0 0',
            width: '100%',
            hidden: true,
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
                      xtype: 'container',
                      margin: '0 0 0 0',
                      width: 150,
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
                              margin: '13 0 0 0',

                              html: '<font size=2 color=white>Created By</font>',

                          },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_CreatedBy"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:12px;">'
             },


        {
            margin: '6 0 0 0',

            html: '<font size=2 color=white>Modified By</font>',

        },


             {





                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_ModifiedBy" readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:12px;">'






             },




                      ]

                  },

                  {
                      xtype: 'spacer'
                  },








                  /////
                  {
                      xtype: 'container',
                      margin: '0 0 0 0',
                      width: 150,
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
                         margin: '13 0 0 0',

                         html: '<font size=2 color=white>Created Date</font>',

                     },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_CreatedDate"  readOnly style="border-color:transparent;color:;width:100%;text-align: left;font-size:12px;">'
             },


        {
            margin: '6 0 0 0',

            html: '<font size=2 color=white>Modified Date</font>',

        },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_GeneratePoint_ModifiedDate"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:12px;">'
             },






                      ]

                  },


                  ////

            ]

        },



























                        ]
                    },


                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_GeneratePoint;
}


var globalisStampRulePopUp;
var globalStampCampaignPremiumQRCode;
function FloatPanel_AyohaCardManagement_GeneratePointShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, BackgroundImage, isAnimated, AnimatedInterval, StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode) {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_GeneratePoint);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_GeneratePoint());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_GeneratePointHide = 'Y';


    //FloatPanel_AyohaCardManagement_GeneratePoint.js?_dc=1605322932552:937 The specified value "11/11/2020" does not conform to the required format, "yyyy-MM-dd".
    //((DateTime)Date).ToString("yyyy-MM-dd");

    //var StampCampaignCode = records.get('StampCampaignCode');
    //var StampCampaignName = records.get('StampCampaignName');
    //var StampCardType = records.get('StampCardType');
    //var StartDate = records.get('StartDate');
    //var EndDate = records.get('EndDate');
    //var RowStatus = records.get('RowStatus');
    //var EnterpriseAccNo = records.get('EnterpriseAccNo');
    //var CreatedByAccNo = records.get('CreatedByAccNo');
    //var CreatedBy = records.get('CreatedBy');
    //var CreatedDate = records.get('CreatedDate');
    //var ModifiedBy = records.get('ModifiedBy');
    //var ModifiedDate = records.get('ModifiedDate');

    globalisStampRulePopUp = isStampRulePopUp;
    globalStampCampaignPremiumQRCode = StampCampaignPremiumQRCode;
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignName').value = StampCampaignName;
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value = StampCampaignCode;
    document.getElementById("GeneratePointCampaignStartDate").value = StartDateOnly;
    document.getElementById("GeneratePointCampaignEndDate").value = EndDateOnly;
    localStorage.setItem('StartDateStampCardCampaign', StartDateOnly);
    localStorage.setItem('EndDateStampCardCampaign', EndDateOnly);
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampRuleRemarks').value = StampRuleRemarks;
    //document.getElementById('UN').value = "";
    //document.getElementById('UN').value = "";
    //document.getElementById('UN').value = "";
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_CreatedBy').value = CreatedBy;
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_ModifiedBy').value = ModifiedBy;
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_CreatedDate').value = CreatedDate;
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_ModifiedDate').value = ModifiedDate;
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardBackgroundImage').value = BackgroundImage;
    globalisAnimated = isAnimated;
    document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value = AnimatedInterval;

    if (isAnimated == "YES") {
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated').setValue(true);
        Ext.getCmp('htmlisAnimatedText').setHtml('<font size=3 color=white>YES</font>');
        Ext.getCmp('htmlAnimatedIntervalText').setHidden(false);
        Ext.getCmp('htmlAnimatedIntervalValue').setHidden(false);
    } else {
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated').setValue(false);
        Ext.getCmp('htmlisAnimatedText').setHtml('<font size=3 color=white>NO</font><font size=2 color=white>(Background image will be set Randomly)</font>');
        Ext.getCmp('htmlAnimatedIntervalText').setHidden(true);
        Ext.getCmp('htmlAnimatedIntervalValue').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value = 0;

    }


    if (StampCardType == "Auto-Default") {
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointCardType').setHidden(false);
        document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value = StampCardType;
        Ext.getCmp('containertogglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated').setHidden(true);
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_Card_Background_Image_Animate_SettingTxt').setHidden(true);
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_isAnimatedTxt').setHidden(true);
        // Ext.getCmp('containerFloatPanel_AyohaCardManagement_GeneratePointCardType').setHidden(true);     

    } else {
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePointCardType').setHidden(false);
        document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCardType').value = StampCardType;
        Ext.getCmp('containertogglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isAnimated').setHidden(false);
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_Card_Background_Image_Animate_SettingTxt').setHidden(false);
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_isAnimatedTxt').setHidden(false);
        //  Ext.getCmp('containerFloatPanel_AyohaCardManagement_GeneratePointCardType').setHidden(false);
    }



    if (isStampRulePopUp == "YES") {

        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isStampRulePopUp').setValue(true);
        Ext.getCmp('htmlisStampRulePopUpYesNo').setHtml('<font size=2 color=white>YES</font>');
        Ext.getCmp('htmlisStampRulePopUpText').setHtml('<font size=2 color=white>(Stamp rule will be pop up before merchadiser started to stamp card)</font>');
        Ext.getCmp('htmlisStampRulePopUpText').setHidden(false);


    } else {
        Ext.getCmp('htmlisStampRulePopUpYesNo').setHtml('<font size=2 color=white>NO</font>');
        Ext.getCmp('htmlisStampRulePopUpText').setHtml('<font size=2 color=white>.</font>');
        Ext.getCmp('htmlisStampRulePopUpText').setHidden(true);

        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_GeneratePoint_isStampRulePopUp').setValue(false);
    }
    Load_FloatPanel_AyohaCardManagement_GeneratePoint_LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore();
    //  Load_FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignEnterprisesLoadByStampCampaignCodeStore();
    Load_FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignStamperLoadByStampCampaignCodeStore();
    FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Standard_CreateQrCode();
    Load_FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignRubberStampLoadByStampCampaignCodeStore();



}
var is_FloatPanel_AyohaCardManagement_GeneratePointHide = 'N';

function FloatPanel_AyohaCardManagement_GeneratePointHide() {
    if (is_FloatPanel_AyohaCardManagement_GeneratePointHide == 'Y') {
        _FloatPanel_AyohaCardManagement_GeneratePoint.hide();
        is_FloatPanel_AyohaCardManagement_GeneratePointHide = 'N';
    }

}





function Load_FloatPanel_AyohaCardManagement_GeneratePoint_LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore() {

    Ext.getStore('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo(),
        StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
    });
    Ext.StoreMgr.get('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo(),
            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
        });
        Ext.StoreMgr.get('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore').load();
        var myStore = Ext.getStore('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}


var globalisAnimated;
var globalisRedeemItem;
function saveGeneratePointMaster(RowStatus) {

    var _GeneratePointStampCardCampaignName = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignName').value;

    var GeneratePointCampaignStartDate = new Date(document.getElementById('GeneratePointCampaignStartDate').value);
    var GeneratePointCampaignEndDate = new Date(document.getElementById('GeneratePointCampaignEndDate').value);


    if (_GeneratePointStampCardCampaignName.length < 2) {
        swalFireFail("Stamp Campaign Name Not Valid!!")
        return
    }



    if (GeneratePointCampaignStartDate == "Invalid Date") {
        swalFireFail("Invalid Start Date!!");
        return;
    }


    if (GeneratePointCampaignEndDate == "Invalid Date") {
        swalFireFail("Invalid End Date!!");
        return;
    }


    // Extract pieces of the date:
    // var month = GeneratePointCampaignStartDate.getMonth(); // months start counting from zero!
    var dayCampaignStart = parseInt(GeneratePointCampaignStartDate.getDate() + GeneratePointCampaignStartDate.getMonth() + GeneratePointCampaignStartDate.getFullYear());
    var dayCampaignEnd = parseInt(GeneratePointCampaignEndDate.getDate() + GeneratePointCampaignEndDate.getMonth() + GeneratePointCampaignEndDate.getFullYear());





    console.log(dayCampaignStart);
    console.log(dayCampaignEnd);







    if (dayCampaignStart > dayCampaignEnd) {
        // alert("Fail-Campaing date Has passed");
        swalFireFail("Save Failed!<br>*Campaign date Has passed!!");
        return;

    }

    if (dayCampaignStart == dayCampaignEnd) {
        swalFireFail("Save Failed!<br>*Campaign date start and date end is same!!");
        return;

    }

    //  var year = GeneratePointCampaignStartDate.getFullYear();














    var animatedval = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value;

    if (globalisAnimated == "YES") {
        if (animatedval <= 0) {
            swalFireFail("Animated Interval Not Valid!!")
            return
        } if (animatedval.length == 0) {
            swalFireFail("Animated Interval Not Valid!!")
            return
        }
    }
    if (globalisAnimated == "NO") {
        if (animatedval.length == 0) {
            //swalFireFail("Animated Interval Not Valid!!")
            //return
            document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value = 0;
        }
    }

    if (dayCampaignStart < dayCampaignEnd) {
        Ext.Ajax.request({

            url: GetAPIurl() + '/StampCampaign/StampCampaignUpdate',

            params: {
                StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
                StampCampaignName: _GeneratePointStampCardCampaignName,
                StartDate: document.getElementById('GeneratePointCampaignStartDate').value,
                EndDate: document.getElementById('GeneratePointCampaignEndDate').value,
                //EnterpriseAccNo: GetEnterpriseAccNo(),
                //CreatedByAccNo: GetCurrentAccountNo(),
                //CreatedBy: document.getElementById('UN').value,
                //EnterpriseAccNo: 'CRCom-71100',
                //CreatedByAccNo: '0133376958-346273',
                //CreatedBy: 'ianMizi',
                EnterpriseAccNo: GetEnterpriseAccNo(),
                CreatedByAccNo: GetCurrAyohaEnterpriseUserAccountNo(),
                CreatedBy: document.getElementById('UN').value,
                isAnimated: globalisAnimated,
                AnimatedInterval: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value,
                RowStatus: 'Active',
                StampRuleRemarks: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampRuleRemarks').value,
                isStampRulePopUp: globalisStampRulePopUp,
                LoyaltyCustomerType: 'NA'
            },
            success: function (result, request) {
                swalFireSuccess("Save Successfully!");
                Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
                FloatPanel_AyohaCardManagement_GeneratePointHide();
                //LoadingCustomMsgShow('Success!', '3');

            },
            failure: function (result, request) {
                swalFireFail("Save Error!")
                //   LoadingCustomMsgShow('Error, Contact Admin!', '2');

            }
        });
    }

}



function DeleteGeneratePointMaster() {










    var _GeneratePointStampCardCampaignName = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignName').value;

    var GeneratePointCampaignStartDate = new Date(document.getElementById('GeneratePointCampaignStartDate').value);
    var GeneratePointCampaignEndDate = new Date(document.getElementById('GeneratePointCampaignEndDate').value);


    if (_GeneratePointStampCardCampaignName.length < 2) {
        swalFireFail("Stamp Campaign Name Not Valid!!")
        return
    }



    if (GeneratePointCampaignStartDate == "Invalid Date") {
        swalFireFail("Invalid Start Date!!");
        return;
    }


    if (GeneratePointCampaignEndDate == "Invalid Date") {
        swalFireFail("Invalid End Date!!");
        return;
    }


    // Extract pieces of the date:
    // var month = GeneratePointCampaignStartDate.getMonth(); // months start counting from zero!
    var dayCampaignStart = parseInt(GeneratePointCampaignStartDate.getDate() + GeneratePointCampaignStartDate.getMonth() + GeneratePointCampaignStartDate.getFullYear());
    var dayCampaignEnd = parseInt(GeneratePointCampaignEndDate.getDate() + GeneratePointCampaignEndDate.getMonth() + GeneratePointCampaignEndDate.getFullYear());





    console.log(dayCampaignStart);
    console.log(dayCampaignEnd);








    //  var year = GeneratePointCampaignStartDate.getFullYear();














    var animatedval = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value;

    if (globalisAnimated == "YES") {
        if (animatedval <= 0) {
            swalFireFail("Animated Interval Not Valid!!")
            return
        } if (animatedval.length == 0) {
            swalFireFail("Animated Interval Not Valid!!")
            return
        }
    }
    if (globalisAnimated == "NO") {
        if (animatedval.length == 0) {
            //swalFireFail("Animated Interval Not Valid!!")
            //return
            document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value = 0;
        }
    }


    Ext.Ajax.request({

        url: GetAPIurl() + '/StampCampaign/StampCampaignUpdate',

        params: {
            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
            StampCampaignName: _GeneratePointStampCardCampaignName,
            StartDate: document.getElementById('GeneratePointCampaignStartDate').value,
            EndDate: document.getElementById('GeneratePointCampaignEndDate').value,
            //EnterpriseAccNo: GetEnterpriseAccNo(),
            //CreatedByAccNo: GetCurrentAccountNo(),
            //CreatedBy: document.getElementById('UN').value,
            //isAnimated: globalisAnimated,
            //AnimatedInterval: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value,
            //RowStatus: 'InActive',
            //EnterpriseAccNo: 'CRCom-71100',
            //CreatedByAccNo: '0133376958-346273',
            //CreatedBy: 'ianMizi',
            EnterpriseAccNo: GetEnterpriseAccNo(),
            CreatedByAccNo: GetCurrAyohaEnterpriseUserAccountNo(),
            CreatedBy: document.getElementById('UN').value,
            isAnimated: globalisAnimated,
            AnimatedInterval: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_AnimatedInterval').value,
            RowStatus: 'InActive',
            StampRuleRemarks: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampRuleRemarks').value,
            isStampRulePopUp: globalisStampRulePopUp,
            LoyaltyCustomerType: 'NA'
        },
        success: function (result, request) {
            swalFireSuccess("Delete Successfully!");
            Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
            FloatPanel_AyohaCardManagement_GeneratePointHide();
            //LoadingCustomMsgShow('Success!', '3');

        },
        failure: function (result, request) {
            swalFireFail("Delete Error!")
            //   LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });


}









function Load_FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignEnterprisesLoadByStampCampaignCodeStore() {

    Ext.getStore('StampCampaignEnterprisesLoadByStampCampaignCodeStore').getProxy().setExtraParams({

        StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
    });
    Ext.StoreMgr.get('StampCampaignEnterprisesLoadByStampCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCampaignEnterprisesLoadByStampCampaignCodeStore').getProxy().setExtraParams({

            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
        });
        Ext.StoreMgr.get('StampCampaignEnterprisesLoadByStampCampaignCodeStore').load();
        var myStore = Ext.getStore('StampCampaignEnterprisesLoadByStampCampaignCodeStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}


function buttonsHtmlDeleteStampCampaignEnterprises(ID) {



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
                "StampCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
                "CreatedBy": GetCurrentUserLogin(),

            };
            console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/StampCampaignEnterprises/StampCampaignEnterprisesDelete',

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

                        Load_FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

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





function Load_FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignStamperLoadByStampCampaignCodeStore() {

    Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore').getProxy().setExtraParams({

        StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
    });
    Ext.StoreMgr.get('StampCampaignStamperLoadByStampCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore').getProxy().setExtraParams({

            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
        });
        Ext.StoreMgr.get('StampCampaignStamperLoadByStampCampaignCodeStore').load();
        var myStore = Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(500);
}


function buttonsHtmlDeleteStampCampaignStamper(ID) {



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
                "StampCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value,
                "CreatedBy": GetCurrentUserLogin(),

            };
            console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/StampCampaignStamper/StampCampaignStamperDelete',

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
                        Load_FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignStamperLoadByStampCampaignCodeStore();

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



var qrcode;
function FloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Standard_CreateQrCode() {


    var val = document.getElementById('input-FloatPanel_AyohaCardManagement_GeneratePoint_StampCardCampaignCode').value;


    //jQuery('#qrcodeCanvas').qrcode({
    //    //text: "https://setkita.com/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
    //    //text: 'https://setkita.com/PrintLink/?BillID=' + 1 + '&TemplateCode=' + 1
    //    text: val
    //});

    //var can = document.getElementsByTagName("canvas");
    //var src = can[0].toDataURL("image/png");
    //console.log(src);
    ////Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Standards').setHtml('<img src="' + src + '" style="width: 100%; height: 365px; border:1px solid white;" />');
    //Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Standards').setSrc(src);
    //src = "";


    var x = screen.width;
    var y = x - 12;
    qrcode = new QRCode(document.getElementById("myQRCodeImg"), {
        width: y,
        height: 360
    });

    //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));


    qrcode.clear();

    qrcode.makeCode(val);



    if (globalStampCampaignPremiumQRCode) {

        var str = globalStampCampaignPremiumQRCode;
        var n = str.includes("Sample");
        if (n) {
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_SamplePremium_EnterpriseLogo').setHidden(false);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium').setHidden(false);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium_label').setHidden(false);
            Ext.getCmp('containerFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium_Button').setHidden(false);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium').setSrc(globalStampCampaignPremiumQRCode);
        } else {
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_SamplePremium_EnterpriseLogo').setHidden(true);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium').setHidden(false);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium_label').setHidden(false);
            Ext.getCmp('containerFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium_Button').setHidden(false);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_GeneratePoint_StampCampaignQRCode_Premium').setSrc(globalStampCampaignPremiumQRCode);

        }





    }


    //// FloatPanel_AyohaCardManagement_StampQrCode_CloseTimerQrCode();

}

