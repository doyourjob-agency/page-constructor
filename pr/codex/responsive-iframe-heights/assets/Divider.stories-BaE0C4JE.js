import{R as t}from"./iframe-CcRmxuTZ.js";import{y as f}from"./utils-CgptGfWo.js";import{B as o}from"./BasicCard-qQ9VsU_2.js";import{D as x}from"./Divider-Dr2bh_D2.js";import{T as u}from"./Title-BRirRU6V.js";import"./preload-helper-D6kgxu3v.js";import"./index-B2pPmbpk.js";import"./keys-CeLzoLR1.js";import"./_baseKeys-C8knC3WF.js";import"./url-VF6a2nV7.js";import"./index-D5Qew00T.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-CoBw174i.js";import"./blocks-FpB0N9be.js";import"./toString-Bi226dwr.js";import"./isSymbol-BDY_FlxZ.js";import"./Links-D6yUuK8H.js";import"./Link-D3tmMH0E.js";import"./BackLink-BgSQ-DSa.js";import"./useAnalytics-9p4y-Xmu.js";import"./Button-BY3HaNAO.js";import"./common-DvOY629f.js";import"./Icon-Cw8syD7n.js";import"./EventBroker-CtVE3lCp.js";import"./FileLink-CLCv9JZI.js";import"./url-DrF_muHh.js";import"./Label-cqVD_Z9N.js";import"./Xmark-BC-ge3Y2.js";import"./YFMWrapper-BmkYmqni.js";import"./HTML-B2Q7iW27.js";import"./ContentList-DaZ3lhwJ.js";import"./Image-BvD2sAG2.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Jn4qMCs9.js";import"./Buttons-Cp1ygbIi.js";import"./Button-PRQYOyeL.js";import"./addComponentKeysets-Cd0S4KN3.js";import"./Link-BGYTtJpw.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-CCx_lFN_.js";import"./Col-BhQPwBNr.js";import"./CardBase-D9_eWFLG.js";import"./BackgroundImage-D0hb9vYq.js";import"./RouterLink-xBaGs7y-.js";import"./Tag-C1fFpV_o.js";import"./IconWrapper-C2VG19px.js";import"./ToggleArrow-CUZiEp-D.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
