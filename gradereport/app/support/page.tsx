import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";

const faqData = [
  {
    question: "What is Hippo Score?",
    answer: "Hippo Score is a comprehensive grade management app, designed to help students efficiently manage and track their academic progress.",
  },
  {
    question: "How do I get started with Hippo Score?",
    answer: "To get started, follow the step-by-step instructions in our Getting Started Guide to sign up, create an account, and begin using Hippo Score.",
  },
  {
    question: "What platforms does Hippo Score support?",
    answer: "Hippo Score is available on iOS, Android, and web browsers. Please check the system requirements for the best user experience.",
  },
  {
    question: "How can I add a new course to my Hippo Score account?",
    answer: "Adding a new course is easy! Simply follow the instructions in our Adding Courses Tutorial to add new courses to your Hippo Score account.",
  },
  {
    question: "I forgot my password. How can I reset it on Hippo Score?",
    answer: "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to reset your password securely.",
  },
  {
    question: "Can I access Hippo Score offline?",
    answer: "gradereport primarily requires an internet connection for real-time updates. However, you can enable offline mode to access some features without an internet connection. Learn more in our Offline Mode Guide.",
  },

];




export default function support() {
  return (
    <>
    <Navbar/>
   <MaxWidthWrapper>
    <div className="pt-10">
      <h1 className="font-extrabold text-4xl">Frequently Asked Questions (FAQ)</h1>
    </div>
    <div className="grid place-content-evenly ">
    {faqData.map(item =><div key={item.question} className="my-1">
        <div className="font-bold text-blue-500">
        {item.question}
        </div>
        <div>
        {item.answer}
        </div>
        </div>)}

        <div>

        <div className="pt-10">
          <h2 className="font-bold">For Technical Support, Please fill the form below</h2>
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea rows={12} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                <Button >
                  Send
                </Button>
        </div>

        </div>
    </div>

   </MaxWidthWrapper>
   </>

  )
}
