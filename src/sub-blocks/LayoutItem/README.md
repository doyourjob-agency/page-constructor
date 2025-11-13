`type: "layout-item"`

`title?: { text?: string; size?: 'xs' | 's' | 'm' | 'l' | 'xl' }`

`afterTitle?: { text?: string; size?: 'xs' | 's' | 'm' | 'l' | 'xl' }`

`rightSpace?: boolean`

`media: Media` — media props (see [Media](?path=/story/blocks-media--default))

`mediaLink?: {href: string; download?: boolean; newTab?: boolean}` — object, that wraps a link around the media.
Href regulates the link, and download flag that sets whether or not we want this thing to be downloadable
newTab regulates whether or not we want the link to be opened in new tab

`content: Partial<Content>` - `Content` props (size and justify props like `colSizes`, `centered`, `size` are omitted) (see [Content](?path=/story/components-content--default))

`metaInfo?: string[]` - segmented info string above the content (with YFM support)

`border?: boolean` — Image border

`fullscreen?: boolean` — Enables/disable fullscreen mode for media
