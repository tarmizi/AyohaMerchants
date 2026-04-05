Ext.define('ianMizi.view.AyohaNotificationManagement.FloatPanel_AyohaNotificationManagement_MembersList', {

});


var _FloatPanel_AyohaNotificationManagement_MembersList;


var isFloatPanel_AyohaNotificationManagement_MembersListOpen = 'N';



var _FloatPanel_AyohaNotificationManagement_MembersList_isFirstLoad = "N";







function FloatPanel_AyohaNotificationManagement_MembersList() {

    _FloatPanel_AyohaNotificationManagement_MembersList =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaNotificationManagement_MembersListID',
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
         style: 'background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',



         items: [




             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 style: 'background-color: transparent;',
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
                                   height: 50,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaNotificationManagement_MembersListHeader',
                                   style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                                id: 'htmlFloatPanel_AyohaNotificationManagement_MembersListTitleTxt',
                                                html: '<font size=3 color=black><b>All Members List</b></font>'
                                            },

                                                     

                                                         {
                                                             xtype: 'spacer',

                                                         },
                                                         {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_AyohaNotificationManagement_MembersListBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaNotificationManagement_MembersList.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                   // direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaNotificationManagement_MembersListOpen = 'N';
                                                                _FloatPanel_AyohaNotificationManagement_MembersList_isFirstLoad = "N";
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
                                                             id: 'btnFloatPanel_AyohaNotificationManagement_MembersList_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaNotificationManagement_MembersList.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaNotificationManagement_MembersListOpen = 'N';
                                                                 _FloatPanel_AyohaNotificationManagement_MembersList_isFirstLoad = "N";

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
                                   id: 'containerFloatPanel_AyohaNotificationManagement_MembersList',
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
                                                 // hidden:true,
                                                  style: 'background-color:transparent',
                                                 // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
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
                                                              id: 'htmlFloatPanel_AyohaNotificationManagement_MembersList_Receipients',
                                                              html: '<font size="2" color="black"><b>Members List</b></font>',
                                                              //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                                                          },
                                                           {
                                                               margin: '0 0 0 0',
                                                               id: 'htmlFloatPanel_AyohaNotificationManagement_MembersList_count',
                                                               html: '<font size=2 color=black><b>(0)</b></font>'
                                                           },






                                                       {
                                                           xtype:'spacer'
                                                       },




                             {
                                 id: 'htmlFloatPanel_AyohaNotificationManagement_MembersList_ListTypeSearchTxt',
                                 margin: '0 0 0 0',
                                 width: '60%',
                                 height: 20,
                                 html: '<input type="text" id="input-FloatPanel_AyohaNotificationManagement_MembersList_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                             },
                             
                              {

                                  id: 'btnFloatPanel_AyohaNotificationManagement_MembersList_Search',
                                  // hidden: true,
                                  //  badgeText: '1',
                                  margin: '0 5 0 0',
                                  height: 20,
                                  width: 20,
                                  html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',

                              },

                                                          //{
                                                          //    xtype: 'spacer'
                                                          //},
                                                          //{

                                                          //    margin: '0 10 0 0',
                                                          //    id: 'htmlFloatPanel_AyohaNotificationManagement_MembersList_IsRead',
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
                                            // height: '81%',
                                            store: 'AyohaUserProfileLoadByEnterpriseAccNoStore',
                                            id: 'FloatPanel_AyohaNotificationManagement_MembersList_List',
                                            mode: 'SINGLE',
                                            //grouped: true,
                                            disableSelection: true,
                                            itemTpl: '<div class="myContent">' +

                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                      + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:black;">{RowNumber}).{AccountName}</div>'
                                                      + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{PhoneNo}</div>'
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;">{Email}</div>'
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:right;margin:-50px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="largerCheckbox" onclick="OnChangeCheckbox_AyohaNotificationManagement_Memberlist(this,{ID})" name="checkbox" /></div>'

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
                                   height: 55,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaNotificationManagement_MembersList_MenuBottom',
                                   //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                   style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                                   layout: {
                                       type: 'vbox',
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
                             //                               id: 'btnFloatPanel_AyohaNotificationManagement_MembersList_Search',
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
                             //    id: 'htmlFloatPanel_AyohaNotificationManagement_MembersList_ListTypeSearchTxt',
                             //    margin: '0 0 0 0',
                             //    width: '78%',
                             //    height: 20,
                             //    html: '<input type="text" id="input-FloatPanel_AyohaNotificationManagement_MembersList_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                             //},

                             




                             //                     ]
                             //                 },


                                              {


                                                  // xtype: 'button',
                                                  //  hidden: true,
                                                  id: 'btnFloatPanel_AyohaNotificationManagement_MembersList_Select',
                                                  //  badgeText: '1',
                                                  margin: '2 0 0 0',
                                                  //height: 40,
                                                  //width: 135,
                                                  //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                  html: '<button OnClick="FloatPanel_AyohaNotificationManagement_MembersList_select()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Select</button>',
                                                  //ui: 'confirm',
                                                  //handler: function () {

                                                  //}

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
    return _FloatPanel_AyohaNotificationManagement_MembersList;



}




function FloatPanel_AyohaNotificationManagement_MembersListShow() {


   

    Ext.Viewport.remove(_FloatPanel_AyohaNotificationManagement_MembersList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotificationManagement_MembersList());
    this.overlay.show();
   
    isFloatPanel_AyohaNotificationManagement_MembersListOpen = 'Y';
    _FloatPanel_AyohaNotificationManagement_MembersList_isFirstLoad = "Y";
    FloatPanel_AyohaNotificationManagement_MembersListAdjustHeight();
    document.getElementById("input-FloatPanel_AyohaNotificationManagement_MembersList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaNotificationManagement_MembersList_ListTypeSearchTxtOnKeyUp);
    FloatPanel_AyohaNotificationManagement_SetRecipient_AyohaUserProfileLoadByEnterpriseAccNoStore();
    FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo="";
    globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
   
}





function FloatPanel_AyohaNotificationManagement_MembersListHide() {
    _FloatPanel_AyohaNotificationManagement_MembersList.hide();

    isFloatPanel_AyohaNotificationManagement_MembersListOpen = 'N';
    _FloatPanel_AyohaNotificationManagement_MembersList_isFirstLoad = "N";
}




function FloatPanel_AyohaNotificationManagement_MembersListAdjustHeight() {
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


    Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_MembersList').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaNotificationManagement_MembersListInner').setHeight(newHeight + 60);






}




function FloatPanel_AyohaNotificationManagement_MembersList_ListTypeSearchTxtOnKeyUp() {


    var countRecipientList_List = 0;


    _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaNotificationManagement_MembersList_ListTypeSearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_MembersList_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_MembersList_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_MembersList_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaNotificationManagement_SetRecipient_count + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}

var arrFloatPanel_AyohaNotificationManagement_MembersList = [];
var arrFloatPanel_AyohaNotificationManagement_MembersList_CheckingVal = [];
function OnChangeCheckbox_AyohaNotificationManagement_Memberlist(checkbox, ID) {


   




    var AccountNo = _Data_Store_AyohaUserProfileLoadByEnterpriseAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var PAccountNos = AccountNo.get('AccountNo');
    var n = arrFloatPanel_AyohaNotificationManagement_MembersList_CheckingVal.includes(PAccountNos);

    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);
        if (n) {
           // alert("already Exist!");
            swalFireWarning("Data already selected!");
            checkbox.checked = false;
            
        } else {
            arrFloatPanel_AyohaNotificationManagement_MembersList.push(PAccountNos);
            arrFloatPanel_AyohaNotificationManagement_MembersList_CheckingVal.push(PAccountNos);
        }
    
    }
    else {
      //  alert("The check box is not checked.");
        var index = arrFloatPanel_AyohaNotificationManagement_MembersList.indexOf(PAccountNos);
        if (index > -1) {
            arrFloatPanel_AyohaNotificationManagement_MembersList.splice(index, 1);
        }
        var indexs = arrFloatPanel_AyohaNotificationManagement_MembersList_CheckingVal.indexOf(PAccountNos);
        if (indexs > -1) {
            arrFloatPanel_AyohaNotificationManagement_MembersList_CheckingVal.splice(indexs, 1);
        }
    }


    console.log(arrFloatPanel_AyohaNotificationManagement_MembersList);
}





var FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo;
var globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo;

function FloatPanel_AyohaNotificationManagement_MembersList_select() {
   
    if (arrFloatPanel_AyohaNotificationManagement_MembersList.length <= 0) {
       swalFireFail("No Recipient Selected!");
        FloatPanel_AyohaNotificationManagement_MembersListHide();
        return;
    }
   




    FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    if (arrFloatPanel_AyohaNotificationManagement_MembersList.length > 0) {
        for (i = 0; i < arrFloatPanel_AyohaNotificationManagement_MembersList.length; i++) {
            FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo += arrFloatPanel_AyohaNotificationManagement_MembersList[i] + ",";
        }


        var text = FloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo.replace("undefined", "");
        globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = text.slice(0, -1) //'abcde'
    } else {
        globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo = "";
    }

    console.log(globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo);


   
    
    var objn = {
        "NotificationCode": GetNotificationCode(),
        "SubscriberAccNo": globalFloatPanel_AyohaNotificationManagement_MembersList_SubscriberAccNo,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),

    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberInsert',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                //swalFireSuccess("Push Notification Processed Successfully!");
                FloatPanel_AyohaNotificationManagement_MembersListHide();
                arrFloatPanel_AyohaNotificationManagement_MembersList.length = 0;
                FloatPanel_AyohaNotificationManagement_SetRecipient_RecipientSpecificMemberLoadByNotificationCodeStore();               
            }
            else {
                swalFireFail("Failed!" + result.responseText.trim());
            }

            Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            Ext.Viewport.unmask();
            swalFireFail("Failed!" + result.responseText.trim());
        }

    });

}



