Ext.define('ianMizi.view.AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_RecipientList', {

});


var _FloatPanel_AyohaNotificationManagement_RecipientList;


var isFloatPanel_AyohaNotificationManagement_RecipientListOpen = 'N';



var _FloatPanel_AyohaNotificationManagement_RecipientList_isFirstLoad = "N";







function FloatPanel_AyohaNotificationManagement_RecipientList() {

    _FloatPanel_AyohaNotificationManagement_RecipientList =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaNotificationManagement_RecipientListID',
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
             duration: 250
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
                                   // width: 40,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaNotificationManagement_RecipientListHeader',
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
                                                  //height: 30,
                                                  width: 20,

                                              },

                                              {
                                                margin: '0 0 0 0',
                                                id: 'htmlFloatPanel_AyohaNotificationManagement_RecipientListTitleTxt',
                                                html: '<font size=4 color=black><b>Recipients List</b></font>'
                                            },

                                                       

 {
    xtype: 'spacer',
    width:20
},
{
    xtype: 'container',
    width: 1,
    height: '60%',
    style: ' background-color: #ccc;',
},
{
    xtype: 'spacer',
    width:10
},

{
xtype: 'button',
margin: '1 0 0 0',
height: 40,
width: 40,
html: '<img src="resources/icons/searchPurpleOne.png" width="30" height="30" alt="Company Name">',
ui: 'plain',
handler: function () {
}
},
{
  
html:'<div class="search-container">'+
'<input type="text" id="input-FloatPanel_AyohaNotificationManagement_RecipientList_ListTypeSearchTxt"  placeHolder="Search (Name)" class="search-input" >'+
'</div>'
},
              {
                  xtype: 'spacer',

              },

               


              {
                xtype: 'container',
                width: 1,
                height: '60%',
                style: ' background-color: #ccc;',
            },

            {
                xtype: 'spacer',
                width:10
            }, 




                                                          {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaNotificationManagement_RecipientListBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaNotificationManagement_RecipientList.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                   // direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaNotificationManagement_RecipientListOpen = 'N';
                                                                _FloatPanel_AyohaNotificationManagement_RecipientList_isFirstLoad = "N";
                                                            }
                                                        },
                                                         {
                                                             xtype: 'button',
                                                             hidden:true,
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 3',
                                                             id: 'btnFloatPanel_AyohaNotificationManagement_RecipientList_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaNotificationManagement_RecipientList.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaNotificationManagement_RecipientListOpen = 'N';
                                                                 _FloatPanel_AyohaNotificationManagement_RecipientList_isFirstLoad = "N";

                                                             }
                                                         },




                                                         {
                                                             xtype: 'spacer',
                                                             height: 30,
                                                             width: 7,

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
                                   id: 'containerFloatPanel_AyohaNotificationManagement_RecipientList',
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
                                                  height: 30,
                                              //  style: 'background-color:black',
                                              style: 'background-color: #f4f4f4;border:2px solid #ccc',
                                               //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  //height: 50,
                                                  margin:'0 0 0 0',
                                                  items: [

                                                          //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                          //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                          //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                          //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                          //    '</div></div></div>'

                                                          {

                                                           margin:'0 0 0 18',
                                                              id: 'htmlFloatPanel_AyohaNotificationManagement_RecipientList_Receipients',
                                                              html: '<font size="3" color="#333"><b>Recipients</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                          {
                                                              xtype:'spacer'
                                                          },
                                                          {

                                                              margin: '0 10 0 0',
                                                              id: 'htmlFloatPanel_AyohaNotificationManagement_RecipientList_IsRead',
                                                              html: '<font size="3" color="#333"><b>IsRead?</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
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
                                           // flex: 1,
                                         height: '100%',
                                            store: 'AyohaNotificationLoadByNotificationCodeStore',
                                            id: 'FloatPanel_AyohaNotificationManagement_RecipientList_List',
                                            mode: 'SINGLE',
                                            //grouped: true,
                                            disableSelection: true,
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
                                            itemTpl: '<div class="myContent">' +

                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                      + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{RowNumber}).{AccountName}</div>'
                                                      + '<br>'
                                                      + '<div style="width:100%;text-align:right;margin:-35px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{IsRead}</div>'
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:right;margin:-20px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{ReadDate}</div>'


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
                                   height: 50,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaNotificationManagement_RecipientList_MenuBottom',
                                  // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                 // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                                 style:GetFooterStyle(),
                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left',
                                   },




                                   // hidden:true,
                                   items:
                                          [
                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  style: "background-color: transparent",
                                                  height: 50,
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'left',
                                                      align: 'left',
                                                  },
                                                  //scrollable: {
                                                  //    direction: 'horizontal',
                                                  //    directionLock: false
                                                  //},
                                                  items: [












                            //  {
                            //      id: 'htmlFloatPanel_AyohaNotificationManagement_RecipientList_ListTypeSearchTxt',
                            //      margin: '0 0 0 0',
                            //      width: '78%',
                            //      height: 20,
                            //      html: '<input type="text" id="input-FloatPanel_AyohaNotificationManagement_RecipientList_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                            //  },

                            {
                                margin: '10 0 0 20',
                               // id:'htmlFloatPanel_AyohaNotificationManagement_RecipientList_count',
                                                           html: '<font size=3 color=black><b>Record Found:</b></font>'
                                                       },
                              {
                                  margin: '10 0 0 3',
                                  id:'htmlFloatPanel_AyohaNotificationManagement_RecipientList_count',
                                                             html: '<font size=3 color=black><b>(0)</b></font>'
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
    return _FloatPanel_AyohaNotificationManagement_RecipientList;



}




function FloatPanel_AyohaNotificationManagement_RecipientListShow(ID) {


    var NotificationCode = _DataStore_AyohaNotificationMasterLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var NotificationCodes = NotificationCode.get('NotificationCode');

    Ext.Viewport.remove(_FloatPanel_AyohaNotificationManagement_RecipientList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotificationManagement_RecipientList());
    this.overlay.show();
    FloatPanel_AyohaNotificationManagement_RecipientList_AyohaNotificationLoadByNotificationCodeStore(NotificationCodes);
    isFloatPanel_AyohaNotificationManagement_RecipientListOpen = 'Y';
    _FloatPanel_AyohaNotificationManagement_RecipientList_isFirstLoad = "Y";
    FloatPanel_AyohaNotificationManagement_RecipientListAdjustHeight();
    document.getElementById("input-FloatPanel_AyohaNotificationManagement_RecipientList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaNotificationManagement_RecipientList_ListTypeSearchTxtOnKeyUp);

}





function FloatPanel_AyohaNotificationManagement_RecipientListHide() {
    _FloatPanel_AyohaNotificationManagement_RecipientList.hide();

    isFloatPanel_AyohaNotificationManagement_RecipientListOpen = 'N';
    _FloatPanel_AyohaNotificationManagement_RecipientList_isFirstLoad = "N";
}




function FloatPanel_AyohaNotificationManagement_RecipientListAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);

    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    //   var adjustedHeight = x - headerHeight;
    var newHeight = x - 90;
    //var bodyMsgHeight01 = x + 17;
    //var bodyMsgHeight02 = bodyMsgHeight01 - x;



    //  var newHeight = adjustedHeight - 80;
    //alert(x)
    // alert(bodyMsgHeight02)


    //900
    //450


    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_RecipientList').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_RecipientListInner').setHeight(newHeight + 60);






}

var globalcountAyohaNotificationLoadByNotification;
var _DataStore_AyohaNotificationLoadByNotificationCodeStore;
function FloatPanel_AyohaNotificationManagement_RecipientList_AyohaNotificationLoadByNotificationCodeStore(NotificationCode) {

 
   
    Ext.getStore('AyohaNotificationLoadByNotificationCodeStore').getProxy().setExtraParams({
        NotificationCode:NotificationCode,
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('AyohaNotificationLoadByNotificationCodeStore').load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaNotificationLoadByNotificationCodeStore').getProxy().setExtraParams({
            NotificationCode: NotificationCode,
            EnterpriseAccNo: GetEnterpriseAccNo()
        });

        _DataStore_AyohaNotificationLoadByNotificationCodeStore= Ext.StoreMgr.get('AyohaNotificationLoadByNotificationCodeStore').load();
        var myStore = Ext.getStore('AyohaNotificationLoadByNotificationCodeStore');
        globalcountAyohaNotificationLoadByNotification = myStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_RecipientList_count').setHtml('<font size="3" color="black"><b>(' + globalcountAyohaNotificationLoadByNotification + ')</b></font>');
        Ext.Viewport.setMasked(false);




    });
    task.delay(800);

}


function FloatPanel_AyohaNotificationManagement_RecipientList_ListTypeSearchTxtOnKeyUp() {

  
    var countRecipientList_List = 0;


    _DataStore_AyohaNotificationLoadByNotificationCodeStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaNotificationManagement_RecipientList_ListTypeSearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaNotificationLoadByNotificationCodeStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _DataStore_AyohaNotificationLoadByNotificationCodeStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_RecipientList_count').setHtml('<font size="3" color="black"><b>(' + countRecipientList_List + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _DataStore_AyohaNotificationLoadByNotificationCodeStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_RecipientList_count').setHtml('<font size="3" color="black"><b>(' + countRecipientList_List + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaNotificationLoadByNotificationCodeStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_RecipientList_count').setHtml('<font size="3" color="black"><b>(' + globalcountAyohaNotificationLoadByNotification + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}