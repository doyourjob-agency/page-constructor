import{R as e,r as u}from"./iframe-BpfeqHWj.js";import{C as l}from"./Control-B4FOoExd.js";import{R as r}from"./Row-gZ6FBEgA.js";import{C as t,G as a}from"./Col-uj9AwkHo.js";import"./preload-helper-D6kgxu3v.js";import"./addComponentKeysets-CJWmMxKP.js";import"./Icon-pjyo0C2m.js";const E={content:{iconSize:16,icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="yc-icon ServiceIcon" fill="currentColor" stroke="none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M1 2H0v12h16v-2H1V2zm11.5 5.5L9 4 5.5 7.5 2 4v7h14V4l-3.5 3.5z"></path>
</svg></svg>`}},w={sizesThemes:E,default:{content:{icon:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="yc-icon ServiceIcon" fill="currentColor" stroke="none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path d="M1 2H0v12h16v-2H1V2zm11.5 5.5L9 4 5.5 7.5 2 4v7h14V4l-3.5 3.5z"></path>
</svg></svg>`,theme:"primary",size:"s",iconSize:16}}},y={component:l,title:"Components/Links and buttons/Control"},d=n=>e.createElement(l,{...n}),m=n=>e.createElement(u.Fragment,null,e.createElement(t,null,e.createElement(l,{...n,size:"xs"})),e.createElement(t,null,e.createElement(l,{...n,size:"s"})),e.createElement(t,null,e.createElement(l,{...n,size:"m"})),e.createElement(t,null,e.createElement(l,{...n,size:"l"}))),v=n=>e.createElement(u.Fragment,null,e.createElement(r,null,e.createElement(t,null),e.createElement(t,null,"xs"),e.createElement(t,null,"s"),e.createElement(t,null,"m"),e.createElement(t,null,"l")),e.createElement(r,{alignItems:a.Center},e.createElement(t,null,"primary"),e.createElement(m,{...n,theme:"primary"})),e.createElement(r,{alignItems:a.Center},e.createElement(t,null,"secondary"),e.createElement(m,{...n,theme:"secondary"})),e.createElement(r,{alignItems:a.Center},e.createElement(t,null,"link"),e.createElement(m,{...n,theme:"link"})),e.createElement(r,{alignItems:a.Center},e.createElement(t,null,"accent"),e.createElement(m,{...n,theme:"accent"}))),s=d.bind({}),o=v.bind({});s.args=w.default.content;o.args=w.sizesThemes.content;var c,i,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"args => <Control {...args} />",...(g=(i=s.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,C,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => <Fragment>
        <Row>
            <Col />
            <Col>xs</Col>
            <Col>s</Col>
            <Col>m</Col>
            <Col>l</Col>
        </Row>
        <Row alignItems={GridAlignItems.Center}>
            <Col>primary</Col>
            <SizesTemplate {...args} theme="primary" />
        </Row>
        <Row alignItems={GridAlignItems.Center}>
            <Col>secondary</Col>
            <SizesTemplate {...args} theme="secondary" />
        </Row>
        <Row alignItems={GridAlignItems.Center}>
            <Col>link</Col>
            <SizesTemplate {...args} theme="link" />
        </Row>
        <Row alignItems={GridAlignItems.Center}>
            <Col>accent</Col>
            <SizesTemplate {...args} theme="accent" />
        </Row>
    </Fragment>`,...(h=(C=o.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const k=["Default","SizesThemes"];export{s as Default,o as SizesThemes,k as __namedExportsOrder,y as default};
