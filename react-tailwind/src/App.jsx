import { useState } from "react"

function App() {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

   const [nameError, setNameError] = useState('')
   const [emailError, setEmailError] = useState('')

   function handleSubmit(e) {

      let isValid = true;

      // reset errors 
      setNameError("")
      setEmailError("")

      // name error 
      if (name.trim() === "") {
         setNameError("Name is required")
         isValid = false
      }

      // email error 
      if (email.trim() === "") {
         setEmailError("Email is required")
         isValid = false
      }

      if (isValid) {

      }
      e.preventDefault()
   }
   return (
      <>
         <div className="bg-gray-300 h-screen flex items-center justify-center">

            <form
               onSubmit={handleSubmit}
               className="flex flex-col gap-6 max-w-[500px] mx-auto w-full rounded-xl shadow-xl bg-white p-8"
            >

               <h2 className="text-2xl text-center">
                  Welcome Back
               </h2>

               {/* Name */}
               <div className="w-full">
                  <input
                     type="text"
                     onChange={(e) => setName(e.target.value)}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                     placeholder="Enter your name"
                  />

                  {nameError && (
                     <p className="text-red-600 text-sm mt-1">
                        {nameError}
                     </p>
                  )}
               </div>

               {/* Email */}
               <div className="w-full">
                  <input
                     type="text"
                     onChange={(e) => setEmail(e.target.value)}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                     placeholder="Enter your email"
                  />

                  {emailError && (
                     <p className="text-red-600 text-sm mt-1">
                        {emailError}
                     </p>
                  )}
               </div>

               <button className="self-end px-4 py-2 text-xl font-semibold bg-blue-500 text-white rounded">
                  Submit
               </button>

            </form>

         </div>
      </>
   )
}
export default App;