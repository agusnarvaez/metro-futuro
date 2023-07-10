import {BLOCKS,INLINES} from "@contentful/rich-text-types"

const RICHTEXT_OPTIONS = {
	renderNode:{
		[BLOCKS.PARAGRAPH]:(node,children)=>{
			return <p>{children}</p>
		},
		[INLINES.HYPERLINK]:(node,children)=>{
			return <a href={node.data.uri} title={children}>{children}</a>
		},
		[BLOCKS.EMBEDDED_ASSET]:(node,children)=>{
			return <img src={node.data.target.fields.file.url} alt={node.data.target.fields.title} title={node.data.target.fields.title} loading="lazy"/>
		},
		[BLOCKS.HR]: (node) => {
			return <hr />;
		  },
		[BLOCKS.QUOTE]: (node, children) => {
		return <blockquote>{children}</blockquote>;
		}
	}
}

export {RICHTEXT_OPTIONS}