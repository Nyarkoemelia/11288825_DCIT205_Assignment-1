import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
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
  
  export function TableDemo() {
    return (
      <>
      <div className="font-extrabold text-4xl">First Sem</div>
      <Table>
        <TableCaption>A list of your  grades</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Code</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Credit</TableHead>
            <TableHead>Grade</TableHead>
            

            <TableHead className="text-right">GPT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.code}>
              <TableCell className="font-medium">{item.code}</TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.Credit}</TableCell>
              <TableCell>{item.Grade}</TableCell>
              <TableCell className="text-right">{item.GPT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="font-extrabold text-4xl">Second Sem</div>
      <Table>
        <TableCaption>A list of your  grades</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Code</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Credit</TableHead>
            <TableHead>Grade</TableHead>
            

            <TableHead className="text-right">GPT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.code}>
              <TableCell className="font-medium">{item.code}</TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>{item.Credit}</TableCell>
              <TableCell>{item.Grade}</TableCell>
              <TableCell className="text-right">{item.GPT}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
      </>

      

    )
  }
  