import{R as t}from"./iframe-p8SRh7WN.js";import{y as f}from"./utils-B5qwU8C_.js";import{B as o}from"./BasicCard-CfsIKq3G.js";import{D as x}from"./Divider-Iy3ZRhH3.js";import{T as u}from"./Title-CXsSH7-U.js";import"./preload-helper-D6kgxu3v.js";import"./index-CbSeHWpw.js";import"./keys-DlByU9-p.js";import"./_baseKeys-C3ART_m5.js";import"./url-BJdZmLbl.js";import"./index-h8JI6Vid.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-GDt2Je40.js";import"./Content-VY05qQ6i.js";import"./blocks-B9PCUMM_.js";import"./toString-C-jv8cjo.js";import"./isSymbol-DCiLfkc_.js";import"./Links-DqQpxlQO.js";import"./Link-Bwj4NTv4.js";import"./BackLink-n4mckf_I.js";import"./useAnalytics-DhUw9Ji7.js";import"./Button-CpXF9ocG.js";import"./common-CqVvWo03.js";import"./Icon-ENFSip9R.js";import"./EventBroker-1VLgk_fW.js";import"./FileLink-y34nj3NC.js";import"./url-CpXnMuft.js";import"./Label-Bwo91ZsU.js";import"./Xmark-BssGtHfF.js";import"./HTML-B1hAE0tv.js";import"./ContentList-Cko1c6Hw.js";import"./Image-CMVwHVEh.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-p57O1bKV.js";import"./v4-Dv1xt2bl.js";import"./Buttons-B1XJd2pq.js";import"./Button-CEtc0i_y.js";import"./addComponentKeysets-DPSVkdgy.js";import"./Link-DGGs9TV3.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-DT_sz3JK.js";import"./Col-BK7g0GHT.js";import"./CardBase-DrwElpx0.js";import"./BackgroundImage-D_o6ZFa-.js";import"./RouterLink-DCKxmSoQ.js";import"./Tag-C1kk1rMn.js";import"./IconWrapper-CVxoa8Wf.js";import"./ToggleArrow-DLllmE-V.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
