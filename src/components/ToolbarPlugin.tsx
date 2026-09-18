import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  type TextFormatType,
} from "lexical";
import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import css from "~/components/ToolbarPlugin.module.css";
import { Button } from "~/components/ui/Button";

export const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
    }
  }, []);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        $updateToolbar();
      });
    });
  }, [editor, $updateToolbar]);

  const formatText = (format: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  return (
    <div
      className={css.Toolbar}
      role="toolbar"
      aria-orientation="horizontal"
      aria-label="Text formatting"
    >
      <Button
        variant="tertiary"
        data-active={isBold}
        aria-pressed={isBold}
        aria-label="Bold"
        onClick={() => formatText("bold")}
      >
        <Bold size={16} aria-hidden="true" focusable="false" />
      </Button>
      <Button
        variant="tertiary"
        data-active={isItalic}
        aria-pressed={isItalic}
        aria-label="Italic"
        onClick={() => {
          formatText("italic");
        }}
      >
        <Italic size={16} aria-hidden="true" focusable="false" />
      </Button>
      <Button
        variant="tertiary"
        data-active={isUnderline}
        aria-pressed={isUnderline}
        aria-label="Underline"
        onClick={() => formatText("underline")}
      >
        <Underline size={16} aria-hidden="true" focusable="false" />
      </Button>
      <Button
        variant="tertiary"
        data-active={isStrikethrough}
        aria-pressed={isStrikethrough}
        aria-label="Strikethrough"
        onClick={() => formatText("strikethrough")}
      >
        <Strikethrough size={16} aria-hidden="true" focusable="false" />
      </Button>
    </div>
  );
};
