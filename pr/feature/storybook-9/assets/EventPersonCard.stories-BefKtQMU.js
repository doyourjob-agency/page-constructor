import{R as t}from"./iframe-rOpawicF.js";import{y as p}from"./utils-BlwuuQ7c.js";import{E as n}from"./EventPersonCard-C-rgI1hm.js";const u={light:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/img-mini_4-12_dark.png",title:"Light monochrome theme",theme:"light"},dark:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/img-mini_4-12_light.png",title:"Dark monochrome theme",theme:"dark"}},e={default:{content:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/img_6-12_light.png",hoverImage:"https://doyourjob-agency.github.io/page-constructor/pr/feature/storybook-9/story-assets/img-mini_4-12_dark.png",title:"Lorem ipsum",subtitle:"Ut enim ad minim veniam",text:"[quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",links:[{url:"#",text:"Link",theme:"normal",arrow:!0}]}},theme:u},h={component:n,title:"Components/Cards/EventPersonCard"},b=r=>t.createElement(n,{...r}),f=r=>t.createElement("div",null,t.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#ccf0d2",marginBottom:"64px"}},t.createElement(n,{...r,image:e.theme.light.image,title:e.theme.light.title,theme:e.theme.light.theme})),t.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#262626"}},t.createElement(n,{...r,image:e.theme.dark.image,title:e.theme.dark.title,theme:e.theme.dark.theme}))),o=b.bind({}),a=f.bind({}),g={...e.default.content,text:p(e.default.content.text)};o.args={...g};a.args={...g};var i,m,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <EventPersonCard {...args} />",...(s=(m=o.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var d,l,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const y=["Default","Theme"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Theme:a,__namedExportsOrder:y,default:h},Symbol.toStringTag,{value:"Module"}));export{E};
