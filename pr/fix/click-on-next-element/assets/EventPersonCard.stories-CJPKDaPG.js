import{R as t}from"./iframe-Cd4hUbQB.js";import{y as f}from"./utils-CmnbtGEY.js";import{E as i}from"./EventPersonCard-AiIqQSUL.js";const y={url:"https://example.com",target:"_blank"},b={light:{image:"https://doyourjob-agency.github.io/page-constructor/pr/fix/click-on-next-element/story-assets/img-mini_4-12_dark.png",title:"Light monochrome theme",theme:"light"},dark:{image:"https://doyourjob-agency.github.io/page-constructor/pr/fix/click-on-next-element/story-assets/img-mini_4-12_light.png",title:"Dark monochrome theme",theme:"dark"}},e={default:{content:{image:"https://doyourjob-agency.github.io/page-constructor/pr/fix/click-on-next-element/story-assets/img_6-12_light.png",hoverImage:"https://doyourjob-agency.github.io/page-constructor/pr/fix/click-on-next-element/story-assets/img-mini_4-12_dark.png",title:"Lorem ipsum",subtitle:"Ut enim ad minim veniam",text:"[quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",links:[{url:"#",text:"Link",theme:"normal",arrow:!0}]}},withUrl:y,theme:b},k={component:i,title:"Components/Cards/EventPersonCard"},v=o=>t.createElement("div",{style:{padding:"20px"}},t.createElement(i,{...o})),E=o=>t.createElement("div",null,t.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#ccf0d2",marginBottom:"64px",paddingLeft:"20px",paddingRight:"20px"}},t.createElement(i,{...o,image:e.theme.light.image,title:e.theme.light.title,theme:e.theme.light.theme})),t.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#262626"}},t.createElement(i,{...o,image:e.theme.dark.image,title:e.theme.dark.title,theme:e.theme.dark.theme}))),a=v.bind({}),r=v.bind({}),n=E.bind({}),m={...e.default.content,text:f(e.default.content.text)};a.args={...m};r.args={...m,...e.withUrl};n.args={...m};var s,d,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div style={{
  padding: '20px'
}}>
        <EventPersonCard {...args} />
    </div>`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => <div style={{
  padding: '20px'
}}>
        <EventPersonCard {...args} />
    </div>`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => <div>
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
    </div>`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const C=["Default","WithUrl","Theme"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Theme:n,WithUrl:r,__namedExportsOrder:C,default:k},Symbol.toStringTag,{value:"Module"}));export{j as E};
