import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalExtensionComposer } from "@lexical/react/LexicalExtensionComposer";
import { RichTextExtension } from "@lexical/rich-text";
import { cn } from "cn";

export interface ProductEditorProps {
  className?: string;
}

export function ProductEditor(props: ProductEditorProps) {
  const { className, ...rest } = props;
  return (
    <LexicalExtensionComposer
      extension={{
        name: "product-editor",
        namespace: "portable-meme-editor",
        theme: {
          heading: {
            h1: "text-heading-40 font-bold",
            h2: "text-heading-32 font-bold",
            h3: "text-heading-24 font-bold",
            h4: "text-heading-20 font-bold",
            h5: "text-heading-16 font-bold",
            h6: "text-heading-14 font-bold",
          },
        },
        dependencies: [RichTextExtension],
      }}
      contentEditable={null}
    >
      <ContentEditable
        className={cn(
          "appearance-none outline-none p-3 text-sm rounded-md transition-all duration-150",
          "bg-background-100 text-gray-1000 placeholder-gray-700",
          "border border-gray-400 hover:border-gray-500",
          "focus-visible:border-gray-800 focus-visible:ring-3 focus-visible:ring-gray-500",
          "data-valid:border-green-900 data-valid:ring-3 data-valid:ring-green-300",
          "data-valid:hover:ring-green-500",
          "data-valid:focus-within:border-green-900 data-valid:focus-within:ring-3 data-valid:focus-within:ring-green-300",
          "data-invalid:border-red-900 data-invalid:ring-3 data-invalid:ring-red-300",
          "data-invalid:hover:ring-red-500",
          "data-invalid:focus-within:border-red-900 data-invalid:focus-within:ring-3 data-invalid:focus-within:ring-red-300",
          "disabled:cursor-not-allowed disabled:text-gray-700 disabled:bg-gray-100",
          className,
        )}
        aria-label="Rich text editor"
        aria-placeholder="Rich text editor"
        placeholder={<div className="editor-placeholder"></div>}
        {...rest}
      />
    </LexicalExtensionComposer>
  );
}
