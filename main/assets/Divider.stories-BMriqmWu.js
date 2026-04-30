import{R as t}from"./iframe-Cu898F94.js";import{y as f}from"./utils-C88IkHaz.js";import{B as o}from"./BasicCard-DaUIhXSE.js";import{D as x}from"./Divider-D3dvSClU.js";import{T as u}from"./Title-C3Eib16c.js";import"./preload-helper-D6kgxu3v.js";import"./index-CGgEvHZ-.js";import"./keys-B0XaNQ9d.js";import"./_baseKeys-BN_r33a6.js";import"./url-C7zAs-80.js";import"./index-Bbumy5Yn.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-DsPGWPQI.js";import"./blocks-DOJHjyZu.js";import"./toString-3Ts3siXb.js";import"./isSymbol-DPBc0JJy.js";import"./Links-DIQDDB3M.js";import"./Link-BXYTW53X.js";import"./BackLink-B08KRuUy.js";import"./useAnalytics-BglujU5k.js";import"./Button-DdxVq8QC.js";import"./common-72WqxE83.js";import"./Icon-DrnkArOr.js";import"./EventBroker-BjOKTNR_.js";import"./FileLink-CUZkcvkN.js";import"./url-BH7EkR-2.js";import"./Label-BZWqL9FO.js";import"./Xmark-BfaOBgcP.js";import"./HTML-Cnhi8QVL.js";import"./ContentList-CTPN4TR3.js";import"./Image-Vf5BUt8X.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-Cq1OsHLP.js";import"./Buttons-raadPV55.js";import"./Button-Bs7Vkemh.js";import"./addComponentKeysets-CgQeu40F.js";import"./Link-3QnRJPZ3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BOVL469i.js";import"./Col-CtTPdNO8.js";import"./CardBase-BQ25qk46.js";import"./BackgroundImage-BSWhJWWS.js";import"./RouterLink-CuYQHXj9.js";import"./Tag--UkgpQ0b.js";import"./IconWrapper-BJhE6Jew.js";import"./ToggleArrow-B6qsI1zA.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
