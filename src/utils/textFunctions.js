import {BLOCKS,INLINES,MARKS} from "@contentful/rich-text-types"

const RICHTEXT_OPTIONS = {
	renderNode:{
		[BLOCKS.PARAGRAPH]:(node,children)=>{
			return <p className="py-2">{children}</p>
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
	},
	/* renderMark: {
		[MARKS.BOLD]: (text) => {
		  return <strong>{text}</strong>;
		},
	}, */
	renderText: (text) => {
		return text.split('\n').flatMap((textChunk, index) => {
		  if (index > 0) {
			return [<br key={index} />, textChunk];
		  }
		  return textChunk.split('**').map((chunk, i) => {
			if (i % 2 === 1) {
			  return <strong key={i}>{chunk}</strong>;
			}
			return chunk;
		  });
		});
	  },
}

export {RICHTEXT_OPTIONS}