import{R as t}from"./iframe-C8b-X1ep.js";import{y as f}from"./utils-BcXESwxd.js";import{B as o}from"./BasicCard-BbSJk5bM.js";import{D as x}from"./Divider-BLlQhpGT.js";import{T as u}from"./Title-CKr4CXx7.js";import"./preload-helper-D6kgxu3v.js";import"./index-CVBmlyYy.js";import"./keys-_eGxzIKT.js";import"./_baseKeys-DDV7eBQg.js";import"./url-CULLQHYI.js";import"./index-gcytp-uW.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-DEAxPdd7.js";import"./blocks-Cf1AfH0V.js";import"./toString-ehEVGZ1Y.js";import"./isSymbol-xMu85YvE.js";import"./Links-BMdMHgWj.js";import"./Link-4b5p479J.js";import"./BackLink-s1JTyTEU.js";import"./useAnalytics-CU0Z8fa9.js";import"./Button-C66yiKij.js";import"./common-CK0vuxfl.js";import"./Icon-B9N1DiLa.js";import"./EventBroker-CJhIabHb.js";import"./FileLink-u6h1KZBF.js";import"./url-imEkLvaE.js";import"./Label-BwUChau9.js";import"./Xmark-Ds7wjS7K.js";import"./HTML-JKsAoDLH.js";import"./ContentList-CBFyaq-M.js";import"./Image-Cc5H1f7m.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-jD48-fqS.js";import"./Buttons-B24ooeDH.js";import"./Button-q8X7vsMu.js";import"./addComponentKeysets-C4O3p6hd.js";import"./Link-CAkx6uF3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-C9xbg_TS.js";import"./Col-DCR6Va7z.js";import"./CardBase-Bo8Zj9DA.js";import"./BackgroundImage-BHEsdoPy.js";import"./RouterLink-BK7rLOjp.js";import"./Tag-C6Ad0n6a.js";import"./IconWrapper-I4aA5FPE.js";import"./ToggleArrow-97kiuAoI.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
