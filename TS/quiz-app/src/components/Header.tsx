interface HeaderProp{
    title:string
}


export const Header:React.FC<HeaderProp> = ({title}) => {
  return (
    <header className="mb-8">
        <h1 className="text-4xl font-bold text-purple-700 drop-shadow-lg">{title}</h1>
    </header>
  )
}
