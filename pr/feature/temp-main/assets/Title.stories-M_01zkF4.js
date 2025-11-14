import{R as t}from"./iframe-VNYLth98.js";import{y as q}from"./utils-BmhzZx9O.js";import{T as s}from"./Title-wcsn4gg9.js";const C={content:{subtitleBold:!0}},M={content:{title:{text:"Lorem ipsum",url:"https://example.com",custom:"Some react node",urlTitle:"Example website. Opens in a new window"}}},R={content:{title:{text:"Lorem ipsum",url:"https://example.com",urlTitle:"Example website. Opens in a new window"}}},X={xs:{text:"Size XS",textSize:"xs"},s:{text:"Size S",textSize:"s"},m:{text:"Size M",textSize:"m"},l:{text:"Size L",textSize:"l"},xl:{text:"Size XL",textSize:"xl"}},e={default:{content:{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",subtitle:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}},subtitleBold:C,customTitle:M,titleLink:R,sizes:X},A={component:s,title:"Components/Title"},u=i=>t.createElement(s,{...i}),g=i=>{const c=typeof i.title=="object"?i.title:{};return t.createElement("div",null,t.createElement("div",{style:{paddingBottom:"64px"}},t.createElement(s,{...i,title:{...e.sizes.xl,...c}})),t.createElement("div",{style:{paddingBottom:"64px"}},t.createElement(s,{...i,title:{...e.sizes.l,...c}})),t.createElement("div",{style:{paddingBottom:"64px"}},t.createElement(s,{...i,title:{...e.sizes.m,...c}})),t.createElement("div",{style:{paddingBottom:"64px"}},t.createElement(s,{...i,title:{...e.sizes.s,...c}})),t.createElement("div",{style:{paddingBottom:"64px"}},t.createElement(s,{...i,title:{...e.sizes.xs,...c}})))},p={...e.default.content,subtitle:q(e.default.content.subtitle)},n=u.bind({}),o=u.bind({}),l=u.bind({}),a=u.bind({}),r=g.bind({}),d=g.bind({}),m=g.bind({});n.args={...p};o.args={...p,subtitleBold:e.subtitleBold.content.subtitleBold};l.args={...p,title:e.titleLink.content.title};a.args={...p,title:e.customTitle.content.title};r.args={...p};d.args={...p,title:e.titleLink.content.title};m.args={title:e.default.content.title};var T,x,b;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:"args => <Title {...args} />",...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,z,P;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"args => <Title {...args} />",...(P=(z=o.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var I,S,y;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:"args => <Title {...args} />",...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var B,j,O;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Title {...args} />",...(O=(j=a.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var f,E,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const titleItemObjectProps = typeof args.title === 'object' ? args.title : {};
  return <div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.xl,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.l,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.m,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.s,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.xs,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
        </div>;
}`,...(L=(E=r.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var h,k,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const titleItemObjectProps = typeof args.title === 'object' ? args.title : {};
  return <div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.xl,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.l,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.m,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.s,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.xs,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
        </div>;
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,_,W;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const titleItemObjectProps = typeof args.title === 'object' ? args.title : {};
  return <div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.xl,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.l,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.m,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.s,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
            <div style={{
      paddingBottom: '64px'
    }}>
                <Title {...args} title={{
        ...data.sizes.xs,
        ...titleItemObjectProps
      } as TitleItemProps} />
            </div>
        </div>;
}`,...(W=(_=m.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const U=["Default","SubtitleBold","TitleLink","CustomTitle","Sizes","SizesWithLinks","TitleWithoutDescription"],J=Object.freeze(Object.defineProperty({__proto__:null,CustomTitle:a,Default:n,Sizes:r,SizesWithLinks:d,SubtitleBold:o,TitleLink:l,TitleWithoutDescription:m,__namedExportsOrder:U,default:A},Symbol.toStringTag,{value:"Module"}));export{J as T};
