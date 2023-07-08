import { MouseEventHandler } from "react";

export interface CustomBtnProps{
   title:String ;
   containerStyles?:String;
   handleClick?:MouseEventHandler<HTMLButtonElement>
   btnType:any
}