import{R as e,r as B}from"./iframe-DP02aQkD.js";import{L as a}from"./Link-55ikbYaf.js";import{R}from"./Row-CprkpRgQ.js";import{C as n}from"./Col-DhPPoTpE.js";import"./preload-helper-D6kgxu3v.js";import"./BackLink-DuQ6LWD4.js";import"./useAnalytics-k0CgeXsD.js";import"./Button-CkAl67h5.js";import"./common-BfwX388o.js";import"./Icon-DBvR3Gh4.js";import"./EventBroker-DVV9Od0g.js";import"./FileLink-DSV_Lil3.js";import"./url-CsrAYyDv.js";import"./url-CIFK1I-c.js";import"./Label-gMrXstYN.js";import"./Xmark-BgBGW7yi.js";import"./blocks-BwLuowHo.js";import"./toString-Bwn0N5-1.js";import"./isSymbol-9dQiztko.js";const y={content:{url:"#",theme:"back"}},X={content:{url:"#",theme:"underline"}},_={children:"Link with child",content:{url:"#",theme:"normal"}},U={content:{text:"Normal link with an arrow",url:"#",arrow:!0,theme:"normal"}},O={content:{text:"Normal link",url:"#",theme:"normal",colorTheme:"dark"}},j={title:"Link size {{size}}",content:{text:"Link",url:"#"}},r={backWithChildren:y,default:{content:{text:"Default link",url:"#"}},underlineWithChildren:X,normalWithChildren:_,normalArrow:U,normalForDarkTheme:O,themesSizes:j},d=t=>r.themesSizes.title.replace("{{size}}",t),pe={component:a,title:"Components/Links and buttons/Link"},q=t=>e.createElement(a,{...t}),G=t=>e.createElement("section",{style:{backgroundColor:"#7ccea0",display:"inline-block",padding:"0 16px 16px"}},e.createElement(a,{...t})),l=t=>e.createElement(R,null,e.createElement(n,null,t.theme),e.createElement(n,null,e.createElement(a,{text:d("s"),...t,textSize:"s"})),e.createElement(n,null,e.createElement(a,{text:d("m"),...t,textSize:"m"})),e.createElement(n,null,e.createElement(a,{text:d("l"),...t,textSize:"l"}))),I=t=>e.createElement(B.Fragment,null,e.createElement(R,null,e.createElement(n,null),e.createElement(n,null,"s"),e.createElement(n,null,"m"),e.createElement(n,null,"l")),e.createElement(l,{...t,theme:"normal"}),e.createElement(l,{...t,theme:"underline"}),e.createElement(l,{...t,theme:"back"}),e.createElement(l,{...t,theme:"file-link"})),g=t=>e.createElement(a,{...t},e.createElement("span",null,e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"16",height:"16",fill:"currentColor",stroke:"none"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},e.createElement("path",{d:"M4 5.38V1.05c-2.28.23-4 1.24-4 2.45v9C0 13.88 2.24 15 5 15s5-1.12 5-2.5V12a6.63 6.63 0 0 1-6-6.62z"}),e.createElement("path",{d:"M10 0H5v5.38A5.61 5.61 0 0 0 10.62 11H14v1h-2v4h4V6a6 6 0 0 0-6-6zm3 9h-2V7h2z"})))," ",r.normalWithChildren.children)),o=q.bind({}),s=I.bind({}),i=g.bind({}),m=l.bind({}),c=G.bind({}),h=g.bind({}),p=g.bind({});o.args=r.default.content;s.args=r.themesSizes.content;i.args=r.normalWithChildren.content;m.args=r.normalArrow.content;c.args=r.normalForDarkTheme.content;h.args=r.underlineWithChildren.content;p.args=r.backWithChildren.content;var w,u,k;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:"args => <Link {...args} />",...(k=(u=o.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var C,x,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => <Fragment>
        <Row>
            <Col />
            <Col>s</Col>
            <Col>m</Col>
            <Col>l</Col>
        </Row>
        <SizesTemplate {...args} theme="normal" />
        <SizesTemplate {...args} theme="underline" />
        <SizesTemplate {...args} theme="back" />
        <SizesTemplate {...args} theme="file-link" />
    </Fragment>`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var z,E,S;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`args => <Link {...args}>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" fill="currentColor" stroke="none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M4 5.38V1.05c-2.28.23-4 1.24-4 2.45v9C0 13.88 2.24 15 5 15s5-1.12 5-2.5V12a6.63 6.63 0 0 1-6-6.62z" />
                    <path d="M10 0H5v5.38A5.61 5.61 0 0 0 10.62 11H14v1h-2v4h4V6a6 6 0 0 0-6-6zm3 9h-2V7h2z" />
                </svg>
            </svg>{' '}
            {data.normalWithChildren.children}
        </span>
    </Link>`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var T,W,L;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`args => <Row>
        <Col>{args.theme}</Col>
        <Col>
            <Link text={getSizesTitle('s')} {...args} textSize="s" />
        </Col>
        <Col>
            <Link text={getSizesTitle('m')} {...args} textSize="m" />
        </Col>
        <Col>
            <Link text={getSizesTitle('l')} {...args} textSize="l" />
        </Col>
    </Row>`,...(L=(W=m.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var b,f,V;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`args => <section style={{
  backgroundColor: '#7ccea0',
  display: 'inline-block',
  padding: '0 16px 16px'
}}>
        <Link {...args} />
    </section>`,...(V=(f=c.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var D,A,F;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`args => <Link {...args}>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" fill="currentColor" stroke="none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M4 5.38V1.05c-2.28.23-4 1.24-4 2.45v9C0 13.88 2.24 15 5 15s5-1.12 5-2.5V12a6.63 6.63 0 0 1-6-6.62z" />
                    <path d="M10 0H5v5.38A5.61 5.61 0 0 0 10.62 11H14v1h-2v4h4V6a6 6 0 0 0-6-6zm3 9h-2V7h2z" />
                </svg>
            </svg>{' '}
            {data.normalWithChildren.children}
        </span>
    </Link>`,...(F=(A=h.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var H,M,N;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`args => <Link {...args}>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" fill="currentColor" stroke="none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M4 5.38V1.05c-2.28.23-4 1.24-4 2.45v9C0 13.88 2.24 15 5 15s5-1.12 5-2.5V12a6.63 6.63 0 0 1-6-6.62z" />
                    <path d="M10 0H5v5.38A5.61 5.61 0 0 0 10.62 11H14v1h-2v4h4V6a6 6 0 0 0-6-6zm3 9h-2V7h2z" />
                </svg>
            </svg>{' '}
            {data.normalWithChildren.children}
        </span>
    </Link>`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const de=["Default","ThemesSizes","NormalWithChildren","NormalArrow","NormalForDarkTheme","UnderlineWithChildren","BackWithChildren"];export{p as BackWithChildren,o as Default,m as NormalArrow,c as NormalForDarkTheme,i as NormalWithChildren,s as ThemesSizes,h as UnderlineWithChildren,de as __namedExportsOrder,pe as default};
