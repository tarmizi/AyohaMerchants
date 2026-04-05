Ext.define('ianMizi.view.AyohaeWallet.FloatPanel_AyohaeWallet_TransactionHistory', {

});

var _FloatPanel_AyohaeWallet_TransactionHistory;


var isFloatPanel_AyohaeWallet_TransactionHistoryOpen = 'N';











function FloatPanel_AyohaeWallet_TransactionHistory() {

    _FloatPanel_AyohaeWallet_TransactionHistory =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_TransactionHistoryID',
         draggable: false,



         centered: true,
         //bottom: 64,
        //// zIndex: 180,
         zIndex: 110,
         // modal: true,
         //  hideOnMaskTap: true,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px solid;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet_TransactionHistory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_TransactionHistoryOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_TransactionHistoryHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet_TransactionHistory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_TransactionHistoryOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_TransactionHistoryHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 height: 40,
                 // docked: 'top',
                 // width: 40,
                 style: 'background-color: white;',
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                 //hidden: true,

                 id: 'containerFloatPanel_AyohaeWallet_TransactionHistoryHeader',
                 //style: {
                 //    // background: '#D25959',
                 //    background: 'transparent',
                 //    // border: '2px'
                 //},
                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center',
                 },
                 style: 'background-color:white;border-top:1px none #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                 // hidden:true,
                 items:
                        [
                            {
                                xtype:'panel',
                                width:10,
                            },
                            {
                                margin: '-4 0 0 0',
                                id: 'htmlFloatPanel_AyohaeWallet_TransactionHistory_TitleHeaderTxt',
                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Transaction Collection History</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-23px 0px 0px 0px">YEAR 2021</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },
                                      
                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_AyohaeWallet_TransactionHistoryBack',
                                        height: 30,
                                        width: 35,
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            RemovePages("FloatPanel_AyohaeWallet_TransactionHistoryHide()");
                                            _FloatPanel_AyohaeWallet_TransactionHistory.hide(Ext.fx.Animation({
                                                type: 'popOut',
                                                //direction: 'left',
                                                //easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));
                                            isFloatPanel_AyohaeWallet_TransactionHistoryOpen = 'N';
                                            FloatPanel_RewardStoreHide();

                                        }
                                    },
                                      //{
                                      //    margin: '0 0 0 0',
                                      //    html: '<font size=2 color=black><b>eWallet Transaction History</b></font>'
                                      //},
                                       
                                           {
                                               xtype: 'panel',
                                               width: 10,
                                           }
















                        ]

             },
             {
                xtype: 'panel',
                width: '100%',
             //   hidden: true,
                id:'panelHeaderFloatPanel_AyohaeWallet_TransactionHistoryID',
               // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                //height: 50,
                items: [
                    {
                        html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:1%;font-family: Arial;padding:0px 0px;color"white">.</div ><div style="float:left;width:15%;font-family: Arial;padding:0px 0px"><b>Members Name/<br>Mobile Phone No</b></div ><div style="float:left;width:11%;font-family: Arial;padding:0px 0px"><b>Items</b></div ><div style="float:left;width:16%;margin:0px 0px 0px 0px"><b>Transaction Type</b></div><div style="float:left;width:14.2%;margin:0px 0px 0px 0px"><b>Referance No</b></div><div style="float:left;width:11%;margin:0px 0px 0px 0px"><b>Transaction<br>Date</b></div><div style="float:left;width:11.9%;margin:0px 0px 0px 0px"><b>Payment<br>Method</b></div><div style="float:left;width:7.7%;margin:0px 0px 0px 0px"><b>Payment<br>Channel</b></div><div style="float:left;width:8%;margin:0px 0px 0px 0px"><b>Created By</b></div><div style="float:left;width:4%;margin:0px 0px 0px 0px"><b>Amount<br>Recieved</b></div></div></div></div>'

                    //   html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:1%;font-family: Arial;padding:0px 0px;color"white">.</div ><div style="float:left;width:15%;font-family: Arial;padding:0px 0px"><b>Member Name</b></div ><div style="float:left;width:11%;"><b>Items</b></div><div style="float:left;width:16%;"><b>Transaction Type</b></div><div style="float:left;width:14.5%;"><b>Referance No</b></div><div style="float:left;width:10.7%;"><b>Transaction Date</b></div><div style="float:left;width:11.5%;"><b>Payment Method</b></div><div style="float:left;width:9%;"><b>Payment Channel</b></div><div style="float:left;width:9%;"><b>Amount Recieved</b></div><div style="float:left;width:4%;"><b>Created By</b></div></div></div></div>'
                        //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:14%;font-family: Arial;padding:0px 0px"><b>Members Name/<br>Mobile Phone No</b></div ><div style="float:left;width:11%;margin:0px 0px 0px 0px"><b>Membership Card</b></div><div style="float:left;width:12.2%;margin:0px 0px 0px 0px"><b>Membership Request<br>Date</b></div><div style="float:left;width:12.2%;margin:0px 0px 0px 0px"><b>Membership Approval<br>Date</b></div><div style="float:left;width:11.8%;margin:0px 0px 0px 0px"><b>Membership End<br>Date</b></div><div style="float:left;width:10.2%;margin:0px 0px 0px 0px"><b>Renewal Fee</b></div><div style="float:left;width:11.6%;margin:0px 0px 0px 0px"><b>Membership Card<br>Payment Method</b></div><div style="float:left;width:5%;margin:0px 0px 0px 0px"><b>Membership Status</b></div></div></div></div>'
                       // html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected" style="background-color: #f4f4f4;border-bottom:2px solid #ccc;border-top:2px solid #ccc;"><div class="x-innerhtml" style="padding: 12px;"><div style="overflow:auto;width:100%;height:100%;"><span style="font-family: Arial;font-size:13px;color:#333"><div style="float:left;width:9.2%;"><span style="font-family: Arial;padding:0px 13px"><b>No</b></span></div ><div style="float:left;width:14.5%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;">Member Name</div ><div style="float:left;width:11%;color:#71797E;margin:0px 0px 0px 0px;">Items</div><div style="float:left;width:16%;color:#71797E;font-size:12px;text-align:left;font-weight:bold;white-space: normal;word-wrap:break-word;overflow-wrap:break-word;"><div style="float:left;width:70%;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space: normal;">Item Type</div></div><div style="float:left;width:15%;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space: normal;"><div style="float:left;width:80%;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space: normal;">Transaction No</div></div><div style="float:left;width:11%;color:#71797E;">Transaction Date</div><div style="float:left;width:12%;color:#71797E;">Payment Method</div><div style="float:left;width:7%;color:#71797E;font-size:12px;text-align:left;font-weight:bold">Payment Channel</div><div style="float:left;width:6%;color:#71797E;">Amount</div><div style="float:left;width:6%;color:#71797E;">Created By</div></div></div></div>'


                        
                    }
                ]
            },
             {
                 xtype: 'container',
                 width: '100%',
                 //height: 300,
                 height: '95%',
                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'center',
                 },
                 items:[
                     {
                         xtype: 'list',
                         width: '100%',
                         //height: 300,
                         height: '100%',
                         // flex: 1,
                         store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore,
                         // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                         id: 'FloatPanel_AyohaeWallet_TransactionHistoryID',
                         mode: 'SINGLE',
                         // width: '100%',
                         grouped:true,
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
                         style: 'background-color:rgba(255,255,255, 1);border-radius: 0px 0px 0px 0px;',
                         disableSelection: true,
                       

                             itemTpl: '<div class="myContent" style="width:100%;background-color:transparent">' +
                           
                              
                              
                       
                        
                        
                         '<div style="background-color: transparent;overflow:hidden"><div class="x-innerhtml" style="padding: 12px;overflow-x: hidden;"><div style="overflow:hidden;width:100%;height:100%;font-size: 65%;"><div style="float:left;width:1%;color:#71797E;font-size:12px;font-weight:bold">{RowNumber}).</div ><div onClick="FloatPanel_SubscriberList_ExpandMembershipSummary({ID});" style="float:left;width:14.5%;font-family: Arial; color:#71797E;font-size:12px;font-weight:bold;cursor: pointer"><u>{FullAccountName}</u><br><u>{PhoneNo}</u></div ><div style="float:left;width:11%;color:#71797E;margin:0px 0px 0px 0px;"><img src="{AccountProfileImg}" alt="Image" style="width: 100px; height: 70px;border-radius:10px 10px 10px 10px;"/><br><div style="font-size:12px;font-weight:bold;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space:normal;text-align:left;width:80%">{ModifiedAccountName}</div></div><div style="float:left;width:16%;color:#71797E;font-size:12px;text-align:left;font-weight:bold;white-space: normal;word-wrap:break-word;overflow-wrap:break-word;"><div style="float:left;width:70%;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space: normal;">{TransactionType}<br>({TransactionNote})</div></div><div style="float:left;width:15%;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space: normal;"><div style="float:left;width:80%;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space: normal;">{OrderNo}</div></div><div style="float:left;width:11%;color:#71797E;">{CreatedDate}</div><div style="float:left;width:12%;color:#71797E;">{PaymentMethod}</div><div style="float:left;width:8%;color:#71797E;font-size:12px;text-align:left;font-weight:bold">{PaymentChannel}</div><div style="float:left;width:8%;color:#71797E;"><div style="font-size:12px;font-weight:normal;color:#71797E;word-wrap:break-word;overflow-wrap:break-word;white-space:normal;text-align:left;width:60%">{CreatedBy}</div></div><div style="float:left;width:3%;color:#71797E;">{TransactionAmount}</div></div></div></div>'+


                                 '</div>',



                         emptyText: '<div  style="background-color:transparent;width:100%;height100%;">No Transaction!</div>',


                     },

                 ]
                 
             },
             {
                xtype: 'container',
                hidden:true,
                width: '100%',
                //height: 300,
                height: '95%',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center',
                },
                items:[
                    {
                        xtype: 'list',
                        width: '100%',
                        //height: 300,
                        height: '100%',
                        // flex: 1,
                        store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore,
                        // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                        id: 'FloatPanel_AyohaeWallet_TransactionHistory_MobileViewID',
                        mode: 'SINGLE',
                        // width: '100%',
                        grouped:true,
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
                        itemTpl: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{TransactionReferenceNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})" class="myContent" style="background-color:white;width:100%;height:70px;">' +


                         '<table onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{TransactionReferenceNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 20px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:1%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:70%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{FullAccountName}</font><br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                         + '<div style="width:94%;height:20px;margin:-68px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">{ModifiedTransactionAmount}</div>'
                             + '</div>',



                        emptyText: '<div  style="background-color:transparent;width:100%;height100%;">No Transaction!</div>',


                    },

                ]
                
            },
                    
                    ///////


                    {
                        xtype: 'container',
                        width: '100%',
                        docked: 'bottom',
                        margin: '0 0 0 0',
                        height: 50,
                        style: 'background-color:white;border-top:1px none #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                        // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid black;',
                        // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #f0f2f5;box-shadow:1px 0px 3px 3px #EEEDED ;',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
                            {
                                html:'<div style="background-color:transparent;width:100%;height100%;"><span style="font-size:16px;font-weight:bold;color:black;">Search</span></div>'
                            },
                            {
                                xtype:'spacer',
                                width:'1%'
                                },
                            {
                                width: '60%',
                                // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                html: '<input type="text" id="input-FloatPanel_AyohaeWallet_TransactionHistory_SearchCol"   style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 10px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 0px"  placeholder="Search Name,Spent, Income or Amount)">',
                            },
                            
                        {
                        xtype: 'button',
                        id: 'btnFloatPanel_AyohaeWallet_TransactionHistory_filter_Year',
    //  badgeText: '1',
    margin: '0 0 0 0',
    height: 35,
    width: 35,
    html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        // FloatPanel_BusinessTypeListShow();
        FloatPanel_YearOnlyShow();
                                                 
    }
},
{
xtype:'spacer',
width:'16%'
},{
    id:'FloatPanel_AyohaeWallet_TransactionHistory_TotalAmountCollection',
    html:'<div  style="background-color:transparent;width:100%;height100%;font-size:16px:font-weight:bold;color:black;">Total Amount:RM1500.00</div>'
}
                            
                        ]
                    },








         ]







     });
    return _FloatPanel_AyohaeWallet_TransactionHistory;





}

function FloatPanel_AyohaeWallet_TransactionHistoryShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_TransactionHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_TransactionHistory());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_TransactionHistoryHide()");
    isFloatPanel_AyohaeWallet_TransactionHistoryOpen = 'Y';
    var currYear = GetCurrentYear();
    globalYearSourceModule='AyohaeWallet_TransactionHistory';
    FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(currYear);
    document.getElementById("input-FloatPanel_AyohaeWallet_TransactionHistory_SearchCol").addEventListener("keyup", FloatPanel_AyohaeWallet_TransactionHistory_SearchCol_OnKeyUp);
    //   document.getElementById("input-FloatPanel_AyohaeWallet_TransactionHistory_SearchTxt").addEventListener("keyup", SearchBusinessTypeListOnKeyUp);
    // _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();


    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_TransactionHistoryID').setZIndex(410);
    }
  //  Ext.getCmp('FloatPanel_AyohaeWallet_TransactionHistory_TotalAmountCollection').setHtml('<div  style="background-color:transparent;width:100%;height100%;font-size:16px:font-weight:bold;color:black;">Total Amount:<font-size:20px:font-weight:bold;color:black;>RM'+globalDashboardeWalletCurrentBalance+'</font></div>');
  Ext.getCmp('FloatPanel_AyohaeWallet_TransactionHistory_TotalAmountCollection').setHtml(
    '<div style="background-color:transparent;width:100%;height:100%;font-size:16px;font-weight:bold;color:black;">' +
      'Total Amount Received: <span style="font-size:20px;font-weight:bold;color:black;">RM' + globalDashboardeWalletCurrentBalance + '</span>' +
    '</div>'
  );
}


function FloatPanel_AyohaeWallet_TransactionHistoryHide() {
    if (isFloatPanel_AyohaeWallet_TransactionHistoryOpen == 'Y') {
        _FloatPanel_AyohaeWallet_TransactionHistory.hide(); isFloatPanel_AyohaeWallet_TransactionHistoryOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_TransactionHistoryHide()");
        //  FloatPanel_RewardStoreHide();
    }

}



function FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(Year) {

    Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransactionHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:10px 0px 0px 0px">Transaction Collection History</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-23px 0px 0px 0px">YEAR ' + Year + '</div>');

    FloatPanel_YearOnlyHide();
    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
// alert(Year)
// alert(GetEnterpriseAccNo())
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setExtraParam('FilterType', "Year");
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setExtraParam('eWalletAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setExtraParam('Year', Year);
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setExtraParam('TransactionType', "NA");
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoFilterType');
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getCount();
       // alert(count);

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}




function FloatPanel_AyohaeWallet_TransactionHistory_SearchCol_OnKeyUp() {

  
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaeWallet_TransactionHistory_SearchCol').value;



    if (queryString) {
       // console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
              
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
      
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.clearFilter();
       
        return false;
    }
}




function FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(TransactionReferenceNo_cashOut,ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, TransactionReferenceNo, ID) {


    var strTRN = TransactionReferenceNo;


    if (TransactionType == "AyohaStore_Payment")
    {
        FloatPanel_AyohaStore_OrderHistoryLoadByOrderNoMerchantShow(OrderNo,1); 
      //  FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ModifiedCreatedDate, ItemCartCode, MembershipCardCode, OrderNo, TransactionType, FullAccountName, TransactionReferenceNo);
        return;
    }



    if (TransactionType == "Scan_eWalletApp_Debit") {
        // FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType);
        FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID);
        return;
    }
    if (TransactionType == "AyohaRewardContest_TapAndWin") {
        // FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType);
        FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, strTRN);
        return;
    }
    if (TransactionType == "CashOut") {
        // FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(ItemCartCode, MembershipCardCode, OrderNo, TransactionType);
        FloatPanel_AyohaeWallet_Transaction_DetailShow_CashOut(TransactionReferenceNo_cashOut, ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, strTRN);
        return;
    }
    else {
        FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID);
    }
}