import { useProduct } from "../custom_hooks/ProductContext"

const Error = () => {
    const { error} = useProduct()
  return (
    <>
       {error && (
        <p className="text-center text-red-500 text-lg">{error.message}</p>
      )}
    </>
  )
}

export default Error
