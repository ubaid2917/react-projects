function App() {

   function handleSubmit(e) {
      console.log('heelooo')
      e.preventDefault()
   }
   return (
      <>
         <div className="bg-black-300  h-screen flex items-center justify-center ">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center  gap-10 max-w-[500px] mx-auto w-full rounded-xl shadow-xl/20  bg-mist-400 h-1/2">
               <input type="text" className="px-4 py-3" placeholder="Enter your name" />


               <input type="text" className="px-4 py-3" placeholder="Enter your email" />
               <button className="px-4 py-2 text-xl font-semibold bg-blue-500 text-white border border-black-300 rounded ">submit</button>
            </form>
         </div>
      </>
   )
}
export default App;