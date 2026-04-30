import{R as t}from"./iframe-DskDGQQK.js";import{y as f}from"./utils-D_jhlde1.js";import{B as o}from"./BasicCard-C-kqY-A3.js";import{D as x}from"./Divider-D6FLHSSM.js";import{T as u}from"./Title-ClZX0jnm.js";import"./preload-helper-D6kgxu3v.js";import"./index-DuGYvd2d.js";import"./keys-BoPv0P8g.js";import"./_baseKeys-ByACALJd.js";import"./url-UiRYNKFl.js";import"./index-DJxMlCVU.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-Df5u7P-f.js";import"./blocks-B8d6_Ei9.js";import"./toString-CGRuirVh.js";import"./isSymbol-BD27UVoV.js";import"./Links-NI9M1Zp0.js";import"./Link-O1GOn50i.js";import"./BackLink-BGzLxAO5.js";import"./useAnalytics-Ch9JODjk.js";import"./Button-C7whwZ7w.js";import"./common-BsUgHZwv.js";import"./Icon-CKjD2OAC.js";import"./EventBroker-DLjm3A2l.js";import"./FileLink-BEeg2H5L.js";import"./url-HSjppSFp.js";import"./Label-B_g9Ev6O.js";import"./Xmark-2F9hcEnJ.js";import"./HTML-D8Zz-7si.js";import"./ContentList-CMqKoqIL.js";import"./Image-CgtFqNQm.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DR_eY5Ki.js";import"./Buttons-CDrSbaxt.js";import"./Button-DVWzi3vI.js";import"./addComponentKeysets-hbSXagLj.js";import"./Link-iSL83DRB.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DGA37qEG.js";import"./Col-BQsWNX-r.js";import"./CardBase-OivrydNN.js";import"./BackgroundImage-CdIjc58N.js";import"./RouterLink-CYfn13LJ.js";import"./Tag-J9UU0iZp.js";import"./IconWrapper-BySA-Aes.js";import"./ToggleArrow-BBhMP57D.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},vt={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
