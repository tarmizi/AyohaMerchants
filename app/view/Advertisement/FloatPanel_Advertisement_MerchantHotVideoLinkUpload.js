Ext.define('ianMizi.view.Advertisement.FloatPanel_Advertisement_MerchantHotVideoLinkUpload', {

});




var _FloatPanel_Advertisement_MerchantHotVideoLinkUpload;
var is_FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow = 'N';


function FloatPanel_Advertisement_MerchantHotVideoLinkUpload() {

    _FloatPanel_Advertisement_MerchantHotVideoLinkUpload = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_Advertisement_MerchantHotVideoLinkUploadID',           
            zIndex: 500,
            xtype: 'container',
            // height: 580,
            height: '45%',
            width: '95%',
            draggable: false,

            styleHtmlContent: true,

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
                duration: 250,
                easing: 'ease-out'
            },

            style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

           // style: ' background-color: white;',
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
                items: [


                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        margin: '0 0 0 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_Advertisement_MerchantHotVideoLinkUploadCardBack',
                                 height: 30,
                                 width: 35,
                                 // iconCls: 'list',
                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                 ui: 'plain',
                                 handler: function () {

                                     _FloatPanel_Advertisement_MerchantHotVideoLinkUpload.hide(Ext.fx.Animation({
                                         type: 'slideOut',
                                         direction: 'left',
                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                         duration: 250

                                     }));
                                     is_FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow = 'N';
                                 }
                             },
                             {
                                 xtype: 'spacer',
                                
                             },
                                          {
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_Advertisement_MerchantHotVideoLinkUploadHeaderTxt',
                                              html: '<font size=2 color=white><b>Ayoha Hot Merchant Video</b></font>'
                                          },
                        ]
                    },
























                     {

                         xtype: 'container',
                         margin: '0 0 0 0',
                         width: '100%',
                         height:200,
                         style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center'
                         },
                         items: [
                           {
                               xtype: 'container',
                               width: '98%',
                               margin: '10 0 0 0',
                               height: 185,
                               layout: {
                                   type: 'vbox',


                               },
                               style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                               items: [
                                   {
                                       margin: '0 0 0 10',
                                       html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Video Source URL Option</div>'
                                   },
                                   {
                                       xtype: 'radiofield',
                                       name: 'color',
                                       id: 'radioBtnFloatPanel_Advertisement_MerchantHotVideoLinkUpload_TikTok',
                                       value: 'TikTok',
                                       label: 'Tik Tok',
                                       checked:true,
                                       style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                       labelWidth: '80%',
                                       labelAlign: 'right',
                                       listeners: {
                                           check: function (radioFld, event, obj) {
                                               if (radioFld.isChecked()) {
                                                   
                                                   globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_Option = "TikTok";
                                                   Ext.getCmp('htmFloatPanel_Advertisement_MerchantHotVideoLink_VideoSourceURL').setHtml('<font size=2 color=white>*Tik Tok Video Source URL Link</font>');


                                               }
                                           }
                                       }
                                   },

                                    {
                                        xtype: 'radiofield',
                                        name: 'color',
                                        id: 'radioBtnFloatPanel_Advertisement_MerchantHotVideoLinkUpload_FB',
                                        value: 'FB',
                                        label: 'Facebook',
                                        labelWidth: '80%',
                                        labelAlign: 'right',
                                        listeners: {
                                            check: function (radioFld, event, obj) {
                                                if (radioFld.isChecked()) {
                                                    Ext.getCmp('htmFloatPanel_Advertisement_MerchantHotVideoLink_VideoSourceURL').setHtml('<font size=2 color=white>*Facebook Video Source URL Link</font>');
                                                    globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_Option = "Facebook";
                                                }
                                            }
                                        }
                                    },
                                             {
                                                 xtype: 'radiofield',
                                                 name: 'color',
                                                 id: 'radioBtnFloatPanel_Advertisement_MerchantHotVideoLinkUpload_Instagram',
                                                 value: 'Instagram',
                                                 label: 'Instagram',
                                                 labelWidth: '80%',
                                                 labelAlign: 'right',
                                                 listeners: {
                                                     check: function (radioFld, event, obj) {
                                                         if (radioFld.isChecked()) {
                                                             Ext.getCmp('htmFloatPanel_Advertisement_MerchantHotVideoLink_VideoSourceURL').setHtml('<font size=2 color=white>*Instagram Video Source URL Link</font>');
                                                             globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_Option = "Instagram";
                                                            
                                                         }
                                                     }
                                                 }
                                             },
                                                      {
                                                          xtype: 'radiofield',
                                                          name: 'color',
                                                          id: 'radioBtnFloatPanel_Advertisement_MerchantHotVideoLinkUpload_Youtube',
                                                          value: 'Youtube',
                                                          label: 'Youtube',
                                                          labelWidth: '80%',
                                                          labelAlign: 'right',
                                                          listeners: {
                                                              check: function (radioFld, event, obj) {
                                                                  if (radioFld.isChecked()) {
                                                                      Ext.getCmp('htmFloatPanel_Advertisement_MerchantHotVideoLink_VideoSourceURL').setHtml('<font size=2 color=white>*Youtube Video Source URL Link</font>');
                                                                      globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_Option = "Youtube";
                                                                  }
                                                              }
                                                          }
                                                      },
                                                       //{
                                                       //    xtype: 'radiofield',
                                                       //    name: 'color',
                                                       //    id: 'radioBtnFloatPanel_Advertisement_MerchantHotVideoLinkUpload_Upload',
                                                       //    value: 'Upload',
                                                       //    label: 'Upload',
                                                       //    labelWidth: '80%',
                                                       //    labelAlign: 'right',
                                                       //    listeners: {
                                                       //        check: function (radioFld, event, obj) {
                                                       //            if (radioFld.isChecked()) {
                                                       //                Ext.getCmp('htmFloatPanel_Advertisement_MerchantHotVideoLink_VideoSourceURL').setHtml('<font size=2 color=white>*Upload Video </font>');

                                                       //            }
                                                       //        }
                                                       //    }
                                                       //},
                                                  
                                               
                               ]
                           },

                         ]

                     },

                            {
                                xtype: 'container',
                                margin: '10 0 0 0',
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
                                                  id: 'htmFloatPanel_Advertisement_MerchantHotVideoLink_VideoSourceURL',
                                                  html: '<font size=2 color=white>*Tik Tok Video Source URL Link</font>',

                                              },
                                              {
                                                  xtype:'spacer'
                                              },
                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_Advertisement_MerchantHotVideoLinkUpload_UploadBackgroundImage',
                                                  name: 'clickablebtnFloatPanel_Advertisement_MerchantHotVideoLinkUpload_UploadBackgroundImage',
                                                  //  badgeText: '1',
                                                  margin: '0 0 -10 0',
                                                  height: 35,
                                                  width: 35,
                                                  html: '<img class="blink_me"  src="resources/icons/ballonInfoIconWhite.png" width="25" height="25" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {

                                                  }
                                              },

                                        ]
                                    },









                              {

                                  margin: '-2 0 0 0',
                                  width: '100%',
                                  height: 20,
                                  html: '<input type="text" id="inputName-FloatPanel_Advertisement_MerchantHotVideoLinkUpload_Url"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                              },
                             
                                ]

                            },



                     {
                         xtype: 'container',
                         //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                         id: 'ContainerFloatPanel_Advertisement_MerchantHotVideoLinkUploadUploadImage',
                         height: 45,
                         docked: 'bottom',
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
                                                                         xtype: 'button',
                                                                         //  align: 'stretch',

                                                                         ui: 'plain',
                                                                         width: '50%',
                                                                         height: 35,
                                                                         margin: '7 0 0 0',
                                                                         id: 'btnFloatPanel_Advertisement_MerchantHotVideoLinkUpload_Save',
                                                                         // width: '80%',
                                                                         //style: {
                                                                         //    background: '#FA8072',
                                                                         //},
                                                                         // padding: '10px',
                                                                         //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                                                                         text: '<button class="buttonStampCampaignCreate">Save</button>',

                                                                         handler: function () {
                                                                             var MerchantHotVideoLinkUpload_Url = document.getElementById('inputName-FloatPanel_Advertisement_MerchantHotVideoLinkUpload_Url').value;





                                                                             if (MerchantHotVideoLinkUpload_Url) {
                                                                                 FloatPanel_Advertisement_MerchantHotVideoLinkUpload_Save();
                                                                                

                                                                             } else {

                                                                                 swalFireFail(globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_Option+" Video Source URL Not Valid!");

                                                                             }




                                                                         },


                                                                     },
                                                                     

                                                                 ]
                                                             },


                         ]
                     },




                     //////////////








                     /////////
































                ]

            },






        });

    return _FloatPanel_Advertisement_MerchantHotVideoLinkUpload;
}


function FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow() {
    Ext.Viewport.remove(_FloatPanel_Advertisement_MerchantHotVideoLinkUpload);
    this.overlay = Ext.Viewport.add(FloatPanel_Advertisement_MerchantHotVideoLinkUpload());
    this.overlay.show();
    is_FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow = 'Y';
  

}
function FloatPanel_Advertisement_MerchantHotVideoLinkUploadHide() {
    if (is_FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow == 'Y') {
        _FloatPanel_Advertisement_MerchantHotVideoLinkUpload.hide();
        is_FloatPanel_Advertisement_MerchantHotVideoLinkUploadShow = 'N';
    }

}
var globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_Option;
var globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AdvertismentTypeCode;
var globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AyohaHotMerchant_Code;
function FloatPanel_Advertisement_MerchantHotVideoLinkUpload_Save() {

 

    var obj = {
        "ID": 0,
        "AyohaHotMerchant_Description": document.getElementById('input-FloatPanel_AdvertisementSetting_Desc').value,
        "AyohaHotMerchant_Code": globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AyohaHotMerchant_Code,
        "AyohaHotMerchant_Status": "Draf",
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "StartDate": document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value,
        "EndDate": document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value,
        "CreatedBy": GetCurrentAccountNo(),
        "AyohaHotMerchant_SourceURL": document.getElementById('inputName-FloatPanel_Advertisement_MerchantHotVideoLinkUpload_Url').value,
        "AdvertismentTypeCode": globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_AdvertismentTypeCode,
        "AyohaHotMerchant_Option": globalFloatPanel_Advertisement_MerchantHotVideoLinkUploadAyohaHotMerchant_Option,
        "AdvertisementPeriodDay": document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value,
        "RowStatus": "Active",

        
    };

    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantInsertUpdateMerchant',

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
                swalFireFail("Add Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Add Failed!!");
        }

    });




    //}

}








