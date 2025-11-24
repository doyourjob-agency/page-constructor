import{j as e,M as i}from"./iframe-B9WuF_I-.js";import{useMDXComponents as r}from"./index-BH1SMdGh.js";import"./preload-helper-D6kgxu3v.js";function o(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Blocks"}),`
`,e.jsx(n.h1,{id:"blocks",children:"Blocks"}),`
`,e.jsx(n.p,{children:"Each block has the following common properties:"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anchor"}),": block anchor — If you set a block's anchor and there is a menu on the page, a link to this block is added to the menu."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"text: text"})," — Name in the page menu block"]}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"url: text"})," — Link to the block after #"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"visibility?: 'mobile' | 'desktop' | VisibilityProps"})," — Sets the screen size to display block"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"VisibilityProps: { xs?: boolean — 0px – 576px sm?: boolean — 577px – 768px md?: boolean — 769px – 1080px lg?: boolean — 1081px – 1184px xl?: boolean — 1185px – 1247px xxl?: boolean — 1248px – ∞ }"})}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"visible?: 'all' | 'sm' | 'md' | 'lg' | 'xl'"})," — Sets the screen size to start block display from (*deprecated)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"hidden?: 'all' | 'sm' | 'md' | 'lg' | 'xl'"})," — Sets the screen size to start block hidden from (*deprecated)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"resetPaddings: boolean"})," — Allows resetting top and bottom margins standard for all blocks. ",e.jsx(n.strong,{children:"Deprecated"}),", use ",e.jsx(n.code,{children:"indent"})," instead"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"indent?: { top?: string bottom?: string }"})," - block indentation at the top and bottom, default size ",e.jsx(n.code,{children:"l"}),", examples you can see ",e.jsx(n.a,{href:"?path=/story/blocks-cardlayout--with-custom-indents",children:"here"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"backgroundFull?: string"})," - background color or background image (*deprecated use 'blockBackground')"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"selectionColor?: string"})," - background color on select"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"blockBackground?: string"})," - - new background properties"]}),`
`,e.jsx(n.p,{children:"or"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"blockBackground?:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"color?: string;"}),`
Background color.
Accepts any valid CSS color.
Examples: 'red', '#ffffff', 'rgba(0, 0, 0, 0.3)', 'transparent'.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"image?: string;"}),`
Background image.
Examples: https://...`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"size?: string;"}),`
Controls how the background image is scaled.
Common values:`]}),`
`,e.jsx(n.p,{children:"'cover' – fills the container, maintaining aspect ratio."}),`
`,e.jsx(n.p,{children:"'contain' – fits the image entirely inside the container."}),`
`,e.jsx(n.p,{children:"'100px 200px' – sets explicit width and height."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"repeat?: string;"}),`
Controls repetition of the background image.
Common values:`]}),`
`,e.jsx(n.p,{children:"'no-repeat' – image shown once."}),`
`,e.jsx(n.p,{children:"'repeat-x' – repeats horizontally."}),`
`,e.jsx(n.p,{children:"'repeat' – repeats both horizontally and vertically."}),`
`,e.jsx(n.p,{children:"'repeat-y' – repeats vertically."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"position?: string;"}),`
Defines the starting position of the background image.
Common values:`]}),`
`,e.jsx(n.p,{children:`'center', 'top left', 'bottom right',
'10px 50%' – precise offsets.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"attachment?: string;"}),`
Specifies how the background image behaves during scroll.
Possible values:`]}),`
`,e.jsx(n.p,{children:"'scroll' – scrolls with the content."}),`
`,e.jsx(n.p,{children:"'fixed' – stays fixed during scroll (parallax effect)."}),`
`,e.jsx(n.p,{children:"'local' – scrolls with the element’s content."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"clip?: string;"}),`
Specifies the area where the background is visible.
Options:`]}),`
`,e.jsx(n.p,{children:"'border-box' – includes the border area."}),`
`,e.jsx(n.p,{children:"'padding-box' – includes only padding and content."}),`
`,e.jsx(n.p,{children:"'content-box' – limited strictly to content area."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"origin?: string;"}),`
Defines the background positioning area.
Options:`]}),`
`,e.jsx(n.p,{children:"'padding-box' – starts from the padding edge (default)."}),`
`,e.jsx(n.p,{children:"'border-box' – starts from the outer border edge."}),`
`,e.jsx(n.p,{children:"'content-box' – starts from the content box."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"blendMode?: string;"}),`
Controls how the background image blends with the background color.
Common values:`]}),`
`,e.jsx(n.p,{children:"'normal' – no blending."}),`
`,e.jsx(n.p,{children:"'multiply' – darkens the image."}),`
`,e.jsx(n.p,{children:"'screen' – lightens the image."}),`
`,e.jsx(n.p,{children:"Other options: 'overlay', 'darken', 'lighten', etc."}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:e.jsx(n.a,{href:"?id=documentation-types&viewMode=docs",children:"Common field types"})})}),`
`,e.jsx(n.h2,{id:"banner",children:e.jsx(n.a,{href:"?path=/story/blocks-banner--docs&viewMode=docs",children:"Banner"})}),`
`,e.jsx(n.h2,{id:"cardlayout",children:e.jsx(n.a,{href:"?path=/story/blocks-cardlayout--docs&viewMode=docs",children:"CardLayout"})}),`
`,e.jsx(n.h2,{id:"companies",children:e.jsx(n.a,{href:"?path=/story/blocks-companies--docs&viewMode=docs",children:"Companies"})}),`
`,e.jsx(n.h2,{id:"contentlayout",children:e.jsx(n.a,{href:"?path=/story/blocks-contentlayout--docs&viewMode=docs",children:"ContentLayout"})}),`
`,e.jsx(n.h2,{id:"extendedfeatures",children:e.jsx(n.a,{href:"?path=/story/blocks-extendedfeatures--docs&viewMode=docs",children:"ExtendedFeatures"})}),`
`,e.jsx(n.h2,{id:"header",children:e.jsx(n.a,{href:"?path=/story/blocks-header--docs&viewMode=docs",children:"Header"})}),`
`,e.jsx(n.h2,{id:"headerslider",children:e.jsx(n.a,{href:"?path=/story/blocks-headerslider--docs&viewMode=docs",children:"HeaderSlider"})}),`
`,e.jsx(n.h2,{id:"icons",children:e.jsx(n.a,{href:"?path=/story/blocks-icons--docs&viewMode=docs",children:"Icons"})}),`
`,e.jsx(n.h2,{id:"info",children:e.jsx(n.a,{href:"?path=/story/blocks-info--docs&viewMode=docs",children:"Info"})}),`
`,e.jsx(n.h2,{id:"media",children:e.jsx(n.a,{href:"?path=/story/blocks-media--docs&viewMode=docs",children:"Media"})}),`
`,e.jsx(n.h2,{id:"promofeatures",children:e.jsx(n.a,{href:"?path=/story/blocks-promofeaturesblock--docs-theme&viewMode=docs",children:"PromoFeatures"})}),`
`,e.jsx(n.h2,{id:"questions",children:e.jsx(n.a,{href:"?path=/story/blocks-questions--docs&viewMode=docs",children:"Questions"})}),`
`,e.jsx(n.h2,{id:"share",children:e.jsx(n.a,{href:"?path=/story/blocks-share--docs&viewMode=docs",children:"Share"})}),`
`,e.jsx(n.h2,{id:"slider",children:e.jsx(n.a,{href:"?path=/story/blocks-slider--docs&viewMode=docs",children:"Slider"})}),`
`,e.jsx(n.h2,{id:"table",children:e.jsx(n.a,{href:"?path=/story/blocks-table--docs&viewMode=docs",children:"Table"})}),`
`,e.jsx(n.h2,{id:"tabs",children:e.jsx(n.a,{href:"?path=/story/blocks-tabs--docs&viewMode=docs",children:"Tabs"})}),`
`,e.jsx(n.h2,{id:"form",children:e.jsx(n.a,{href:"?path=/story/blocks-form--docs&viewMode=docs",children:"Form"})}),`
`,e.jsx(n.h2,{id:"marqueelinks",children:e.jsx(n.a,{href:"?path=/story/blocks-marqueelinks--docs&viewMode=docs",children:"MarqueeLinks"})})]})}function t(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{t as default};
