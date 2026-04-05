Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point', {

});




var _FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point;

function FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point() {

    _FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointID',
            // xtype: 'panel',
            zIndex: 500,
            xtype: 'container',
            height: '83%',
            //  height: '60%',
            width: 400,
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            hideOnMaskTap: false,
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

            style: 'background-color:white;',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: 'background-color: transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators: false
                },
                width: '100%',
                height: '100%',
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked: 'top',
                        height: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointHeader',
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
                                    width:10
                                },
                                {
                                    margin: '0 0 0 0',
                                    html: '<font size=3 color=black><b>Add Redeem Item </b></font>'
                                },
                                           

                                              {
                                                  xtype: 'spacer',

                                              },


                                              {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointCardBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    _FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                        //direction: 'left',
                                                        //easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    is_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointOpen = 'N';

                                                }
                                            },
                                               

                                                {
                                                    xtype: 'spacer',
                                                    width:10
                                                },

                                                 {
                                                     xtype: 'button',
                                                     //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                     height: 30,
                                                     width: 35,
                                                     hidden:true,
                                                     // iconCls: 'list',
                                                     html: '<div ><img src="resources/icons/AddNewMembershipCardWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         _FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point.hide(Ext.fx.Animation({
                                                             type: 'slideOut',
                                                             direction: 'right',
                                                             easing: 'cubic-bezier(.7,0,.7,1)',
                                                             duration: 250

                                                         }));
                                                         is_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointOpen = 'N';
                                                     }
                                                 },







                               ]

                    },


                    {
                        xtype: 'container',
                      //  margin: '9 0 0 0',
                        docked:'bottom',
                        height:40,
                        width: '100%',
                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                        layout: {
                            type: 'hbox',
                            pack: 'right',
                            align: 'right'
            
                        },
                        items: [
                    {
                        xtype: 'button',
                        //  align: 'stretch',
                        hidden: true,
                        id: 'btnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Save',
                        ui: 'plain',
                        width: '30%',
                        height: 50,
                        margin: '0 -5 -8 0',
                        // width: '80%',
                        //style: {
                        //    background: '#FA8072',
                        //},
                        // padding: '10px',
                        //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                        text: '<button class="buttonSave_web">Save</button>',
            
                        handler: function () {
                            FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Save();
                            //FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Save();
                        },
            
            
                    },
            
            
            
                    {
                        xtype: 'button',
                        hidden: true,
                        //  align: 'stretch',
                        id: 'btnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Edit',
                        ui: 'plain',
                        width: '30%',
                        height: 50,
                        margin: '0 -5 -8 0',
                        // width: '80%',
                        //style: {
                        //    background: '#FA8072',
                        //},
                        // padding: '10px',
                        //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                        text: '<button class="buttonSave_web">Save</button>',
            
                        handler: function () {
            
                            FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Edit();
                        },
            
            
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

                                  html: '<font size=2 color=black>*Item Name</font>',

                              },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemName"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },



                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=black>*Item Point</font>',

                          },

                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="number" id="input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemPoint"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },

                         

                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=black>*Item Cost</font>',

                          },
                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="number" id="input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemPrizeCost"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },



                          {
                              xtype: 'container',
                              width: '100%',
                              margin: '10 0 0 0',
                              hidden: true,
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

                                                       html: '<font size=2 color=black>Item User Group</font>',

                                                   },



                                                   ]
                                               },




                          {
                              margin: '-2 0 0 0',
                              width: '100%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemUserGropCategory"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">',
                              hidden: true
                          },


                                           ]

                                       },


                                        //{
                                        //    xtype:'container'

                                        //},
                                          {
                                              xtype: 'button',
                                              //  id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelTypeInfo',
                                              //  badgeText: '1',
                                              margin: '0 0 -10 0',
                                              height: 35,
                                              width: 35,
                                              html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                              ui: 'plain',
                                              hidden: true,
                                              handler: function () {
                                                  FloatPanel_AyohaUserGroupShow();
                                                  //                                                  Swal.fire(
                                                  //  'Membership Card Level',
                                                  //  'Allow merchant to create his/her own card level, such GOLD,SILVER,BRONZE level.its up to merchant to define type of level.',
                                                  //  'info'
                                                  //)
                                              }
                                          },

                              ]

                          },






                          {
                              margin: '3 0 0 0',
                              hidden: true,
                              html: '<font size=2 color=black>Item AyohaUserGroupCode</font>',

                          },
                          {
                              hidden: true,
                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_AyohaUserGroupCode"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },




                         















          {

              margin: '5 0 0 0',
              html: '<font size=2 color=black>Item Image</font>',

          },

         {

             xtype: 'container',
             style: ' background-color:transparent',
             margin: '5 0 0 0',
             width: '100%',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'
             },
             items: [
                 {

                     id: 'FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemImage',
                     // iconCls: 'list',
                     html: '<div ><img src="resources/icons/goldcardbg.jpeg" style="width:100%;height:250px;border-radius:10px 10px 10px 10px;" alt="Company Name"></div>',

                 },

             ]

         },

         {
             xtype: 'container',
             style: ' background-color:transparent',
             id: 'ContainerFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemUploadImage',
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

                                                    html: '<font size=1 color=black>*Uploaded Image limit to < 2MB</font>',

                                                },


                                          ]
                                      },


                   {
                       id: 'HtmlinputImgFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage',
                       hidden: true,
                       margin: '0 0 0 0',
                       width: '100%',
                       html: '<input type="file" id="inputImg-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage" accept="image/*"  onchange="inputImgFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                       //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                   },






                                {

                                    margin: '-2 0 0 0',
                                    width: '105%',
                                    height: 20,
                                    html: '<input type="text" id="inputName-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage" readOnly style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                                },

                                  ]

                              },


                               //{
                               //    xtype:'container'

                               //},
                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadBackgroundImage',
                                     name: 'clickablebtnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadBackgroundImage',
                                     //  badgeText: '1',
                                     margin: '0 0 -10 0',
                                     height: 35,
                                     width: 35,
                                     html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                     ui: 'plain',
                                     handler: function () {

                                     }
                                 },

                     ]

                 },

             ]
         },





          {
              margin: '3 0 0 0',

              html: '<font size=2 color=black>Item Remarks</font>',

          },
                          {

                              margin: '-2 0 0 0',
                              width: '100%',
                              height: 80,
                              html: '<textarea id="input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemRemarks"  style="border: 1px solid black;color:black;text-align: left;font-size:12px;background-color: transparent;width:99%;height:80px;" wrap="hard" >'
                          },











       



































                        ]
                    },


                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point;
}



function FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointOpen = 'Y';





    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointItemImage();
      }
    );

    Ext.getCmp('btnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Save').setHidden(false);


}

var globalFloatPanel_AyohaAddEditShowEditID;
var globalFloatPanel_AyohaAddEditShowEditItemCode;
function FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointShow_Edit(val) {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointOpen = 'Y';





    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointItemImage();
      }
    );



    Ext.getCmp('btnFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Edit').setHidden(false);



    var ID = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ImgPath = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var AyohaUserGroupCode = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemName = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ModifiedItemCode = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemPoint = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemImg = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var Remarks = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemPrizePriceCost = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    var AyohaUserGroupCategory = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);


    //ID.get('ID');
    //ImgPath.get('ImgPath');









    Ext.getCmp('FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemImage').setHtml('<div ><img src="' + ImgPath.get('ImgPath') + '"  style="width:100%;height:250px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');


    document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_AyohaUserGroupCode').value = AyohaUserGroupCode.get('AyohaUserGroupCode');
    document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemName').value = ItemName.get('ItemName');
    document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemPrizeCost').value = ItemPrizePriceCost.get('ItemPrizePriceCost');
    document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemUserGropCategory').value = AyohaUserGroupCategory.get('AyohaUserGroupCategory');
    document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemPoint').value = ItemPoint.get('ItemPoint');
    document.getElementById('inputName-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage').value =ItemImg.get('ItemImg');
    globalFloatPanel_AyohaAddEditShowEditID = ID.get('ID');
    globalFloatPanel_AyohaAddEditShowEditItemCode = ModifiedItemCode.get('ModifiedItemCode');
    document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemRemarks').value = Remarks.get('Remarks');
    globalFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage = ItemImg.get('ItemImg');

}







function FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointItemImage() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage").click();
    });
}
var globalFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage;
function inputImgFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
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
                    globalFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage = event.target.result;
                    document.getElementById('inputName-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage').value = fileName;


                    Ext.getCmp('FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemImage').setHtml('<div ><img src="' + globalFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage + '"  style="width:100%;height:250px;border-radius:10px 10px 10px 10px;"  alt="Company Name"></div>');


                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}
var is_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointOpen = 'N';

function FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointHide() {
    if (is_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointOpen == 'Y') {
        _FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point.hide();
        is_FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointOpen = 'N';
    }

}




function FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Save() {

    var ItemName = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemName').value;
    var ItemPrizeCost = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemPrizeCost').value;
    var ItemUserGropCategory = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemUserGropCategory').value;
    var ItemPoint = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemPoint').value;
    var UploadedImage = document.getElementById('inputName-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage').value;
    var remark = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemRemarks').value;


    if (ItemName.length < 2) {
        swalFireFail("ItemName Not Valid!!")
        return
    }

    if (ItemPrizeCost.length < 1) {
        swalFireFail("ItemPrizeCost Not Valid!!")
        return
    }


    //if (ItemUserGropCategory.length < 2) {
    //    swalFireFail("ItemUserGropCategory Not Valid!!")
    //    return
    //}

    if (ItemPoint.length < 2) {
        swalFireFail("ItemPoint Not Valid!!")
        return
    }

    var imgbase64;

    if (globalFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage) {
        imgbase64 = globalFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage;
    } else {
        imgbase64 = "ExistingImage";
    }

    if (remark) {
        remark = remark;
    } else {
        remark = "NA";
    }

  

    var obj = {
        "ID": 0,
        "Img64": imgbase64,
        "AyohaUserGroupCode": "01",
        "ItemName": ItemName,
        "ItemCode": GenerateRandomNo() + '-' + GetEnterpriseAccNo(),
        "ItemPoint": ItemPoint,
        "ItemImg": UploadedImage,
        "RowStatus": 'Active',
        "CreatedBy": document.getElementById('UN').value,
        "Remarks": remark,
        "ItemPrizePriceCost": ItemPrizeCost,
        "AyohaUserGroupCategory": "General",
        "PointCampaignCode":document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
        "EnterpriseAccNo":GetEnterpriseAccNo(),

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/PointCampaignRedeemItemSetting/PointCampaignRedeemInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Successfully!");
                Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignRedeemLoadByPointCampaignCodeStore();

            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }
            FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointHide();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });




}




function FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_Edit() {


    var ItemName = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemName').value;
    var ItemPrizeCost = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemPrizeCost').value;
    var ItemUserGropCategory = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemUserGropCategory').value;
    var ItemPoint = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemPoint').value;
    var UploadedImage = document.getElementById('inputName-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage').value;
    var remark = document.getElementById('input-FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_ItemRemarks').value;


    if (ItemName.length < 2) {
        swalFireFail("ItemName Not Valid!!")
        return
    }

    if (ItemPrizeCost.length < 1) {
        swalFireFail("ItemPrizeCost Not Valid!!")
        return
    }


    //if (ItemUserGropCategory.length < 2) {
    //    swalFireFail("ItemUserGropCategory Not Valid!!")
    //    return
    //}

    if (ItemPoint.length < 2) {
        swalFireFail("ItemPoint Not Valid!!")
        return
    }

    var imgbase64;

    if (globalFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage) {
        imgbase64 = globalFloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_Point_UploadedImage;
    } else {
        imgbase64 = "ExistingImage";
    }

    if (remark) {
        remark = remark;
    } else {
        remark = "NA";
    }



    var obj = {
        "ID": globalFloatPanel_AyohaAddEditShowEditID,
        "Img64": imgbase64,
        "AyohaUserGroupCode": "01",
        "ItemName": ItemName,
        "ItemCode": GenerateRandomNo() + '-' + GetEnterpriseAccNo(),
        "ItemPoint": ItemPoint,
        "ItemImg": UploadedImage,
        "RowStatus": 'Active',
        "CreatedBy": document.getElementById('UN').value,
        "Remarks": remark,
        "ItemPrizePriceCost": ItemPrizeCost,
        "AyohaUserGroupCategory": "General",
        "PointCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_PointCardCampaignCode').value,
        "EnterpriseAccNo": GetEnterpriseAccNo(),

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/PointCampaignRedeemItemSetting/PointCampaignRedeemInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Successfully!");
                Load_FloatPanel_AyohaCardManagement_EditCard_Point_PointCampaignRedeemLoadByPointCampaignCodeStore();

            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }
            FloatPanel_AyohaCardManagement_RedeemItemSetting_AddEdit_PointHide();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });


}