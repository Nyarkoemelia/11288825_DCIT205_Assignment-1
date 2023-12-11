import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Navbar from "./Navbar"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Divide } from "lucide-react"
import { TableDemo } from "@/components/Table"


const data = [
  {
    code: "DCIT345",
    title:"Information Studies",
    Credit:"3",
    Grade:"B",
    GPT:"8.0"
  },{
    code: "DCIT345",
    title: "Information Studies",
    Credit: "3",
    Grade: "B",
    GPT: "8.0"
  },
  {
    code: "CS101",
    title: "Introduction to Computer Science",
    Credit: "4",
    Grade: "A",
    GPT: "12.0"
  },
  {
    code: "MATH202",
    title: "Calculus II",
    Credit: "4",
    Grade: "B+",
    GPT: "10.0"
  },
  {
    code: "ENG301",
    title: "Advanced English",
    Credit: "3",
    Grade: "A-",
    GPT: "11.0"
  },
  {
    code: "PHY220",
    title: "Modern Physics",
    Credit: "4",
    Grade: "B",
    GPT: "9.0"
  },

]

export default function gradeReport() {
  return (
   <>
      <Navbar/>
      <MaxWidthWrapper>

      <TableDemo/>


 
</MaxWidthWrapper>

   </>
  )
}
