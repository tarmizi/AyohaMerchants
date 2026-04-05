Ext.define('ianMizi.view.FloatPanel.SearchMembers', {

});

var _SearchMembers;


var isSearchMembersOpen = 'N';











function SearchMembers() {

    _SearchMembers =
     Ext.create('Ext.Container', {

         xtype: 'container',
         height: '100%',
         // height: 615,
         width: '100%',
         id: 'LoadingSearchMembersID',
         name:'nameLoadingSearchMembersID',
         //right: -1,
         top:50,
       //   modal: true,
        hideOnMaskTap: true,
        centered:true,
         layout: {
             type: 'vbox'
         },
         
         zIndex: 49,
       
        
         showAnimation: {
            type: 'popIn',
           // direction: 'left',
            duration: 150,
           // easing: 'ease-in'
        },
        hideAnimation: {
            //type: 'reveal',
            //duration: 250,
            type: 'popOut',

           // direction: 'right',
            duration: 150
        },
        //style: 'background-color:transparent;',
         //style: 'border-bottom:1px solid;background-color:#353839;',
       //style: 'background-color:white;',
       style: 'background-color:rgba(0,0,0, 0.0);',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       

         //  style: "background-color: #D25959;",
        //  items: {

        //      xtype: 'container',
        //      style: 'background-color:transparent;',
        //      layout: {
        //          type: 'vbox',
        //          pack: 'center',
        //          align: 'center'

        //      },

            




        //  },
        




         items: [

            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                height: 50,
                style: 'background-color:transparent;',
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                hidden: true,

                id: 'containerSearchMembersHeader',
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
                // hidden:true,
                items:
                       [

                           {
                               xtype: 'spacer',
width:10
                           },
                           // {
                           //     margin: '0 0 0 0',
                           //     html: '<font size=4 color=black><b>Approval Status</b></font>'
                           // },
                                      {
                                          xtype: 'spacer',

                                      },

                                      




                                       {
                                           xtype: 'button',
                                        //   id: 'btnSearchMembersBack',
                                           height: 40,
                                           width: 45,
                                           // iconCls: 'list',
                                          // html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                           html: '<div ><img src="resources/icons/wired-gradient-38-error-cross-simple1.gif" width="35" height="30" alt="Company Name"></div>',
                                        //  html:'<lord-icon src="https://cdn.lordicon.com/lbjtvqiv.json" trigger="hover" style="width:250px;height:250px"> </lord-icon>',
                                           
                                           ui: 'plain',
                                           handler: function () {

                                               _SearchMembers.hide(Ext.fx.Animation({
                                                type: 'slideOut',

                                                direction: 'right',
                                                duration: 350

                                               }));
                                               isSearchMembersOpen = 'N';
                                            
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
           //  margin:'-100 0 0 0',
             style: 'background-color:transparent;',
           //  docked: 'right',
             height: '100%',
             width:'100%',
            
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center',
             },
             items:[
// {
//     xtype: 'container',
//             // style: 'background-color:red;',
//             // style: 'background-color:rgba(0,0,0, 0.5);',
//           // style: '.parent-container {display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 3fr));gap: 10px;.container {width:46%;max-width: 50%;background-color:red;}',
//            style:'.container {width: 46%;background-color:rgba(0,0,0, 0.5);}@media (max-width: 768px) {.container {width: 100%;}}@media (min-width: 1200px) {.container {width: 46%;}}',
//             //  docked: 'right',
//              height: '100%',
//            //width:'46%', 
//            //  width:'48vw'
// },
{
    xtype: 'container',
           //  style: 'background-color:transparent;',
    //  style: 'background-color:rgba(0,0,0, 0.5);',
      style:'.container {width: 100%;background-color:rgba(0,0,0, 0.5);}@media (max-width: 768px) {.container {width: 100%;}}@media (min-width: 1200px) {.container {width: 100%;}}',
       // style:'.container {width: 54%;background-color:rgba(0,0,0, 0.5);}@media (max-width: 768px) {.container {width: 100%;}}@media (min-width: 1200px) {.container {width: 54%;}}',
         //  style:'.container { width:54%; max-width: 800px;min-width: 300px;background-color:blue;}',
      //   style:'.container {flex: 1; max-width: 54%; min-width: 300px;box-sizing: border-box;}',
        //  style: '.parent-container {display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));gap: 10px;.container {width:54%;max-width: 50%;background-color:blue;}',
           //  docked: 'right',
            height: '100%',
            width:'100%',
           // width:'52vw',
             layout:{
                type: 'hbox',
                pack: 'center',
                align: 'top',
             },
             items:[
                // {
                //     xtype: 'container',
                //     height: '100%',
                //     width:340,
                // },
              
                {
                    xtype: 'container',
                    id:'SearchMemberModalBox',
                    style: 'background-color:transparent;',
                    margin:'2 0 0 0',
            //style: 'position: absolute;left: 50%;top: 50%;width: 340px;transform: translate(-50%, -50%);background-color: white;padding: 20px;border-radius: 5px;box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);',
           
           
           
           
           
           
         //   style: 'border-right:2px solid #d62bb4;border-left:2px solid #d62bb4;border-bottom:2px solid #d62bb4;border-top:2px solid #d62bb4;background-color:white;box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.2)',
         
         
             //  docked: 'right',
             height: 450,
             width:498,
             layout:{
                type: 'vbox',
                pack: 'center',
                align: 'center',
             },
             items:[
                {
                    hidden:true,
                    id:'searchMemberLoadingImage',
                    html: '<div ><img src="resources/icons/wired-gradient-472-hourglasslatest.gif" width="100" height="100" alt="Company Name"></div>',
                //     xtype: 'container',
                //     width: '50%',
                //     height: '50%',
                // //  style: 'background-color: transparent;',
                //   style: 'background-image: url("resources/icons/wired-gradient-472-hourglasslatest.gif"); background-size: 50% 50%;background-repeat: no-repeat;',
                   

                },
                
                    {
                        xtype: 'list',
                        //flex:1,
                        height: '95%',
                        store: _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore,
                        id: 'searchMemberList',
                        mode: 'SINGLE',
                        disableSelection: true,
                        style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                        itemTpl: '<div class="myContent" onClick="FloatPanel_SubscriberListMemberShow_Dashboard(' + "'" + '{SubscriberAccNo}' + "'" + ')">' +
                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;cursor:pointer;"><font size=3><b>{AccountName}</b></font><br>{PhoneNo}</div>' +

                          '</div>',
                        width: '100%',
                       //  listeners: {
                       //      itemsingletap: function (list, idx, target, records, evt) {
                              
                       //        LoadingPanelShow(getLoadingIcon(), 'Loading....');
                       //          isAddNewUserEnterprise = 'N';
                       //          var AccountNo = records.get('AccountNo');
                       //          FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsShow(AccountNo);
                       //          //Load_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_AyohaEnterprisesUserLoadByAccountNoStore(AccountNo);
                       //          //Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(2);
                       //          //Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseAccNoStore();
                       //          Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_TitleHeaderTxt').setHtml('<font size="4" color="black"><b>User Details Info</b></font>');

                                
                       //      },
                       //      deselect: function (list, records) {

                       //      }
                       //  },

                    },
               
             ]
                },
               

             ] 
},
             ]
}




      



        ]






     });
    return _SearchMembers;





}

function SearchMembersShow() {
if(isSearchMembersOpen == 'Y'){
    return;
}
    Ext.Viewport.remove(_SearchMembers);
    this.overlay = Ext.Viewport.add(SearchMembers());
    this.overlay.show();
    isSearchMembersOpen = 'Y';
 //   window.addEventListener('resize', updateScreenWidth);

    var containerViewnameLoadingSearchMembersID = Ext.ComponentQuery.query('container[name=nameLoadingSearchMembersID]')[0];
    var containerViewElnameLoadingSearchMembersID = containerViewnameLoadingSearchMembersID.element;
    containerViewElnameLoadingSearchMembersID.on('tap',
      function (event, node, options, eOpts) {
        SearchMembersHide();
      }
    );
    document.getElementById("input-DashboardSubscriberListSearchText").addEventListener("keyup", MembershipsLoadByEnterpriseAccNoSearchMembershipStoreOnKeyUpEvent);
  
   
  
  
  
  
    MembershipsLoadByEnterpriseAccNoSearchMembershipStore();
    positionModalBox();
   
   
}
//updateScreenWidth();
function updateScreenWidth() {
    var screenWidth = window.innerWidth;
    alert(screenWidth)
   // document.getElementById("screen-width").innerText = "Screen Width: " + screenWidth + "px";
}
function positionModalBox() {
    var modalBox = document.getElementById('SearchMemberModalBox'); // Replace with the actual ID of the modal box
    var searchInput = document.querySelector('.search-inputMaster'); // Replace with the actual class or ID of the search input field

    if (searchInput) {
        var searchInputRect = searchInput.getBoundingClientRect(); // Get the search input's position and size
        var offsetTop = searchInputRect.bottom-60; // 10px below the search input; adjust as needed
        var offsetLeft = searchInputRect.left + (searchInputRect.width / 2) - (modalBox.offsetWidth / 2);

        modalBox.style.position = 'absolute'; // or 'fixed' if you want it to stay on scroll
        modalBox.style.top = offsetTop + 'px';
        modalBox.style.left = offsetLeft + 'px';
        modalBox.style.width = '500px'; // Fixed width
    }
}


function SearchMembersHide() {
    _SearchMembers.hide(); isSearchMembersOpen = 'N';
    document.getElementById('input-DashboardSubscriberListSearchText').value="";
    
}









function MembershipsLoadByEnterpriseAccNoSearchMembershipStore(){
    
  
    var task = Ext.create('Ext.util.DelayedTask', function () {
     //   alert(GetEnterpriseAccNo())
        _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.clearFilter();
        _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.getProxy().setExtraParam('enterpriseAccNo', GetEnterpriseAccNo());
        _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadByEnterpriseAccNoSearchMembership');
        _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.load();
    
    
        var count = _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.getCount();
    
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);

}


function MembershipsLoadByEnterpriseAccNoSearchMembershipStoreOnKeyUpEvent() {






    console.log('SearchEnterpriseOnKeyUp');
    var countSubscriber = 0;


    _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.clearFilter();

    var queryString = document.getElementById('input-DashboardSubscriberListSearchText').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

             // countSubscriber = _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.getCount();
          //    Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countSubscriber + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
       // console.log('tiada3');
      //  countSubscriber = _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.getCount();
     //  Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countSubscriber + ')</b></font>');
     //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
      //  console.log('tiada2');
        _DataStore_MembershipsLoadByEnterpriseAccNoSearchMembershipStore.clearFilter();
       // Ext.getCmp('htmlFloatPanel_SubscriberList_Count').setHtml('<font size="3" color="black"><b>(' + countEnterpriseSubscribedLoadFirst + ')</b></font>');
     //   Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}









