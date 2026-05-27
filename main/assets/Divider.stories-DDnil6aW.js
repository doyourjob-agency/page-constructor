import{R as t}from"./iframe-Bc2WL6nH.js";import{y as f}from"./utils-C2yR1joA.js";import{B as o}from"./BasicCard-CW8AkCmd.js";import{D as x}from"./Divider-D-VOHUZj.js";import{T as u}from"./Title-B0sXTSak.js";import"./preload-helper-D6kgxu3v.js";import"./index-D2f6fE0M.js";import"./keys-RzfR5Cvt.js";import"./_baseKeys-Ckowh6RQ.js";import"./url-C95Zci91.js";import"./index-B4CD5iCf.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-CEGXZUBl.js";import"./blocks-IGej_5k7.js";import"./toString-BW_I4iQB.js";import"./isSymbol-cHd295fb.js";import"./Links-CIUDfGk-.js";import"./Link-BrMFpLC_.js";import"./BackLink-LZl7uFDj.js";import"./useAnalytics-DkxirEwt.js";import"./Button-CPE0nsTq.js";import"./common-SZa3mn2S.js";import"./Icon-CM2Ppenw.js";import"./EventBroker-Cg3iEb7T.js";import"./FileLink-GT8MOu5s.js";import"./url-UupwcFEO.js";import"./Label-UCLitf8H.js";import"./Xmark-2WENs4Tw.js";import"./HTML-B5HGPt2b.js";import"./ContentList-Dsrok2pI.js";import"./Image-KMUw0ryU.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DhPkhXxR.js";import"./Buttons-CmziLlHB.js";import"./Button-iG3QHOEa.js";import"./addComponentKeysets-DVbc0N0P.js";import"./Link-CLE7CgUg.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DQoM9j6Z.js";import"./Col-D1gyMhkA.js";import"./CardBase-xlMWN2eM.js";import"./BackgroundImage-cDDBMEkw.js";import"./RouterLink-BDjk05rD.js";import"./Tag-CT1pUCSG.js";import"./IconWrapper-V9SXfzIA.js";import"./ToggleArrow-BCuVdeKS.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
    </div>`,...(c=(d=m.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const ft=["Default","Sizes"];export{r as Default,m as Sizes,ft as __namedExportsOrder,vt as default};
