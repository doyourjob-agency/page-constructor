import{R as e}from"./iframe-COfbjC2i.js";import{y as te}from"./utils-DIblNJZb.js";import{C as v}from"./CardLayout-BP4w4lem.js";import{I as r}from"./ImageCard-CbWUU8Cd.js";import{B as f}from"./BlockBase-BJvAU7Ph.js";import{G as ae}from"./Grid-OArXTFuO.js";import{C as re}from"./ConstructorRow-CsH5ADmw.js";const ie={none:{title:"Default"},small:{margins:"s",title:"margins: 's'"},medium:{margins:"m",title:"margins: 'm'"}},ne={content:{direction:"reverse"}},oe={shadow:{border:"shadow (default)",title:"border: 'shadow'"},line:{border:"line",title:"border: 'line'"},none:{border:"none",title:"border: 'none'"}},se={content:{backgroundColor:"#ccf0d2"}},le={content:{url:"https://example.com"}},de={content:{url:"https://example.com",backgroundColor:"#ccf0d2"}},me={url:"https://example.com",links:[{url:"#",text:"Link",theme:"normal",arrow:!0}],buttons:[{text:"Button\r",theme:"action",url:"https://example.com"},{text:"Button",theme:"outlined",url:"#"}],list:[{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/icon_1_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/icon_1_dark.svg"},title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"},{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/icon_3_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/icon_3_dark.svg"},title:"Lorem ipsum ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"},{icon:{light:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/icon_2_light.svg",dark:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/icon_2_dark.svg"},title:"Lorem ipsum",text:"**Ut enim ad minim veniam** [quis nostrud](https://example.com) exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"}],additionalInfo:"Duis aute irure dolor in [reprehenderit](https://example.com) n voluptate velit esse cillum dolore eu fugiat nulla pariatur."},ce={contentTitle:"With controlPosition = content",footerTitle:"With controlPosition = footer",footerDescription:"Please note that the controlPosition prop manages the position of buttons and links only when paddingBottom = default.",items:[{image:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/img_8-12_light.png",title:"Lorem ipsumt",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod nisi porta lorem. Amet purus gravida quis blandit turpis cursus in hac.",buttons:[{text:"Button 1",theme:"action",url:"#test1"},{text:"Button 2",theme:"outlined",url:"#test2"}]},{image:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/img_8-12_light.png",title:"Lorem ipsumt",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod nisi porta lorem. Amet purus gravida quis blandit turpis cursus in hac. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat.",buttons:[{text:"Button 1",theme:"action",url:"#test1"},{text:"Button 2",theme:"outlined",url:"#test2"}]},{image:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/img_8-12_light.png",title:"Lorem ipsumt",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed euismod nisi porta lorem.",buttons:[{text:"Button 1",theme:"action",url:"#test1"},{text:"Button 2",theme:"outlined",url:"#test2"}]}]},ge={content:{label:{text:"Label",backgroundColor:"#C7E5F7",textColor:"#000"},summary:"This is a summary text that provides additional information about the card content."}},a={default:{content:{title:"Tell a story and build a narrative",text:"We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.",image:{dark:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/img_8-12_dark.png",light:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/img_8-12_light.png"},hoverImage:{dark:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/img_8-12_light.png",light:"https://doyourjob-agency.github.io/page-constructor/pr/feat/table-title-size/story-assets/img_8-12_dark.png"},direction:"direct",border:"shadow"}},margins:ie,direction:ne,border:oe,backgroundColor:se,withUrl:le,withUrlAndBackgroundColor:de,content:me,cardLayout:ce,withLabel:ge},ue={component:r,title:"Components/Cards/ImageCard",args:a.default.content,argTypes:{margins:{control:{type:"radio"},options:[void 0,"s","m"]},backgroundColor:{control:{type:"color"}},direction:{control:{type:"radio"},options:["direct","reverse"]}}},pe=t=>e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t})),n=t=>e.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row"}},e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,...a.margins.none})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,...a.margins.small})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,...a.margins.medium}))),C=a.content.list.map(t=>({...t,text:(t==null?void 0:t.text)&&te(t.text)})),he=t=>e.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row",alignItems:"flex-start"}},e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,text:""})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,text:"",title:""})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,title:"With buttons",buttons:a.content.buttons})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,title:"With links",links:a.content.links})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,title:"With url and list",url:a.content.url,list:C})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,text:"",title:"",size:"l",list:C}))),ee=t=>e.createElement("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row"}},e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,...a.border.shadow})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,...a.border.line})),e.createElement("div",{style:{width:400,margin:20}},e.createElement(r,{...t,...a.border.none}))),ye=t=>e.createElement("div",{style:{margin:20}},e.createElement("h2",null,"Default"),e.createElement(n,{...t}),e.createElement("h2",null,"enableImageBorderRadius: true"),e.createElement(n,{...t,enableImageBorderRadius:!0})),be=t=>e.createElement(ae,null,e.createElement(re,null,e.createElement(f,null,e.createElement(v,{title:a.cardLayout.contentTitle,animated:!1},a.cardLayout.items.map((y,b)=>e.createElement(r,{key:b,...t,...y,controlPosition:"content"})))),e.createElement(f,null,e.createElement(v,{title:a.cardLayout.footerTitle,description:a.cardLayout.footerDescription,animated:!1},a.cardLayout.items.map((y,b)=>e.createElement(r,{key:b,...t,...y,controlPosition:"footer"})))))),c=pe.bind({}),o=n.bind({}),g=n.bind({}),s=n.bind({}),u=he.bind({}),l=n.bind({}),d=n.bind({}),m=ee.bind({}),p=ee.bind({}),h=ye.bind({}),i=be.bind({});o.args=a.withLabel.content;s.args={direction:"reverse"};l.args={...a.backgroundColor.content};d.args={...a.withUrl.content};m.args={...a.withUrlAndBackgroundColor.content};i.args=void 0;i.argTypes={title:{table:{disable:!0}},text:{table:{disable:!0}},image:{table:{disable:!0}},list:{table:{disable:!0}},links:{table:{disable:!0}},buttons:{table:{disable:!0}},backgroundColor:{table:{disable:!0}},url:{table:{disable:!0}},target:{table:{disable:!0}},urlTitle:{table:{disable:!0}},additionalInfo:{table:{disable:!0}},theme:{table:{disable:!0}},controlPosition:{table:{disable:!0}}};var w,x,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => <div style={{
  width: 400,
  margin: 20
}}>
        <ImageCard {...args} />
    </div>`,...(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var P,k,E;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
}}>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.none as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.small as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.medium as Partial<ImageCardProps>} />
        </div>
    </div>`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var B,L,_;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
}}>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.none as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.small as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.medium as Partial<ImageCardProps>} />
        </div>
    </div>`,...(_=(L=g.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var D,W,T;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
}}>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.none as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.small as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.medium as Partial<ImageCardProps>} />
        </div>
    </div>`,...(T=(W=s.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var z,j,q;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'flex-start'
}}>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} text="" />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} text="" title="" />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} title="With buttons" buttons={data.content.buttons as ButtonProps[]} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} title="With links" links={data.content.links as LinkProps[]} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} title="With url and list" url={data.content.url} list={transformedContentList} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} text="" title="" size="l" list={transformedContentList} />
        </div>
    </div>`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var S,R,U;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
}}>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.none as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.small as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.medium as Partial<ImageCardProps>} />
        </div>
    </div>`,...(U=(R=l.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var A,M,G;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
}}>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.none as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.small as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.margins.medium as Partial<ImageCardProps>} />
        </div>
    </div>`,...(G=(M=d.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var O,F,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
}}>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.border.shadow as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.border.line as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.border.none as Partial<ImageCardProps>} />
        </div>
    </div>`,...(H=(F=m.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,N;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`args => <div style={{
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row'
}}>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.border.shadow as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.border.line as Partial<ImageCardProps>} />
        </div>
        <div style={{
    width: 400,
    margin: 20
  }}>
            <ImageCard {...args} {...data.border.none as Partial<ImageCardProps>} />
        </div>
    </div>`,...(N=(K=p.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,V,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <div style={{
  margin: 20
}}>
        <h2>Default</h2>
        <MultipleTemplate {...args} />
        <h2>enableImageBorderRadius: true</h2>
        <MultipleTemplate {...args} enableImageBorderRadius />
    </div>`,...(X=(V=h.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <Grid>
        <ConstructorRow>
            <BlockBase>
                <CardLayout title={data.cardLayout.contentTitle} animated={false}>
                    {data.cardLayout.items.map((item, index) => <ImageCard key={index} {...args} {...item as Partial<ImageCardProps>} controlPosition="content" />)}
                </CardLayout>
            </BlockBase>
            <BlockBase>
                <CardLayout title={data.cardLayout.footerTitle} description={data.cardLayout.footerDescription} animated={false}>
                    {data.cardLayout.items.map((item, index) => <ImageCard key={index} {...args} {...item as Partial<ImageCardProps>} controlPosition="footer" />)}
                </CardLayout>
            </BlockBase>
        </ConstructorRow>
    </Grid>`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ve=["Default","WithLabel","Margins","DirectionReverse","Content","BackgroundColor","WithUrl","WithUrlAndBackgroundColor","Border","BorderRadius","ControlPosition"],Ee=Object.freeze(Object.defineProperty({__proto__:null,BackgroundColor:l,Border:p,BorderRadius:h,Content:u,ControlPosition:i,Default:c,DirectionReverse:s,Margins:g,WithLabel:o,WithUrl:d,WithUrlAndBackgroundColor:m,__namedExportsOrder:ve,default:ue},Symbol.toStringTag,{value:"Module"}));export{Ee as I};
