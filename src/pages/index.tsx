import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";



export default function Home() {
  const myImageLoader = ({
    src,
    width,
    quality,
  }: {
    src: string;
    width: number;
    quality?: number;
  }): string => {
    return `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality || 75}`;
  };
  
  return (
   <>
      <Image src="/NoteNest.png" alt="NoteNest" width={400} height={400}/>

      <br />


      <Image className="flex justify-center" 
       loader = {myImageLoader}
        src={
        "https://images.pexels.com/photos/29725302/pexels-photo-29725302/free-photo-of-festive-christmas-decorations-with-ornaments.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
      }
      alt="random image"
      width={200}
      height={250}
      />
   </>
  );
}
