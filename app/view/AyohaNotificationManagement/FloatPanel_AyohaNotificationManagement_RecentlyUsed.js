Ext.define('ianMizi.view.AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_RecentlyUsed', {

});


var _FloatPanel_AyohaNotificationManagement_RecentlyUsed;


var isFloatPanel_AyohaNotificationManagement_RecentlyUsedOpen = 'N';



var _FloatPanel_AyohaNotificationManagement_RecentlyUsed_isFirstLoad = "N";







function FloatPanel_AyohaNotificationManagement_RecentlyUsed() {

    _FloatPanel_AyohaNotificationManagement_RecentlyUsed =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaNotificationManagement_RecentlyUsedID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 550,

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
             duration: 150
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



         items: [




             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 style: "background-color: transparent;",
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                                   height: 60,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaNotificationManagement_RecentlyUsedHeader',
                                   style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
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
                                            id: 'htmlFloatPanel_AyohaNotificationManagement_RecentlyUsedTitleTxt',
                                            html: '<font size=4 color=black><b>Recently Used</b></font>'
                                        },


                                                        

                                                         {
                                                             xtype: 'spacer',

                                                         },
                                                         {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaNotificationManagement_RecentlyUsedBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaNotificationManagement_RecentlyUsed.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                   // direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaNotificationManagement_RecentlyUsedOpen = 'N';
                                                                _FloatPanel_AyohaNotificationManagement_RecentlyUsed_isFirstLoad = "N";
                                                            }
                                                        },

                                                        {
                                                            xtype: 'spacer',
                                                            width:20
            
                                                        },
                                                         {
                                                             xtype: 'button',
                                                             height: 30,
                                                             width: 35,
                                                             hidden:true,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_AyohaNotificationManagement_RecentlyUsed_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recentlyusedWhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaNotificationManagement_RecentlyUsed.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaNotificationManagement_RecentlyUsedOpen = 'N';
                                                                 _FloatPanel_AyohaNotificationManagement_RecentlyUsed_isFirstLoad = "N";

                                                             }
                                                         },










                                          ]

                               },



                               ///////////







                               {
                                   xtype: 'container',
                                   // docked: 'top',
                                   // hidden:true,
                                   //  margin: '0 0 0 0',
                                   //  docked: 'bottom',
                                   style: 'background-color: transparent;',
                                   id: 'containerFloatPanel_AyohaNotificationManagement_RecentlyUsed',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                   zIndex: 90,
                                   //height:200,
                                   // autoHeight:true,
                                   // height: '100%',
                                   // flex:1,
                                   //  maxHeight:'100%',
                                   //height:'63%',
                                   width: '100%',
                                   margin: '20 0 0 0',

                                   layout: {

                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'
                                   },


                                   items: [













                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: 30,
                                                  hidden:true,
                                                  //  style: 'background-color:black',
                                                  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
                                                      align: 'center'

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

                                                              margin: '0 0 0 18',
                                                              id: 'htmlFloatPanel_AyohaNotificationManagement_RecentlyUsed_Receipients',
                                                              html: '<font size="2" color="black"><b>Recently Used Message</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          //{
                                                          //    xtype: 'spacer'
                                                          //},
                                                          //{

                                                          //    margin: '0 10 0 0',
                                                          //    id: 'htmlFloatPanel_AyohaNotificationManagement_RecentlyUsed_IsRead',
                                                          //    html: '<font size="2" color="black"><b>IsRead?</b></font>',
                                                          //    //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          //},
                                                          //{

                                                          //    width: '50%',
                                                          //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                          //},
                                                          //     //{
                                                               //    margin: '-8 0 0 0',

                                                               //    html: '<font size=2 color=black>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                               //},
                                                               // {
                                                               //     margin: '-7 0 0 0',

                                                               //     html: '<font size=2 color=black>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                               // },


                                                  ]
                                              },




                                        {
                                            xtype: 'list',
                                            flex: 1,
                                           // height: '100%',
                                            store: 'AyohaNotificationMasterRecentlyUsedStore',
                                            id: 'FloatPanel_AyohaNotificationManagement_RecentlyUsed_List',
                                            mode: 'SINGLE',
                                            //grouped: true,
                                            disableSelection: true,
                                            itemTpl: '<div class="myContent">' +


                                                                              '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                                              + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Notification Title</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{NotificationTitle}</div>'
                                                                              + '<br>'
                                                                              + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Notification Message</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{NotificationBody}</div>'
                                                                               + '<br>'
                                                                            //  + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Footer Image</div><br><div style="width:100%;height:80px;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;"><img src="{NotificationFooterImage}"  style="width:100%;height:80px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></div>'
                                                                              + '{ModifyNotificationImg}'


                                                                             // + '<br>'
                                                                              //+ '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Receipients</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{SendToAudiencesCount}</div>'
                                                                              + '<br>'
                                                                              + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedDate}</div>'
                                                                              // + '<br>'
                                                                              //+ '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Send By</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AccountName}</div>'

                                                                              // + '<br>'
                                                                              //+ '<div style="width:100%;text-align:right;margin:-105px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_RecipientListShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/userlistPurple.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Receipents List</div></div>'
                                                                              //+ '<br>'
                                                                              //+ '<div style="width:100%;text-align:right;margin:20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;"><button  OnClick="FloatPanel_AyohaNotificationManagement_ViewMessageShow({ID})" class="buttonAyohaNotificationMgmt" style="margin:-300px 30px 0px 0px;"><img src="resources/icons/NotificationPurple.png"  style="width:32px;height:32px;margin:0px 0px 0px 0px;zIndex:100px;" alt="Company Name"></button><br><div style="width:100%;text-align:right;margin:-16px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">View Message</div></div>'


                                                                              + '</div>' +

                                              '</div>',
                                            width: '100%',
                                            listeners: {
                                                itemsingletap: function (list, idx, target, records, evt) {

                                                    var NotificationTitle = records.get('NotificationTitle');
                                                    var NotificationBody = records.get('NotificationBody').replace(/<br>/g, "\n");
                                                    var NotificationFooterImage = records.get('NotificationFooterImage');
                                                    var NotifcationImage = records.get('NotifcationImage');
                                                    var NotificationType = records.get('NotificationType');
                                                    var CreatedDate = records.get('CreatedDate');
                                                  localStorage.setItem('PushNotificationSource', 'Recently');
                                                  document.getElementById('AyohaNotificationCreateMsgSUbject').value = NotificationTitle;




                                                  if (NotificationType == "Text") {
                                                      document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value = NotificationBody;
                                                      Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage').setHtml('<img src="' + NotificationFooterImage + '" width="100%" height="160" alt="Company Name">');
                                                      FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImageName = "";
                                                      FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage = NotificationFooterImage;
                                                      Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage').setHidden(false);
                                                      Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage').setHidden(true);
                                                      FloatPanel_AyohaNotificationManagement_RecentlyUsedHide();
                                                      countTextRecentLy();


                                                      globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType = "Text";
                                                      globalFloatPanel_AyohaNotificationManagement_CreateMessage_NotificationType = "Text";
                                                      Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeText').setHtml('<img src="resources/icons/text01.png" width="35" height="35" alt="Company Name">');
                                                      Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeImage').setHtml('<img src="resources/icons/ImageGrey03.png" width="35" height="35" alt="Company Name">');
                                                      Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeText').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none grey;font-size: 12px;font-weight:normal;color:grey;height:20px">Message Type:<b>TEXT</b></div>');
                                                      Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_TextRemaining').setHidden(false);
                                                      Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessageInner').setHidden(false);
                                                     // Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage').setHidden(false);
                                                      Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setHidden(true);
                                                    //  Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage').setHidden(true);
                                                  }
                                                 


                                                  if (NotificationType == "Image") {
                                                      globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType = "Image";
                                                      globalFloatPanel_AyohaNotificationManagement_CreateMessage_NotificationType = "Image";
                                                      Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeText').setHtml('<img src="resources/icons/TextIconGrey01.png" width="35" height="35" alt="Company Name">');
                                                      Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeImage').setHtml('<img src="resources/icons/imagepurple01.png" width="35" height="35" alt="Company Name">');
                                                      Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeText').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none grey;font-size: 12px;font-weight:normal;color:grey;height:20px">Message Type:<b>IMAGE</b></div>');
                                                      Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_TextRemaining').setHidden(true);
                                                      Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessageInner').setHidden(true);
                                                      Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage').setHidden(true);
                                                      Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setHidden(false);
                                                      Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage').setHidden(true);
                                                      FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image = NotifcationImage;                                               
                                                     // Ext.getCmp('ImgFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setHeight(globalFloatPanel_AyohaNotificationManagement_CreateMessage_Image_Modified - 3);
                                                      Ext.getCmp('ImgFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setSrc(NotifcationImage);
                                                      FloatPanel_AyohaNotificationManagement_RecentlyUsedHide();
                                                      
                                                  }

                                                  FloatPanel_AyohaNotificationManagement_CreateMessage_SetPreviewMessage();
                                                },
                                                deselect: function (list, records) {

                                                }
                                            },

                                        },




                                   ]
                               },




                               ////////////////////////////////////////////









                               //////////////////////////////////////////
                               {

                                   xtype: 'container',
                                   width: '100%',
                                  hidden:true,
                                   // width: 40,
                                   docked: 'bottom',
                                   height: 55,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaNotificationManagement_RecentlyUsed_MenuBottom',
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
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaNotificationManagement_RecentlyUsed_Search',
                                                            // hidden: true,
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 -10',
                                                            height: 40,
                                                            width: 40,
                                                            html: '<img src="resources/icons/searchPurpleTwo.png" width="30" height="30" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                // NotificationsPanelShow();

                                                                // LoyaltyCardRedeemListShow();


                                                                //  LoyaltyCardRedeemListShow();
                                                            }
                                                        },





                             {
                                 id: 'htmlFloatPanel_AyohaNotificationManagement_RecentlyUsed_ListTypeSearchTxt',
                                 margin: '0 0 0 0',
                                 width: '78%',
                                 height: 20,
                                 html: '<input type="text" id="input-FloatPanel_AyohaNotificationManagement_RecentlyUsed_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                             },

                          




                                                  ]
                                              },





                                                         //{
                                                         //    margin: '0 0 0 0',
                                                         //    html: '<font size=3 color=black><b>TARMIZI RAHIM</b></font>'
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
    return _FloatPanel_AyohaNotificationManagement_RecentlyUsed;



}




function FloatPanel_AyohaNotificationManagement_RecentlyUsedShow() {


  

    Ext.Viewport.remove(_FloatPanel_AyohaNotificationManagement_RecentlyUsed);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotificationManagement_RecentlyUsed());
    this.overlay.show();
    FloatPanel_AyohaNotificationManagement_RecentlyUsed_AyohaNotificationMasterRecentlyUsedStore();
    isFloatPanel_AyohaNotificationManagement_RecentlyUsedOpen = 'Y';
    _FloatPanel_AyohaNotificationManagement_RecentlyUsed_isFirstLoad = "Y";
    FloatPanel_AyohaNotificationManagement_RecentlyUsedAdjustHeight();
    document.getElementById("input-FloatPanel_AyohaNotificationManagement_RecentlyUsed_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaNotificationManagement_RecentlyUsed_ListTypeSearchTxtOnKeyUp);

}





function FloatPanel_AyohaNotificationManagement_RecentlyUsedHide() {
    _FloatPanel_AyohaNotificationManagement_RecentlyUsed.hide();

    isFloatPanel_AyohaNotificationManagement_RecentlyUsedOpen = 'N';
    _FloatPanel_AyohaNotificationManagement_RecentlyUsed_isFirstLoad = "N";
}




function FloatPanel_AyohaNotificationManagement_RecentlyUsedAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    //   var adjustedHeight = x - headerHeight;
   // var newHeight = x - 90;
    var newHeight = x-40;
    //var bodyMsgHeight01 = x + 17;
    //var bodyMsgHeight02 = bodyMsgHeight01 - x;



    //  var newHeight = adjustedHeight - 80;
    //alert(x)
    // alert(bodyMsgHeight02)


    //900
    //450


    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_RecentlyUsed').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_RecentlyUsedInner').setHeight(newHeight + 60);






}

var _Data_Store_AyohaNotificationMasterRecentlyUsedStore;
function FloatPanel_AyohaNotificationManagement_RecentlyUsed_AyohaNotificationMasterRecentlyUsedStore() {



    Ext.getStore('AyohaNotificationMasterRecentlyUsedStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo(),
        NotificationMedium:"PN" 
    });
    Ext.StoreMgr.get('AyohaNotificationMasterRecentlyUsedStore').load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaNotificationMasterRecentlyUsedStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo(),
            NotificationMedium: "PN"
        });

        _Data_Store_AyohaNotificationMasterRecentlyUsedStore = Ext.StoreMgr.get('AyohaNotificationMasterRecentlyUsedStore').load();
      
        Ext.Viewport.setMasked(false);




    });
    task.delay(800);

}


function FloatPanel_AyohaNotificationManagement_RecentlyUsed_ListTypeSearchTxtOnKeyUp() {


    var countRecipientList_List = 0;


    _Data_Store_AyohaNotificationMasterRecentlyUsedStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaNotificationManagement_RecentlyUsed_ListTypeSearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_AyohaNotificationMasterRecentlyUsedStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('NotificationBody'))) {
                console.log('ada0');

              //  countRecipientList_List = _Data_Store_AyohaNotificationMasterRecentlyUsedStore.getCount();
              //  Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_RecentlyUsed_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
       // countRecipientList_List = _Data_Store_AyohaNotificationMasterRecentlyUsedStore.getCount();
      //  Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_RecentlyUsed_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _Data_Store_AyohaNotificationMasterRecentlyUsedStore.clearFilter();
      //  Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_RecentlyUsed_count').setHtml('<font size="2" color="black"><b>(' + globalcountAyohaNotificationLoadByNotification + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}