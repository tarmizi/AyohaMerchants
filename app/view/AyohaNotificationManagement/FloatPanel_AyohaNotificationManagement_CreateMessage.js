

Ext.define('ianMizi.view.AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_CreateMessage', {

});


var _FloatPanel_AyohaNotificationManagement_CreateMessage;


var isFloatPanel_AyohaNotificationManagement_CreateMessageOpen = 'N';



var _FloatPanel_AyohaNotificationManagement_CreateMessage_isFirstLoad = "N";


var globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType;
var globalFloatPanel_AyohaNotificationManagement_CreateMessage_NotificationType;



function FloatPanel_AyohaNotificationManagement_CreateMessage() {

    _FloatPanel_AyohaNotificationManagement_CreateMessage =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaNotificationManagement_CreateMessageID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 500,

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
         style: 'background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



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

                                   id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessageHeader',
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
                                                id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessageTitleTxt',
                                                html: '<font size=4 color=black><b>Create New Push Notification</b></font>'
                                            },    
                                            {
                                                xtype: 'spacer',

                                            },
                                             
                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessageBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    _FloatPanel_AyohaNotificationManagement_CreateMessage.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                       // direction: 'left',
                                                       // easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    isFloatPanel_AyohaNotificationManagement_CreateMessageOpen = 'N';
                                                    _FloatPanel_AyohaNotificationManagement_CreateMessage_isFirstLoad = "N";
                                                }
                                            },

                                                       




                                                          {
                                                            xtype: 'spacer',
                                                            width:20
            
                                                        },


                                                         {
                                                             xtype: 'button',
                                                             hidden:true,
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/AddNotification01.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaNotificationManagement_CreateMessage.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaNotificationManagement_CreateMessageOpen = 'N';
                                                                 _FloatPanel_AyohaNotificationManagement_CreateMessage_isFirstLoad = "N";

                                                             }
                                                         },



                                                          //{
                                                          //    margin: '2 0 0 0',
                                                          //    id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessagePointTitle',
                                                          //    html: '<div style="width:130px;border-radius: 10px 0px 0px 10px;background-color: white;text-align:center;border: 1px solid grey;font-size: 11px;font-weight:bold;color:black;height:20px">???</div>',
                                                          //    //hidden: true,
                                                          //},



                                                          //    {
                                                          //        xtype: 'container',
                                                          //        margin: '1 0 0 -5',
                                                          //        //hidden: true,
                                                          //        //style: 'background-color: white;',
                                                          //        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                                                          //        height: 35,
                                                          //        width: 35,
                                                          //        // margin: '70 0 0 0',
                                                          //        id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessagePicture',
                                                          //        layout: {

                                                          //            type: 'hbox',
                                                          //            pack: 'right',
                                                          //            align: 'right'
                                                          //        },
                                                          //        items: [
                                                          //            {
                                                          //                xtype: 'button',
                                                          //                height: 40,
                                                          //                width: 40,
                                                          //                margin: '0 0 0 3',
                                                          //                id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_PointIcon',
                                                          //                //badgeText: "2",
                                                          //                html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/WhitePointStamp.png"  style="width: 30px; height: 30px; border:2px none grey; border-radius: 0%;  margin:-1px 0px 0px 2px"></div>',
                                                          //                ui: 'plain',
                                                          //                handler: function () {



                                                          //                    _FloatPanel_AyohaNotificationManagement_CreateMessage.hide(Ext.fx.Animation({
                                                          //                        type: 'slideOut',
                                                          //                        direction: 'right',
                                                          //                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                          //                        duration: 250

                                                          //                    }));
                                                          //                    isFloatPanel_AyohaNotificationManagement_CreateMessageOpen = 'N';
                                                          //                    _FloatPanel_AyohaNotificationManagement_CreateMessage_isFirstLoad = "N";

                                                          //                }
                                                          //            },



                                                          //        ]
                                                          //    },










                                          ]

                               },



                               ///////////




{
    xtype: 'container',
    width: '100%',
    style: 'background-color: white;',
    layout: {

        type: 'hbox',
        pack: 'start',
        align: 'center'
    },
    items:[
        {
            xtype: 'container',
            width: '60%',
            style: 'background-color: transparent;',
            layout: {
        
                type: 'hbox',
                pack: 'start',
                align: 'center'
            },
            items:[
                {
                    xtype: 'container',
                    // docked: 'top',
                    //hidden:true,
                    //  margin: '0 0 0 0',
                    //  docked: 'bottom',
                    style: 'background-color: white;',
                    id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage',
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
                                                id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_Header',
                                                style: ' background-color: transparent',
                                                hidden: true,
                                                // docked: 'top',
                                                height: 20,
                                                // height: '100%',
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'
        
                                                },
                                                items: [
                                                     {
                                                         margin: '0 0 0 0',
                                                         height: 20,
                                                         id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_Header_PublishDate',
                                                         html: '<div style="width:100%;background-color: transparent;text-align:right;border-bottom: 1px none grey;font-size: 12px;font-weight:normal;color:black;height:20px">Published On:28/4/2021 11:43:56 PM</div>',
                                                         //hidden: true,
                                                     },
                                                ]
        
                                            },
        
                        {
                            xtype: 'container',
                            id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_CompanyLogo',
                            style: ' background-color: transparent',
                            hidden: true,
                            height: 150,
                            // height: '100%',
                            width: '100%',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
        
                            },
                            items: [
                                 {
                                     margin: '10 0 0 0',
                                     height: 130,
                                     id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_CompanyLogo',
                                     html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
                                     //hidden: true,
                                 },
                            ]
        
                        },
                        {
                            margin: '0 0 0 0',
                            height: 20,
                            hidden: true,
                            id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_CompanyName',
                            html: '<div style="width:100%;background-color: transparent;text-align:right;border-bottom: 1px none grey;font-size: 16px;font-weight:bold;color:black;height:20px">The Community Coffea</div>',
                            //hidden: true,
                        },
                         {
                             xtype: 'container',
                             hidden: true,
                             margin: '8 0 0 0',
                             id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_LineSeparator',
                             style: ' background-color: grey',
                             height: 2,
                             // height: '100%',
                             width: '80%',
                             layout: {
                                 type: 'hbox',
                                 pack: 'start',
                                 align: 'center'
        
                             },
        
        
                         },
        
        
        
                         {
                             xtype: 'container',
                             // docked: 'top',
                             // hidden:true,
                             //  margin: '0 0 0 0',
                             //  docked: 'bottom',
                             style: 'background-color: transparent;',
                            // id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessageInner',
                             //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                             // zIndex: 90,
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
                                 pack: 'start',
                                 align: 'center'
                             },
                             items: [
                                 {
                                     xtype: 'container',
                                     width: '95%',
                                     margin: '10 0 0 0',
                                     height: 35,
                                     layout: {
                                         type: 'hbox',
                                         pack: 'center',
                                         align: 'right'
                                     },
                                     items: [
        
        
        
                          {
                             // margin: '-10 0 0 0',
                              height: 20,
                              hidden:true,
                              id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_TextRemainingx',
                              html: '<div style="width:100%;background-color: transparent;text-align:left;border-bottom: 1px none grey;font-size: 12px;font-weight:normal;color:black;height:20px;margin:-20px 0px 0px 0px;">Text Remaining 250</div>',
                              //hidden: true,
                          },
        
                                         {
                                             xtype:'spacer'
                                         },
                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_History',
                                               //  badgeText: '1',
                                               // hidden:true,
                                               margin: '0 0 0 0',
                                               height: 35,
                                               width: 135,
                                               html: '<font size=1px color=blue>Recently Used</font><img src="resources/icons/MessageHistory02.png" width="25" height="25" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                   FloatPanel_AyohaNotificationManagement_RecentlyUsedShow();
        
                                               }
                                           },
                                               {
                                                   xtype: 'button',
                                                   id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_Preview',
                                                   //  badgeText: '1',
                                                   hidden:true,
                                                   margin: '0 0 0 0',
                                                   height: 35,
                                                   width: 35,
                                                   html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                                                   ui: 'plain',
                                                   handler: function () {
                                                       //FloatPanel_AyohaNotificationManagement_PreviewMessageShow();
                                                       FloatPanel_AyohaNotificationManagement_ViewMessage_Preview_Show();
        
                                                   }
                                               },
                                     ]
                                 },
        
                                  {
        
                                      margin: '5 0 0 0',
                                      width: '100%',
                                      height: 20,
                                      html: '<input type="text" id="AyohaNotificationCreateMsgSUbject" onkeyup="FloatPanel_AyohaNotificationManagement_CreateMessage_SetPreviewMessage()" placeHolder="Enter Subject Message" style="border-color:transparent;color:grey;width:100%;text-align: center;font-size:14px;font-weight:bold">',
                                      //zIndex: 90,
                                  },
        
        
                                 {
                                     xtype: 'container',
                                   //  hidden: true,
                                     margin: '4 0 0 0',
                                     id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_LineSeparator01',
                                     style: ' background-color: grey',
                                     height: 2,
                                     // height: '100%',
                                     width: '80%',
                                     layout: {
                                         type: 'hbox',
                                         pack: 'start',
                                         align: 'center'
        
                                     },
        
        
                                 },
        
        
                             ]
        
                         },
                      
                     
                     //image
        
                     ////////////////////////////
                           {
        
        
                               // xtype: 'button',
                               xtype: 'container',
                               margin: '2 0 0 0',
                               id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_Image',
                               name: 'clickablecontainerFloatPanel_AyohaNotificationManagement_CreateMessage_Image',
                               hidden:true,
                               //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                               //  renderTo: document.body,
                               height: 500,
                               width: '90%',
                               //  style: 'border:2px none #540575;',
                               style: 'border-top:2px dotted #540575;border-left:2px dotted #540575;border-right:2px dotted #540575;border-bottom:2px dotted #540575',
                               layout: {
                                   type: 'vbox',
                                   pack: 'left',
                                   align: 'left'
                               },
        
                               items: [
        
                                   {
                                       id: 'HtmlFloatPanel_AyohaNotificationManagement_CreateMessage_Image',
                                       hidden: true,
                                       margin: '10 0 0 0',
                                       width: '100%',
                                       html: '<input type="file" id="input-FloatPanel_AyohaNotificationManagement_CreateMessage_Image" accept="image/*"  onchange="FloatPanel_AyohaNotificationManagement_CreateMessage_Image()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
        
                                       //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
        
        
        
        
        
                                   },
        
                                   {
        
                                       // xtype: 'image',
                                       xtype: 'pinchzoomimage',
                                       src: 'resources/icons/PushNotificationUploadImage01.png',
                                       //  width: 220,
                                       id: 'ImgFloatPanel_AyohaNotificationManagement_CreateMessage_Image',
                                       height: 495,
                                       width: '100%',
                                   },
        
                                   //{
                                   //    xtype: 'button',
                                   //    id: 'btnUploadFuelClaimInit',
                                   //    margin: '-200 0 0 0',
                                   //    width: '100%',
                                   //    height:150,
                                   //    // badgeText: '1',
                                   //    html: '<div >.</div>',
                                   //    ui: 'plain',
                                   //    handler: function () {
        
                                   //        uploadReceiptImages();
                                   //    }
                                   //},
        
        
        
        
                               ]
        
        
                           },
        
        
        
                     ////////////////////////
        
                      
        
        
                        
        
                             {
                                 xtype: 'container',
                                 // docked: 'top',
                                  //hidden:true,
                                 //  margin: '0 0 0 0',
                                 //  docked: 'bottom',
                                 style: 'background-color: white;',
                                 id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessageInner',
                                 //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                // zIndex: 90,
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
                                     pack: 'start',
                                     align: 'center'
                                 },
                                height: 340,
                               // height:'40%',
                                 //scrollable: {
                                 //    direction: 'vertical',
                                 //    directionLock: true
                                 //},
        
                                 items: [
                                       
                          {
                              xtype: 'container',
                              width: '100%',
                              id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg',
                              style: ' background-color: transparent',
                              height: 500,
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'center'
                              },
        
                              items: [
                                  
                                   {
        
                                       margin: '10 0 0 0',
                                       width: '95%',
                                    //   height: '100%',
                                       id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg',
                                       html: '<textarea id="input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg"  placeHolder="Write Message Here ,Limit 250 Characters" onkeyup="FloatPanel_AyohaNotificationManagement_CreateMessage_SetPreviewMessage()" style="border: 1px dotted grey;color:grey;text-align: left;font-size:12px;background-color: transparent;width:100%;height:290px;border-radius: 0px;"    maxlength="250"  wrap="hard">'
                                   },
        
        
                                   {
                                     xtype: 'container',
                                     width: '95%',                                                   
                                     style: ' background-color: transparent',
                                     height: 20,
                                     layout: {
                                         type: 'vbox',
                                         pack: 'center',
                                         align: 'right'
                                     },items:[
                                         {
                                             // margin: '-10 0 0 0',
                                              //height: 20,
                                              id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_TextRemaining',
                                              html: '<div style="width:100%;background-color: transparent;text-align:right;border-bottom: 1px none grey;font-size: 12px;font-weight:bold;color:black;height:20px;margin:-10px 0px 0px 0px;">Text Remaining 250</div>',
                                              //hidden: true,
                                          },
                                     ]
                                   },
                                  
        
                              ]
        
                          },
        
                         
        
                            ]
        
        
                        },
        
        
        
        
                       
        
                          {
                              xtype: 'container',
                              width: '100%',
                             // hidden: true,
                            // margin: '-100 0 0 0',
                              id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage',
                              height: 160,
                              docked: 'bottom',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'center'
                              },
                              items: [
                                 {
        
                                     //margin: '222 0 0 0',
                                     margin: '0 0 18 0',
                                     width: '95%',
                                     height: 20,
                                     //id: 'htmlAnimatedIntervalValue',
                                     html: '<textarea id="input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyFooter"  placeHolder="   Footer/Advertisement Image (Required)"  readOnly style="border: 1px dotted grey;color:grey;text-align: left;font-size:12px;background-color: transparent;width:100%;height:158px;border-radius: 10px;" wrap="hard">'
                                 },
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage',
                                       //  badgeText: '1',
                                       // hidden:true,
                                       margin: '20 0 0 0',
                                       height: 55,
                                       width: 100,
                                       html: '<img src="resources/icons/upload01.png" width="35" height="35" alt="Company Name"><br><div style="width:100%;background-color: transparent;text-align:right;border-bottom: 1px none grey;font-size: 11px;font-weight:normal;color:grey;height:20px;margin:-2px 0px 0px -10px;">Upload Image</div>',
                                       ui: 'plain',
                                       handler: function () {
        
                                           UploadFloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage();
                                       }
                                   },
        
        
        
        
                                    {
                                        id: 'HtmlInputFloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage',
                                        hidden: true,
                                        margin: '0 0 0 0',
                                        width: '100%',
                                        html: '<input type="file" id="inputImg-FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage" accept="image/*"  onchange="inputFloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'
        
                                        //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',
        
        
                                     
        
                                    },
        
                                 
        
                             //{
        
                             //    margin: '-2 0 0 0',
                             //    width: '105%',
                             //    height: 20,
                             //    html: '<input type="text" id="inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                             //},
        
        
                              ]
        
                          },
        
        
                          {
                              xtype: 'container',
                              width: '100%',
                              height: 160,
                              hidden: true,
        
                              id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage',
                              //height: 20,
                              docked: 'bottom',
                              layout: {
                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'center'
                              },
                              items: [
        
                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      margin: '-30 0 0 0',
                                      height: 35,
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'right'
                                      },
                                      items: [
                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImageCancel',
                                                //  badgeText: '1',
                                                // hidden:true,
                                                margin: '33 15 0 0',
                                                height: 35,
                                                width: 35,
                                                html: '<img src="resources/icons/BtnCloseNew.png" width="25" height="25" alt="Company Name">',
                                                ui: 'plain',
                                                handler: function () {
                                                    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage').setHidden(true);
                                                    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage').setHidden(false);
                                                    FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage = "";
                                                    FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImageName = "";
                                                    localStorage.setItem('PushNotificationSource', 'New');
        
                                                }
                                            },
                                      ]
                                  },
                                 {
                                     //  xtype:'image',
                                     margin: '-10 0 0 0',
                                     width: '95%',
                                     // height:100,
                                     // src: "resources/icons/protonsale.png"
                                     id:'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage',
                                     html: '<img src="resources/icons/protonsale.png" width="100%" height="160" alt="Company Name">'
        
                                 },
                                   //{
                                   //    xtype: 'button',
                                   //    id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage',
                                   //    //  badgeText: '1',
                                   //    // hidden:true,
                                   //    margin: '0 0 22 0',
                                   //    height: 45,
                                   //    width: 100,
                                   //    html: '<img src="resources/icons/upload01.png" width="25" height="25" alt="Company Name"><br><div style="width:100%;background-color: transparent;text-align:right;border-bottom: 1px none grey;font-size: 11px;font-weight:normal;color:grey;height:20px;margin:-2px 0px 0px -10px;">Upload Image</div>',
                                   //    ui: 'plain',
                                   //    handler: function () {
        
        
                                   //    }
                                   //},
        
        
                              ]
        
                          },
        
        
        
        
        
        
        
        
        
                          //{
                          //    margin: '20 0 0 0',
                          //    height: 20,
                          //    id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_Subject',
                          //    html: '<div style="width:100%;background-color: transparent;text-align:right;border-bottom: 1px none grey;font-size: 12px;font-weight:bold;color:black;height:20px"><u>Selamat Hari Raya Aidilfitri 2021</u></div>',
                          //    //hidden: true,
                          //},
                    ]
                },
        
            ]
        },
        {
            xtype: 'container',
            width: 2,
            height:'90%',
            style: 'background-color: #ECF0F1;',
        },
{
    xtype: 'container',
    width: '40%',
    height:'100%',
    style: 'background-color:transparent;',
    layout: {

        type: 'vbox',
        pack: 'start',
        align: 'center'
    },items:[
        {  margin: '5 0 0 0',
            html: '<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none grey;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;">- Preview Push Notification Message -</div>',
        },
        {
            xtype: 'container',
            width: 350,
            // height:'98%',
            height: 600,
           // flex: 1,

            style: 'background-image: url("resources/icons/NotificationBg08.png"); background-size: 100% 98%;border-bottom:1px none;',
            //  style: "border-right:3px solid #EAEDED",
            layout: {
                type: 'vbox',
                //align: 'center',
                // pack: 'left'
            },
            items: [


                {
                    xtype: 'container',
                    margin: '80 0 0 0',
                    //   flex: 1,
                    //flex: 1,
                    width: '100%',
                    height: '76%',
                    scrollable: {
                        direction: 'vertical',
                        directionLock: true
                    },
                    //  zIndex:-100,
                    items: [
                         {
                             id: 'FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti',
                             margin: '0 0 0 8',
                             //  height: '90%',
                             //  html: '<br><table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="resources/icons/klinikpergigiancyberLogo.png" width="200" height="150" alt="Company Name"><br>KLINIK PERGIGIAN CYBERJAYA</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">TITLE</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Your Contents(MAX 500)<br><img src="resources/icons/defaultAdverstiment.png" style="display: inline-block; width: 100%; height: 92px; margin-top: 0px;"/><br><img src="resources/icons/emailBottom.png" style="display: inline-block; width: 95%; height: 192px; margin-top: -5px;margin-left: 13px;"/></td></tr></table>',
                             html: '<table style="border-collapse:collapse;border-spacing:0;width:97%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="'+GetEnterpriseLogoPath()+'" width="200" height="150" alt="Company Name"><br>'+GetEnterpriseName()+'</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">TITLE</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">&nbsp;&nbsp;Your Contents(MAX 250)<br><img src="resources/icons/defaultAdverstiment.png" style="display: inline-block; width: 95%; height: 162px; margin:20px 0px 0px 8px;border-radius: 0px 0px 20px 20px;"/></td></tr></table>',



                         },

                    ]
                },











            ]






        },
    ]
},


    ]
    
},


                               



                               ////////////////////////////////////////////
                              










                           ]

                       },


                       {

                        xtype: 'container',
                        width: '100%',
                        // width: 40,
                        docked: 'bottom',
                        height: 55,
                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_AyohaNotificationManagement_CreateMessage_MenuBottom',
                       // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                       style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
     
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
                                           align: 'left',
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
                                               width: '40%',
                                               style: "background-color: transparent",
                                               height: 55,
                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'start',
                                                   align: 'center',
                                               },
                                               items: [


                                                   {
                                                       width: '100%',
                                                       id: 'htmlFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeText',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none grey;font-size: 12px;font-weight:normal;color:grey;height:20px">Message Type:<b>TEXT</b></div>',
                                                   },



                                                   {
                                                       xtype: 'container',
                                                       width: '100%',
                                                       style: "background-color: transparent",
                                                       margin: '-14 0 0 0',
                                                       height: 55,
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'center',
                                                           align: 'center',
                                                       },
                                                       items: [

                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeText',
                                                                //  badgeText: '1',
                                                                // hidden:true,
                                                                margin: '8 0 0 0',
                                                                height: 45,
                                                                width: 45,
                                                                html: '<img src="resources/icons/text01.png" width="35" height="35" alt="Company Name">',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                    globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType = "Text";
                                                                    globalFloatPanel_AyohaNotificationManagement_CreateMessage_NotificationType = "Text";
                                                                    Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeText').setHtml('<img src="resources/icons/text01.png" width="35" height="35" alt="Company Name">');
                                                                    Ext.getCmp('btnFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeImage').setHtml('<img src="resources/icons/ImageGrey03.png" width="35" height="35" alt="Company Name">');
                                                                    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeText').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none grey;font-size: 12px;font-weight:normal;color:grey;height:20px">Message Type:<b>TEXT</b></div>');
                                                                    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_TextRemaining').setHidden(false);
                                                                    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessageInner').setHidden(false);
                                                                    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage').setHidden(false);
                                                                    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setHidden(true);
                                                                    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage').setHidden(true);
                                                                    document.getElementById('AyohaNotificationCreateMsgSUbject').value = "";
                                                                    FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage = "";
                                                                    document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value = "";

                                                                    
                                                                    
                                                                  

                                                                }
                                                            },
                                                                            {
                                                                                xtype: 'button',
                                                                                id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_MessageTypeImage',
                                                                                //  badgeText: '1',
                                                                                // hidden:true,
                                                                                margin: '8 0 0 0',
                                                                                height: 45,
                                                                                width: 45,
                                                                                html: '<img src="resources/icons/ImageGrey03.png" width="35" height="35" alt="Company Name">',
                                                                                ui: 'plain',
                                                                                handler: function () {
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
                                                                                    FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image = "";
                                                                                    Ext.getCmp('ImgFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setSrc('resources/icons/PushNotificationUploadImage01.png');
                                                                                }
                                                                            },

                                                       ]
                                                   }























                                               ]

                                           },








                                           {
                                               xtype: 'spacer'
                                           },

                                             {


                                                 // xtype: 'button',
                                                 //  hidden: true,
                                                 id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_SetReceipient',
                                                 //  badgeText: '1',
                                                 margin: '0 0 0 0',
                                                 //height: 40,
                                                 //width: 135,
                                                 //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                 html: '<button OnClick="FloatPanel_AyohaNotificationManagement_SetRecipientShowStaging()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Set Receipient(s)</button>',
                                                 //ui: 'confirm',
                                                 //handler: function () {

                                                 //}

                                             },

                                             {


                                                 // xtype: 'button',
                                                 hidden: true,
                                                 id: 'btnFloatPanel_AyohaNotificationManagement_CreateMessage_SetReceipient_FromVisitorAnalsys',
                                                 //  badgeText: '1',
                                                 margin: '0 0 0 0',
                                                 //height: 40,
                                                 //width: 135,
                                                 //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                 html: '<button OnClick="VisitorAnalsys_SetRecipientShowStaging()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">View Receipient(s)</button>',
                                                 //ui: 'confirm',
                                                 //handler: function () {

                                                 //}

                                             },
                                       {
                                           xtype: 'panel',
                                           width: 10,
                                       }






                                       ]
                                   },





                                              //{
                                              //    margin: '0 0 0 0',
                                              //    html: '<font size=3 color=black><b>TARMIZI RAHIM</b></font>'
                                              //},










                               ]

                    },





                              /////





                              //////



                              ////////////////////////









                 ]

             },




         ]















     });
    return _FloatPanel_AyohaNotificationManagement_CreateMessage;



}





function UploadFloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage").click();
    });
}

var FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage;
var FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImageName;
function inputFloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage').files[0];


    FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImageName = document.getElementById('inputImg-FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage').files[0].name;
    
    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    //  if (FileSize > 2048) {
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
                    FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage = event.target.result;
                    //   document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value = fileName;


                    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage').setHtml('<img src="' + FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage + '" width="100%" height="160px" alt="Company Name">');

                    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage_SetImage').setHidden(false);
                    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_FooterImage').setHidden(true);
                    
                    

                    //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',


                    // Ext.getCmp('AccomodationReceiptPicture').setSrc(FuelReceiptsImg64);
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                    FloatPanel_AyohaNotificationManagement_CreateMessage_SetPreviewMessage();
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}

function FloatPanel_AyohaNotificationManagement_CreateMessageShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaNotificationManagement_CreateMessage);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotificationManagement_CreateMessage());
    this.overlay.show();
    isFloatPanel_AyohaNotificationManagement_CreateMessageOpen = 'Y';
    _FloatPanel_AyohaNotificationManagement_CreateMessage_isFirstLoad = "Y";
    FloatPanel_AyohaNotificationManagement_CreateMessageAdjustHeight();  
    FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage = "";
    FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImageName = "";
    arrFloatPanel_AyohaNotificationManagement_MembersList_CheckingVal.length = 0;
    var NotificationCode = GenerateRandomNo() + GetEnterpriseAccNo() + "-PN";
    localStorage.setItem("NotificationCode", NotificationCode);
    document.getElementById("input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg").addEventListener("keyup", countText);
    globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType = "Text";
  


    var containerView = Ext.ComponentQuery.query('container[name=clickablecontainerFloatPanel_AyohaNotificationManagement_CreateMessage_Image]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('doubletap',
      function (event, node, options, eOpts) {

          uploadFloatPanel_AyohaNotificationManagement_CreateMessage_Image();
      }
    );

    if(isFloatPanel_MembershipDetailsPageOpen=="Y"){
     
    }else{
  // AyohaNotificationCreateMsgSUbject
  document.getElementById("AyohaNotificationCreateMsgSUbject").value="Happy BirthDay from "+GetEnterpriseName();
  var txt = "Hi " + globalFloatPanel_MembershipDetailsPage_AccountName + 
  ", On behalf of our entire team,\n\n I would like to wish you a very Happy Birthday! May this special day bring you joy, success, and continued good fortune throughout the year.\n\nWe truly appreciate your membership with us, and we look forward to celebrating many more milestones with you.\nBest Wishes.\n" + 
  GetEnterpriseName();


  
  document.getElementById("input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg").value=txt;
  setTimeout(function() {
   FloatPanel_AyohaNotificationManagement_CreateMessage_setPreview_Text();
}, 1000);
 
    }

}


function uploadFloatPanel_AyohaNotificationManagement_CreateMessage_Image() {
    $(document).ready(function () {
        $("input#input-FloatPanel_AyohaNotificationManagement_CreateMessage_Image").click();
    });
}


var FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image;
var FloatPanel_AyohaNotificationManagement_CreateMessage_Image_ImageName;
function FloatPanel_AyohaNotificationManagement_CreateMessage_Image() {
    var file = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_Image').files[0];


    FloatPanel_AyohaNotificationManagement_CreateMessage_Image_ImageName = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_Image').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    if (FileSize > 4096) {
        alert('Image size cannot exceeds 4 MB!');
        // CustomeMsgBoxShow('Image size exceeds 200 KB!');
        return;
        // $(file).val(''); //for clearing with Jquery
    } else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image = event.target.result;
                   
                  //  globalOriginalReceiptName = fileName;


                  //  Ext.getCmp('ImgFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setHeight(globalFloatPanel_AyohaNotificationManagement_CreateMessage_Image_Modified-3);
                    Ext.getCmp('ImgFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setSrc(FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image);
            

                    
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                    FloatPanel_AyohaNotificationManagement_CreateMessage_SetPreviewMessage();
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}





function FloatPanel_AyohaNotificationManagement_CreateMessageHide() {
    _FloatPanel_AyohaNotificationManagement_CreateMessage.hide();

    isFloatPanel_AyohaNotificationManagement_CreateMessageOpen = 'N';
    _FloatPanel_AyohaNotificationManagement_CreateMessage_isFirstLoad = "N";
}



var globalFloatPanel_AyohaNotificationManagement_CreateMessage_Image_Modified;
function FloatPanel_AyohaNotificationManagement_CreateMessageAdjustHeight() {
    // var y = parseInt(screen.height);
    // var x = parseInt(window.innerHeight);

    // var newHeight = x - 90;
  


    // Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage').setHeight(newHeight);
    // var newHeights = x - 175;
    // globalFloatPanel_AyohaNotificationManagement_CreateMessage_Image_Modified = newHeights;
    // Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_CreateMessage_Image').setHeight(newHeights);



}


function FloatPanel_AyohaNotificationManagement_SetRecipientShowStaging() {


    var AyohaNotificationCreateMsgSUbject = document.getElementById('AyohaNotificationCreateMsgSUbject').value;
    var AyohaNotificationManagement_CreateMessage_BodyMsg = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value;

    if (AyohaNotificationCreateMsgSUbject.length < 2) {
       
        swalFireFail("No Subject Message!");
        return;
    }

    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Text") {

        if (AyohaNotificationManagement_CreateMessage_BodyMsg.length < 2) {

            swalFireFail("No  Message !");
            return;
        }
        if (FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage.length < 1) {

            swalFireFail("No  Footer Image !");
            return;
        }
        FloatPanel_AyohaNotificationManagement_SetRecipientShow();
        return;
    }

    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Image")
    {
       
        if (FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image.length < 2) {
            swalFireFail("No Image !");
            return;
        }
        FloatPanel_AyohaNotificationManagement_SetRecipientShow();
    }


   
   
}






var maxchar = 251;
//var i = document.getElementById("input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg");

////var c = document.getElementById("count");
////c.innerHTML = maxchar;

//i.addEventListener("keydown", count);


var c;
function countText(e) {
    var i = document.getElementById("input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg");
    var len = i.value.length;
    if (len >= maxchar) {
        e.preventDefault();
    } else {
       c = maxchar - len - 1;
    }

    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_TextRemaining').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border-bottom: 1px none grey;font-size: 12px;font-weight:bold;color:black;height:20px;margin:-10px 0px 0px 0px;">Text Remaining <b>'+c+'</b></div>');
   
   // console.log(c);
}



function countTextRecentLy() {
    var i = document.getElementById("input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg");
    var len = i.value.length;
    var vc = maxchar - len - 1;
    

    

    Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_CreateMessage_TextRemaining').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border-bottom: 1px none grey;font-size: 12px;font-weight:normal;color:black;height:20px;margin:-20px 0px 0px 0px;">Text Remaining <b>' + vc + '</b></div>');

    // console.log(c);
}


function FloatPanel_AyohaNotificationManagement_CreateMessage_SetPreviewMessage() {
   
   
   
    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Text") {
        FloatPanel_AyohaNotificationManagement_CreateMessage_setPreview_Text();
    }
    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Image") {
        FloatPanel_AyohaNotificationManagement_CreateMessage_setPreview_Image();
    }


}

function FloatPanel_AyohaNotificationManagement_CreateMessage_setPreview_Text() {
   


    //var Noticontent;
    //   var Imgtemp =+ '<img src="' + localStorage.getItem('NotiContentImage') + '" style="display: inline-block; width: 172px; height: 92px; margin-top: 0px; " />';
   var  NotiTitleID = document.getElementById('AyohaNotificationCreateMsgSUbject').value;

    //NotiContentID = Ext.getCmp('NotiContentID').getValue().replace(/\n/g, "<br>") + Advertise;
    NotiContentID = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value.replace(/\n/g, "<br>");
    // localStorage.setItem('CurrNotificationContent', NotiContentID);
    var notiImg = FloatPanel_AyohaNotificationManagement_CreateMessage_UploadFooterImage;





    //Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_ViewMessageTitleTxt').setHtml('<font size=2 color=black><b>PREVIEW - Push Notification Message</b></font>')
    //NotiContentID = Ext.getCmp('NotiContentID').getValue().replace(/\n/g, "<br>") + Advertise;
    // var NotiContentID = NotificationBodys.replace(/\n/g, "<br>");
    // localStorage.setItem('CurrNotificationContent', NotiContentID);
    // var notiImg = NotificationFooterImages;
    //  console.log(notiImg);
    //  console.log(NotiContentID);
    if (notiImg) {


        Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:10px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Date:'+GetDateTimeToday()+'</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:0px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:0px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:80%;height:2px;background-color:grey;margin:0px 0px 0px 30px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:30px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2"><u>' + NotiTitleID + '</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 15px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal" colspan="2">' + NotiContentID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="' + notiImg + '" style="display: inline-block; width: 93%; height: 162px; margin:40px 0px 0px -10px;border-radius: 0px 0px 20px 20px;" /></td></tr></table>');
       // '<table style="border-collapse:collapse;border-spacing:0;width:97%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="'+GetEnterpriseLogoPath()+'" width="200" height="150" alt="Company Name"><br>'+GetEnterpriseName()+'</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">TITLE</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">&nbsp;&nbsp;Your Contents(MAX 250)<br><img src="resources/icons/defaultAdverstiment.png" style="display: inline-block; width: 95%; height: 162px; margin:40px 0px 0px 8px;border-radius: 0px 0px 20px 20px;"/></td></tr></table>',


    } else {

        Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:10px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Date:'+GetDateTimeToday()+'</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:0px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:0px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:80%;height:2px;background-color:grey;margin:0px 0px 0px 30px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:30px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2"><u>' + NotiTitleID + '</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 15px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal" colspan="2">' + NotiContentID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 10px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:left" colspan="2"></td></tr></table>');


        // Ext.getCmp('PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:1px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="' + GetEnterpriseLogoPath() + '" width="150" height="100" alt="Company Name"><br><b>' + GetEnterpriseName() + '</b></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 15px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">' + NotiTitleID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">' + NotiContentID + ' <br><img src="resources/icons/defaultAdverstiment.png" style="display: inline-block; width: 97%; height: 92px; margin-top: 0px;"/></td></tr></table>');
        //   Ext.getCmp('PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right">Published On:10-01-2018</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top"><img src="resources/icons/klinikpergigiancyberLogo.png" width="200" height="150" alt="Company Name"><br>KLINIK PERGIGIAN CYBERJAYA</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top">' + NotiTitleID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">' + NotiContentID.replace(Advertise, imgAdvertisment1) + '</td></tr></table>');


    }
}






function FloatPanel_AyohaNotificationManagement_CreateMessage_setPreview_Image() {
    var NotiTitleID = document.getElementById('AyohaNotificationCreateMsgSUbject').value;

    //NotiContentID = Ext.getCmp('NotiContentID').getValue().replace(/\n/g, "<br>") + Advertise;
    NotiContentID = document.getElementById('input-FloatPanel_AyohaNotificationManagement_CreateMessage_BodyMsg').value.replace(/\n/g, "<br>");
    // localStorage.setItem('CurrNotificationContent', NotiContentID);
    var notiImg = FloatPanel_AyohaNotificationManagement_CreateMessage_Image_Image;





   // Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_ViewMessageTitleTxt').setHtml('<font size=2 color=black><b>PREVIEW - Push Notification Message</b></font>')
   


    Ext.getCmp('FloatPanel_AyohaNotificationManagement_ViewMessage_PreviewMsgNoti').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;zIndex:-100px"><tr><th style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-decoration:underline"></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:right"></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom:1px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><div style="margin:0px 0px 0px 0px;width:100%;height:20px;background-color:transparent;color:grey;font-size:12px;text-align:center">Date:2/5/2021 03:44:56PM</div><br><img src="' + GetEnterpriseLogoPath() + '" style="width:140px;height:130px;margin:-10px 0px 0px 0px;"  alt="Company Name"><br><div style="margin:-20px 0px 0px 0xp;width:100%;background-color:transparent;"><b>' + GetEnterpriseName() + '</b></div><br><div style="width:90%;height:2px;background-color:black;margin:-20px 0px 0px 13px;text-align:center;font-size:12px;font-weight:bold;color:black">.</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:15px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;font-weight:bold;text-align:center" colspan="2">' + NotiTitleID + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:1px 5px;border-bottom:3px none #EAEDED;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="' + notiImg + '" style="display: inline-block; width: 92%; height: ' + globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight + 'px; margin:0px 0px 0px -10px; " /></td></tr></table>');


   
}






function FloatPanel_AyohaNotificationManagement_CreateMessage_SetPreviewMessage_Preparation() {
   
   
   
    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Text") {
        FloatPanel_AyohaNotificationManagement_CreateMessage_setPreview_Text();
    }
    if (globalFloatPanel_AyohaNotificationManagement_CreateMessage_MessageType == "Image") {
        FloatPanel_AyohaNotificationManagement_CreateMessage_setPreview_Image();
    }


}