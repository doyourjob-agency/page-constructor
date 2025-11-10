import{R as t}from"./iframe-Cx0iB-MQ.js";import{y as f}from"./utils-DQ5VQ5g8.js";import{B as o}from"./BasicCard-BIxEEMnF.js";import{D as x}from"./Divider-1O0lahwG.js";import{T as u}from"./Title-_qJ0etn6.js";import"./preload-helper-D6kgxu3v.js";import"./index-DpDIGEhk.js";import"./keys-C_1qllCh.js";import"./_baseKeys-B_lw0JK4.js";import"./url-DMQaqRBh.js";import"./index-DAsOeNVz.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-BnRb4tSo.js";import"./Content-u0PomSnO.js";import"./blocks-TodNFDfl.js";import"./toString-C2j2rVoa.js";import"./isSymbol-DQMpqbhe.js";import"./Links-0zAX-mBT.js";import"./Link-DzsFsT8Y.js";import"./BackLink-Dy_b5Mwy.js";import"./useAnalytics-B989OC82.js";import"./Button-D5q6sE-Y.js";import"./common-_5WGYpPq.js";import"./Icon-DO4vR6BQ.js";import"./EventBroker-CnD6Kh3g.js";import"./FileLink-DldtLYwD.js";import"./url-Q7KxkBdM.js";import"./Label-DH97NBSK.js";import"./Xmark-ljKSZ0oO.js";import"./HTML-DGXcpElU.js";import"./ContentList-DKf5zn0z.js";import"./Image-DXIa0kQV.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-53K6UaQk.js";import"./v4-Dv1xt2bl.js";import"./Buttons-BHEy1rz0.js";import"./Button-fdTNlDM2.js";import"./addComponentKeysets-D6Y_rK6V.js";import"./Link-CD56WWVf.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-OqFSxA2G.js";import"./Col-ZikeRVD1.js";import"./CardBase-vUxPQ9Xx.js";import"./BackgroundImage-BHN-DSD6.js";import"./RouterLink-DLwQSTCN.js";import"./Tag-Dsn-pMCa.js";import"./IconWrapper-BC8oCf8E.js";import"./ToggleArrow-48A6WR3R.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
