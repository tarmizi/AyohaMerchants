Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStoreMerchant_EditProductImage', {

});




var _FloatPanel_AyohaStoreMerchant_EditProductImage;








function FloatPanel_AyohaStoreMerchant_EditProductImage() {

    _FloatPanel_AyohaStoreMerchant_EditProductImage =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: '83%',
         // height: 580,
         height: '100%',
         width: '100%',
         id: 'FloatPanel_AyohaStoreMerchant_EditProductImageID',
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
             type: 'popOut',
             //direction: 'up',
            // easing: 'cubic-bezier(.7,0,.7,1)',
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
         style: 'background-color:white;',
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
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                    style:GetHeaderStyle(),
                    margin: '0 0 0 0',
                     docked: 'top',
                     height: 60,
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
                            id: 'htmlFloatPanel_AyohaStoreMerchant_EditProductImageHeaderTxt',
                            html: '<font size=4 color=black><b>Add/Edit Image</b></font>'
                        },
                          

                          {
                              xtype:'spacer'
                          },
                          {
                            xtype: 'button',
                            id: 'btnFloatPanel_AyohaStoreMerchant_EditProductImageBack',
                            height: 30,
                            width: 35,
                            // iconCls: 'list',
                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                            ui: 'plain',
                            handler: function () {

                                _FloatPanel_AyohaStoreMerchant_EditProductImage.hide(Ext.fx.Animation({
                                    type: 'popOut',
                                   // direction: 'left',
                                    //easing: 'cubic-bezier(.7,0,.7,1)',
                                    duration: 250

                                }));
                                is_FloatPanel_AyohaStoreMerchant_EditProductImageHide = 'N';
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
                     id: 'ContainerFloatPanel_AyohaStoreMerchant_EditProductImageUploadImage',
                     docked: 'bottom',
                     height:50,
                     style:GetFooterStyle(),
                     //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                    // margin: '0 0 0 0',
                     width: '100%',
                     layout: {
                         type: 'hbox',
                         pack: 'end',
                         align: 'center'
                     },
                     items: [
                         
                         {
                             xtype: 'button',
                             //  align: 'stretch',

                             ui: 'plain',
                             // width: '80%',
                            // height: 35,
                             margin: '0 -18 -8 0',
                             id: 'btnFloatPanel_AyohaStoreMerchant_EditProductImage_DeleteImage',
                            // width: 100,
                             html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                            // text: '<button class="buttonDelete_web">Delete</button>',

                             handler: function () {
                                 var name = document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage').value;

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

                                             FloatPanel_AyohaStoreMerchant_EditProductImage_Delete();
                                         } else {

                                             swalFireFail("No Image uploaded!!");

                                         }
                                     }
                                 })








                             },


                         },
                         {
                            xtype: 'button',
                          //  id:'txtFloatPanel_AyohaContestSetting_DeleteContestLoyaltyx',
                          id: 'txtFloatPanel_AyohaStoreMerchant_EditProductImage_DeleteImage',
                          margin: '7 0 0 5',
                            //height: 40,
                            //width: 130,
                            html: '<font size=2 color=grey>*Delete</font>',
                            ui: 'plain',
                            handler: function () {
                                var name = document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage').value;

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

                                            FloatPanel_AyohaStoreMerchant_EditProductImage_Delete();
                                        } else {

                                            swalFireFail("No Image uploaded!!");

                                        }
                                    }
                                })

                            }
                        },
                        {
                            xtype: 'panel',
                            width: 6
    
                        },
                           {
                               xtype: 'button',
                               //  align: 'stretch',

                               ui: 'plain',                              
                               id: 'btnFloatPanel_AyohaStoreMerchant_EditProductImage_SaveImage',
                               margin: '0 -18 -8 0',
                               //height: 35,
                               //width: 35,
                               html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',

                               handler: function () {
                                   FloatPanel_AyohaStoreMerchant_EditProductImage_Save();
                                  



                               },


                           },
                           {
                            xtype: 'button',
                            //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
                           // id:'txtbtn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
                            //  badgeText: '1',
                            margin: '7 0 0 7',
                            //height: 40,
                            //width: 130,
                            html: '<font size=2 color=grey>Save</font>',
                            ui: 'plain',
                            handler: function () {
                                FloatPanel_AyohaStoreMerchant_EditProductImage_Save();
                            }
                        },                                     





                     ]
                 },










            {


                // xtype: 'button',
                xtype: 'container',
                margin: '5 0 0 0',
                id: 'Container_FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom',
                name: 'clickableContainer_FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                //  renderTo: document.body,
               // height: 215,

                width: 500,
                //  style: 'border:2px none #540575;',
                //style: 'border-top:2px dotted #540575;border-left:2px dotted #540575;border-right:2px dotted #540575;border-bottom:2px dotted #540575',
                style: 'border-top:2px dotted black;border-left:2px dotted black;border-right:2px dotted black;border-bottom:2px dotted black',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
                },

                items: [



                    {

                        // xtype: 'image',
                        xtype: 'pinchzoomimage',
                        src: 'resources/icons/upload01.png',
                        //  width: 220,
                        id: 'FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom',
                      //  height: 200,
                        // height: '77%',
                        width: '100%',
                    },




                ]


            },



             {
                 xtype: 'container',
                 margin: '-26 0 0 0',
                 // zIndex:200,
                 hidden:true,
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center'
                 },
                 width: '100%',
                 items: [

             {
                 //zIndex: 200,
                 //  margin: '-20 0 0 0',
                 html: '<font size=1 color=#540575>*Pinch Image to Zoom In/Out.Single tap to restore image size</font>',
             },


                 ]

             },


                           {
                                    id: 'HtmlinputImg-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage',
                                    hidden: true,
                                    margin: '0 0 0 0',
                                    width: '100%',
                                    html: '<input type="file" id="inputImg-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage" accept="image/*"  onchange="OnChange_FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

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
    width: '100%',
    items: [
         {
             margin: '0 0 0 0',
             html: '<font color="black" size="2"><b>Image Name</b></font>',
         },


                      {

                          margin: '-2 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                      },

                       {
                           margin: '0 0 0 0',
                           //hidden:true,
                           id: 'htmlLblFloatPanel_AyohaStoreMerchant_EditProductImage_ImageSequenceNo',
                           html: '<font color="black" size="2"><b>Image Sequence</b></font>',
                       },


                       {
                           id: 'htmlFloatPanel_AyohaStoreMerchant_EditProductImage_ImageSequenceNo',
                           margin: '-2 0 0 0',
                           width: '20%',
                           height: 20,
                           html: '<input type="number" id="inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_ImageSequenceNo"   style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                       },

    ]
},








             ]




         },

         initialize: function () {

         }





     });
    return _FloatPanel_AyohaStoreMerchant_EditProductImage;





}





function FloatPanel_AyohaStoreMerchant_EditProductImageShow_Add() {
    Ext.Viewport.remove(_FloatPanel_AyohaStoreMerchant_EditProductImage);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStoreMerchant_EditProductImage());
    this.overlay.show();
    is_FloatPanel_AyohaStoreMerchant_EditProductImageHide = 'Y';
    //Ext.getCmp('htmlFloatPanel_AyohaStoreMerchant_EditProductImageShowHideTxt').setHidden(true);
    //Ext.getCmp('togglefieldFloatPanel_AyohaStoreMerchant_EditProductImageShowHide').setHidden(true);
    Ext.getCmp('btnFloatPanel_AyohaStoreMerchant_EditProductImage_DeleteImage').setHidden(true);
    Ext.getCmp('txtFloatPanel_AyohaStoreMerchant_EditProductImage_DeleteImage').setHidden(true);
    
    //var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaStoreMerchant_EditProductImage_UploadAdvertisementImage]')[0];
    var containerView = Ext.ComponentQuery.query('container[name=clickableContainer_FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStoreMerchant_EditProductImage_AdvertisementImages_singleTap();
      }
    );
  //  globalAyohaStoreSaleItemImgExtend_ID = 0;
   // globalAyohaStoreSaleItemImgExtend_ItemCode = "New";
    var containerOne = 'Container_FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom';
    var containerTwo = 'FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom';

   
    document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_ImageSequenceNo').value = globalFloatPanel_AyohaStoreMerchant_AddEditItem_SequenceNo;
    globalAyohaStoreSaleItemImgExtend_ImageName = "";
    globalAyohaStoreSaleItemImgExtend_ID = 0;
    CustomePanelSetHeight(containerOne, containerTwo);
   // document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_ImageSequenceNo').value = globalFloatPanel_AyohaStoreMerchant_AddEditItem_SequenceNo;

}



//function FloatPanel_AyohaStoreMerchant_EditProductImageShow(StampContentModified, TextOne, TextTwo, DivContent, DivContentTextTwo, RowID, StampContentNote, StampContentDefaultTemplateID, ShowHide) {
function FloatPanel_AyohaStoreMerchant_EditProductImageShow_Edit(ID, ImgName, ImgPath, ItemCode, SequenceNo) {
    Ext.Viewport.remove(_FloatPanel_AyohaStoreMerchant_EditProductImage);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStoreMerchant_EditProductImage());
    this.overlay.show();
    is_FloatPanel_AyohaStoreMerchant_EditProductImageHide = 'Y';
    var containerOne = 'Container_FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom';
    var containerTwo = 'FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom';

    CustomePanelSetHeight(containerOne, containerTwo);
    globalAyohaStoreSaleItemImgExtend_ID = ID;
    globalAyohaStoreSaleItemImgExtend_ItemCode = ItemCode;
    globalUploadImageProcess_ImageResult = "";
    document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_ImageSequenceNo').value = SequenceNo;

    document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage').value = ImgName;
    // Ext.getCmp('FloatPanel_AyohaStoreMerchant_EditProductImage').setHtml('<div ><img src="' + ImgPath + '" width="98%" height="600px" alt="Company Name"></div>');
    Ext.getCmp('FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom').setSrc(ImgPath);
   // document.getElementById('TextareaAddEdit_AdvertisementImages_ImageCaption').value = ImgNote;


  //  Ext.getCmp('btnFloatPanel_AyohaStoreMerchant_EditProductImage_DeleteImage').setHidden(false);
    Ext.getCmp('btnFloatPanel_AyohaStoreMerchant_EditProductImage_DeleteImage').setHidden(false);
    Ext.getCmp('txtFloatPanel_AyohaStoreMerchant_EditProductImage_DeleteImage').setHidden(false);
    //var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaStoreMerchant_EditProductImage_UploadAdvertisementImage]')[0];
    var containerView = Ext.ComponentQuery.query('container[name=clickableContainer_FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStoreMerchant_EditProductImage_AdvertisementImages_singleTap();
      }
    );




}
var is_FloatPanel_AyohaStoreMerchant_EditProductImageHide = 'N';

function FloatPanel_AyohaStoreMerchant_EditProductImageHide() {
    if (is_FloatPanel_AyohaStoreMerchant_EditProductImageHide == 'Y') {
        _FloatPanel_AyohaStoreMerchant_EditProductImage.hide();
        is_FloatPanel_AyohaStoreMerchant_EditProductImageHide = 'N';
    }

}







function Load_FloatPanel_AyohaStoreMerchant_EditProductImageLoadByStampCampaignCodeEnterpriseAccNoStore() {

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





var globalAyohaStoreSaleItemImgExtend_ID = 0;
var globalAyohaStoreSaleItemImgExtend_ImageName;
function FloatPanel_AyohaStoreMerchant_EditProductImage_Save() {


    if (globalAyohaStoreSaleItemImgExtend_ImageName) {

    } else {
        swalFireFail("Product Image is Required!");
        return;
    }


    //var sqNo = document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_ImageSequenceNo').value;

    //if (sqNo) {
    //    sqNo = sqNo;
    //} else
    //{
    //    sqNo = globalFloatPanel_AyohaStoreMerchant_AddEditItem_SequenceNo;

        
    //}
    var imgbase64;

    if (globalUploadImageProcess_ImageResult) {
        imgbase64 = globalUploadImageProcess_ImageResult;
    } else {
        imgbase64 = "ExistingImage";
    }


    var objn = {
        "ID": globalAyohaStoreSaleItemImgExtend_ID,
        "ImgPath": imgbase64,
        "ItemCode": globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "ImageName": globalAyohaStoreSaleItemImgExtend_ImageName,
        "SequenceNo": document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_ImageSequenceNo').value,
    };

    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStoreSaleItemImgExtend/AyohaStoreSaleItemImgExtendInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                //swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                //AyohaMerchantReview_AddEditHide();


                swalFireSuccess("Add Product Image  Successfull!");
                FloatPanel_AyohaStoreMerchant_EditProductImageHide();
                var task = Ext.create('Ext.util.DelayedTask', function () {

                    FloatPanel_AyohaStoreMerchant_AddEditItem_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCode();
                    Ext.Viewport.unmask();
                });
                Ext.Viewport.unmask();
                task.delay(700);

                //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });


            }
            else {

                swalFireFail("Fail!-->" + result.responseText.trim());
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!" + result.responseText.trim());
            Ext.Viewport.unmask();
        }

    });
}





function OnChange_FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage() {

    var ImgCompenant = localStorage.getItem("ImageCompenant");
    var file = document.getElementById(ImgCompenant).files[0];

    var fileName = document.getElementById(ImgCompenant).files[0].name;
    globalAyohaStoreSaleItemImgExtend_ImageName = fileName;

    if (file) {

        if (file.type.match("image.*")) {
            var reader = new FileReader();
            reader.readAsDataURL(file/*, "UTF-8"*/);
            reader.onload = function (event) {
                globalUploadImageProcess_ImageResult = event.target.result;
                //document.getElementById('input-FloatPanel_AyohaUserRegistrationPhotoName').value = fileName;
                // console.log("Original Size:" + globalUserPicProfile64);

                document.getElementById('inputName-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage').value = fileName;


                // Ext.getCmp('FloatPanel_AddEdit_AdvertisementImages').setHtml('<div ><img src="' + globalAdvertisementImage + '" width="98%" height="600px" alt="Company Name"></div>');

                Ext.getCmp('FloatPanel_AyohaStoreMerchant_EditProductImage_pinchzoom').setSrc(globalUploadImageProcess_ImageResult);



                ResizeImage(ImgCompenant);

            };


        }
        else {
            //  img64AccPicProfile = Picture;
        }
    }



    //}
}





function FloatPanel_AyohaStoreMerchant_EditProductImage_AdvertisementImages_singleTap() {
    localStorage.setItem("ImageCompenant", "inputImg-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage");
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaStoreMerchant_EditProductImage_UploadedImage").click();
    });
}




function FloatPanel_AyohaStoreMerchant_EditProductImage_Delete() {


   

    var objn = {
        "ID": globalAyohaStoreSaleItemImgExtend_ID,     
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "ItemCode": globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode,
    };

    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStoreSaleItemImgExtend/AyohaStoreSaleItemImgExtendDelete',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                //swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                //AyohaMerchantReview_AddEditHide();


                swalFireSuccess("Delete Product Image  Successfull!");
                FloatPanel_AyohaStoreMerchant_EditProductImageHide();
                var task = Ext.create('Ext.util.DelayedTask', function () {

                    FloatPanel_AyohaStoreMerchant_AddEditItem_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCode();
                    Ext.Viewport.unmask();
                });
                Ext.Viewport.unmask();
                task.delay(700);

                //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });


            }
            else {

                swalFireFail("Fail!-->" + result.responseText.trim());
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!" + result.responseText.trim());
            Ext.Viewport.unmask();
        }

    });
}
