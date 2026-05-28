import{R as t}from"./iframe-D_753FGH.js";import{y as f}from"./utils-CvmYkbLb.js";import{B as o}from"./BasicCard-De-lfb5f.js";import{D as x}from"./Divider-Cd3wnjLY.js";import{T as u}from"./Title-DiKYwn-8.js";import"./preload-helper-D6kgxu3v.js";import"./index-BKDI3d4M.js";import"./keys-BgPaaH4I.js";import"./_baseKeys-BBRghhKV.js";import"./url-Bp1mMoG5.js";import"./index-BVjx2P4D.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-Dk2edqYr.js";import"./Content-BEkNUoqf.js";import"./blocks-11CZeTkG.js";import"./toString-D-wDLhyJ.js";import"./isSymbol-CcYecSdT.js";import"./Links-BQ-bJLkj.js";import"./Link-Cp9kb1Gu.js";import"./BackLink-CZNs8vv0.js";import"./useAnalytics-epuPAUpH.js";import"./Button-CuIf8eHP.js";import"./common-NFpjdTrn.js";import"./Icon-vCJfP_6U.js";import"./EventBroker-E39ZfZxp.js";import"./FileLink-DayUXkRh.js";import"./url-DROEMhaP.js";import"./Label-COKsQyfc.js";import"./Xmark-DbRAlMKK.js";import"./HTML-Qq8RlsN9.js";import"./ContentList-nQjAiHw5.js";import"./Image-B9EhQ5to.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DefZ7QE7.js";import"./Buttons-B9hdoh2A.js";import"./Button-BR-e-6ho.js";import"./addComponentKeysets-CcShgFLH.js";import"./Link-BWOFy6GE.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BirCEZPB.js";import"./Col-CInAXC98.js";import"./CardBase-e6mKeATr.js";import"./BackgroundImage-BQhaB8kD.js";import"./RouterLink-D6VVf9GH.js";import"./Tag-YnVgGXeY.js";import"./IconWrapper-B6DJ9Zyi.js";import"./ToggleArrow-CD0hknrU.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
