import React, { createContext, useContext, useState } from "react"

type EditorContextType = {
  internalState: any
  prompt: string
  prePrompt: string
  setEditorContext: (state: any) => void
}

const EditorContext = createContext<EditorContextType>({
  internalState: null,
  prompt: "",
  prePrompt: "",
  setEditorContext: () => {}
})

export const EditorProvider = ({children}) => {
  const [editorState, setEditorState] = useState({
    internalState: null,
    prompt: "",
    prePrompt: ""
  })

  return (
    <EditorContext.Provider value={{
      ...editorState,
      setEditorContext: setEditorState
    }}>
      {children}
    </EditorContext.Provider>
  )
}

export const useEditorContext = () => useContext(EditorContext) 