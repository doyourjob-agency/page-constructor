import{R as t}from"./iframe-ClpkpS-U.js";import{y}from"./utils-BGBUQUar.js";import{E as i}from"./EventPersonCard-Baz3nTcV.js";const f={url:"https://example.com",target:"_blank"},b={light:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/link-around-media-layout-item/story-assets/img-mini_4-12_dark.png",title:"Light monochrome theme",theme:"light"},dark:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/link-around-media-layout-item/story-assets/img-mini_4-12_light.png",title:"Dark monochrome theme",theme:"dark"}},e={default:{content:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/link-around-media-layout-item/story-assets/img_6-12_light.png",hoverImage:"https://doyourjob-agency.github.io/page-constructor/pr/feature/link-around-media-layout-item/story-assets/img-mini_4-12_dark.png",title:"Lorem ipsum",subtitle:"Ut enim ad minim veniam",text:"[quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",links:[{url:"#",text:"Link",theme:"normal",arrow:!0}]}},withUrl:f,theme:b},k={component:i,title:"Components/Cards/EventPersonCard"},v=n=>t.createElement("div",{style:{padding:"20px"}},t.createElement(i,{...n})),E=n=>t.createElement("div",null,t.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#ccf0d2",marginBottom:"64px",paddingLeft:"20px",paddingRight:"20px"}},t.createElement(i,{...n,image:e.theme.light.image,title:e.theme.light.title,theme:e.theme.light.theme})),t.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#262626"}},t.createElement(i,{...n,image:e.theme.dark.image,title:e.theme.dark.title,theme:e.theme.dark.theme}))),a=v.bind({}),r=v.bind({}),o=E.bind({}),m={...e.default.content,text:y(e.default.content.text)};a.args={...m};r.args={...m,...e.withUrl};o.args={...m};var d,s,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => <div style={{
  padding: '20px'
}}>
        <EventPersonCard {...args} />
    </div>`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,g,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div style={{
  padding: '20px'
}}>
        <EventPersonCard {...args} />
    </div>`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => <div>
        <div style={{
    paddingBottom: '64px',
    paddingTop: '64px',
    backgroundColor: '#ccf0d2',
    marginBottom: '64px',
    paddingLeft: '20px',
    paddingRight: '20px'
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
    </div>`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const C=["Default","WithUrl","Theme"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Theme:o,WithUrl:r,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{j as E};
