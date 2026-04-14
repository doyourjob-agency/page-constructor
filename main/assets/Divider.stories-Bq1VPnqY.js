import{R as t}from"./iframe-C6yRd9Wb.js";import{y as f}from"./utils-DRN_4WTS.js";import{B as o}from"./BasicCard-B8LZjWME.js";import{D as x}from"./Divider-TrHovvj-.js";import{T as u}from"./Title-Cmm6PMwj.js";import"./preload-helper-D6kgxu3v.js";import"./index-By1B-kBq.js";import"./keys-DekbKSNl.js";import"./_baseKeys-zEAlPNhi.js";import"./url-Cs7w3nbA.js";import"./index-AYcBnWU3.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-2Yx5_0_R.js";import"./blocks-CAfffL18.js";import"./toString-B0--tqD3.js";import"./isSymbol-Cao5GMO6.js";import"./Links-5J0VEVkp.js";import"./Link-CDrQS8ap.js";import"./BackLink-CVObwAHq.js";import"./useAnalytics-C2_xG2HP.js";import"./Button-jptAiL9w.js";import"./common-aorOWkXe.js";import"./Icon-C_PQd3hC.js";import"./EventBroker-CHlqK4O-.js";import"./FileLink-D3rF_b_P.js";import"./url-DAaMlTSc.js";import"./Label-Der-AgGZ.js";import"./Xmark-BJ_vjjtI.js";import"./HTML-BE24hqa6.js";import"./ContentList-DtkitMGy.js";import"./Image-yU1VTfom.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-CHJvp9G0.js";import"./v4-Dv1xt2bl.js";import"./Buttons-CIYv0sQw.js";import"./Button-DXVEyiIS.js";import"./addComponentKeysets-DnSjay-s.js";import"./Link-C5zZRQZo.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DFJm3YVX.js";import"./Col-L5-XbzS_.js";import"./CardBase-krqemx7n.js";import"./BackgroundImage-CbZ1UQfG.js";import"./RouterLink-D3vkZz7r.js";import"./Tag-WSdHKUmf.js";import"./IconWrapper-CfpFPe0R.js";import"./ToggleArrow-BL-bzR4A.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
