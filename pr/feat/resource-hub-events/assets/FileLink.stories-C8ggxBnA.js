import{R as e,r as y}from"./iframe-B_2GCHMz.js";import{F as s}from"./FileLink-JpcDP-hz.js";import{R as p}from"./Row-BvxGMQXw.js";import{C as n}from"./Col-D_Knwouz.js";import"./preload-helper-D6kgxu3v.js";import"./url-Bq6ffBtb.js";import"./url-BYYE7QWx.js";import"./Label-Ga1SqY5k.js";import"./Xmark-BZ3ilrA9.js";import"./Icon-DcCZpznb.js";const F={content:{href:"qwe.pdf",text:"Link to file"}},k={content:{text:"Link to file"}},c={default:{content:{href:"qwe.pdf",text:"Link to file"}},typesThemes:F,extensions:k},O={component:s,title:"Components/Links and buttons/FileLink"},C=t=>e.createElement(s,{...t}),o=t=>e.createElement(p,{style:{padding:"10px"}},e.createElement(n,null,t.theme),e.createElement(n,null,e.createElement(s,{...t,type:"horizontal"})),e.createElement(n,null,e.createElement(s,{...t,type:"vertical"}))),L=t=>e.createElement(y.Fragment,null,e.createElement(p,{style:{padding:"10px"}},e.createElement(n,null),e.createElement(n,null,"horizontal"),e.createElement(n,null,"vertical")),e.createElement(o,{...t,theme:"default"}),e.createElement(o,{...t,theme:"light"}),e.createElement("section",{style:{color:"#3a74ff"}},e.createElement(o,{...t,theme:"dark"}))),a=t=>e.createElement(p,{style:{padding:"10px"}},e.createElement(n,null,e.createElement(s,{...t}))),P=t=>e.createElement(y.Fragment,null,e.createElement(a,{...t,href:"example.pdf"}),e.createElement(a,{...t,href:"example.doc"}),e.createElement(a,{...t,href:"example.xls"}),e.createElement(a,{...t,href:"example.ppt"}),e.createElement(a,{...t,href:"example.fig"}),e.createElement(a,{...t,href:"example.zip"}),e.createElement(a,{...t,href:"example.mp3"})),r=C.bind({}),l=L.bind({}),m=P.bind({});r.args=c.default.content;l.args=c.typesThemes.content;m.args=c.extensions.content;var i,d,h;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"args => <FileLink {...args} />",...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var f,g,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Fragment>
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
    </Fragment>`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var E,T,u;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`args => <Fragment>
        <WithPaddingTemplate {...args} href="example.pdf" />
        <WithPaddingTemplate {...args} href="example.doc" />
        <WithPaddingTemplate {...args} href="example.xls" />
        <WithPaddingTemplate {...args} href="example.ppt" />
        <WithPaddingTemplate {...args} href="example.fig" />
        <WithPaddingTemplate {...args} href="example.zip" />
        <WithPaddingTemplate {...args} href="example.mp3" />
    </Fragment>`,...(u=(T=m.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};const j=["Default","TypesThemes","Extensions"];export{r as Default,m as Extensions,l as TypesThemes,j as __namedExportsOrder,O as default};
