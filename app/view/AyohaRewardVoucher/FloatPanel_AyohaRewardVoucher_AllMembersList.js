Ext.define('ianMizi.view.AyohaRewardVoucher.FloatPanel_AyohaRewardVoucher_AllMembersList', {

});


var _FloatPanel_AyohaRewardVoucher_AllMembersList;


var isFloatPanel_AyohaRewardVoucher_AllMembersListOpen = 'N';



var _FloatPanel_AyohaRewardVoucher_AllMembersList_isFirstLoad = "N";







function FloatPanel_AyohaRewardVoucher_AllMembersList() {

    _FloatPanel_AyohaRewardVoucher_AllMembersList =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaRewardVoucher_AllMembersListID',
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
                                   height: 60,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatPanel_AyohaRewardVoucher_AllMembersListHeader',
                                   style:GetHeaderStyle(),
                                  // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
                                                id: 'htmlFloatPanel_AyohaRewardVoucher_AllMembersListTitleTxt',
                                                html: '<font size=4 color=black><b>All Members List</b></font>'
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
'<input type="text" id="input-FloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxt"  placeHolder="Search (Name/Mobile Phone No)" class="search-input" >'+
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
                                                            id: 'btnFloatPanel_AyohaRewardVoucher_AllMembersListBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatPanel_AyohaRewardVoucher_AllMembersList.hide(Ext.fx.Animation({
                                                                    type: 'popOut',
                                                                   // direction: 'left',
                                                                   // easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_AyohaRewardVoucher_AllMembersListOpen = 'N';
                                                                _FloatPanel_AyohaRewardVoucher_AllMembersList_isFirstLoad = "N";
                                                               // Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">0</div>');
                                                               Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">'+globalFloatPanel_AyohaRewardVoucher_AllMembersList_count+'</div>');
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
                                                             id: 'btnFloatPanel_AyohaRewardVoucher_AllMembersList_PointIcon',
                                                             //badgeText: "2",
                                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/recipientlistwhite.png"  style="width: 30px; height: 30px;  margin:-1px 0px 0px -5px"></div>',
                                                             ui: 'plain',
                                                             handler: function () {



                                                                 _FloatPanel_AyohaRewardVoucher_AllMembersList.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 isFloatPanel_AyohaRewardVoucher_AllMembersListOpen = 'N';
                                                                 _FloatPanel_AyohaRewardVoucher_AllMembersList_isFirstLoad = "N";

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
                                   id: 'containerFloatPanel_AyohaRewardVoucher_AllMembersList',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                   zIndex: 90,
                                   //height:200,
                                   // autoHeight:true,
                                   // height: '100%',
                                   // flex:1,
                                   //  maxHeight:'100%',
                                   //height:'63%',
                                   width: '100%',
                                   margin: '0 0 0 0',

                                   layout: {

                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'
                                   },


                                   items: [













                            //                   {
                            //                       xtype: 'container',
                            //                       width: '100%',
                            //                       height: 30,
                            //                      hidden:true,
                            //                       style: 'background-color:transparent',
                            //                      // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                            //                       layout: {
                            //                           type: 'hbox',
                            //                           pack: 'start',
                            //                           align: 'left'

                            //                       },
                            //                       //height: 50,
                            //                       // margin:'10 0 0 0',
                            //                       items: [

                            //                               //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                            //                               //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                            //                               //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                            //                               //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                            //                               //    '</div></div></div>'

                            //                               {

                            //                                   margin: '0 0 0 10',
                            //                                   id: 'htmlFloatPanel_AyohaRewardVoucher_AllMembersList_Receipients',
                            //                                   html: '<font size="2" color="black"><b>Members List</b></font>',
                            //                                   //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                            //                               },
                                                          






                            //                            {
                            //                                xtype:'spacer'
                            //                            },




                            // //  {
                            // //      id: 'htmlFloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxt',
                            // //      margin: '0 0 0 0',
                            // //      width: '60%',
                            // //      height: 20,
                            // //      html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                            // //  },
                             
                            // //   {

                            // //       id: 'btnFloatPanel_AyohaRewardVoucher_AllMembersList_Search',
                            // //       // hidden: true,
                            // //       //  badgeText: '1',
                            // //       margin: '0 5 0 0',
                            // //       height: 20,
                            // //       width: 20,
                            // //       html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',

                            // //   },

                            //                               //{
                            //                               //    xtype: 'spacer'
                            //                               //},
                            //                               //{

                            //                               //    margin: '0 10 0 0',
                            //                               //    id: 'htmlFloatPanel_AyohaRewardVoucher_AllMembersList_IsRead',
                            //                               //    html: '<font size="2" color="black"><b>IsRead?</b></font>',
                            //                               //    //  html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Recipients</div>'
                            //                               //},
                            //                               //{

                            //                               //    width: '50%',
                            //                               //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                            //                               //},
                            //                               //     //{
                            //                                    //    margin: '-8 0 0 0',

                            //                                    //    html: '<font size=2 color=black>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                            //                                    //},
                            //                                    // {
                            //                                    //     margin: '-7 0 0 0',

                            //                                    //     html: '<font size=2 color=black>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                            //                                    // },


                            //                       ]
                            //                   },




                                        {
                                            xtype: 'list',
                                            //flex: 1,
                                            height: '97%',
                                            //store: 'AyohaUserProfileLoadByEnterpriseAccNoStore',
                                            store:_DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore,
                                            id: 'FloatPanel_AyohaRewardVoucher_AllMembersList_List',
                                            mode: 'SINGLE',
                                            //grouped: true,
                                            disableSelection: true,
                                            style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                                            itemTpl: '<div class="myContent">' +

                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                      + '<br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:black;">{RowNumber}).{AccountName}</div>'
                                                      + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;">{PhoneNo}</div>'
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;">{Email}</div>'
                                                       + '<br>'
                                                      + '<div style="width:100%;text-align:right;margin:-50px 0px 0px -20px;display:block;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;"> <input type="checkbox" class="largerCheckbox" onclick="OnChangeCheckbox (this,{ID})" name="checkbox" /></div>'

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
                                   style:GetFooterStyle(),
                                   id: 'containerFloatPanel_AyohaRewardVoucher_AllMembersList_MenuBottom',
                                   //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
                
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center',
                                   },




                                   // hidden:true,
                                   items:
                                          [
                        
                             {
                                xtype:"spacer",
                                with:20
                                                             },
                            //  {

                            //     id: 'btnFloatPanel_AyohaRewardVoucher_AllMembersList_Search',
                            //     // hidden: true,
                            //     //  badgeText: '1',
                            //     margin: '0 5 0 0',
                            //     height: 20,
                            //     width: 20,
                            //     html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',

                            // },
                            //  {
                            //     id: 'htmlFloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxt',
                            //     margin: '0 0 0 0',
                            //     width: '50%',
                            //     height: 20,
                            //     html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxt" placeHolder="Search (Name)" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                            // },


                            {
                                margin: '0 0 0 0',
                              //  id: 'htmlFloatPanel_AyohaRewardVoucher_AllMembersList_count',
                                html: '<font size=3 color=black><b>Record Found:</b></font>'
                            },
                            
                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaRewardVoucher_AllMembersList_count',
                                html: '<font size=3 color=black><b>(0)</b></font>'
                            },
                            

                             {
xtype:"spacer",
width:"78%"
                             },
                                              {


                                                  // xtype: 'button',
                                                  //  hidden: true,
                                                  id: 'btnFloatPanel_AyohaRewardVoucher_AllMembersList_Select',
                                                  //  badgeText: '1',
                                                  margin: '2 0 0 0',
                                                  //height: 40,
                                                  //width: 135,
                                                  //text: '<button class="buttonsetReceipient">Set Receipients</button>',
                                                  html: '<button OnClick="FloatPanel_AyohaRewardVoucher_AllMembersList_select()" class="buttonsetReceipient" style="margin:0px 0px 0px 0px;">Select</button>',
                                                  //ui: 'confirm',
                                                  //handler: function () {

                                                  //}

                                              },
                                             


                                                         //{
                                                         //    margin: '0 0 0 0',
                                                         //    html: '<font size=3 color=black><b>TARMIZI RAHIM</b></font>'
                                                         //},

                                                         {
                                                            xtype:"spacer",
                                                            with:20
                                                                                         },








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
    return _FloatPanel_AyohaRewardVoucher_AllMembersList;



}




function FloatPanel_AyohaRewardVoucher_AllMembersListShow() {


   

    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucher_AllMembersList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucher_AllMembersList());
    this.overlay.show();
    arrFloatPanel_AyohaRewardVoucher_AllMembersList.length=0;
   // arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length=0;
    isFloatPanel_AyohaRewardVoucher_AllMembersListOpen = 'Y';
    _FloatPanel_AyohaRewardVoucher_AllMembersList_isFirstLoad = "Y";
    FloatPanel_AyohaRewardVoucher_AllMembersListAdjustHeight();
    document.getElementById("input-FloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxt").addEventListener("keyup", FloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxtOnKeyUp);
    //FloatPanel_AyohaRewardVoucher_AllMembersList_AyohaUserProfileLoadByEnterpriseAccNoStore();
    FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo="";
    globalSetVoucherReceipientsID = "";
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = "";
    FloatPanel_AyohaRewardVoucher_AllMembersList_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNo()
  // alert(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo)
}


function FloatPanel_AyohaRewardVoucher_AllMembersList_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNo(){


    if(globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo){
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getProxy().setExtraParam('AccountNo', globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_SubscriberAccNo);
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNo');
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.load();
    }else{
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getProxy().setExtraParam('AccountNo', 'ABC');
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNo');
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.load();  
    }
   
    
    
   
    
    
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();
        for (i = 0; i < count; i++) {
            var modelRecorded = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getAt(i);
            SetVoucherReceipientsID += modelRecorded.get('AccountNo') + ",";
           
        
        }


        var text = SetVoucherReceipientsID.replace("undefined", "");
        globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = text.slice(0, -1) //'abcde
        countRecipientList_List = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();
        globalFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_count=_DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + countRecipientList_List + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_AllMembersList_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
       // alert(globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo)

    });
task.delay(500);
}

function FloatPanel_AyohaRewardVoucher_AllMembersList_AyohaUserProfileLoadByEnterpriseAccNoStore(){

    globalSetVoucherReceipientsID = "";
    SetVoucherReceipientsID = "";
    
    Ext.getStore('AyohaUserProfileLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('AyohaUserProfileLoadByEnterpriseAccNoStore').load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserProfileLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo()
        });

        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore= Ext.StoreMgr.get('AyohaUserProfileLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('AyohaUserProfileLoadByEnterpriseAccNoStore');
        var count = myStore.getCount();
        globalFloatPanel_AyohaRewardVoucher_AllMembersList_count = count;

       // Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_AllMembersList_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">' + count + '</div>');


        if (globalFloatPanel_AyohaRewardVoucher_AllMembersList_count.length > 0) {
            Ext.getCmp('htmlFloatPanel_AyohaNotificationManagement_MembersList_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaRewardVoucher_AllMembersList_count + ')</b></font>');

        }
      


           for (i = 0; i < count; i++) {
               var modelRecorded = myStore.getAt(i);
               var AccountNo = modelRecorded.get('AccountNo');
               var AccountName = modelRecorded.get('AccountName');
               var PhoneNo = modelRecorded.get('PhoneNo');
               var Email = modelRecorded.get('Email');
               var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
               SetVoucherReceipientsID += modelRecorded.get('AccountNo') + ",";
              
           
           }


           var text = SetVoucherReceipientsID.replace("undefined", "");
           globalSetVoucherReceipientsID = text.slice(0, -1) //'abcde'


//alert(globalSetVoucherReceipientsID)
         
        Ext.Viewport.setMasked(false);

      


    });
    task.delay(800);

}






function FloatPanel_AyohaRewardVoucher_AllMembersList_RecipientSpecificMemberLoadByVoucherCodeStore() {

    globalSetVoucherReceipientsID = "";
    SetVoucherReceipientsID = "";
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo="";


    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.removeAll();
    arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.length=0;

    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getProxy().setExtraParam('VoucherCode', globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode);
    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getProxy().setUrl(GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMemberLoadByVoucherCode');
    _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
       

        var globalFloatPanel_AyohaRewardVoucher_AllMembersList_count = _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore.getCount();  
       
      //  Ext.getCmp('htmlFloatPanel_AyohaCardManagementCardCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + count + '</div>');
      var myStore = _DataStore_RecipientSpecificMemberLoadByVoucherCodeStore;
      for (i = 0; i < globalFloatPanel_AyohaRewardVoucher_AllMembersList_count; i++) {
        var modelRecorded = myStore.getAt(i);
        var AccountNo = modelRecorded.get('SubscriberAccNo');
        var AccountName = modelRecorded.get('AccountName');
        var PhoneNo = modelRecorded.get('PhoneNo');
        var Email = modelRecorded.get('Email');
        var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
        SetVoucherReceipientsID += modelRecorded.get('SubscriberAccNo') + ",";

        //alert(AccountNo)
        
        arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.push(AccountNo);
       
    
    }


    var text = SetVoucherReceipientsID.replace("undefined", "");
    globalSetVoucherReceipientsID = text.slice(0, -1) //'abcde'
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo= text.slice(0, -1);
    

    Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">'+globalFloatPanel_AyohaRewardVoucher_AllMembersList_count+'</div>');
      Ext.Viewport.setMasked(false);
        LoadingPanelHide();

    });
    task.delay(700);










}



function FloatPanel_AyohaRewardVoucher_AllMembersListHide() {

    _FloatPanel_AyohaRewardVoucher_AllMembersList.hide();

    isFloatPanel_AyohaRewardVoucher_AllMembersListOpen = 'N';
    _FloatPanel_AyohaRewardVoucher_AllMembersList_isFirstLoad = "N";
    Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_SetVoucherRecipents_MenuBottom_Count').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 20px;font-weight:bold;color:black;height:20px">0</div>');

}




function FloatPanel_AyohaRewardVoucher_AllMembersListAdjustHeight() {
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


    Ext.getCmp('containerFloatPanel_AyohaRewardVoucher_AllMembersList').setHeight(newHeight);
    //  Ext.getCmp('containerFloatPanel_AyohaRewardVoucher_AllMembersListInner').setHeight(newHeight + 60);






}




function FloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxtOnKeyUp() {


    var countRecipientList_List = 0;


    _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaRewardVoucher_AllMembersList_ListTypeSearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('AccountName'))) {
                console.log('ada0');

                countRecipientList_List = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();
                Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_AllMembersList_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countRecipientList_List = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_AllMembersList_count').setHtml('<font size="2" color="black"><b>(' + countRecipientList_List + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.clearFilter();
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucher_AllMembersList_count').setHtml('<font size="2" color="black"><b>(' + globalFloatPanel_AyohaRewardVoucher_AllMembersList_count + ')</b></font>');
        //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }

}

var arrFloatPanel_AyohaRewardVoucher_AllMembersList = [];
var arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal = [];
function OnChangeCheckbox(checkbox, ID) {


   




    var AccountNo = _DataStore_AyohaUserProfileLoadByEnterpriseAccNoAndNotInSubscriberAccNoStore.findRecord('ID', ID, 0, false, false, true);
    var PAccountNos = AccountNo.get('AccountNo');


    var n = arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.includes(PAccountNos);

    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);
        if (n) {
           // alert("already Exist!");
            swalFireWarning("Data already selected!");
            checkbox.checked = false;
            
        } else {
            arrFloatPanel_AyohaRewardVoucher_AllMembersList.push(PAccountNos);
            arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.push(PAccountNos);
        }
    
    }
    else {
      //  alert("The check box is not checked.");
        var index = arrFloatPanel_AyohaRewardVoucher_AllMembersList.indexOf(PAccountNos);
        if (index > -1) {
            arrFloatPanel_AyohaRewardVoucher_AllMembersList.splice(index, 1);
        }
        var indexs = arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.indexOf(PAccountNos);
        if (indexs > -1) {
            arrFloatPanel_AyohaRewardVoucher_AllMembersList_CheckingVal.splice(indexs, 1);
        }
    }


 //alert(arrFloatPanel_AyohaRewardVoucher_AllMembersList);
}





var FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo;
var globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo;

function FloatPanel_AyohaRewardVoucher_AllMembersList_select() {
  
    if (arrFloatPanel_AyohaRewardVoucher_AllMembersList.length <= 0) {
       swalFireFail("No Recipient Selected!");
       // FloatPanel_AyohaRewardVoucher_AllMembersListHide();
        return;
    }
   
    if (arrFloatPanel_AyohaRewardVoucher_AllMembersList) {
       
     }else{
        swalFireFail("No Recipient Selected!");
        // FloatPanel_AyohaRewardVoucher_AllMembersListHide();
         return;
     }

//alert(arrFloatPanel_AyohaRewardVoucher_AllMembersList.length)

    FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = "";
    globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = "";
    if (arrFloatPanel_AyohaRewardVoucher_AllMembersList.length > 0) {
        for (i = 0; i < arrFloatPanel_AyohaRewardVoucher_AllMembersList.length; i++) {
           // ori FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo += arrFloatPanel_AyohaRewardVoucher_AllMembersList[i] + ",";
           globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo += arrFloatPanel_AyohaRewardVoucher_AllMembersList[i] + ",";
          // alert(globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo)
       
        }


       // var text = FloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo.replace("undefined", "");
        var text = globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo.replace("undefined", "");
        globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = text.slice(0, -1) //'abcde'


       // alert(globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo)
    } else {
        globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo = "";
    }

  
   //alert(globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo)
    
    var objn = {
        "VoucherCode": globalFloatPanel_AyohaRewardVoucher_VoucherRecipents_VoucherCode,
        "SubscriberAccNo": globalFloatPanel_AyohaRewardVoucher_AllMembersList_SubscriberAccNo,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedBy": GetCurrAyohaEnterpriseUserAccountNo(),

    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/RecipientSpecificMember/RecipientSpecificMember_Voucher_Insert',
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
                FloatPanel_AyohaRewardVoucher_AllMembersListHide();
               // arrFloatPanel_AyohaRewardVoucher_AllMembersList.length = 0;
                FloatPanel_AyohaRewardVoucher_AllMembersList_RecipientSpecificMemberLoadByVoucherCodeStore();
               
               
               
               
               
               
                //FloatPanel_AyohaRewardVoucher_AllMembersList_RecipientSpecificMemberLoadByNotificationCodeStore();               
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



