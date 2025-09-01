import{R as e,r as y}from"./iframe-BIrROPec.js";import{F as s}from"./FileLink-Dl4xw4f3.js";import{R as p}from"./Row-FhllXs_-.js";import{C as a}from"./Col-C2H9qzey.js";import"./preload-helper-D6kgxu3v.js";import"./url-s9eHq_Kx.js";import"./url-C8XLSItv.js";import"./Label-BZA4t-x_.js";import"./Xmark-DN_jyISg.js";import"./Icon-BBupihn-.js";const F={content:{href:"qwe.pdf",text:"Link to file"}},k={content:{text:"Link to file"}},c={default:{content:{href:"qwe.pdf",text:"Link to file"}},typesThemes:F,extensions:k},O={component:s,title:"Components/Links and buttons/FileLink"},C=t=>e.createElement(s,{...t}),o=t=>e.createElement(p,{style:{padding:"10px"}},e.createElement(a,null,t.theme),e.createElement(a,null,e.createElement(s,{...t,type:"horizontal"})),e.createElement(a,null,e.createElement(s,{...t,type:"vertical"}))),L=t=>e.createElement(y.Fragment,null,e.createElement(p,{style:{padding:"10px"}},e.createElement(a,null),e.createElement(a,null,"horizontal"),e.createElement(a,null,"vertical")),e.createElement(o,{...t,theme:"default"}),e.createElement(o,{...t,theme:"light"}),e.createElement("section",{style:{color:"#3a74ff"}},e.createElement(o,{...t,theme:"dark"}))),n=t=>e.createElement(p,{style:{padding:"10px"}},e.createElement(a,null,e.createElement(s,{...t}))),P=t=>e.createElement(y.Fragment,null,e.createElement(n,{...t,href:"example.pdf"}),e.createElement(n,{...t,href:"example.doc"}),e.createElement(n,{...t,href:"example.xls"}),e.createElement(n,{...t,href:"example.ppt"}),e.createElement(n,{...t,href:"example.fig"}),e.createElement(n,{...t,href:"example.zip"})),r=C.bind({}),l=L.bind({}),m=P.bind({});r.args=c.default.content;l.args=c.typesThemes.content;m.args=c.extensions.content;var i,d,f;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <FileLink {...args} />",...(f=(d=r.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var h,g,E;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Fragment>
        <Row style={{
    padding: '10px'
  }}>
            <Col />
            <Col>horizontal</Col>
            <Col>vertical</Col>
        </Row>
        <TypesTemplate {...args} theme="default" />
        <TypesTemplate {...args} theme="light" />
        <section style={{
    color: '#3a74ff'
  }}>
            <TypesTemplate {...args} theme="dark" />
        </section>
    </Fragment>`,...(E=(g=l.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var x,u,T;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`args => <Fragment>
        <WithPaddingTemplate {...args} href="example.pdf" />
        <WithPaddingTemplate {...args} href="example.doc" />
        <WithPaddingTemplate {...args} href="example.xls" />
        <WithPaddingTemplate {...args} href="example.ppt" />
        <WithPaddingTemplate {...args} href="example.fig" />
        <WithPaddingTemplate {...args} href="example.zip" />
    </Fragment>`,...(T=(u=m.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};const j=["Default","TypesThemes","Extensions"];export{r as Default,m as Extensions,l as TypesThemes,j as __namedExportsOrder,O as default};
