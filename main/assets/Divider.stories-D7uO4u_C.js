import{R as t}from"./iframe-CyNZ3vvE.js";import{y as f}from"./utils-ChMN3uAs.js";import{B as o}from"./BasicCard-DxSbKDJJ.js";import{D as x}from"./Divider-QWYptSs6.js";import{T as u}from"./Title-DUr10BAE.js";import"./preload-helper-D6kgxu3v.js";import"./index-CipExF09.js";import"./keys-ySc6o3Yk.js";import"./_baseKeys-BPqSnBZN.js";import"./url-DE0xjgRR.js";import"./index-B4WazeNC.js";import"./cjs-Cz8BQk8L.js";import"./sub-blocks-0CjQZi4l.js";import"./Content-DOBApJmp.js";import"./blocks-DHNQgvt4.js";import"./toString-CbTDafVe.js";import"./isSymbol-BQpCOaUR.js";import"./Links-DqvlLGXa.js";import"./Link-BOYzr7JJ.js";import"./BackLink-B7MPPro7.js";import"./useAnalytics-CdBnHr60.js";import"./Button-DyfuGrYL.js";import"./common-Bq-D1ykC.js";import"./Icon-BwfefCe2.js";import"./EventBroker-CMZEDJj_.js";import"./FileLink-DW9UzSl8.js";import"./url-DFU9lMwy.js";import"./Label-D35KBuGn.js";import"./Xmark-C_i0AxLa.js";import"./YFMWrapper-Hr_12MgA.js";import"./HTML-__6z_hnh.js";import"./ContentList-CTt6QGPY.js";import"./Image-B-lVToX3.js";import"./constants-D1qj5IDx.js";import"./utils-COU2-ufE.js";import"./theme-DT1qFy6A.js";import"./Buttons-C0D5r60V.js";import"./Button-BUkpufzU.js";import"./addComponentKeysets-D8FOJrVd.js";import"./Link-Df2nfhhl.js";import"./svg-CQ-OHbUx.js";import"./useUniqId-BQoyZGC6.js";import"./Col-CJVe4cZz.js";import"./CardBase-D2zuMZtI.js";import"./BackgroundImage-TkBluRQ-.js";import"./RouterLink-2s5a1zlf.js";import"./Tag-BKWQ6MD7.js";import"./IconWrapper-CPFS-bQN.js";import"./ToggleArrow-KcoY1Akt.js";const g={title:"Divider between cards, size {{size}}",items:["0","xxs","xs","s","m","l","xl","xxl","xxxl"]},i={default:{title:"Default divider between cards, size M",content:{url:"https://example.com",title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},sizes:g},ft={component:o,title:"Components/Divider"},z=e=>i.sizes.title.replace("{{size}}",e),E=e=>t.createElement("div",null,t.createElement(u,{title:i.default.title}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px"}},t.createElement(o,{...e}),t.createElement(x,null),t.createElement(o,{...e}))),D=e=>t.createElement("div",null,i.sizes.items.map(a=>t.createElement("div",{key:a},t.createElement(u,{title:z(a.toUpperCase())}),t.createElement("div",{style:{maxWidth:"400px",marginTop:"10px",marginBottom:"24px"}},t.createElement(o,{...e}),t.createElement(x,{size:a}),t.createElement(o,{...e}))))),r=E.bind({}),m=D.bind({}),v={...i.default.content,text:f(i.default.content.text)};r.args={...i.default.content,...v};m.args=v;var s,p,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div>
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
