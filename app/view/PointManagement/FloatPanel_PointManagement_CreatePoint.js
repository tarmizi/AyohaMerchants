Ext.define('ianMizi.view.PointManagement.FloatPanel_PointManagement_CreatePoint', {

});


var _FloatPanel_PointManagement_CreatePoint;


var isFloatPanel_PointManagement_CreatePointOpen = 'N';



var _FloatPanel_PointManagement_CreatePoint_isFirstLoad = "N";







function FloatPanel_PointManagement_CreatePoint() {

    _FloatPanel_PointManagement_CreatePoint =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_PointManagement_CreatePointID',
         draggable: false,
         styleHtmlContent: true,
         zIndex: 650,

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

                                   id: 'containerFloatPanel_PointManagement_CreatePointHeader',
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
                                                            id: 'btnFloatPanel_PointManagement_CreatePointBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_PointManagement_CreatePoint.hide(Ext.fx.Animation({
                                                                    type: 'slideOut',
                                                                    direction: 'left',
                                                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_PointManagement_CreatePointOpen = 'N';
                                                                _FloatPanel_PointManagement_CreatePoint_isFirstLoad = "N";
                                                            }
                                                        },

                                                         {
                                                             xtype: 'spacer',

                                                         },
                                                          {
                                                              margin: '0 0 0 0',
                                                              id: 'htmlFloatPanel_PointManagement_CreatePointTitleTxt',
                                                              html: '<font size=2 color=white><b>All Members List</b></font>'
                                                          },
                                                         {
                                                             xtype: 'button',
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_PointManagement_CreatePoint_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_PointManagement_CreatePoint.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_PointManagement_CreatePointOpen = 'N';
                                                                 _FloatPanel_PointManagement_CreatePoint_isFirstLoad = "N";

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
                                   id: 'containerFloatPanel_PointManagement_CreatePoint',
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
                                       pack: 'start',
                                       align: 'center'
                                   },


                                   items: [













                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  hidden:true,
                                                  height: 30,
                                                  //  style: 'background-color:black',
                                                  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
                                                      align: 'left'

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

                                                              margin: '0 0 0 10',
                                                              id: 'htmlFloatPanel_PointManagement_CreatePoint_Receipients',
                                                              html: '<font size="2" color="black"><b>Members List</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          






                                                       {
                                                           xtype: 'spacer'
                                                       },




                             //{
                             //    id: 'htmlFloatPanel_PointManagement_CreatePoint_ListTypeSearchTxt',
                             //    margin: '0 0 0 0',
                             //    width: '60%',
                             //    height: 20,
                             //    html: '<input type="text" id="input-FloatPanel_PointManagement_CreatePoint_ListTypeSearchTxt" placeHolder="Search Name,Tel,Email" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                             //},

                             // {

                             //     id: 'btnFloatPanel_PointManagement_CreatePoint_Search',
                             //     // hidden: true,
                             //     //  badgeText: '1',
                             //     margin: '0 5 0 0',
                             //     height: 20,
                             //     width: 20,
                             //     html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',

                             // },

                                                          //{
                                                          //    xtype: 'spacer'
                                                          //},
                                                          //{

                                                          //    margin: '0 10 0 0',
                                                          //    id: 'htmlFloatPanel_PointManagement_CreatePoint_IsRead',
                                                          //    html: '<font size="2" color="black"><b>IsRead?</b></font>',
                                                          //    //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          //},
                                                          //{

                                                          //    width: '50%',
                                                          //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                          //},
                                                          //     //{
                                                               //    margin: '-8 0 0 0',

                                                               //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                               //},
                                                               // {
                                                               //     margin: '-7 0 0 0',

                                                               //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                               // },


                                                  ]
                                              },




                                        {
                                            xtype: 'list',
                                            flex: 1,
                                            // height: '81%',
                                           // store: 'MembershipsLoadByCampaignCodeStore',
                                            store:'MembershipsLoadByCampaignCodeStore',
                                            id: 'FloatPanel_PointManagement_CreatePoint_List',
                                            mode: 'SINGLE',
                                            //grouped: true,
                                            disableSelection: true,
                                            itemTpl: '<div class="myContent">' +

                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                      + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:black;">{RowNumber}).{AccountName}</div>'
                                                      + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{PhoneNo} - {Email}</div> '
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-10px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:purple;">Amount Spent(RM) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Points</div>'
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:black;"><input type="number"    id="input-FloatPanel_PointManagement_CreatePoint_AmountValueTxt_{ID}" placeHolder="RM 00.00"   oninput="PointManagement_OnInputAMount({ID})" style="border-color:purple;color:purple;width:30%;text-align: center;font-size:16px;font-weight:bold;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text"    id="input-FloatPanel_PointManagement_CreatePoint_PointValueTxt_{ID}" placeHolder="0"    style="border-color:transparent;color:purple;width:30%;text-align: center;font-size:16px;font-weight:bold;"></div>'
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:right;margin:-50px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="largerCheckbox" onclick="PointManagement_OnChangeCheckbox (this,{ID})" name="checkbox" /></div>'

                                                      + '</div>' +

                                              '</div>',
                                            width: '100%',
                                            //listeners: {
                                            //    itemsingletap: function (list, idx, target, records, evt) {

                                            //        var StampCampaignCode = records.get('StampCampaignCode');
                                            //        var StampCampaignName = records.get('StampCampaignName');
                                            //        var StampCardType = records.get('StampCardType');
                                            //        var StartDate = records.get('StartDate');
                                            //        var EndDate = records.get('EndDate');
                                            //        var RowStatus = records.get('RowStatus');
                                            //        var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                            //        var CreatedByAccNo = records.get('CreatedByAccNo');
                                            //        var CreatedBy = records.get('CreatedBy');
                                            //        var CreatedDate = records.get('CreatedDate');
                                            //        var ModifiedBy = records.get('ModifiedBy');
                                            //        var ModifiedDate = records.get('ModifiedDate');
                                            //        var StartDateOnly = records.get('StartDateOnly');
                                            //        var EndDateOnly = records.get('EndDateOnly');
                                            //        var BackgroundImage = records.get('StampCardBackground');
                                            //        var isAnimated = records.get('isAnimated');
                                            //        var AnimatedInterval = records.get('AnimatedInterval');

                                            //        var StampRuleRemarks = records.get('StampRuleRemarks');
                                            //        var isStampRulePopUp = records.get('isStampRulePopUp');
                                            //        var LoyaltyCustomerType = records.get('LoyaltyCustomerType');

                                            //        var StampCampaignPremiumQRCode = records.get('StampCampaignPremiumQRCode');

                                            //        if (isFloatPanel_MembershipCardManagement_EditCardOpen == 'Y') {
                                            //            MembershipCardCampaingEntitled_InsertUpdate(StampCampaignCode, "Stamp Reward Loyalty Card");
                                            //            return;
                                            //        }





                                            //        FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, BackgroundImage, isAnimated, AnimatedInterval
                                            //            , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode);
                                            //        Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo)
                                            //        //Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
                                            //    },
                                            //    deselect: function (list, records) {

                                            //    }
                                            //},

                                        },




                                   ]
                               },




                               ////////////////////////////////////////////









                               //////////////////////////////////////////
                               {

                                   xtype: 'container',
                                   width: '100%',
                                   // hidden:true,
                                   // width: 40,
                                   docked: 'bottom',
                                   height: 57,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_PointManagement_CreatePoint_MenuBottom',
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
                                       pack: 'center',
                                       align: 'center',
                                   },




                                   // hidden:true,
                                   items:
                                          [
                             //                 {
                             //                     xtype: 'container',
                             //                     width: '100%',
                             //                     style: "background-color: transparent",
                             //                     height: 55,
                             //                     layout: {
                             //                         type: 'hbox',
                             //                         pack: 'center',
                             //                         align: 'center',
                             //                     },
                             //                     //scrollable: {
                             //                     //    direction: 'horizontal',
                             //                     //    directionLock: false
                             //                     //},
                             //                     items: [







                             //                           {
                             //                               xtype: 'button',
                             //                               id: 'btnFloatPanel_PointManagement_CreatePoint_Search',
                             //                               // hidden: true,
                             //                               //  badgeText: '1',
                             //                               margin: '0 0 0 -10',
                             //                               height: 40,
                             //                               width: 40,
                             //                               html: '<img src="resources/icons/searchPurpleTwo.png" width="30" height="30" alt="Company Name">',
                             //                               ui: 'plain',
                             //                               handler: function () {
                             //                                   // NotificationsPanelShow();

                             //                                   // LoyaltyCardRedeemListShow();


                             //                                   //  LoyaltyCardRedeemListShow();
                             //                               }
                             //                           },





                             //{
                             //    id: 'htmlFloatPanel_PointManagement_CreatePoint_ListTypeSearchTxt',
                             //    margin: '0 0 0 0',
                             //    width: '78%',
                             //    height: 20,
                             //    html: '<input type="text" id="input-FloatPanel_PointManagement_CreatePoint_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                             //},






                             //                     ]
                             //                 },

                             {
                                 xtype: 'panel',
                                 width:10
                             },

                              
                               {
                                   xtype:'spacer'
                               },
                                     
                               {
                                   xtype: 'container',
                                   id: 'containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointID',
                                   name:'containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint',
                                   //width: '33%',
                                   //height: 30,
                                   margin: '-10 0 0 0',
                                   height: 37,
                                   width: 57,
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
                                            id: 'btn_FloatPanel_PointManagement_CreatePoint_MenuBottom_SendPoint',
                                            //  badgeText: '1',
                                            margin: '0 0 0 0',

                                            height: 36,
                                            width: 56,
                                            html: '<img src="resources/icons/generatePoint03.png" width="46" height="26" alt="Company Name">',
                                            ui: 'plain',
                                            handler: function () {

                                               
                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            id: 'FloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointTxt',
                                            width: '100%',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'center'

                                            },
                                            items: [
                                                {
                                                    margin: '-12 0 0 0',
                                                    // id: 'htmlStampHistoryTxt',
                                                    html: '<font size=1 color=grey><b>Send</b></font>'
                                                },
                                                {
                                                    margin: '-12 0 0 0',
                                                    // id: 'htmlStampHistoryTxt',
                                                    html: '<font size=1 color=grey><b>Point</b></font>'
                                                },
                                            ]

                                        },


                                   ]
                               },
                               {
                                   xtype: 'container',
                                   // hidden:true,
                                   id: 'containerFloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory',
                                   //width: '33%',
                                   //height: 30,
                                   margin: '-10 0 0 0',
                                   height: 37,
                                   width: 57,
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
                                            id: 'btn_FloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistory',
                                            //  badgeText: '1',
                                            margin: '0 0 0 0',

                                            height: 36,
                                            width: 56,
                                            html: '<img src="resources/icons/MessageHistory02.png" width="26" height="26" alt="Company Name">',
                                            ui: 'plain',
                                            handler: function () {


                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            id: 'FloatPanel_PointManagement_CreatePoint_MenuBottom_SendPointHistoryTxt',
                                            width: '100%',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'center'

                                            },
                                            items: [
                                                {
                                                    margin: '-12 0 0 0',
                                                    // id: 'htmlStampHistoryTxt',
                                                    html: '<font size=1 color=grey>Send Point</font>'
                                                },
                                                {
                                                    margin: '-12 0 0 0',
                                                    // id: 'htmlStampHistoryTxt',
                                                    html: '<font size=1 color=grey>History</font>'
                                                },
                                            ]

                                        },


                                   ]
                               },

                       {
                           xtype: 'panel',
                           width:10,
                       }

                                              //{


                                              //    // xtype: 'button',
                                              //    //  hidden: true,
                                              //    id: 'btnFloatPanel_PointManagement_CreatePoint_Select',
                                              //    //  badgeText: '1',
                                              //    margin: '2 0 0 0',
                                              //    //height: 40,
                                              //    //width: 135,
                                              //    //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                              //    html: '<button OnClick="FloatPanel_PointManagement_CreatePoint_select()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Select</button>',
                                              //    //ui: 'confirm',
                                              //    //handler: function () {

                                              //    //}

                                              //},


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
    return _FloatPanel_PointManagement_CreatePoint;



}




function FloatPanel_PointManagement_CreatePointsShow(val) {

    










    
}




function FloatPanel_PointManagement_CreatePointHide() {
    _FloatPanel_PointManagement_CreatePoint.hide();

    isFloatPanel_PointManagement_CreatePointOpen = 'N';
    _FloatPanel_PointManagement_CreatePoint_isFirstLoad = "N";
}




function FloatPanel_PointManagement_CreatePointAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    //   var adjustedHeight = x - headerHeight;
    var newHeight = x - 85;
    //var bodyMsgHeight01 = x + 17;
    //var bodyMsgHeight02 = bodyMsgHeight01 - x;



    //  var newHeight = adjustedHeight - 80;
    //alert(x)
    // alert(bodyMsgHeight02)


    //900
    //450


    Ext.getCmp('containerFloatPanel_PointManagement_CreatePoint').setHeight(x - 90);
    Ext.getCmp('LoadingFloatPanel_PointManagement_CreatePointID').setHeight(x + 7);






}









