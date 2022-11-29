import {BLOCKS,INLINES} from "@contentful/rich-text-types"

const RICHTEXT_OPTIONS = {
	renderNode:{
		[BLOCKS.PARAGRAPH]:(node,children)=>{
			return <p>{children}</p>
		},
		[INLINES.HYPERLINK]:(node,children)=>{
			return <a href={node.data.uri}>{children}</a>
		},
		[BLOCKS.EMBEDDED_ASSET]:(node,children)=>{
			return <img src={node.data.target.fields.file.url} alt={node.data.target.fields.title}/>
		}
		
	}}

export {RICHTEXT_OPTIONS}