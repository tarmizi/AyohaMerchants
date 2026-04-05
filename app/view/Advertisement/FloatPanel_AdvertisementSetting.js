Ext.define('ianMizi.view.Advertisement.FloatPanel_AdvertisementSetting', {

});







var _FloatPanel_AdvertisementSetting;

function FloatPanel_AdvertisementSetting() {

    _FloatPanel_AdvertisementSetting = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AdvertisementSettingID',
            xtype: 'panel',
            zIndex: 150,
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

            style: 'background-color: white;',


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
                       // margin: '10 0 0 0',
                        width: '100%',
                        height:50,
                        id:'containerFloatPanel_AdvertisementSetting_PreviewAdvertisement_bottombtn',
                        docked: 'bottom',
                        style:GetFooterStyle(),
                       // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                        //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
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
                            id: 'btnFloatPanel_AdvertisementSetting_PreviewAdvertisement',
                            //  badgeText: '1',
                            // hidden:true,
                            margin: '0 -18 -8 0',
                            //height: 35,
                            //width: 35,
                            html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                FloatPanel_PreviewAdvertisementShowFromEditAdvertisement("FloatPanel_PreviewAdvertisement");
                                //FloatPanel_PreviewAdvertisementShow("FloatPanel_PreviewAdvertisement");
                                //var CardType = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCardType').value;
                                //var strStampCampaignCode = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCampaignCode').value;
                                //var EnterpriseAccNo = GetEnterpriseAccNo();
                                //var StartDate = GetStartDateStampCardCampaign();
                                //var EndDate = GetEndDateStampCardCampaign();
                                //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);
                            }
                        },
            {
                xtype: 'button',
                //hidden:true,
                id: 'txtFloatPanel_AdvertisementSetting_PreviewAdvertisement',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>PreView Advertisement</font>',
                ui: 'plain',
                handler: function () {
                   // FloatPanel_PreviewAdvertisementShow("FloatPanel_PreviewAdvertisement");
                    FloatPanel_PreviewAdvertisementShowFromEditAdvertisement("FloatPanel_PreviewAdvertisement");

                   // txtFloatPanel_AdvertisementSetting_PreviewAdvertisement
                    //var CardType = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCardType').value;
                    //var strStampCampaignCode = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCampaignCode').value;
                    //var EnterpriseAccNo = GetEnterpriseAccNo();
                    //var StartDate = GetStartDateStampCardCampaign();
                    //var EndDate = GetEndDateStampCardCampaign();
                    //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);
                }
            },


            {
                xtype: 'spacer'
            },
                    {
                        xtype: 'button',
                        id: 'btnFloatPanel_AdvertisementSetting_DeleteAdvertisement',
                        //  badgeText: '1',
                        margin: '0 -18 -8 0',
                        //height: 35,
                        //width: 35,
                        html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                        ui: 'plain',
                        handler: function () {
                            //var CardType = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCardType').value;
                            //if (CardType == "Auto-Default") {
                            //    Swal.fire({
                            //        icon: 'error',
                            //        title: 'Defautl Card',
                            //        text: 'Default Card cannot be deleted!',
                            //    })
                            //    return
                            //}


                            Swal.fire({
                                title: 'Are you sure To delete?',
                                text: "Delete process cannot be undo!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes'
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    FloatPanel_AdvertisementSetting_Delete();
                                }
                            });




                        }
                    },
            {
                xtype: 'button',
                id: 'txtFloatPanel_AdvertisementSetting_DeleteAdvertisement',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Delete</font>',
                ui: 'plain',
                handler: function () {



                    Swal.fire({
                        title: 'Are you sure To delete?',
                        text: "Delete process cannot be undo!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            FloatPanel_AdvertisementSetting_Delete();
                        }
                    });







                    //Swal.fire({
                    //    title: 'Are you sure To delete?',
                    //    text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                    //    icon: 'warning',
                    //    showCancelButton: true,
                    //    confirmButtonColor: '#3085d6',
                    //    cancelButtonColor: '#d33',
                    //    confirmButtonText: 'Yes'
                    //}).then(function (result) {
                    //    if (result.isConfirmed) {
                    //        DeleteEditCardMaster();
                    //    }
                    //});
                }
            },

                 {
                     xtype: 'button',
                     id: 'btnFloatPanel_AdvertisementSetting_SubmitAdvertisement',
                     //  badgeText: '1',
                     margin: '0 -18 -8 0',
                     //height: 35,
                     //width: 35,
                     html: '<img src="resources/icons/BlastingMsgPurple.png" width="25" height="25" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                         FloatPanel_AdvertisementSetting_Save("Active");
                     }
                 },
            {
                xtype: 'button',
                id: 'txtFloatPanel_AdvertisementSetting_SubmitAdvertisement',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Submit</font>',
                ui: 'plain',
                handler: function () {
                  FloatPanel_AdvertisementSetting_Save("Active");
                }
            },
                        ]
                    },

                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     height:60,
                     // width: 40,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_AdvertisementSettingHeader',
                     style:GetHeaderStyle(),
                     //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                    id: 'htmlFloatPanel_AdvertisementSetting_TitleHeaderTxt',
                                    html: '<font size=4 color=black><b>Advertisement Setting</b></font>'
                                },
                                       
                                           {
                                               xtype: 'spacer',

                                           },
                                          


                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AdvertisementSettingBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
  
                                                    _FloatPanel_AdvertisementSetting.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                        //easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250
  
                                                    }));
                                                    isFloatPanel_AdvertisementSettingOpen = 'N';
                                                }
                                            },
                                           
                                           {
                                               xtype: 'spacer',
                                               width: 20,
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
                              margin: '0 0 0 0',

                              html: '<font size=2 color=black>Advertisement Title</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Title"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },



                          {
                              margin: '3 0 0 0',
                              hidden: true,
                              html: '<font size=2 color=black>Advertisement Desc</font>',

                          },
                          {

                              margin: '-2 0 0 0',
                              hidden: true,
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Desc"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },
                           {
                               margin: '3 0 0 0',
                              hidden:true,
                               html: '<font size=2 color=black>Advertisement Code</font>',

                           },
                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              hidden: true,
                              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Code"  readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },



         






           {
               xtype: 'container',
               width: '100%',
               hidden:true,
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

                                        html: '<font size=2 color=black>*Advertisement Type</font>',

                                    },



                                    ]
                                },




          {
              id: 'htmlFloatPanel_AdvertisementSettingType',
              margin: '-2 0 0 0',
              width: '100%',
              height: 20,
              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Type" value="NA" readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
          },


                            ]

                        },


                         //{
                         //    xtype:'container'

                         //},
                           {
                               xtype: 'button',
                               id: 'btnFloatPanel_AdvertisementSettingType',
                               //  badgeText: '1',
                               margin: '0 0 -10 0',
                               height: 35,
                               width: 35,
                               html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
                                   FloatPanel_AdvertisementTypeShow();
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
                 type: 'hbox',
                 pack: 'center',
                 align: 'center'

             },
             items: [
                    {
                        margin: '5 0 0 0',

                        html: '<font size=2 color=black>Advertisement Date</font>',

                    },
                    {
                        xtype: 'spacer',
                       // width:5
                    },
                     {
                         xtype: 'button',
                        hidden: true,
                         id: 'btnFloatPanel_AdvertisementSetting_Calender',
                         //  badgeText: '1',
                         margin: '0 0 0 0',
                         //height: 30,
                         //width: 35,
                         text: '<button class="buttonAdvertisementCalendar">Advertisement Calendar</button>',
                         //html: '<img src="resources/icons/saveWhiteTwo.png" width="20" height="20" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {
                             FloatPanel_AdvertisementCalendarShow();
                         }
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
                   pack: 'center',
                   align: 'center'

               },
               items: [
                      {
                          margin: '-2 0 0 0',
                          width: '40%',
                          height: 20,
                         // html: '<font size=2 color=black>Start:</font><input type="text" id="input-FloatPanel_AdvertisementSetting_StartDate"  readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          html: '<font size=2 color=black>Start:</font><input type="date" id="input-FloatPanel_AdvertisementSetting_StartDate" style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;" onblur="handlerAdvertisementStartDate(event);">',
                         

                      },
                      {
                          xtype: 'spacer'
                      },
                       {
                           margin: '-2 0 0 0',
                           width: '40%',
                           height: 20,
                          // html: '<font size=2 color=black>End:</font><input type="text" id="input-FloatPanel_AdvertisementSetting_EndDate"  readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                           html: '<font size=2 color=black>End:</font><input type="date" id="input-FloatPanel_AdvertisementSetting_EndDate" style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;"  onblur="handlerAdvertisementEndDate(event);">',
                         
                           // html: ' <input type="date" id="AdvertisementSettingStartDate">',

                       },
               ]
           },












           {
               margin: '25 0 0 0',

               html: '<font size=2 color=black>Advertisement Period (Days)</font>',

           },
          {
              margin: '-2 0 0 0',
              width: '40%',
              height: 20,
              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Period"  readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'

              // html: ' <input type="date" id="AdvertisementSettingStartDate">',

          },
            {
                margin: '5 0 0 0',

                html: '<font size=2 color=black>Advertisement Notes</font>',

            },
          {
              margin: '-2 0 0 0',
              width: '90%',
              height: 20,
              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Note"   style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'

              // html: ' <input type="date" id="AdvertisementSettingStartDate">',

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
     margin: '50 0 0 0',

     html: '<font size=3 color=black>Advertisement Media</font>',

 },
      {
          xtype: 'container',
          id: 'containerFloatPanel_AdvertisementSetting_Images',
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
                 
                  margin: '5 0 0 0',
                  html: '<font size=2 color=black>Images</font>',

              },
              {
                  xtype: 'spacer'
              },
          {
              xtype: 'button',
              id: 'btnFloatPanel_AdvertisementSetting_AdvertisementImages',
              //  badgeText: '1',
              // hidden:true,
              margin: '0 -5 -12 0',
              height: 45,
              width: 35,
              html: '<img src="resources/icons/ChangeImagePurple.png" width="25" height="25" alt="Company Name">',
              ui: 'plain',
              handler: function () {
                globalAdvertisementImageRowID = 0;
                FloatPanel_AddEdit_AdvertisementImagesShow_Add();
                //   if (FloatPanel_AdvertisementType_Validate()) {
                //       globalAdvertisementImageRowID = 0;
                //       FloatPanel_AddEdit_AdvertisementImagesShow_Add();
                //   }
              }
          },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AdvertisementSetting_AdvertisementImages',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 45,
    width: 100,
    html: '<font size=2 color=black>Upload Image</font>',
    ui: 'plain',
    handler: function () {
        globalAdvertisementImageRowID = 0;
        FloatPanel_AddEdit_AdvertisementImagesShow_Add();
        // if (FloatPanel_AdvertisementType_Validate()) {
           
        // }
       
       
    }
},
          ]
      },






     

        {
            xtype: 'list',
            //flex:1,
            height: 250,
            store: 'AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore',
            id: 'FloatPanel_AdvertisementSetting_AdvertisementImagesList',
            mode: 'SINGLE',
            //  grouped: true,
            emptyText: 'Upload your advertisement image/picture.<br>limit 5 images',
            deferEmptyText: false,
            disableSelection: true,
            itemTpl: '<div style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Image Caption:<u><b>{AdvertisementImgNote}</b></u></font></div>' +

                                    '{ModifyAdvertisementImg}' +

                                    // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
                             '</div>',
            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {

                    var AdvertisementImgName = records.get('AdvertisementImgName');
                    var AdvertisementImg = records.get('AdvertisementImg');
                    var ID = records.get('ID');
                    var AdvertisementImgNote = records.get('AdvertisementImgNote');
                    FloatPanel_AddEdit_AdvertisementImagesShow_Edit(AdvertisementImgName, AdvertisementImg,ID, AdvertisementImgNote);


                },
                deselect: function (list, records) {

                }
            },

        },

            //////////////////////////////////-Branch Participate
        {
            xtype: 'container',
            id: 'containerFloatPanel_AdvertisementSetting_HotMerchantVideo',
            width: '100%',
            hidden:true,
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
                    margin: '15 0 0 0',

                    html: '<font size=2 color=black>Hot Merchant Video</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_AdvertisementSetting_AdvertisementVideo',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -5 -12 0',
                height: 40,
                width: 35,
                html: '<img src="resources/icons/videoWhiteTwo.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    if (FloatPanel_AdvertisementType_Validate()) {
                        FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow();
                    }
                   
                }
            },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AdvertisementSetting_AdvertisementVideo',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=black>Video Link URL</font>',
    ui: 'plain',
    handler: function () {
        if (FloatPanel_AdvertisementType_Validate()) {
            FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow();
        }

    }
},
     {
         xtype: 'spacer',
         width: 10,
     }, ]
        },








        {
            xtype: 'list',
            margin: '2 0 0 0',
            hidden: true,
            //flex:1,
            height: 100,
            store: _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore,
            id: 'FloatPanel_AdvertisementSetting_AdvertisementVideoList',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            emptyText: '1 Video Only',
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
            itemTpl: '<div class="myContent" style="background-color:white;width:104%">' +
                                '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="FloatPanel_AdvertisementSetting_openVideoSourceURL(' + "'" + '{AyohaHotMerchant_SourceURL}' + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{ModifiedAyohaHotMerchant_Option}" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:blue"><u>View Video</u></font><br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">Source URL:{AyohaHotMerchant_Option}</font></td></tr></table>'
                                 
                                   +'</div>'
            +'</br>'
            + '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="FloatPanel_AdvertisementSetting_DeleteHotMerchantVideo({ID})" class="buttonsHtmlBgDeleteNotificationListTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 20px;" /></button></div>',
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
            id: 'containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt',
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
                    margin: '15 0 0 0',
                    html: '<font size=2 color=black>Video</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_AdvertisementSetting_AdvertisementVideoExt',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -5 -12 0',
                height: 40,
                width: 35,
                html: '<img src="resources/icons/videoWhiteTwo.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    if (FloatPanel_AdvertisementType_Validate()) {
                        FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow();
                    }
                   
                }
            },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AdvertisementSetting_AdvertisementAudio',
    //  badgeText: '1',
    margin: '0 0 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=black>Video Link URL</font>',
    ui: 'plain',
    handler: function () {
       
        if (FloatPanel_AdvertisementType_Validate()) {
            FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow();
        }
    }
},
            ]
        },




           {
               xtype: 'list',
               margin: '2 0 0 0',
               height: 100,
               store: 'StampCardLoadByStampCampaignCodeEnterpriseAccNoStorex',
               id: 'listFloatPanel_AdvertisementSetting_AdvertisementVideoExt',
               mode: 'SINGLE',
               //  grouped: true,
               disableSelection: true,
               emptyText: '1 Video Only',
               deferEmptyText: false,
               itemTpl: '<div style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Content Status:<u><b>{ShowHide}</b></u></font></div>' +

                        '<div style="margin:-58px 0px 0px 0px">{StampContentModified}</div>' +

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

           
           ////////////

            {
                xtype: 'container',
                id: 'containerFloatPanel_AdvertisementSetting_AdvertisementLinked',
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
                        margin: '50 0 0 0',

                        html: '<font size=3 color=black>Advertisement Linked</font>',

                    },
                    {
                        xtype: 'spacer'
                    },
                {
                    xtype: 'button',
                    id: 'btnFloatPanel_AdvertisementSetting_AdvertisementLinked',
                    //  badgeText: '1',
                    // hidden:true,
                    margin: '0 -5 -42 0',
                    height: 30,
                    width: 35,
                    html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                        FloatPanel_AdvertisementLinkModuleShow();
                        // if (FloatPanel_AdvertisementType_Validate()) {
                           
                        // }
                    }
                },
    {
        xtype: 'button',
        // hidden: true,
        id: 'txtFloatPanel_AdvertisementSetting_AdvertisementLinked',
        //  badgeText: '1',
        margin: '0 -7 -35 0',
        height: 30,
        width: 70,
        html: '<font size=2 color=black>Module</font>',
        ui: 'plain',
        handler: function () {

            FloatPanel_AdvertisementLinkModuleShow();
            // if (FloatPanel_AdvertisementType_Validate()) {
            //     FloatPanel_AdvertisementLinkModuleShow();
            // }

        }
    },
                ]
            },




           {
               xtype: 'list',
               //flex:1,
               height: 400,
              // margin: '20 0 0 0',
               store: 'AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore',
               id: 'FloatPanel_AdvertisementSetting_AdvertisementLinkedList',
               mode: 'SINGLE',
               emptyText: 'Linked your advertisement in this<br>application module',
               deferEmptyText: false,
               //  grouped: true,
               disableSelection: true,
               itemTpl: '<div class="myContent">' +
                               //'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{ModuleName}<br><font size=1>{ModuleDesc}</font></div><br><div style="width:100%;text-align:right;margin:-45px 0px 0px 20px;"><button OnClick="buttonsHtmlDeleteAdvertisementLinkModule({ID},' + "'" + '{ModuleName}' + "'" + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div>' +
                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{ModuleName}<br><font size=1>{ModuleDesc}</font></div><br><div style="width:100%;text-align:right;margin:-45px 0px 0px 20px;"><button OnClick="buttonsHtmlDeleteAdvertisementLinkModule({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div>' +
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
            xtype: 'container',
            width: '100%',
            margin: '30 0 0 0',
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
                                     margin: '5 0 0 0',

                                     html: '<font size=2 color=black>Advertisement Fees(RM)</font>',

                                 },



                                 ]
                             },


{
 margin: '-2 0 0 0',
 width: '80%',
 // height: 20,
 html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Fees" placeHolder="RM00:00"  readOnly style="border-color:grey;color:black;width:100%;text-align: left;font-size:38px;">'

 // html: ' <input type="date" id="AdvertisementSettingStartDate">',

},


                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AdvertisementSetting_fees',
                            //  badgeText: '1',
                            margin: '0 0 -10 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                swalFireGeneralMsg('All Advertisement is FOC until further Notice.');
                            }
                        },

            ]

        },





        {
            xtype: 'container',
            width: '100%',
            margin: '10 0 0 0',
            style: ' background-color:transparent',
            id:'Container_FloatPanel_AdvertisementSetting_Status',
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
                                     margin: '5 0 0 0',

                                     html: '<font size=2 color=black>Status</font>',

                                 },



                                 ]
                             },


{
 margin: '-2 0 0 0',
 width: '90%',
 // height: 20,
 html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Status"   readOnly style="border-color:grey;color:black;width:100%;text-align: left;font-size:38px;">'

 // html: ' <input type="date" id="AdvertisementSettingStartDate">',

},


                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                      {
                          xtype: 'button',
                          id: 'btnFloatPanel_AdvertisementSetting_StatusLog',
                          //  badgeText: '1',
                          // hidden:true,
                          margin: '0 0 -10 0',
                          height: 35,
                          width: 35,
                          html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                          ui: 'plain',
                          handler: function () {
                              FloatPanel_AdvertisementApprovalStatusLogShow();

                          }
                      },
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AdvertisementSetting_Status',
                            hidden:true,
                            //  badgeText: '1',
                            margin: '0 0 -10 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                FloatPanel_AdvertisementApprovalStatusShow();
                            }
                        },
                         

            ]

        },


        {
            margin: '20 0 0 0',
           id:'HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus',
            html: '<font size=2 color=black>Remarks Status</font>',

        },
       {
           margin: '-2 0 0 0',
           width: '90%',
           height: 20,
           id: 'HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus',
           html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_ModifiedRemarks"  readOnly  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'

           // html: ' <input type="date" id="AdvertisementSettingStartDate">',

       },
          

           









        









         {
             xtype: 'container',
             height: 300,
             width: '100%',
             style: ' background-color:white',
             margin: '0 0 0 0',
             layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center'
             },

         },


          

        


























                        ]
                    },


                ]

            },






        });

    return _FloatPanel_AdvertisementSetting;
}

function FloatPanel_AdvertisementSettingAddNewShow() {
    Ext.Viewport.remove(_FloatPanel_AdvertisementSetting);
    this.overlay = Ext.Viewport.add(FloatPanel_AdvertisementSetting());
    this.overlay.show();
    is_FloatPanel_AdvertisementSettingHide = 'Y';
    Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(false);
    Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(false);

    Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
    Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
    document.getElementById('input-FloatPanel_AdvertisementSetting_Status').value = 'Submitted';
    Ext.getStore('AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore').removeAll();
    Ext.getStore('AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore').removeAll();



   
}





function FloatPanel_AdvertisementSettingEditShowing(ID) {
    Ext.Viewport.remove(_FloatPanel_AdvertisementSetting);
    this.overlay = Ext.Viewport.add(FloatPanel_AdvertisementSetting());
    this.overlay.show();
    is_FloatPanel_AdvertisementSettingHide = 'Y';
   // alert(ID);

    globalFloatPanel_AdvertisementSetting_ID = ID;
    var AdvertisementTitle = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingType = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    

    var AdvertisementSettingStartDateOnly = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingEndDateOnly = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);

    var AdvertisementSettingPeriod = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingNote = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingFees = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingStatus = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingModifiedRemarks = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingCode = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementCode = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
   

    document.getElementById('input-FloatPanel_AdvertisementSetting_Title').value = AdvertisementTitle.get('AdvertisementTitle');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value= AdvertisementSettingType.get('AdvertisementType');
    document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value = AdvertisementSettingStartDateOnly.get('AdvertisementStartDateOnly');
    document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value = AdvertisementSettingEndDateOnly.get('AdvertisementEndDateOnly');
  
    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = AdvertisementSettingPeriod.get('AdvertisementPeriod');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Note').value = AdvertisementSettingNote.get('AdvertisementNote');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Fees').value = AdvertisementSettingFees.get('AdvertisementFees');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Status').value = AdvertisementSettingStatus.get('AdvertisementStatus');
    document.getElementById('input-FloatPanel_AdvertisementSetting_ModifiedRemarks').value = AdvertisementSettingModifiedRemarks.get('ModifiedRemarks');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value = AdvertisementSettingCode.get('AdvertisementCode');
    globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AyohaHotMerchant_Code = AdvertisementCode.get('AdvertisementCode');


    localStorage.setItem("OriginalAdevertisementStartDate", AdvertisementSettingStartDateOnly.get('AdvertisementStartDateOnly'));
    localStorage.setItem("OriginalAdevertisementEndDate", AdvertisementSettingEndDateOnly.get('AdvertisementEndDateOnly'));
    localStorage.setItem("OriginalAdvertisementPeriod", AdvertisementSettingPeriod.get('AdvertisementPeriod'));
    
    if (AdvertisementSettingStatus.get('AdvertisementStatus') == "Submitted") {
        Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(true);
        Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(true);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(false);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(false);

        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHtml('<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">');
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHtml('<font size=2 color=grey>Save</font>');
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(false);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(false);
    }
    if (AdvertisementSettingStatus.get('AdvertisementStatus') == "Approved") {
        Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
    }
    if (AdvertisementSettingStatus.get('AdvertisementStatus') == "Rejected") {
        Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);

        Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(false);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(false);
    }
    if (AdvertisementSettingStatus.get('AdvertisementStatus') == "Published") {
        Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
    }
   
    //else
    //{
    //    Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
    //    Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
    //}

    //Ext.getCmp('btnFloatPanel_AdvertisementSetting_Status').setHidden(false);

    Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);
    Ext.getCmp('listFloatPanel_AdvertisementSetting_AdvertisementVideoExt').setHidden(true);
    var text = AdvertisementSettingType.get('AdvertisementType');
    var result = text.includes("Hot Merchant Slide");
    
    if (result) {
        FloatPanel_AdvertisementSetting_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore();
        
        Ext.getCmp('containerFloatPanel_AdvertisementSetting_HotMerchantVideo').setHidden(false);
        Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementVideoList').setHidden(false);
        

        Ext.getCmp('containerFloatPanel_AdvertisementSetting_Images').setHidden(true);
        Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementImagesList').setHidden(true);

       
        Ext.getCmp('containerFloatPanel_AdvertisementSetting_AdvertisementLinked').setHidden(true);
        Ext.getCmp('FloatPanel_AdvertisementSetting_AdvertisementLinkedList').setHidden(true);

    }









    FloatPanel_AddEdit_AdvertisementImages_AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore();
    FloatPanel_AdvertisementLinkModule_AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore();

    
    
   
}








var is_FloatPanel_AdvertisementSettingHide = 'N';

function FloatPanel_AdvertisementSettingHide() {
    if (is_FloatPanel_AdvertisementSettingHide == 'Y') {
        _FloatPanel_AdvertisementSetting.hide();
        is_FloatPanel_AdvertisementSettingHide = 'N';
    }

}







var globalFloatPanel_AdvertisementSetting_ID;
function FloatPanel_AdvertisementSetting_Save(RowStatus) {

    var AdvertisementSetting_Title = document.getElementById('input-FloatPanel_AdvertisementSetting_Title').value;
    var AdvertisementSetting_Type = document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value;
    var AdvertisementSettingStartDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value);
    var AdvertisementSettingEndDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value);



    if (AdvertisementSetting_Title.length < 2) {
        swalFireFail("Advertisement Title Not Valid!!")
        return
    }

    if (AdvertisementSetting_Type.length == 0) {
        swalFireFail("Invalid Advertisement Type!!");
        return;
    }

    if (AdvertisementSettingStartDate == "Invalid Date") {
        swalFireFail("Invalid Start Date!!");
        return;
    }


    if (AdvertisementSettingEndDate == "Invalid Date") {
        swalFireFail("Invalid End Date!!");
        return;
    }


    


    

   
   
    var diffTime = Math.abs(AdvertisementSettingEndDate - AdvertisementSettingStartDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    console.log(diffDays + " days");

    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;
    

   
    var CurrentDate = new Date();
  

    // if (AdvertisementSettingStartDate < CurrentDate) {
    //     swalFireFail("Save Failed!<br>*Start date must be greater than today!!");
    //     resetAdvertisementDate();
    //     return;
    // } 

    // if (AdvertisementSettingEndDate < CurrentDate) {
    //     swalFireFail("Save Failed!<br>*End date Has passed!!");
    //     resetAdvertisementDate();
    //     return;
    // }

    if (diffDays =="0") {
        swalFireFail("Save Failed!<br>*0 Day Not valid!!");
        resetAdvertisementDate();
        return;
    }
    if (document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value == 0 ) {
        swalFireFail("Save Failed!<br>*0 Day Not valid!!");
        resetAdvertisementDate();
        return;
    }
   

    //if (dayCampaignStart == dayCampaignEnd) {
    //    swalFireFail("Save Failed!<br>*Campaign date start and date end is same!!");
    //    return;

    //}

    //  var year = AdvertisementSettingStartDate.getFullYear();














  


    var text = AdvertisementSetting_Type;
    var result = text.includes("Hot Merchant Slide");
    var StrAdvertisementMedia = "Images";
    var StrAdvertisementCode = document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value;
    if (result) {
        StrAdvertisementMedia = "Video";
        StrAdvertisementCode = globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AyohaHotMerchant_Code;
    }
       

   
        var obj = {
            "ID": globalFloatPanel_AdvertisementSetting_ID,
            "AdvertisementCode": StrAdvertisementCode,
            "AdvertisementTitle": document.getElementById('input-FloatPanel_AdvertisementSetting_Title').value,
            "AdvertisementDesc": document.getElementById('input-FloatPanel_AdvertisementSetting_Desc').value,
            "AdvertisementStartDate": document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value,
            "AdvertisementEndDate": document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value,
            "AdvertisementType": document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value,
            "AdvertisementStatus":document.getElementById('input-FloatPanel_AdvertisementSetting_Status').value,
            "AdvertisementNote": document.getElementById('input-FloatPanel_AdvertisementSetting_Note').value,
            "EnterpriseAccNo": GetEnterpriseAccNo(),
            "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
            "CreatedBy": GetCurrentAccountNo(),
            "ModifiedRemarks": document.getElementById('input-FloatPanel_AdvertisementSetting_ModifiedRemarks').value,
            "RowStatus": RowStatus,
            "AdvertisementPeriod": document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value,
            "AdvertisementFees": document.getElementById('input-FloatPanel_AdvertisementSetting_Fees').value,
            "AdvertisementMedia": StrAdvertisementMedia,
        };

        console.log(obj);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Advertisement/AdvertisementInsertUpdate',

            dataType: "json",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireSuccess("Save Succesfully!");

                    FloatPanel_AdvertisementSettingHide();
                    Load_FloatPanel_Advertisement_AdvertisementloadByEnterpriseHQAccNoStore();

                }
                else {

                 //   swalFireFail("Save Failed!!!" + data.results + "<br>" + data.message);
                    swalFireFail("Save Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                swalFireFail("Save Failed!!");
            }

        });
      


     
    //}

}










function FloatPanel_AdvertisementSetting_Delete() {
   


    var obj = {
        "ID": globalFloatPanel_AdvertisementSetting_ID,
        "AdvertisementCode": document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        "CreatedBy": GetCurrentAccountNo(),
        "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "ModifiedRemarks": document.getElementById('input-FloatPanel_AdvertisementSetting_ModifiedRemarks').value,       
    };

    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Advertisement/AdvertisementDelete',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Delete Succesfully!");

                FloatPanel_AdvertisementSettingHide();
                Load_FloatPanel_Advertisement_AdvertisementloadByEnterpriseHQAccNoStore();

            }
            else {

                //   swalFireFail("Save Failed!!!" + data.results + "<br>" + data.message);
                swalFireFail("Delete Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });




    //}

}


















function handlerAdvertisementStartDate(e) {
   
    var AdvertisementSettingStartDate = new Date(e.target.value);
    var AdvertisementSettingEndDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value);
    var diffTime = Math.abs(AdvertisementSettingEndDate - AdvertisementSettingStartDate);
  

    var CurrentDate = new Date();
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (AdvertisementSettingStartDate > AdvertisementSettingEndDate) {
        swalFireFail("Start date cannot be greater than end date!!");
        document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value = GetDateToday();
        resetAdvertisementDate();
        return;
    }





    if (AdvertisementSettingStartDate < CurrentDate) {
        swalFireFail("Start date must be greater than today!!");
        document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value = GetDateToday();
        resetAdvertisementDate();
        return;
    } else {
     

        if (diffDays == 0) {
            swalFireFail("0 Day Not valid!!");
            document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;
            resetAdvertisementDate();
            return;
        }
        if (diffDays > 30) {
            swalFireFail("Cannot exceed 30 Days!!");
            document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = 0;
            resetAdvertisementDate();
            return;
        }
    }

    
 document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;
    

}

function handlerAdvertisementEndDate(e) {
   

    var AdvertisementSettingStartDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value);
    var AdvertisementSettingEndDate = new Date(e.target.value);
    var diffTime = Math.abs(AdvertisementSettingEndDate - AdvertisementSettingStartDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;


    var CurrentDate = new Date();


    if (AdvertisementSettingEndDate < AdvertisementSettingStartDate ) {
        swalFireFail("End date cannot be less than start date!!");
        document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value = GetDateToday();
        resetAdvertisementDate();
        return;
    }

    if (AdvertisementSettingEndDate < CurrentDate) {
        swalFireFail("End date Has passed!!");
        document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value = GetDateToday();
        resetAdvertisementDate();
        return;
    } else {
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays == 0) {
            swalFireFail("0 Day Not valid!!");
            document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;
            resetAdvertisementDate();
            return;
        }
        

        if (diffDays > 30) {
            swalFireFail("Cannot exceed 30 Days!!");
            document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = 0;
            resetAdvertisementDate();
            return;
        }
    }

   

}

function resetAdvertisementDate() {
    document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value = GetOriginalAdevertisementStartDate();
    document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value = GetOriginalAdevertisementEndDate();
    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = GetOriginalAdvertisementPeriod();
    console.log(GetOriginalAdvertisementPeriod());
}



function FloatPanel_AdvertisementType_Validate() {
    var AdvertisementSetting_Title = document.getElementById('input-FloatPanel_AdvertisementSetting_Title').value;
    var AdvertisementSetting_Type = document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value;
    var AdvertisementSettingStartDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value);
    var AdvertisementSettingEndDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value);

    var diffTime = Math.abs(AdvertisementSettingEndDate - AdvertisementSettingStartDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    console.log(diffDays + " days");

    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;



    var CurrentDate = new Date();

    if (AdvertisementSetting_Title.length < 2) {
        swalFireFail("Advertisement Title Not Valid!!")
        return false;
    }
    else
    if (AdvertisementSetting_Type.length == 0) {
        swalFireFail("Invalid Advertisement Type!!");
        return false;
    }
    else
    if (AdvertisementSettingStartDate == "Invalid Date") {
        swalFireFail("Invalid Start Date!!");
        return false;
    }

    else
    if (AdvertisementSettingEndDate == "Invalid Date") {
        swalFireFail("Invalid End Date!!");
        return false;
    } else

    if (AdvertisementSettingStartDate < CurrentDate) {
        swalFireFail("Save Failed!<br>*Start date must be greater than today!!");
        resetAdvertisementDate();
        return false;
    }
    else
    if (AdvertisementSettingEndDate < CurrentDate) {
        swalFireFail("Save Failed!<br>*End date Has passed!!");
        resetAdvertisementDate();
        return false;
    } else

    if (diffDays == "0") {
        swalFireFail("Save Failed!<br>*0 Day Not valid!!");
        resetAdvertisementDate();
        return false;
    } else
    if (document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value == 0) {
        swalFireFail("Save Failed!<br>*0 Day Not valid!!");
        resetAdvertisementDate();
        return false;
    } else {
        return true;
    }
}




function FloatPanel_AdvertisementSetting_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore() {

    _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore.getProxy().setExtraParam('AyohaHotMerchant_Code', globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AyohaHotMerchant_Code);
    _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantCode');
    _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        //});
        //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
        //var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');

        // _DataStore_AyohaUserDashBoardNearestRedeemItemListStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');

        var count = _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore.getCount();
       

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(1000);
}



function FloatPanel_AdvertisementSetting_openVideoSourceURL(URL) {
    setTimeout(function () { window.open(URL, '_system'); return false; }, 25);
}


function FloatPanel_AdvertisementSetting_DeleteHotMerchantVideo(ID) {

    
   
    Swal.fire({
        title: 'Are you sure want to delete?',
        //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var obj = {
                "ID": ID,
            };

            console.log(obj);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantDeleteByID',

                dataType: "json",
                data: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {

                        FloatPanel_Advertisement_MerchantHotVideoLinkUploadHide();
                        FloatPanel_AdvertisementSetting_AyohaHotMerchantLoadByAyohaHotMerchantCodeStore();
                    }
                    else {

                        //   swalFireFail("Save Failed!!!" + data.results + "<br>" + data.message);
                        swalFireFail("Delete Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
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