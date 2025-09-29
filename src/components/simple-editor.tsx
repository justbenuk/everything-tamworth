"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { useEffect } from "react";
import { Toggle } from "./ui/toggle";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

interface MenuBarProps {
  editor: ReturnType<typeof useEditor> | null;
}

export default function SimpleEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  const MenuBar = ({ editor }: MenuBarProps) => {
    if (!editor) {
      return null;
    }

    return (
      <div className="flex flex-wrap items-center gap-1 border-b ">
        <Toggle size="sm" pressed={editor.isActive("bold")} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </Toggle>
        <Toggle size="sm" pressed={editor.isActive("italic")} onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </Toggle>
      </div>
    );
  };

  return (
    <div className="border border-teal-500 rounded-md">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="overflow-scroll min-h-35" />
    </div>
  );
}
