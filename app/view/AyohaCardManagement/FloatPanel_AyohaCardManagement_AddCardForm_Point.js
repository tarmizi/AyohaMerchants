Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCardForm_Point', {

});







var _FloatPanel_AyohaCardManagement_AddCardForm_Point;

function FloatPanel_AyohaCardManagement_AddCardForm_Point() {

    _FloatPanel_AyohaCardManagement_AddCardForm_Point = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_AddCardForm_PointID',
            // xtype: 'panel',
            zIndex: 210,
            xtype: 'container',
            height: 350,
            //  height: '60%',
            width: 460,
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            hideOnMaskTap: true,
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

            style: ' background-color:white;',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color: transparent;',
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
                        width: '100%',
                        height:40,
                       style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 ;background: white;',
                        docked: 'top',

                        id: 'containerFloatPanel_AyohaCardManagement_AddCardForm_PointHeader',
                      
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
                                    xtype: 'spacer',
width:10
                                },
                                          
                                             {
                                                 margin: '0 0 0 0',
                                                 html: '<font size=4 color=black><b>Create New Point Card</b></font>'
                                             },
                                              {
                                                  xtype: 'spacer',

                                              },


                                              {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_AyohaCardManagement_AddCardForm_PointCardBack',
                                                height: 30,
                                                width: 35,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {

                                                    _FloatPanel_AyohaCardManagement_AddCardForm_Point.hide(Ext.fx.Animation({
                                                        type: 'popOut',
                                                       // direction: 'left',
                                                       // easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    is_FloatPanel_AyohaCardManagement_AddCardForm_PointHide = 'N';

                                                }
                                            },

                                            {
                                                xtype: 'spacer',
            width:10
                                            },










                               ]

                    },
                    {
                        xtype: 'container',
                        margin: '0 0 0 0',
                        width: '100%',
                        docked:'bottom',
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
                        width: '100%',
                        height: 50,
                        margin: '-5 0 0 0',
                        // width: '80%',
                        //style: {
                        //    background: '#FA8072',
                        //},
                        // padding: '10px',
                        //  text: '<font size=3px color=black><center><b>Register</b></center></font>',
                        text: '<button class="buttonSave_web">Create</button>',
            
                        handler: function () {
                            var _StampCardCampaignName = document.getElementById('input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignName').value;
                            //document.getElementById('CampaignStartDate').value = StampCampaignName;
                            //document.getElementById('CampaignEndDate').value = StampCampaignName;
            
            
            
                            var CampaignStartDate = new Date(document.getElementById('input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignStartDate').value);
                            var CampaignEndDate = new Date(document.getElementById('input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignEndDate').value);
                            if (CampaignStartDate == "Invalid Date") {
                                swalFireFail("Invalid Start Date!!");
                                return;
                            }
            
            
                            if (CampaignEndDate == "Invalid Date") {
                                swalFireFail("Invalid End Date!!");
                                return;
                            }
            
            
                            // Extract pieces of the date:
                            // var month = CampaignStartDate.getMonth(); // months start counting from zero!
            
            
            
                            // var month = EditCardCampaignStartDate.getMonth(); // months start counting from zero!
                            var dayCampaignStart = parseInt(CampaignStartDate.getDate() + CampaignStartDate.getMonth() + CampaignStartDate.getFullYear());
                            var dayCampaignEnd = parseInt(CampaignEndDate.getDate() + CampaignEndDate.getMonth() + CampaignEndDate.getFullYear());
            
            
            
            
                            if (dayCampaignStart > dayCampaignEnd) {
                                // alert("Fail-Campaing date Has passed");
                                swalFireFail("Fail-Campaign date Has passed!!");
                                return;
            
                            }
            
                            if (dayCampaignStart == dayCampaignEnd) {
                                swalFireFail("Fail-Campaign date start and date end is same!!");
                                return;
            
                            }
            
            
                            //  var year = CampaignStartDate.getFullYear();
            
            
            
            
            
            
            
            
            
            
            
                            if (_StampCardCampaignName.length < 2) {
                                swalFireFail("Point Campaign Name Not Valid!!")
                                return
                            }
            
            
            
                          
                            if (dayCampaignStart < dayCampaignEnd) {
            
            
                            
            
                                var objn = {
                                 
                                    "PointCampaignName": document.getElementById('input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignName').value,
                                    "StartDate": document.getElementById('input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignStartDate').value,
                                    "EndDate": document.getElementById('input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignEndDate').value,
                                    "StrEndDate": "NA",
                                    "RowStatus": "Active",
                                    "EnterpriseAccNo": GetEnterpriseAccNo(),
                                    "CreatedByAccNo": GetCurrAyohaEnterpriseUserAccountNo(),
                                    "CreatedBy": document.getElementById('UN').value,
                                    "Remarks": "No Remarks",
                                    "PointCampaignPremiumQRCode": 'Auto-Default',
                                    "TermAndCondition":'Term And Condition'
            
                                };
                                console.log(objn);
                                var _value = Ext.Ajax.request({
            
                                    type: "POST",
            
                                    url: GetAPIurl() + '/PointCampaign/PointCampaignInsert',
            
                                    dataType: "json",
                                    data: JSON.stringify(objn),
                                    headers: {
                                        "Content-Type": "application/json; charset=utf-8"
                                    },
            
                                    success: function (result, request) {
            
                                        //console.log(result.responseText);
            
            
                                        data = Ext.decode(result.responseText.trim());
            
                                        if (data.success == "true") {
            
                                            swalFireSuccess("Point Card Created Successfully!");
                                            //LoadingCustomMsgShow('Success!', '3');
                                            //FloatPanel_AyohaCardManagement_AddCardForm_PointHide();
                                            //Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
            
                                        }
                                        else {
                                            swalFireFail("Point Card Created Error!")
                                        }
                                        Ext.Viewport.unmask();
            
                                    },
            
                                    failure: function (result, request) {
                                        Ext.Viewport.unmask();
                                        swalFireFail("Card Created Failed!")
                                    }
            
                                });
            
                            }
            
            
            
                        },
            
            
                    },
            
                        ]
                    },
            
                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        hidden:true,
                        margin: '0 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {

                                id: 'FloatPanel_AyohaCardManagement_AddCardForm_PointImg',
                                width: 50,
                                height: 50,
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/AyohaStampCardWhite.png" width="50" height="50" alt="Company Name"></div>',

                            },
                            {
                                html: '<font size=2 color=black><b>Create New Point Card</b></font>'
                            }
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

                              html: '<font size=2 color=black>Point Campaign Name</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignName"  style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">'
                          },






        


         {
             margin: '13 0 0 0',

             html: '<font size=2 color=black>Campaign Start Date</font>',

         },

         {
             margin: '-2 0 0 0',

             html: ' <input type="date" id="input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignStartDate" style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">',

         },


         {
             margin: '13 0 0 0',

             html: '<font size=2 color=black>Campaign End Date</font>',

         },

         {
             margin: '-2 0 0 0',

             html: ' <input type="date" id="input-FloatPanel_AyohaCardManagement_AddCardForm_Point_CampaignEndDate" style="border-color:black;color:grey;width:100%;text-align: left;font-size:12px;">',

         },

       
       



        


























                        ]
                    },


                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_AddCardForm_Point;
}



function FloatPanel_AyohaCardManagement_AddCardForm_PointShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_AddCardForm_Point);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_AddCardForm_Point());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_AddCardForm_PointHide = 'Y';
  

}
var is_FloatPanel_AyohaCardManagement_AddCardForm_PointHide = 'N';

function FloatPanel_AyohaCardManagement_AddCardForm_PointHide() {
    if (is_FloatPanel_AyohaCardManagement_AddCardForm_PointHide == 'Y') {
        _FloatPanel_AyohaCardManagement_AddCardForm_Point.hide();
        is_FloatPanel_AyohaCardManagement_AddCardForm_PointHide = 'N';
    }

}
