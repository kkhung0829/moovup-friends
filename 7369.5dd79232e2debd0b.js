"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7369],{7369:(O,m,r)=>{r.r(m),r.d(m,{FriendListPageModule:()=>P});var c=r(6814),g=r(95),a=r(9843),p=r(1379),t=r(9468),d=r(9862);let h=(()=>{var e;class o{constructor(n){this.http=n}getFriendList(){const n=new d.WM({"Content-Type":"application/json",Authorization:"Bearer vza4lbzrzy3cyhg4nbzyjhmqzjlqr2p3qibd9986"});return this.http.get("https://api.json-generator.com/templates/-xdNcNKYtTFG/data",{headers:n})}}return(e=o).\u0275fac=function(n){return new(n||e)(t.LFG(d.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),o})();var l=r(8433),u=r(2150);function f(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",3),t.NdJ("leafletMapReady",function(s){t.CHM(i);const C=t.oxw();return t.KtG(C.mapReady(s))}),t.qZA()}if(2&e){const i=t.oxw();t.Q6J("leafletOptions",i.options)}}let F=(()=>{var e;class o{constructor(){this.mapOptionsReady=!1,this.options={}}ngOnInit(){let n=(0,l.marker)([this.item.location.latitude,this.item.location.longitude],{icon:(0,l.icon)({...l.Icon.Default.prototype.options,iconUrl:"assets/marker-icon.png",iconRetinaUrl:"assets/marker-icon-2x.png",shadowUrl:"assets/marker-shadow.png"})});this.options={layers:[(0,l.tileLayer)("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"..."}),n],zoom:15,center:(0,l.latLng)(this.item.location.latitude,this.item.location.longitude)},this.mapOptionsReady=!0}mapReady(n){console.log("mapRead()"),this.map=n}ngAfterViewInit(){console.log("ngAfterViewInit()"),setTimeout(()=>{var n;null===(n=this.map)||void 0===n||n.invalidateSize()},100)}}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-friend-detail"]],inputs:{item:"item"},decls:10,vars:4,consts:[["style","height: 300px;","leaflet","",3,"leafletOptions","leafletMapReady",4,"ngIf"],["slot","start"],[3,"src"],["leaflet","",2,"height","300px",3,"leafletOptions","leafletMapReady"]],template:function(n,s){1&n&&(t.YNc(0,f,1,1,"div",0),t.TgZ(1,"ion-card")(2,"ion-item")(3,"ion-thumbnail",1),t._UZ(4,"ion-img",2),t.qZA(),t.TgZ(5,"ion-label")(6,"h2"),t._uU(7),t.qZA(),t.TgZ(8,"h2"),t._uU(9),t.qZA()()()()),2&n&&(t.Q6J("ngIf",s.mapOptionsReady),t.xp6(4),t.Q6J("src",s.item.picture),t.xp6(3),t.Oqu(s.item.name.first),t.xp6(2),t.Oqu(s.item.name.last))},dependencies:[c.O5,a.PM,a.Xz,a.Ie,a.Q$,a.Bs,u.je]}),o})();function y(e,o){if(1&e&&(t.TgZ(0,"ion-item",2)(1,"ion-thumbnail",3),t._UZ(2,"ion-img",4),t.qZA(),t.TgZ(3,"ion-label")(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA()()()),2&e){const i=t.oxw();t.xp6(2),t.Q6J("src",i.item.picture),t.xp6(3),t.Oqu(i.item.name.first),t.xp6(2),t.Oqu(i.item.name.last)}}function v(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"ion-item",5),t.NdJ("click",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.showDetail())}),t.TgZ(1,"ion-thumbnail",3),t._UZ(2,"ion-img",4),t.qZA(),t.TgZ(3,"ion-label")(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t._uU(7),t.qZA()()()}if(2&e){const i=t.oxw();t.xp6(2),t.Q6J("src",i.item.picture),t.xp6(3),t.Oqu(i.item.name.first),t.xp6(2),t.Oqu(i.item.name.last)}}let Z=(()=>{var e;class o{constructor(n){this.modalController=n,this.canShowDetail=!0}ngOnInit(){this.canShowDetail=null!=this.item.location.latitude&&null!=this.item.location.longitude}showDetail(){this.canShowDetail&&this.modalController.create({component:F,componentProps:{item:this.item}}).then(n=>{n.present()})}}return(e=o).\u0275fac=function(n){return new(n||e)(t.Y36(a.IN))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-friend-item"]],inputs:{item:"item"},decls:3,vars:2,consts:[["button","","disabled","",4,"ngIf"],["button","",3,"click",4,"ngIf"],["button","","disabled",""],["slot","start"],[3,"src"],["button","",3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"ion-card"),t.YNc(1,y,8,3,"ion-item",0),t.YNc(2,v,8,3,"ion-item",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",!s.canShowDetail),t.xp6(1),t.Q6J("ngIf",s.canShowDetail))},dependencies:[c.O5,a.PM,a.Xz,a.Ie,a.Q$,a.Bs],styles:[".myThumbnailWithPhoto[_ngcontent-%COMP%]{position:relative}.myThumbnailWithPhoto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin:0;position:absolute;top:36%;width:100%;font-weight:700;color:#fff}.myThumbnailWithoutPhoto[_ngcontent-%COMP%]{position:relative}.myThumbnailWithoutPhoto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;margin:0;position:absolute;top:36%;width:100%;font-weight:700;color:#000}"]}),o})();function x(e,o){if(1&e&&(t.TgZ(0,"ion-col",4),t._UZ(1,"app-friend-item",5),t.qZA()),2&e){const i=o.$implicit;t.xp6(1),t.Q6J("item",i)}}const T=[{path:"",component:(()=>{var e;class o{constructor(n){this.friendsService=n,this.friends=[]}ngOnInit(){this.friendsService.getFriendList().subscribe(n=>{this.friends=n})}}return(e=o).\u0275fac=function(n){return new(n||e)(t.Y36(h))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-friend-list"]],decls:8,vars:3,consts:[[3,"translucent"],[1,"ion-text-center"],[3,"fullscreen"],["size","12",4,"ngFor","ngForOf"],["size","12"],[3,"item"]],template:function(n,s){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title",1),t._uU(3,"All Friends"),t.qZA()()(),t.TgZ(4,"ion-content",2)(5,"ion-grid")(6,"ion-row"),t.YNc(7,x,2,1,"ion-col",3),t.qZA()()()),2&n&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(3),t.Q6J("ngForOf",s.friends))},dependencies:[c.sg,a.wI,a.W2,a.jY,a.Gu,a.Nd,a.wd,a.sr,Z]}),o})()}];let _=(()=>{var e;class o{}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(T),p.Bz]}),o})(),P=(()=>{var e;class o{}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,g.u5,a.Pc,u.UO,_]}),o})()}}]);