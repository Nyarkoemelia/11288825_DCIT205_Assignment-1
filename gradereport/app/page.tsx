import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name:"Grades", 
    Icon:ArrowDownToLine, 
    description: "Get your grades on time"
  },
  {
    name:"Transcripts", 
    Icon:CheckCircle, 
    description: "Every transcript on our platform is verified by our lecturers for the highest quality standard"
  },
  {
    name:"Scholarship", 
    Icon:Leaf, 
    description: "We've pledged to provide 100% scholarship to the best students "
  },
]

export default function Home() {
  return (
    <>
    <Navbar/>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight">Your place for grades{' '}
        <span className="text-blue-600">hippo grade</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to DigitalHippo. Every grade related, we have your covered.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/dashboard" className={buttonVariants()}>Dashboard</Link>
          <button className='ghost'>Our quality promise &rarr;</button>
        </div>
      </div>

    {/* TODO:List */}
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) =>(
            <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<perk.Icon className="w-1/3 h-1/3"/>}
                </div>
              </div>  

              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medi  text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
              </div>            
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>

   ) 
}
 