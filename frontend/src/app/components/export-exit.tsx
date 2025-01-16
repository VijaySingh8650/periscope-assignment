import { FileUp, FolderInput } from 'lucide-react'
import React from 'react'

const ExportExitButton = () => {
  return (
    <section className="p-4">
        <div className="flexAndGapAndCenter">
          <FileUp size={15} />
          <p className="text-sm">Export Chat</p>
        </div>
        <div className="flexAndGapAndCenter">
          <FolderInput size={15} />
          <p className="text-red-500 text-sm">Exit Group</p>
        </div>
      </section>
  )
}

export default ExportExitButton
