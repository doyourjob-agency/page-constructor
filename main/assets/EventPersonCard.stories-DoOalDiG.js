import{R as t}from"./iframe-BIrROPec.js";import{y as x}from"./utils-wBZ4Wz_M.js";import{E as i}from"./EventPersonCard-SRfx0TLL.js";const f={url:"https://example.com",target:"_blank"},y={light:{image:"https://doyourjob-agency.github.io/page-constructor/main/story-assets/img-mini_4-12_dark.png",title:"Light monochrome theme",theme:"light"},dark:{image:"https://doyourjob-agency.github.io/page-constructor/main/story-assets/img-mini_4-12_light.png",title:"Dark monochrome theme",theme:"dark"}},e={default:{content:{image:"https://doyourjob-agency.github.io/page-constructor/main/story-assets/img_6-12_light.png",hoverImage:"https://doyourjob-agency.github.io/page-constructor/main/story-assets/img-mini_4-12_dark.png",title:"Lorem ipsum",subtitle:"Ut enim ad minim veniam",text:"[quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",links:[{url:"#",text:"Link",theme:"normal",arrow:!0}]}},withUrl:f,theme:y},k={component:i,title:"Components/Cards/EventPersonCard"},v=n=>t.createElement(i,{...n}),E=n=>t.createElement("div",null,t.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#ccf0d2",marginBottom:"64px"}},t.createElement(i,{...n,image:e.theme.light.image,title:e.theme.light.title,theme:e.theme.light.theme})),t.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#262626"}},t.createElement(i,{...n,image:e.theme.dark.image,title:e.theme.dark.title,theme:e.theme.dark.theme}))),a=v.bind({}),r=v.bind({}),o=E.bind({}),m={...e.default.content,text:x(e.default.content.text)};a.args={...m};r.args={...m,...e.withUrl};o.args={...m};var s,d,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:"args => <EventPersonCard {...args} />",...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,g,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"args => <EventPersonCard {...args} />",...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div>
        <div style={{
    paddingBottom: '64px',
    paddingTop: '64px',
    backgroundColor: '#ccf0d2',
    marginBottom: '64px'
  }}>
            <EventPersonCard {...args} image={data.theme.light.image} title={data.theme.light.title} theme={data.theme.light.theme as ContentTheme} />
        </div>
        <div style={{
    paddingBottom: '64px',
    paddingTop: '64px',
    backgroundColor: '#262626'
  }}>
            <EventPersonCard {...args} image={data.theme.dark.image} title={data.theme.dark.title} theme={data.theme.dark.theme as ContentTheme} />
        </div>
    </div>`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const C=["Default","WithUrl","Theme"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Theme:o,WithUrl:r,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{j as E};
