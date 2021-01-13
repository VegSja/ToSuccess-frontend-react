(this["webpackJsonptosuccess-activities"]=this["webpackJsonptosuccess-activities"]||[]).push([[0],{103:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},213:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),i=n(20),c=n.n(i),o=(n(183),n(184),n(11)),s=n(10),u=n(14),l=n(13),h=n(372),d=n(371),j=n(370),p=n(15),b=n.n(p),v=n(24),f=n(86),_=n(163),g=n(18),y=n(101),O=function(){function e(t,n){Object(o.a)(this,e),this.url_activities="https://vegsja.pythonanywhere.com/activities/",this.url_categories="https://vegsja.pythonanywhere.com/categories/",this.url_date="https://vegsja.pythonanywhere.com/date/",this.url_refresh="https://vegsja.pythonanywhere.com/refresh/",this.logoutUrl="https://vegsja.pythonanywhere.com/logout/",this.delete_url="https://vegsja.pythonanywhere.com/delete/",this.token=t,this.refreshToken=n,this.categories=void 0,this.errorFromServer=!1,this.errorMessage=null,localStorage.setItem("current_token",this.token),localStorage.setItem("refresh_token",this.refreshToken)}return Object(s.a)(e,[{key:"handleError",value:function(e){throw this.errorMessage=e.request.statusText,this.errorFromServer=!0,this.errorMessage}},{key:"sendRefreshToken",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={refresh:this.refreshToken},e.next=3,y.post(this.url_refresh,t,{"Content-Type":"text/json"}).then((function(e){n.token=e.data.access,localStorage.setItem("current_token",n.token),n.errorFromServer=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get_current_date",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get(this.url_date,{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){return t.date=e.data,t.date})).catch((function(e){t.handleError(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get_activities",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n,a=this,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:2,e.next=3,y.get(this.url_activities+"?date="+t.toString()+"&nb_days="+n.toString(),{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){return a.activities=e.data,console.log("Successfully retrieved activities: ",a.activities),a.activities})).catch((function(e){a.handleError(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post_activity",value:function(){var e=Object(v.a)(b.a.mark((function e(t,n,a,r,i,c){var o,s=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={activity_name:t,activity_category:n,minutes_after_midnight_start:a,minutes_after_midnight_end:r,date:i,date_string:c},e.next=3,y.post(this.url_activities,o,{"Content-Type":"text/json",headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){console.log("Successfully posted data:",o)})).catch((function(e){s.handleError(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r,i,c){return e.apply(this,arguments)}}()},{key:"delete_activity",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.delete(this.url_activities+t+"/",{headers:{Authorization:"Bearer ".concat(this.token)}}).catch((function(e){n.handleError(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post_category",value:function(){var e=Object(v.a)(b.a.mark((function e(t,n){var a,r=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t,color:n},e.next=3,y.post(this.url_categories,a,{"Content-Type":"text/json",headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){console.log("Successfully posted data: ",a)})).catch((function(e){r.handleError(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"get_categories",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get(this.url_categories,{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){return t.categories=e.data,t.categories})).catch((function(e){t.handleError(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete_category",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.delete(this.url_categories+t+"/",{headers:{Authorization:"Bearer ".concat(this.token)}}).catch((function(e){n.handleError(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post_logout",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t,n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={refresh_token:this.refreshToken,access_token:this.token},e.next=3,y.post(this.logoutUrl,t,{"Content-Type":"text/json",headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){console.log("Successfully logged out of server: ",e.status)})).catch((function(e){n.handleError(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();n(101);function k(){return m.apply(this,arguments)}function m(){return(m=Object(v.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("refresh_token").toString(),n=localStorage.getItem("current_token").toString(),(a=new O(n,t)).post_logout().catch((function(e){a.sendRefreshToken().then((function(){k()})).catch((function(){alert("Error on logout:",e)}))}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x,C=function(){var e=Object(g.k)();return Object(a.jsx)("div",{children:Object(a.jsx)(f.GoogleLogout,{clientId:"767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(t){k().then((function(){e.push({pathname:"/landing"})}))},render:function(e){return Object(a.jsx)(_.a,{onClick:e.onClick,disabled:e.disabled,variant:"danger",size:"lg",children:"Log out"})}})})},w=n(44),S=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(h.a,{bg:"dark",variant:"dark",children:[Object(a.jsx)(w.LinkContainer,{to:"/activities",children:Object(a.jsx)(h.a.Brand,{href:"#home",children:"ToSuccess"})}),Object(a.jsxs)(d.a,{className:"mr-auto",children:[Object(a.jsx)(w.LinkContainer,{to:"/activities",children:Object(a.jsx)(d.a.Link,{children:"Activities"})}),Object(a.jsx)(w.LinkContainer,{to:"/categories",children:Object(a.jsx)(d.a.Link,{children:"Categories"})}),Object(a.jsx)(w.LinkContainer,{to:"/stats",children:Object(a.jsx)(d.a.Link,{children:"Stats"})}),Object(a.jsx)(w.LinkContainer,{to:"/settings",children:Object(a.jsx)(d.a.Link,{children:"Settings"})})]}),Object(a.jsx)(j.a,{inline:!0,children:Object(a.jsx)(w.LinkContainer,{to:"/landing",children:Object(a.jsx)(C,{})})})]})}}]),n}(r.Component),T=n(45),I=n(101),D="https://vegsja.pythonanywhere.com/google/";function L(){return(L=Object(v.a)(b.a.mark((function e(t){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={token:t},e.next=3,I.post(D,n,{"Content-Type":"text/json"}).then((function(e){return e.data}));case 3:return a=e.sent,x=a,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=function(){var e=Object(g.k)();return Object(a.jsx)("div",{children:Object(a.jsx)(f.GoogleLogin,{clientId:"767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com",render:function(e){return Object(a.jsx)(_.a,{onClick:e.onClick,disabled:e.disabled,variant:"primary",size:"lg",children:"Start planning!"})},buttonText:"Login",onSuccess:function(t){(function(e){return L.apply(this,arguments)})(t.tokenId).then((function(n){e.push({pathname:"/activities",state:{userid:t.profileObj.userid,name:t.profileObj.givenName,backend_access_token:x.access_token,backend_refresh_token:x.refreash_token}})}))},onFailure:function(e){console.log("[Login failed] res:",e)},cookiePolicy:"single_host_origin"})})},N=n.p+"static/media/conquer.ece66679.jpg",M=(n(103),n(213),{backgroundImage:"url("+N+")"});function A(){return console.log("Langing page"),Object(a.jsx)("div",{className:"page-contain",style:M,children:Object(a.jsxs)("div",{className:"content-left",children:[Object(a.jsx)("h1",{class:"landingPage",children:"Achieve it!"}),Object(a.jsx)("p",{children:" The daily planner which structures your day in a revolutinary way"}),Object(a.jsx)(w.LinkContainer,{to:"/activities",children:Object(a.jsx)(H,{})})]})})}function E(){return Object(a.jsx)("h1",{children:"Stats"})}function F(){return Object(a.jsx)("h1",{children:"Settings"})}var q=n(42),R=n(125),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(R.Container,{children:Object(a.jsx)(R.Button,{tooltip:"The big plus button!",text:"fa fa-plus",rotate:!0,onClick:this.props.handleClick})})})}}]),n}(r.Component),z=n(173),G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={color:a.props.defaultColor},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)(z.a,{color:this.state.defaultColor,onChange:this.props.onChange})}}]),n}(r.Component),P=n(359),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).circleStyle={margin:"1vh",display:"inline-block",position:"relative",backgroundColor:a.props.color,borderRadius:"50%",width:a.props.size,height:a.props.size,left:0,top:0},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{style:this.circleStyle})}}]),n}(r.Component),Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e={margin:"auto",position:this.props.position,right:"1%",top:"5%"};return Object(a.jsx)("div",{children:Object(a.jsx)(_.a,{style:e,onClick:this.props.onClick,children:"Delete"})})}}]),n}(r.Component),U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={color:a.props.color,name:a.props.name,unique_id:a.props.unique_id},a.api=a.props.api,a}return Object(s.a)(n,[{key:"onDelete",value:function(){var e=this;this.api.delete_category(this.state.unique_id).then((function(){window.location.reload()})).catch((function(){e.api.sendRefreshToken().then((function(){e.onDelete()}))}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:Object(a.jsx)(J,{color:this.state.color,size:"5vh"})}),Object(a.jsx)("th",{children:Object(a.jsx)("h3",{children:this.state.name})}),Object(a.jsx)("th",{children:Object(a.jsx)(Y,{onClick:function(){return e.onDelete()},position:"relative"})})]})}}]),n}(r.Component);function V(e,t){return e.sort((function(e,n){var a=e[t],r=n[t];if(!(Math.abs(parseInt(a)-parseInt(r))>10&&"date"==t))return a<r?-1:a>r?1:0}))}var X=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={loading:!0,backend_access_token:a.props.backendAccessToken,api_connection:a.props.api_connection,server_error:!1,server_error_message:null,categories:V(a.props.categories,"name")},a}return Object(s.a)(n,[{key:"render_categories",value:function(){var e=[];for(var t in this.state.categories){var n=this.state.categories[t];e.push(Object(a.jsx)(U,{color:n.color,name:n.name,unique_id:n.unique_id,api:this.state.api_connection}))}return e}},{key:"render",value:function(){return Object(a.jsxs)(P.a,{hover:!0,children:[Object(a.jsx)("thead",{}),Object(a.jsx)("tbody",{children:this.render_categories()})]})}}]),n}(r.Component),K=n(360),Q=n(361),W=n(369),Z=n(164),$=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(o.a)(this,n),(a=t.call(this,e)).state={showHide:!1,category_name:null,category_color:"#FFFFFFF",backend_access_token:null,backend_refresh_token:null,error_on_server:!1,error_message_from_server:null,categories:null,loading:!0};var r=localStorage.getItem("routeState");return r&&(r=JSON.parse(r)),a.state.backend_access_token=r.backend_access_token,a.state.backend_refresh_token=r.backend_refresh_token,a.API=new O(a.state.backend_access_token,a.state.backend_refresh_token),a.submitHandler=a.submitHandler.bind(Object(q.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.sendGetRequest()}},{key:"sendGetRequest",value:function(){var e=this;this.API.get_categories().then((function(t){e.state.categories=e.API.categories,e.setState({loading:!1})})).catch((function(t){e.API.sendRefreshToken().then((function(t){e.sendGetRequest()})).catch((function(t){e.handleServerError(t.request.statusText)}))}))}},{key:"handleServerError",value:function(e){this.setState({error_on_server:!0,error_message_from_server:e})}},{key:"handleModalShowHide",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"onColorSelect",value:function(e,t){this.setState({category_color:e.hex})}},{key:"submitHandler",value:function(){var e=this;this.API.post_category(this.state.category_name,this.state.category_color).then((function(){e.setState({loading:!0}),e.handleModalShowHide(),e.sendGetRequest()})).catch((function(){e.API.sendRefreshToken().then((function(){console.log("Successfully posted category"),e.submitHandler()})).catch((function(){console.log("Caught an error while sending refresh token")}))}))}},{key:"render",value:function(){var e=this;return this.state.loading?this.state.error_on_server?"Unauthorized"===this.state.error_message_from_server?Object(a.jsx)("div",{children:Object(a.jsx)(g.c,{to:"/landing"})}):Object(a.jsxs)(K.a,{variant:"danger",children:["Server error: ",this.state.error_message]}):Object(a.jsx)(Q.a,{animation:"grow",className:"loading-table"}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Categories"}),Object(a.jsx)(X,{backendAccessToken:this.state.backend_access_token,api_connection:this.API,categories:this.state.categories}),Object(a.jsx)(B,{handleClick:function(){return e.handleModalShowHide()}}),Object(a.jsxs)(W.a,{show:this.state.showHide,centered:!0,children:[Object(a.jsx)(W.a.Header,{closeButton:!0,onClick:function(){return e.handleModalShowHide()},children:Object(a.jsx)(W.a.Title,{children:"Add category"})}),Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(W.a.Body,{children:[Object(a.jsxs)(Z.a,{controlId:"formCategoryName",children:[Object(a.jsx)(j.a.Label,{children:"Category name:"}),Object(a.jsx)(j.a.Control,{type:"string",placeholder:"Enter category name...",onChange:function(t){return e.setState({category_name:t.target.value})}})]}),Object(a.jsxs)(Z.a,{controlId:"formColor",children:[Object(a.jsx)(j.a.Label,{children:"Category Color:"}),Object(a.jsx)(G,{color:"#FFFFFF",onChange:function(t,n){return e.onColorSelect(t,n)}})]})]}),Object(a.jsxs)(W.a.Footer,{children:[Object(a.jsx)(_.a,{variant:"secondary",onClick:function(){return e.handleModalShowHide()},children:"Close"}),Object(a.jsx)(_.a,{variant:"primary",type:"submit",onClick:function(){return e.submitHandler()},children:"Add Category"})]})]})]})]})}}]),n}(r.Component);function ee(){return Object(a.jsx)("div",{children:Object(a.jsx)($,{})})}var te=n(169),ne=n(374),ae=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={category:a.props.category,color:a.props.color,position_style:a.props.position_style},a}return Object(s.a)(n,[{key:"render",value:function(){var e={width:"fit-content",borderRadius:"10%",backgroundColor:this.state.color,position:this.state.position_style};return Object(a.jsx)("div",{style:e,children:Object(a.jsx)("p",{style:{margin:"5px",color:"white","font-size":"1vw"},children:this.state.category})})}}]),n}(r.Component),re=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"timeConvert",value:function(e){var t=e/60,n=Math.floor(t),a=60*(t-n),r=Math.round(a);if(n<10)var i="0"+n;else i=n;if(r<10)var c="0"+r;else c=r;return i+":"+c}},{key:"convertDateToDDMMMMYYYY",value:function(e){var t,n=e.split("-"),a=n[0],r=parseInt(n[1]),i=n[2];switch(r){case 1:t="January";break;case 2:t="February";break;case 3:t="March";break;case 4:t="April";break;case 5:t="May";break;case 6:t="June";break;case 7:t="July";break;case 8:t="August";break;case 9:t="September";break;case 10:t="October";break;case 11:t="November";break;case 12:t="December"}return i+". "+t+" "+a}},{key:"convertDateToDayNumber",value:function(e){var t=e.split("-"),n=parseInt(t[2]),a=parseInt(t[1]),r=parseInt(t[0]),i=new Date(r,a-1,n),c=new Date(i.getFullYear(),0,0);return Math.floor((i-c)/1e3/60/60/24)}},{key:"convertTimeToMinutes",value:function(e){var t=e.split(":");return 60*parseInt(t[0])+parseInt(t[1])}}]),e}(),ie=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(o.a)(this,n),a=t.call(this,e);var r=new re;return a.start_time=r.timeConvert(a.props.start_time),a.end_time=r.timeConvert(a.props.end_time),a.unique_id=a.props.unique_id,a.api=a.props.api,a}return Object(s.a)(n,[{key:"deleteClick",value:function(){var e=this;this.api.delete_activity(this.unique_id).then((function(){console.log("Deleted",e.props.activity_name),window.location.reload()})).catch((function(t){console.log("caught error",t),e.api.sendRefreshToken().then((function(){e.deleteClick()})).catch((function(){}))}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)(ne.a,{className:"activity-card",children:Object(a.jsxs)(ne.a.Body,{children:[Object(a.jsxs)(ne.a.Title,{children:[Object(a.jsx)(ae,{category:this.props.activity_category,color:this.props.color,position_style:"absolute"}),this.start_time," - ",this.end_time,Object(a.jsx)(Y,{onClick:function(){return e.deleteClick()},position:"absolute"})]}),Object(a.jsx)(ne.a.Subtitle,{className:"activity-name",children:this.props.activity_name})]})})}}]),n}(r.Component),ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(P.a,{children:[Object(a.jsx)("thead",{children:Object(a.jsx)("th",{children:this.props.date})}),Object(a.jsx)("tbody",{children:this.createJSXItems(this.props.activities_for_day)})]})}},{key:"createJSXItems",value:function(e){e=V(e,"minutes_after_midnight_start");var t,n=[],r=Object(te.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,c=i.activity_category,o=this.props.colorList[c];n.push(Object(a.jsxs)("tr",{children:[Object(a.jsx)(ie,{api:this.props.api,activity_name:i.activity_name,activity_category:c,color:o,start_time:i.minutes_after_midnight_start,end_time:i.minutes_after_midnight_end,unique_id:i.unique_id})," "]}))}}catch(s){r.e(s)}finally{r.f()}return n}}]),n}(r.Component),oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={loading:!0,backend_access_token:a.props.backendAccessToken,api_connection:a.props.api_connection,day_number_to_view:a.props.day_number_to_view,colorList:a.props.colorList,activities:V(a.props.activities,"date")},a.dateHandler=new re,a}return Object(s.a)(n,[{key:"CreateActivityObject",value:function(e){for(var t={},n=0;n<e.length;n++)e[n].date_string in t||(t[e[n].date_string]=[]),t[e[n].date_string].push(e[n]);return t}},{key:"renderDays",value:function(){var e=this.CreateActivityObject(this.state.activities),t=[];for(var n in e)t.push(Object(a.jsx)("th",{children:Object(a.jsx)(ce,{date:n,activities_for_day:e[n],colorList:this.state.colorList,api:this.props.api})}));return 0==t.length?Object(a.jsx)(K.a,{variant:"warning",children:"ALERT: No activities found for these days. To add an activity click the add button"}):t}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"table-div",children:Object(a.jsxs)(P.a,{children:[" ",this.renderDays()," "]})})}}]),n}(r.Component),se=n(368),ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={label:a.props.label,defaultValue:a.props.value,onChange:a.props.onChange},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(a.jsx)("form",{noValidate:!0,children:Object(a.jsx)(se.a,{id:"date",label:this.state.label,type:"date",defaultValue:this.state.defaultValue,InputLabelProps:{shrink:!0},onChange:this.state.onChange})})}}]),n}(r.Component),le=n(174),he=n(366),de=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={api_data:a.props.data,selected_value:null,title:a.props.title},a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e.title!==this.props.title&&this.setState({title:this.props.title})}},{key:"createSelectItems",value:function(){var e=[];for(var t in this.state.api_data){var n=this.state.api_data[t].name,r=this.state.api_data[t].color;e.push(Object(a.jsx)(le.a.Item,{children:Object(a.jsx)(ae,{category:n,color:r,position_style:"relative"})}))}return e}},{key:"render",value:function(){return""===this.state.title?Object(a.jsx)(he.a,{style:{position:"relative",display:"inline-block"},title:"Category",onSelect:this.props.onSelect,children:this.createSelectItems()}):Object(a.jsx)(he.a,{style:{position:"relative",display:"inline-block"},title:this.state.title,onSelect:this.props.onSelect,children:this.createSelectItems()})}}]),n}(r.Component),je=n(373),pe=(r.Component,n(367)),be=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a,r;return Object(o.a)(this,n),(a=t.call(this,e)).state={activityName:"",activityCategory:"",activityDate:"",activityStartTime:"",activityEndTime:"",showHide:!1,loading_data_from_api:!0,backend_access_token:null,backend_refresh_token:null,server_error:!1,error_message:null,date_to_view:new Date,dayNumber_to_view:null,activities:null,colorList:{}},a.props.location.state?(localStorage.setItem("routeState",JSON.stringify(a.props.location.state)),r=a.props.location.state):(r=localStorage.getItem("routeState"))&&(r=JSON.parse(r)),a.state.backend_access_token=r.backend_access_token,a.state.backend_refresh_token=r.backend_refresh_token,a.submitHandler=a.submitHandler.bind(Object(q.a)(a)),a.api_connection=new O(a.state.backend_access_token,a.state.backend_refresh_token),a.dateHandler=new re,a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.initGet()}},{key:"initGet",value:function(){var e=this;this.api_connection.get_current_date().then((function(t){e.currentdate=e.api_connection.date.date,e.currentDayNumber=e.api_connection.date.daynumber,e.setState({date_to_view:e.currentdate,dayNumber_to_view:e.currentDayNumber}),e.api_connection.get_categories().then((function(t){e.categories=e.api_connection.categories,e.setState({colorList:e.createColorList(e.categories)}),e.api_connection.get_activities(e.state.dayNumber_to_view,4).then((function(t){e.setState({activities:e.api_connection.activities,loading_data_from_api:!1})}))}))})).catch((function(){e.api_connection.sendRefreshToken().then((function(){e.initGet()})).catch((function(){e.setState({server_error:!0,error_message:e.api_connection.errorMessage})}))}))}},{key:"GET_date",value:function(){var e=this;this.api_connection.get_current_date().then((function(t){e.currentdate=e.api_connection.date.date,e.currentDayNumber=e.api_connection.date.daynumber,e.setState({date_to_view:e.currentdate,dayNumber_to_view:e.currentDayNumber})})).catch((function(){e.handleServerError(e.GET_date)}))}},{key:"GET_categories",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.api_connection.get_categories().then((function(e){return t.categories=t.api_connection.categories,t.setState({colorList:t.createColorList(t.categories)}),e}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"GET_activities",value:function(){var e=Object(v.a)(b.a.mark((function e(){var t=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading_data_from_api:!0}),this.api_connection.get_activities(this.state.dayNumber_to_view,4).then((function(e){t.setState({activities:t.api_connection.activities,loading_data_from_api:!1})})).catch((function(){t.api_connection.sendRefreshToken().then((function(){t.GET_activities()})).catch((function(){console.log("Internal server error")}))}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleServerError",value:function(){var e=Object(v.a)(b.a.mark((function e(t){var n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.api_connection.sendRefreshToken().then((function(){t()})).catch((function(){n.setState({server_error:!0,error_message:n.api_connection.errorMessage})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleModalShowHide",value:function(){this.setState({showHide:!this.state.showHide,activityCategory:""})}},{key:"onDropdownSelect",value:function(e,t){this.setState({activityCategory:t.target.outerText})}},{key:"onDateChanged",value:function(e){this.state.date_to_view=e.target.value,this.state.dayNumber_to_view=this.dateHandler.convertDateToDayNumber(e.target.value),this.GET_activities()}},{key:"submitHandler",value:function(){var e=this,t=this.dateHandler.convertDateToDDMMMMYYYY(this.state.activityDate),n=this.dateHandler.convertDateToDayNumber(this.state.activityDate),a=this.dateHandler.convertTimeToMinutes(this.state.activityStartTime),r=this.dateHandler.convertTimeToMinutes(this.state.activityEndTime);this.api_connection.post_activity(this.state.activityName,this.state.activityCategory,a,r,n,t).then((function(){e.GET_activities(),e.handleModalShowHide()})).catch((function(){e.api_connection.sendRefreshToken().then((function(){e.submitHandler()})).catch((function(){alert("Could not send activitiy")}))}))}},{key:"createColorList",value:function(e){var t={};for(var n in e)t[e[n].name]=e[n].color;return t}},{key:"render",value:function(){var e=this;return this.state.loading_data_from_api?this.state.server_error?"Unauthorized"===this.state.error_message?Object(a.jsx)("div",{children:Object(a.jsx)(g.c,{to:"/landing"})}):Object(a.jsxs)(K.a,{variant:"danger",children:["Server error: ",this.state.error_message]}):Object(a.jsx)("div",{children:Object(a.jsx)(Q.a,{animation:"grow",className:"loading-table"})}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Here are your activities for the next 4 days!"}),Object(a.jsx)(ue,{value:this.state.date_to_view,label:"Date:",onChange:function(t){return e.onDateChanged(t)}}),Object(a.jsx)(oe,{api:this.api_connection,activities:this.state.activities,backendAccessToken:this.state.backend_access_token,day_number_to_view:this.state.dayNumber_to_view,colorList:this.state.colorList}),Object(a.jsx)(B,{handleClick:function(){return e.handleModalShowHide()}}),Object(a.jsxs)(W.a,{show:this.state.showHide,centered:!0,children:[Object(a.jsx)(W.a.Header,{closeButton:!0,onClick:function(){return e.handleModalShowHide()},children:Object(a.jsx)(W.a.Title,{children:"Add activity"})}),Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(W.a.Body,{children:[Object(a.jsxs)(pe.a,{controlId:"formActivityName",children:[Object(a.jsx)(j.a.Label,{children:"Activity Name:"}),Object(a.jsx)(j.a.Control,{type:"string",placeholder:"Enter activity name...",style:{width:"fit-content",display:"inline-block"},onChange:function(t){return e.setState({activityName:t.target.value})}}),Object(a.jsx)(de,{data:this.categories,onSelect:function(t,n){return e.onDropdownSelect(t,n)},title:this.state.activityCategory})]}),Object(a.jsxs)(pe.a,{controlId:"formDate",children:[Object(a.jsx)(j.a.Label,{children:"Date:"}),Object(a.jsx)(j.a.Control,{type:"date",onChange:function(t){return e.setState({activityDate:t.target.value})}})]}),Object(a.jsxs)(pe.a,{controlId:"formStartTime",children:[Object(a.jsx)(j.a.Label,{children:"Start Time:"}),Object(a.jsx)(j.a.Control,{type:"time",onChange:function(t){return e.setState({activityStartTime:t.target.value})}})]}),Object(a.jsxs)(pe.a,{controlId:"formEndTime",children:[Object(a.jsx)(j.a.Label,{children:"End Time:"}),Object(a.jsx)(j.a.Control,{type:"time",onChange:function(t){return e.setState({activityEndTime:t.target.value})}})]})]}),Object(a.jsxs)(W.a.Footer,{children:[Object(a.jsx)(_.a,{variant:"secondary",onClick:function(){return e.handleModalShowHide()},children:"Close"}),Object(a.jsx)(_.a,{variant:"primary",type:"submit",onClick:function(){return e.submitHandler()},children:"Add Activity"})]})]})]})]})}}]),n}(r.Component),ve=Object(g.o)(be);function fe(){return Object(a.jsx)(T.HashRouter,{children:Object(a.jsxs)(g.g,{children:[Object(a.jsx)(g.d,{exact:!0,path:"/landing",children:Object(a.jsx)(A,{})}),Object(a.jsx)(g.d,{exact:!0,path:"/",children:Object(a.jsx)(A,{})}),Object(a.jsxs)(g.d,{exact:!0,path:"/activities",children:[Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:"page-container",children:Object(a.jsx)(ve,{})})]}),Object(a.jsxs)(g.d,{exact:!0,path:"/categories",children:[Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:"page-container",children:Object(a.jsx)(ee,{})})]}),Object(a.jsxs)(g.d,{exact:!0,path:"/stats",children:[Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:"page-container",children:Object(a.jsx)(E,{})})]}),Object(a.jsxs)(g.d,{exact:!0,path:"/settings",children:[Object(a.jsx)(S,{}),Object(a.jsx)("div",{className:"page-container",children:Object(a.jsx)(F,{})})]})]})})}var _e=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(fe,{})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,376)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(a.jsx)(T.BrowserRouter,{children:Object(a.jsx)(_e,{})}),document.getElementById("root")),ge()}},[[324,1,2]]]);
//# sourceMappingURL=main.67d970b9.chunk.js.map