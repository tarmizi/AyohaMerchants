Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_AyohaStoreMerchant_AddEditItem', {

});



var _FloatPanel_AyohaStoreMerchant_AddEditItem;


var isFloatPanel_AyohaStoreMerchant_AddEditItemOpen = 'N';











function FloatPanel_AyohaStoreMerchant_AddEditItem() {

    _FloatPanel_AyohaStoreMerchant_AddEditItem =
     Ext.create('Ext.Container', {

         xtype: 'container',
         height: '100%',
         //  height: 680,
         width: '100%',
         id: 'FloatPanel_AyohaStoreMerchant_AddEditItemID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 300,
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
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'background-color:white;',
         //style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {
                         //if (e.direction == "up") {
                         //    FloatPanel_AyohaStoreMerchant_AddEditItemHide();
                         //}
                         //else {
                         //    FloatPanel_AyohaStoreMerchant_AddEditItemHide()
                         //}
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {

             style: 'background-color:transparent;',


             ////////  margin:'-50 0 0 0',
             ////////height: 150,
             ////////width: 200,
             //////xtype: 'container',
             //////style: 'background-color:white',

             //////// style: 'border-bottom:0px solid;background-color:#353839;',
             ////////  style: 'border-bottom:0px solid;background-color:white;',
             //////layout: {
             //////    type: 'vbox',
             //////    pack: 'left',
             //////    align: 'left'

             //////},
             //////scrollable: {
             //////    direction: 'vertical',
             //////    directionLock: true,
             //////    indicators: false
             //////},
             //scrollable: true,
             //indicators:false,
             items: [


                 ///////////////////
                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     height: 60,
                     // width: 40,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     // hidden: true,

                     id: 'containerFloatPanel_FloatingAdvertisementHeader',
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
                                    margin: '0 -5 0 0',
                                    id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt',
                                    html: '<font size=4 color=black><b>Add New Product</b></font>'
                                    //  html: '<div style="margin:0px 0px 0px 0px;font-size:12px;color:white;font-weight:bold;">Add New Product</div>'
                                },

                                       

                                           {
                                               xtype: 'spacer',
                                           },

                                           {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_FloatingAdvertisementBack',
                                            height: 30,
                                            width: 35,
                                            margin: '0 0 0 0',
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                                isFloatPanel_AyohaStoreMerchant_AddEditItemOpen = 'N';
                                                _FloatPanel_AyohaStoreMerchant_AddEditItem.hide(Ext.fx.Animation({
                                                    type: 'popOut',
                                                    duration: 250,
                                                    easing: 'ease-out'

                                                }));
                                                RemovePages(_FloatPanel_AyohaStoreMerchant_AddEditItem, "isFloatPanel_AyohaStoreMerchant_AddEditItemOpen");
                                            //  alert(globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode);  
                                          //  alert(globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode)
                                            }
                                        },  
                                        {
                                            xtype: 'spacer',
                                            width:20
                                        },
        

                                                         {
                                                             xtype: 'button',
                                                             id: 'btnFloatPanel_AyohaStoreMerchant_AddEditItemIcon',
                                                             height: 35,
                                                             margin: '-5 0 0 0',
                                                             hidden:true,
                                                             width: 35,
                                                             // iconCls: 'list',
                                                             html: '<div ><img src="resources/icons/AddNewProductWhite01.png" width="25" height="25" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                 isFloatPanel_AyohaStoreMerchant_AddEditItemOpen = 'N';
                                                                 _FloatPanel_AyohaStoreMerchant_AddEditItem.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'right',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 RemovePages(_FloatPanel_AyohaStoreMerchant_AddEditItem, "isFloatPanel_AyohaStoreMerchant_AddEditItemOpen");

                                                                 //  RemovePages(_FloatPanel_AyohaNotification, "isFloatPanel_AyohaNotificationOpen");
                                                                 //FloatPanel_AyohaNotification_AddCardHide();
                                                             }
                                                         },













                            ]

                 },







                 /////





                 {
                     xtype: 'container',
                     docked: 'bottom',
                     id:'containerFloatPanel_AyohaStoreMerchant_AddEditItem_bottombtn',
                     style:GetFooterStyle(),
                    // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid #EAEEF3;',
                     // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
                     width: '100%',
                     height: 50,
                     layout: {
                         type: 'hbox',
                         pack: 'end',
                         align: 'center'
                     },
                     items: [

                        {
                            xtype: 'button',
                            id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Delete',
                           // id:'btnFloatPanel_AyohaContestSetting_DeleteContestLoyaltyx',
                            //  badgeText: '1',
                            margin: '0 -18 -8 0',
                            //height: 35,
                            //width: 35,
                            html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function (){
                                FloatPanel_AyohaStoreMerchant_AddEditItem_Delete();
                            }
                        },
                        {
                            xtype: 'button',
                            id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Delete_Txt',
                          //  id:'txtFloatPanel_AyohaContestSetting_DeleteContestLoyaltyx',
                            //  badgeText: '1',
                            margin: '7 0 0 5',
                            //height: 40,
                            //width: 130,
                            html: '<font size=2 color=grey>*Delete</font>',
                            ui: 'plain',
                            handler: function () {
                                FloatPanel_AyohaStoreMerchant_AddEditItem_Delete();
                            }
                        },
                        //  {
                        //      //  hidden: true,
                        //      id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Delete',
                        //      //margin: '-27 0 0 0',
                        //      width:100,
                        //      margin: '0 0 3 0',
                        //      html: '<button OnClick="FloatPanel_AyohaStoreMerchant_AddEditItem_Delete()" class="buttonDelete_web">Delete</button>'
                        //  },
                    {
                        xtype: 'panel',
                        width: 6

                    },
                //   {
                //       id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Save',
                //       //margin: '-27 0 0 0',
                //       width:100,
                //       margin: '0 10 3 0',
                //       html: '<button OnClick="FloatPanel_AyohaStoreMerchant_AddEditItem_Save()" class="buttonSave_web">Save</button>'



                //   },
                  {
                    xtype: 'button',
                   // id:'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
                    //  badgeText: '1',
                    margin: '0 -18 -8 0',
                    //height: 35,
                    //width: 35,
                    html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                        FloatPanel_AyohaStoreMerchant_AddEditItem_Save();        
                    }
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
                        FloatPanel_AyohaStoreMerchant_AddEditItem_Save();  
                    }
                },
                //

                     ]

                 },



                 {
                     margin:'20 0 0 0',
                     height: '100%',
                     width: '100%',
                     xtype: 'container',
                     style: 'background-color:transparent',
                     id: 'containerFloatPanel_AyohaStoreMerchant_AddEditMainID',

                     // style: 'border-bottom:0px solid;background-color:#353839;',
                     //  style: 'border-bottom:0px solid;background-color:white;',
                     layout: {
                         type: 'vbox',
                         pack: 'left',
                         align: 'left'

                     },
                     scrollable: {
                         direction: 'vertical',
                         directionLock: true,
                         indicators: false
                     },
                     items: [





                  {
                      margin: '0 0 0 5',
                      hidden:true,
                      html: '<font color="black" size="1"><b>Product Image</b></font><font color="red" size="2">*</font>',
                  },

            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 5',
                hidden: true,
                id: 'FloatPanel_AyohaStoreMerchant_AddEditItemBorderBsg',
                name: 'nameContainerFloatPanel_AyohaStoreMerchant_AddEditItem_PictureProduct',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                //  renderTo: document.body,
                height: 350,
                width: '98%',
                //  style: 'border:2px none black;',
                style: 'border-top:2px dotted black;border-left:2px dotted black;border-right:2px dotted black;border-bottom:2px dotted black',
                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'left'
                },

                items: [



                    //{

                    //    xtype: 'image',
                    //    //xtype: 'pinchzoomimage',
                    //    src: 'resources/icons/NewUploadReceiptIcon.png',
                    //    //  width: 220,
                    //    id: 'htmFloatPanel_AyohaStoreMerchant_AddEditItem_Picture',
                    //    height: 346,
                    //    width: '100%',
                    //},

                     {

                         // xtype: 'image',
                         //xtype: 'pinchzoomimage',
                         html: '<img src="resources/icons/AddNewProductWhite01.png" width="100%" height="346" alt="Company Name">',
                         //  width: 220,
                         id: 'htmFloatPanel_AyohaStoreMerchant_AddEditItem_Picture',
                         height: 346,
                         width: '100%',
                     },



                ]


            },



             {
                 xtype: 'container',
                 margin: '-26 0 0 0',
                 hidden: true,
                 // zIndex:200,
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
                 html: '<font size=1 color=black>*Tap to upload image</font>',
             },


                 ]

             },
             //{
             //    xtype: 'button',
             //    id: 'btnUploadFuelClaim',
             //    margin: '0 0 0 0',
             //    width: 40,
             //    height: 40,
             //    // badgeText: '1',
             //    html: '<div ><img src="resources/icons/uploadReceiptFuelClaim.png" width="30" height="30" alt="Company Name"></div>',
             //    ui: 'plain',
             //    handler: function () {

             //        uploadReceiptImages();
             //    }
             //},


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
                         xtype: 'panel',
                         width:5
                     },
                     {
                         margin: '10 0 0 0',

                         html: '<font size=3 color=black><b>Product Image</b></font>',

                     },
                     {
                         xtype: 'spacer'
                     },
             
     {
         xtype: 'button',
         // hidden: true,
         id: 'txtFloatPanel_AyohaStoreMerchant_AddEditItem_UploadImage',
         //  badgeText: '1',
         margin: '0 -7 -12 0',
         height: 40,
         width: 100,
         html: '<font size=2 color=black>Upload Image</font>',
         ui: 'plain',
         handler: function () {
             // FloatPanel_AyohaCardManagement_UserEnterprisesListShow();
             // FloatPanel_AyohaStoreMerchant_AddEditItem_UploadPictureProduct();
             FloatPanel_AyohaStoreMerchant_EditProductImageShow_Add();

         }
     }, {
         xtype: 'button',
         id: 'btnFloatPanel_AyohaStoreMerchant_AddEditItem_UploadImage',
         //  badgeText: '1',
         // hidden:true,
         margin: '0 -5 -12 0',
         height: 35,
         width: 35,
         html: '<img src="resources/icons/upload01.png" width="25" height="25" alt="Company Name">',
         ui: 'plain',
         handler: function () {
             // FloatPanel_AyohaCardManagement_UserEnterprisesListShow();
             // FloatPanel_AyohaStoreMerchant_AddEditItem_UploadPictureProduct();
             FloatPanel_AyohaStoreMerchant_EditProductImageShow_Add();
         }
     },
     {
         xtype: 'panel',
         width:10
     }
                 ]
             },



            

        {
            xtype: 'list',
            //flex:1,
            margin:'0 0 0 5',
            height: 350,
            store: _DataStore_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore,
            //id: 'FloatPanel_AyohaStoreMerchant_AddEditItem_ProductImageList',
            id: 'FloatPanel_AyohaStoreMerchant_AddEditItemBorderBg',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            itemTpl: '<div OnClick="FloatPanel_AyohaStoreMerchant_EditProductImageShow_Edit({ID},' + "'" + '{ImageName}' + "'" + ',' + "'" + '{ImgPath}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{SequenceNo}' + "'" + ')" style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Image Sequence No:<u><b>{SequenceNo}</b></u></font></div>' +

                                    '<div OnClick="FloatPanel_AyohaStoreMerchant_EditProductImageShow_Edit({ID},' + "'" + '{ImageName}' + "'" + ',' + "'" + '{ImgPath}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{SequenceNo}' + "'" + ')"  style="margin:-58px 0px 0px 0px;" ><img src="{ImgPath}" width="70" height="70" alt="Company Name"></div>' +

                                    // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
                             '</div>',
            width: '98%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },



             {
                 margin: '0 0 0 5',
                 html: '<font color="black" size="1"><b>Product Name</b></font><font color="red" size="2">*</font>',
             },
                               {
                                   id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_AttachementImage',
                                   hidden: true,
                                   margin: '10 0 0 0',
                                   width: '100%',
                                   html: '<input type="file" id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_ProductImage" accept="image/*"       onchange="UploadImage()"  style="border-color:black;color:black;width:268px;text-align: left;font-size:15px;">'

                                   //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                               },


                      {
                          id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_AttachementImageName',
                          margin: '-5 0 0 5',

                          // zIndex: -10,
                          width: '90%',
                          html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_AttachementImageName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                      },


                      {
                          xtype: 'container',
                          width: '100%',
                          margin: '9 0 0 0',
                          layout: {
                              type: 'hbox',
                              pack: 'left',
                              align: 'left'
                          },
                          items: [
                              {
                                  xtype: 'container',
                                  width: '33%',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'left',
                                      align: 'left'
                                  },
                                  items: [

                                        {
                                            margin: '-5 0 0 5',
                                            html: '<font color="black" size="1"><b>Price(RM)</b></font><font color="red" size="2">*</font>',
                                        },
                      {
                          width: '100%',
                          margin: '0 0 0 5',
                          layout: {
                              type: 'hbox',
                              pack: 'left',
                              align: 'left'
                          },
                          items: [
                              {
                                  id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Price',
                                  margin: '-5 0 0 0',
                                  width: '65%',
                                  html: '<input type="number" id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Price"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                              },


                          ]

                      },
                                  ]
                              },



                               {
                                   xtype: 'container',
                                   width: '33%',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'left',
                                       align: 'left'
                                   },
                                   items: [

                                         {
                                             margin: '-5 0 0 5',
                                             html: '<font color="black" size="1"><b>Discount(%)-if any</b></font>',
                                         },
                       {
                           width: '100%',
                           margin: '0 0 0 5',
                           layout: {
                               type: 'hbox',
                               pack: 'left',
                               align: 'left'
                           },
                           items: [
                               {
                                   id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Discount',
                                   margin: '-5 0 0 0',
                                   width: '65%',
                                   html: '<input type="number" id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Discount" value=0.0 oninput="FloatPanel_AyohaStoreMerchant_AddEditItem_DiscountCalculated()" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                               },


                           ]

                       },
                                   ]
                               },


                                 {
                                     xtype: 'container',
                                     width: '33%',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'left',
                                         align: 'left'
                                     },
                                     items: [

                                           {
                                               margin: '-5 0 0 5',
                                               html: '<font color="black" size="1"><b>Discount Price</b></font>',
                                           },
                         {
                             width: '100%',
                             margin: '0 0 0 5',
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left'
                             },
                             items: [
                                 {
                                     id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_DiscountPrice',
                                     margin: '-5 0 0 0',
                                     width: '65%',
                                     html: '<input type="number" id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_DiscountPrice"   value=0.00 readonly  style="border-color:grey;color:grey;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                 },


                             ]

                         },
                                     ]
                                 }
                          ]
                      },





                       {
                           margin: '4 0 0 5',
                           html: '<font color="black" size="1"><b>Product Category</b></font><font color="red" size="2">*</font>',
                       },




                         {
                             xtype: 'container',
                             id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                            // name: 'namecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                             width: '100%',
                             // height: 30,
                             margin: '-16 0 0 5',
                             styleHtmlContent: true,
                             style: "background-color: transparent",
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left'

                             },
                             items: [


                                 {
                                     xtype: 'container',
                                     // id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                     name: 'namecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory',
                                     margin: '-17 0 0 -33',
                                     width: '60%',
                                     height: 20,
                                     styleHtmlContent: true,
                                     style: "background-color: transparent",
                                     layout: {
                                         type: 'hbox',
                                         pack: 'left',
                                         align: 'left'

                                     },
                                     items: [
                                          {
                                              id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Category',
                                             // margin: '-17 0 0 -33',
                                              width: '100%',
                                              html: '<input type="text" id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Category" placeHolder="Select Product Category" style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                          },


                           {
                               width: 20,
                               height: 20,
                               margin: '-2 0 0 0',
                               id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_CategoryIcon',
                               html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                           },
                                     ]
                                 },
                                  
                           {
                               xtype: 'panel',
                               width: 20
                           },
                           {
                               xtype: 'container',
                               width: '25%',
                               name:'NamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_Stock',
                               margin: '-16 0 0 0',
                               layout: {
                                   type: 'vbox',
                                   pack: 'left',
                                   align: 'left'
                               },
                               items: [

                                     {
                                         margin: '-5 0 0 5',
                                         html: '<font color="black" size="1"><b>Stock</b></font>',
                                     },
                   {
                       width: '100%',
                       margin: '0 0 0 5',
                       layout: {
                           type: 'hbox',
                           pack: 'left',
                           align: 'left'
                       },
                       items: [
                           {
                               id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Stock',
                               margin: '-5 0 0 0',
                               width: '70%',
                               html: '<input type="number"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Stock" value=0  style="border-color:black;color:grey;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                           },
                             {
                                 id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_StockUpdate',
                                 width: 20,
                                 height: 20,
                                 margin: '-2 0 0 0',
                                 hidden:true,
                                // id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_StockUpdateIcon',
                                 html: '<img src="resources/icons/editReview.png" width="16" height="16" alt="Company Name">',
                             },


                       ]

                   },
                               ]
                           },
                           //{
                           //    xtype: 'panel',
                           //    width: 5
                           //},
                           {
                               xtype: 'container',
                               width: '25%',
                               margin: '-16 0 0 0',
                               layout: {
                                   type: 'vbox',
                                   pack: 'left',
                                   align: 'left'
                               },
                               items: [

                                     {
                                         margin: '-5 0 0 5',
                                         html: '<font color="black" size="1"><b>Show Stock?</b></font>',
                                     },
                   {
                       width: '100%',
                       margin: '0 0 0 5',
                       layout: {
                           type: 'hbox',
                           pack: 'left',
                           align: 'left'
                       },
                       items: [
                           {
                               id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock',
                               margin: '-5 0 0 20',
                               width: '50%',
                               html: '<input type="checkbox" id="checkbox-FloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock" class="MediumCheckbox" onclick="FloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock(this)" name="checkbox" />'
                           },
                            


                       ]

                   },
                               ]
                           }

                             ]
                         },
                         {
                             margin: '-16 0 0 5',
                             html: '<font color="black" size="1"><b>Entitle Membership Card</b></font><font color="grey" size="0.5">  *(Can be set with more than one card-if any)</font>',
                         },


                         {
                             xtype: 'container',
                             id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCardOutter',
                            // name: 'namecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard',
                             width: '100%',
                             // height: 30,
                             margin: '-16 0 0 5',
                             styleHtmlContent: true,
                             style: "background-color: transparent",
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'left'

                             },
                             items: [
                                 {
                                     xtype: 'container',
                                     id: 'containerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard',
                                     name: 'namecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard',
                                     width: '100%',
                                     // height: 30,
                                     margin: '-16 0 0 -37',
                                     styleHtmlContent: true,
                                     style: "background-color: transparent",
                                     layout: {
                                         type: 'hbox',
                                         pack: 'left',
                                         align: 'left'

                                     },
                                     items: [
                                           {
                                               id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard',
                                               margin: '0 0 0 5',
                                               width: '97%',
                                               html: '<input type="text" id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard" readOnly placeHolder="Select Entitle Membership Card" style="border-color:black;color:grey;width:100%;text-align: left;font-size:14px;font-weight:bold;margin:0px 0px 0px 0px;">'
                                           },

                                   {
                                       width: 20,
                                       height: 20,
                                       margin: '-2 0 0 0',
                                       id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCardIcon',
                                       html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
                                   },
                                  
                                  
                                     ]
                                 },
                                  {
                                      xtype: 'button',
                                      id: 'btnlFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard_Reset',
                                      height: 26,
                                      width: 26,
                                      margin: '-5 0 0 0',
                                      // iconCls: 'list',
                                      html: '<div ><img src="resources/icons/ResetPurpleOne.png" width="16" height="16" alt="Company Name"></div>',
                                      ui: 'plain',
                                      handler: function () {
                                          document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard').value = '';
                                          globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode = '';

                                      }
                                  },
                             ]

                         },
                            

                       {
                           margin: '-27 0 0 5',
                           html: '<font color="black" size="1"><b>Product Descriptions</b></font><font color="red" size="2">*</font>',
                       },
                        {
                            id: 'htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions',
                            margin: '0 0 0 5',

                            // zIndex: -10,
                            width: '100%',
                            html: '<textarea id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions" style="width:97%;height: 250px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',
                            // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                        },
                        {
                            xtype: 'container',
                            width: '100%',
                            height:200
                        }

                     ]
                 },















             ]




         },

         //initialize: function () {
         //    console.log('init')
         //    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerToll]')[0];
         //    var containerViewEl = containerView.element;
         //    containerViewEl.on('doubletap',
         //      function (event, node, options, eOpts) {

         //          uploadReceiptImagesToll();
         //      }
         //    );
         //}





     });
    return _FloatPanel_AyohaStoreMerchant_AddEditItem;





}


//var containerViewEl;
function FloatPanel_AyohaStoreMerchant_AddEditItemShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaStoreMerchant_AddEditItem);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStoreMerchant_AddEditItem());
    this.overlay.show();
    CheckHeigtWidthScreenToll();
    isFloatPanel_AyohaStoreMerchant_AddEditItemOpen = 'Y';
    FloatPanel_AyohaStoreMerchant_AddEditItem_initializedTapEvent();
    globalFloatPanel_AyohaStoreMerchant_AddEditItem_ID = 0;
    globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode = "New";
    globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode = '';
    globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCoverImgName = '';
   // globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode = "New";
  // alert(globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode)
    globalFloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock = "N";
    Ext.getCmp('htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Delete').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaStoreMerchant_AddEditItem_Delete_Txt').setHidden(true);
    FloatPanel_AyohaStoreMerchant_AddEditItem_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCode();
}

var globalFloatPanel_AyohaStoreMerchant_AddEditItem_ID;
var globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode;
var globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCoverImgName;
var globalFloatPanel_AyohaDtoreMerchant_AddEditItem_StockAlert;

function FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit(ID, ItemCode, ItemCoverImg, ItemName, ItemDescriptions,
    ItemPrice, ItemPriceDiscount, ItemPriceDiscountRate, ItemCategoryCode, ProductCategoryName, MembershipCardCode, MembershipCardName, ItemCoverImgName, Stock, ShowStock,StockAlert) {
    Ext.Viewport.remove(_FloatPanel_AyohaStoreMerchant_AddEditItem);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStoreMerchant_AddEditItem());
    this.overlay.show();
    CheckHeigtWidthScreenToll();
    isFloatPanel_AyohaStoreMerchant_AddEditItemOpen = 'Y';
    Ext.getCmp('htmlFloatPanel_AyohaStoreMerchant_AddEditItem_StockUpdate').setHidden(false);
    globalUploadImageProcess_ImageResult = "ExistingImage";
    // alert(ID + "," + ItemCode + "," + ItemCoverImg + "," + ItemName + "," + ItemDescriptions + "," + ItemPrice + "," + ItemPriceDiscount + "," + ItemPriceDiscountRate + "," + ItemCategoryCode);
    Ext.getCmp('htmlFloatPanel_AyohaStoreMerchant_AddEditItem_TitleTxt').setHtml('<font size=3 color=black><b>Edit Product</b></font>');
    Ext.getCmp('btnFloatPanel_AyohaStoreMerchant_AddEditItemIcon').setHtml('<div ><img src="resources/icons/EditWhite03.png" width="25" height="25" alt="Company Name"></div>');













    var containerViewNamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_Stock = Ext.ComponentQuery.query('container[name=NamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_Stock]')[0];
    var containerViewElNamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_Stock = containerViewNamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_Stock.element;
    containerViewElNamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_Stock.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_StockEditShow();
      }
    );

    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_AttachementImageName').value = ItemName;
    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Price').value = ItemPrice;
    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_DiscountPrice').value = ItemPriceDiscount;
    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Discount').value = ItemPriceDiscountRate;
    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Category').value = ProductCategoryName;
    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard').value = MembershipCardName;
    globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCoverImgName = ItemCoverImgName;
    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Stock').value = Stock;
    globalFloatPanel_AyohaDtoreMerchant_AddEditItem_StockAlert = StockAlert;

  
    var regex = /<br\s*[\/]?>/gi;
    var ModifiedItemDescription = ItemDescriptions.replace(regex, "\n");


    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions').value = ModifiedItemDescription;
    // document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_AttachementImageName').value = ItemName;
    // var Count = _DataStore_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore.getCount();
    globalFloatPanel_AyohaStoreMerchant_AddEditItem_ID = ID;
    globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode = ItemCode;
    globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode = ItemCategoryCode;
    Ext.getCmp('htmFloatPanel_AyohaStoreMerchant_AddEditItem_Picture').setHtml('<img src="' + ItemCoverImg + '"  style="width:100%;height:' + globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage + 'px"  alt="Company Name">');
    FloatPanel_AyohaStoreMerchant_AddEditItem_initializedTapEvent();


    var textbox = document.getElementById("input-FloatPanel_AyohaStoreMerchant_AddEditItem_Stock");
    textbox.readOnly = "readonly";//readOnly is cese-sensitive
    globalFloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock = ShowStock;

    if (ShowStock == "Y") {
        document.getElementById("checkbox-FloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock").checked = true;
    } else {
        document.getElementById("checkbox-FloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock").checked = false;
    }

    FloatPanel_AyohaStoreMerchant_AddEditItem_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCode();
}


function FloatPanel_AyohaStoreMerchant_AddEditItemHide() {
    _FloatPanel_AyohaStoreMerchant_AddEditItem.hide(); isFloatPanel_AyohaStoreMerchant_AddEditItemOpen = 'N';
    RemovePages(_FloatPanel_AyohaStoreMerchant_AddEditItem, "isFloatPanel_AyohaStoreMerchant_AddEditItemOpen");
}

function FloatPanel_AyohaStoreMerchant_AddEditItem_initializedTapEvent() {
    var containerView = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaStoreMerchant_AddEditItem_PictureProduct]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStoreMerchant_AddEditItem_UploadPictureProduct();
      }
    );





    var containerViewnamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory = containerViewnamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory.element;
    containerViewElnamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCategory.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_ItemCategoryShow();
      }
    );



    var containerViewnamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard = containerViewnamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard.element;
    containerViewElnamecontainerFloatPanel_AyohaStoreMerchant_AddEditItem_MembershipCard.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_MembershipCardEntitledShow();
      }
    );





    
}

function FloatPanel_AyohaStoreMerchant_AddEditItem_UploadPictureProduct() {

    localStorage.setItem("Module", "FloatPanel_AyohaStoreMerchant_AddEditItem");
    localStorage.setItem("ImageCompenant", "input-FloatPanel_AyohaStoreMerchant_AddEditItem_ProductImage");
    $(document).ready(function () {
        $("input#input-FloatPanel_AyohaStoreMerchant_AddEditItem_ProductImage").click();
    });
}











function CheckHeigtWidthScreenToll() {

    var containerOne = 'FloatPanel_AyohaStoreMerchant_AddEditItemBorderBg';
    var containerTwo = 'htmFloatPanel_AyohaStoreMerchant_AddEditItem_Picture';

    MovementCustomePanelSetHeight(containerOne, containerTwo);
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    Ext.getCmp('FloatPanel_AyohaStoreMerchant_AddEditItemID').setHeight(x + 7);
    // Ext.getCmp('containerFloatPanel_AyohaStoreMerchant_AddEditMainID').setHeight(newHeights);


}


var globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage;
function MovementCustomePanelSetHeight(containerOne, containerTwo) {

    var x = parseInt(screen.width);
    var y = parseInt(screen.height);

    // alert("width:" + x + "  height:" + y);
    if (y <= 568) {




        //Ext.getCmp(containerOne).setHeight(265);
        //Ext.getCmp(containerTwo).setHeight(261);
        //globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 261;

        Ext.getCmp(containerOne).setHeight(165);
        Ext.getCmp(containerTwo).setHeight(161);
        globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 161;



       
        return;
    } if (y >= 640 && y < 666) {

        //Ext.getCmp(containerOne).setHeight(325);
        //Ext.getCmp(containerTwo).setHeight(321);
        //globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 321;

        Ext.getCmp(containerOne).setHeight(225);
        Ext.getCmp(containerTwo).setHeight(221);
        globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 221;

        return;

    }
    if (y >= 667 && y < 721) {
        //Ext.getCmp(containerOne).setHeight(345);
        //Ext.getCmp(containerTwo).setHeight(341);
        //globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 341;
        Ext.getCmp(containerOne).setHeight(245);
        Ext.getCmp(containerTwo).setHeight(241);
        globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 241;


        return;

    }

    if (y >= 722 && y < 730) {

        Ext.getCmp(containerOne).setHeight(360);
        Ext.getCmp(containerTwo).setHeight(356);
        globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 356;
        return;

    }
    if (y >= 731 && y < 779) {


        //Ext.getCmp(containerOne).setHeight(420);
        //Ext.getCmp(containerTwo).setHeight(416);
        //globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 416;

        Ext.getCmp(containerOne).setHeight(320);
        Ext.getCmp(containerTwo).setHeight(316);
        globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 316;

       

        return;
    }




    if (y >= 780 && y < 811) {


        //globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 396;
        //Ext.getCmp(containerOne).setHeight(400);
        //Ext.getCmp(containerTwo).setHeight(396);

        globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 296;
        Ext.getCmp(containerOne).setHeight(300);
        Ext.getCmp(containerTwo).setHeight(296);

        return;

    }

    if (y >= 812 && y < 824) {

        //Ext.getCmp(containerOne).setHeight(500);
        //Ext.getCmp(containerTwo).setHeight(496);
        //globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 496;
        Ext.getCmp(containerOne).setHeight(400);
        Ext.getCmp(containerTwo).setHeight(396);
        globalFloatPanel_AyohaStoreMerchant_AddEditItem_HeightImage = 396;

        return;
    }

}




function FloatPanel_AyohaStoreMerchant_AddEditItem_Save() {



   // alert(globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode);

   


    var ItemName = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_AttachementImageName').value;
    var ItemPrice = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Price').value;
    var ItemPriceDiscount = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_DiscountPrice').value;
    var ItemPriceDiscountRate = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Discount').value;
    var ItemCategory = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Category').value;
    var ItemDescriptions = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions').value;
    var Stock = parseInt(document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Stock').value);
    

    if (ItemName.length < 2) {
        swalFireFail("Product Name Not Valid!");
        return;
    }

    if (ItemPrice.length < 1) {
        swalFireFail("Price Not Valid!");
        return;
    }
    if (ItemPriceDiscountRate.length < 1) {
        swalFireFail("Discount Rate Not Valid!");
        return;
    }
    if (ItemCategory.length < 1) {
        swalFireFail("Product Category Not Valid!");
        return;
    }
    if (ItemDescriptions.length < 1) {
        swalFireFail("Product Description Not Valid!");
        return;
    }
    if (globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode.length < 1) {
        swalFireFail("Membership Card Not Valid!");
        return;
    }
    if (Stock) {
        Stock = Stock;
    } else
    {
        Stock = 0;
    }

   
    

    var objn = {
        "ID": globalFloatPanel_AyohaStoreMerchant_AddEditItem_ID,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "ItemCode": globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode,
        "ItemName": ItemName,
        "ItemPrice": ItemPrice,
        "ItemPriceDiscount": ItemPriceDiscount,
        "ItemCoverImg": "NA",
        "ItemDescriptions": ItemDescriptions,
        "ItemCategoryCode": globalFloatPanel_AyohaStore_ItemCategory_ItemCategoryCode,
        "CreatedBy": GetCurrentUserAccountNo(),
        "ItemPriceDiscountRate": ItemPriceDiscountRate,
        //"ItemCoverImgName": localStorage.getItem("UploadImageProcess_ImageName"),
        "ItemCoverImgName": globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCoverImgName,
        "MembershipCardCode": globalFloatPanel_AyohaStore_MembershipCardEntitled_AyohaStoreSaleItemMembershipCardEntitled_MembershipCardCode,
        "Stock": Stock,
        "ShowStock":globalFloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock,
    };

    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemInsertUpdate',

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

              
                swalFireSuccess("Add Product Successfull!");
               


                if(isFloatPanel_OpenAccountStepOpen=='Y'){
                    FloatPanel_OpenAccountStepHide();
                    Ext.getCmp('btnMyAccount_DashboardTopSetting').setHidden(true);
                    globalCountAyohaSaleItem=1;
                   // DashboardMerchantMainStore();
                }


                FloatPanel_AyohaStoreMerchant_AddEditItemHide();
              
                    var task = Ext.create('Ext.util.DelayedTask', function () {

                        FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore('firstload');
                        //FloatPanel_AyohaStoreMerchant_ProductList_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore();
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



function FloatPanel_AyohaStoreMerchant_AddEditItem_DiscountCalculated() {
    var ItemPrice = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Price').value;
    //  var ItemPriceDiscount = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_DiscountPrice').value;
    var ItemPriceDiscountRate = document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_Discount').value;



    var DiscountPercentage = ItemPriceDiscountRate / 100;
    var DiscountRatePrice = ItemPrice * DiscountPercentage;
    var PriceAfterDiscount = ItemPrice - DiscountRatePrice;

    document.getElementById('input-FloatPanel_AyohaStoreMerchant_AddEditItem_DiscountPrice').value = PriceAfterDiscount;

}


function FloatPanel_AyohaStoreMerchant_AddEditItem_Delete() {

    Swal.fire({
        title: 'Are you sure To delete?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'purple',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {

            var objn = {
                "ID": globalFloatPanel_AyohaStoreMerchant_AddEditItem_ID,
                "SubscriberAccNo": GetCurrentUserAccountNo(),
            };
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemDeleteItemMerchant',

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


                        swalFireSuccess("Delete Product Successfull!");
                        FloatPanel_AyohaStoreMerchant_AddEditItemHide();

                        var task = Ext.create('Ext.util.DelayedTask', function () {

                            FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore('firstload');
                            //FloatPanel_AyohaStoreMerchant_ProductList_MerchantAyohaStoreSaleItemloadByEnterpriseAccNoStore();
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
    });

}



var globalFloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock;

function FloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock(checkbox, ID) {


    if (checkbox.checked) {
        // alert("The check box is checked.:ID" + ID + " PAccountNos:" + PAccountNos);
      



        globalFloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock = "Y";




    }
    else {
       
        globalFloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock = "N";
       
    }

   // alert(globalFloatPanel_AyohaStoreMerchant_AddEditItem_ShowStock)
    //console.log(arrFloatPanel_PointManagement_CreatePoint);
}


var globalFloatPanel_AyohaStoreMerchant_AddEditItem_SequenceNo;
function FloatPanel_AyohaStoreMerchant_AddEditItem_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCode() {
    _DataStore_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore.getProxy().setExtraParam('EnterpriseAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore.getProxy().setExtraParam('ItemCode', globalFloatPanel_AyohaStoreMerchant_AddEditItem_ItemCode);
    _DataStore_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreSaleItemImgExtend/AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCode');
    _DataStore_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore.load();

 
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Count = _DataStore_AyohaStoreSaleItemImgExtendloadByEnterpriseAccNoAndItemCodeStore.getCount();
        globalFloatPanel_AyohaStoreMerchant_AddEditItem_SequenceNo = parseInt(Count) + 1;
       // alert(globalFloatPanel_AyohaStoreMerchant_AddEditItem_SequenceNo);
       // Ext.getCmp('htmlFloatPanel_AyohaStore_DeliveryChargeList_recordFound').setHtml('<div style="margin:-3px 0px 0px 0px;font-size:16px;color:black;font-weight:bold;">' + Count + '</div>');


        // alert(Count);


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}