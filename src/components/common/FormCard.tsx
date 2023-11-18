
const FormCard = ({children} : {children : React.ReactNode}) => {
  return (
    <section className="flex items-center justify-center h-full">
      <form className="space-y-4 lg:w-[35%] p-3 md:w-[75%] w-[95%] shadow rounded-xl border border-gray-200 flex items-center justify-center flex-col">
        {children}
      </form>
    </section>
  )
}

export default FormCard