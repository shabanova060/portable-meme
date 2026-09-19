import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { LexicalExtensionComposer } from "@lexical/react/LexicalExtensionComposer";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import css from "~/components/Editor.module.css";
import { ToolbarPlugin } from "~/components/ToolbarPlugin";

export const Editor = () => {
  return (
    <LexicalExtensionComposer
      extension={{
        name: "MyEditor",
        theme: {
          heading: {
            h1: css.Heading1,
            h2: css.Heading2,
            h3: css.Heading3,
            h4: css.Heading4,
            h5: css.Heading5,
            h6: css.Heading6,
          },
          text: {
            bold: css.Bold,
            italic: css.Italic,
            underline: css.Underline,
            strikethrough: css.Strikethrough,
          },
          list: {
            ol: css.OrderedList,
            ul: css.UnorderedList,
            listitem: css.ListItem,
          },
          paragraph: css.Paragraph,
        },
        onError: (error) => {
          console.error(error);
        },
      }}
      contentEditable={null}
    >
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className={css.ContentEditable}
            spellCheck="false"
            placeholder={<div></div>}
            aria-placeholder={"Enter some text..."}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalExtensionComposer>
  );
};
