import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

//Rich Text Customized rendering, in order to add an extra <br/>
const renderDocument = document => {
    const Text = ({ children }) => <span>{children}</span>;
    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
        },

        // https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
        // replacing instances of \n produced by Shift + Enter with <br/>
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
        },
    };
    return documentToReactComponents(document, options);
};

export const RichText = ({ document }) => (
    renderDocument(document)
);