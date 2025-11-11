import{R as e}from"./iframe-BOgteeD7.js";import{y as c}from"./utils-DDnN3_al.js";import{C as o}from"./Content-DPk8C6Kd.js";const I={content:{centered:!0}},D={light:{title:"Light monochrome theme",theme:"light",buttons:[{text:"Button\r",theme:"monochrome",url:"https://example.com"},{text:"Button",theme:"normal",url:"#"}]},dark:{title:"Dark monochrome theme",theme:"dark",buttons:[{text:"Button\r",theme:"normal-contrast",url:"https://example.com"},{text:"Button",theme:"outlined-contrast",url:"#"}]}},j={content:{theme:"dark",buttons:[{text:"Button\r",theme:"normal-contrast",url:"https://example.com"},{text:"Button",theme:"outlined-contrast",url:"#"}]}},w={l:{title:"Size L"},s:{title:"Size S"}},U={content:{subtitle:"Lorem ipsum"}},W={content:{subtitleLinks:[{url:"#",text:"Link",theme:"normal",arrow:!0}]}},t={centered:I,default:{content:{title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",additionalInfo:"Duis aute irure dolor in [reprehenderit](https://example.com) n voluptate velit esse cillum dolore eu fugiat nulla pariatur.",links:[{url:"#",text:"Link",theme:"normal",arrow:!0}],buttons:[{text:"Button\r",theme:"action",url:"https://example.com"},{text:"Button",theme:"outlined",url:"#"}],list:[{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feature/benchmark-block/story-assets/icon_1_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feature/benchmark-block/story-assets/icon_1_dark.svg"},title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feature/benchmark-block/story-assets/icon_3_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feature/benchmark-block/story-assets/icon_3_dark.svg"},title:"Lorem ipsum ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feature/benchmark-block/story-assets/icon_2_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feature/benchmark-block/story-assets/icon_2_dark.svg"},title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}},theme:D,dark:j,size:w,withSubtitle:U,withSubtitleLinks:W},O={component:o,title:"Components/Content"},p=t.default.content.list.map(n=>({...n,text:(n==null?void 0:n.text)&&c(n.text)})),m=n=>e.createElement("div",null,e.createElement("div",{style:{paddingBottom:"64px"}},e.createElement(o,{...n,additionalInfo:c(t.default.content.additionalInfo)})),e.createElement("div",{style:{paddingBottom:"64px"}},e.createElement(o,{...n,links:t.default.content.links})),e.createElement("div",{style:{paddingBottom:"64px"}},e.createElement(o,{...n,buttons:t.default.content.buttons})),e.createElement("div",{style:{paddingBottom:"64px"}},e.createElement(o,{...n,list:p,links:t.default.content.links}))),R=n=>e.createElement("div",null,e.createElement("div",{style:{paddingBottom:"64px"}},e.createElement(o,{...n,title:t.size.l.title,list:p,buttons:t.default.content.buttons})),e.createElement("div",{style:{paddingBottom:"64px"}},e.createElement(o,{...n,title:t.size.s.title,list:p,buttons:t.default.content.buttons,size:"s"}))),A=n=>e.createElement("div",null,e.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#ccf0d2",marginBottom:"64px"}},e.createElement(o,{...n,title:t.theme.light.title,theme:t.theme.light.theme,buttons:t.theme.light.buttons})),e.createElement("div",{style:{paddingBottom:"64px",paddingTop:"64px",backgroundColor:"#262626"}},e.createElement(o,{...n,title:t.theme.dark.title,theme:t.theme.dark.theme,buttons:t.theme.dark.buttons}))),a=m.bind({}),i=m.bind({}),s=m.bind({}),r=R.bind({}),d=m.bind({}),l=A.bind({}),u={title:t.default.content.title,text:c(t.default.content.text)};a.args={...u};i.args={...u,...t.withSubtitle.content};s.args={...u,...t.withSubtitleLinks.content};r.args={...u};d.args={...u,...t.centered.content};l.args={...u,additionalInfo:c(t.default.content.additionalInfo)};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => <div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} additionalInfo={yfmTransform(data.default.content.additionalInfo)} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} links={data.default.content.links as LinkProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} buttons={data.default.content.buttons as ButtonProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} list={transformedContentList} links={data.default.content.links as LinkProps[]} />
        </div>
    </div>`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,v,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`args => <div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} additionalInfo={yfmTransform(data.default.content.additionalInfo)} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} links={data.default.content.links as LinkProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} buttons={data.default.content.buttons as ButtonProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} list={transformedContentList} links={data.default.content.links as LinkProps[]} />
        </div>
    </div>`,...(x=(v=i.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var k,y,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`args => <div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} additionalInfo={yfmTransform(data.default.content.additionalInfo)} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} links={data.default.content.links as LinkProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} buttons={data.default.content.buttons as ButtonProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} list={transformedContentList} links={data.default.content.links as LinkProps[]} />
        </div>
    </div>`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var C,L,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} title={data.size.l.title} list={transformedContentList} buttons={data.default.content.buttons as ButtonProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} title={data.size.s.title} list={transformedContentList} buttons={data.default.content.buttons as ButtonProps[]} size="s" />
        </div>
    </div>`,...(S=(L=r.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var E,_,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`args => <div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} additionalInfo={yfmTransform(data.default.content.additionalInfo)} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} links={data.default.content.links as LinkProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} buttons={data.default.content.buttons as ButtonProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px'
  }}>
            <Content {...args} list={transformedContentList} links={data.default.content.links as LinkProps[]} />
        </div>
    </div>`,...(T=(_=d.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var P,q,z;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div>
        <div style={{
    paddingBottom: '64px',
    paddingTop: '64px',
    backgroundColor: '#ccf0d2',
    marginBottom: '64px'
  }}>
            <Content {...args} title={data.theme.light.title} theme={data.theme.light.theme as ContentTheme} buttons={data.theme.light.buttons as ButtonProps[]} />
        </div>
        <div style={{
    paddingBottom: '64px',
    paddingTop: '64px',
    backgroundColor: '#262626'
  }}>
            <Content {...args} title={data.theme.dark.title} theme={data.theme.dark.theme as ContentTheme} buttons={data.theme.dark.buttons as ButtonProps[]} />
        </div>
    </div>`,...(z=(q=l.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const M=["Default","WithSubtitle","WithSubtitleLinks","Size","Centered","Theme"],J=Object.freeze(Object.defineProperty({__proto__:null,Centered:d,Default:a,Size:r,Theme:l,WithSubtitle:i,WithSubtitleLinks:s,__namedExportsOrder:M,default:O},Symbol.toStringTag,{value:"Module"}));export{J as C};
