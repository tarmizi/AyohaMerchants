
Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails', {

});

var _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails;


var isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'N';



var isDeleteorSave;


function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails() {

    _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails =
    Ext.create('Ext.Container', {
        zIndex: 200,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsID',
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
            //direction: 'up',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },

        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        // listeners: {
        //     initialize: function (c) {
        //         this.element.on({
        //             swipe: function (e, node, options) {
        //                 //if (e.direction == "up") {
        //                 //    LoyaltyCardRedeemListHide();
        //                 //}
        //                 if (e.direction == "left") {
        //                     _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'left',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
                          
        //                 } if (e.direction == "right") {
        //                     _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'right',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
                          
        //                 }
        //                 isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'N';
        //                 var isHaveEnterpriseAccNo = localStorage.getItem('isHaveEnterpriseAccNo');
        //                 if (isHaveEnterpriseAccNo == "NO") {
        //                     setTimeout(function () {
        //                         Ext.getCmp('mainView').setActiveItem(0);
        //                     }, 800);

        //                 }

        //             }
        //         });
        //     }
        // },

        items: [

            {

                xtype: 'container',
                width: '100%',
                height:60,
                docked:'top',
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                style:GetHeaderStyle(),
                id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHeader',
              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;box-shadow: 5px 10px 18px #888888;',
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
width:20,
                        },
                        {
                            margin: '0 0 0 0',
                            id: 'htmlFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_TitleHeaderTxt',
                            html: '<font size=4 color=black><b>Enterprise Details Info</b></font>'
                        },
                                     
                                    
                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsBack',
                                        height: 30,
                                        width: 35,
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {

                                            _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails.hide(Ext.fx.Animation({
                                                // type: 'slideOut',
                                                // direction: 'left',
                                                // easing: 'cubic-bezier(.7,0,.7,1)',
                                                // duration: 250
                                                type: 'popOut',
                                                //direction: 'up',
                                                //easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));


                                            var isHaveEnterpriseAccNo=localStorage.getItem('isHaveEnterpriseAccNo');
                                            if (isHaveEnterpriseAccNo == "NO") {
                                                setTimeout(function () {
                                                    Ext.getCmp('mainView').setActiveItem(0);
                                                }, 800);
                                              
                                            }
                                            isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'N';
                                        }
                                    },
                                       {
                                        xtype: 'spacer',
width:30,
                                    },

                                              {
                                                  xtype: 'container',
                                                  //   margin: '0 0 0 5',
                                                   hidden: true,
                                                  //style: 'background-color: white;',
                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                  height: 25,
                                                  width: 70,
                                                  // margin: '70 0 0 0',
                                                  id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHaiUser',
                                                  layout: {

                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'
                                                  },
                                                  items: [


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHaiUser',
                                                          html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                      },
                                                      {
                                                          xtype: 'container',
                                                          //   margin: '0 0 0 5',
                                                          // hidden: true,
                                                          style: 'background-color: transparent;',

                                                          height: 25,
                                                          width: 70,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailseWallet',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailseWallet',
                                                                   margin: '4 0 0 -15',
                                                                   height: 30,
                                                                   width: 35,
                                                                   // iconCls: 'list',
                                                                   html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                   ui: 'plain',
                                                                   handler: function () {
                                                                       DrawerMenuShow();

                                                                   }
                                                               },
                                                               {
                                                                   margin: '7 0 0 2',
                                                                   html: '<font size=2 color=black><b>RM00.00</b></font>'
                                                               }
                                                          ]
                                                      },

                                                  ]
                                              },
                                           {
                                               xtype: 'container',
                                               margin: '0 0 0 -5',
                                               hidden: true,
                                               //style: 'background-color: white;',
                                               style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                               height: 40,
                                               width: 40,
                                               // margin: '70 0 0 0',
                                               id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsPictureUser',
                                               layout: {

                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center'
                                               },
                                               items: [
                                                   {
                                                       xtype: 'button',
                                                       height: 40,
                                                       width: 40,
                                                       margin: '0 0 0 -11',
                                                       id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsInfo',
                                                       //badgeText: "2",
                                                       html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                           //  setupMovementMap(2);





                                                           //Ext.getCmp('mainView').setActiveItem(16);
                                                           //loadNotificationSummary();
                                                       }
                                                   },



                                               ]
                                           },










                       ]

            },


            {
                xtype: 'container',
                margin: '0 0 0 0',
              //  id: 'FloatPanel_AyohaContestSettingTitleOutter',
                height:50,
                width: '100%',
                docked: 'bottom',
                style:GetFooterStyle(),
               // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
         
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [


              
  


    {
        xtype: 'spacer'
    },
            {
                xtype: 'button',
                
                id:'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Delete',
                //  badgeText: '1',
                margin: '0 -18 -8 0',
                //height: 35,
                //width: 35,
                html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                    isDeleteorSave = 'Delete';
              
                    Swal.fire({
                        title: 'Are you sure want to delete?',
                        // text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then(function (result) {
                        if (result.isConfirmed) {
              
              
                            FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("InActive");
                          
                        }
                    })
              




                }
            },
    {
        xtype: 'button',
        id:'txt_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Delete',
        //  badgeText: '1',
        margin: '7 0 0 5',
        //height: 40,
        //width: 130,
        html: '<font size=2 color=grey>*Delete</font>',
        ui: 'plain',
        handler: function () {


                               isDeleteorSave = 'Delete';
              
                    Swal.fire({
                        title: 'Are you sure want to delete?',
                        // text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then(function (result) {
                        if (result.isConfirmed) {
              
              
                            FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("InActive");
                          
                        }
                    })
              
              
                
                  
        }
    },

         {
             xtype: 'button',
             id:'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
             //  badgeText: '1',
             margin: '0 -18 -8 0',
             //height: 35,
             //width: 35,
             html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
             ui: 'plain',
             handler: function () {
                isDeleteorSave = 'Save';
                FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("Active");
                             
             }
         },
    {
        xtype: 'button',
        //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
        id:'txtbtn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
        //  badgeText: '1',
        margin: '7 0 0 7',
        //height: 40,
        //width: 130,
        html: '<font size=2 color=grey>Save</font>',
        ui: 'plain',
        handler: function () {
            isDeleteorSave = 'Save';
            FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("Active");
        }
    },







                ]
            },


            // {
            //     xtype: 'container',
            //     height:50,
            //     docked:'bottom',
            //     width: '100%',
            //     style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;box-shadow: 18px 0px 18px #888888;',
     
            //     layout: {
            //         type: 'hbox',
            //         pack: 'right',
            //         align: 'right'
              
            //     },
            //     items: [
            //   {
            //     xtype: 'button',
            //     //  align: 'stretch',
            //    // flex: 1,
            //    width:100,
            //     ui: 'plain',
            //     // width: '80%',
            //     height: 50,
            //     margin: '17 0 0 0',
            //     id: 'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Delete',
            //     // width: '80%',
            //     //style: {
            //     //    background: '#FA8072',
            //     //},
            //     // padding: '10px',
            //     //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
            //     text: '<button class="buttonDelete_web">Delete</button>',
              
            //     handler: function () {
              
              
            //         isDeleteorSave = 'Delete';
              
            //         Swal.fire({
            //             title: 'Are you sure want to delete?',
            //             // text: "You won't be able to revert this!",
            //             icon: 'warning',
            //             showCancelButton: true,
            //             confirmButtonColor: '#3085d6',
            //             cancelButtonColor: '#d33',
            //             confirmButtonText: 'Yes'
            //         }).then(function (result) {
            //             if (result.isConfirmed) {
              
              
            //                 FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("InActive");
                          
            //             }
            //         })
              
              
                
            //         //var valTextOne = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
            //         //if (valTextOne) {
              
            //         //    SaveTextCardContent();
              
            //         //} else {
            //         //    Swal.fire({
            //         //        position: 'center',
            //         //        icon: 'error',
            //         //        title: '<font size=5 color=red>Row Text 1 Cannot Empty!!</font>',
            //         //        showConfirmButton: true,
            //         //        // timer: 2500
            //         //    });
            //         //}
              
              
              
              
              
              
            //     },
              
              
            //   },
            //                                                     //  },
            //         //    {
            //         //        xtype: 'button',
            //         //        //flex: 1,
            //         //        width: 450,
            //         //        ui: 'plain',
            //         //        //  width: '80%',
            //         //        height: 50,
            //         //        margin: '27 0 0 0',
            //         //        id: 'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
            //         //        // width: '80%',
            //         //        //style: {
            //         //        //    background: '#FA8072',
            //         //        //},
            //         //        // padding: '10px',
            //         //        //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
            //         //        text: '<button class="buttonSave_web">SaveEE</button>',
              
            //         //        handler: function () {
                              
            //         //        },
              
              
            //         //    },
              

            //            {
            //             xtype: 'button',
            //             id:'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
            //             //  badgeText: '1',
            //            margin: '0 0 5 0',
            //             //height: 35,
            //             //width: 35,
            //             html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
            //             ui: 'plain',
            //             handler: function () {
            //                 isDeleteorSave = 'Save';
            //                 FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("Active");
                         
            //             }
            //         },
            //    {
            //        xtype: 'button',
            //        //id: 'txtFloatPanel_AyohaCardManagement_EditCard_Point_SaveCard',
            //        id:'txtbtn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
            //        //  badgeText: '1',
            //        margin: '0 7 7 0',
            //        //height: 40,
            //        //width: 130,
            //        html: '<font size=2 color=grey>Save</font>',
            //        ui: 'plain',
            //        handler: function () {
            //         isDeleteorSave = 'Save';
            //         FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("Active");
                 
            //        }
            //    },















              
              
            //              {
            //                  xtype: 'button',
            //                 // flex: 1,
            //                  //  align: 'stretch',
            //                  hidden:true,
            //                  ui: 'plain',
            //                  width: 450,
            //                  height: 50,
            //                  margin: '27 0 0 0',
            //                  id: 'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save_FirstCreate',
            //                  // width: '80%',
            //                  //style: {
            //                  //    background: '#FA8072',
            //                  //},
            //                  // padding: '10px',
            //                  //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
            //                  text: '<button class="buttonSignUp">Save</button>',
              
            //                  handler: function () {
                                
            //                      saveforFirstCreateEnterprise();
              
              
              
            //                  },
              
              
            //              },
              
                   
              
            //     ]
            //   },
              

            {
                xtype: 'container',
                width: '100%',
                height: '100%',
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
               style: ' background-color: transparent;',
                layout: {
                    type: 'vbox',
                            pack: 'start',
                            align: 'left'


                },

                items: [


                   




                    {
                        xtype: 'container',

                        width: '100%',
                        height: '100%',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left'

                        },

                        items: [


                           




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInformation',
                                width: '100%',
                                //height: 1800,
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsMaster',
                                layout: {
                                    type: 'hbox',
                                    pack: 'start',
                                    align: 'left'

                                },
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true,
                                    indicators:false,
                                },
                               


                                items: [
                                    {
                                        xtype: 'container',
                                        style: "background-color: transparent",
                                        margin: '0 0 0 0',
                                        width: '3%',
                                    },
                                    {
                                        xtype: 'container',
                                        style: "background-color: transparent",
                                        margin: '0 0 0 0',
                                        width: '49%',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left'

                                        },

                                        items: [
                                            {
                                                margin: '15 0 0 0',
                    
                                                html: '<font size=3 color=black><b>Enterprise Information</b></font>',
                    
                                            },

                                            {
                                                xtype: 'container',
                                                style: "background-color: transparent",
                                                margin: '0 0 0 0',
                                                height: 160,
                                                width: '100%',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'left',
                                                    align: 'left'

                                                },
                                                items: [

                                                  {
                                                 margin: '0 0 0 0',
                                                 height: 230,
                                                 width: 160,
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogo',
                                                 html: '<img src="resources/icons/Your-Logo-here.png" width="230" height="150"/>',
                                                 },
                                                ]

                                            },

                                             
                                             {
                                                 xtype: 'container',
                                                 margin: '-20 0 0 0',
                                                 width: '100%',
                                                 style: ' background-color:transparent',
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'start',
                                                     align: 'left'

                                                 },
                                                 items: [

                                                          {
                                                              xtype: 'container',

                                                              width: 155,
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
                                                                      hidden: true,
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

                                                                                html: '<font size=2 color=black>*Upload Enterprise Logo</font>',

                                                                            },


                                                                      ]
                                                                  },


                                               {
                                                   id: 'HtmlinputImgFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsUploadedImage',
                                                   hidden: true,
                                                   margin: '0 0 0 0',
                                                   width: '100%',
                                                   html: '<input type="file" id="inputImg-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadedLogoImage" accept="image/*"  onchange="inputImgFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsUploadedLogoImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                                   //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                               },





                                               {
                                                   margin: '-2 0 0 0',
                                                   hidden: true,
                                                   id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName',
                                                   width: '100%',
                                                   height: 20,
                                                   html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                                               },

                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadLogoImage',
                                                                 name: 'clickablebtnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadLogoImage',
                                                                 //  badgeText: '1',
                                                                 margin: '0 0 -10 -70',
                                                                 height: 35,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {

                                                                 }
                                                             },

                                                 ]

                                             },
                        {
                            xtype: 'container',

                            width: '100%',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'left'

                            },
                            items: [

                                 //{
                                 //    margin: '0 0 0 0',

                                 //    html: '<font size=3 color=black><b>TARMIZI RAHIM</b></font>',

                                 //},

                                         //{
                                         //    xtype: 'container',
                                         //    height: 1,
                                         //    width: '80%',
                                         //    style: {

                                         //        background: 'white',

                                         //    },
                                         //    layout: {
                                         //        type: 'hbox',
                                         //        pack: 'center',
                                         //        align: 'center'

                                         //    },
                                         //},





              {
                  xtype: 'container',
                  width: '100%',
                  layout: {
                      type: 'vbox',
                      pack: 'start',
                      align: 'left'

                  },
                  items: [
                       
                    {
                        xtype: 'container',
                        width: '100%',
                        style: ' background-color:transparent',
                        height:10
                    },
                      {
                          margin: '3 0 0 0',

                          html: '<font size=2 color=black>*Enterprise Name</font>',

                      },

                       {
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName',
                           margin: '-2 0 0 0',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                       },

                       {
                        xtype: 'container',
                        width: '100%',
                        style: ' background-color:transparent',
                        height:10
                    },

                       {
                        margin: '3 0 0 0',
                       // hidden:true,
                        id: 'HtmlFloatPanel_AyohaEnterpriseAccount_EnterpriseTagLine_txt',
                        html: '<font size=2 color=black>Enterprise TagLine/Slogan</font>',

                    },

                   {
                       id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTagLine',
                       margin: '-2 0 0 0',
                      // hidden: true,
                       width: '90%',
                       height: 20,
                       html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTagLine"   style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                   },


                       {
                           margin: '3 0 0 0',
                           hidden: true,
                           html: '<font size=2 color=black>Enterprise HQAccNo</font>',

                       },

                       {
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseHQAccNo',
                           margin: '-2 0 0 0',
                           hidden: true,
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseHQAccNo"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                       },

                        {
                            margin: '3 0 0 0',
                            hidden:true,
                            id: 'HtmlFloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo_txt',
                            html: '<font size=2 color=black>Enterprise AccNo</font>',

                        },

                       {
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseAccNo',
                           margin: '-2 0 0 0',
                           hidden: true,
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo"  readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                       },
                       {
                        xtype: 'container',
                        width: '100%',
                        style: 'background-color:transparent',
                        height:10
                    },
                        {
                            margin: '3 0 0 0',

                            html: '<font size=2 color=black>*Address</font>',

                        },
{
    xtype: 'container',
    width: '100%',
    style: 'background-color:transparent',
    height:120,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'

    },
    items:[
        {
            xtype: 'container',
            width: '90%',
            style: 'background-color:transparent',
            margin:'-15 0 0 0',
            height: 40,
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'center'

            },
            items:[
                {
                    xtype: 'container',
                    width: '30%',
                    style: ' background-color:transparent',
                    layout: {
                        type: 'hbox',
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
                                     type: 'vbox',
                                     pack: 'left',
                                     align: 'left'

                                 },
                                 items: [
                                     {
                                         xtype: 'container',
                                         width: '100%',
                                         style: ' background-color:transparent',
                                         height:10
                                     },

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

                                                   html: '<font size=2 color=black>State</font>',

                                               },


                                         ]
                                     },







                  {
                      margin: '-2 0 0 0',
                      id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State',
                      width: '100%',
                      height: 20,
                      html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                  },

                                 ]

                             },


                              //{
                              //    xtype:'container'

                              //},
                                {
                                    xtype: 'button',
                                    id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State',
                                    //  badgeText: '1',
                                    margin: '0 0 -10 -30',
                                    height: 35,
                                    width: 35,
                                    html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_StateShow();
                                    }
                                },

                    ]

                },
                {
                    xtype: 'container',
                    width: '3%',
                    style: 'background-color:transparent',                                    
                },
                {
                    xtype: 'container',
                    width: '30%',
                    style: ' background-color:transparent',
                    layout: {
                        type: 'hbox',
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
                                     type: 'vbox',
                                     pack: 'left',
                                     align: 'left'

                                 },
                                 items: [
                                     {
                                         xtype: 'container',
                                         width: '100%',
                                         style: ' background-color:transparent',
                                         height:10
                                     },

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

                                                   html: '<font size=2 color=black>City</font>',

                                               },


                                         ]
                                     },







                  {
                      margin: '-2 0 0 0',
                      id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_City',
                      width: '100%',
                      height: 20,
                      html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_City"   style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                  },

                                 ]

                             },


                              //{
                              //    xtype:'container'

                              //},
                                {
                                    xtype: 'button',
                                    id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_City',
                                    //  badgeText: '1',
                                    margin: '0 0 -10 -30',
                                    height: 35,
                                    width: 35,
                                    html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_State_CityShow();
                                    }
                                },

                    ]

                },
                {
                    xtype: 'container',
                    width: '3%',
                    style: 'background-color:transparent',                                    
                },
                {
                    xtype: 'container',
                    width: '33%',
                    style: ' background-color:transparent',
                    layout: {
                        type: 'hbox',
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
                                     type: 'vbox',
                                     pack: 'left',
                                     align: 'left'

                                 },
                                 items: [
                                     {
                                         xtype: 'container',
                                         width: '100%',
                                         style: ' background-color:transparent',
                                         height:10
                                     },

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

                                                   html: '<font size=2 color=black>Postcode</font>',

                                               },


                                         ]
                                     },







                  {
                      margin: '-2 0 0 0',
                      id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Postcode',
                      width: '100%',
                      height: 20,
                      html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Postcode"   style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                  },

                                 ]

                             },


                              //{
                              //    xtype:'container'

                              //},
                                {
                                    xtype: 'button',
                                    id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PostCode',
                                    //  badgeText: '1',
                                    margin: '0 0 -10 -30',
                                    height: 35,
                                    width: 35,
                                    html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_State_PostcodeShow();
                                    }
                                },

                    ]

                },
            ]
        },
        {
            margin: '26 0 0 0',

            html: '<font size=2 color=black>Jalan/Lot/Unit Etc</font>',

        },

        {
            margin: '-2 0 0 0',
            id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Jalan',
            width: '90%',
            
            height: 50,
            // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:black;color:black;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
            html: '<textarea id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Jalan" style="width:100%;height:50px;padding: 0px 0px;box-sizing: border-box;border: 1px solid black;border-radius: 4px;background-color: transparent;color:black;font-size: 12px;font-weight:bold" wrap="hard" ></textarea>'
            // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

        },
    ]
},

                       

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address',
                           width: '90%',
                           hidden:true,
                           height: 100,
                           // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:black;color:black;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                           html: '<textarea id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" style="width:100%;height:100px;padding: 0px 0px;box-sizing: border-box;border: 1px solid black;border-radius: 4px;background-color: transparent;color:black;font-size: 12px;font-weight:bold" wrap="hard" ></textarea>'
                           // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                       },
                       ////




                       /////


{
    xtype: 'container',
    width: '100%',
    style: ' background-color:transparent',
    height:10
},

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

                                                          html: '<font size=2 color=black>Business Registration No.</font>',

                                                      },


                                                ]
                                            },






               {

                   id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo',
                   margin: '-2 0 0 0',
                   width: '100%',
                   height: 20,
                   html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


               },

                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           hidden:true,
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/ballonInfoIconWhite.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {

                                           }
                                       },

                           ]

                       },
                       {
                        xtype: 'container',
                        width: '100%',
                        style: ' background-color:transparent',
                        height:10
                    },
                       


                     


                       {
                           margin: '3 0 0 0',

                           html: '<font size=2 color=black>Office Phone No</font>',

                       },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


                       },
                       {
                        xtype: 'container',
                        width: '100%',
                        style: ' background-color:transparent',
                        height:10
                    },
                       

                       //////
///
{
    margin: '3 0 0 0',
//hidden:true,
    html: '<font size=2 color=black>Company Email/PIC Email*</font>',

},

{
   // hidden:true,
    id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail',
    margin: '-2 0 0 0',
    width: '90%',
    height: 20,
    html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


},



                       ///////Business Type Group
                   {
                       xtype: 'container',
                       width: '100%',
                       style: ' background-color:transparent',
                       hidden:true,
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
                                            style: ' background-color:transparent',
                                            height:10
                                        },

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

                                                      html: '<font size=2 color=black>*Business Type Group</font>',

                                                  },


                                            ]
                                        },







                     {
                         margin: '-2 0 0 0',
                         id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseBusinessType',
                         width: '100%',
                         height: 20,
                         html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;" value="NA">'


                     },

                                    ]

                                },


                                 //{
                                 //    xtype:'container'

                                 //},
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType',
                                       //  badgeText: '1',
                                       margin: '0 0 -10 0',
                                       height: 35,
                                       width: 35,
                                       html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                       ui: 'plain',
                                       handler: function () {
                                           FloatPanel_BusinessTypeListShow();
                                           _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();
                                       }
                                   },

                       ]

                   },


                   {
                    xtype: 'container',
                    width: '100%',
                    style: ' background-color:transparent',
                    height:10
                },
                       {
                           margin: '3 0 0 0',

                           html: '<font size=2 color=black>Enterprise/Business Description</font>',

                       },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                       },


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
                                                style: ' background-color:transparent',
                                                height:10
                                            },
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

                                                     html: '<font size=2 color=black>*Enterprise Branch Type</font>',

                                                 },


                                                ]
                                            },




                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType',
                           width: '100%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                       },


                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {
                                               FloatPanel_EnterprisesBranchTypeListShow();
                                           }
                                       },

                           ]

                       },



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
                                                style: ' background-color:transparent',
                                                height:10
                                            },
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

                                                     html: '<font size=2 color=black>*Business Mode</font>',

                                                 },


                                                ]
                                            },




                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode',
                           width: '100%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                       },


                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {
                                               FloatPanel_BusinessModeShow();
                                           }
                                       },

                           ]

                       },

                       {
                        xtype: 'container',
                        width: '100%',
                        style: ' background-color:transparent',
                        height:10
                    },
                    //     {
                    //         margin: '3 0 0 0',

                    //         html: '<font size=2 color=black>*Owner/PIC</font>',

                    //     },

                    //    {
                    //        margin: '-2 0 0 0',
                    //        id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge',
                    //        width: '90%',
                    //        height: 20,
                    //        html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

                    //    },


/////////////////////////take out start



//////////////

                  ]
              },









                            //     {
                            //         margin: '-8 0 0 0',

                            //         html: '<font size=2 color=black>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                            //     },
                            //      {
                            //          margin: '-7 0 0 0',

                            //          html: '<font size=2 color=black>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                            //      },
                            ]

                        },





                                     //{
                                     //    xtype: 'container',
                                     //    height: 1,
                                     //    width: '90%',
                                     //    style: {

                                     //        background: 'white',

                                     //    },
                                     //    layout: {
                                     //        type: 'hbox',
                                     //        pack: 'center',
                                     //        align: 'center'

                                     //    },
                                     //},



                                     //////////////////////








                                        ]

                                    },

{
    xtype: 'container',
    style: "background-color:transparent",
    margin: '0 0 0 0',
    width: '48%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'

    },items:[
       
        {
            margin: '15 0 0 0',

            html: '<font size=3 color=black><b>Bank Account Info </b></font>',

        },


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

                                      html: '<font size=2 color=black>Bank Name</font>',

                                  },


                                 ]
                             },




        {
            margin: '-2 0 0 0',
            //id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode',
            //width: '100%',
            //height: 20,
            //html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'
                
                id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName',
                width: '100%',
                height: 20,
                html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName"  readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

        },


                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankAccountNameList',
                            //  badgeText: '1',
                            margin: '0 0 0 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                FloatPanel_BankAccountNameShow();
                            }
                        },

            ]

        },


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
                                style: ' background-color:transparent',
                                height:10
                            },

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

                                      html: '<font size=2 color=black>Bank Account Type</font>',

                                  },


                                 ]
                             },




        {
            margin: '-2 0 0 0',
            //id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode',
            //width: '100%',
            //height: 20,
            //html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

            id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType',
            width: '100%',
            height: 20,
            html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

        },


                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankAccountType',
                            //  badgeText: '1',
                            margin: '0 0 -10 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                FloatPanel_BankAccountTypeShow();
                            }
                        },

            ]

        },


        {
            xtype: 'container',
            width: '100%',
            style: ' background-color:transparent',
            height:10
        },
      
          {
              margin: '0 0 0 0',
              id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNameTxt',
              html: '<font size=2 color=black>Bank Account Name</font>',

          },

       {
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName',
           width: '90%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

       },
       {
        xtype: 'container',
        width: '100%',
        style: ' background-color:transparent',
        height:10
    },
           {
               margin: '0 0 0 0',
               id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNoTxt',
               html: '<font size=2 color=black>Bank Account No</font>',

           },

       {
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo',
           width: '90%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

       },
     
       {
        xtype: 'container',
        width: '100%',
        style: ' background-color:transparent',
        height:10
    },
         {
             margin: '15 0 0 0',

             html: '<font size=3 color=black><b>Social Media Link</b></font>',

         },


       /////

       {
           xtype: 'container',
           width: '100%',
           margin: '-10 0 0 0',
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
                                style: ' background-color:transparent',
                                height:10
                            },
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

                                        html: '<font size=2 color=black>Facebook</font>',

                                    },


                                ]
                            },





{
   margin: '-2 0 0 0',
   id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook',
   width: '90%',
   height: 20,
   html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook" placeHolder="Example:000165489466(click info button next to this field)"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

},


                        ]

                    },


                     //{
                     //    xtype:'container'

                     //},
                       {
                           xtype: 'button',
                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook',
                           //  badgeText: '1',
                           margin: '0 0 -10 0',
                           height: 35,
                           width: 35,
                           html: '<img src="resources/icons/ballonInfoIconWhite.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {
                            window.open("https://randomtools.io/");
                           }
                       },

           ]

       },
       ////








       {
           xtype: 'container',
           width: '100%',
           hidden:true,
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
                                style: ' background-color:transparent',
                                height:10
                            },
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

                                         html: '<font size=2 color=black>Twitter</font>',

                                     },


                                ]
                            },






       {
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter',
           width: '90%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

       },

                        ]

                    },


                     //{
                     //    xtype:'container'

                     //},
                       {
                           xtype: 'button',
                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter',
                           //  badgeText: '1',
                           margin: '0 0 -10 0',
                           height: 35,
                           width: 35,
                           html: '<img src="resources/icons/twitterWhiteIcon.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {

                           }
                       },

           ]

       },



       //////

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
                                style: ' background-color:transparent',
                                height:10
                            },

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

                                       html: '<font size=2 color=black>Instagram</font>',

                                   },

                                ]
                            },





{
    margin: '-2 0 0 0',
    id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram',
    width: '90%',
    height: 20,
    html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram" placeHolder="click info button next to this field"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

},


                        ]

                    },


                     //{
                     //    xtype:'container'

                     //},
                       {
                           xtype: 'button',
                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram',
                           //  badgeText: '1',
                           margin: '0 0 -10 0',
                           height: 35,
                           width: 35,
                           html: '<img src="resources/icons/ballonInfoIconWhite.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {
                            window.open("https://www.wikihow.com/Get-Instagram-Link");
                            
                           }
                       },

           ]

       },




       /////







         

















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
                                style: ' background-color:transparent',
                                height:10
                            },
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

                                       html: '<font size=2 color=black>Coordinate</font>',

                                   },

                                ]
                            },




       {
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate',
           width: '100%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate" placeHolder="click info button next to this field" style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

       },


                        ]

                    },


                     //{
                     //    xtype:'container'

                     //},
                       {
                           xtype: 'button',
                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate',
                           //  badgeText: '1',
                           margin: '0 0 -10 0',
                           height: 35,
                           width: 35,
                           html: '<img src="resources/icons/ballonInfoIconWhite.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {
                            
                            window.open("https://www.google.com/maps/");
                           }
                       },

           ]

       },










       {
        xtype: 'container',
        width: '100%',
        style: ' background-color:transparent',
        height:10
    },

       




       {
        xtype: 'container',
        width: '100%',
       // hidden:true,
        style: ' background-color:transparent',
        height:10
    },

    {
        margin: '5 0 0 0',
//hidden:true,
        html: '<font size=3 color=black><b>PIC/Owner Contact Info</b></font>',

    },

    {
        margin: '3 0 0 0',

        html: '<font size=2 color=black>*Owner/PIC Name</font>',

    },
  
   {
       margin: '-2 0 0 0',
       id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge',
       width: '90%',
       height: 20,
       html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

   },
   {
    xtype: 'container',
    width: '100%',
   // hidden:true,
    style: ' background-color:transparent',
    height:10
},
    {
        margin: '3 0 0 0',

        html: '<font size=2 color=black>*WhatsApp No</font>',

    },

    {
        margin: '-2 0 0 0',
        id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo',
        width: '90%',
        height: 20,
        html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

    },
    {
        xtype: 'container',
        width: '100%',
       // hidden:true,
        style: ' background-color:transparent',
        height:10
    },
//     {
//         margin: '3 0 0 0',
// hidden:true,
//         html: '<font size=2 color=black>Email</font>',

//     },

//     {
//         hidden:true,
//         id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail',
//         margin: '-2 0 0 0',
//         width: '90%',
//         height: 20,
//         html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'


//     },

        {
            margin: '15 0 0 0',
hidden:true,
            html: '<font size=3 color=black><b>Merchant Business URL</b></font>',

        },


        {
            xtype: 'container',
            width: '100%',
            hidden:true,
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
                                style: ' background-color:transparent',
                                height:10
                            },
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

                                      html: '<font size=2 color=black>*Merchant Business Page Type</font>',

                                  },


                                 ]
                             },




        {
            margin: '-2 0 0 0',
            id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_MerchantLinkType',
            width: '100%',
            height: 20,
            html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_MerchantLinkType"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;" value="Ayoha Store">'

        },


                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_MerchantLinkType',
                            //  badgeText: '1',
                          //  hidden:true,
                            margin: '0 0 -10 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                FloatPanel_MerchantLinkTypeShow();
                            }
                        },

            ]

        },




        {
            xtype: 'container',
            width: '100%',
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
                                style: ' background-color:transparent',
                                height:10
                            },

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
             id:'htmlMerchantLinkType',
             hidden:true,
             html: '<font size=2 color=black>---???---</font>',

         },

                                 ]
                             },






      {
          margin: '-2 0 0 0',
          id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite',
          hidden:true,
          width: '90%',
          height: 20,
          html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

      },



                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite',
                            //  badgeText: '1',
                            margin: '0 0 -10 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/websiteWhiteIcon.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {

                            }
                        },

            ]

        },


        {
            xtype: 'container',
            width: '100%',
            style: ' background-color:transparent',
            height:10,
            hidden: true,
        },


          {
              margin: '3 0 0 0',
              hidden: true,
              html: '<font size=2 color=black>Loyalty Card Type</font>',

          },

       {
           hidden: true,
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_LoyaltyCardType',
           width: '90%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_LoyaltyCardType"  style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

       },
       {
        xtype: 'container',
        width: '100%',
        style: ' background-color:transparent',
        height:20
    },

         {
             margin: '3 0 0 0',

             html: '<font size=3 color=black><b>Ayoha Merchant Account Info (Read Only)</b></font>',

         },


         {
            xtype: 'container',
            width: '100%',
            style: ' background-color:transparent',
            hidden:true,
            height:10
        },

           {
               margin: '3 0 0 0',
               id:'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_RegisterDate',
               html: '<font size=2 color=black>Register Date</font>',

           },

       {
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedDate',
           width: '90%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedDate" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

       },
       {
        xtype: 'container',
        width: '100%',
        style: ' background-color:transparent',
        height:10
    },
       {
           margin: '3 0 0 0',
           hidden: true,
           html: '<font size=2 color=black>Register By</font>',

       },

       {
           hidden: true,
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedBy',
           width: '90%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedBy" readOnly style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

       },
    //    {
    //     xtype: 'container',
    //     width: '100%',
    //     style: ' background-color:transparent',
    //     height:10
    // },
       {
           margin: '3 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersionTxt',
           html: '<font size=2 color=black>Versions</font>',

       },

       {
           margin: '-2 0 0 0',
           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion',
           width: '90%',
           height: 20,
           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion"   style="border-color:black;color:black;width:100%;text-align: left;font-size:12px;">'

       },

    ]
},
                                

{
    xtype: 'container',
    style: "background-color: transparent",
    margin: '0 0 0 0',
    width: '3%',
},                        












                                ]

                            },
                              




                        ]
                    },


                ]
            },












        ]





    });
    return _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails;



}








function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsShow(EnterpriseAccNo) {

    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails());
    this.overlay.show();
    isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'Y';
  
    

    Load_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisesLoadByEnterpriseAccNoStore(EnterpriseAccNo);

    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadLogoImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_uploadEnterpriseLogoImg();
      }
    );

    isAddNewEnterprise = 'N';




}



function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsAddNewShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails());
    this.overlay.show();
    isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'Y';
    isAddNewEnterprise = 'Y'; 
    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadLogoImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_uploadEnterpriseLogoImg();
      }
    );

    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersionTxt').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_RegisterDate').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedDate').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseAccNo').setHidden(true);
    Ext.getCmp('HtmlFloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo_txt').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Add New Enterprise</b></font>')


   
    // setTimeout(function () {
        Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Delete').setHidden(true);
        Ext.getCmp('txt_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Delete').setHidden(true);
        
        // Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save').setHidden(true);
        // Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save_FirstCreate').setHidden(false);                    
        // Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_TitleHeaderTxt').setHtml('<font size=4 color=black><b>Create Enterprise</b></font>');
        // document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value = data.results[0].AccountNo+"-NoEnterprise";
        // document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value=data.results[0].AccountName;
        // document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo').value=data.results[0].PhoneNumber;
        // document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail').value=data.results[0].Email;
        // document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value=data.results[0].PhoneNumber;
        // document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_MerchantLinkType').value="Ayoha Store";
        // document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite').value="NA";
       
       
        LoadingCustomMsgHide();
        LoadingPanelHide();

    // }, 2500);




}


function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHide() {
    _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails.hide(); isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'N';
    var isHaveEnterpriseAccNo = localStorage.getItem('isHaveEnterpriseAccNo');
    if (isHaveEnterpriseAccNo == "NO") {
        setTimeout(function () {
            Ext.getCmp('mainView').setActiveItem(0);
        }, 800);

    }
}



//var StampCount;

function Load_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisesLoadByEnterpriseAccNoStore(EnterpriseAccNo) {
    LoadingPanelShow(getLoadingIcon(), 'Loading....'); 
    Ext.getStore('EnterprisesLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: EnterpriseAccNo,

    });
    Ext.StoreMgr.get('EnterprisesLoadByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisesLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccNo
        });
        Ext.StoreMgr.get('EnterprisesLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('EnterprisesLoadByEnterpriseAccNoStore');
        var modelRecord = myStore.getAt(0);




        Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogo').setHtml('<img src="' + modelRecord.get('EnterpriseLogoPath') + '" width="160" height="160"/>')

        globalFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_ID = modelRecord.get('ID');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value = modelRecord.get('EnterpriseLogoName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseHQAccNo').value = modelRecord.get('EnterpriseHQAccNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value = modelRecord.get('EnterpriseAccNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName').value = modelRecord.get('EnterpriseName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value = modelRecord.get('EnterpriseAddress');

        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Jalan').value = modelRecord.get('NamaJalan');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State').value = modelRecord.get('Negeri');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_City').value = modelRecord.get('Bandar');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Postcode').value = modelRecord.get('Postkod');





        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo').value = modelRecord.get('EnterpriseRegistrationNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail').value = modelRecord.get('EnterpriseEmail');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo').value = modelRecord.get('EnterprisePhoneNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType').value = modelRecord.get('EnterpriseType');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions').value = modelRecord.get('EnterpriseDescriptions');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook').value = modelRecord.get('EnterpriseFacebook');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter').value = modelRecord.get('EnterpriseTwiter');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram').value = modelRecord.get('EnterpriseInstagram');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite').value = modelRecord.get('EnterpriseWebsite');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate').value = modelRecord.get('EnterpriseCoordinate');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value = modelRecord.get('EnterpriseBusinessType');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value = modelRecord.get('PersonInCharge');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value = modelRecord.get('PICContactNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_LoyaltyCardType').value = modelRecord.get('LoyaltyCardType');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedDate').value = modelRecord.get('CreatedDate');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedBy').value = modelRecord.get('CreatedBy');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion').value = modelRecord.get('AyohaVersion');       
        localStorage.setItem('BusinessTypeGroupCode', modelRecord.get('BusinessTypeGroupCode'));
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode').value = modelRecord.get('BusinessMode');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_MerchantLinkType').value = modelRecord.get('MerchantLinkType');

        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo').value = modelRecord.get('BankAccountNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value = modelRecord.get('BankName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType').value = modelRecord.get('BankAccountType');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName').value = modelRecord.get('BankAccountName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTagLine').value = modelRecord.get('EnterpriseTagLine');
       
       
        Ext.getCmp('htmlMerchantLinkType').setHtml('<font size=2 color=black>' + modelRecord.get('MerchantLinkType') + ' Link/URL</font>')



        Ext.Viewport.setMasked(false);

var negeri=document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State').value ;
if (negeri=="Johor")
{   globalFloatPanel_State_StateCode='JHR'    }
if (negeri=="Kedah")
{   globalFloatPanel_State_StateCode='KDH'    }
if (negeri=="Kelantan")
{   globalFloatPanel_State_StateCode='KTN'    }
if (negeri=="Wilayah Persekutuan Kuala Lumpur")
{   globalFloatPanel_State_StateCode='KUL'    }
if (negeri=="Wilayah Persekutuan Labuan")
{   globalFloatPanel_State_StateCode='LBN'    }
if (negeri=="Melaka")
{   globalFloatPanel_State_StateCode='MLK'    }
if (negeri=="Negeri Sembilan")
{   globalFloatPanel_State_StateCode='NSN'    }
if (negeri=="Pahang")
{   globalFloatPanel_State_StateCode='PHG'    }
if (negeri=="Wilayah Persekutuan Putra Jaya")
{   globalFloatPanel_State_StateCode='PJY'    }
if (negeri=="Perlis")
{   globalFloatPanel_State_StateCode='PLS'    }
if (negeri=="Pulau Pinang")
{   globalFloatPanel_State_StateCode='PNG'    }
if (negeri=="Perak")
{   globalFloatPanel_State_StateCode='PRK'    }
if (negeri=="Selangor")
{   globalFloatPanel_State_StateCode='SGR'    }
if (negeri=="Sarawak")
{   globalFloatPanel_State_StateCode='SRW'    }
if (negeri=="Terengganu")
{   globalFloatPanel_State_StateCode='TRG'    }














        




        LoadingPanelHide();




    });
    task.delay(1000);

}











var globalEnterpriseLogoImageBase64;
var globalFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_ID;
function inputImgFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsUploadedLogoImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadedLogoImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadedLogoImage').files[0].name;

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
                    globalEnterpriseLogoImageBase64 = event.target.result;
                    document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value = fileName;
                    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogo').setHtml('<img src=' + globalEnterpriseLogoImageBase64 + ' width="160" height="160"/>')


                    //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',


                    // Ext.getCmp('AccomodationReceiptPicture').setSrc(FuelReceiptsImg64);
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}





function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_uploadEnterpriseLogoImg() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadedLogoImage").click();
    });
}















function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount(RowStatus) {



   var Negeri= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State').value;
   var Bandar= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_City').value;
   var Postkod= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Postcode').value;
   var NamaJalan= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Jalan').value;


   document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value=NamaJalan+","+Bandar+","+Postkod+"."+Negeri;
  

    var EnterpriseName= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName').value;
    var EnterpriseAddress = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value;
    var BusinessType= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value;
    var EnterpriseType = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType').value;
    var PersonInChargeContactNo =  document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value;
    var PersonInCharge = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value;

    var PersonInChargeContactNo = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value;
    var BusinessMode = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode').value;
    var MerchantLinkType = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_MerchantLinkType').value;
var EnterpriseEmails=document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail').value;
    if (!EnterpriseName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Name required!</font>");
        return;
    }

    if (!Negeri) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Negeri  required!</font>");
        return;
    }
    if (!Bandar) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Bandar  required!</font>");
        return;
    }
    if (!Postkod) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Postkod  required!</font>");
        return;
    }
    if (!NamaJalan) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>NamaJalan  required!</font>");
        return;
    }


    if (!EnterpriseAddress) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Address required!</font>");
        return;
    }

    if (!EnterpriseEmails) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Email required!</font>");
        return;
    }
    if (!BusinessType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Business Type required!</font>");
        return;
    }


    if (!EnterpriseType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Branch Type required!</font>");
        return;
    }
    if (!PersonInChargeContactNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Person In Charge Contact No required!</font>");
        return;
    }
    if (!PersonInCharge) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Person In Charge Name required!</font>");
        return;
    }


    if (!BusinessMode) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>BusinessMode required!</font>");
        return;
    }
    // if (!MerchantLinkType) {
    //     swalFireFail("Save Failed!!!" + "<br><font size=2>MerchantLinkType required!</font>");
    //     return;
    // }



    var imgbase64;

    if (globalEnterpriseLogoImageBase64) {
        imgbase64 = globalEnterpriseLogoImageBase64;
    } else {
        imgbase64 = "ExistingImage";
    }
    var EnterpriseAccNo;
    var HQEnterpriseAccNo;
   
    if (isAddNewEnterprise == 'Y') {
        var currEnterpriseAccNo = GetEnterpriseAccNo();
        var res = currEnterpriseAccNo.split("-");
        var genNumber = Math.floor(Math.random() * 99999) + 1;
        var genNumber2 = Math.floor(Math.random() * 8888) + 1;
      EnterpriseAccNo = res[0] + "-" + genNumber+"-"+ genNumber2+ "-" +"NoEnterprise";
       HQEnterpriseAccNo= res[0] + "-" + genNumber+"-"+ genNumber2+ "-" +"NoEnterprise";
      //  EnterpriseAccNo = res[0] + "-" + genNumber+"-" +"NoEnterprise";
       // HQEnterpriseAccNo= res[0] + "-" + genNumber+"-" +"NoEnterprise";
       
        globalFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_ID = 0;
    } else
    {
        EnterpriseAccNo = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value;
        HQEnterpriseAccNo=GetEnterpriseHQAccNo();
    }
  
    if(globalFloatPanel_AyohaEnterpriseAccount_Enterprisecount>0){
        HQEnterpriseAccNo=GetEnterpriseHQAccNo();
    }
    // alert(EnterpriseAccNo);
    // alert(HQEnterpriseAccNo);
    // return;

    var gile = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value;
    console.log(gile);
    var ImgPaths =GetDomainUrl()+"/AyohaImgCard/Logo/" + GetEnterpriseAccNo() + "/" + document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value;
 
   
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": globalFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_ID,
        "EnterpriseHQAccNo": HQEnterpriseAccNo,
        "EnterpriseAccNo": EnterpriseAccNo,
        "EnterpriseName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName').value,
        "EnterpriseAddress": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value,
        "EnterprisePhoneNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo').value,
        "EnterpriseRegistrationNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo').value,
        "EnterpriseEmail": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail').value,
        //"EnterpriseWebsite": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite').value,
        "EnterpriseWebsite":"NA",
       
        "EnterpriseDescriptions": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions').value,
        "EnterpriseFacebook": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook').value,
        "EnterpriseTwiter": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter').value,
        "EnterpriseInstagram": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram').value,
        "EnterpriseCoordinate": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate').value,
        "EnterpriseLogoPath": ImgPaths,
        "EnterpriseLogoName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value,
        "RowStatus": RowStatus,
       // "CreatedBy": document.getElementById('UN').value,
       "CreatedBy":GetCurrAyohaEnterpriseUserAccountNo(),
        "PICContactNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value,
        "PersonInCharge": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value,
        "LoyaltyCardType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_LoyaltyCardType').value,
        "EnterpriseType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType').value,
        "EnterpriseBusinessType": gile,
        "AyohaVersion": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion').value,
        "EnterpriseLogoImg64": imgbase64,
        "BusinessTypeGroupCode": localStorage.getItem('BusinessTypeGroupCode'),
        "MerchantLinkType": "Ayoha Store",
        "BusinessMode": BusinessMode,
        "BankAccountNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo').value,
        "BankName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value,
        "BankAccountType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType').value,
        "BankAccountName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName').value,
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

     
        "Negeri": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State').value,
        "Bandar": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_City').value,
        "Postkod": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Postcode').value,
        "NamaJalan": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Jalan').value,
   "EnterpriseTagLine": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTagLine').value,
    "EnterpriseCount":globalFloatPanel_AyohaEnterpriseAccount_Enterprisecount
};
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Enterprises/EnterprisesInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                isDeleteorSave
                swalFireSuccess(isDeleteorSave + " Succesfully!");
                


            }
            else {

                swalFireFail(isDeleteorSave + " Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail(isDeleteorSave + "Failed!!");
        }
       
    });
    FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHide();

    // if (isAddNewEnterprise == 'Y')
    // {
    //     return;
    // }
    Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseHQAccNoStore();
}


function saveforFirstCreateEnterprise() {



    var Negeri= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State').value;
    var Bandar= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_City').value;
    var Postkod= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Postcode').value;
    var NamaJalan= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Jalan').value;
 
 
    document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value=NamaJalan+","+Bandar+","+Postkod+"."+Negeri;
   

    var EnterpriseName = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName').value;
    var EnterpriseAddress = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value;
    var BusinessType = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value;
    var EnterpriseType = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType').value;
    var PersonInChargeContactNo = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value;
    var PersonInCharge = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value;

    var BusinessMode = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessMode').value;
    var MerchantLinkType = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_MerchantLinkType').value;
var EnterpriseEmails=document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail').value;
   
    if (!EnterpriseName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Name required!</font>");
        return;
    }
    if (!Negeri) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Negeri  required!</font>");
        return;
    }
    if (!Bandar) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Bandar  required!</font>");
        return;
    }
    if (!Postkod) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Postkod  required!</font>");
        return;
    }
    if (!NamaJalan) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>NamaJalan  required!</font>");
        return;
    }
    if (!EnterpriseAddress) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Address required!</font>");
        return;
    }
    if (!EnterpriseEmails) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Email required!</font>");
        return;
    }
    if (!BusinessType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Business Type required!</font>");
        return;
    }
    if (!EnterpriseType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Branch Type required!</font>");
        return;
    }
    if (!PersonInChargeContactNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Person In Charge Contact No required!</font>");
        return;
    }
    if (!PersonInCharge) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Person In Charge Name required!</font>");
        return;
    }


    if (!BusinessMode) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>BusinessMode required!</font>");
        return;
    }
    // if (!MerchantLinkType) {
    //     swalFireFail("Save Failed!!!" + "<br><font size=2>MerchantLinkType required!</font>");
    //     return;
    // }

    var imgbase64;

    if (globalEnterpriseLogoImageBase64) {
        imgbase64 = globalEnterpriseLogoImageBase64;
    } else {
        imgbase64 = "ExistingImage";
    }
  
    

    var gile = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value;
    console.log(gile);
    var ImgPaths = GetDomainUrl()+"/AyohaImgCard/Logo/" + document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value + "/" + document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value;
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": 0,
        //39259-0123214416-NoEnterprise
        // "EnterpriseHQAccNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value,
        // "EnterpriseAccNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value,
        "EnterpriseHQAccNo": GetCurrentUserAccountNo()+"-NoEnterprise",
        "EnterpriseAccNo": GetCurrentUserAccountNo()+"-NoEnterprise",
        "EnterpriseName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName').value,
        "EnterpriseAddress": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value,
        "EnterprisePhoneNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo').value,
        "EnterpriseRegistrationNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo').value,
        "EnterpriseEmail": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail').value,
       // "EnterpriseWebsite": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite').value,
        "EnterpriseWebsite": "NA",       
        "EnterpriseDescriptions": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions').value,
        "EnterpriseFacebook": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook').value,
        "EnterpriseTwiter": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter').value,
        "EnterpriseInstagram": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram').value,
        "EnterpriseCoordinate": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate').value,
        "EnterpriseLogoPath": ImgPaths,
        "EnterpriseLogoName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value,
        "RowStatus": "Active",
        //"CreatedBy": document.getElementById('UN').value,
        "CreatedBy":GetCurrAyohaEnterpriseUserAccountNo(),
        "PICContactNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value,
        "PersonInCharge": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value,
        "LoyaltyCardType": "NA",
        "EnterpriseType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType').value,
        "EnterpriseBusinessType": gile,
        "AyohaVersion": "Ayoha Reward v 1.0 Merchant",
        "EnterpriseLogoImg64": imgbase64,
        "BusinessTypeGroupCode": localStorage.getItem('BusinessTypeGroupCode'),
        "MerchantLinkType": "Ayoha Store",
        "BusinessMode": BusinessMode,
        "BankAccountNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountNo').value,
        "BankName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountName').value,
        "BankAccountType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoAccountType').value,
        "BankAccountName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BankInfoBankAccountName').value,
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,
        "Negeri": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_State').value,
        "Bandar": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_City').value,
        "Postkod": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Postcode').value,
        "NamaJalan": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Jalan').value,
        "EnterpriseTagLine": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTagLine').value,
        "EnterpriseCount":globalFloatPanel_AyohaEnterpriseAccount_Enterprisecount
    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Enterprises/EnterprisesInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

              
                swalFireSuccess(" Save Succesfully!");



            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail( "Save Failed!!");
        }

    });
    FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHide();
   


}