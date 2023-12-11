"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "./Navbar";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

interface ToastDestructiveProps {
  data: any;
}

const ToastDestructive: React.FC<ToastDestructiveProps> = ({ data }) => {
  const { toast } = useToast();

  return (
    <>
      {data.Icon === CheckCircle ? (
        <div>
          <Button
            variant="ghost"
            className="w-full"
            onClick={() => {
              toast({
                description: "Results have beed released",
              });
            }}
          >
            {data.code}
          </Button>
        </div>
      ) : (
        <Button
          variant="destructive"
          className="w-full"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "Your reslut is missing",
            });
          }}
        >
          {" "}
          {data.code}
        </Button>
      )}
    </>
  );
};

// data.code

const perks = [
  {
    code: "DCIT345",
    title: "Information Studies",
    Credit: "3",
    Grade: "B",
    Icon: CheckCircle,
    GPT: "8.0",
  },
  {
    code: "DCIT345",
    title: "Information Studies",
    Credit: "3",
    Grade: "B",
    Icon: CheckCircle,
    GPT: "8.0",
  },
  {
    code: "CS101",
    title: "Introduction to Computer Science",
    Credit: "4",
    Grade: "A",
    Icon: CheckCircle,
    GPT: "12.0",
  },
  {
    code: "MATH202",
    title: "Calculus II",
    Credit: "4",
    Grade: "B+",
    Icon: CheckCircle,
    GPT: "10.0",
  },
  {
    code: "ENG301",
    title: "Advanced English",
    Credit: "3",
    Grade: "A-",
    Icon: Ban,
    GPT: "11.0",
  },
  {
    code: "PHY220",
    title: "Modern Physics",
    Credit: "4",
    Grade: "B",
    Icon: CheckCircle,
    GPT: "9.0",
  },
];

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <div className="flex border">
          <section className="w-4/12 hidden lg:block p-4">
            {perks.map((item: any) => {
              return <ToastDestructive key={item.code} data={item} />;
            })}
          </section>

          <div className="border-l p-4 w-full">
            <p className="max-w-prose font-bold text-2xl">Dashboard</p>
            <div className="pt-3">
              <div className="block md:flex md:justify-between">
                <div className="my-2 md:my-0">
                  <p>Ampofo Emelia</p>
                </div>
                <div className="my-2 md:my-0">
                  <p>11288825</p>
                </div>
              </div>

              <Separator className="my-4" />

              <div>
                <p className="text-2xl">First Sem</p>
              </div>

              <div className="my-4">
                <div className="flex justify-between">
                  <div className="w-full bg-blue-500 h-12 flex items-center justify-center rounded-xl">
                    <div className="w-11/12  h-5 bg-red-500"></div>
                    <div className="w-1/12  h-5 bg-white"></div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-4">
                  <div className="md:flex md:gap-4">
                    <p>DCIT345</p>
                    <p>Information Studies</p>
                  </div>
                  <p>89th percentile</p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-between">
                  <div className="w-full bg-blue-500 h-12 flex items-center justify-center rounded-xl">
                    <div className="w-11/12  h-5 bg-red-500"></div>
                    <div className="w-2/12  h-5 bg-white"></div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-4">
                  <div className="md:flex md:gap-4">
                    <p>DCIT325</p>
                    <p>Introduction to Computer Science </p>
                  </div>
                  <p>80th percentile</p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-between">
                  <div className="w-full bg-blue-500 h-12 flex items-center justify-center rounded-xl">
                    <div className="w-11/12  h-5 bg-red-500"></div>
                    <div className="w-5/12  h-5 bg-white"></div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-4">
                  <div className="md:flex md:gap-4">
                    <p>DCIT342</p>
                    <p>Introduction to Computer Science</p>
                  </div>
                  <p>69th percentile</p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-between">
                  <div className="w-full bg-blue-500 h-12 flex items-center justify-center rounded-xl">
                    <div className="w-11/12  h-5 bg-red-500"></div>
                    <div className="w-1/12  h-5 bg-white"></div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-4">
                  <div className="md:flex md:gap-4">
                    <p>DCIT345</p>
                    <p>Information Studies</p>
                  </div>
                  <p>89th percentile</p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-between">
                  <div className="w-full bg-blue-500 h-12 flex items-center justify-center rounded-xl">
                    <div className="w-11/12  h-5 bg-red-500"></div>
                    <div className="w-1/12  h-5 bg-white"></div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-4">
                  <div className="md:flex md:gap-4">
                    <p>DCIT345</p>
                    <p>Information Studies</p>
                  </div>
                  <p>89th percentile</p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-between">
                  <div className="w-full bg-blue-500 h-12 flex items-center justify-center rounded-xl">
                    <div className="w-11/12  h-5 bg-red-500"></div>
                    <div className="w-7/12  h-5 bg-white"></div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-4">
                  <div className="md:flex md:gap-4">
                    <p>DCIT345</p>
                    <p>Information Studies</p>
                  </div>
                  <p>54th percentile</p>
                </div>
              </div>
              <div className="my-4">
                <div className="flex justify-between">
                  <div className="w-full bg-blue-500 h-12 flex items-center justify-center rounded-xl">
                    <div className="w-11/12  h-5 bg-red-500"></div>
                    <div className="w-5/12  h-5 bg-white"></div>
                  </div>
                </div>
                <div className="md:flex md:justify-between py-4">
                  <div className="md:flex md:gap-4">
                    <p>DCIT345</p>
                    <p>Information Studies</p>
                  </div>
                  <p>60th percentile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
