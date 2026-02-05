import{R as t}from"./iframe-C7w-9Y_K.js";import{y as f}from"./utils-Bc9as7i5.js";import{B as o}from"./BasicCard-BvUd_zCy.js";import{D as x}from"./Divider-DFwbIB43.js";import{T as u}from"./Title-CkupTjBb.js";import"./preload-helper-D6kgxu3v.js";import"./index-BifJE4Hx.js";import"./keys-BSMJ-34I.js";import"./_baseKeys-fwYQ4JWi.js";import"./url-Dsg8MWa2.js";import"./index-Bs29HziI.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-C8er8-BX.js";import"./Content-BF2Dri7p.js";import"./blocks-KbMUQHk1.js";import"./toString-DgdI5Y9n.js";import"./isSymbol-BbvFkVRn.js";import"./Links-BGmGxY41.js";import"./Link-CXC-xMUE.js";import"./BackLink-BeMs4udC.js";import"./useAnalytics-CLqEe1eK.js";import"./Button-CsW_K-9y.js";import"./common-Cx91PK0q.js";import"./Icon-B__bK1ED.js";import"./EventBroker-B12MVnKD.js";import"./FileLink-B160N5tz.js";import"./url-B4TjibCK.js";import"./Label-0641PKmr.js";import"./Xmark-BZeoTKWu.js";import"./HTML-DmI3Wl9f.js";import"./ContentList-BGRINJHv.js";import"./Image-DX0Y6CG9.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-C552IgiY.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BzFquZvc.js";import"./Button-C54QU9jR.js";import"./addComponentKeysets-HvORj7Rz.js";import"./Link-eHIgoC-7.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BUxHvOeQ.js";import"./Col-QfF2RTHl.js";import"./CardBase-DXag7vh4.js";import"./BackgroundImage-E9bT7Sn_.js";import"./RouterLink-Dz5GT_wU.js";import"./Tag-Bp-eB58h.js";import"./IconWrapper-A7OTDKOU.js";import"./ToggleArrow-B5Dcb7wp.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
