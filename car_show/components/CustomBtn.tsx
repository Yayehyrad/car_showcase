"use client"
import { CustomBtnProps } from "@/types"
const CustomBtn = ({title , containerStyles , handleClick }:CustomBtnProps) => {
  return (
    <div>
      <button disabled={false} type={'button'} 
      className={`custom-btn ${containerStyles}`} 
      onClick={handleClick}> {title}</button>
    </div>
  )
}

export default CustomBtn
