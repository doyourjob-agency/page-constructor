import{R as t}from"./iframe-wFl4kicF.js";import{y as f}from"./utils-D5kvdMn7.js";import{B as o}from"./BasicCard-Cw2lnIOU.js";import{D as x}from"./Divider-hhahZCHC.js";import{T as u}from"./Title-B2QbMmyQ.js";import"./preload-helper-D6kgxu3v.js";import"./index-DPtegUdo.js";import"./keys-BrslFQLh.js";import"./_baseKeys-QVgl3ioN.js";import"./url-CheWXj1a.js";import"./index-BqOMe5Wc.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-B3jHiR2u.js";import"./Content-DJr2ctF0.js";import"./blocks-DuGnyUgp.js";import"./toString-BtCwHZ9T.js";import"./isSymbol-D531t70e.js";import"./Links-CR5KpCfX.js";import"./Link-D_eTPvUE.js";import"./BackLink-BsK5IGpz.js";import"./useAnalytics-6hRsqbHR.js";import"./Button-Es6oLLIS.js";import"./common-DQ1FjVwi.js";import"./Icon-BkRQ9iv7.js";import"./EventBroker-Dv50n3VY.js";import"./FileLink-BW5l916i.js";import"./url-CiO8nV1d.js";import"./Label-BMfin-O5.js";import"./Xmark-Ba7WlJio.js";import"./YFMWrapper-Bjf_Xyh8.js";import"./HTML-DWDpr00Z.js";import"./ContentList-Bls7W-vd.js";import"./Image-Becz4Wl0.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C61DHwTK.js";import"./Buttons-FZZIOlc6.js";import"./Button-BgTjFoxx.js";import"./addComponentKeysets-CQ6kGjxx.js";import"./Link-C1OZ8Qg7.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-2lKWniPX.js";import"./Col-DOdtz59D.js";import"./CardBase-Cpgp5A4K.js";import"./BackgroundImage-Dr7SgpXj.js";import"./RouterLink-C1lLhx3b.js";import"./Tag-DdQPQ2tB.js";import"./IconWrapper-Vqzq-Aia.js";import"./ToggleArrow-plB8d5hO.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
        <Title title={data.default.title} />
        <div style={{
    maxWidth: '400px',
    marginTop: '10px'
  }}>
            <BasicCard {...args} />
            <Divider />
            <BasicCard {...args} />
        </div>
    </div>`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var l,d,c;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div>
        {data.sizes.items.map(item => <div key={item}>
                <Title title={getSizeTitle(item.toUpperCase())} />
                <div style={{
      maxWidth: '400px',
      marginTop: '10px',
      marginBottom: '24px'
    }}>
                    <BasicCard {...args} />
                    <Divider size={item as DividerSize} />
                    <BasicCard {...args} />
                </div>
            </div>)}
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const gt=["Default","Sizes"];export{r as Default,m as Sizes,gt as __namedExportsOrder,ft as default};
