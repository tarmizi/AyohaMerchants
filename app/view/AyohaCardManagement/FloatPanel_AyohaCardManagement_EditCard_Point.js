Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCard_Point', {

});




var istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptioTwoFirstLoad = "NO";
var istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOneFirstLoad = "NO";
var istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNoFirstLoad = "NO";
var PointCalculationOption = "1";
var PointAmountEquation;
var RequiredReceiptBillNo;

var _FloatPanel_AyohaCardManagement_EditCard_Point;

function FloatPanel_AyohaCardManagement_EditCard_Point() {

    _FloatPanel_AyohaCardManagement_EditCard_Point = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaCardManagement_EditCard_PointID',
           // xtype: 'panel',
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
                duration: 150,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
            },

            style: 'background-color:white',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: 'background-color:transparent;',
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

                     id: 'containerFloatPanel_AyohaCardManagement_EditCard_PointHeader',
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                     width: 20,
                                 },


                                 {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_AyohaCardManagement_EditCard_Point_TitleHeaderTxt',
                                    html: '<font size=3 color=black><b>Point Card Setting</b></font>'
                                },
                                         
                                           {
                                               xtype: 'spacer',

                                           },

                                           
                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaCardManagement_EditCard_PointBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
  
                                                    _FloatPanel_AyohaCardManagement_EditCard_Point.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        duration: 250,
                                                        easing: 'ease-out'
  
                                                    }));
                                                    isFloatPanel_AyohaCardManagement_EditCard_PointOpen = 'N';
                                                    istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptioTwoFirstLoad = "NO";
                                                    istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOneFirstLoad = "NO";
                                                    istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNoFirstLoad = "NO";
                                                }
                                            },
                                            {
                                                xtype: 'spacer',
                                                width: 20,
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
                                                       id: 'containerFloatPanel_AyohaCardManagement_EditCard_PointHaiUser',
                                                       layout: {

                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [


                                                           {
                                                               margin: '0 0 0 0',
                                                               id: 'htmlFloatPanel_AyohaCardManagement_EditCard_PointHaiUser',
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
                                                               id: 'containerFloatPanel_AyohaCardManagement_EditCard_PointeWallet',
                                                               layout: {

                                                                   type: 'hbox',
                                                                   pack: 'left',
                                                                   align: 'left'
                                                               },
                                                               items: [
                                                                    {
                                                                        xtype: 'button',
                                                                        id: 'btnFloatPanel_AyohaCardManagement_EditCard_PointeWallet',
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
                                                    id: 'containerFloatPanel_AyohaCardManagement_EditCard_PointPictureUser',
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
                                                            id: 'btnFloatPanel_AyohaCardManagement_EditCard_PointInfo',
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
                       id:'containerFloatPanel_AyohaCardManagement_EditCard_Point_bottombtn',
                       width: '100%',
                       docked: 'bottom',
                       style:GetFooterStyle(),
                       layout: {
                           type: 'hbox',
                           pack: 'center',
                           align: 'center'

                       },
                       items: [


                       {
                           xtype: 'button',
                           id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PreviewCard',
                           //  badgeText: '1',
                           hidden:true,
                           margin: '0 -18 -8 0',
                           //height: 35,
                           //width: 35,
                           html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {

                               var CampaingName = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName').value;
                               var CampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value;
                               var EndDate = document.getElementById('EditCardCampaignEndDate').value;
                               
                             //  FloatLoyaltyCardPoint_PreviewShow(CampaingName, CampaignCode);



                               FloatLoyaltyCardPointShow(CampaingName, CampaignCode, GetEnterpriseLogoPath(), GetEnterpriseName(), GetEnterpriseAccNo(), EndDate, globalCampaignStartEndDateYesNo, "NotExpired");



                               //var PointCampaignName = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName').value;
                               //var PointRuleRemarks = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointRuleRemarks').value;
                               //var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCardType').value;
                               //var strPointCampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value;
                               //var EnterpriseAccNo = GetEnterpriseAccNo();
                               //var StartDate = GetStartDatePointCardCampaign();
                               //var EndDate = GetEndDatePointCardCampaign();
                               //FloatPanel_AyohaCardManagement_PreviewCardShow(strPointCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, PointCampaignName, PointRuleRemarks);
                           }
                       },
           {
               xtype: 'button',
               hidden:true,
               id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_PreviewCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>PreView Card</font>',
               ui: 'plain',
               handler: function () {
                   var CampaingName = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName').value;
                   var CampaignCode = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value;
                   var EndDate = document.getElementById('EditCardCampaignEndDate').value;

                   //  FloatLoyaltyCardPoint_PreviewShow(CampaingName, CampaignCode);



                   FloatLoyaltyCardPointShow(CampaingName, CampaignCode, GetEnterpriseLogoPath(), GetEnterpriseName(), GetEnterpriseAccNo(), EndDate, globalCampaignStartEndDateYesNo, "NotExpired");

                  
               }
           },


           {
               xtype: 'spacer'
           },
                   {
                       xtype: 'button',
                       id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_DeleteCard',
                       //  badgeText: '1',
                       margin: '0 -18 -8 0',
                       //height: 35,
                       //width: 35,
                       html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                           var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCardType').value;
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
                                   DeleteEditCardMaster();
                               }
                           });




                       }
                   },
           {
               xtype: 'button',
               id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_DeleteCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>*Delete</font>',
               ui: 'plain',
               handler: function () {











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
                           FloatPanel_AyohaCardManagement_EditCard_Point_save("InActive");
                       }
                   });
               }
           },

                {
                    xtype: 'button',
                    id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                    //  badgeText: '1',
                    margin: '0 -18 -8 0',
                    //height: 35,
                    //width: 35,
                    html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                        FloatPanel_AyohaCardManagement_EditCard_Point_save("Active");
                    }
                },
           {
               xtype: 'button',
               id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>Save</font>',
               ui: 'plain',
               handler: function () {
                   FloatPanel_AyohaCardManagement_EditCard_Point_save("Active");
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

                                html: '<font size=3 color=black>Card Setting Info</font>',

                            },



                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=black>Point Card Campaign Name</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },



                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=black>Card Campaign Code</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode"  readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },



          {
              margin: '3 0 0 0',

              html: '<font size=2 color=black>Card Types</font>',

          },
           {
               id: 'htmlFloatPanel_AyohaCardManagement_EditCard_PointCardType',
               margin: '-2 0 0 0',
               width: '40%',
               height: 20,
               html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCardType"  readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
           },

        //{
        //    xtype: 'container',
        //    id: 'containerFloatPanel_AyohaCardManagement_EditCard_PointCardType',
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
        //        id: 'togglefieldFloatPanel_AyohaCardManagement_EditCard_PointCardType',
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
        //         id:'htmlPointCardType',
        //         html: '<font size=2 color=black>Default</font>',

        //     },

        //    ]





        //},



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

                                     html: '<font size=2 color=black>Point Rule</font>',

                                 },



                                 ]
                             },




       {
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaCardManagement_EditCard_Point_PointRule',
           width: '100%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_PointRuleRemarks"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'

       },


                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PointRuleInfo',
                            //  badgeText: '1',
                            hidden: true,
                            margin: '0 0 -10 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                swalFireGeneralMsg("A Rule Point Message will be pop up to remind mechandiser before card Pointed");
                            }
                        },

            ]

        },







                 {
                     xtype: 'container',
                     margin: '5 0 0 0',
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
                             margin: '10 0 0 0',

                             html: '<font size=3 color=black>Is This Campaign Required Start Date and End Date?</font>',

                         },
                        


                        {
                            xtype: 'container',
                            margin: '0 0 0 0',
                           // width: '100%',
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
                                    id: 'togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateYesNo',
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

                                                Ext.getCmp('htmlCampaignStartEndDateYesNo').setHtml('<font size=2 color=black>YES</font>');
                                                Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateYesNo').setValue(true);
                                                Ext.getCmp('container_FloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateMaster').setHidden(false);
                                                globalCampaignStartEndDateYesNo = "YES";

                                            }


                                                // if(newValue == false)
                                            else { // else make it false
                                                Ext.getCmp('htmlCampaignStartEndDateYesNo').setHtml('<font size=2 color=black>NO</font>');
                                                Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateYesNo').setValue(false);
                                                Ext.getCmp('container_FloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateMaster').setHidden(true);
                                                globalCampaignStartEndDateYesNo = "NO";


                                            }


                                        },


                                    }


                                },
                 {
                     margin: '0 0 0 0',
                     id: 'htmlCampaignStartEndDateYesNo',
                     html: '<font size=2 color=black>NO</font>',

                 },

                            ]
                        },
                         

                     ]
                 },









{
    xtype: 'container',
    id:'container_FloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateMaster',
    hidden: true,
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
             margin: '5 0 0 0',
             // hidden:true,
             html: '<font size=2 color=black>Campaign Start Date</font>',

         },

         {
             xtype: 'container',
             // hidden: true,
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

                        html: ' <input type="date" id="EditCardCampaignStartDate" style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">',

                    },
                     {
                         xtype: 'button',
                         hidden: true,
                         id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartDateSave',
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
             margin: '7 0 0 0',
             //   hidden: true,
             html: '<font size=2 color=black>Campaign End Date</font>',

         },

         {
             xtype: 'container',
             //  hidden: true,
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

                      html: ' <input type="date" id="EditCardCampaignEndDate" style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">',

                  },
                     {
                         xtype: 'button',
                         hidden: true,
                         id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_CampaignEndDateSave',
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

    ]
},




        








         




         {
             margin: '0 0 0 0',
             id: 'htmlFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp',
             html: '<font size=2 color=black>Pop Up Point Rule?</font>',
             hidden: true,
         },

{
    xtype: 'container',
    hidden: true,
    margin: '5 0 0 0',
    width: '100%',
    id: 'containertogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp',
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
            id: 'togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp',
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


                        var val = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointRuleRemarks').value;

                        if (val.length > 2) {
                            globalisPointRulePopUp = "YES";
                            Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>YES</font>');
                            Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>(Point rule will be pop up before merchadiser started to Point card)</font>');
                            Ext.getCmp('htmlisPointRulePopUpText').setHidden(false);
                            return;
                        } else {

                            swalFireFail("Point Rule is Empty!");
                            Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>NO</font>');
                            Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>.</font>');
                            Ext.getCmp('htmlisPointRulePopUpText').setHidden(true);
                            globalisPointRulePopUp = "NO";
                            Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp').setValue(false);
                        }



                    }


                        // if(newValue == false)
                    else { // else make it false

                        Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>NO</font>');
                        Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>.</font>');
                        Ext.getCmp('htmlisPointRulePopUpText').setHidden(true);
                        globalisPointRulePopUp = "NO";
                    }


                },


            }


        },
         {
             margin: '0 0 0 0',
             id: 'htmlisPointRulePopUpYesNo',
             html: '<font size=2 color=black>No</font>',

         },
    ]

},

{
    margin: '0 0 0 0',
    id: 'htmlisPointRulePopUpText',
    hidden: true,
    html: '<font size=2 color=black>.</font>',

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
                    margin: '20 0 0 0',

                    html: '<font size=3 color=black>Authorized User</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_Pointer',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -21 -12 0',
                height: 35,
                width: 35,
                html: '<img src="resources/icons/AddNewCustomerTwo.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaCardManagement_UserEnterprisesListShow();

                }
            },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_Pointer',
    //  badgeText: '1',
    margin: '0 -20 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=black>Add User</font>',
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
            store: 'PointCampaignPointerLoadByPointCampaignCodeStore',
            id: 'FloatPanel_AyohaCardManagement_EditCard_Point_PointerListAdministrator',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            itemTpl: '<div class="myContent">' +
                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{AccountName}<br>{UserType}</div><br><div style="width:100%;text-align:right;margin:-45px 0px 0px -8px;"><button OnClick="buttonsHtmlDeletePointCampaignPointer({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div>' +

                                   '</div>',
            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },

        {
            xtype: 'list',
            //flex:1,
            height: 150,
            hidden:true,
            store: 'PointCampaignPointerLoadByPointCampaignCodeStore',
            id: 'FloatPanel_AyohaCardManagement_EditCard_Point_PointerListStaff',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            itemTpl: '<div class="myContent">' +
                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{AccountName}<br>{UserType}</div><br><div style="width:100%;text-align:right;margin:-45px 0px 0px -8px;"><button OnClick="buttonsHtmlDeletePointCampaignPointer({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div>' +

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
                    margin: '10 0 0 0',

                    html: '<font size=3 color=black>Redeem Item</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_View',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -21 -12 0',
                height: 35,
                width: 35,
                html: '<img src="resources/icons/AddSaleItemPurple.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointShow();

                }
            },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_View',
    //  badgeText: '1',
    margin: '0 -20 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=black>Add Item</font>',
    ui: 'plain',
    handler: function () {
        FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointShow();

    }
},
            ]
        },




           {
               xtype: 'list',
               //flex:1,
               height: 350,
               store: 'PointCampaignRedeemLoadByPointCampaignCodeStore',
               id: 'FloatPanel_AyohaCardManagement_EditCard_Point_RedeemItemSettingAdministrator',
               mode: 'SINGLE',
               //  grouped: true,
               disableSelection: true,
               itemTpl: '<div class="myContent">' +

                //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed;width: 100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal;width: 70px;"><img src="{AccPicProfile}" style="width: 62px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px;" /></th><th onclick=" MultipleTrackingMap_LiveTrackingZoomTo({ID})" style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal"><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal">{EmployeeName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/CheckInRed1.png" style="width: 16px; height: 16px;" />Check-In Location:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{EndPointNameModified}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/latestDestination.png" style="width: 16px; height: 16px;" />Movement Purpose:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{MovementPurpose}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/TimerRed3.png" style="width: 16px; height: 16px;" />Check-In DateTime:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{DateDT}</div></th></tr></thead></table>'

                // <tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:bottom;word-break:normal"><div><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeem">Redeem</button></div></td></tr>
                 //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed;width: 100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:2px 2px;text-align:left;vertical-align:middle;word-break:normal;"><img src="https://setkita.com/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;" /></th><th onclick=" MultipleTrackingMap_LiveTrackingZoomTo({ID})" style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{ItemName}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;">Point Required:</div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{ItemPoint}</div></th></tr></thead></table>'


                  '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ModifiedItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{ItemPoint}</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Cost:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{ItemPrizePriceCost}</b></div></th></tr></thead></table>'
                //'<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="https://setkita.com/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
                + '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointShow_Edit({ID})" class="buttonLoyaltyCardPointRedeemList">Edit</button></div>'
             + '</div>',

               width: '100%',
               listeners: {
                   itemsingletap: function (list, idx, target, records, evt) {



                   },
                   deselect: function (list, records) {

                   }
               },

           },

           {
            xtype: 'list',
            //flex:1,
            height: 350,
            hidden:true,
            store: 'PointCampaignRedeemLoadByPointCampaignCodeStore',
            id: 'FloatPanel_AyohaCardManagement_EditCard_Point_RedeemItemSettingStaff',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            itemTpl: '<div class="myContent">' +

             //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed;width: 100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal;width: 70px;"><img src="{AccPicProfile}" style="width: 62px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px;" /></th><th onclick=" MultipleTrackingMap_LiveTrackingZoomTo({ID})" style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal"><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal">{EmployeeName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/CheckInRed1.png" style="width: 16px; height: 16px;" />Check-In Location:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{EndPointNameModified}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/latestDestination.png" style="width: 16px; height: 16px;" />Movement Purpose:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{MovementPurpose}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/TimerRed3.png" style="width: 16px; height: 16px;" />Check-In DateTime:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{DateDT}</div></th></tr></thead></table>'

             // <tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:bottom;word-break:normal"><div><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeem">Redeem</button></div></td></tr>
              //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed;width: 100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:2px 2px;text-align:left;vertical-align:middle;word-break:normal;"><img src="https://setkita.com/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;" /></th><th onclick=" MultipleTrackingMap_LiveTrackingZoomTo({ID})" style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{ItemName}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;">Point Required:</div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{ItemPoint}</div></th></tr></thead></table>'


               '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ModifiedItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{ItemPoint}</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Cost:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{ItemPrizePriceCost}</b></div></th></tr></thead></table>'
             //'<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="https://setkita.com/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
             + '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;visibility: hidden;"><button OnClick="FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointShow_Edit({ID})" class="buttonLoyaltyCardPointRedeemList">Edit</button></div>'
          + '</div>',

            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {



                },
                deselect: function (list, records) {

                }
            },

        },

           {
               xtype: 'container',
               margin: '20 0 0 0',
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

                       html: '<font size=3 color=black>Required Receipt No/Bill ID</font>',

                   },
                   {
                       xtype: 'spacer'
                   },
               {
                   xtype: 'togglefield',
                   // text:'NO/YES',
                   //    name: 'toggleName',
                   margin: '-12 0 0 -10',
                   height: 5,
                   // width:20,
                   id: 'togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNo',
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


                               if (istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNoFirstLoad == "YES") {
                                   Ext.getCmp('htmlRequiredReceiptBillNoOnOff').setHtml('<font size=2 color=black>YES</font>');
                                
                                
                                   RequiredReceiptBillNo = "YES";

                               }






                           }


                               // if(newValue == false)
                           else { // else make it false
                               if (istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNoFirstLoad == "YES") {
                                   Ext.getCmp('htmlRequiredReceiptBillNoOnOff').setHtml('<font size=2 color=black>NO</font>');
                                 
                                 
                                   RequiredReceiptBillNo = "NO";
                               }



                           }


                       },


                   }


               },
         {
             margin: '0 0 0 0',
             id: 'htmlRequiredReceiptBillNoOnOff',
             html: '<font size=2 color=black>OFF</font>',

         },
               ]
           },

           ////////
           {
               xtype: 'container',
               margin: '20 0 0 0',
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

                       html: '<font size=3 color=black>Point Calculation Option 1</font>',

                   },
                   {
                       xtype: 'spacer'
                   },
               {
                   xtype: 'togglefield',
                   // text:'NO/YES',
                   //    name: 'toggleName',
                   margin: '-12 0 0 -10',
                   height: 5,
                   // width:20,
                   id: 'togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOne',
                   //label: 'Manual',
                   disabled: false,
                   value: true,
                   style: {

                       // background: '#f44336',
                       background: 'transparent',
                      
                   },
                   listeners: {
                       change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                           //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                           if (newValue == true) { // if toggle is true then enable the slider


                               if (istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOneFirstLoad == "YES")
                               {
                                   Ext.getCmp('htmlCalculationPointOptionOneOnOff').setHtml('<font size=2 color=black>ON</font>');
                                   Ext.getCmp('htmlCalculationPointOptionTwoOnOff').setHtml('<font size=2 color=black>OFF</font>');
                                   Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionTwo').setValue(false);
                                   Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOne').setValue(true);
                                   PointCalculationOption = "1";
                                   
                               }

                             

                             


                           }


                               // if(newValue == false)
                           else { // else make it false
                               if (istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOneFirstLoad == "YES") {
                                   Ext.getCmp('htmlCalculationPointOptionOneOnOff').setHtml('<font size=2 color=black>OFF</font>');
                                   Ext.getCmp('htmlCalculationPointOptionTwoOnOff').setHtml('<font size=2 color=black>ON</font>');
                                   Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionTwo').setValue(true);
                                   Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOne').setValue(false);
                                   PointCalculationOption = "2";
                               }
                             
                             
                               
                           }


                       },


                   }


               },
         {
             margin: '0 0 0 0',
             id: 'htmlCalculationPointOptionOneOnOff',
             html: '<font size=2 color=black>ON</font>',

         },
               ]
           },

           ////////
           





           





{
    margin: '10 0 0 0',
    id: 'htmlAnimatedIntervalText',
    html: '<font size=2 color=black>Total Item Cost(RM)</font>',

},
{

    margin: '-2 0 0 0',
    width: '80%',
    height: 20,
   // id: 'htmlAnimatedIntervalValue',
    html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemCost"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:20px;">'
},
{
    margin: '10 0 0 0',
   // id: 'htmlAnimatedIntervalText',
    html: '<font size=2 color=black>Total Item Point</font>',

},
{

    margin: '-2 0 0 0',
    width: '80%',
    height: 20,
   // id: 'htmlAnimatedIntervalValue',
    html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemPoint"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:20px;">'
},
{
    margin: '10 0 0 0',
   // id: 'htmlAnimatedIntervalText',
    html: '<font size=2 color=black>Point Calulation Method</font>',

},
  {

      margin: '-2 0 0 0',
      width: '98%',
      height: 20,
      //id: 'htmlAnimatedIntervalValue',
      html: '<textarea id="input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationMethod"  style="border: 1px none white;color:black;text-align: left;font-size:20px;background-color: transparent;width:100%;height:80px;" wrap="hard">'
  },


  {
      margin: '37 0 0 0',
      // id: 'htmlAnimatedIntervalText',
      html: '<font size=2 color=black>One Point equal to(RM)</font>',

  },
  {

      margin: '-2 0 0 0',
      width: '80%',
      height: 20,
      //id: 'htmlAnimatedIntervalValue',
      html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationResult01"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:20px;">'
  },


    {
        margin: '5 0 0 0',
        // id: 'htmlAnimatedIntervalText',
        html: '<font size=2 color=black><i>Note: Merchant may adjust <b>one point equation(RM)</b> by modifing the cost item and the point setting</i></font>',

    },





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

                     html: '<font size=3 color=black>Point Calculation Option 2</font>',

                 },
                 {
                     xtype: 'spacer'
                 },


                 {
                     xtype: 'togglefield',
                     // text:'NO/YES',
                     //    name: 'toggleName',
                     margin: '-12 0 0 -10',
                     height: 5,
                     // width:20,
                     id: 'togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionTwo',
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

                                 if (istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptioTwoFirstLoad == "YES") {
                                     Ext.getCmp('htmlCalculationPointOptionTwoOnOff').setHtml('<font size=2 color=black>ON</font>');
                                     Ext.getCmp('htmlCalculationPointOptionOneOnOff').setHtml('<font size=2 color=black>OFF</font>');
                                     Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionTwo').setValue(true);
                                     Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOne').setValue(false);
                                     PointCalculationOption = "2";
                                 }



                             }


                                 // if(newValue == false)
                             else { // else make it false
                                 if (istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptioTwoFirstLoad == "YES") {
                                     Ext.getCmp('htmlCalculationPointOptionOneOnOff').setHtml('<font size=2 color=black>ON</font>');
                                     Ext.getCmp('htmlCalculationPointOptionTwoOnOff').setHtml('<font size=2 color=black>OFF</font>');
                                     Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionTwo').setValue(false);
                                     Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOne').setValue(true);
                                     PointCalculationOption = "1";
                                 }


                             }


                         },


                     }


                 },
         {
             margin: '0 0 0 0',
             id: 'htmlCalculationPointOptionTwoOnOff',
             html: '<font size=2 color=black>OFF</font>',

         },
           
          ]
         },





{
    margin: '10 0 0 0',
   // id: 'htmlAnimatedIntervalText',
    html: '<font size=2 color=black>Enter Point</font>',

},
{

    margin: '-2 0 0 0',
    width: '80%',
    height: 20,
    // id: 'htmlAnimatedIntervalValue',
    html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterPoint" readOnly Value="1"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:20px;">'
},
{
    margin: '10 0 0 0',
    // id: 'htmlAnimatedIntervalText',
    html: '<font size=2 color=black>Enter Amount (RM)</font>',

},
{

    margin: '-2 0 0 0',
    width: '80%',
    height: 20,
    // id: 'htmlAnimatedIntervalValue',
    html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:20px;">'
},

{
    margin: '10 0 0 0',
    // id: 'htmlAnimatedIntervalText',
    html: '<font size=2 color=black>Point Calulation Method </font>',

},
  {

      margin: '-2 0 0 0',
      width: '98%',
      height: 20,
      //id: 'htmlAnimatedIntervalValue',
      html: '<textarea id="input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationMethod2"  style="border: 1px none white;color:black;text-align: left;font-size:20px;background-color: transparent;width:100%;height:80px;" wrap="hard">'
  },



  



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
               id: 'htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium_label',
               html: '<font size=3 color=black>Point Campaign QR Code(Premium)</font>',

           },
       
           {

                hidden: true,
               xtype: 'image',
               margin: '0 0 0 0',
            //   hidden: true,
               //  margin: '-100 0 0 20',
               width: '100%',
               height: 360,
               // height: '100%',
               id: 'htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium',
               // html: '<img src="resources/icons/qrcodeReceipt.png" style="width: 100%; height: 360px; border:1px solid white;" />',
           },

           {

               hidden: true,
               // xtype: 'image',
               margin: '-230 0 0 0',
            //  hidden: true,
               //  margin: '-100 0 0 20',
               width: '100%',
               height: 230,
               // height: '100%',
               id: 'htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_SamplePremium_EnterpriseLogo',
               html: '<div style="width:100%;height:55px;text-align:center;"><img src="resources/icons/klinikpergigianismile.png" style="width: 95px; height: 95px; border:1px solid white;border-radius: 50%;" /></div>',
           },



           {
               xtype: 'container',
               id: 'containerFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium_Button',
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
                       id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium_Share',
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
                   id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium_Print',
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

              html: '<font size=3 color=black>Point Campaign QR Code(Standard)</font>',

          },


           {

             //  hidden: true,
             //  xtype: 'image',
               margin: '0 0 0 0',
               //  margin: '-100 0 0 20',
               width: '100%',
               height: 360,
               // height: '100%',
               id: 'htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standards',
               //  html: '<img src="resources/icons/qrcodeReceipt.png" style="width: 100%; height: 360px; border:1px solid white;" />',
           },
             {

                 hidden: true,
                 margin: '0 0 0 0',
                 //  margin: '-100 0 0 20',
                 width: '100%',
                 height: 360,
                 // height: '100%',

                 id: 'htmlFloatPanel_AyohaCardManagement_PointQrCode',
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
                       id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standards_Share',
                       //  badgeText: '1',
                       // hidden:true,
                       margin: '0 0 0 0',
                       height: 35,
                       width: 35,
                       html: '<img src="resources/icons/shareWhite.png" width="25" height="25" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {

                           FloatPanel_AyohaCardManagement_CampaignTemplateShow();
                       }
                   },
               {
                   xtype: 'button',
                   id: 'btnFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standards_Print',
                   //  badgeText: '1',
                   // hidden:true,
                   margin: '0 0 0 0',
                   height: 35,
                   width: 35,
                   html: '<img src="resources/icons/printWhite.png" width="25" height="25" alt="Company Name">',
                   ui: 'plain',
                   handler: function () {

                       FloatPanel_AyohaCardManagement_CampaignTemplateShow();
                   }
               },


               ]
           },






          {
              margin: '10 0 0 0',

              html: '<font size=3 color=black>Audit</font>',
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

                              html: '<font size=2 color=black>Created By</font>',

                          },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_CreatedBy"  readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
             },


        {
            margin: '6 0 0 0',

            html: '<font size=2 color=black>Modified By</font>',

        },


             {





                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_ModifiedBy" readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'






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

                         html: '<font size=2 color=black>Created Date</font>',

                     },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_CreatedDate"  readOnly style="border-color:transparent;color:;width:100%;text-align: left;font-size:12px;">'
             },


        {
            margin: '6 0 0 0',

            html: '<font size=2 color=black>Modified Date</font>',

        },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCard_Point_ModifiedDate"  readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
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

    return _FloatPanel_AyohaCardManagement_EditCard_Point;
}


var globalisPointRulePopUp;
var globalPointCampaignPremiumQRCode;
var globalisPointID;
function FloatPanel_AyohaCardManagement_EditCard_PointShow(val, PointCampaignName, PointCampaignCode, StartDate, EndDate, StrEndDate, RowStatus, EnterpriseAccNo, CreatedByAccNo, CreatedBy, CreatedDate, ModifiedBy, ModifiedDate, Remarks, PointCampaignPremiumQRCode, TermAndCondition, isPointRulePopUp) {


    ////alert("No Val");
    //Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_EditCard_Point);
    //this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_EditCard_Point());
    //this.overlay.show();
    //is_FloatPanel_AyohaCardManagement_EditCard_PointHide = 'Y';
    //FloatPanel_AyohaCardManagement_Type = 'Point';


    ////var PointCampaignCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    ////var PC = PointCampaignCode.get('PointCampaignCode');








    //var ID = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var PointCampaignCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var PointCampaignName = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var StartDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var EndDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var StrEndDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var RowStatus = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var EnterpriseAccNo = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var CreatedByAccNo = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var CreatedBy = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);

    //var CreatedDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var ModifiedBy = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var ModifiedDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var Remarks = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var PointCampaignPremiumQRCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var TermAndCondition = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //var isPointRulePopUp = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    //globalisPointID = val;
    //globalisPointRulePopUp = isPointRulePopUp.get('isPointRulePopUp');
    //globalPointCampaignPremiumQRCode = PointCampaignPremiumQRCode.get('PointCampaignPremiumQRCode');

    //localStorage.setItem("PointCampaignName", PointCampaignName.get('PointCampaignName'));
    //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName').value = PointCampaignName.get('PointCampaignName');
    //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value = PointCampaignCode.get('PointCampaignCode');
    //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCardType').value = "POINT";

    ////document.getElementById("EditCardCampaignStartDate").value = StartDateOnly;
    ////document.getElementById("EditCardCampaignEndDate").value = EndDateOnly;
    ////localStorage.setItem('StartDatePointCardCampaign', StartDateOnly);
    ////localStorage.setItem('EndDatePointCardCampaign', EndDateOnly);
    //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointRuleRemarks').value = Remarks.get('Remarks');
    ////document.getElementById('UN').value = "";
    ////document.getElementById('UN').value = "";
    ////document.getElementById('UN').value = "";
    //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CreatedBy').value = CreatedBy.get('CreatedBy');;
    //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_ModifiedBy').value = ModifiedBy.get('ModifiedBy');;
    //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CreatedDate').value = CreatedDate.get('CreatedDate');;
    //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_ModifiedDate').value = ModifiedDate.get('ModifiedDate');;

    //Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium').setSrc(globalPointCampaignPremiumQRCode);






    //if (isPointRulePopUp == "YES") {

    //    Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp').setValue(true);
    //    Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>YES</font>');
    //    Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>(Point rule will be pop up before merchadiser started to Point card)</font>');
    //    Ext.getCmp('htmlisPointRulePopUpText').setHidden(false);


    //} else {
    //    Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>NO</font>');
    //    Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>.</font>');
    //    Ext.getCmp('htmlisPointRulePopUpText').setHidden(true);

    //    Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp').setValue(false);
    //}
    ////Load_FloatPanel_AyohaCardManagement_EditCard_Point_LoyaltyCardBackgroundImageLoadByEnterpriseAccNoPointCampaignCodeStore();
    ////Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignEnterprisesLoadByPointCampaignCodeStore();
    //Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignPointerLoadByPointCampaignCodeStore();
    //Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignRedeemLoadByPointCampaignCodeStore();
    //FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standard_CreateQrCode();
    ////FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standard_CreateQrCode();

   
    //document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterPoint").addEventListener("keyup", FloatPanel_AyohaCardManagement_EditCard_Point_EnterPointOnKeyUp);
    //document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").addEventListener("keyup", FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmountOnKeyUp);

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_EditCard_Point);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_EditCard_Point());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_EditCard_PointHide = 'Y';
    FloatPanel_AyohaCardManagement_Type = 'Point';











    var ID = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointCampaignCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointCampaignName = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var StartDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EndDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var StrEndDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var RowStatus = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var CreatedByAccNo = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var CreatedBy = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var CreatedDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedBy = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var Remarks = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointCampaignPremiumQRCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var TermAndCondition = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var isPointRulePopUp = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointOption = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointAmountEquations = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var RequiredReceiptBillNos = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedStartDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedEndDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);

    globalCampaignStartEndDateYesNo = StrEndDate.get('StrEndDate');
    globalisPointID = val;
    globalisPointRulePopUp = isPointRulePopUp.get('isPointRulePopUp');
    globalPointCampaignPremiumQRCode = PointCampaignPremiumQRCode.get('PointCampaignPremiumQRCode');
    PointAmountEquation = PointAmountEquations.get('PointAmountEquation');
    PointCalculationOption = PointOption.get('PointOption');
    RequiredReceiptBillNo = RequiredReceiptBillNos.get('RequiredReceiptBillNo');
    localStorage.setItem("PointCampaignName", PointCampaignName.get('PointCampaignName'));
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName').value = PointCampaignName.get('PointCampaignName');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value = PointCampaignCode.get('PointCampaignCode');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCardType').value = "POINT";
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount').value = PointAmountEquations.get('PointAmountEquation');



    // console.log(ModifiedStartDate.get('ModifiedStartDate'));


    //var CampaignStartDate = new Date(StartDate.get('StartDate'));
    //console.log(CampaignStartDate)
    //console.log(CampaignStartDate.getMonth())
    //console.log(CampaignStartDate.getFullYear())


    document.getElementById("EditCardCampaignStartDate").value = ModifiedStartDate.get('ModifiedStartDate')
    document.getElementById("EditCardCampaignEndDate").value = ModifiedEndDate.get('ModifiedEndDate')
    //localStorage.setItem('StartDatePointCardCampaign', StartDateOnly);
    //localStorage.setItem('EndDatePointCardCampaign', EndDateOnly);
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointRuleRemarks').value = Remarks.get('Remarks');
    //document.getElementById('UN').value = "";
    //document.getElementById('UN').value = "";
    //document.getElementById('UN').value = "";
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CreatedBy').value = CreatedBy.get('CreatedBy');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_ModifiedBy').value = ModifiedBy.get('ModifiedBy');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CreatedDate').value = CreatedDate.get('CreatedDate');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_ModifiedDate').value = ModifiedDate.get('ModifiedDate');

    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium').setSrc(globalPointCampaignPremiumQRCode);






    if (isPointRulePopUp == "YES") {

        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp').setValue(true);
        Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>YES</font>');
        Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>(Point rule will be pop up before merchadiser started to Point card)</font>');
        Ext.getCmp('htmlisPointRulePopUpText').setHidden(false);


    } else {
        Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>NO</font>');
        Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>.</font>');
        Ext.getCmp('htmlisPointRulePopUpText').setHidden(true);

        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp').setValue(false);
    }






    //Load_FloatPanel_AyohaCardManagement_EditCard_Point_LoyaltyCardBackgroundImageLoadByEnterpriseAccNoPointCampaignCodeStore();
    //Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignEnterprisesLoadByPointCampaignCodeStore();
    Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignPointerLoadByPointCampaignCodeStore();
    Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignRedeemLoadByPointCampaignCodeStore();
    FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standard_CreateQrCode();
    //FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standard_CreateQrCode();

    document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterPoint").addEventListener("keyup", FloatPanel_AyohaCardManagement_EditCard_Point_EnterPointOnKeyUp);
    document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").addEventListener("keyup", FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmountOnKeyUp);



    if (RequiredReceiptBillNo == "YES") {
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNo').setValue(true);
        Ext.getCmp('htmlRequiredReceiptBillNoOnOff').setHtml('<font size=2 color=black>YES</font>');
    }
    if (RequiredReceiptBillNo == "NO") {
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNo').setValue(false);
        Ext.getCmp('htmlRequiredReceiptBillNoOnOff').setHtml('<font size=2 color=black>NO</font>');
    }



    if (globalCampaignStartEndDateYesNo == "YES") {
        Ext.getCmp('htmlCampaignStartEndDateYesNo').setHtml('<font size=2 color=black>YES</font>');
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateYesNo').setValue(true);
        Ext.getCmp('container_FloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateMaster').setHidden(false);
    }
    if (globalCampaignStartEndDateYesNo == "NO") {
        Ext.getCmp('htmlCampaignStartEndDateYesNo').setHtml('<font size=2 color=black>NO</font>');
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateYesNo').setValue(false);
        Ext.getCmp('container_FloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateMaster').setHidden(true);
    }

}



function FloatPanel_AyohaCardManagement_EditCard_Point_EnterPointOnKeyUp() {
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationMethod2').value = document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterPoint").value + '(Point) = RM (' + document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").value + ')';
  //  document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationResult02').value = 'RM (' + document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").value + ')';

    



}

function FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmountOnKeyUp() {
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationMethod2').value = document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterPoint").value + '(Point) = RM (' + document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").value + ')';
   // document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationResult02').value = 'RM (' + document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").value + ')';
    PointAmountEquation = document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").value;
}

function FloatPanel_AyohaCardManagement_EditCard_PointShow_val(val) {
 

   




    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_EditCard_Point);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_EditCard_Point());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_EditCard_PointHide = 'Y';
    FloatPanel_AyohaCardManagement_Type = 'Point';











    var ID = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointCampaignCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointCampaignName = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var StartDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EndDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var StrEndDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var RowStatus = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var CreatedByAccNo = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var CreatedBy = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var CreatedDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedBy = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var Remarks = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointCampaignPremiumQRCode = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var TermAndCondition = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var isPointRulePopUp = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointOption = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var PointAmountEquations = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var RequiredReceiptBillNos = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedStartDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedEndDate = _DataStore_PointCampaignLoadByEnterpriseAccNoStore.findRecord('ID', val, 0, false, false, true);

    globalCampaignStartEndDateYesNo = StrEndDate.get('StrEndDate');
    globalisPointID = val;
    globalisPointRulePopUp = isPointRulePopUp.get('isPointRulePopUp');
    globalPointCampaignPremiumQRCode = PointCampaignPremiumQRCode.get('PointCampaignPremiumQRCode');
    PointAmountEquation = PointAmountEquations.get('PointAmountEquation');
    PointCalculationOption = PointOption.get('PointOption');
    RequiredReceiptBillNo = RequiredReceiptBillNos.get('RequiredReceiptBillNo');
    localStorage.setItem("PointCampaignName", PointCampaignName.get('PointCampaignName'));
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName').value = PointCampaignName.get('PointCampaignName');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value = PointCampaignCode.get('PointCampaignCode');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCardType').value = "POINT";
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount').value = PointAmountEquations.get('PointAmountEquation');



   // console.log(ModifiedStartDate.get('ModifiedStartDate'));


    //var CampaignStartDate = new Date(StartDate.get('StartDate'));
    //console.log(CampaignStartDate)
    //console.log(CampaignStartDate.getMonth())
    //console.log(CampaignStartDate.getFullYear())


    document.getElementById("EditCardCampaignStartDate").value = ModifiedStartDate.get('ModifiedStartDate')
    document.getElementById("EditCardCampaignEndDate").value = ModifiedEndDate.get('ModifiedEndDate')
    //localStorage.setItem('StartDatePointCardCampaign', StartDateOnly);
    //localStorage.setItem('EndDatePointCardCampaign', EndDateOnly);
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointRuleRemarks').value = Remarks.get('Remarks');
    //document.getElementById('UN').value = "";
    //document.getElementById('UN').value = "";
    //document.getElementById('UN').value = "";
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CreatedBy').value = CreatedBy.get('CreatedBy');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_ModifiedBy').value = ModifiedBy.get('ModifiedBy');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CreatedDate').value = CreatedDate.get('CreatedDate');
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_ModifiedDate').value = ModifiedDate.get('ModifiedDate');

    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium').setSrc(globalPointCampaignPremiumQRCode);
   





    if (isPointRulePopUp == "YES") {

        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp').setValue(true);
        Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>YES</font>');
        Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>(Point rule will be pop up before merchadiser started to Point card)</font>');
        Ext.getCmp('htmlisPointRulePopUpText').setHidden(false);


    } else {
        Ext.getCmp('htmlisPointRulePopUpYesNo').setHtml('<font size=2 color=black>NO</font>');
        Ext.getCmp('htmlisPointRulePopUpText').setHtml('<font size=2 color=black>.</font>');
        Ext.getCmp('htmlisPointRulePopUpText').setHidden(true);

        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_isPointRulePopUp').setValue(false);
    }

    
    



    //Load_FloatPanel_AyohaCardManagement_EditCard_Point_LoyaltyCardBackgroundImageLoadByEnterpriseAccNoPointCampaignCodeStore();
    //Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignEnterprisesLoadByPointCampaignCodeStore();
    Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignPointerLoadByPointCampaignCodeStore();
    Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignRedeemLoadByPointCampaignCodeStore();
    FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standard_CreateQrCode();
    //FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standard_CreateQrCode();

    document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterPoint").addEventListener("keyup", FloatPanel_AyohaCardManagement_EditCard_Point_EnterPointOnKeyUp);
    document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").addEventListener("keyup", FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmountOnKeyUp);



    if (RequiredReceiptBillNo == "YES") {
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNo').setValue(true);
        Ext.getCmp('htmlRequiredReceiptBillNoOnOff').setHtml('<font size=2 color=black>YES</font>');
    }
    if (RequiredReceiptBillNo == "NO") {
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNo').setValue(false);
        Ext.getCmp('htmlRequiredReceiptBillNoOnOff').setHtml('<font size=2 color=black>NO</font>');
    }

    console.log(globalCampaignStartEndDateYesNo);

    if (globalCampaignStartEndDateYesNo == "YES") {
        Ext.getCmp('htmlCampaignStartEndDateYesNo').setHtml('<font size=2 color=black>YES</font>');
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateYesNo').setValue(true);
        Ext.getCmp('container_FloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateMaster').setHidden(false);
    }
    if (globalCampaignStartEndDateYesNo == "NO") {
        Ext.getCmp('htmlCampaignStartEndDateYesNo').setHtml('<font size=2 color=black>NO</font>');
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateYesNo').setValue(false);
        Ext.getCmp('container_FloatPanel_AyohaCardManagement_EditCard_Point_CampaignStartEndDateMaster').setHidden(true);
    }
}
var is_FloatPanel_AyohaCardManagement_EditCard_PointHide = 'N';

function FloatPanel_AyohaCardManagement_EditCard_PointHide() {
    if (is_FloatPanel_AyohaCardManagement_EditCard_PointHide == 'Y') {
        _FloatPanel_AyohaCardManagement_EditCard_Point.hide();
        is_FloatPanel_AyohaCardManagement_EditCard_PointHide = 'N';
        istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptioTwoFirstLoad = "NO";
        istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOneFirstLoad = "NO";
        istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNoFirstLoad = "NO";
    }

}





var globalCampaignStartEndDateYesNo;
function FloatPanel_AyohaCardManagement_EditCard_Point_save(RowStatus) {

   

    if (globalCampaignStartEndDateYesNo == "YES")
    {
        var CampaignStartDate = new Date(document.getElementById('EditCardCampaignStartDate').value);
        var CampaignEndDate = new Date(document.getElementById('EditCardCampaignEndDate').value);
        if (CampaignStartDate == "Invalid Date") {
            swalFireFail("Invalid Start Date!!");
            return;
        }


        if (CampaignEndDate == "Invalid Date") {
            swalFireFail("Invalid End Date!!");
            return;
        }


        // Extract pieces of the date:
        // var month = CampaignStartDate.getMonth(); // months start counting from zero!



        // var month = EditCardCampaignStartDate.getMonth(); // months start counting from zero!
        var dayCampaignStart = parseInt(CampaignStartDate.getDate() + CampaignStartDate.getMonth() + CampaignStartDate.getFullYear());
        var dayCampaignEnd = parseInt(CampaignEndDate.getDate() + CampaignEndDate.getMonth() + CampaignEndDate.getFullYear());




        if (dayCampaignStart > dayCampaignEnd) {
            // alert("Fail-Campaing date Has passed");
            swalFireFail("Fail-Campaign date Has passed!!");
            return;

        }

        if (dayCampaignStart == dayCampaignEnd) {
            swalFireFail("Fail-Campaign date start and date end is same!!");
            return;

        }

    }








    if (PointCalculationOption == "1") {

        PointAmountEquation = document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationResult01").value;

    }


    if (PointCalculationOption == "2") {

        PointAmountEquation = document.getElementById("input-FloatPanel_AyohaCardManagement_EditCard_Point_EnterAmount").value;


    }




    var objn = {
        "ID": globalisPointID,
        "PointCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
        "PointCampaignName": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName').value,
        "StartDate": CampaignStartDate,
        "EndDate": CampaignEndDate,
        "StrEndDate": globalCampaignStartEndDateYesNo,
        "RowStatus": RowStatus,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedByAccNo": GetCurrAyohaEnterpriseUserAccountNo(),
        "CreatedBy": document.getElementById('UN').value,
        "Remarks": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointRuleRemarks').value,
        "PointCampaignPremiumQRCode": 'Auto-Default',
        "TermAndCondition": 'Term And Condition',
        "isPointRulePopUp": "NO",
        "PointOption": PointCalculationOption,
        "PointAmountEquation": PointAmountEquation,
        "RequiredReceiptBillNo": RequiredReceiptBillNo

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/PointCampaign/PointCampaignUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {


                if (RowStatus == "Active") {
                    swalFireSuccess("Update Successfully!");
                }

                if (RowStatus == "InActive") {
                    swalFireSuccess("Delete Successfully!");
                }
                
                //LoadingCustomMsgShow('Success!', '3');
                //FloatPanel_AyohaCardManagement_AddCardForm_PointHide();
                //Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
                Load_FloatPanel_AyohaCardManagement_PointCampaignLoadByEnterpriseAccNoStore();

            }
            else {
                swalFireFail("Point Card  Error!")
            }
            FloatPanel_AyohaCardManagement_EditCard_PointHide();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            FloatPanel_AyohaCardManagement_EditCard_PointHide();
            Ext.Viewport.unmask();
            swalFireFail("Card Created Failed!")
        }

    });




}



function FloatPanel_AyohaCardManagement_EditCard_Point_Delete() {










    var _EditCardPointCardCampaignName = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignName').value;

    var EditCardCampaignStartDate = new Date(document.getElementById('EditCardCampaignStartDate').value);
    var EditCardCampaignEndDate = new Date(document.getElementById('EditCardCampaignEndDate').value);


    if (_EditCardPointCardCampaignName.length < 2) {
        swalFireFail("Point Campaign Name Not Valid!!")
        return
    }



    if (EditCardCampaignStartDate == "Invalid Date") {
        swalFireFail("Invalid Start Date!!");
        return;
    }


    if (EditCardCampaignEndDate == "Invalid Date") {
        swalFireFail("Invalid End Date!!");
        return;
    }



    Ext.Ajax.request({

        url: GetAPIurl() + '/PointCampaign/PointCampaignUpdate',

        params: {
            PointCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
            PointCampaignName: _EditCardPointCardCampaignName,
            StartDate: document.getElementById('EditCardCampaignStartDate').value,
            EndDate: document.getElementById('EditCardCampaignEndDate').value,
            //EnterpriseAccNo: GetEnterpriseAccNo(),
            //CreatedByAccNo: GetCurrentAccountNo(),
            //CreatedBy: document.getElementById('UN').value,
            //isAnimated: globalisAnimated,
            //AnimatedInterval: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_AnimatedInterval').value,
            //RowStatus: 'InActive',
            //EnterpriseAccNo: 'CRCom-71100',
            //CreatedByAccNo: '0133376958-346273',
            //CreatedBy: 'ianMizi',
            EnterpriseAccNo: GetEnterpriseAccNo(),
            CreatedByAccNo: GetCurrAyohaEnterpriseUserAccountNo(),
            CreatedBy: document.getElementById('UN').value,
            isAnimated: globalisAnimated,
            AnimatedInterval: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_AnimatedInterval').value,
            RowStatus: 'InActive',
            PointRuleRemarks: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointRuleRemarks').value,
            isPointRulePopUp: globalisPointRulePopUp,
            LoyaltyCustomerType: 'NA'
        },
        success: function (result, request) {
            swalFireSuccess("Delete Successfully!");
            Load_FloatPanel_AyohaCardManagement_PointCampaignLoadByEnterpriseAccNoStore();
            FloatPanel_AyohaCardManagement_EditCard_PointHide();
            //LoadingCustomMsgShow('Success!', '3');

        },
        failure: function (result, request) {
            swalFireFail("Delete Error!")
            //   LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });


}

















function Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignPointerLoadByPointCampaignCodeStore() {

    Ext.getStore('PointCampaignPointerLoadByPointCampaignCodeStore').getProxy().setExtraParams({

        PointCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
    });
    Ext.StoreMgr.get('PointCampaignPointerLoadByPointCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('PointCampaignPointerLoadByPointCampaignCodeStore').getProxy().setExtraParams({

            PointCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
        });
        Ext.StoreMgr.get('PointCampaignPointerLoadByPointCampaignCodeStore').load();
        var myStore = Ext.getStore('PointCampaignPointerLoadByPointCampaignCodeStore');
        //PointCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalPointCount').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + PointCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}


function buttonsHtmlDeletePointCampaignPointer(ID) {



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
                "PointCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
                "CreatedBy": GetCurrentUserLogin(),

            };
            console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/PointCampaignPointer/PointCampaignPointerDelete',

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
                        Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignPointerLoadByPointCampaignCodeStore();

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
function FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standard_CreateQrCode() {


    var val = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value;


    //jQuery('#qrcodeCanvas').qrcode({
    //    //text: "https://setkita.com/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
    //    //text: 'https://setkita.com/PrintLink/?BillID=' + 1 + '&TemplateCode=' + 1
    //    text: val
    //});

    //var can = document.getElementsByTagName("canvas");
    //var src = can[0].toDataURL("image/png");
    //console.log(src);
    ////Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standards').setHtml('<img src="' + src + '" style="width: 100%; height: 365px; border:1px solid white;" />');
    //Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standards').setSrc(src);
    //src = "";


    var x = screen.width;
    var y = x - 20;
    qrcode = new QRCode(document.getElementById("htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Standards"), {
        width: 360,
        height: 360
    });

    //var qrcode = new QRCode(document.getElementById("myQRCodeImg"));


    qrcode.clear();

    qrcode.makeCode(val);



    //if (globalPointCampaignPremiumQRCode) {

    //    var str = globalPointCampaignPremiumQRCode;
    //    var n = str.includes("Sample");
    //    if (n) {
    //        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_SamplePremium_EnterpriseLogo').setHidden(false);
    //        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium').setHidden(false);
    //        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium_label').setHidden(false);
    //        Ext.getCmp('containerFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium_Button').setHidden(false);
    //        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium').setSrc(globalPointCampaignPremiumQRCode);
    //    } else {
    //        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_SamplePremium_EnterpriseLogo').setHidden(true);
    //        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium').setHidden(false);
    //        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium_label').setHidden(false);
    //        Ext.getCmp('containerFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium_Button').setHidden(false);
    //        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignQRCode_Premium').setSrc(globalPointCampaignPremiumQRCode);

    //    }





    //}


    //// FloatPanel_AyohaCardManagement_PointQrCode_CloseTimerQrCode();


   

  

    if (PointCalculationOption == "1") {

        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOne').setValue(true);
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionTwo').setValue(false);
        Ext.getCmp('htmlCalculationPointOptionOneOnOff').setHtml('<font size=2 color=black>ON</font>');
        Ext.getCmp('htmlCalculationPointOptionTwoOnOff').setHtml('<font size=2 color=black>OFF</font>');

    }


    if (PointCalculationOption == "2") {

        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionTwo').setValue(true);
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOne').setValue(false);
        Ext.getCmp('htmlCalculationPointOptionOneOnOff').setHtml('<font size=2 color=black>OFF</font>');
        Ext.getCmp('htmlCalculationPointOptionTwoOnOff').setHtml('<font size=2 color=black>ON</font>');



    }





    istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptionOneFirstLoad = "YES";
    istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_CalculationPointOptioTwoFirstLoad = "YES";
    istogglefieldFloatPanel_AyohaCardManagement_EditCard_Point_RequiredReceiptBillNoFirstLoad = "YES";

}




var _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore;

function Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignRedeemLoadByPointCampaignCodeStore() {

    Ext.getStore('PointCampaignRedeemLoadByPointCampaignCodeStore').getProxy().setExtraParams({

        PointCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
        EnterpriseAccNo: GetEnterpriseAccNo(),
    });
    Ext.StoreMgr.get('PointCampaignRedeemLoadByPointCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('PointCampaignRedeemLoadByPointCampaignCodeStore').getProxy().setExtraParams({

            PointCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
            EnterpriseAccNo: GetEnterpriseAccNo(),
        });
        _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore=Ext.StoreMgr.get('PointCampaignRedeemLoadByPointCampaignCodeStore').load();
        var myStore = Ext.getStore('PointCampaignRedeemLoadByPointCampaignCodeStore');
        var count = myStore.getCount();
        if (count > 0) {
          

            var modelRecord = myStore.getAt(0);
            var TotalItemPoint = modelRecord.get('TotalItemPoint');
            var TotalItemPrizePriceCost = modelRecord.get('TotalItemPrizePriceCost');
            var result01 = TotalItemPrizePriceCost / TotalItemPoint;

            var num = result01;
            var n = num.toFixed(2);

            document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemPoint').value = TotalItemPoint;
            document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemCost').value = TotalItemPrizePriceCost;
            document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationMethod').value = "Total Item Cost=(" + TotalItemPrizePriceCost + ") /" + "Total Item Point=(" + TotalItemPoint + ")";
            document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationResult01').value = n;
            PointAmountEquation = n;
        }
       
        //PointCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalPointCount').setHtml('<div style="color:black;text-align: center;font-size:28px;width:100%;font-weight:bold">' + PointCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(500);
}