(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52ef00c2"],{4265:function(e,t,n){},"5e33":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.detialShow?n("div",{staticClass:"detialBox"},[n("van-nav-bar",{staticStyle:{"border-bottom":"1px solid #ccc"},attrs:{title:e.author_info?e.author_info.username:"","left-text":"返回",fixed:"","left-arrow":""},on:{"click-left":e.turnBack},scopedSlots:e._u([{key:"right",fn:function(){return[n("van-icon",{attrs:{name:"share",size:"18"},on:{click:function(t){e.shareInfo.showShare=!e.shareInfo.showShare}}})]},proxy:!0}],null,!1,2624925343)}),n("van-share-sheet",{attrs:{title:"立即分享给好友",options:e.shareInfo.options},model:{value:e.shareInfo.showShare,callback:function(t){e.$set(e.shareInfo,"showShare",t)},expression:"shareInfo.showShare"}}),n("div",{staticStyle:{"margin-top":"46px"}},[n("div",{staticClass:"swipbox"},[n("van-swipe",e._l(e.msgInfo.resource_url,(function(e,t){return n("van-swipe-item",{key:t},[n("img",{attrs:{src:e,alt:""}})])})),1)],1),n("div",{staticClass:"articleInfo"},[n("h4",{staticClass:"title"},[e._v(e._s(e.msgInfo.title))]),n("div",{staticClass:"articleContext"},[e._v(" "+e._s(e.msgInfo.content)+" "),n("span",{staticClass:"article_type"},[e._v(e._s("#"+e.msgInfo.article_type))])]),n("div",{staticClass:"creatInfo"},[n("span",{staticClass:"creatTime"},[e._v("编辑于 "+e._s(e.msgInfo.release_time))]),n("div",{staticClass:"underbox"},[n("div",{staticClass:"funbox"},[n("ShowInfoAction",{attrs:{msgItem:e.msgInfo,likeCount:e.likeCount}})],1),n("div",{staticClass:"funbox"},[n("van-icon",{attrs:{name:"chat-o",size:"20"}}),n("span",[e._v(e._s(e.msgInfo.comment_count))])],1)])])])]),n("Review",{attrs:{msgCount:e.msgInfo.comment_count}})],1):e._e()},o=[],a=n("1da1"),i=(n("a9e3"),n("96cf"),n("fa7d")),r=n("8424"),c=n("01ac"),u={data:function(){return{detialShow:!1,msgInfo:{},msgId:void 0,author_info:{},likeCount:0,bottomShow:!0,userId:0,shareInfo:{showShare:!1,options:[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]]},reviewObj:{article_id:0,level:1,reply_comment_id:0,reply_user_id:0,comment_group:0}}},components:{Review:r["a"],ShowInfoAction:c["a"]},methods:{turnBack:function(){this.$router.back()},getMsgInfo:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/article/getArticleById",{params:{article_id:e.msgId}});case 2:n=t.sent,s=n.data,"success"===s.status&&(e.msgInfo=Object(i["a"])(s.articleInfo),e.likeCount=s.articleInfo.give_like_count,e.author_info=e.msgInfo.author_info,e.reviewObj.reply_user_id=s.articleInfo.author_id,e.detialShow=!0,e.$store.dispatch("reviewInfo/addReviewInfo",e.reviewObj),e.$store.dispatch("reviewInfo/changeUserId",{id:s.articleInfo.author_id}));case 5:case"end":return t.stop()}}),t)})))()}},created:function(){this.msgId=this.$route.query.messageId,this.reviewObj.article_id=Number(this.msgId),this.reviewObj.comment_group=Number(this.msgId),this.getMsgInfo()},mounted:function(){}},l=u,f=(n("a9cb"),n("2877")),m=Object(f["a"])(l,s,o,!1,null,"67b453e8",null);t["default"]=m.exports},a9cb:function(e,t,n){"use strict";n("4265")}}]);
//# sourceMappingURL=chunk-52ef00c2.d74c6d31.js.map