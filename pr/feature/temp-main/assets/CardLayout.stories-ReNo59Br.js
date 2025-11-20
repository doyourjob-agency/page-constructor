import{R as d,r as S}from"./iframe-D2Q6ZLdb.js";import{C as z}from"./CardLayout-CcZXwwtC.js";import{P as c}from"./PageConstructor-BfYiBPLu.js";const _={basicCard:{type:"basic-card",title:"Tell a story and build a narrative",text:"We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.",icon:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/icon_1_light.svg"},layoutItem:{type:"layout-item",media:{dark:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img-mini_4-12_dark.png"},light:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img-mini_4-12_light.png"}},content:{title:"Tell a story and build a narrative",text:"We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future."}},backgroundCard:{type:"background-card",title:"Tell a story and build a narrative",text:"We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.",background:{light:{src:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img-bg_nopadding_4-12_light.png",alt:"Lorem ipsumt",disableCompress:!0},dark:{src:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img-bg_nopadding_4-12_dark.png",alt:"Lorem ipsumt"}}},priceCard:{type:"price-card",title:"Lorem ipsum",price:"299.99 $",pricePeriod:"month",priceDetails:"plan details",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",list:["Ut enim ad minim veniam exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","Ut enim ad minim veniam exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]},imageCard:{type:"image-card",title:"Tell a story and build a narrative",text:"We are all storytellers. Stories are a powerful way to communicate ideas and share information. The right story can lead to a better understanding of a situation, make us laugh, or even inspire us to do something in the future.",image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img_8-12_light.png"}},x={outlined:{text:"Button",url:"https://example.com",width:"max",theme:"outlined"},action:{text:"Button",url:"https://example.com",width:"max",theme:"action"},monochrome:{text:"Button",url:"https://example.com",width:"max",theme:"monochrome"}},A={image:{light:{src:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/content-bg-img_light.png",disableCompress:!0},dark:{src:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/header-bg-img_dark.png",disableCompress:!0}},backgroundColor:{light:{style:{backgroundColor:"#EEF2F8"}},dark:{style:{backgroundColor:"#262626"}}},backgroundColorAndShadow:{border:"shadow",style:{backgroundColor:"#7CCEA0"}}},T={four:{card:{type:"layout-item",media:{dark:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img-mini_4-12_dark.png"},light:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img-mini_3-12_light.png"}},content:{title:"Lorem&nbsp;ipsum",text:"Dolor sit amet"}},description:"Four cards in a row on the desktop, three cards in a row on a tablet, two cards in a row on a mobile phone.",colSizes:{all:6,sm:4,md:3}},two:{card:{type:"layout-item",media:{dark:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img-mini_6-12_dark.png"},light:{image:"https://doyourjob-agency.github.io/page-constructor/pr/feature/temp-main/story-assets/img-mini_6-12_light.png"}},content:{title:"Lorem&nbsp;ipsum",text:"Dolor sit amet"}},description:"Two cards in a row on all devices",colSizes:{all:6}},threeOne:{description:"Three cards in a row on the desktop, three cards in a row on a tablet, one card in a row on a mobile phone.",colSizes:{all:12,sm:4,md:4}}},j={content:{type:"card-layout-block",title:"Card layout with background image (basic cards)",description:"Four cards in a row on the desktop, three cards in a row on the mini-desktop, two cards in a row on a tablet, one card in a row on a mobile phone.",colSizes:{all:12,sm:6,md:4,lg:3}}},t={cards:_,buttons:x,backgrounds:A,default:{content:{type:"card-layout-block",title:"Card layout with basic cards",description:"Three cards in a row on the desktop, two cards in a row on a tablet, one card in a row on a mobile phone."}},colSizes:T,withBackground:j},L={title:"Blocks/CardLayout",component:z},e=(a,o)=>Array.from({length:a},()=>({...o})),v=a=>d.createElement(c,{content:{blocks:[{...a,children:e(6,t.cards.basicCard)},{...a,title:"Card layout with layout items",children:e(3,t.cards.layoutItem)},{...a,title:"Card layout with background cards",children:e(3,t.cards.backgroundCard)},{...a,title:"Card layout with price cards",children:[{...t.cards.priceCard,buttons:[t.buttons.outlined]},{...t.cards.priceCard,buttons:[t.buttons.action]},{...t.cards.priceCard,buttons:[t.buttons.monochrome]}]},{...a,title:"Card layout with image cards",children:e(3,t.cards.imageCard)}]}}),$=a=>d.createElement(S.Fragment,null,d.createElement(c,{content:{blocks:[{...a,description:t.colSizes.four.description,colSizes:t.colSizes.four.colSizes},{...a,description:t.colSizes.two.description,colSizes:t.colSizes.two.colSizes,children:e(8,t.colSizes.two.card)}]}})),B=({title:a,...o})=>d.createElement(S.Fragment,null,d.createElement(c,{content:{blocks:[{...o,title:`${a} with zero indents at the top and bottom`,indent:{top:"0",bottom:"0"}},{...o,title:`${a} with XS indents at the top and bottom`,indent:{top:"xs",bottom:"xs"}},{...o,title:`${a} with S indents at the top and bottom`,indent:{top:"s",bottom:"s"}},{...o,title:`${a} with M indents at the top and bottom`,indent:{top:"m",bottom:"m"}},{...o,title:`${a} with L (default) indents at the top and bottom`,indent:{top:"l",bottom:"l"}},{...o,title:`${a} with XL indents at the top and bottom`,indent:{top:"xl",bottom:"xl"}}]}})),E=a=>d.createElement(c,{content:{blocks:[{...a,background:t.backgrounds.image,children:e(8,t.cards.basicCard)},{...a,title:"Card layout with background color (basic cards)",background:t.backgrounds.backgroundColor,children:e(4,t.cards.basicCard)},{...a,background:t.backgrounds.backgroundColorAndShadow,title:"Card layout with background color and shadow (layout items)",...t.colSizes.threeOne,children:e(3,t.cards.layoutItem)},{...a,title:"Card layout with background image (price cards)",background:t.backgrounds.image,children:e(4,t.cards.priceCard)}]}}),r=v.bind({}),n=$.bind({}),i=B.bind({}),s=E.bind({});r.args={...t.default.content};n.args={...t.default.content,children:e(8,t.colSizes.four.card)};i.args={...t.default.content,children:e(3,t.cards.layoutItem)};s.args={...t.withBackground.content};var l,u,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => <PageConstructor content={{
  blocks: [{
    ...args,
    children: createCardArray(6, data.cards.basicCard)
  }, {
    ...args,
    title: 'Card layout with layout items',
    children: createCardArray(3, data.cards.layoutItem)
  }, {
    ...args,
    title: 'Card layout with background cards',
    children: createCardArray(3, data.cards.backgroundCard)
  }, {
    ...args,
    title: 'Card layout with price cards',
    children: [{
      ...data.cards.priceCard,
      buttons: [data.buttons.outlined]
    }, {
      ...data.cards.priceCard,
      buttons: [data.buttons.action]
    }, {
      ...data.cards.priceCard,
      buttons: [data.buttons.monochrome]
    }]
  }, {
    ...args,
    title: 'Card layout with image cards',
    children: createCardArray(3, data.cards.imageCard)
  }]
}} />`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,p,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => <Fragment>
        <PageConstructor content={{
    blocks: [{
      ...args,
      description: data.colSizes.four.description,
      colSizes: data.colSizes.four.colSizes
    }, {
      ...args,
      description: data.colSizes.two.description,
      colSizes: data.colSizes.two.colSizes,
      children: createCardArray(8, data.colSizes.two.card) as SubBlockModels[]
    }]
  }} />
    </Fragment>`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var b,y,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`({
  title,
  ...restArgs
}) => <Fragment>
        <PageConstructor content={{
    blocks: [{
      ...restArgs,
      title: \`\${title} with zero indents at the top and bottom\`,
      indent: {
        top: '0',
        bottom: '0'
      }
    }, {
      ...restArgs,
      title: \`\${title} with XS indents at the top and bottom\`,
      indent: {
        top: 'xs',
        bottom: 'xs'
      }
    }, {
      ...restArgs,
      title: \`\${title} with S indents at the top and bottom\`,
      indent: {
        top: 's',
        bottom: 's'
      }
    }, {
      ...restArgs,
      title: \`\${title} with M indents at the top and bottom\`,
      indent: {
        top: 'm',
        bottom: 'm'
      }
    }, {
      ...restArgs,
      title: \`\${title} with L (default) indents at the top and bottom\`,
      indent: {
        top: 'l',
        bottom: 'l'
      }
    }, {
      ...restArgs,
      title: \`\${title} with XL indents at the top and bottom\`,
      indent: {
        top: 'xl',
        bottom: 'xl'
      }
    }]
  }} />
    </Fragment>`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,w,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => <PageConstructor content={{
  blocks: [{
    ...args,
    background: data.backgrounds.image,
    children: createCardArray(8, data.cards.basicCard)
  }, {
    ...args,
    title: 'Card layout with background color (basic cards)',
    background: data.backgrounds.backgroundColor,
    children: createCardArray(4, data.cards.basicCard)
  }, {
    ...args,
    background: data.backgrounds.backgroundColorAndShadow,
    title: 'Card layout with background color and shadow (layout items)',
    ...data.colSizes.threeOne,
    children: createCardArray(3, data.cards.layoutItem)
  }, {
    ...args,
    title: 'Card layout with background image (price cards)',
    background: data.backgrounds.image,
    children: createCardArray(4, data.cards.priceCard)
  }]
}} />`,...(f=(w=s.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const F=["Default","ColSize","WithCustomIndents","WithBackground"],D=Object.freeze(Object.defineProperty({__proto__:null,ColSize:n,Default:r,WithBackground:s,WithCustomIndents:i,__namedExportsOrder:F,default:L},Symbol.toStringTag,{value:"Module"}));export{D as C};
