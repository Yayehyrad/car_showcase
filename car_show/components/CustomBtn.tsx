"use client"
import { CustomBtnProps } from "@/types"
const CustomBtn = ({title , btnType , containerStyles , handleClick }:CustomBtnProps) => {
  return (
    <div>
      <button disabled={false} 
      type={btnType} 
      className={`custom-btn ${containerStyles}`} 
      onClick={handleClick}> {title}</button>
    </div>
  )
}

export default CustomBtn
