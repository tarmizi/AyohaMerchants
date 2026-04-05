Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderDetail', {

});




var _FloatPanel_AyohaStore_OrderDetail;








function FloatPanel_AyohaStore_OrderDetail() {

    _FloatPanel_AyohaStore_OrderDetail =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: '83%',
         // height: 580,
         height: '100%',
         width: '100%',
         id: 'FloatPanel_AyohaStore_OrderDetailID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 350,
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
             type: 'slideOut',
             direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
             //type: 'slide',
             //direction:'right',
             //duration: 250,
             //easing: 'ease-out'
         },
         //hideAnimation: {
         //    type: 'popOut',
         //    duration: 250,
         //    easing: 'ease-out'
         //},
         style: 'border-bottom:1px solid;background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {
         //                if (e.direction == "up") {
         //                    MovementClaimReceiptImageAccomodationHide();
         //                }
         //                else {
         //                    MovementClaimReceiptImageAccomodationHide()
         //                }
         //            }
         //        });
         //    }
         //},

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             style: 'border-bottom:0px solid;background-color:white;',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },
             scrollable: true,
             items: [



                {
                    xtype: 'container',
                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                    margin: '0 0 0 0',
                    docked: 'top',
                    height:50,
                    width: '100%',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                       {
                           xtype: 'spacer',
                           width:20
                       },
                       {
                           margin: '0 0 0 0',
                           id: 'htmlFloatPanel_AyohaStore_OrderDetailHeaderTxt',
                           html: '<font size=4 color=black><b>Order Item</b></font>'
                       },
                         

                         {
                             xtype: 'spacer'
                         },
                         {
                           xtype: 'button',
                           id: 'btnFloatPanel_AyohaStore_OrderDetailBack',
                           height: 30,
                           width: 35,
                           // iconCls: 'list',
                           html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {

                               _FloatPanel_AyohaStore_OrderDetail.hide(Ext.fx.Animation({
                                   type: 'popOut',
                                  /// direction: 'left',
                                   //easing: 'cubic-bezier(.7,0,.7,1)',
                                   duration: 250

                               }));
                               is_FloatPanel_AyohaStore_OrderDetailHide = 'N';
                           }
                       },  
                       {
                           xtype: 'spacer',
                           width:20
                       },       
                    ]
                },

                 {
                     xtype: 'container',
                     style: ' background-color:transparent',
                     hidden:true,
                     id: 'ContainerFloatPanel_AyohaStore_OrderDetailUploadImage',
                     docked: 'bottom',
                     //hidden: true,
                     margin: '0 0 0 0',
                     width: '100%',
                     layout: {
                         type: 'hbox',
                         pack: 'right',
                         align: 'right'
                     },
                     items: [

                         {
                             xtype: 'button',
                             //  align: 'stretch',

                             ui: 'plain',
                             // width: '80%',
                             height: 35,
                             margin: '7 0 0 0',
                             id: 'btnFloatPanel_AyohaStore_OrderDetail_DeleteImage',
                             width: 100,
                             //style: {
                             //    background: '#FA8072',
                             //},
                             // padding: '10px',
                             //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                             text: '<button class="buttonSaveDeleteProduct">Delete</button>',

                             handler: function () {
                                 var name = document.getElementById('inputName-FloatPanel_AyohaStore_OrderDetail_UploadedImage').value;

                                 Swal.fire({
                                     title: 'Are you sure To delete?',
                                     // text: "You won't be able to revert this!",
                                     icon: 'warning',
                                     showCancelButton: true,
                                     confirmButtonColor: '#3085d6',
                                     cancelButtonColor: '#d33',
                                     confirmButtonText: 'Yes'
                                 }).then(function (result) {
                                     if (result.isConfirmed) {
                                         if (name) {

                                             FloatPanel_AyohaStore_OrderDetail_Delete();
                                         } else {

                                             swalFireFail("No Image uploaded!!");

                                         }
                                     }
                                 })








                             },


                         },

                           {
                               xtype: 'button',
                               //  align: 'stretch',

                               ui: 'plain',
                               width: 100,
                               height: 35,
                               margin: '7 0 0 0',
                               id: 'btnFloatPanel_AyohaStore_OrderDetail_SaveImage',
                               // width: '80%',
                               //style: {
                               //    background: '#FA8072',
                               //},
                               // padding: '10px',
                               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                               text: '<button class="buttonSaveDeleteProduct">Save</button>',

                               handler: function () {
                                   FloatPanel_AyohaStore_OrderDetail_Save();
                                   //var name = document.getElementById('inputName-FloatPanel_AyohaStore_OrderDetail_UploadedImage').value;





                                   //if (name) {
                                   //    //  FloatPanel_AyohaStore_OrderDetail_AdvertisementImages_Save();
                                   //    FloatPanel_AyohaStore_OrderDetail_AdvertisementImages_Save();

                                   //} else {

                                   //    swalFireFail("No Image uploaded!!");

                                   //}




                               },


                           },






                     ]
                 },










            {


                // xtype: 'button',
                xtype: 'container',
                margin: '20 0 0 0',
                id: 'Container_FloatPanel_AyohaStore_OrderDetail_pinchzoom',
              //  name: 'clickableContainer_FloatPanel_AyohaStore_OrderDetail_pinchzoom',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                //  renderTo: document.body,
                height: 350,

                width: '90%',
                //  style: 'border:2px none #540575;',
                //style: 'border-top:2px dotted #540575;border-left:2px dotted #540575;border-right:2px dotted #540575;border-bottom:2px dotted #540575',
                style: 'border-top:2px dotted black;border-left:2px dotted black;border-right:2px dotted black;border-bottom:2px dotted black',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },

                items: [



                    {

                        // xtype: 'image',
                        xtype: 'pinchzoomimage',
                        src: 'resources/icons/upload01.png',
                        //  width: 220,
                        id: 'FloatPanel_AyohaStore_OrderDetail_pinchzoom',
                        height: 346,
                        // height: '77%',
                        width: '100%',
                    },




                ]


            },



             {
                 xtype: 'container',
                 margin: '-26 0 0 0',
                 // zIndex:200,
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center'
                 },
                 width: '90%',
                 items: [

             {
                 //zIndex: 200,
                 //  margin: '-20 0 0 0',
                 html: '<font size=1 color=#540575>*Pinch Image to Zoom In/Out.Single tap to restore image size</font>',
             },


                 ]

             },


                           {
                               id: 'HtmlinputImg-FloatPanel_AyohaStore_OrderDetail_UploadedImage',
                               hidden: true,
                               margin: '0 0 0 0',
                               width: '100%',
                               html: '<input type="file" id="inputImg-FloatPanel_AyohaStore_OrderDetail_UploadedImage" accept="image/*"  onchange="OnChange_FloatPanel_AyohaStore_OrderDetail_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                               //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                           },



{
    xtype: 'container',
    margin: '0 0 0 0',
    // zIndex:200,
    layout: {
        type: 'vbox',
        pack: 'left',
        align: 'left'
    },
    width: '90%',
    items: [
         {
             margin: '0 0 0 0',
             html: '<font color="black" size="2">Order Item Name</font>',
         },


                      {

                          margin: '-5 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="inputName-FloatPanel_AyohaStore_OrderDetail_UploadedImage" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                      },


                       {
                           margin: '3 0 0 0',
                           //hidden:true,
                           id: 'htmlLblFloatPanel_AyohaStore_OrderDetail_ItemPrice',
                           html: '<font color="black" size="2">Item Price</font>',
                       },


                       {
                           id: 'htmlFloatPanel_AyohaStore_OrderDetail_ItemPrice',
                           margin: '-5 0 0 0',
                           width: '20%',
                           height: 20,
                           html: '<input type="text" id="inputName-FloatPanel_AyohaStore_OrderDetail_ItemPrice"  readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                       },

                       {
                           margin: '3 0 0 0',
                           //hidden:true,
                           id: 'htmlLblFloatPanel_AyohaStore_OrderDetail_ImageSequenceNo',
                           html: '<font color="black" size="2">Order Quantity</font>',
                       },


                       {
                           id: 'htmlFloatPanel_AyohaStore_OrderDetail_ImageSequenceNo',
                           margin: '-5 0 0 0',
                           width: '20%',
                           height: 20,
                           html: '<input type="number" id="inputName-FloatPanel_AyohaStore_OrderDetail_ImageSequenceNo" readOnly  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                       },




                        {
                            margin: '3 0 0 0',
                            //hidden:true,
                            id: 'htmlLblFloatPanel_AyohaStore_OrderDetail_ItemDesc',
                            html: '<font color="black" size="2">Item Description</font>',
                        },

                        {
                            margin: '0 0 0 0',
                            id: 'htmlFloatPanel_AyohaStore_OrderDetail_ItemDesc',
                            width: '97%',
                            height: 65,
                            // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                            html: '<textarea   readOnly  id="input-FloatPanel_AyohaStore_OrderDetail_ItemDesc" style="width:100%;height:65px;padding: 2px 2px;box-sizing: border-box;border: 1px solid grey;border-radius: 4px;background-color: #F2F3F5;color:black;font-size: 12px;font-weight:bold" wrap="hard"></textarea>'
                            // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                        },

    ]
},








             ]




         },

         initialize: function () {

         }





     });
    return _FloatPanel_AyohaStore_OrderDetail;





}








//function FloatPanel_AyohaStore_OrderDetailShow(StampContentModified, TextOne, TextTwo, DivContent, DivContentTextTwo, RowID, StampContentNote, StampContentDefaultTemplateID, ShowHide) {
function FloatPanel_AyohaStore_OrderDetailShow(ImgName, ImgPath, ItemPrice,ItemDesc,OrderQuantity) {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderDetail());
    this.overlay.show();
    is_FloatPanel_AyohaStore_OrderDetailHide = 'Y';
    var containerOne = 'Container_FloatPanel_AyohaStore_OrderDetail_pinchzoom';
    var containerTwo = 'FloatPanel_AyohaStore_OrderDetail_pinchzoom';

    CustomePanelSetHeight(containerOne, containerTwo);
    //alert(ItemPrice)
    document.getElementById('inputName-FloatPanel_AyohaStore_OrderDetail_ImageSequenceNo').value = OrderQuantity;
    document.getElementById('inputName-FloatPanel_AyohaStore_OrderDetail_ItemPrice').value = "RM"+ItemPrice;
    document.getElementById('inputName-FloatPanel_AyohaStore_OrderDetail_UploadedImage').value = ImgName;
    document.getElementById('input-FloatPanel_AyohaStore_OrderDetail_ItemDesc').value = ItemDesc;
   
    // Ext.getCmp('FloatPanel_AyohaStore_OrderDetail').setHtml('<div ><img src="' + ImgPath + '" width="98%" height="600px" alt="Company Name"></div>');
    Ext.getCmp('FloatPanel_AyohaStore_OrderDetail_pinchzoom').setSrc(ImgPath);
    // document.getElementById('TextareaAddEdit_AdvertisementImages_ImageCaption').value = ImgNote;





}
var is_FloatPanel_AyohaStore_OrderDetailHide = 'N';

function FloatPanel_AyohaStore_OrderDetailHide() {
    if (is_FloatPanel_AyohaStore_OrderDetailHide == 'Y') {
        _FloatPanel_AyohaStore_OrderDetail.hide();
        is_FloatPanel_AyohaStore_OrderDetailHide = 'N';
    }

}







function Load_FloatPanel_AyohaStore_OrderDetailLoadByStampCampaignCodeEnterpriseAccNoStore() {

    Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
        StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}





