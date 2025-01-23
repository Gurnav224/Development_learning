import { useProduct } from "../custom_hooks/ProductContext"

const Loading = () => {
    const { loading} = useProduct()
  return (
   <>
     {loading && (
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 mx-auto"> </div>
      )}
   </>
  )
}

export default Loading
