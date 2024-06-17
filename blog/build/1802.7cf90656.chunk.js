"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1802],{1802:(G,M,t)=>{t.d(M,{ProtectedListPage:()=>gt});var s=t(92132),g=t(21272),x=t(11273),T=t(42455),b=t(38413),C=t(55356),W=t(74773),c=t(30893),i=t(85963),o=t(4198),h=t(94061),d=t(35513),f=t(40216),p=t(26127),D=t(90361),l=t(33363),L=t(50215),_=t(98765),tt=t(25641),O=t(83997),H=t(63891);const k=H.Ay.div`
  background: ${({theme:n})=>n.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:n})=>n?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:n})=>n.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:n})=>n.spaces[1]};
    top: ${({theme:n})=>n.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,st=H.Ay.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${k} {
    background: ${({theme:n})=>n.colors.success500};
  }

  &[aria-checked='true'] ${k}:before {
    transform: translateX(1rem);
  }
`,ot=g.forwardRef(({label:n,onChange:u,onLabel:P="On",offLabel:S="Off",selected:j,visibleLabels:m=!1,...R},a)=>(0,s.jsx)(st,{ref:a,role:"switch","aria-checked":j,"aria-label":n,onClick:u,visibleLabels:m,type:"button",...R,children:(0,s.jsxs)(O.s,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)("span",{children:P}),(0,s.jsx)("span",{children:S})]}),m&&(0,s.jsx)(h.a,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?P:S})]})}));var J=t(88353),et=t(53563),at=t(49654),v=t(55506),I=t(5194),Q=t(50612),nt=t(41909),rt=t(36481),dt=t(54894),X=t(17703),it=t(71389),Y=t(36777),lt=t(13210),bt=t(15126),Ct=t(63299),Wt=t(67014),St=t(59080),Et=t(79275),At=t(14718),Dt=t(82437),Lt=t(61535),Pt=t(5790),$t=t(12083),Bt=t(35223),pt=t(5409),Ot=t(74930),kt=t(2600),It=t(48940),Rt=t(41286),Ut=t(56336),Ft=t(13426),Kt=t(84624),Nt=t(77965),zt=t(54257),Vt=t(71210),Gt=t(51187),Ht=t(39404),Jt=t(58692),Qt=t(501),Xt=t(57646),Yt=t(23120),Zt=t(44414),wt=t(25962),qt=t(14664),_t=t(42588),ts=t(90325),ss=t(62785),os=t(87443),es=t(41032),as=t(22957),ns=t(93179),rs=t(73055),ds=t(15747),is=t(85306),ls=t(26509),hs=t(32058),gs=t(81185),cs=t(82261);const ht=()=>{const[n,u]=g.useState(!1),[P,S]=g.useState(!1),[j,m]=g.useState([]),R=(0,Y.j)(e=>e.admin_app.permissions.settings?.webhooks),{formatMessage:a}=(0,dt.A)(),{_unstableFormatAPIError:$}=(0,v.wq)(),y=(0,v.hN)();(0,v.L4)();const{push:ct}=(0,X.W6)(),{pathname:Z}=(0,X.zy)(),{isLoading:mt,allowedActions:{canCreate:U,canUpdate:F,canDelete:w}}=(0,v.ec)(R),{notifyStatus:q}=(0,x.W)(),{isLoading:vt,webhooks:E,error:K,updateWebhook:ut,deleteManyWebhooks:xt}=(0,lt.u)();g.useEffect(()=>{if(K){y({type:"warning",message:$(K)});return}E&&q(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[E,K,y,a,q,$]);const ft=async e=>{try{const r=await ut(e);"error"in r&&y({type:"warning",message:$(r.error)})}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}},jt=async()=>{try{S(!0);const e=await xt({ids:j});if("error"in e){y({type:"warning",message:$(e.error)});return}m([])}catch{y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{S(!1),u(!1)}},yt=e=>m(e?E?.map(r=>r.id)??[]:[]),Mt=(e,r)=>m(e?V=>[...V,r]:V=>V.filter(Tt=>Tt!==r)),N=e=>()=>ct(`${Z}/${e}`),z=mt||vt,B=E?.length??0,A=j.length;return(0,s.jsxs)(T.P,{children:[(0,s.jsx)(v.x7,{name:"Webhooks"}),(0,s.jsxs)(b.g,{"aria-busy":z,children:[(0,s.jsx)(C.Q,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:U&&!z&&(0,s.jsx)(at.z,{as:it.k2,startIcon:(0,s.jsx)(I.A,{}),variant:"default",to:`${Z}/create`,size:"S",children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),A>0&&w&&(0,s.jsx)(W.B,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.o,{variant:"epsilon",textColor:"neutral600",children:a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:A})}),(0,s.jsx)(i.$,{onClick:()=>u(!0),startIcon:(0,s.jsx)(Q.A,{}),size:"L",variant:"danger-light",children:a({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(o.s,{children:z?(0,s.jsx)(h.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(v.Bl,{})}):B>0?(0,s.jsxs)(d.X,{colCount:5,rowCount:B+1,footer:(0,s.jsx)(f.S,{onClick:N("create"),icon:(0,s.jsx)(I.A,{}),children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(p.d,{children:(0,s.jsxs)(D.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(L.J,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:A>0&&A<B,value:A===B,onValueChange:yt})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(c.o,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{width:"60%",children:(0,s.jsx)(c.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(l.Th,{width:"20%",children:(0,s.jsx)(c.o,{variant:"sigma",textColor:"neutral600",children:a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(_.s,{children:a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(tt.N,{children:E?.map(e=>(0,s.jsxs)(D.Tr,{onClick:F?N(e.id):void 0,style:{cursor:F?"pointer":"default"},children:[(0,s.jsx)(l.Td,{onClick:r=>r.stopPropagation(),children:(0,s.jsx)(L.J,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:j?.includes(e.id),onValueChange:r=>Mt(r,e.id),name:"select"})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(c.o,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(c.o,{textColor:"neutral800",children:e.url})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(O.s,{children:(0,s.jsx)(ot,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:r=>{r.stopPropagation(),ft({...e,isEnabled:!e.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(O.s,{gap:1,children:[F&&(0,s.jsx)(J.K,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(nt.A,{}),noBorder:!0}),w&&(0,s.jsx)(J.K,{onClick:r=>{r.stopPropagation(),m([e.id]),u(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(Q.A,{}),noBorder:!0})]})})]},e.id))})]}):(0,s.jsx)(et.p,{icon:(0,s.jsx)(rt.A,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(i.$,{variant:"secondary",startIcon:(0,s.jsx)(I.A,{}),disabled:!U,onClick:U?N("create"):void 0,children:a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(v.TM,{isOpen:n,onToggleDialog:()=>u(e=>!e),onConfirm:jt,isConfirmButtonLoading:P})]})},gt=()=>{const n=(0,Y.j)(u=>u.admin_app.permissions.settings?.webhooks.main);return(0,s.jsx)(v.kz,{permissions:n,children:(0,s.jsx)(ht,{})})}},13210:(G,M,t)=>{t.d(M,{u:()=>c});var s=t(36777);const g=s.n.injectEndpoints({endpoints:i=>({getWebhooks:i.query({query:o=>({url:`/admin/webhooks/${o?.id??""}`,method:"GET"}),transformResponse:o=>Array.isArray(o.data)?o.data:[o.data],providesTags:(o,h,d)=>typeof d=="object"&&"id"in d?[{type:"Webhook",id:d.id}]:[...o?.map(({id:f})=>({type:"Webhook",id:f}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:i.mutation({query:o=>({url:"/admin/webhooks",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:i.mutation({query:({id:o,...h})=>({url:`/admin/webhooks/${o}`,method:"PUT",data:h}),transformResponse:o=>o.data,invalidatesTags:(o,h,{id:d})=>[{type:"Webhook",id:d}]}),triggerWebhook:i.mutation({query:o=>({url:`/admin/webhooks/${o}/trigger`,method:"POST"}),transformResponse:o=>o.data}),deleteManyWebhooks:i.mutation({query:o=>({url:"/admin/webhooks/batch-delete",method:"POST",data:o}),transformResponse:o=>o.data,invalidatesTags:(o,h,{ids:d})=>d.map(f=>({type:"Webhook",id:f}))})}),overrideExisting:!1}),{useGetWebhooksQuery:x,useCreateWebhookMutation:T,useUpdateWebhookMutation:b,useTriggerWebhookMutation:C,useDeleteManyWebhooksMutation:W}=g,c=(i=void 0,o)=>{const{data:h,isLoading:d,error:f}=x(i,o),[p]=T(),[D]=b(),[l]=C(),[L]=W();return{webhooks:h,isLoading:d,error:f,createWebhook:p,updateWebhook:D,triggerWebhook:l,deleteManyWebhooks:L}}},40216:(G,M,t)=>{t.d(M,{S:()=>i});var s=t(92132),g=t(63891),x=t(94061),T=t(48653),b=t(83997),C=t(30893);const W=(0,g.Ay)(x.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,c=(0,g.Ay)(x.a)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,i=({children:o,icon:h,...d})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(T.c,{}),(0,s.jsx)(c,{as:"button",background:"primary100",padding:5,...d,children:(0,s.jsxs)(b.s,{children:[(0,s.jsx)(W,{"aria-hidden":!0,background:"primary200",children:h}),(0,s.jsx)(x.a,{paddingLeft:3,children:(0,s.jsx)(C.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
