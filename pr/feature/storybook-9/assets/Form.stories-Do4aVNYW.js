import{R as n}from"./iframe-rOpawicF.js";import{y as g,d as p}from"./utils-BlwuuQ7c.js";import{f as R,P,i as O,g as H}from"./PageConstructor-tnI0HCo5.js";import{v as M}from"./v4-Dv1xt2bl.js";import{F as u}from"./blocks-CYWk6lM8.js";const Y={background:{dark:{style:{backgroundColor:"#262626"}},light:{style:{backgroundColor:"#EFF2F8"}}}},z={fullWidth:!0,fullWidthContent:!0},A={background:{dark:{src:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/content-bg-img_dark.png",disableCompress:!0},light:{src:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/content-bg-img_light.png",disableCompress:!0}}},G={textContent:{theme:"dark",title:"Black form background color",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</p> <ul> <li> <p>Lorem ipsum</p> </li> <li> <p>Lorem ipsum</p> </li> <li> <p>Lorem ipsum</p> </li> </ul>"},textFormContent:{theme:"dark",title:"Black form background color",text:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</p> <ul> <li> <p>Lorem ipsum</p> </li> <li> <p>Lorem ipsum</p> </li> <li> <p>Lorem ipsum</p> </li> </ul>"},direction:"form-content",background:{style:{backgroundColor:"#262626"}}},J={title:"Yandex Form",formData:{yandex:{theme:"default",id:"61a4e639d4d24e0dbba36f5c",customFormSection:"cloud"}}},K=[{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/icon_1_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/icon_1_dark.svg"},title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/icon_3_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/icon_3_dark.svg"},title:"Lorem ipsum ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/icon_2_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/icon_2_dark.svg"},title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}],e={default:{type:"form-block",textContent:{title:"Lorem ipsum dolor sit amet",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},textFormContent:{title:"Lorem ipsum dolor sit amet",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},title:"Hubspot form",formData:{hubspot:{region:"eu1",portalId:"25764979",formId:"a3eb06a6-e8ce-45d4-81bd-7fadb7dab313"}}},withBackground:Y,withFullWidth:z,withBackgroundImage:A,darkTheme:G,yandexForm:J,list:K},N={title:"Blocks/Form",component:R,args:{...e.default,textContent:{...e.default.textContent,text:g(e.default.textContent.text)},textFormContent:{...e.default.textFormContent,text:g(e.default.textFormContent.text)},...p.args},argTypes:{type:{control:!1},direction:{options:u,control:{type:"select"}},...p.argTypes}},d=t=>{const U=M();if(O(t))return{hubspot:{...t.hubspot,formInstanceId:U}};if(H(t))return{yandex:t.yandex}},Q=t=>n.createElement(P,{content:{blocks:[{...t,formData:d(t.formData)}]}}),o=t=>n.createElement(P,{content:{blocks:[{...t,direction:u.FormContent,textContent:{...t.textContent,title:"FormContent"},textFormContent:{...t.textFormContent,title:"FormContent"},formData:d(t.formData)},{...t,direction:u.ContentForm,textContent:{...t.textContent,title:"ContentForm"},textFormContent:{...t.textFormContent,title:"ContentForm"},formData:d(t.formData)},{...t,direction:u.Center,textContent:{...t.textContent,title:"Center"},textFormContent:{...t.textFormContent,title:"Center"},formData:d(t.formData)}]}}),V=t=>n.createElement(n.Fragment,null,n.createElement(o,{...t}),n.createElement(o,{...t,...e.default,...e.withBackground})),c=Q.bind({}),l=o.bind({}),r=o.bind({}),a=o.bind({}),i=o.bind({}),s=o.bind({}),m=V.bind({});r.args=e.withFullWidth;a.args=e.withBackground;i.args=e.withBackgroundImage;s.args=e.darkTheme;m.args={...e.yandexForm,...e.withBackgroundImage};var C,F,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <PageConstructor content={{
  blocks: [{
    ...args,
    formData: __getFormData(args.formData)
  }]
}} />`,...(x=(F=c.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var f,D,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => <PageConstructor content={{
  blocks: [{
    ...args,
    direction: FormBlockDirection.FormContent,
    textContent: {
      ...args.textContent,
      title: 'FormContent'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'FormContent'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.ContentForm,
    textContent: {
      ...args.textContent,
      title: 'ContentForm'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'ContentForm'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.Center,
    textContent: {
      ...args.textContent,
      title: 'Center'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'Center'
    },
    formData: __getFormData(args.formData)
  }]
}} />`,...(b=(D=l.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var k,h,_;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => <PageConstructor content={{
  blocks: [{
    ...args,
    direction: FormBlockDirection.FormContent,
    textContent: {
      ...args.textContent,
      title: 'FormContent'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'FormContent'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.ContentForm,
    textContent: {
      ...args.textContent,
      title: 'ContentForm'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'ContentForm'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.Center,
    textContent: {
      ...args.textContent,
      title: 'Center'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'Center'
    },
    formData: __getFormData(args.formData)
  }]
}} />`,...(_=(h=r.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var y,B,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`args => <PageConstructor content={{
  blocks: [{
    ...args,
    direction: FormBlockDirection.FormContent,
    textContent: {
      ...args.textContent,
      title: 'FormContent'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'FormContent'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.ContentForm,
    textContent: {
      ...args.textContent,
      title: 'ContentForm'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'ContentForm'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.Center,
    textContent: {
      ...args.textContent,
      title: 'Center'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'Center'
    },
    formData: __getFormData(args.formData)
  }]
}} />`,...(v=(B=a.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var q,L,T;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => <PageConstructor content={{
  blocks: [{
    ...args,
    direction: FormBlockDirection.FormContent,
    textContent: {
      ...args.textContent,
      title: 'FormContent'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'FormContent'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.ContentForm,
    textContent: {
      ...args.textContent,
      title: 'ContentForm'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'ContentForm'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.Center,
    textContent: {
      ...args.textContent,
      title: 'Center'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'Center'
    },
    formData: __getFormData(args.formData)
  }]
}} />`,...(T=(L=i.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var W,w,E;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`args => <PageConstructor content={{
  blocks: [{
    ...args,
    direction: FormBlockDirection.FormContent,
    textContent: {
      ...args.textContent,
      title: 'FormContent'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'FormContent'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.ContentForm,
    textContent: {
      ...args.textContent,
      title: 'ContentForm'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'ContentForm'
    },
    formData: __getFormData(args.formData)
  }, {
    ...args,
    direction: FormBlockDirection.Center,
    textContent: {
      ...args.textContent,
      title: 'Center'
    },
    textFormContent: {
      ...args.textFormContent,
      title: 'Center'
    },
    formData: __getFormData(args.formData)
  }]
}} />`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var S,j,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`args => <React.Fragment>
        <ContentDirectionTemplate {...args} />
        <ContentDirectionTemplate {...args} {...data.default as FormBlockModel} {...data.withBackground} />
    </React.Fragment>`,...(I=(j=m.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const X=["Default","ContentDirection","WithFullWidth","WithBackgroundColor","WithBackgroundImage","DarkTheme","FormData"],nt=Object.freeze(Object.defineProperty({__proto__:null,ContentDirection:l,DarkTheme:s,Default:c,FormData:m,WithBackgroundColor:a,WithBackgroundImage:i,WithFullWidth:r,__namedExportsOrder:X,default:N},Symbol.toStringTag,{value:"Module"}));export{nt as F};
