import{R as t}from"./iframe-ClAwaZ3d.js";import{y as f}from"./utils-CemGLeE9.js";import{B as o}from"./BasicCard-Dgw_ND6a.js";import{D as x}from"./Divider-BEraiXPx.js";import{T as u}from"./Title-BkmFx7Mg.js";import"./preload-helper-D6kgxu3v.js";import"./index-DIivspey.js";import"./keys-WB63OISl.js";import"./_baseKeys-z-QYGlFx.js";import"./url-CwHBA2dp.js";import"./index-C8A3SBK3.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DrS_UDnC.js";import"./blocks-DfVZLWzg.js";import"./toString-xzXYgPqn.js";import"./isSymbol-BWv_A_Gs.js";import"./Links-B9gkheiJ.js";import"./Link-Bz5RbbwV.js";import"./BackLink-DdDOZYCL.js";import"./useAnalytics-CHQvWIoE.js";import"./Button-CAOPD8Z3.js";import"./common-DCUbmeSA.js";import"./Icon-sOnSSpum.js";import"./EventBroker-CD7RYBzL.js";import"./FileLink-CaEW_FhW.js";import"./url-Bil6huW6.js";import"./Label-C-35bTjV.js";import"./Xmark-BVg4Eker.js";import"./YFMWrapper-CfP25oci.js";import"./HTML-XnmAqNXt.js";import"./ContentList-rUk7aye9.js";import"./Image-DjP4-SdQ.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-BYSOFc1D.js";import"./Buttons-iVSkQt-f.js";import"./Button-zohg2Veu.js";import"./addComponentKeysets-qN3gEzDK.js";import"./Link-B3t7aCsa.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-VoBxbfyB.js";import"./Col-CljUMRLc.js";import"./CardBase-CYwFitis.js";import"./BackgroundImage-BXFZNPvX.js";import"./RouterLink-BwE8CbkX.js";import"./Tag-CbOvSFHW.js";import"./IconWrapper-DIOiApup.js";import"./ToggleArrow-_azj2kcy.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
